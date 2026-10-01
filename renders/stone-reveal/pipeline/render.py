import cv2, numpy as np, os, sys
FPS=30; N=180; HOLD_IN=15; HOLD_OUT=36; POP=7
A=cv2.imread('Aw.png').astype(np.float32); B=cv2.imread('B.webp').astype(np.float32)
m=cv2.imread('mask_stoneonly.png',0)>0; lab=np.load('stones.npy')
H,W=m.shape
f=cv2.GaussianBlur(m.astype(np.float32),(0,0),1.0)          # feathered wrap weight
ns=lab.max()
rng=np.random.default_rng(7)
# ---- reveal-time field: bottom-up per facade section + value noise + early seeds
sec=cv2.morphologyEx(m.astype(np.uint8),cv2.MORPH_CLOSE,cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(61,61)))
nsec,sl,ss,sc=cv2.connectedComponentsWithStats(sec)
base=np.zeros((H,W),np.float32)
order=sorted(range(1,nsec),key=lambda i:-ss[i,4])            # biggest section leads
for rank,i in enumerate(order):
    x,y,w,h,a=ss[i]; yy=np.arange(H,dtype=np.float32)[:,None].repeat(W,1)
    t=(y+h-yy)/max(h,1)                                       # 0 at bottom course, 1 at top
    base[sl==i]=(0.07*rank+0.85*t)[sl==i]
def vnoise(sz):
    g=rng.random((H//sz+2,W//sz+2)).astype(np.float32); return cv2.resize(g,(W+sz,H+sz),interpolation=cv2.INTER_CUBIC)[:H,:W]
noise=sum(vnoise(s)*a for s,a in ((180,.5),(90,.3),(45,.2)))
field=base+0.22*(noise-0.5)
# per-stone time = median of field; then equalise by area so revealed area tracks progress
cy=np.zeros(ns+1); cx=np.zeros(ns+1); area=np.bincount(lab.ravel(),minlength=ns+1).astype(np.float64)
yy,xx=np.nonzero(lab); ll=lab[yy,xx]
cy=np.bincount(ll,yy,ns+1)/np.maximum(area,1); cx=np.bincount(ll,xx,ns+1)/np.maximum(area,1)
t=np.array([0]+[np.median(field[lab==i]) if area[i] else 9 for i in range(1,ns+1)])
seeds=rng.choice(np.arange(1,ns+1),size=max(4,ns//90),replace=False); t[seeds]-=0.35   # isolated early stones
idx=np.argsort(t[1:])+1; cum=np.cumsum(area[idx])/area[1:].sum()
T=np.zeros(ns+1); T[idx]=cum-area[idx]/area[1:].sum()          # start time in [0,1)
np.save('stone_T.npy',T)
# ---- per-stone geometry
bbox=[None]*(ns+1)
for i in range(1,ns+1):
    ys,xs=np.where(lab==i) if area[i] else ([0],[0])
    bbox[i]=(max(0,ys.min()-6),min(H,ys.max()+7),max(0,xs.min()-6),min(W,xs.max()+7))
def ease(p): return p*p*(3-2*p)
REV=N-HOLD_IN-HOLD_OUT
os.makedirs('frames',exist_ok=True)
done=np.zeros(H,dtype=None) if False else np.zeros((H,W),np.float32)
for fi in range(N):
    p=np.clip((fi-HOLD_IN)/REV,0,1); p=0.5-0.5*np.cos(np.pi*p)        # ease in-out over the reveal
    # stone local progress: starts at T, lasts POP frames
    sp=np.clip((p-T)*REV/POP*1.0 + 0.0,0,1); sp[0]=0
    if fi>=N-HOLD_OUT: sp[:]=1; sp[0]=0
    full=sp>=1; full_px=full[lab]&m
    R=full_px.astype(np.float32)
    w=f*(1-R)
    frame=B*w[...,None]+A*(1-w[...,None])
    active=np.where((sp>0)&(sp<1))[0]
    for i in active:
        y0,y1,x0,x1=bbox[i]; s=ease(sp[i])
        msk=(lab[y0:y1,x0:x1]==i).astype(np.float32)
        sc=1.10-0.10*s; ox=cx[i]-x0; oy=cy[i]-y0-(1-s)*3   # drops ~3px into place
        M=np.float32([[sc,0,ox-sc*ox],[0,sc,(cy[i]-y0)-sc*(cy[i]-y0)-(1-s)*3]])
        patch=cv2.warpAffine(A[y0:y1,x0:x1],M,(x1-x0,y1-y0),flags=cv2.INTER_LINEAR,borderMode=cv2.BORDER_REFLECT)
        pm=cv2.warpAffine(msk,M,(x1-x0,y1-y0),flags=cv2.INTER_LINEAR)
        sh=cv2.GaussianBlur(cv2.warpAffine(pm,np.float32([[1,0,2],[0,1,3]]),(x1-x0,y1-y0)),(0,0),2.2)
        clip=f[y0:y1,x0:x1]; sh=sh*clip; pm=pm*clip
        reg=frame[y0:y1,x0:x1]
        reg*=(1-0.45*(1-s)*sh*min(1,s*3))[...,None]                  # contact shadow fades as it settles
        a=np.clip(pm*min(1,s*2.2),0,1)[...,None]
        frame[y0:y1,x0:x1]=patch*a+reg*(1-a)
    if fi==N-1: frame=A.copy()
    cv2.imwrite(f'frames/f{fi:04d}.png',np.clip(frame+0.5,0,255).astype(np.uint8)[:H-(H%2),:W-(W%2)])
print('ok',ns)

import cv2, numpy as np
A=cv2.imread('Aw.png'); B=cv2.imread('B.webp')
m=cv2.imread('mask_final3.png',0)>0; ex=cv2.imread('exclude.png',0)>0; r=cv2.imread('mask_stone.png',0)>0
k=lambda n: cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(n,n))
def sdv(img,s):
    L=cv2.cvtColor(img,cv2.COLOR_BGR2LAB)[...,0].astype(np.float32); mu=cv2.GaussianBlur(L,(0,0),s)
    return np.sqrt(np.maximum(cv2.GaussianBlur(L*L,(0,0),s)-mu*mu,0))
la=cv2.cvtColor(A,cv2.COLOR_BGR2LAB).astype(np.float32); lb=cv2.cvtColor(B,cv2.COLOR_BGR2LAB).astype(np.float32)
green=(cv2.GaussianBlur(la[...,1],(0,0),2)<122)|(cv2.GaussianBlur(lb[...,1],(0,0),2)<122); green=cv2.dilate(green.astype(np.uint8),k(5))>0
sA=sdv(A,3); sB=sdv(B,3)
tb=(sA>11)&(sB<0.6*sA)&(lb[...,0]>90)
tb=cv2.morphologyEx(tb.astype(np.uint8),cv2.MORPH_CLOSE,k(7))
tb=cv2.morphologyEx(tb,cv2.MORPH_OPEN,k(7))>0
reg=cv2.dilate(r.astype(np.uint8),k(61))>0
core=cv2.imread('core.png',0)>0
add=tb&reg&~core&~green
m4=(m|add).astype(np.uint8)
n,l,s,_=cv2.connectedComponentsWithStats(m4); m4=np.isin(l,[i for i in range(1,n) if s[i,4]>600]).astype(np.uint8)
inv=1-m4; n,l,s,_=cv2.connectedComponentsWithStats(inv); m4[np.isin(l,[i for i in range(1,n) if s[i,4]<250])&~ex]=1
m4[core]=0
cv2.imwrite('mask_stoneonly.png',m4*255); print(m.mean(),m4.mean())
f=cv2.GaussianBlur(m4.astype(np.float32),(0,0),1.0)[...,None]
Bp=np.clip(B.astype(np.float32)*f+A*(1-f),0,255).astype(np.uint8); cv2.imwrite('Bprime.png',Bp)
cv2.imwrite('dbg_Bp.png',Bp[150:820,0:876]);cv2.imwrite('dbg_Bp2.png',Bp[150:820,796:1672])

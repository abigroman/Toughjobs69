import cv2, numpy as np
P=np.load('P.npy'); A=cv2.imread('Aw.png'); B=cv2.imread('B.webp')
k=lambda r: cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(r,r))
m=(cv2.GaussianBlur(P,(0,0),1.5)>0.5).astype(np.uint8)
m=cv2.morphologyEx(m,cv2.MORPH_OPEN,k(7))
n,lab,st,_=cv2.connectedComponentsWithStats(m)
keep=np.isin(lab,[i for i in range(1,n) if st[i,4]>1500]).astype(np.uint8)
# fill tiny holes (mortar dropouts), keep windows
inv=1-keep; n,lab,st,_=cv2.connectedComponentsWithStats(inv)
small=[i for i in range(1,n) if st[i,4]<400]; keep[np.isin(lab,small)]=1
cv2.imwrite('mask_stone.png',keep*255)
print('stone frac',keep.mean())
for name,(x0,x1,y0,y1) in {'z1':(1180,1560,210,330),'z2':(100,600,480,560),'z3':(620,1000,90,330)}.items():
    a=A[y0:y1,x0:x1].copy(); e=cv2.Canny(keep[y0:y1,x0:x1]*255,50,150); a[e>0]=(0,0,255)
    cv2.imwrite(f'dbg_{name}.png',cv2.resize(a,None,fx=2,fy=2,interpolation=cv2.INTER_NEAREST))

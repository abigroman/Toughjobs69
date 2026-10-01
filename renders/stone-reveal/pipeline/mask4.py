import cv2, numpy as np
A=cv2.imread('Aw.png'); B=cv2.imread('B.webp'); r=cv2.imread('mask_stone.png',0)>0; P=np.load('P.npy')
k=lambda n: cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(n,n))
lb=cv2.cvtColor(B,cv2.COLOR_BGR2LAB).astype(np.float32); la=cv2.cvtColor(A,cv2.COLOR_BGR2LAB).astype(np.float32)
d=np.linalg.norm(cv2.GaussianBlur(la,(0,0),1.5)-cv2.GaussianBlur(lb,(0,0),1.5),axis=2)
green=(cv2.GaussianBlur(la[...,1],(0,0),2)<122)|(cv2.GaussianBlur(lb[...,1],(0,0),2)<122)
green=cv2.dilate(green.astype(np.uint8),k(5))>0
dark=(la[...,0]<60)&(lb[...,0]<60)
chB=np.hypot(lb[...,1]-128,lb[...,2]-128)
wrapish=(lb[...,0]>110)&(chB<40)
reg=cv2.dilate(r.astype(np.uint8),k(45))>0
stoneA=cv2.GaussianBlur(P,(0,0),3)>0.25
m=(reg&(stoneA|wrapish)&(d>12)&~green&~dark).astype(np.uint8)
m=cv2.morphologyEx(m,cv2.MORPH_CLOSE,k(9)); m=cv2.morphologyEx(m,cv2.MORPH_OPEN,k(5))
m&=(~green).astype(np.uint8)
n,lab,st,_=cv2.connectedComponentsWithStats(m); m=np.isin(lab,[i for i in range(1,n) if st[i,4]>600]).astype(np.uint8)
inv=1-m; n,lab,st,_=cv2.connectedComponentsWithStats(inv); m[np.isin(lab,[i for i in range(1,n) if st[i,4]<250])]=1
cv2.imwrite('mask_final.png',m*255); print(m.mean())
f=cv2.GaussianBlur(m.astype(np.float32),(0,0),1.0)[...,None]
Bp=np.clip(B*f+A*(1-f),0,255).astype(np.uint8); cv2.imwrite('Bprime.png',Bp)
cv2.imwrite('dbg_Bp.png',cv2.resize(Bp,(1254,706),interpolation=cv2.INTER_AREA))
cv2.imwrite('dbg_zz.png',cv2.resize(np.vstack([np.hstack([Bp[480:600,20:620],Bp[480:600,1040:1640]]),np.hstack([Bp[620:800,540:1140],Bp[620:800,1140:1740][:, :600] if Bp.shape[1]>=1740 else Bp[620:800,1072:1672]])]),None,fx=1.0,fy=1.0))

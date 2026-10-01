import cv2, numpy as np
A=cv2.imread('Aw.png'); B=cv2.imread('B.webp')
m=cv2.imread('mask_final2.png',0)>0; ex=cv2.imread('exclude.png',0)>0; P=np.load('P.npy'); r=cv2.imread('mask_stone.png',0)>0
la=cv2.cvtColor(A,cv2.COLOR_BGR2LAB).astype(np.float32); lb=cv2.cvtColor(B,cv2.COLOR_BGR2LAB).astype(np.float32)
k=lambda n: cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(n,n))
green=(cv2.GaussianBlur(la[...,1],(0,0),2)<122)|(cv2.GaussianBlur(lb[...,1],(0,0),2)<122); green=cv2.dilate(green.astype(np.uint8),k(5))>0
dark=(la[...,0]<60)&(lb[...,0]<60)
# stone-like in A at fine scale: textured + not trim
L=la[...,0]; mu=cv2.GaussianBlur(L,(0,0),2.5); sd=np.sqrt(np.maximum(cv2.GaussianBlur(L*L,(0,0),2.5)-mu*mu,0))
add=(cv2.GaussianBlur(P,(0,0),1.5)>0.5)&(sd>9)&~ex&~green&~dark
add=cv2.morphologyEx(add.astype(np.uint8),cv2.MORPH_CLOSE,k(7))>0
add&=~ex
m3=(m|add).astype(np.uint8)
m3=cv2.morphologyEx(m3,cv2.MORPH_OPEN,k(5))
n,l,s,_=cv2.connectedComponentsWithStats(m3); m3=np.isin(l,[i for i in range(1,n) if s[i,4]>600]).astype(np.uint8)
inv=1-m3; n,l,s,_=cv2.connectedComponentsWithStats(inv); m3[np.isin(l,[i for i in range(1,n) if s[i,4]<250])&~ex]=1
cv2.imwrite('mask_final3.png',m3*255); print(m.mean(),m3.mean())
f=cv2.GaussianBlur(m3.astype(np.float32),(0,0),1.0)[...,None]
Bp=np.clip(B*f+A*(1-f),0,255).astype(np.uint8); cv2.imwrite('Bprime.png',Bp)
cv2.imwrite('dbg_Bp.png',Bp[180:820,0:876]);cv2.imwrite('dbg_Bp2.png',Bp[180:820,800:1672])

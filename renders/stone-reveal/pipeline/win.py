import cv2, numpy as np
from scipy import ndimage as ndi
A=cv2.imread('Aw.png'); B=cv2.imread('B.webp'); m=(cv2.imread('mask_final.png',0)>0).astype(np.uint8)
la=cv2.cvtColor(A,cv2.COLOR_BGR2LAB).astype(np.float32); lb=cv2.cvtColor(B,cv2.COLOR_BGR2LAB).astype(np.float32)
dark=((la[...,0]<80)&(lb[...,0]<80)).astype(np.uint8)
core=cv2.morphologyEx(dark,cv2.MORPH_CLOSE,cv2.getStructuringElement(cv2.MORPH_RECT,(31,31)))
core=ndi.binary_fill_holes(core).astype(np.uint8)
core=cv2.morphologyEx(core,cv2.MORPH_OPEN,cv2.getStructuringElement(cv2.MORPH_RECT,(5,5)))
L=la[...,0]; mu=cv2.GaussianBlur(L,(0,0),2); sd=np.sqrt(np.maximum(cv2.GaussianBlur(L*L,(0,0),2)-mu*mu,0))
ch=np.hypot(la[...,1]-128,la[...,2]-128)
trim=((L>165)&(sd<11)&(ch<18)).astype(np.uint8)
ring=cv2.dilate(core,cv2.getStructuringElement(cv2.MORPH_RECT,(27,27)))
# trim pixels in the ring, connected outward from the core
n,cl,cs,_=cv2.connectedComponentsWithStats(core)
bA=la[...,2]
big=np.isin(cl,[i for i in range(1,n) if cs[i,2]>40 and cs[i,3]>40 and bA[cl==i].mean()>138 and m[cl==i].mean()<0.5 and cv2.dilate((cl==i).astype(np.uint8),np.ones((25,25),np.uint8)).astype(bool)[m>0].any()]).astype(np.uint8)
print('big comps', [ (i,int(bA[cl==i].mean())) for i in range(1,n) if cs[i,2]>40 and cs[i,3]>40])
ex=np.maximum(cv2.dilate(core,np.ones((5,5),np.uint8)),cv2.dilate(big,cv2.getStructuringElement(cv2.MORPH_RECT,(21,21))))
m2=m&(1-ex)
k=cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(5,5)); m2=cv2.morphologyEx(m2,cv2.MORPH_OPEN,k)
n,l2,s2,_=cv2.connectedComponentsWithStats(m2); m2=np.isin(l2,[i for i in range(1,n) if s2[i,4]>600]).astype(np.uint8)
cv2.imwrite('core.png',cv2.dilate(core,np.ones((5,5),np.uint8))*255); cv2.imwrite('mask_final2.png',m2*255); cv2.imwrite('exclude.png',ex*255); print(m.mean(),m2.mean())
o=A.copy();e=ex>0;o[e]=(o[e]*0.3+np.array([0,0,180])*0.7).astype(np.uint8);cv2.imwrite('dbg_ex.png',cv2.resize(o,(1254,706),interpolation=cv2.INTER_AREA))

import cv2, numpy as np
from skimage.filters import sato
from skimage.segmentation import watershed, find_boundaries
from skimage.feature import peak_local_max
A=cv2.imread('Aw.png'); m=cv2.imread('mask_stoneonly.png',0)>0
ys,xs=np.where(m); y0,y1,x0,x1=ys.min()-4,ys.max()+5,xs.min()-4,xs.max()+5
L=cv2.cvtColor(A,cv2.COLOR_BGR2LAB)[...,0].astype(np.float32)/255.
sub=L[y0:y1,x0:x1]
rid=sato(sub,sigmas=[1.0,1.6],black_ridges=False)
rid=rid/np.percentile(rid[m[y0:y1,x0:x1]],99)
R=np.zeros_like(L); R[y0:y1,x0:x1]=rid
np.save('ridge.npy',R)
body=((R<0.25)&m).astype(np.uint8)
dist=cv2.distanceTransform(body,cv2.DIST_L2,5)
dist=cv2.GaussianBlur(dist,(0,0),1.0)
pk=peak_local_max(dist,min_distance=5,threshold_abs=2.0,labels=m.astype(int))
mk=np.zeros(m.shape,np.int32); mk[pk[:,0],pk[:,1]]=np.arange(1,len(pk)+1)
lab=watershed(R+0.02*(dist.max()-dist)/max(dist.max(),1),mk,mask=m)
sizes=np.bincount(lab.ravel())
# merge slivers (<60px) into largest neighbour
from skimage.segmentation import relabel_sequential
for i in np.where((sizes<60)&(sizes>0))[0]:
    if i==0: continue
    reg=(lab==i).astype(np.uint8); ring=cv2.dilate(reg,np.ones((3,3),np.uint8)).astype(bool)&(lab!=i)&(lab>0)
    if ring.any():
        v,c=np.unique(lab[ring],return_counts=True); lab[reg>0]=v[c.argmax()]
lab,_,_=relabel_sequential(lab)
np.save('stones.npy',lab.astype(np.int32))
s=np.bincount(lab.ravel())[1:]
print('stones',lab.max(),'median px',np.median(s),'p10',np.percentile(s,10),'p90',np.percentile(s,90))
vis=A.copy(); vis[find_boundaries(lab,mode='inner')&m]=(0,0,255)
cv2.imwrite('dbg_seg.png',cv2.resize(vis[230:560,1150:1530],None,fx=2,fy=2,interpolation=cv2.INTER_NEAREST))

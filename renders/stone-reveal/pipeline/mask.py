import cv2, numpy as np
B=cv2.imread('B.webp').astype(np.float32); A=cv2.imread('Aw.png').astype(np.float32)
labA=cv2.cvtColor(A.astype(np.uint8),cv2.COLOR_BGR2LAB).astype(np.float32)
labB=cv2.cvtColor(B.astype(np.uint8),cv2.COLOR_BGR2LAB).astype(np.float32)
d=np.linalg.norm(cv2.GaussianBlur(labA,(0,0),3)-cv2.GaussianBlur(labB,(0,0),3),axis=2)
gA=labA[...,0]; m=cv2.GaussianBlur(gA,(0,0),4); tex=np.sqrt(np.maximum(cv2.GaussianBlur(gA*gA,(0,0),4)-m*m,0))
# chroma: stone warm (b* > 128)
warm=cv2.GaussianBlur(labA[...,2],(0,0),4)-128
cv2.imwrite('dbg_d.png',np.clip(d*4,0,255).astype(np.uint8))
cv2.imwrite('dbg_tex.png',np.clip(tex*6,0,255).astype(np.uint8))
cv2.imwrite('dbg_warm.png',np.clip(warm*15,0,255).astype(np.uint8))
np.save('feat.npy',np.stack([d,tex,warm]))

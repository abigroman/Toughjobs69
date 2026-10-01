import cv2, numpy as np
from sklearn.ensemble import RandomForestClassifier
A=cv2.imread('Aw.png'); B=cv2.imread('B.webp')
H,W=B.shape[:2]
def feats(img):
    lab=cv2.cvtColor(img,cv2.COLOR_BGR2LAB).astype(np.float32)
    L=lab[...,0]; F=[]
    gx=cv2.Sobel(L,cv2.CV_32F,1,0,ksize=3); gy=cv2.Sobel(L,cv2.CV_32F,0,1,ksize=3)
    for s in (2,5,10):
        b=lambda x: cv2.GaussianBlur(x,(0,0),s)
        for c in range(3): F.append(b(lab[...,c]))
        m=b(L); F.append(np.sqrt(np.maximum(b(L*L)-m*m,0)))
        ex=b(gx*gx); ey=b(gy*gy); F+= [np.sqrt(ex),np.sqrt(ey),(ey-ex)/(ex+ey+1)]
    return F
F=np.stack(feats(A)+feats(B)+[np.mgrid[0:H,0:W][0]/H],-1)
pos=[(667,727,307,440),(667,933,447,513),(693,933,233,293),(1213,1260,307,573),(1467,1520,307,640),(1227,1520,253,287),(173,560,527,587),(33,60,560,773),(147,187,627,787),(660,720,533,720)]
neg=[(267,333,267,440),(413,507,320,440),(1280,1467,80,160),(507,627,240,307),(933,1160,187,253),(1533,1600,400,587),(213,507,640,787),(747,867,320,413),(0,260,0,130),(133,400,827,933),(440,933,747,880),(960,1200,413,480),(960,1200,533,747),(1240,1460,690,760),(1700//1,1671,0,1)]
X=[];y=[]
rng=np.random.default_rng(0)
for lst,lab in ((pos,1),(neg,0)):
    for x0,x1,y0,y1 in lst:
        p=F[y0:y1,x0:x1].reshape(-1,F.shape[-1])
        if len(p)==0: continue
        p=p[rng.choice(len(p),min(len(p),1500),replace=False)]
        X.append(p); y+= [lab]*len(p)
X=np.vstack(X); y=np.array(y)
rf=RandomForestClassifier(120,max_depth=14,n_jobs=-1,random_state=0).fit(X,y)
P=rf.predict_proba(F.reshape(-1,F.shape[-1]))[:,1].reshape(H,W).astype(np.float32)
np.save('P.npy',P)
cv2.imwrite('P.png',(P*255).astype(np.uint8))

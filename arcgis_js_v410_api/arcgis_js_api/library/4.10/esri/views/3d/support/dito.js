// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix"],function(ga,V,a){function H(c,e,b,f,d,g){if(!(1E-6>a.vec3.squaredLength(e)))for(a.vec3.cross(W,b,e),a.vec3.cross(X,f,e),a.vec3.cross(Y,d,e),r(c,e,h),y[1]=h[0],I[1]=h[1],R[1]=I[1]-y[1],b=[b,f,d],f=[W,X,Y],d=0;3>d;++d){r(c,b[d],h);y[0]=h[0];I[0]=h[1];r(c,f[d],h);y[2]=h[0];I[2]=h[1];R[0]=I[0]-y[0];R[2]=I[2]-y[2];var q=U(R);q<g.quality&&(a.vec3.copy(g.b0,b[d]),a.vec3.copy(g.b1,e),a.vec3.copy(g.b2,f[d]),g.quality=q)}}function r(a,
e,b){var c=a.data,d=a.offsetIdx;a=a.strideIdx;b[0]=Number.POSITIVE_INFINITY;for(b[1]=Number.NEGATIVE_INFINITY;d<c.length;d+=a){var g=c[d]*e[0]+c[d+1]*e[1]+c[d+2]*e[2];b[0]=Math.min(b[0],g);b[1]=Math.max(b[1],g)}}function Z(c,e,b){a.vec3.copy(b.center,c);a.vec3.scale(b.halfSize,e,.5);a.quat.identity(b.quaternion)}function aa(a,e,b,f,d,g){r(a,e,h);d[0]=h[0];g[0]=h[1];r(a,b,h);d[1]=h[0];g[1]=h[1];r(a,f,h);d[2]=h[0];g[2]=h[1]}function ba(c,e,b,f,d,g,h){n[0]=c[0];n[1]=c[1];n[2]=c[2];n[3]=e[0];n[4]=e[1];
n[5]=e[2];n[6]=b[0];n[7]=b[1];n[8]=b[2];a.quat.fromMat3(h.quaternion,n);a.vec3.add(J,f,d);a.vec3.scale(J,J,.5);a.vec3.scale(h.center,c,J[0]);a.vec3.scale(S,e,J[1]);a.vec3.add(h.center,h.center,S);a.vec3.scale(S,b,J[2]);a.vec3.add(h.center,h.center,S);a.vec3.scale(h.halfSize,g,.5)}function U(a){return a[0]*a[1]+a[0]*a[2]+a[1]*a[2]}Object.defineProperty(V,"__esModule",{value:!0});var N=a.vec3f64.create(),T=a.vec3f64.create();V.computeOBB=function(c,e){var b=c.data.length/c.strideIdx;if(!(0>=b)){var f=
new da(c);a.vec3.add(N,f.minProj,f.maxProj);a.vec3.scale(N,N,.5);a.vec3.subtract(T,f.maxProj,f.minProj);var d=U(T),g=new ea;g.quality=d;14>b&&(c={data:new Float64Array(f.buffer,112,42),size:3,offsetIdx:0,strideIdx:3});var q=a.vec3f64.create(),n=a.vec3f64.create(),r=a.vec3f64.create(),b=a.vec3f64.create(),A=a.vec3f64.create(),D=a.vec3f64.create(),t=a.vec3f64.create(),m;m=c;for(var B=a.vec3.squaredDistance(f.maxVert[0],f.minVert[0]),p=0,k=1;7>k;++k){var u=a.vec3.squaredDistance(f.maxVert[k],f.minVert[k]);
u>B&&(B=u,p=k)}a.vec3.copy(q,f.minVert[p]);a.vec3.copy(n,f.maxVert[p]);if(1E-6>a.vec3.squaredDistance(q,n))m=1;else{a.vec3.subtract(b,q,n);a.vec3.normalize(b,b);f=m.data;B=m.strideIdx;p=Number.NEGATIVE_INFINITY;k=0;for(u=m.offsetIdx;u<f.length;u+=B){a.vec3.set(z,f[u]-q[0],f[u+1]-q[1],f[u+2]-q[2]);var l=b[0]*z[0]+b[1]*z[1]+b[2]*z[2],l=z[0]*z[0]+z[1]*z[1]+z[2]*z[2]-l*l/(b[0]*b[0]+b[1]*b[1]+b[2]*b[2]);l>p&&(p=l,k=u)}a.vec3.set(r,f[k],f[k+1],f[k+2]);1E-6>p?m=2:(a.vec3.subtract(A,n,r),a.vec3.normalize(A,
A),a.vec3.subtract(D,r,q),a.vec3.normalize(D,D),a.vec3.cross(t,A,b),a.vec3.normalize(t,t),H(m,t,b,A,D,g),m=0)}switch(m){case 1:Z(N,T,e);return;case 2:d=c;a.vec3.copy(C,b);Math.abs(b[0])>Math.abs(b[1])&&Math.abs(b[0])>Math.abs(b[2])?C[0]=0:Math.abs(b[1])>Math.abs(b[2])?C[1]=0:C[2]=0;1E-6>a.vec3.squaredLength(C)&&(C[0]=C[1]=C[2]=1);a.vec3.cross(K,b,C);a.vec3.normalize(K,K);a.vec3.cross(O,b,K);a.vec3.normalize(O,O);aa(d,b,K,O,L,M);a.vec3.subtract(ca,M,L);ba(b,K,O,L,M,ca,e);return}m=c;f=P;B=Q;p=h;k=m.data;
l=m.offsetIdx;u=m.strideIdx;a.vec3.set(B,k[l],k[l+1],k[l+2]);a.vec3.copy(f,B);p[0]=a.vec3.dot(fa,t);p[1]=p[0];for(l+=u;l<k.length;l+=u){var y=k[l]*t[0]+k[l+1]*t[1]+k[l+2]*t[2];y<p[0]&&(p[0]=y,a.vec3.set(B,k[l],k[l+1],k[l+2]));y>p[1]&&(p[1]=y,a.vec3.set(f,k[l],k[l+1],k[l+2]))}t=a.vec3.dot(q,t);h[1]-1E-6<=t&&(f[0]=void 0);h[0]+1E-6>=t&&(B[0]=void 0);void 0!==P[0]&&(a.vec3.subtract(v,P,q),a.vec3.normalize(v,v),a.vec3.subtract(w,P,n),a.vec3.normalize(w,w),a.vec3.subtract(x,P,r),a.vec3.normalize(x,x),
a.vec3.cross(E,w,b),a.vec3.normalize(E,E),a.vec3.cross(F,x,A),a.vec3.normalize(F,F),a.vec3.cross(G,v,D),a.vec3.normalize(G,G),H(m,E,b,w,v,g),H(m,F,A,x,w,g),H(m,G,D,v,x,g));void 0!==Q[0]&&(a.vec3.subtract(v,Q,q),a.vec3.normalize(v,v),a.vec3.subtract(w,Q,n),a.vec3.normalize(w,w),a.vec3.subtract(x,Q,r),a.vec3.normalize(x,x),a.vec3.cross(E,w,b),a.vec3.normalize(E,E),a.vec3.cross(F,x,A),a.vec3.normalize(F,F),a.vec3.cross(G,v,D),a.vec3.normalize(G,G),H(m,E,b,w,v,g),H(m,F,A,x,w,g),H(m,G,D,v,x,g));aa(c,g.b0,
g.b1,g.b2,L,M);c=a.vec3f64.create();a.vec3.subtract(c,M,L);g.quality=U(c);g.quality<d?ba(g.b0,g.b1,g.b2,L,M,c,e):Z(N,T,e)}};var P=a.vec3f64.create(),Q=a.vec3f64.create(),v=a.vec3f64.create(),w=a.vec3f64.create(),x=a.vec3f64.create(),E=a.vec3f64.create(),F=a.vec3f64.create(),G=a.vec3f64.create(),z=a.vec3f64.create(),h=a.vec2f64.create(),W=a.vec3f64.create(),X=a.vec3f64.create(),Y=a.vec3f64.create(),I=a.vec3f64.create(),y=a.vec3f64.create(),R=a.vec3f64.create(),fa=a.vec3f64.create(),C=a.vec3f64.create(),
K=a.vec3f64.create(),O=a.vec3f64.create(),L=a.vec3f64.create(),M=a.vec3f64.create(),ca=a.vec3f64.create(),S=a.vec3f64.create(),n=a.mat3f32.create(),J=a.vec3f64.create(),da=function(){return function(c){this.minVert=Array(7);this.maxVert=Array(7);this.buffer=new ArrayBuffer(448);var e=0;this.minProj=new Float64Array(this.buffer,e,7);e+=56;this.maxProj=new Float64Array(this.buffer,e,7);for(var e=e+56,b=0;7>b;++b)this.minVert[b]=a.vec3f64.createView(this.buffer,e),e+=24;for(b=0;7>b;++b)this.maxVert[b]=
a.vec3f64.createView(this.buffer,e),e+=24;for(b=0;7>b;++b)this.minProj[b]=Number.POSITIVE_INFINITY,this.maxProj[b]=Number.NEGATIVE_INFINITY;for(var e=Array(7),f=Array(7),d=c.data,g=c.strideIdx,b=c.offsetIdx;b<d.length;b+=g)c=d[b],c<this.minProj[0]&&(this.minProj[0]=c,e[0]=b),c>this.maxProj[0]&&(this.maxProj[0]=c,f[0]=b),c=d[b+1],c<this.minProj[1]&&(this.minProj[1]=c,e[1]=b),c>this.maxProj[1]&&(this.maxProj[1]=c,f[1]=b),c=d[b+2],c<this.minProj[2]&&(this.minProj[2]=c,e[2]=b),c>this.maxProj[2]&&(this.maxProj[2]=
c,f[2]=b),c=d[b]+d[b+1]+d[b+2],c<this.minProj[3]&&(this.minProj[3]=c,e[3]=b),c>this.maxProj[3]&&(this.maxProj[3]=c,f[3]=b),c=d[b]+d[b+1]-d[b+2],c<this.minProj[4]&&(this.minProj[4]=c,e[4]=b),c>this.maxProj[4]&&(this.maxProj[4]=c,f[4]=b),c=d[b]-d[b+1]+d[b+2],c<this.minProj[5]&&(this.minProj[5]=c,e[5]=b),c>this.maxProj[5]&&(this.maxProj[5]=c,f[5]=b),c=d[b]-d[b+1]-d[b+2],c<this.minProj[6]&&(this.minProj[6]=c,e[6]=b),c>this.maxProj[6]&&(this.maxProj[6]=c,f[6]=b);for(b=0;7>b;++b)c=e[b],a.vec3.set(this.minVert[b],
d[c],d[c+1],d[c+2]),c=f[b],a.vec3.set(this.maxVert[b],d[c],d[c+1],d[c+2])}}(),ea=function(){return function(){this.b0=a.vec3f64.fromValues(1,0,0);this.b1=a.vec3f64.fromValues(0,1,0);this.b2=a.vec3f64.fromValues(0,0,1);this.quality=0}}()});
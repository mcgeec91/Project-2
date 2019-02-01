// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/libs/gl-matrix-2/gl-matrix ../../definitions ../../enums ../../number ../../TextShaping ../../Utils ../../collisions/Metric ./GlyphGroup ./util ./WGLTextTemplate ../../util/vvFlagUtils ../../../../../3d/support/mathUtils ../../../../../vectorTiles/GeometryUtils".split(" "),function(B,M,R,S,T,w,C,E,H,I,U,N,F,D,V,W,K,X){function Y(w){switch(w){case "above-left":return[-1,
-1];case "above-center":case "above-along":return[0,-1];case "above-right":return[1,-1];case "center-left":return[-1,0];case "center-center":case "center-along":return[0,0];case "center-right":return[1,0];case "below-left":return[-1,1];case "below-center":case "below-along":return[0,1];case "below-right":return[1,1];case "always-horizontal":return[0,0];default:L("Found invalid placement type "+w)}}Object.defineProperty(M,"__esModule",{value:!0});var Z=T.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),
O=H.i8888to32(255,255,255,255),P=w.vec2f32.create(),aa=w.mat2df32.create(),Q={xOffset:0,yOffset:0,width:0,height:0},L=function(w,h){void 0===h&&(h="mapview-labeling");return Z.error(S(h,w))};B=function(B){function h(b,e,a,f,g,c){b=B.call(this,b,e,a)||this;b.geometryType=E.WGLGeometryType.LABEL;b._refTemplate=Q;a:switch(f){case "above-along":case "below-along":case "center-along":e=1;break a;default:e=0}var r=Y(f);f=r[0];r=r[1];b._justify=(-1*f+1)/2;b._xAlignD=f;b._yAlignD=r;b._xPlacementD=f;b._yPlacementD=
r;b._minZoom=g;b._maxZoom=c;b.vvFlags|=e*E.WGLVVFlag.ROTATION;a=a.font.decoration.toLowerCase();"underline"===a?b._decorationTop=6:"line-through"===a&&(b._decorationTop=-5);return b}R(h,B);h.fromLabelClass=function(b,e,a,f,g){f=a.symbol;var c;c=!!a.minScale&&g.scaleToZoom(a.minScale)||0;c=K.clamp(c,0,25.5);g=!!a.maxScale&&g.scaleToZoom(a.maxScale)||255;g=K.clamp(g,0,25.5);return new h(b,e,f,a.labelPlacement,c,g)};h.prototype.bindTextInfo=function(b,e,a){b=this._computeShaping(b,this._justify).getShaping(e,
a);isNaN(this._decorationTop)||I.addDecoration(b,this._decorationTop);this._shapedGlyphs=b;this._shapedBox=I.getBox(b)};h.prototype._computeShaping=function(b,e){return new I([b],C.TEXT_MAX_WIDTH,C.TEXT_LINE_HEIGHT,C.TEXT_SPACING,[0,0],.5,.5,e)};Object.defineProperty(h.prototype,"bounds",{get:function(){return this._bounds},enumerable:!0,configurable:!0});h.prototype.bindReferenceTemplate=function(b){this._refTemplate=b||Q};h.prototype._placeGlyphs=function(b,e,a,f){var g=this._size,c=this._haloSize,
r=this._shapedBox,q=this._shapedGlyphs,A=this._computeGlyphTransform(r);if("esriGeometryPolyline"!==b)for(var p=0;p<a.length;p++)for(var t=a[p],l=0,d=q;l<d.length;l++){var m=d[l],k=this._materialStore.createGlyphMaterial(m.glyphMosaicItem,this.geometryType,this.vvFlags);t.place(m,b,e,A,k,g,c,r,f,this._minZoom,this._maxZoom)}else for(p=0;p<a.length;p++)for(var t=a[p],k=m=t.order,l=k-(k-1)/2-1,d=l-(l-1)/2-1,n=d-(d-1)/2-1,m=-1===m?0:k%2?l%2?d%2?n%2?0:f-3.1:f-2.1:f-1.1:f-.1,l=Math.max(f+K.log2((this._shapedBox.width*
this._scale+48)/t.pathLen),Math.max(m,this._minZoom)),d=0,n=q;d<n.length;d++)m=n[d],k=this._materialStore.createGlyphMaterial(m.glyphMosaicItem,this.geometryType,this.vvFlags),t.place(m,b,e,A,k,g,c,r,f,l,this._maxZoom)};h.prototype.writeMesh=function(b,e,a,f,g,c,r,q,A){var p=this,t=this._computeAnchors(a,g);if(t.length&&this._shapedGlyphs.length)if(this._placeGlyphs(a,g,t,q),"esriGeometryPolyline"!==a){a=t[0];g=this._computeGlyphTransform(this._shapedBox);g=this._createBounds(this._shapedBox,g);c=
a.glyphs.get(0);var l=c[0];q=l.anchorX;var d=l.anchorY,m=Math.floor(10*l.minZoom),l=Math.floor(10*l.maxZoom),k=b.length;c.forEach(function(b){b.minZoom=25.5;b.maxZoom=25.5});this._writeVertices(b,e,f,r,c,m,l);c=new N.default(f,{from:k,count:b.length-k},q,d,m);q=Math.max(this._refTemplate.height,this._refTemplate.width);d=W.getSizeFlagsMask(this.vvFlags,!1);this.vvFlags&d?c.setVV(H.toFloat32(r[E.VVType.SIZE]),q,this._xPlacementD,this._yPlacementD):(c.offsetX=(q/2+C.COLLISION_PLACEMENT_PADDING)*this._xPlacementD,
c.offsetY=(q/2+C.COLLISION_PLACEMENT_PADDING)*this._yPlacementD);c.bounds=g;A.push(c);a.clear()}else{a=function(a){var c=t[a],d=c.x,g=c.y;a=b.length;var l=new N.default(f,{from:a,count:-1},d,g,25.5);c.glyphs.forEach(function(a){for(var m=0;m<a.length;m++){var k=a[m];k.minZoom=Math.max(c.minZoom,k.minZoom);if(k.bounds){var n=k.anchorY-g;k.bounds.center[0]+=k.anchorX-d;k.bounds.center[1]+=n;l.add(k.bounds)}}l.bounds&&p._writeHalos(b,e,f,r,a)});c.glyphs.forEach(function(a){l.bounds&&p._writeText(b,e,
f,r,a)});l.range.count=b.length-a;l.bounds&&A.push(l);c.clear()};for(g=0;g<t.length;g++)a(g);this._computedGlyphs=[]}};h.prototype._outsideTile=function(b,e){return 0>b||512<=b||0>e||512<=e};h.prototype._smoothVertices=function(b,e){if(!(0>=e)){var a=b.length;if(!(3>a)){var f=[],g=0;f.push(0);for(var c=1;c<a;c++)g+=D.dist(b[c],b[c-1]),f.push(g);e=Math.min(e,.2*g);g=[];g.push(b[0][0]);g.push(b[0][1]);var r=b[a-1][0],q=b[a-1][1],c=D.sub([0,0],b[0],b[1]);D.normalize(c);b[0][0]+=e*c[0];b[0][1]+=e*c[1];
D.sub(c,b[a-1],b[a-2]);D.normalize(c);b[a-1][0]+=e*c[0];b[a-1][1]+=e*c[1];for(c=1;c<a;c++)f[c]+=e;f[a-1]+=e;for(var A=.5*e,c=1;c<a-1;c++){for(var p=0,t=0,l=0,d=c-1;0<=d&&!(f[d+1]<f[c]-A);d--){var m=A+f[d+1]-f[c],k=f[d+1]-f[d],n=f[c]-f[d]<A?1:m/k;if(1E-6>Math.abs(n))break;var h=n*n,w=n*m-.5*h*k,v=n*k/e,u=b[d+1],x=b[d][0]-u[0],y=b[d][1]-u[1],p=p+v/w*(u[0]*n*m+.5*h*(m*x-k*u[0])-h*n*k*x/3),t=t+v/w*(u[1]*n*m+.5*h*(m*y-k*u[1])-h*n*k*y/3),l=l+v}for(d=c+1;d<a&&!(f[d-1]>f[c]+A);d++){m=A-f[d-1]+f[c];k=f[d]-
f[d-1];n=f[d]-f[c]<A?1:m/k;if(1E-6>Math.abs(n))break;h=n*n;w=n*m-.5*h*k;v=n*k/e;u=b[d-1];x=b[d][0]-u[0];y=b[d][1]-u[1];p+=v/w*(u[0]*n*m+.5*h*(m*x-k*u[0])-h*n*k*x/3);t+=v/w*(u[1]*n*m+.5*h*(m*y-k*u[1])-h*n*k*y/3);l+=v}g.push(p/l);g.push(t/l)}g.push(r);g.push(q);for(d=c=0;c<a;c++)b[c][0]=g[d++],b[c][1]=g[d++]}}};h.prototype._computeLineAnchors=function(b,e,a){e=e.paths;var f=this._scale*this._shapedBox.width;a=f/2+a;for(var f=f/2+16,g=this._shapedBox.width*this._scale,c=0;c<e.length;c++){var r=e[c],
q=[];q.push(r[0]);for(var h=1;h<r.length;h++){var p=q[h-1],t=p[0],p=p[1],t=t+r[h][0],p=p+r[h][1];q.push([t,p])}this._smoothVertices(q,g);r=[];r.push(q[0]);for(h=1;h<q.length;h++){var p=q[h-1],l=q[h],t=Math.round(l[0]-p[0]),p=Math.round(l[1]-p[1]);r.push([t,p])}e[c]=r;q=this._getPathLength(r);if(!(q<2*f))for(var h=q/2,d=0,l=r[0][0],m=r[0][1],k=1;k<r.length;k++){var t=r[k][0],p=r[k][1],n=Math.sqrt(t*t+p*p),d=d+n;if(0<=d-h){var w=d-h,J=n-w,v=J/n,u=l+t*v,x=m+p*v;this._outsideTile(u,x)||(d=new F.default(u,
x,v,c,k,l,m,n,q,-1),b.push(d));for(var y=-1,x=0,x=J-a;0<=x;x-=a){var v=x/n,u=l+t*v,z=m+p*v;y++;this._outsideTile(u,z)||(d=new F.default(u,z,v,c,k,l,m,n,q,y),b.push(d))}d=x+a;x=n-w;v=l;u=m;for(z=k-1;0!==z;z--){var B=r[z][0],C=r[z][1],G=Math.sqrt(B*B+C*C);if(d+G>=a){for(var D=d=a-d;D<G;D+=a){var E=D/G,H=v-B*E,I=u-C*E;y++;(d=D+x+f<h)&&!this._outsideTile(H,I)&&(d=new F.default(H,I,1-E,c,z,v-B,u-C,G,q,y),b.push(d))}d=G-(D-a)}else d+=G;x+=G;v-=B;u-=C}y=-1;for(x=J+a;x<=n;x+=a)v=x/n,u=l+t*v,J=m+p*v,y++,this._outsideTile(u,
J)||(d=new F.default(u,J,v,c,k,l,m,n,q,y),b.push(d));v=l+t;u=m+p;d=n-(x-a);x=w;for(z=k+1;z<r.length;z++){t=r[z][0];p=r[z][1];l=Math.sqrt(t*t+p*p);if(d+l>=a){for(m=d=a-d;m<l;m+=a)k=m/l,n=v+t*k,w=u+p*k,y++,(d=m+x+f<h)&&!this._outsideTile(n,w)&&(d=new F.default(n,w,k,c,z,v,u,l,q,y),b.push(d));d=l-(m-a)}else d+=l;x+=l;v+=t;u+=p}break}l+=t;m+=p}}return b};h.prototype._computeAnchors=function(b,e){var a=[];switch(b){case "esriGeometryPoint":return e=e.geometry,b=e.x,e=e.y,b=new F.default(b,e),a.push(b),
a;case "esriGeometryPolygon":if(e.centroid)return e=e.centroid,b=e.x,e=e.y,b=new F.default(b,e),a.push(b),a;L("Non-centroid polygon anchor placement not supported");break;case "esriGeometryPolyline":return this._computeLineAnchors(a,e.geometry,376);default:return L("Unable to handle geometryType: "+b),a}};h.prototype._getPathLength=function(b){for(var e=0,a=1;a<b.length;a++)var f=b[a][0],g=b[a][1],e=e+Math.sqrt(f*f+g*g);return e};h.prototype._computeGlyphTransform=function(b){var e=this._scale,a=
this._angle*X.C_DEG_TO_RAD,f=b.width/2,g=b.height/2,f=this._xAlignD*f*e+(this._xOffset+this._refTemplate.xOffset)+(b.x+f);b=this._yAlignD*g*e-(this._yOffset+this._refTemplate.yOffset)-(b.y+g);g=w.mat2d.identity(aa);w.mat2d.translate(g,g,w.vec2.set(P,f,b));w.mat2d.scale(g,g,w.vec2.set(P,e,e));w.mat2d.rotate(g,g,a);return g};h.prototype._getOffset=function(b){return b.length/(U.C_LABEL_VERTEX_DEF[0].strideInBytes/4)};h.prototype._writeVertex=function(b,e,a,f,g,c,h,q){a=e.get("geometry");h=e.get("visibility");
e=e.get("visibilityRange");q=q&&q[E.VVType.SIZE]||1;this._refSymbolAndPlacementOffset=H.i8888to32(c.angle,Math.min(Math.floor(Math.max(this._refTemplate.width,this._refTemplate.height)),255),this._xPlacementD+1,this._yPlacementD+1);a.push(f);a.push(g);a.push(c.vertexOffsetUpperLeft);a.push(c.texFontSizeUpperLeft);a.push(this._refSymbolAndPlacementOffset);a.push(q);h.push(255);a.push(f);a.push(g);a.push(c.vertexOffsetUpperRight);a.push(c.texFontSizeUpperRight);a.push(this._refSymbolAndPlacementOffset);
a.push(q);h.push(255);a.push(f);a.push(g);a.push(c.vertexOffsetLowerLeft);a.push(c.texFontSizeLowerLeft);a.push(this._refSymbolAndPlacementOffset);a.push(q);h.push(255);a.push(f);a.push(g);a.push(c.vertexOffsetLowerRight);a.push(c.texFontSizeLowerRight);a.push(this._refSymbolAndPlacementOffset);a.push(q);h.push(255);e.push(O);e.push(O);b.vertexCount+=4};return h}(V.default);M.default=B});
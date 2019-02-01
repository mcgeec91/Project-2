// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Logger ../../../../../../core/screenUtils ../../../../../../core/libs/earcut/earcut ../../color ../../definitions ../../enums ../../enums ../../number ../../TileClipper ../../WGLDisplayRecord ../Tesselator ./WGLMeshTemplate".split(" "),function(w,G,I,J,D,K,L,E,F,M,m,N,H,O,P){Object.defineProperty(G,"__esModule",{value:!0});var Q=J.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLFillTemplate"),v=[],
B=[];w=function(w){function l(d,a,c,e,b,g,h,f,t){var k=w.call(this)||this;k.fillColor=e;k.tl=b;k.br=g;k.aux1=h;k.aux2=f;k.isBFS=t;k.geometryType=F.WGLGeometryType.FILL;k.useLibtess=!0;k._tesselator=new O.default;k.vvFlags=a;k._materialStore=d;k.materialId=k._materialStore.createSpriteMaterial(c,k.geometryType,a);k._tileClipper=new N.TileClipper(0,0,0,1,8);k._tileClipper.setExtent(E.TILE_SIZE);return k}I(l,w);l.fromSimpleFill=function(d,a,c,e,b,g){void 0===g&&(g=!1);c=(b=c.color)&&"none"!==c.style&&
L.premultiplyAlphaRGBA(b)||0;if(!e)return new l(d,a,null,c,0,0,0,0,g);b=e.rect;var h=b.x+1,f=b.y+1,t=b.x+1+e.width,k=b.y+1+e.height;b=m.i1616to32(h,f);var C=m.i1616to32(t,k),h=m.i8888to32(m.nextHighestPowerOfTwo(t-h),m.nextHighestPowerOfTwo(k-f),0,0),f=m.i1616to32(128,128);return new l(d,a,e,c,b,C,h,f,g)};l.fromPictureFill=function(d,a,c,e,b,g){void 0===g&&(g=!1);b=E.PICTURE_FILL_COLOR;var h=e.rect,f=h.x+1,t=h.y+1,h=f+e.width,k=t+e.height,f=m.i1616to32(f,t),h=m.i1616to32(h,k),k=m.nextHighestPowerOfTwo(D.pt2px(c.width));
255<k&&(k=255);t=m.nextHighestPowerOfTwo(D.pt2px(c.height));255<t&&(t=255);var C=D.pt2px(c.xoffset)+128;255<C&&(C=255);var q=D.pt2px(-c.yoffset)+128;255<q&&(q=255);k=m.i8888to32(k,t,C,q);c=m.i1616to32(128*c.xscale,128*c.yscale);return new l(d,a,e,b,f,h,k,c,g)};l.prototype.writeMesh=function(d,a,c,e,b,g,h){v.length=0;if(this.vvFlags&M.WGLVVFlag.COLOR||0!==this.fillColor)if("esriGeometryPolygon"!==c)Q.error("Unable to handle geometryType: "+c);else{var f=b.geometry,f=(b=this._isClippingRequired(f))?
this._clip(f,!this.useLibtess):f.rings;return this.useLibtess?this._writeMeshLibtess(d,a,c,e,f,b,g,h):this._writeMeshEarcut(d,a,c,e,f,b,g,h)}};l.prototype._isClippingRequired=function(d){var a=E.TILE_SIZE+8,c=0;for(d=d.rings;c<d.length;c++){var e=d[c],b=e.length;if(!(3>b)){var g=e[0][0],h=e[0][1];if(-8>g||g>a||-8>h||h>a)return!0;for(var f=1;f<b;++f)if(g+=e[f][0],h+=e[f][1],-8>g||g>a||-8>h||h>a)return!0}}return!1};l.prototype._clip=function(d,a){var c;this._tileClipper.reset(3);for(var e=0,b=d.rings;e<
b.length;e++){var g=b[e],h=g.length;if(!(3>h)){d=g[0][0];c=g[0][1];this._tileClipper.moveTo(d,c);for(var f=1;f<h;++f)d+=g[f][0],c+=g[f][1],this._tileClipper.lineTo(d,c);this._tileClipper.close()}}return this._tileClipper.result(a)};l.prototype._writeMeshLibtess=function(d,a,c,e,b,g,h,f){if(b&&b.length){c=this._materialStore.get(this.materialId);h=[];var t=a.indexVector,k=a.get("geometry");a=a.get("visibility");var l=new H(e,this.geometryType,this.materialId),q=this._getOffset(k,c);l.vertexFrom=q;
l.indexFrom=t.length;this._tesselator.beginPolygon(v,h);for(var m=0;m<b.length;m++){var n=b[m];if(!(3>n.length)){this._tesselator.beginContour();var u=void 0,r=void 0;g?(u=n[0].x,r=n[0].y):(u=n[0][0],r=n[0][1]);var p=[u,r,0];this._tesselator.addVertex(p,p);for(p=1;p<n.length-1;p++){var x=void 0,y=void 0;g?(u=n[p].x,r=n[p].y):(x=n[p][0],y=n[p][1],u+=x,r+=y);x=[u,r,0];this._tesselator.addVertex(x,x)}this._tesselator.endContour()}}this._tesselator.endPolygon();this._writeVerticesLibTess(l,k,a,e,v,c,
f);this._writeIndicesLibTess(l,t,q,h);0<l.indexCount&&d.push(l)}};l.prototype._writeMeshEarcut=function(d,a,c,e,b,g,h,f){if(b&&b.length){c=this._materialStore.get(this.materialId);h=a.indexVector;var l=a.get("geometry");a=a.get("visibility");var k=new H(e,this.geometryType,this.materialId),m=this._getOffset(l,c);k.vertexFrom=m;k.indexFrom=h.length;d.push(k);for(var q=d=0,w=0;w<b.length;w++){var n=b[w],u=q,r=void 0,p=void 0;g?(r=n[0].x,p=n[0].y):(r=n[0][0],p=n[0][1]);v[q++]=r;v[q++]=p;for(var x=0,
y=1;y<n.length;++y){var z=void 0,A=void 0;g?(z=r,A=p,r=n[y].x,p=n[y].y,z=r-z,A=p-A):(z=n[y][0],A=n[y][1],r+=z,p+=A);x-=z*(p+p+A);v[q++]=r;v[q++]=p}0<x?(0<u-d&&(this._write(k,h,l,a,m,e,v,B,d,u,c,f),d=u),B.length=0):0>x?0<u-d?B.push(.5*(u-d)):q=u:q=u}0<q-d&&this._write(k,h,l,a,m,e,v,B,d,q,c,f);v.length=B.length=0}};l.prototype._write=function(d,a,c,e,b,g,h,f,l,k,m,q){b=K(h.slice(l,k),f,2);b.length&&(l=this._getOffset(c,m),this._writeVertices(d,c,e,g,h,f,m,q),this._writeIndices(d,a,l,b))};l.prototype._getOffset=
function(d,a){a=a.materialKeyInfo.hasVV()?9:7;return d.length/a};l.prototype._writeVertices=function(d,a,c,e,b,g,h,f){for(g=0;g<b.length;g+=2){var l=m.i1616to32(b[g],b[g+1]);a.push(l);a.push(e);a.push(this.fillColor);a.push(this.tl);a.push(this.br);a.push(this.aux1);a.push(this.aux2);this._writeVV(a,f,h);c.push(255);d.vertexCount++}};l.prototype._writeIndices=function(d,a,c,e){for(var b=0;b<e.length;b+=3)a.push(c+e[b]),a.push(c+e[b+1]),a.push(c+e[b+2]),d.indexCount+=3};l.prototype._writeVerticesLibTess=
function(d,a,c,e,b,g,h){for(var f=0;f<b.length;f+=2){var l=m.i1616to32(b[f],b[f+1]);a.push(l);a.push(e);a.push(this.fillColor);a.push(this.tl);a.push(this.br);a.push(this.aux1);a.push(this.aux2);this._writeVV(a,h,g);c.push(255);d.vertexCount++}};l.prototype._writeIndicesLibTess=function(d,a,c,e){for(var b=0;b<e.length;b++)a.push(c+e[b]),d.indexCount++};l.prototype._writeVV=function(d,a,c){c.materialKeyInfo.hasVV()&&(this.isBFS?(d.writeF32(1E-30),d.writeF32(1E-30)):(d.push(a[F.VVType.COLOR]),d.push(a[F.VVType.OPACITY])))};
return l}(P.default);G.default=w});
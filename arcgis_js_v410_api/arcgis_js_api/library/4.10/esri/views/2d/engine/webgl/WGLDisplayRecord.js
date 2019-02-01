// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/Logger","./MeshData","./Utils"],function(t,u,q,n,m){var r=q.getLogger("esri/views/2d/engine/webgl/WGLDisplayRecord");return function(){function b(a,c,b,d,f){void 0===d&&(d=0);void 0===f&&(f=0);this.id=a;this.geometryType=c;this._materialInfo=b;this.minZoom=d;this.maxZoom=f;this.meshData=null;this.indexCount=this.indexFrom=this.vertexCount=this.vertexFrom=this.zOrder=this.symbolLevel=0}Object.defineProperty(b.prototype,"sortKey",{get:function(){void 0===
this._sortKey&&this._computeSortKey();return this._sortKey},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"materialInfo",{get:function(){return"number"===typeof this._materialInfo?(r.warn("Tried to read materialInfo, but found an index! Was materialInfo deserialized correctly?"),null):this._materialInfo},set:function(a){this._materialInfo=a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"materialIndex",{get:function(){return this._materialInfo},enumerable:!0,
configurable:!0});b.prototype.copy=function(){var a=new b(this.id,this.geometryType,this._materialInfo);a.vertexFrom=this.vertexFrom;a.vertexCount=this.vertexCount;a.indexFrom=this.indexFrom;a.indexCount=this.indexCount;a.zOrder=this.zOrder;a.symbolLevel=this.symbolLevel;a.meshData=this.meshData;a.minZoom=this.minZoom;a.maxZoom=this.maxZoom;return a};b.prototype.setMeshDataFromBuffers=function(a,c,b){var d=new n,f;for(f in c){for(var g=c[f].stride,l=c[f].data,h=[],p=m.strideToPackingFactor(g),e=0;e<
g*a.vertexCount/p;++e)h[e]=l[e+g*a.vertexFrom/p];d.vertexData.set(f,h)}for(e=d.indexData.length=0;e<a.indexCount;++e)d.indexData[e]=b[e+a.indexFrom]-a.vertexFrom;d.vertexCount=a.vertexCount;this.meshData=d};b.prototype.readMeshDataFromBuffers=function(a,c){this.meshData?this.meshData.clear():this.meshData=new n;for(var b in a){for(var d=a[b].stride,f=a[b].data,g=[],k=m.strideToPackingFactor(d),h=0;h<d*this.vertexCount/k;++h)g[h]=f[h+d*this.vertexFrom/k];this.meshData.vertexData.set(b,g)}for(h=this.meshData.indexData.length=
0;h<this.indexCount;++h)this.meshData.indexData[h]=c[h+this.indexFrom]-this.vertexFrom;this.meshData.vertexCount=this.vertexCount};b.prototype.writeMeshDataToBuffers=function(a,c,b,d){for(var f in c)for(var g=c[f].stride,k=this.meshData.vertexData.get(f),h=c[f].data,l=m.strideToPackingFactor(g),e=0;e<g*this.meshData.vertexCount/l;++e)h[e+g*a/l]=k[e];for(e=0;e<this.meshData.indexData.length;++e)d[e+b]=this.meshData.indexData[e]+a;this.vertexFrom=a;this.vertexCount=this.meshData.vertexCount;this.indexFrom=
b;this.indexCount=this.meshData.indexData.length};b.writeAllMeshDataToBuffers=function(a,c,b){for(var d=0,f=0,g=0;g<a.length;g++){var k=a[g];k.writeMeshDataToBuffers(d,c,f,b);d+=k.vertexCount;f+=k.indexCount}};b.prototype._computeSortKey=function(){this._sortKey=(this.symbolLevel&31)<<12|(this.zOrder&127)<<4|this.geometryType&7};b.prototype.serialize=function(a){a.push(this.geometryType);a.push(this._materialInfo);a.push(this.symbolLevel);a.push(this.zOrder);a.push(this.vertexFrom);a.push(this.vertexCount);
a.push(this.indexFrom);a.push(this.indexCount);a.push(this.minZoom);a.push(this.maxZoom);return a};b.deserialize=function(a,c){var l=a.readInt32(),d=c.store&&c.store.get(a.readInt32())||a.readInt32();c=new b(c.id,l,d);c.symbolLevel=a.readInt32();c.zOrder=a.readInt32();c.vertexFrom=a.readInt32();c.vertexCount=a.readInt32();c.indexFrom=a.readInt32();c.indexCount=a.readInt32();c.minZoom=a.readInt32();c.maxZoom=a.readInt32();return c};return b}()});
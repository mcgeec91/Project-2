// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ./WGLDisplayList ./WGLDisplayObject ./mesh/factories/MaterialStore ./util/serializationUtils".split(" "),function(g,e,l,m,n,p){function h(d){for(var a=[[],[],[],[],[]],b=0;b<d.length;b++)for(var c=0,k=d[b].displayRecords;c<k.length;c++){var f=k[c];a[f.geometryType].push(f)}return a}Object.defineProperty(e,"__esModule",{value:!0});e.groupRecordsByGeometryType=h;g=function(){function d(){}Object.defineProperty(d.prototype,"displayObjectRegistry",{get:function(){if(!this._displayObjectRegistry){this._displayObjectRegistry=
new Map;for(var a=0,b=this.displayObjects;a<b.length;a++){var c=b[a];this._displayObjectRegistry.set(c.id,c)}}return this._displayObjectRegistry},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"displayList",{get:function(){return this._displayList},enumerable:!0,configurable:!0});d.prototype.computeDisplayList=function(a){this._displayList=new l(a);if(a){a=0;for(var b=this.displayObjects;a<b.length;a++)for(var c=0,d=b[a].displayRecords;c<d.length;c++)this._displayList.addToList(d[c])}else for(a=
h(this.displayObjects),b=a.length,c=0;c<b;++c)this._displayList.addToList(a[c])};d.prototype.serialize=function(a){this.materialStore.serialize(a);p.serializeList(a,this.displayObjects);return a};d.prototype._deserializeObjects=function(a){for(var b=a.readInt32(),b=Array(b),c=new Map,d={store:this.materialStore},f=0;f<b.length;++f){var e=m.deserialize(a,d);b[f]=e;c.set(e.id,e)}this.displayObjects=b;this._displayList=null;this._displayObjectRegistry=c};d.deserialize=function(a){var b=new d;b.materialStore=
n.default.deserialize(a);b._deserializeObjects(a);return b};return d}();e.default=g});
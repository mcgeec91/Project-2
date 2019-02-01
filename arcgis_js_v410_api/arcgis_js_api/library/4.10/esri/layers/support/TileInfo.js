// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../core/JSONSupport ../../core/kebabDictionary ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../geometry/support/aaBoundingRect ../../geometry/support/scaleUtils ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils ./LOD".split(" "),function(C,D,v,w,e,h,x,y,g,q,r,z,l,A,B){var t=y({PNG:"png",
PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc"});return function(u){function b(a){a=u.call(this)||this;a.dpi=96;a.format=null;a.origin=null;a.minScale=0;a.maxScale=0;a.size=null;a.spatialReference=null;return a}w(b,u);m=b;b.create=function(a){void 0===a&&(a={size:256,spatialReference:h.SpatialReference.WebMercator});var c=a.resolutionFactor||1,n=a.scales,d=a.size||
256;a=a.spatialReference||h.SpatialReference.WebMercator;if(!l.isValid(a)){for(var c=[],b=5E-4,f=23;0<=f;f--)c.unshift({level:f,scale:b,resolution:b}),b*=2;return new m({dpi:96,lods:c,origin:new h.Point(0,0,a),size:d,spatialReference:a})}var g=(f=l.getInfo(a))?new h.Point(f.origin[0],f.origin[1],a):new h.Point(0,0,a),e=1/(39.37*z.getMetersPerUnitForSR(a)*96),p=[];if(n)for(f=0;f<n.length;f++){var k=n[f],b=k*e;p.push({level:f,scale:k,resolution:b})}else for(b=l.isGeographic(a)?512/d*1.47748799285417E8:
256/d*5.91657527591555E8,n=Math.ceil(24/c),p.push({level:0,scale:b,resolution:b*e}),f=1;f<n;f++)k=b/Math.pow(2,c),b=k*e,p.push({level:f,scale:k,resolution:b}),b=k;return new m({dpi:96,lods:p,origin:g,size:d,spatialReference:a})};Object.defineProperty(b.prototype,"isWrappable",{get:function(){var a=this.spatialReference,c=this.origin;if(a&&c){var b=l.getInfo(a);return a.isWrappable&&Math.abs(b.origin[0]-c.x)<=b.dx}return!1},enumerable:!0,configurable:!0});b.prototype.readOrigin=function(a,c){return h.Point.fromJSON(v({spatialReference:c.spatialReference},
a))};Object.defineProperty(b.prototype,"lods",{set:function(a){var c=this,b=0,d=0,e=[];this._levelToLOD={};a&&(b=-Infinity,d=Infinity,a.forEach(function(a){e.push(a.scale);b=a.scale>b?a.scale:b;d=a.scale<d?a.scale:d;c._levelToLOD[a.level]=a}));this._set("scales",e);this._set("minScale",b);this._set("maxScale",d);this._set("lods",a);this._initializeUpsampleLevels()},enumerable:!0,configurable:!0});b.prototype.readSize=function(a,c){return[c.cols,c.rows]};b.prototype.writeSize=function(a,c){c.cols=
a[0];c.rows=a[0]};b.prototype.zoomToScale=function(a){var c=this.scales;if(0>=a)return c[0];if(a>=c.length)return c[c.length-1];var b=Math.round(a);return c[b]+(b-a)*(c[Math.round(a-.5)]-c[b])};b.prototype.scaleToZoom=function(a){for(var c=this.scales,b=c.length-1,d=0;d<b;d++){var e=c[d],f=c[d+1];if(e<=a)break;if(f===a)return d+1;if(e>a&&f<a)return d+1-(a-f)/(e-f)}return d};b.prototype.snapScale=function(a,c){void 0===c&&(c=.95);a=this.scaleToZoom(a);return a%Math.floor(a)>=c?this.zoomToScale(Math.ceil(a)):
this.zoomToScale(Math.floor(a))};b.prototype.tileAt=function(a,c,b,d){var e=this.lodAt(a);if(!e)return null;var f;if("number"===typeof c)f=c,c=b;else{if(l.equals(c.spatialReference,this.spatialReference))f=c.x,c=c.y;else{d=A.project(c,this.spatialReference);if(!d)return null;f=d.x;c=d.y}d=b}b=e.resolution*this.size[0];e=e.resolution*this.size[1];d||(d={id:null,level:0,row:0,col:0,extent:r.create()});d.level=a;d.row=Math.floor((this.origin.y-c)/e+.001);d.col=Math.floor((f-this.origin.x)/b+.001);this.updateTileInfo(d);
return d};b.prototype.updateTileInfo=function(a){var c=this.lodAt(a.level);if(c){var b=c.resolution*this.size[0],c=c.resolution*this.size[1];a.id=a.level+"/"+a.row+"/"+a.col;a.extent||(a.extent=r.create());a.extent[0]=this.origin.x+a.col*b;a.extent[1]=this.origin.y-(a.row+1)*c;a.extent[2]=a.extent[0]+b;a.extent[3]=a.extent[1]+c}};b.prototype.upsampleTile=function(a){var b=this._upsampleLevels[a.level];if(!b||-1===b.parentLevel)return!1;a.level=b.parentLevel;a.row=Math.floor(a.row/b.factor+.001);a.col=
Math.floor(a.col/b.factor+.001);this.updateTileInfo(a);return!0};b.prototype.getTileBounds=function(a,b){var c=this.lodAt(b.level).resolution,d=c*this.size[0],c=c*this.size[1];a[0]=this.origin.x+b.col*d;a[1]=this.origin.y-(b.row+1)*c;a[2]=a[0]+d;a[3]=a[1]+c;return a};b.prototype.lodAt=function(a){return this._levelToLOD&&this._levelToLOD[a]||null};b.prototype.clone=function(){return m.fromJSON(this.write({}))};b.prototype._initializeUpsampleLevels=function(){var a=this.lods;this._upsampleLevels=[];
for(var b=null,e=0;e<a.length;e++){var d=a[e];this._upsampleLevels[d.level]={parentLevel:b?b.level:-1,factor:b?b.resolution/d.resolution:0};b=d}};var m;e([g.property({type:Number,json:{write:!0}})],b.prototype,"compressionQuality",void 0);e([g.property({type:Number,json:{write:!0}})],b.prototype,"dpi",void 0);e([g.property({type:String,json:{read:t.read,write:t.write,origins:{"web-scene":{read:!1,write:!1}}}})],b.prototype,"format",void 0);e([g.property({readOnly:!0,dependsOn:["spatialReference",
"origin"]})],b.prototype,"isWrappable",null);e([g.property({type:h.Point,json:{write:!0}})],b.prototype,"origin",void 0);e([g.reader("origin")],b.prototype,"readOrigin",null);e([g.property({type:[B],value:null,json:{write:!0}})],b.prototype,"lods",null);e([g.property({readOnly:!0})],b.prototype,"minScale",void 0);e([g.property({readOnly:!0})],b.prototype,"maxScale",void 0);e([g.property({readOnly:!0})],b.prototype,"scales",void 0);e([g.property({cast:function(a){return Array.isArray(a)?a:"number"===
typeof a?[a,a]:[256,256]}})],b.prototype,"size",void 0);e([g.reader("size",["rows","cols"])],b.prototype,"readSize",null);e([g.writer("size",{cols:{type:q.Integer},rows:{type:q.Integer}})],b.prototype,"writeSize",null);e([g.property({type:h.SpatialReference,json:{write:!0}})],b.prototype,"spatialReference",void 0);return b=m=e([g.subclass("esri.layers.support.TileInfo")],b)}(g.declared(x))});
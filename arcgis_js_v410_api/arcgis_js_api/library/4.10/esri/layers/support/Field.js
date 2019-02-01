// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ./domains ./fieldType".split(" "),function(l,m,h,c,k,b,e,f){return function(g){function a(a){a=g.call(this)||this;a.alias=null;a.defaultValue=void 0;a.domain=null;a.editable=!0;a.length=-1;a.name=null;a.nullable=!0;a.type=null;return a}h(a,g);d=a;a.prototype.clone=function(){return new d({alias:this.alias,defaultValue:this.defaultValue,
domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type})};var d;c([b.property({type:String,json:{write:!0}})],a.prototype,"alias",void 0);c([b.property({json:{write:{allowNull:!0}}})],a.prototype,"defaultValue",void 0);c([b.property({types:e.types,json:{read:{reader:e.fromJSON},write:!0}})],a.prototype,"domain",void 0);c([b.property({type:Boolean,json:{write:!0}})],a.prototype,"editable",void 0);c([b.property({type:Number,
json:{write:!0}})],a.prototype,"length",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);c([b.property({type:Boolean,json:{write:!0}})],a.prototype,"nullable",void 0);c([b.property({type:String,json:{read:f.kebabDict.read,write:f.kebabDict.write}})],a.prototype,"type",void 0);return a=d=c([b.subclass("esri.layers.support.Field")],a)}(b.declared(k))});
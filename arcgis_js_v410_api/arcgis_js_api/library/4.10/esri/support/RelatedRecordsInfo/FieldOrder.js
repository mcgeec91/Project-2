// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(h,k,f,c,g,b){return function(e){function a(a){a=e.call(this)||this;a.field=null;a.order=null;return a}f(a,e);d=a;a.prototype.clone=function(){return new d({field:this.field,order:this.order})};var d;c([b.property({type:String,json:{write:!0}})],a.prototype,"field",void 0);c([b.property({type:["asc","desc"],json:{write:!0}})],
a.prototype,"order",void 0);return a=d=c([b.subclass("esri.support.RelatedRecordsInfo.FieldOrder")],a)}(b.declared(g))});
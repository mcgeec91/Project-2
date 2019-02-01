// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./Symbol3DLayer ./support/IconSymbol3DLayerResource ./support/materialUtils ./support/Symbol3DOutline".split(" "),function(m,n,f,c,b,g,h,k,l){return function(e){function a(a){a=e.call(this)||this;a.material=null;a.resource=null;a.type="icon";a.size=12;a.anchor=void 0;a.outline=void 0;return a}f(a,e);d=a;a.prototype.clone=function(){return new d({anchor:this.anchor,enabled:this.enabled,
elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:this.material&&this.material.clone(),outline:this.outline&&this.outline.clone(),resource:this.resource&&this.resource.clone(),size:this.size})};var d;c([b.property()],a.prototype,"material",void 0);c([b.property({type:h.default,json:{write:!0}})],a.prototype,"resource",void 0);c([b.enumeration.serializable()({Icon:"icon"})],a.prototype,"type",void 0);c([b.property(k.screenSizeProperty)],a.prototype,"size",void 0);c([b.enumeration.serializable()({center:"center",
left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right"})],a.prototype,"anchor",void 0);c([b.property({type:l.default,json:{write:!0}})],a.prototype,"outline",void 0);return a=d=c([b.subclass("esri.symbols.IconSymbol3DLayer")],a)}(b.declared(g))});
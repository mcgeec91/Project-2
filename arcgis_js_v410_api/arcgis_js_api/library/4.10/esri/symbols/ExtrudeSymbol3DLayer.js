// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./Symbol3DLayer ./edges/utils".split(" "),function(k,l,f,c,b,g,h){return function(e){function a(a){a=e.call(this)||this;a.type="extrude";a.size=void 0;a.material=null;a.edges=null;return a}f(a,e);d=a;a.prototype.clone=function(){return new d({edges:this.edges&&this.edges.clone(),enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:this.material&&
this.material.clone(),size:this.size})};var d;c([b.enumeration.serializable()({Extrude:"extrude"})],a.prototype,"type",void 0);c([b.property({type:Number,json:{write:!0}})],a.prototype,"size",void 0);c([b.property()],a.prototype,"material",void 0);c([b.property(h.symbol3dEdgesProperty)],a.prototype,"edges",void 0);return a=d=c([b.subclass("esri.symbols.ExtrudeSymbol3DLayer")],a)}(b.declared(g))});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators ./Lighting ./background/utils".split(" "),function(n,p,h,d,k,l,b,e,m){var g=function(b,a,c){return{enabled:!c||!c.isPresentation}};return function(f){function a(a){a=f.call(this,a)||this;a.lighting=new e;a.background=null;a.atmosphereEnabled=!0;a.starsEnabled=!0;return a}h(a,f);c=a;a.prototype.clone=function(){return new c(this.cloneConstructProperties())};
a.prototype.cloneConstructProperties=function(){return{lighting:e.prototype.clone.call(this.lighting),background:l.clone(this.background),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled}};var c;d([b.property({type:e,json:{write:!0}})],a.prototype,"lighting",void 0);d([b.property(m.backgroundProperty)],a.prototype,"background",void 0);d([b.property({type:Boolean,nonNullable:!0,json:{write:{overridePolicy:g}}})],a.prototype,"atmosphereEnabled",void 0);d([b.property({type:Boolean,
nonNullable:!0,json:{write:{overridePolicy:g}}})],a.prototype,"starsEnabled",void 0);return a=c=d([b.subclass("esri.webscene.Environment")],a)}(b.declared(k))});
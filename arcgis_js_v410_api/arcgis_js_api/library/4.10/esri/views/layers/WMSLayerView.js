// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Error ../../core/promiseUtils ../../core/accessorSupport/decorators ./RefreshableLayerView".split(" "),function(n,p,l,f,h,g,c,m){return function(k){function a(b){return k.call(this,b)||this}l(a,k);a.prototype.fetchPopupFeatures=function(b){var a=this.layer;if(!b)return g.reject(new h("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));var e=a.popupEnabled;if(!e)return g.reject(new h("wmslayerview:fetchPopupFeatures",
"popupEnabled should be true",{popupEnabled:e}));var d=this.createFetchPopupFeaturesQuery(b);b=d.extent;var e=d.width,c=d.height,f=d.x,d=d.y;return b&&e&&c?(a=a.fetchFeatureInfo(b,e,c,f,d))?a.then(function(a){return[a]}):g.resolve([]):g.reject(new h("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:b,width:e,height:c}))};f([c.property()],a.prototype,"layer",void 0);return a=f([c.subclass("esri.views.layers.WMSLayerView")],a)}(c.declared(m))});
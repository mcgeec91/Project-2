// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Error ../../core/promiseUtils ../../core/accessorSupport/decorators ../../renderers/support/clickToleranceUtils ./RefreshableLayerView".split(" "),function(n,p,k,d,g,f,e,l,m){return function(h){function b(b){return h.call(this,b)||this}k(b,h);b.prototype.fetchPopupFeatures=function(b){var e=this,c=this.layer;if(!b)return f.reject(new g("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",
{layer:c}));if("tile"!==c.type)return f.reject(new g("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:c.type}));var d=this.get("view.scale"),c=c.allSublayers.toArray().filter(function(a){var b=0===a.minScale||d<=a.minScale,c=0===a.maxScale||d>=a.maxScale;return a.popupTemplate&&a.popupEnabled&&a.visible&&b&&c});return f.eachAlways(c.map(function(a){var c=a.createQuery(),d=l.calculateTolerance(a.renderer);c.geometry=e.createFetchPopupFeaturesQueryGeometry(b,d);c.outFields=a.get("popupTemplate.requiredFields");
return a.queryFeatures(c).then(function(a){return a.features})})).then(function(a){return[].concat.apply([],a.map(function(a){return a.value}).filter(Boolean))})};d([e.property()],b.prototype,"layer",void 0);return b=d([e.subclass("esri.views.layers.TileLayerView")],b)}(e.declared(m))});
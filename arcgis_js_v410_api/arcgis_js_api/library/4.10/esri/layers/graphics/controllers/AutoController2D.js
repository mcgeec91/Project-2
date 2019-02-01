// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../Graphic ../../../core/Accessor ../../../core/Collection ../../../core/Error ../../../core/Promise ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../../../tasks/QueryTask ../../../tasks/support/StatisticDefinition".split(" "),function(h,v,l,e,m,n,p,q,r,k,d,t,u){var f;(function(d){d[d.Snapshot=0]="Snapshot";d[d.OnDemand=1]="OnDemand"})(f||(f={}));return function(g){function b(){var c=
null!==g&&g.apply(this,arguments)||this;c.maxPointCountForAuto=4E3;c.maxRecordCountForAuto=2E3;c.maxVertexCountForAuto=25E4;return c}l(b,g);b.prototype.initialize=function(){var c=this,a=this.layer.when(function(){c._verifyCapabilities()}).then(function(){return c._figureOutMode().then(function(a){return c._createController(a)})}).then(function(a){return c._set("activeController",a)});this.addResolvingPromise(a)};b.prototype.destroy=function(){this.activeController&&(this.activeController.destroy(),
this._set("activeController",null))};Object.defineProperty(b.prototype,"countThresholdForAuto",{get:function(){var c=this.layer.geometryType,a;"polyline"===c||"polygon"===c||"multipoint"===c?a=this.maxRecordCountForAuto:"point"===c&&(a=this.maxPointCountForAuto);return a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"updating",{get:function(){return!1===this.isFulfilled()||!0===this.get("activeController.updating")},enumerable:!0,configurable:!0});b.prototype._figureOutMode=function(){return this._isStatisticsSupported()?
this._checkByStatistics():this._checkByCount()};b.prototype._isStatisticsSupported=function(){if(!this.layer.capabilities.query.supportsStatistics)return!1;var c=/(https?:)?\/\/services.*\.arcgis\.com/i,a=this.layer.parsedUrl;return a&&c.test(a.path)};b.prototype._checkByStatistics=function(){var c=this,a=this.layer,b=a.parsedUrl.path,a=a.createQuery();a.outStatistics=[new u({statisticType:"exceedslimit",maxPointCount:this.maxPointCountForAuto,maxRecordCount:this.maxRecordCountForAuto,maxVertexCount:this.maxVertexCountForAuto,
outStatisticFieldName:"exceedslimit"})];return(new t({url:b+"/query"})).execute(a).then(function(a){a=a&&a.features&&a.features[0];if(0===(a&&a.attributes&&a.attributes.exceedslimit)){a=c.layer;var b=a.maxRecordCount;if(a.get("capabilities.query.supportsPagination")||b>=c.countThresholdForAuto)return f.Snapshot}return f.OnDemand})};b.prototype._checkByCount=function(){var b=this,a=this.layer;return a.queryFeatureCount().then(function(c){return c<=b.countThresholdForAuto&&c<=a.maxRecordCount?f.Snapshot:
f.OnDemand})};b.prototype._createController=function(b){var a=this;return k.create(function(a){return h(["./SnapshotController"],a)}).then(function(b){return new b({layer:a.layer,layerView:a.layerView,graphics:a.graphics})}).catch(function(a){throw Error("Module path not found for controller type: "+(b===f.Snapshot?"snapshot":"on demand"));})};b.prototype._verifyCapabilities=function(){if(!this.layer.get("capabilities.operations.supportsQuery"))throw new q("graphicscontroller:query-capability-required",
"Service requires query capabilities to be used as a feature layer",{layer:this.layer});};e([d.property()],b.prototype,"activeController",void 0);e([d.property({dependsOn:["layer.geometryType"]})],b.prototype,"countThresholdForAuto",null);e([d.property({type:p.ofType(m)})],b.prototype,"graphics",void 0);e([d.property()],b.prototype,"layer",void 0);e([d.property()],b.prototype,"layerView",void 0);e([d.property({dependsOn:["activeController.updating"]})],b.prototype,"updating",null);e([d.aliasOf("activeController.update")],
b.prototype,"update",void 0);return b=e([d.subclass("esri.layers.graphics.controllers.AutoController2D")],b)}(d.declared(n,r))});
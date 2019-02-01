// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/gl-matrix ../../../../geometry/Point ../graphics/ElevationContext ../graphics/featureExpressionInfoUtils ../graphics/Graphics3DSymbolCommonCode ./I3SUtil ../../support/geometryUtils ../../support/orientedBoundingBox ../../support/projectionUtils".split(" "),function(u,v,d,p,q,m,n,r,k,f,l){return function(){function c(a,b,e,c,t,g,f,h){void 0===h&&(h={});this.indexSR=a;this._renderCoordsHelper=b;this.extent=t;this.elevationProvider=g;this.options=
h;this._computedOBBs={};this._computedMBSs={};this._isNodeVisibleCached={};this.fp=k.frustum.create();this._idleCamera=!0;this.maxDistance=0;this.maxLodLevel=2;this._tmp1=d.vec3f64.create();this._tmp2=d.vec3f64.create();this._tmp3=d.vec3f64.create();this._tmp0=d.vec3f64.create();this.supportedMetrics=["maxScreenThreshold","screenSpaceRelative","removedFeatureDiameter","distanceRangeFromDefaultCamera"];this.screenspaceErrorBias=h.screenspaceErrorBias||1;this.progressiveLoadFactor=h.progressiveLoadFactor||
1;this.enableLoD=!h.disableLod;this.updateCamera(e);this._poi=d.vec3f64.clone(c);this.engineSR=this._renderCoordsHelper.spatialReference;f?(this._elevationContext=new q,this._elevationContext.featureExpressionInfoContext=m.createContext(m.extractExpressionInfo(f,!1)),this._elevationContext.mixinApi(f)):this._elevationContext=null;this.tmpPoint=new p({x:0,y:0,z:0,spatialReference:a})}c.prototype.updateCamera=function(a){k.frustum.fromMatrix(a.viewMatrix,a.projectionMatrix,this.fp);this._screenSizeFactor=
1/a.perPixelRatio;this._camPos=a.eye;this._isNodeVisibleCached={};this.maxDistance=0};c.prototype.updateNode=function(a){delete this._isNodeVisibleCached[a]};c.prototype.updatePointOfInterest=function(a){d.vec3.copy(this._poi,a)};c.prototype.updateScreenSpaceErrorBias=function(a){var b=this.screenspaceErrorBias;this.screenspaceErrorBias=a;return b};c.prototype.setCameraIdle=function(a){this._idleCamera!==a&&(this._idleCamera=a,this._isNodeVisibleCached={})};c.prototype.updateExtent=function(a){this.extent=
a;this._isNodeVisibleCached={}};c.prototype.computeMbs=function(a){var b=this._computedMBSs[a.id];b||(b=d.vec4f64.fromValues(a.mbs[0],a.mbs[1],a.mbs[2],-1),this._computedMBSs[a.id]=b);0>b[3]&&(d.vec4.copy(b,a.mbs),this._elevationContext&&1E5>b[3]&&(this.tmpPoint.x=b[0],this.tmpPoint.y=b[1],this.tmpPoint.z=b[2],b[2]=n.computeElevation(this.elevationProvider,this.tmpPoint,this._elevationContext,this._renderCoordsHelper,null)),l.mbsToMbs(b,this.indexSR,b,this.engineSR));return b};c.prototype.computeObb=
function(a){if(a.obb&&!(0>a.obb.halfSize[0])){var b=this._computedOBBs[a.id];b||(b=f.clone(a.obb),b.halfSize[0]=-1,this._computedOBBs[a.id]=b);0>b.halfSize[0]&&(b.halfSize[0]=a.obb.halfSize[0],d.vec3.copy(b.center,a.obb.center),this._elevationContext&&1E5>a.mbs[3]&&(this.tmpPoint.x=a.obb.center[0],this.tmpPoint.y=a.obb.center[1],this.tmpPoint.z=a.obb.center[2],b.center[2]=n.computeElevation(this.elevationProvider,this.tmpPoint,this._elevationContext,this._renderCoordsHelper,null)),l.bufferToBuffer(b.center,
this.indexSR,0,b.center,this.engineSR,0,1));return b}};c.prototype._isNodeVisible=function(a){var b=this.computeMbs(a);return this.isMBSinExtent(b)?a.hasServiceOBB&&a.obb?(a=this.computeObb(a),f.isVisible(a,this.fp)):this.isMBSVisible(b):!1};c.prototype.isNodeVisible=function(a){if(!this.enableLoD)return!0;if(!this._idleCamera)return this._isNodeVisible(a);if(null!=this._isNodeVisibleCached[a.id])return this._isNodeVisibleCached[a.id];this._isNodeVisibleCached[a.id]=this._isNodeVisible(a);return this._isNodeVisibleCached[a.id]};
c.prototype.isGeometryVisible=function(a){return this.isNodeVisible(a)?a.hasServiceOBB?!0:(a=this.computeObb(a))?f.isVisible(a,this.fp):!0:!1};c.prototype.invalidateCache=function(a){if(null==a){for(var b=0,e=Object.keys(this._computedMBSs);b<e.length;b++)a=e[b],this._computedMBSs[a][3]=-1;b=0;for(e=Object.keys(this._computedOBBs);b<e.length;b++)a=e[b],this._computedOBBs[a].halfSize[0]=-1}else this._computedMBSs[a]&&(this._computedMBSs[a][3]=-1),this._computedOBBs[a]&&(this._computedOBBs[a].halfSize[0]=
-1)};c.prototype.isMBSinExtent=function(a){return this.extent?0!==r.intersectBoundingBoxWithMbs(this.extent,a):!0};c.prototype.isMBSVisible=function(a){return k.frustum.intersectsSphere(this.fp,k.sphere.wrap(a[3],a))};c.prototype.calcScreenSpaceSize=function(a,b){var e=this.computeMbs(a);a=d.vec3.squaredDistance(e,this._camPos);e=e[3];this.maxDistance=Math.max(this.maxDistance,Math.sqrt(a)-e);a-=e*e;return 0>a?.5*Number.MAX_VALUE:b/Math.sqrt(a)*this._screenSizeFactor};c.prototype.calcCameraDistance=
function(a){a=this.computeMbs(a);a=d.vec3.distance(a,this._camPos)-a[3];this.maxDistance=Math.max(this.maxDistance,a);return a};c.prototype.calcAngleDependentLoD=function(a){a=this.computeMbs(a);var b=a[3];a=(Math.abs(a[0]*(a[0]-this._camPos[0])+a[1]*(a[1]-this._camPos[1])+a[2]*(a[2]-this._camPos[2]))/d.vec3.length(a)+b)/d.vec3.distance(a,this._camPos);return Math.min(1,a)};c.prototype.hasLOD=function(a){return null!=a.lodSelection};c.prototype.hasFeatures=function(a){return null!=a.featureData};
c.prototype.getDistancePlanarMode=function(a,b,e){var d=a[0]-b[0],c=a[1]-b[1];a=a[2]-b[2];d=d*d+c*c;if(d<=e*e)return Math.abs(a);e=Math.sqrt(d)-e;return Math.sqrt(a*a+e*e)};c.prototype.getDistanceGlobeMode=function(a,b,e){var c=d.vec3.length(b),f=d.vec3.length(a)-c;d.vec3.scale(this._tmp0,a,d.vec3.dot(a,b)/d.vec3.squaredLength(a));if(d.vec3.squaredDistance(b,this._tmp0)<=e*e)return Math.abs(f);b=d.vec3.scale(this._tmp0,b,1/c);var c=d.vec3.scale(this._tmp1,b,c-e*e/2/c),g=d.vec3.subtract(this._tmp2,
a,c),g=d.vec3.subtract(this._tmp2,g,d.vec3.scale(this._tmp3,b,d.vec3.dot(b,g))),c=d.vec3.add(this._tmp2,c,d.vec3.scale(this._tmp2,g,e/d.vec3.length(g)));e=d.vec3.distance(a,c);2E5<=f&&(a=d.vec3.subtract(this._tmp1,a,c),a=d.vec3.dot(a,b)/d.vec3.length(a),.08>a&&(a=1E-4),e/=a);return e};c.prototype.getDistance=function(a,b,c){return this.engineSR===l.SphericalECEFSpatialReference?this.getDistanceGlobeMode(a,b,c):this.getDistancePlanarMode(a,b,c)};c.prototype._selectErrorMetric=function(a){for(var b=
0;b<a.length;b++)if(0<=this.supportedMetrics.indexOf(a[b].metricType))return a[b];return null};c.prototype.getLodLevel=function(a){if(!a.lodSelection||0>=a.lodSelection.length||!1===this.hasFeatures(a))return 0;if(null==a.children||0===a.children.length)return this.maxLodLevel;var b=this.enableLoD?this._selectErrorMetric(a.lodSelection):null;if(null==b)return 0;if(1>this.progressiveLoadFactor){var c=this.screenspaceErrorBias;return this.evaluateLODmetric(a,this.progressiveLoadFactor*this.screenspaceErrorBias,
b)?this.evaluateLODmetric(a,c,b)?2:1:0}return this.evaluateLODmetric(a,this.screenspaceErrorBias,b)?this.maxLodLevel:0};c.prototype.evaluateLODmetric=function(a,b,c){switch(c.metricType){case "screenSpaceRelative":return a=this.computeMbs(a),a=this.getDistance(this._camPos,a,a[3]),this.maxDistance=Math.max(this.maxDistance,a),c.maxError*b<=2*a/this._screenSizeFactor;case "maxScreenThreshold":return b=this.calcScreenSpaceSize(a,a.mbs[3]*b),this.options.angleDependentLoD&&(b*=this.calcAngleDependentLoD(a)),
b<c.maxError;case "removedFeatureDiameter":return 10>this.calcScreenSpaceSize(a,c.maxError)*b;case "distanceRangeFromDefaultCamera":return this.calcCameraDistance(a)>c.maxError*b}return!1};c.prototype.distToPOI=function(a){a=this.computeMbs(a);return d.vec3.distance(a,this._poi)-a[3]};c.prototype.distCameraToPOI=function(){return d.vec3.distance(this._camPos,this._poi)};return c}()});
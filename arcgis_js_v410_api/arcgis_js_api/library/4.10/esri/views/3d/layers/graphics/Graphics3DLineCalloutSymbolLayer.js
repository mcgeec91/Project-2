// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../Color ../../../../core/screenUtils ./ElevationAligners ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./graphicUtils ./symbolComplexity ../../webgl-engine/Stage ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/Util ../../webgl-engine/materials/LineCalloutMaterial".split(" "),function(p,F,v,q,r,w,x,l,y,z,A,t,B,u,C,m){var e,k,f=C.VertexAttrConstants;
p=function(e){function b(a,c){a=e.call(this,a,null,c,!0)||this;a._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!1};return a}v(b,e);b.prototype.destroy=function(){e.prototype.destroy.call(this);this.isFulfilled()||this.reject();this._material&&(this._context.stage.remove(t.ModelContentType.MATERIAL,this._material.id),this._material=null)};b.prototype._prepareResources=function(){var a=this._getStageIdHint();this._createMaterialsAndAddToStage(this._context.stage,a);this.resolve()};
b.prototype.perInstanceMaterialParameters=function(a){var c=this.materialParameters;c.screenOffset=a.screenOffset||[0,0];c.centerOffsetUnits=a.centerOffsetUnits||"world";return c};Object.defineProperty(b.prototype,"materialParameters",{get:function(){var a=this.symbolContainer,c=a.callout,h=q.toUnitRGBA(c.color);h[3]*=this._getLayerOpacity();var b=r.pt2px(c.size||0),d=null;if(a.verticalOffset)var d=a.verticalOffset,g=d.minWorldLength,e=d.maxWorldLength,d={screenLength:r.pt2px(d.screenLength),minWorldLength:g||
0,maxWorldLength:null!=e?e:Infinity};c=c.border&&c.border.color?q.toUnitRGBA(c.border.color):null;g="object"===a.symbolLayers.getItemAt(0).type;return{color:h,size:b,verticalOffset:d,screenSizePerspective:this._context.screenSizePerspectiveEnabled?this._context.sharedResources.screenSizePerspectiveSettings:null,screenOffset:[0,0],centerOffsetUnits:"world",borderColor:c,occlusionTest:!g,shaderPolygonOffset:g?0:void 0,depthHUDAlignStart:"label-3d"===a.type,slicePlaneEnabled:this._context.slicePlaneEnabled}},
enumerable:!0,configurable:!0});b.prototype._createMaterialsAndAddToStage=function(a,c){this._material=new m(this.materialParameters,c+"_lineCallout_common");a.add(t.ModelContentType.MATERIAL,this._material)};b.prototype._defaultElevationInfoNoZ=function(){return D};b.prototype.createGraphics3DGraphic=function(a){var c=a.renderingInfo;a=a.graphic;null!=c.needsOffsetAdjustment&&(this._elevationOptions.needsOffsetAdjustment=c.needsOffsetAdjustment);var h=this.getGraphicElevationContext(a,c.elevationOffset||
0),b=c.symbol,d="on-the-ground"===this._elevationContext.mode&&!b.symbolLayers.some(function(a){return"object"===a.type||"text"===a.type});if("label-3d"!==b.type&&d)return null;b=z.computeCentroid(a.geometry);return null==b?null:this._createAs3DShape(a,b,h,c,"graphic"+a.uid,a.uid)};b.prototype.layerOpacityChanged=function(){this._material.setParameterValues(this.materialParameters);return!0};b.prototype.layerElevationInfoChanged=function(a,c,b){var h=this,d=this._elevationContext.mode;if(b!==d&&("on-the-ground"===
b||"on-the-ground"===d))return!1;a.forEach(function(a){var b=c(a);b&&h.updateGraphicElevationContext(a.graphic,b)});return!0};b.prototype.slicePlaneEnabledChanged=function(a,c){this._material.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});return!0};b.prototype.getGraphicElevationContext=function(a,c){void 0===c&&(c=0);a=e.prototype.getGraphicElevationContext.call(this,a);a.addOffsetRenderUnits(c);return a};b.prototype.updateGraphicElevationContext=function(a,c){a=this.getGraphicElevationContext(a,
c.metadata.elevationOffset);c.elevationContext.set(a);c.needsElevationUpdates=l.needsElevationUpdates2D(a.mode)};b.prototype.computeComplexity=function(){return{primitivesPerFeature:2,primitivesPerCoordinate:0,memory:A.emptySymbolComplexity.memory}};b.prototype.createVertexData=function(a){var c,b=a.translation;a=a.centerOffset;if(!b&&!a)return n;b=b?{size:3,data:[b[0],b[1],b[2]]}:n[f.POSITION];a=a?{size:4,data:[a[0],a[1],a[2],a[3]]}:n[f.AUXPOS1];return c={},c[f.POSITION]=b,c[f.NORMAL]=n[f.NORMAL],
c[f.AUXPOS1]=a,c};b.prototype.getOrCreateMaterial=function(a,c){var b=this.perInstanceMaterialParameters(a),e=m.uniqueMaterialIdentifier(b);if(e===this._material.uniqueMaterialIdentifier)return{material:this._material,isUnique:!1};if(a.materialCollection){var d=a.materialCollection.getMaterial(e);d||(d=new m(b,c+"_lineCallout_shared"),a.materialCollection.addMaterial(e,d));return{material:d,isUnique:!1}}d=new m(b,c+"_lineCallout_unique");return{material:d,isUnique:!0}};b.prototype._createAs3DShape=
function(a,b,e,f,d,g){a=new u(this.createVertexData(f),E,u.DefaultOffsets,"point");a=[new B(a,d)];var c=this.getOrCreateMaterial(f,d);d=l.createStageObjectForPoint(this._context,b,a,[c.material],null,null,e,d,this._context.layer.uid,g,!0);if(null===d)return null;g=new x(this,d.object,a,c.isUnique?[c.material]:null,null,w.perObjectElevationAligner,e);g.metadata={elevationOffset:f.elevationOffset||0};g.alignedTerrainElevation=d.terrainElevation;g.needsElevationUpdates=l.needsElevationUpdates2D(e.mode);
l.extendPointGraphicElevationContext(g,b,this._context.elevationProvider);return g};return b}(y);var n=(e={},e[f.POSITION]={size:3,data:[0,0,0]},e[f.NORMAL]={size:3,data:[0,0,1]},e[f.AUXPOS1]={size:4,data:[0,0,0,1]},e);e=new Uint32Array([0]);var E=(k={},k[f.POSITION]=e,k[f.NORMAL]=e,k[f.AUXPOS1]=e,k),D={mode:"relative-to-ground",offset:0};return p});
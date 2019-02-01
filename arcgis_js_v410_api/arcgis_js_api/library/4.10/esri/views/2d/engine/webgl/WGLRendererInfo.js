// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/screenUtils ../../../../geometry/support/scaleUtils ../../../../renderers/support/utils ./Utils".split(" "),function(p,q,h,m,n,k){function l(d,a){var c=a.length;if(d<a[0].value||1===c)return a[0].size;for(var b=1;b<c;b++)if(d<a[b].value)return a[b-1].size+(d-a[b-1].value)/(a[b].value-a[b-1].value)*(a[b].size-a[b-1].size);return a[c-1].size}return function(){function d(){this.symbolLevels=[];this.vvColorValues=new Float32Array(8);this.vvColors=new Float32Array(32);
this.vvOpacityValues=new Float32Array(8);this.vvOpacities=new Float32Array(8);this.vvSizeMinMaxValue=new Float32Array(4);this.vvSizeFieldStopsValues=new Float32Array(6);this.vvSizeFieldStopsSizes=new Float32Array(6);this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1};this.symbolLevels.push(0)}Object.defineProperty(d.prototype,"vvMaterialParameters",{get:function(){return this._vvMaterialParameters},enumerable:!0,configurable:!0});
d.prototype.updateVisualVariables=function(a,c){var b=this._vvMaterialParameters;b.vvOpacityEnabled=!1;b.vvSizeEnabled=!1;b.vvColorEnabled=!1;b.vvRotationEnabled=!1;if(a){var e=a.size;if(e){b.vvSizeEnabled=!0;if(e.minMaxValue){var f=e.minMaxValue,d=void 0,g=void 0;k.isDefined(f.minSize)&&k.isDefined(f.maxSize)&&(k.isNumber(f.minSize)&&k.isNumber(f.maxSize)?(d=h.pt2px(f.minSize),g=h.pt2px(f.maxSize)):(g=c.scale,d=h.pt2px(l(g,f.minSize.stops)),g=h.pt2px(l(g,f.maxSize.stops))));this.vvSizeMinMaxValue.set([f.minDataValue,
f.maxDataValue,d,g])}e.scaleStops&&(this.vvSizeScaleStopsValue=h.pt2px(l(c.scale,e.scaleStops.stops)));e.unitValue&&(this.vvSizeUnitValueToPixelsRatio=m.getMetersPerUnitForSR(c.spatialReference)/n.meterIn[e.unitValue.unit]/c.resolution);e.fieldStops&&(this.vvSizeFieldStopsValues.set(e.fieldStops.values),this.vvSizeFieldStopsSizes.set(e.fieldStops.sizes))}if(c=a.color)b.vvColorEnabled=!0,this.vvColorValues.set(c.values),this.vvColors.set(c.colors);if(c=a.opacity)b.vvOpacityEnabled=!0,this.vvOpacityValues.set(c.values),
this.vvOpacities.set(c.opacities);if(a=a.rotation)b.vvRotationEnabled=!0,b.vvRotationType=a.type}};return d}()});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../geometry/support/scaleUtils"],function(d,e,c){return function(){function b(a,b){void 0===a&&(a=null);void 0===b&&(b=null);this.spatialReference=a;this.ignoredSpatialReferences=b;this._updateNormalizationFactors}Object.defineProperty(b.prototype,"spatialReference",{get:function(){return this._spatialReference},set:function(a){a!==this._spatialReference&&(this._spatialReference=a,this._updateNormalizationFactors())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"ignoredSpatialReferences",{get:function(){return this._ignoredSpatialReferences},set:function(a){this._ignoredSpatialReferences=a;this._updateNormalizationFactors()},enumerable:!0,configurable:!0});b.prototype.normalizeDistance=function(a){return a*this._metersPerDistanceUnit};b.prototype.normalizeElevation=function(a){return a*this._metersPerElevationUnit};b.prototype.normalizeArea=function(a){return a*this._squareMetersPerAreaUnit};b.prototype._updateNormalizationFactors=function(){var a=this;
!this._spatialReference||this._ignoredSpatialReferences&&0!==this._ignoredSpatialReferences.filter(function(b){return b.equals(a._spatialReference)}).length?this._squareMetersPerAreaUnit=this._metersPerDistanceUnit=this._metersPerDistanceUnit=1:(this._metersPerDistanceUnit=c.getMetersPerUnitForSR(this._spatialReference),this._metersPerElevationUnit=c.getMetersPerVerticalUnitForSR(this._spatialReference),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit)};return b}()});
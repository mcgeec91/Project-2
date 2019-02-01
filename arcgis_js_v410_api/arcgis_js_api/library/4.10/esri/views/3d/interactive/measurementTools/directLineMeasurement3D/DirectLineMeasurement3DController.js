// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../geometry ../../../../../core/Handles ./DirectLineMeasurement3DView".split(" "),function(k,l,m,n,e,g,h){function f(c){return"mouse"!==c.pointerType||0===c.button}return function(){function c(a,b){this._dragHandles={};this._handles=new g;this._viewEventHandles=new g;this._cachedPickRequest=new h.PickRequest;this._cachedPickResult=new h.PickResult;this._isAnyPointerDown=
!1;this._ignoreClickEventId=null;this.model=a;this.view=b;this.model.reset()}c.prototype.destroy=function(){this._handles.destroy();this._handles=null;this._viewEventHandles.destroy();this._viewEventHandles=null};c.prototype.install=function(){var a=this;if(!(0<this._viewEventHandles.size)){var b=this.model.sceneView;this._viewEventHandles.add([b.on("immediate-click",function(b){return a._handleImmediateClick(b)}),b.on("click",function(b){return a._handleClick(b)}),b.on("double-click",function(b){return a._handleDoubleClick(b)}),
b.on("drag",function(b){return a._handleDrag(b)}),b.on("pointer-move",function(b){return a._handlePointerMove(b)}),b.on("pointer-down",function(b){return a._handlePointerDown(b)}),b.on("pointer-up",function(b){return a._handlePointerUp(b)}),b.on("pointer-drag",function(b){return a._handlePointerDrag(b)}),b.on("key-down",function(b){return a._handleKeyDown(b)})])}};c.prototype.uninstall=function(){this._viewEventHandles.removeAll()};c.prototype._handleDrag=function(a){0!==this.model.draggedHandles.length&&
a.stopPropagation()};c.prototype._handlePointerMove=function(a){this._clearCachedPickRequest();var b=new e.ScreenPoint({x:a.x,y:a.y});"mouse"===a.pointerType&&(this._hoverAt(b),"drawing"===this.model.state&&(this._endAt(b,a.pointerType),a.stopPropagation()))};c.prototype._handlePointerDown=function(a){this._clearCachedPickRequest();this._isAnyPointerDown=!0;if(f(a)&&this.model.editable){var b=new e.ScreenPoint({x:a.x,y:a.y}),b=this.view.handleAt(b,a.pointerType);"drawing"===this.model.state||!b||
b in this._dragHandles||(this._dragHandles[a.pointerId]=b,this.model.draggedHandles.push(b));0<this.model.draggedHandles.length&&"measured"===this.model.state&&(this.model.state="editing");null!=b&&a.stopPropagation()}};c.prototype._handlePointerUp=function(a){this._clearCachedPickRequest();this._isAnyPointerDown=!1;if(f(a)){var b=new e.ScreenPoint({x:a.x,y:a.y}),d=this._dragHandles[a.pointerId];d&&(delete this._dragHandles[a.pointerId],this.model.draggedHandles.remove(d),0===this.model.draggedHandles.length&&
this.model.finishedMeasurement({cameraAboveGround:this.view.cameraAboveGround}),this._updateHoveredHandle(b,a.pointerType));0===this.model.draggedHandles.length&&"editing"===this.model.state&&(this.model.state="measured")}};c.prototype._handlePointerDrag=function(a){this._clearCachedPickRequest();if(f(a)){var b=new e.ScreenPoint({x:a.x,y:a.y}),d=this._dragHandles[a.pointerId];if(null!=d){switch(a.action){case "update":this._moveHandleTo(d,b,a.pointerType);break;case "end":delete this._dragHandles[a.pointerId],
this.model.draggedHandles.remove(d)}a.stopPropagation()}}};c.prototype._handleImmediateClick=function(a){this._clearCachedPickRequest();if(f(a)&&this.model.editable){var b=new e.ScreenPoint({x:a.x,y:a.y}),d=!1;if(this.model.active)switch(this.model.state){case "initial":this._startAt(b,a.pointerType)&&(this.model.state="drawing",d=!0);break;case "drawing":this._endAt(b,a.pointerType)&&(this.model.finishedMeasurement({cameraAboveGround:this.view.cameraAboveGround}),d=!0);break;case "measured":null===
this.view.handleAt(b,a.pointerType)&&(this.model.clearMeasurement(),this._startAt(b,a.pointerType)&&(this.model.state="drawing",d=!0))}d&&(a.stopPropagation(),this._ignoreClickEventId=a.eventId);"mouse"===a.pointerType&&this._hoverAt(b)}};c.prototype._handleClick=function(a){f(a)&&(this.model.active||this._ignoreClickEventId===a.eventId)&&a.stopPropagation()};c.prototype._handleDoubleClick=function(a){f(a)&&(this.model.active||this._ignoreClickEventId===a.eventId)&&a.stopPropagation()};c.prototype._handleKeyDown=
function(a){"Escape"===a.key&&"drawing"===this.model.state&&(this.model.clearMeasurement(),a.stopPropagation())};c.prototype._hoverAt=function(a){this._updateHoveredHandle(a,"mouse");var b=this._isAnyPointerDown&&"drawing"!==this.model.state&&"editing"!==this.model.state;this.view.requiresCursorPoint&&!b?(a=this._pick(a),a.mapPoint&&(this.model.cursorPoint=a.mapPoint)):this.model.cursorPoint=null};c.prototype._startAt=function(a,b){var d=this._pick(a);if(d.mapPoint)return this.model.startPoint=d.mapPoint,
this.model.startPointSurfaceLocation=this._surfaceLocation(d.mapPoint,d.type),this.model.hoveredHandle="touch"!==b?"start":null,!0;this._updateHoveredHandle(a,b);return!1};c.prototype._endAt=function(a,b){var d=this._pick(a);if(d.mapPoint&&!this.view.overlappingHandles(d.mapPoint,this.model.startPoint))return this.model.endPoint=d.mapPoint,this.model.endPointSurfaceLocation=this._surfaceLocation(d.mapPoint,d.type),this.model.hoveredHandle="touch"!==b?"end":null,!0;this._updateHoveredHandle(a,b);return!1};
c.prototype._moveHandleTo=function(a,b,d){b=this._clipToScreen(b);var c=this._pick(b);if(c.mapPoint)if("start"===a){if(!this.view.overlappingHandles(c.mapPoint,this.model.endPoint))return this.model.startPoint=c.mapPoint,this.model.startPointSurfaceLocation=this._surfaceLocation(c.mapPoint,c.type),this.model.hoveredHandle="touch"!==d?"start":null,!0}else if("end"===a&&!this.view.overlappingHandles(c.mapPoint,this.model.startPoint))return this.model.endPoint=c.mapPoint,this.model.endPointSurfaceLocation=
this._surfaceLocation(c.mapPoint,c.type),this.model.hoveredHandle="touch"!==d?"end":null,!0;this._updateHoveredHandle(b,d);return!1};c.prototype._pick=function(a){var b=this._cachedPickRequest.screenPoint;if(b&&b.x===a.x&&b.y===a.y)return this._cachedPickResult;this._cachedPickRequest.screenPoint=a;return this._cachedPickResult=this.view.pick(this._cachedPickRequest)};c.prototype._clearCachedPickRequest=function(){this._cachedPickRequest.screenPoint=null};c.prototype._clipToScreen=function(a){return new e.ScreenPoint({x:Math.max(0,
Math.min(this.model.sceneView.width,a.x)),y:Math.max(0,Math.min(this.model.sceneView.height,a.y))})};c.prototype._updateHoveredHandle=function(a,b){this.model.hoveredHandle="touch"!==b?this.view.handleAt(a,b):null};c.prototype._surfaceLocation=function(a,b){return"surface"===b?"on-the-surface":a.z>=this.view.getElevation(a)?"above-the-surface":"below-the-surface"};return c}()});
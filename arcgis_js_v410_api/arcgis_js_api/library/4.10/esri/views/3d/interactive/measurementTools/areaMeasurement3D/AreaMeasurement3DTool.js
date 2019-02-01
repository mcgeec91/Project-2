// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/restHelper ../../../../../core/Handles ../../../../../core/watchUtils ../../../../../core/accessorSupport/decorators ./AreaMeasurement3DController ./AreaMeasurement3DModel ./AreaMeasurement3DView ../../../../interactive/InteractiveToolBase ../../../../interactive/interactiveToolUtils".split(" "),function(q,r,f,c,g,h,k,b,l,m,n,p,d){return function(e){function a(a){var b=
e.call(this,a)||this;b._editable=!0;b._editingEnabled=!0;b.model=new m({sceneView:a.view});return b}f(a,e);a.prototype.normalizeCtorArgs=function(a){return g(a,["view"])};a.prototype.initialize=function(){var a=this;this._view=new n(this.model);this._controller=new l(this.model,this._view);this._handles=new h;this._handles.add([k.init(this,"state",function(){"measuring"===a.state?d.setActive(a,!0):"measured"===a.state&&d.setActive(a,!1)}),this.model.draggedVertices.on("change",function(){a.notifyChange("cursor")})])};
a.prototype.destroy=function(){this.detach();this._view.destroy();this._view=null;this._controller.destroy();this._controller=null;this._handles.destroy();this._handles=null};Object.defineProperty(a.prototype,"state",{get:function(){return this.model.isMeasuring?"measured"===this.model.state?"measured":"measuring":"ready"},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isSupported",{get:function(){return"3d"===this.get("view.type")},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"cursor",{get:function(){if(this.model.active&&("drawing"===this.model.state||"initial"===this.model.state))return"crosshair";if(this.model.editable&&("editing"===this.model.state||"measured"===this.model.state)){if(0<this.model.draggedVertices.length)return"grabbing";if(null!=this.model.hoveredVertexHandle)return"pointer";if(this.model.active)return"crosshair"}return null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"editable",{get:function(){return this._editable},set:function(a){this._editable=
a;this._editingEnabled&&(this.model.editable=a)},enumerable:!0,configurable:!0});a.prototype.show=function(){this._view.show();this._controller.install()};a.prototype.hide=function(){this._view.hide();this._controller.uninstall()};a.prototype.reset=function(){this.model.reset()};a.prototype.newMeasurement=function(){this.reset();d.setActive(this,!0)};a.prototype.clearMeasurement=function(){this.reset()};a.prototype.activate=function(){this.model.active=!0};a.prototype.deactivate=function(){this.model.active=
!1;"measured"!==this.model.state&&this.clearMeasurement()};a.prototype.disableEditing=function(){this._editingEnabled=!1;this.model.editable=!1};a.prototype.enableEditing=function(){this._editingEnabled=!0;this.model.editable=this._editable};c([b.property({dependsOn:["model.isMeasuring","model.state"],readOnly:!0})],a.prototype,"state",null);c([b.property({dependsOn:["view.type"],readOnly:!0})],a.prototype,"isSupported",null);c([b.property({dependsOn:["model.active","model.state","model.editable",
"model.hoveredVertexHandle"],readOnly:!0})],a.prototype,"cursor",null);c([b.property({constructOnly:!0})],a.prototype,"model",void 0);c([b.property({type:Boolean})],a.prototype,"editable",null);c([b.aliasOf("model.sceneView")],a.prototype,"view",void 0);c([b.aliasOf("model.mode")],a.prototype,"mode",void 0);c([b.aliasOf("model.unit")],a.prototype,"unit",void 0);c([b.aliasOf("model.areaLabel")],a.prototype,"areaLabel",void 0);c([b.aliasOf("model.area")],a.prototype,"area",void 0);c([b.aliasOf("model.geodesicArea")],
a.prototype,"geodesicArea",void 0);c([b.aliasOf("model.pathLengthLabel")],a.prototype,"pathLengthLabel",void 0);c([b.aliasOf("model.pathLength")],a.prototype,"pathLength",void 0);c([b.aliasOf("model.geodesicPathLength")],a.prototype,"geodesicPathLength",void 0);c([b.aliasOf("model.perimeterLengthLabel")],a.prototype,"perimeterLengthLabel",void 0);c([b.aliasOf("model.perimeterLength")],a.prototype,"perimeterLength",void 0);c([b.aliasOf("model.geodesicPerimeterLength")],a.prototype,"geodesicPerimeterLength",
void 0);c([b.aliasOf("model.validMeasurement")],a.prototype,"validMeasurement",void 0);c([b.aliasOf("model.viewData")],a.prototype,"viewData",void 0);return a=c([b.subclass("esri.views.3d.interactive.measurementTools.areaMeasurement3D.AreaMeasurement3DTool")],a)}(b.declared(p))});
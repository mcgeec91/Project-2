// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/SymbolStyler/templates/SymbolStyler.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv class\x3d"${css.symbolPreviewContainer}" data-dojo-attach-point\x3d"dap_symbolPreviewContainer"\x3e\r\n    \x3cdiv class\x3d"${css.symbolPreview}" data-dojo-attach-point\x3d"dap_symbolPreview"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/StackController" class\x3d"${css.tabBar}" data-dojo-props\x3d"containerId:\'${id}_stackContainer\'" data-dojo-attach-point\x3d"dap_stackController"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/StackContainer" id\x3d"${id}_stackContainer" data-dojo-attach-point\x3d"dap_stackContainer" data-dojo-props\x3d"doLayout: false" class\x3d"${css.content}"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" title\x3d"${labels.shape}" data-dojo-attach-point\x3d"dap_shapeContainer"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_symbolPicker"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_useImageContent"\x3e\r\n        \x3cdiv class\x3d"${css.link}" data-dojo-attach-point\x3d"dap_addImage" tabindex\x3d"0"\x3e${labels.useImage}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dap_shapeImageUrlContainer" class\x3d"${css.shapeImageUrlContainer}"\x3e\r\n          \x3cdiv data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"dap_shapeImageUrlInput" class\x3d"${css.urlInput} dijitInline"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"dap_loadShapeImageUrl" class\x3d"dijitInline ${css.addIcon}" tabindex\x3d"0"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"dap_shapeImageUrlErrorDisplay" class\x3d"${css.errorDisplay}"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_shapeSizeControls"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dap_shapeSizeLabel" class\x3d"${css.label}"\x3e${labels.symbolSize}\x3c/div\x3e\r\n        \x3cdiv class\x3d"${css.inlineInputContainer}"\x3e\r\n          \x3cdiv class\x3d"${css.symbolSizeInput} ${css.inlineInput}" data-dojo-attach-point\x3d"dap_symbolSizeOptions"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/widgets/HorizontalSlider" data-dojo-attach-point\x3d"dap_shapeSizeSlider"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"dijit/form/NumberSpinner"  data-dojo-attach-point\x3d"dap_shapeSizeTextBox"\x3e\x3c/div\x3e\r\n            \x3cspan class\x3d"${css.text}" data-dojo-attach-point\x3d"dap_sizeUnitLabel"\x3e\x3c/span\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" title\x3d"${labels.fill}" data-dojo-attach-point\x3d"dap_fillContainer"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/widgets/ColorPicker" data-dojo-attach-point\x3d"dap_fillColorPicker" data-dojo-props\x3d"showSuggestedColors: true"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/widgets/SymbolStyler/ColorRampPicker" data-dojo-attach-point\x3d"dap_fillColorRampPicker" class\x3d"${css.hidden}"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" title\x3d"${labels.outline}" data-dojo-attach-point\x3d"dap_outlineContainer"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/widgets/ColorPicker" data-dojo-attach-point\x3d"dap_outlineColorPicker" data-dojo-props\x3d"showSuggestedColors: true"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/widgets/SymbolStyler/ColorRampPicker" data-dojo-attach-point\x3d"dap_outlineColorRampPicker" class\x3d"${css.hidden}"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_lineWidthLabel" class\x3d"${css.label}"\x3e${labels.lineWidth}\x3c/div\x3e\r\n      \x3cdiv class\x3d"${css.inlineInputContainer}"\x3e\r\n        \x3cdiv class\x3d"${css.lineWidthInput} ${css.inlineInput}" data-dojo-attach-point\x3d"dap_lineWidthOptions"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/widgets/HorizontalSlider" data-dojo-attach-point\x3d"dap_lineWidthSlider"\x3e\x3c/div\x3e\r\n          \x3cselect data-dojo-attach-point\x3d"dap_lineWidthTextBox"\x3e\x3c!--values added dynamically--\x3e\x3c/select\x3e\r\n          \x3cspan class\x3d"${css.text}" data-dojo-attach-point\x3d"dap_lineWidthUnitLabel"\x3e\x3c/span\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"${css.label}" data-dojo-attach-point\x3d"dap_linePatternSelectLabel"\x3e${labels.pattern}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_linePatternSelect"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("../core/domUtils ../core/promiseUtils ../symbols/PictureMarkerSymbol ../symbols/support/symbolPreview ../symbols/WebStyleSymbol ./ColorPicker ./support/colorUtils ./SymbolStyler/_DelayedUpdate ./SymbolStyler/IconSelect ./SymbolStyler/MarkerSymbolPicker ./SymbolStyler/support/schemeUtils ./SymbolStyler/support/stylerUtils ./SymbolStyler/support/symbolUtils dijit/_TemplatedMixin dijit/_WidgetBase dijit/_WidgetsInTemplateMixin dijit/a11yclick dijit/form/CheckBox dijit/form/ComboBoxMixin dijit/form/NumberTextBox dojo/dom-class dojo/dom-construct dojo/keys dojo/number dojo/on dojo/i18n!./SymbolStyler/nls/SymbolStyler dojo/text!./SymbolStyler/templates/SymbolStyler.html ./HorizontalSlider ./SymbolStyler/MarkerSymbolPicker ./SymbolStyler/ColorRampPicker dijit/form/Button dijit/form/ComboBox dijit/form/NumberSpinner dijit/form/Select dijit/form/TextBox dijit/layout/BorderContainer dijit/layout/ContentPane dijit/layout/StackController dijit/layout/StackContainer".split(" "),
function(t,x,y,z,A,B,C,D,u,E,q,f,c,F,G,H,v,I,J,K,n,l,L,M,w,m,N){function k(a){n.remove(t.getNode(a),g.hidden)}function h(a){n.add(t.getNode(a),g.hidden)}var r=c.is3d,g={root:"esri-symbol-styler",symbolPreviewContainer:"esri-symbol-preview-container",symbolPreview:"esri-symbol-preview",tabBar:"esri-tab-bar",content:"esri-content",link:"esri-link",label:"esri-label",shapeImageUrlContainer:"esri-shape-image-url-container",urlInput:"esri-url-input",addIcon:"esri-add-icon",errorDisplay:"esri-error-display",
symbolSizeInput:"esri-symbol-size-input",inlineInput:"esri-inline-input",inlineInputContainer:"esri-symbol-styler__inline-input-container",text:"esri-text",hidden:"esri-hidden",lineWidthInput:"esri-line-width-input",linePattern:"esri-line-pattern",linePatternInput:"esri-line-pattern-input",alt:"esri-alt",disabled:"esri-disabled"};return G.createSubclass([F,H,D],{declaredClass:"esri.widgets.SymbolStyler",baseClass:g.root,templateString:N,labels:m,css:g,constructor:function(){this._tabOptions={};this._delayedCommitPropsTrigger=
this.createUpdateTrigger(this._commitProperties,this);this._initOptimizationControls()},postCreate:function(){this.inherited(arguments);this._setUpComboBox();this._linePatternSelect=new u({baseClass:u.prototype.baseClass+" "+g.root+" "+g.linePatternInput},this.dap_linePatternSelect);h(this.dap_shapeImageUrlContainer);this.dap_shapeImageUrlInput.set("placeholder",m.imageUrlInputPlaceholder);this._lineWidthTextBox.selectOnClick=!0;this.dap_shapeSizeTextBox.selectOnClick=!0;this.dap_lineWidthSlider.intermediateChanges=
!0;this._lineWidthTextBox.intermediateChanges=!0;this.dap_shapeSizeSlider.intermediateChanges=!0;this.dap_shapeSizeTextBox.intermediateChanges=!0;this.dap_fillColorPicker.trackColors=!1;this.dap_outlineColorPicker.trackColors=!1;this._linePatternSelect.addIconOptions(["solid","dot","dash","dash-dot","long-dash-dot-dot"],g.linePattern);this._importRecentColors();this.dap_outlineColorPicker._enableTransparencySlider=function(){};this.dap_outlineColorPicker._disableTransparencySlider=function(){}},startup:function(){this.inherited(arguments);
var a=new E(this._getSymbolPickerParams(),this.dap_symbolPicker);a.startup();this._symbolPicker=a;this._addHandlers()},destroy:function(){l.empty(this.dap_symbolPreview);l.destroy(this._optimizationSection);this._optimizationCheckBox.destroy();this.dap_shapeContainer.destroy();this.dap_fillContainer.destroy();this.dap_outlineContainer.destroy();this.inherited(arguments)},_RECENT_FILL_COLORS_ITEM_KEY:"symbolStyler/recent/fill/colors",_RECENT_OUTLINE_COLORS_ITEM_KEY:"symbolStyler/recent/outline/colors",
_defaultMinLineWidthInPx:0,_defaultMinShapeSizeInPx:1,_defaultMaxLineWidthInPx:18,_defaultMaxShapeSizeInPx:120,_originalSymbol:null,_editedSymbol:null,_activeTabName:null,_externalSizing:!1,_delayedCommitPropsTrigger:null,_linePatternSelect:null,_symbolPicker:null,_customImageSymbol:null,_optimizationSection:null,_optimizationCheckBox:null,_isPreppingEdit:null,_hasSymbolBeenModified:null,shapeSymbol:null,_setShapeSymbolAttr:function(a){this._adjustOutlineProperties(this._editedSymbol,a);this._set("shapeSymbol",
a);this._editedSymbol=a;this._updateTabs(a);this._toggleOutlineColorControls(a);this._delayedCommitPropsTrigger()},shapeSize:null,_setShapeSizeAttr:function(a){this._set("shapeSize",a);this._delayedCommitPropsTrigger()},_shapeImageUrl:null,_setShapeImageUrlAttr:function(a){this._set("shapeImageUrl",a);this._delayedCommitPropsTrigger()},fillColor:null,_setFillColorAttr:function(a){this._set("fillColor",a);this._delayedCommitPropsTrigger()},fillColorRamp:null,_setFillColorRampAttr:function(a){this._set("fillColorRamp",
a);this._delayedCommitPropsTrigger()},outlineColorRamp:null,_setOutlineColorRampAttr:function(a){this._set("outlineColorRamp",a);this._delayedCommitPropsTrigger()},outlineWidth:null,_setOutlineWidthAttr:function(a){this._set("outlineWidth",a);this._delayedCommitPropsTrigger()},outlineColor:null,_setOutlineColorAttr:function(a){var b=!!this._optimizationOptions&&this._optimizationCheckBox.checked;a&&b&&(a.a=.5,this.dap_outlineColorPicker.set("color",a,!1));this._set("outlineColor",a);this._delayedCommitPropsTrigger()},
outlinePattern:null,_setOutlinePatternAttr:function(a){this._set("outlinePattern",a);this._delayedCommitPropsTrigger()},mode:"2d",_setModeAttr:function(a){var b="2d"===a;this._set("mode",a);this.dap_linePatternSelect.hidden=!b;this.dap_linePatternSelectLabel.hidden=!b;this.dap_useImageContent.hidden=!b},portal:null,previewVisible:!0,_setPreviewVisibleAttr:function(a){this._set("previewVisible",a);this.dap_symbolPreviewContainer.hidden=!a;this._delayedCommitPropsTrigger()},edit:function(a,b){("web-style"===
a.type?a.fetchSymbol():x.resolve(a.clone())).then(c.ensureProps).then(function(d){var e;b=b||{};e=b.colorRamp;if(r(d)&&"3d"!==this.mode||!r(d)&&"2d"!==this.mode)throw Error("symbol-styler:incompatible-symbol-edit","tried to edit a symbol with an incompatible mode",{symbol:d,mode:this.mode});this._isPreppingEdit=!0;this._colorRamp=e;this._originalSymbol=a;this._editedSymbol=d;this._hasSymbolBeenModified=!1;this._activeTabName=b.activeTab;this._externalSizing=b.externalSizing;this._tabOptions=b.tabOptions||
{};this._optimizationOptions="boolean"===typeof b.optimizeOutline?{value:b.optimizeOutline}:void 0;this._setUpColorControls(b.schemes,e);this._assimilateSymbol(d);this._toggleSizingControls(this._externalSizing);this._updateSymbolPicker(b);this._toggleOutlineColorControls(d);this._toggleOptimizationOptions();d=c.hasExtrudeSymbolLayer(d)||c.hasTextSymbolLayer(a)?this.dap_fillContainer:this.dap_shapeContainer;l.place(this.dap_shapeSizeControls,d.domNode,"last")}.bind(this))},getStyle:function(){var a=
this._editedSymbol.clone(),b={};b.symbol=!this._hasSymbolBeenModified&&a.styleOrigin?new A({name:a.styleOrigin.name,styleUrl:a.styleOrigin.styleUrl,styleName:a.styleOrigin.styleName,portal:a.styleOrigin.portal}):a;this._colorRamp&&(a=(a=c.isLine(a,"2d")||c.isPoint(a,"2d")&&c.hasPureOutlineStyle(a))?this.dap_outlineColorRampPicker:this.dap_fillColorRampPicker,b.colorRamp=a.get("selected").colors);this._optimizationOptions&&(b.optimizeOutline=this._optimizationCheckBox.checked);return b},storeColors:function(){this._storeRecentColors(this.dap_fillColorPicker,
this._RECENT_FILL_COLORS_ITEM_KEY);this._storeRecentColors(this.dap_outlineColorPicker,this._RECENT_OUTLINE_COLORS_ITEM_KEY)},_initOptimizationControls:function(){var a=new I,b=l.create("div",{className:B.prototype.css.section});l.create("label",{"for":a.id,className:g.label,innerHTML:m.autoAdjustOutline},b);a.on("change",function(a){var b=this.dap_outlineColorPicker.get("color");b.a=a?.5:1;this.dap_outlineColorPicker.set("color",b);this._delayedCommitPropsTrigger()}.bind(this));a.placeAt(b,"first");
this._optimizationSection=b;this._optimizationCheckBox=a},_toggleOutlineColorControls:function(a){var b=this.dap_outlineColorRampPicker,d=this.dap_outlineColorPicker;this._shouldShowOutlineColorRamp(a)?(k(b),h(d)):(k(d),h(b))},_shouldShowOutlineColorRamp:function(a){return this._colorRamp&&(c.isLine(a,"2d")||c.isPoint(a,"2d")&&c.hasPureOutlineStyle(a))},_setUpColorControls:function(a,b){var d=this.dap_outlineColorRampPicker,e=this.dap_outlineColorPicker,p=this.dap_fillColorRampPicker,f=this.dap_fillColorPicker,
g;b?(g={colors:b.colors},b.scheme&&(g.scheme=b.scheme),c.isLine(this._editedSymbol,"2d")?(d.set({numStops:b.numStops,schemes:a,selected:g}),h(e),k(d)):(c.isPoint(this._editedSymbol,"2d")&&d.set({numStops:b.numStops,schemes:a,selected:g}),p.set({numStops:b.numStops,schemes:a,selected:g}),k(p),k(e),h(f),h(d)),e.set("suggestedColors",q.getOutlineColors(a))):(k(f),k(e),h(p),h(d),this._updateSuggestedColors(f,q.getFillColors(a)),this._updateSuggestedColors(e,q.getOutlineColors(a)))},_toggleOptimizationOptions:function(){var a=
this._optimizationOptions,b=this._optimizationSection;c.isPolygon(this._editedSymbol,"2d")&&a?(this._optimizationCheckBox.set("value",a.value),l.place(b,this.dap_outlineColorPicker.dap_recentColorSection)):b.parentNode&&l.empty(b.parentNode)},_importRecentColors:function(){this.dap_fillColorPicker.loadRecentColors(this._RECENT_FILL_COLORS_ITEM_KEY);this.dap_outlineColorPicker.loadRecentColors(this._RECENT_OUTLINE_COLORS_ITEM_KEY)},_toggleSizingControls:function(a){var b=!1,d=!1;a&&(c.isLine(this._editedSymbol)?
d=!0:b=!0);this._toggleLabeledControls({labels:this.dap_lineWidthLabel,controls:[this._lineWidthTextBox,this.dap_lineWidthSlider],disabled:d});this._toggleLabeledControls({labels:this.dap_shapeSizeLabel,controls:[this.dap_shapeSizeTextBox,this.dap_shapeSizeSlider],disabled:b})},_toggleLabeledControls:function(a){var b=[].concat(a.labels),d=[].concat(a.controls),c=a.disabled;b.forEach(function(a){n.toggle(a,g.disabled,c)});d.forEach(function(a){f.toggleControl(a,c)})},_updateSymbolPicker:function(a){var b=
this._tabOptions.symbolDisplayMode?this._tabOptions.symbolDisplayMode:c.isPoint(this._editedSymbol,"2d")&&this._colorRamp?"default":"portal";this.dap_useImageContent.hidden="3d"===this.mode||"portal"!==b;this._symbolPicker.set({displayMode:b,symbolSource:c.getSymbolSource(this._editedSymbol),filters:a.filters});this._symbolPicker.refresh({freshStorage:a.freshStorage})},_adjustOutlineProperties:function(a,b){var d=this.dap_fillColorPicker,e=this.dap_outlineColorPicker,p=this.dap_fillColorRampPicker,
f=this.dap_outlineColorRampPicker;c.switchedFromRasterToVectorSymbol(a,b)?(d.set("color",b.color),a=c.getOutline(b),e.set("color",a.color),this._lineWidthTextBox.set("value",a.size),this._linePatternSelect.set("value",a.style)):c.switchedFromPureOutline(a,b)&&this._colorRamp?p.set("selected",f.get("selected")):c.switchedToPureOutline(a,b)&&(this._colorRamp?f.set("selected",p.get("selected")):(a=c.getOutline(a),d=e.get("color"),a.color?(b=C.isBright(a.color))&&.2>a.color.a?(d.a=.2,e.set("color",d)):
!b&&.1>a.color.a&&(d.a=.1,e.set("color",d)):e.set("color",b.color)))},_getTabContainer:function(a){return"fill"===a?this.dap_fillContainer:"outline"===a?this.dap_outlineContainer:this.dap_shapeContainer},_storeRecentColors:function(a,b){a.addRecentColor(a.get("color"));a.saveRecentColors(b)},_addHandlers:function(){this._linePatternSelect.on("change",function(a){this._markAsModified();this.set("outlinePattern",a)}.bind(this));this.own(w(this.dap_loadShapeImageUrl,v,function(){this._markAsModified();
this._loadImage(this.dap_shapeImageUrlInput.get("value"))}.bind(this)));this.own(w(this.dap_addImage,v,function(){k(this.dap_shapeImageUrlContainer);this.dap_shapeImageUrlInput.focus()}.bind(this)));this.dap_shapeImageUrlInput.on("input",function(a){a.keyCode===L.ENTER&&(this._markAsModified(),this._loadImage(this.dap_shapeImageUrlInput.get("value")))}.bind(this));this.dap_shapeImageUrlInput.on("change",function(a){this._markAsModified();this.set("shapeImageUrl",a)}.bind(this));this.dap_fillColorPicker.on("color-change",
function(a){this._markAsModified();this.set("fillColor",a.color)}.bind(this));this.dap_fillColorRampPicker.on("color-ramp-change",function(a){this._markAsModified();this.set("fillColorRamp",a.colors)}.bind(this));this.dap_outlineColorRampPicker.on("color-ramp-change",function(a){this._markAsModified();this.set("outlineColorRamp",a.colors)}.bind(this));this.dap_outlineColorPicker.on("color-change",function(a){this._markAsModified();a=a.color;!this.outlineColor&&a&&0===this.outlineWidth||null===this.outlineWidth?
this._lineWidthTextBox.set("value",1):this.outlineColor&&!a&&this._lineWidthTextBox.set("value",0);this.set("outlineColor",a)}.bind(this));f.bindSliderAndTextBox(this.dap_lineWidthSlider,this._lineWidthTextBox);f.bindSliderAndTextBox(this.dap_shapeSizeSlider,this.dap_shapeSizeTextBox);this._symbolPicker.on("symbol-select",function(a){this._hideImageUrlInput();this.set("shapeSymbol",a.selection)}.bind(this));this.dap_shapeSizeTextBox.on("change",function(a){this._markAsModified();this.set("shapeSize",
a)}.bind(this));this.dap_fillColorPicker.on("color-change",function(a){this._markAsModified();this.set("fillColor",a.color)}.bind(this));this.dap_outlineColorPicker.on("color-change",function(a){this._markAsModified();this.set("outlineColor",a.color)}.bind(this));this._lineWidthTextBox.on("change",function(a){this._markAsModified();this.set("outlineWidth",a)}.bind(this))},_markAsModified:function(){this._hasSymbolBeenModified=!this._isPreppingEdit},_setUpComboBox:function(){var a=K.createSubclass([J]),
b=document.createDocumentFragment();[1,1.2,1.5,2,3,4,5,6,7,8,9,10].forEach(function(a){b.appendChild(l.create("option",{innerHTML:M.format(a)}))});this.dap_lineWidthTextBox.appendChild(b);this._lineWidthTextBox=new a({},this.dap_lineWidthTextBox)},_loadImage:function(a){this._clearUrlImageErrorDisplay();c.testImageUrl(a).then(function(b){var d=this._customImageSymbol;b=c.preserveAspectRatio({dimensions:b,targetDimension:"width",targetSize:this.shapeSize});d?(d.url=a,d.height=b.height,d.width=b.width):
this._customImageSymbol=d=new y(a,b.width,b.height);this._symbolPicker.addCustomImageSymbol(d);this.set("shapeSymbol",d)}.bind(this)).catch(function(){this.dap_shapeImageUrlErrorDisplay.innerHTML=m.imageLoadError}.bind(this))},_clearUrlImageErrorDisplay:function(){this.dap_shapeImageUrlErrorDisplay.innerHTML=""},_getActiveTabAttr:function(){var a=this.dap_stackContainer.selectedChildWidget;return a===this.dap_outlineContainer?"outline":a===this.dap_fillContainer?"fill":"shape"},_updateTabs:function(a){var b=
c.getApplicableTabs(a,this._tabOptions.excluded),d=this.dap_stackContainer,e=0;Object.keys(b).forEach(function(a,c){c=b[a];a=this._getTabContainer(a);"disabled"===c.state&&f.disable(a);"enabled"===c.state&&f.enable(a);"excluded"===c.state?a.domNode.parentNode&&d.removeChild(a):(a.domNode.parentNode||d.addChild(a,e),e++)},this);1===d.getChildren().length?h(this.dap_stackController.domNode):k(this.dap_stackController.domNode);this._supportsPattern(a)?(k(this.dap_linePatternSelectLabel),k(this._linePatternSelect.domNode)):
(h(this.dap_linePatternSelectLabel),h(this._linePatternSelect.domNode));a=this._getTabContainer(this._activeTabName);-1<this.dap_stackContainer.getIndexOfChild(a)&&this.dap_stackContainer.selectChild(a);f.ensureEnabledChildSelection(this.dap_stackContainer)},_supportsPattern:function(a){return c.isLine(a,"2d")||c.isPolygon(a,"2d")},_syncControls:function(a){var b;this._hideImageUrlInput();this._updateSizingControls();var d=c.getApplicableTabs(a,this._tabOptions.excluded);"enabled"===d.shape.state&&
(b=c.getMarkerLength(a),this.set("shapeSize",b),f.silentlyUpdateIntermediateChangingValueWidget(this.dap_shapeSizeSlider,b),f.silentlyUpdateIntermediateChangingValueWidget(this.dap_shapeSizeTextBox,b));"enabled"===d.fill.state&&(b=c.getFillColor(a),this.set("fillColor",b),this.dap_fillColorPicker.set("color",b,!1),c.hasExtrudeSymbolLayer(a)||c.hasTextSymbolLayer(a))&&(b=c.getMarkerLength(a),this.set("shapeSize",b),f.silentlyUpdateIntermediateChangingValueWidget(this.dap_shapeSizeSlider,b),f.silentlyUpdateIntermediateChangingValueWidget(this.dap_shapeSizeTextBox,
b));"enabled"===d.outline.state&&(a=c.getOutline(a))&&(this.set({outlineColor:a.color,outlineWidth:a.size,outlinePattern:a.style}),this.dap_outlineColorPicker.set("color",a.color,!1),f.silentlyUpdateIntermediateChangingValueWidget(this.dap_lineWidthSlider,a.size),f.silentlyUpdateIntermediateChangingValueWidget(this._lineWidthTextBox,a.size),this._linePatternSelect.set("value",a.style,!1))},_updateSizingControls:function(){var a=this._editedSymbol,b=c.is3d(a),d=c.getOutlineUnit(a),e=c.getSizeUnit(a),
h=c.getOutline(a),a=c.getMarkerLength(a),a=b&&"meters"===e?99999999:a>this._defaultMaxShapeSizeInPx?Math.ceil(a):this._defaultMaxShapeSizeInPx,k=b?"meters"===e?.001:1:this._defaultMinShapeSizeInPx;f.updateSliderAndTextBoxConstraints({textBox:this._lineWidthTextBox,slider:this.dap_lineWidthSlider,minimum:b?"meters"===d?.001:0:this._defaultMinLineWidthInPx,maximum:b&&"meters"===d?99999999:h&&h.size>this._defaultMaxLineWidthInPx?Math.ceil(h.size):this._defaultMaxLineWidthInPx});this.dap_lineWidthUnitLabel.innerHTML=
"meters"===d?m.meters:m.px;f.updateSliderAndTextBoxConstraints({textBox:this.dap_shapeSizeTextBox,slider:this.dap_shapeSizeSlider,minimum:k,maximum:a});this.dap_sizeUnitLabel.innerHTML="meters"===e?m.meters:m.px;n.toggle(this.dap_lineWidthSlider.domNode,g.hidden,"meters"===d);n.toggle(this.dap_shapeSizeSlider.domNode,g.hidden,"meters"===e)},_assimilateSymbol:function(a){this._updateTabs(a);this._syncControls(a)},_getSymbolPickerParams:function(){return{portal:this.portal,symbolSource:"2d"===this.mode?
"symbol-set":"web-style"}},_hideImageUrlInput:function(){this._clearUrlImageErrorDisplay();h(this.dap_shapeImageUrlContainer);this.dap_shapeImageUrlInput.set("value","")},_getFillColor:function(){var a=this._editedSymbol;return r(a)||c.isLine(a)||!this._colorRamp?this.fillColor:this._getMiddleItem(this.fillColorRamp)},_getMiddleItem:function(a){return a[Math.floor(.5*(a.length-1))]},_getOutlineColor:function(){return this._shouldShowOutlineColorRamp(this._editedSymbol)?this._getMiddleItem(this.outlineColorRamp):
this.outlineColor},_commitProperties:function(){var a=this._editedSymbol,b=c.getApplicableTabs(a,this._tabOptions.excluded);"enabled"!==b.shape.state||this._externalSizing||c.updateShape({symbol:a,size:this.shapeSize});"enabled"===b.fill.state&&(c.updateFill({symbol:a,color:this._getFillColor()}),(c.hasExtrudeSymbolLayer(a)||c.hasTextSymbolLayer(a))&&c.updateShape({symbol:a,size:this.shapeSize}),this._isPreppingEdit||c.ensureSupportedSimpleFillSymbolStyle(a));"enabled"===b.outline.state&&c.updateOutline({symbol:a,
color:this._getOutlineColor(),pattern:this.outlinePattern,size:this.outlineWidth});this.previewVisible&&this._updatePreviewSymbol();this._toggleOutlineOptions();this._isPreppingEdit=!1;this.emit("style-update")},_toggleOutlineOptions:function(){var a=!!this._optimizationOptions&&this._optimizationCheckBox.checked,b=this.outlineColor,d=c.isLine(this._editedSymbol),e=a||!b,f=!b;this._toggleLabeledControls({labels:this.dap_lineWidthLabel,controls:[this._lineWidthTextBox,this.dap_lineWidthSlider],disabled:this._externalSizing&&
d||!b||a});this._toggleLabeledControls({labels:this.dap_linePatternSelectLabel,controls:this._linePatternSelect,disabled:f});this._toggleLabeledControls({labels:[this.dap_outlineColorPicker.dap_transparencyLabel],controls:[this.dap_outlineColorPicker.dap_transparencySlider],disabled:e})},_updatePreviewSymbol:function(){var a=this._editedSymbol,b=this.dap_symbolPreview;l.empty(b);c.hasTextSymbolLayer(a)||z.renderPreviewHTML(a,{node:b,size:24}).then(function(){n.toggle(b,g.alt,c.blendsIntoBackground(a))})},
_updateSuggestedColors:function(a,b){a.set("suggestedColors",b)}})});
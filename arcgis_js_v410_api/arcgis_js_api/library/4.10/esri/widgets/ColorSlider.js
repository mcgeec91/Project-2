// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/ColorSlider/templates/ColorSlider.html":'\x3cdiv class\x3d"${_css.container}"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_containerNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_titleNode"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_sliderNode"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_scaleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("./Widgette ./RendererSlider ./RendererSlider/sliderUtils ../core/lang ../core/numberUtils ../renderers/support/utils dijit/_TemplatedMixin dojo/dom-style dojox/gfx dojo/text!./ColorSlider/templates/ColorSlider.html".split(" "),function(p,q,g,m,n,r,t,l,d,u){return p.createSubclass([t],{_rampNode:null,_sliderHeight:null,_colorRampSurface:null,_histogramSurface:null,_surfaceRect:null,_barsGroup:null,_updateTimer:null,_transparentBackgroundNode:null,_css:null,_defaultHeight:200,_handles:[0,4],
_primaryHandleIndex:null,declaredClass:"esri.widgets.ColorSlider",templateString:u,properties:{visualVariable:null,minValue:{dependsOn:["statistics"],get:function(){return this.get("statistics.min")||0},set:function(a){if(void 0===a)return this._clearOverride("minValue");this._override("minValue",a)}},maxValue:{dependsOn:["statistics"],get:function(){return this.get("statistics.max")||100},set:function(a){if(void 0===a)return this._clearOverride("maxValue");this._override("maxValue",a)}},histogram:null,
statistics:null,zoomOptions:null,numHandles:{value:2,set:function(a){a=3===a?a:2;this._handles=3===a?[0,2,4]:[0,4];this._set("numHandles",a)}},syncedHandles:{value:!1,set:function(a){this._primaryHandleIndex=3===this.numHandles?2:null;this._set("syncedHandles",a)}},labelsVisible:!0,ticksVisible:!0,handlesVisible:!0,histogramVisible:!0,statisticsVisible:!0,transparentBackgroundEnabled:!1,ratioLabelsVisible:null,histogramWidth:100,rampWidth:26,isDate:!1,values:null},constructor:function(){this._css=
{container:"esri-color-info-slider",rampSurface:"esri-slider-ramp-surface"}},postCreate:function(){this.inherited(arguments);this._setUpDataDefaults()},startup:function(){this.inherited(arguments);this._slider=new q({type:"ColorSlider",values:this.values,isDate:this.isDate,minimum:this.zoomOptions?this.zoomOptions.minSliderValue:this.minValue,maximum:this.zoomOptions?this.zoomOptions.maxSliderValue:this.maxValue,_minZoomLabel:this.zoomOptions?this.minValue:null,_maxZoomLabel:this.zoomOptions?this.maxValue:
null,_isZoomed:this.zoomOptions?!0:!1,labelsVisible:this.labelsVisible,ticksVisible:this.ticksVisible,handlesVisible:this.handlesVisible,ratioLabelsVisible:this.ratioLabelsVisible,handles:this._handles,primaryHandleIndex:this._primaryHandleIndex},this._sliderNode);this._slider.startup();this._rampNode=this._slider._sliderAreaRight;this._sliderHeight=l.get(this._rampNode,"height")||this._defaultHeight;this._valuesAutoAdjust();this._createSVGSurfaces();this._slider.on("slide",function(){this._valuesAutoAdjust();
this._fillRamp()}.bind(this));this._slider.on("data-change",function(a){this.values=a.values;this._valuesAutoAdjust();this._updateVisualVariable(this._slider.values);this._fillRamp();this.emit("data-change",{})}.bind(this));this._slider.on("handle-value-change",function(a){this.values=a.values;this._valuesAutoAdjust();this._updateVisualVariable(this._slider.values);this._fillRamp();this._updateRendererSlider();this.emit("handle-value-change",{})}.bind(this));this._slider.on("data-value-change",function(a){this.set({minValue:a.min,
maxValue:a.max});this._updateRendererSlider();this.emit("data-value-change",{})}.bind(this));this._slider.on("stop",function(){this.emit("handle-value-change",{})}.bind(this));this._slider.on("zoom-out",function(){this.zoomOptions=null}.bind(this));this.statistics&&this.statisticsVisible&&this._generateStatistics();this.histogramVisible&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram();this.watch("visualVariable, numHandles, statistics, histogram, zoomOptions, handlesVisible, labelsVisible, ticksVisible, ratioLabelsVisible",
this._updateTimeout);this.watch("zoomOptions",this._zoomEventHandler);this.watch("histogramVisible",this._toggleHistogram);this.watch("transparentBackgroundEnabled",this._toggleTransparentBackground)},destroy:function(){this._slider&&this._slider.destroy();this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy();this.countTooltips&&this.countTooltips.forEach(function(a){a.destroy()})},refresh:function(){this._updateTimeout()},_updateTimeout:function(){this._updateRendererSlider()},
_updateRendererSlider:function(){var a=this.get("ratioLabelsVisible");"percent"!==a&&"percentTotal"!==a&&(this.ratioLabelsVisible=null);null!==this.zoomOptions&&!1!==this.zoomOptions?(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue,this._slider.set({minimum:this.zoomOptions.minSliderValue,maximum:this.zoomOptions.maxSliderValue,ratioLabelsVisible:this.ratioLabelsVisible,_minZoomLabel:this.minValue,_maxZoomLabel:this.maxValue,
_isZoomed:!0})):this._slider.set({minimum:this.minValue,maximum:this.maxValue,ratioLabelsVisible:this.ratioLabelsVisible,_minZoomLabel:null,_maxZoomLabel:null,_isZoomed:!1});this.values=this._generateHandleValues(m.clone(this.visualVariable.stops));this._slider.set({values:this.values,handles:this._handles,primaryHandleIndex:this._primaryHandleIndex});this._slider._reset();this._slider._updateRoundedLabels();this._slider._generateMoveables();this._clearRect();this._createSVGSurfaces();this.statistics&&
this.statisticsVisible&&this._generateStatistics();this.histogramVisible&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram()},_generateHandleValues:function(a){a.forEach(function(a,c){if(1===c||3===c)a.hidden=!0;2===c&&2===this.numHandles&&(a.hidden=!0)},this);return a.slice()},_valuesAutoAdjust:function(){var a=this._slider.values,b=[],c,k,e,f,g,d,h;(a||[]).some(function(a,c){a.hidden||b.push(c)});for(d=0;d<b.length-1;d++)for(c=b[d],k=b[d+1],e=k-c,f=a[c].value,
g=a[k].value,h=c+1;h<k;h++)a[h].value=f*(k-h)/e+g*(h-c)/e},_zoomEventHandler:function(){this.emit("zoom",{zoomed:!!this.zoomOptions})},_setUpDataDefaults:function(){var a=this.visualVariable.stops;null!==this.zoomOptions&&(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue);a[0].value===a[a.length-1].value&&0!==a[0].value&&(this.set({minValue:0,maxValue:2*a[0].value}),a[0].value=this.maxValue/5,a[a.length-1].value=
this.maxValue/5*4);this.minValue===this.maxValue&&(0===this.minValue?this.maxValue=100:null===this.minValue?this.set({minValue:0,maxValue:100}):this.set({minValue:0,maxValue:2*this.minValue}));this.values=this._generateHandleValues(m.clone(a))},_createSVGSurfaces:function(){this._colorRampSurface=d.createSurface(this._rampNode,this.rampWidth-2,this._sliderHeight);this._colorRampSurface.rawNode.setAttribute("class",this._css.rampSurface);this._surfaceRect=this._colorRampSurface.createRect({width:this.rampWidth,
height:this._sliderHeight});this._transparentBackgroundNode=g.generateTransparentBackground(this._colorRampSurface,this.rampWidth-2,this._sliderHeight-2,this.transparentBackgroundEnabled);this._histogramSurface=g.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth);this._fillRamp();null!==this.zoomOptions&&(this.toggleSliderBottom&&this.toggleSliderTop?(this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(d.matrix.translate(0,
5)),this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(d.matrix.translate(0,195))):this.toggleSliderBottom?this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(d.matrix.translate(0,195)):this.toggleSliderTop&&this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(d.matrix.translate(0,5)))},_fillRamp:function(){var a=
this._getGradientColorStops();null!==this.zoomOptions?this.toggleSliderBottom&&this.toggleSliderTop?this._surfaceRect.setFill({type:"linear",x1:0,y1:10,x2:0,y2:this._sliderHeight-10,colors:a}):this.toggleSliderBottom?this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight-20,colors:a}):this.toggleSliderTop&&this._surfaceRect.setFill({type:"linear",x1:0,y1:20,x2:0,y2:this._sliderHeight,colors:a}):this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight,colors:a})},
_getGradientColorStops:function(){var a=this._slider.minimum,b=this._slider.maximum;return this._slider.values.slice().map(function(c){return{color:c.color,offset:(b-c.value)/(b-a)}}).reverse()},_clearRect:function(){this._colorRampSurface.destroy();this._histogramSurface.destroy()},_toggleTransparentBackground:function(){this.transparentBackgroundEnabled?this._transparentBackgroundNode.setFill(g.getTransparentFill()):this._transparentBackgroundNode.setFill(null)},_updateVisualVariable:function(a){var b=
this.visualVariable.stops;a&&b&&a.length===b.length&&(b.forEach(function(c,b){c.value=a[b].value;a[b].index=b}),r.updateColorStops({stops:b,changes:a,isDate:this.isDate}))},_showHistogram:function(){this.histogram||this.zoomOptions&&this.zoomOptions.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.histogramVisible?(l.set(this._barsGroup.rawNode,"display","inline-block"),this._showHistogram()):l.set(this._barsGroup.rawNode,
"display","none")},_generateHistogram:function(){var a=this.zoomOptions&&this.zoomOptions.histogram?this.zoomOptions.histogram:this.histogram;this._barsGroup=g.generateHistogram(this._histogramSurface,a,this.histogramWidth,this.rampWidth,this.isLeftToRight());this.countTooltips=g.generateCountTooltips(a,this._barsGroup)},_generateStatistics:function(){if(!(2>this.statistics.count||isNaN(this.statistics.avg)||isNaN(this.maxValue))){var a=this.statistics,b=this._slider,c=this.zoomOptions||null,d=g.getPrecision(this.maxValue),
e,f;a.min===a.max&&a.min===a.avg?(e=0,f=2*a.avg):(e=a.min,f=a.max);if(e!==b.minimum||f!==b.maximum)e=b.minimum,f=b.maximum;c&&(e=c.minSliderValue,f=c.maxSliderValue);b=this._sliderHeight*(f-a.avg)/(f-e);a=this.get("ratioLabelsVisible")?n.round([this._slider._getRatioFromValue(a.avg),e,f])[0]:n.round([a.avg,f,e])[0];this._avgHandleObjs=g.generateAvgLine(this._histogramSurface,a,b,d,this.isLeftToRight(),this.isDate,this.get("ratioLabelsVisible"))}}})});
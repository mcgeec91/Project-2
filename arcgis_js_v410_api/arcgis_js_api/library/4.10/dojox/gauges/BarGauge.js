//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/event dojox/gfx ./_Gauge ./BarLineIndicator dojo/dom-geometry".split(" "),function(g,e,h,p,k,l,m,n,d){return g("dojox.gauges.BarGauge",m,{dataX:5,dataY:5,dataWidth:0,dataHeight:0,_defaultIndicator:n,startup:function(){this.getChildren&&h.forEach(this.getChildren(),function(a){a.startup()});this.dataWidth||(this.dataWidth=this.gaugeWidth-10);this.dataHeight||(this.dataHeight=this.gaugeHeight-10);this.inherited(arguments)},
_getPosition:function(a){return this.dataX+Math.floor((a-this.min)/(this.max-this.min)*this.dataWidth)},_getValueForPosition:function(a){return(a-this.dataX)*(this.max-this.min)/this.dataWidth+this.min},drawRange:function(a,b){b.shape&&(b.shape.parent.remove(b.shape),b.shape=null);var c=this._getPosition(b.low),d=this._getPosition(b.high);a=a.createRect({x:c,y:this.dataY,width:d-c,height:this.dataHeight});if(e.isArray(b.color)||e.isString(b.color))a.setStroke({color:b.color}),a.setFill(b.color);else if(b.color.type){var f=
this.dataY+this.dataHeight/2;b.color.x1=c;b.color.x2=d;b.color.y1=f;b.color.y2=f;a.setFill(b.color);a.setStroke({color:b.color.colors[0].color})}else l.svg&&(a.setStroke({color:"green"}),a.setFill("green"),a.getEventSource().setAttribute("class",b.color.style));a.connect("onmouseover",e.hitch(this,this._handleMouseOverRange,b));a.connect("onmouseout",e.hitch(this,this._handleMouseOutRange,b));b.shape=a},getRangeUnderMouse:function(a){var b=null,c=d.getContentBox(this.gaugeContent);a=this._getValueForPosition(a.clientX-
c.x);if(this._rangeData)for(c=0;c<this._rangeData.length&&!b;c++)Number(this._rangeData[c].low)<=a&&Number(this._rangeData[c].high)>=a&&(b=this._rangeData[c]);return b},_dragIndicator:function(a,b){this._dragIndicatorAt(a,b.pageX,b.pageY);k.stop(b)},_dragIndicatorAt:function(a,b,c){c=d.position(a.gaugeContent,!0);b=a._getValueForPosition(b-c.x);b<a.min&&(b=a.min);b>a.max&&(b=a.max);a._drag.value=b;a._drag.onDragMove(a._drag);a._drag.draw(this._indicatorsGroup,!0);a._drag.valueChanged()}})});
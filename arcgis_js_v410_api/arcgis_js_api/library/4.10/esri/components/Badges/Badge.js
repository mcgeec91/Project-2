// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(function(){return function(g){function c(a){if(d[a])return d[a].exports;var b=d[a]={i:a,l:!1,exports:{}};return g[a].call(b.exports,b,b.exports,c),b.l=!0,b.exports}var d={};return c.m=g,c.c=d,c.d=function(a,b,f){c.o(a,b)||Object.defineProperty(a,b,{enumerable:!0,get:f})},c.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})},c.t=function(a,b){if((1&b&&(a=c(a)),8&b)||4&b&&
"object"==typeof a&&a&&a.__esModule)return a;var f=Object.create(null);if(c.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:a}),2&b&&"string"!=typeof a)for(var d in a)c.d(f,d,function(b){return a[b]}.bind(null,d));return f},c.n=function(a){var b=a&&a.__esModule?function(){return a.default}:function(){return a};return c.d(b,"a",b),b},c.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},c.p="",c(c.s=253)}({253:function(g,c,d){d.r(c);c.default=function(a,b){var c=a.key,d=a.size,
g=a.text,k=a.title,h=a.tooltip,e=a.tooltipDirection,l=a.backgroundColor,m=a.textColor;a=a.children;e={"qual-badge__container":!0,"qual-badge__container--small":"small"===d,"qual-badge__container--tooltip":!!h,"qual-badge__container--tooltip-left":"left"===e,"qual-badge__container--tooltip-top":"top"===e,"qual-badge__container--tooltip-right":"right"===e,"tooltip-bottom":!e||"bottom"===e,"tooltip-left":"left"===e,"tooltip-top":"top"===e,"tooltip-right":"right"===e};return"small"===d?b("span",{key:c+
"-small",classes:e,class:"qual-badge__container--small","aria-label":h,style:"background-color: "+l+"; color: "+m+";",title:h?void 0:k},a):b("span",{key:c+"-regular",classes:e,class:"qual-badge__container--regular","aria-label":h,style:"background-color: "+l+"; color: "+m+";",title:k},b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},a),b("span",{class:"qual-badge__text"},g))}}})});
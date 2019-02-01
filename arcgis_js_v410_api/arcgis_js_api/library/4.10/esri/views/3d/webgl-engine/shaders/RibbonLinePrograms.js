// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(g,d,e,b,f){Object.defineProperty(d,"__esModule",{value:!0});var c=function(a){return f.glslifyDefineMap({WALL:a.wall,SCREENSCALE:a.screenScale,STIPPLE:a.stipple,SLICE:a.slice})};d.colorPass={name:"ribbon-line-color",shaders:function(a){return{vertexShader:c(a)+b.resolveIncludes("materials/ribbonLine/ribbonLine.vert"),fragmentShader:c(a)+b.resolveIncludes("materials/ribbonLine/colorPass.frag")}},
attributes:e.Default3D};d.highlightPass={name:"ribbon-line-highlight",shaders:function(a){return{vertexShader:c(a)+b.resolveIncludes("materials/ribbonLine/ribbonLine.vert"),fragmentShader:c(a)+b.resolveIncludes("materials/ribbonLine/highlightPass.frag")}},attributes:e.Default3D}});
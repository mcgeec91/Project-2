// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","./sources/resolver","../../../webgl/programUtils"],function(g,d,b,c){Object.defineProperty(d,"__esModule",{value:!0});d.background={name:"background",shaders:function(a){return{vertexShader:c.glslifyDefineMap({ID:a.id,PATTERN:a.pattern})+b.resolveIncludes("background/background.vert"),fragmentShader:c.glslifyDefineMap({ID:a.id,PATTERN:a.pattern})+b.resolveIncludes("background/background.frag")}},attributes:{a_pos:0}};d.circle={name:"circle",shaders:function(a){return{vertexShader:c.glslifyDefineMap({ID:a.id})+
b.resolveIncludes("circle/circle.vert"),fragmentShader:c.glslifyDefineMap({ID:a.id})+b.resolveIncludes("circle/circle.frag")}},attributes:{a_pos:0,a_color:1,a_stroke_color:2,a_data:3}};var e=function(a){return c.glslifyDefineMap({ID:a.id,DD:a.dd,PATTERN:a.pattern})};d.fill={name:"fill",shaders:function(a){return{vertexShader:e(a)+b.resolveIncludes("fill/fill.vert"),fragmentShader:e(a)+b.resolveIncludes("fill/fill.frag")}},attributes:{a_pos:0,a_color:1}};d.outline={name:"outline",shaders:function(a){return{vertexShader:c.glslifyDefineMap({ID:a.id,
DD:a.dd})+b.resolveIncludes("outline/outline.vert"),fragmentShader:c.glslifyDefineMap({ID:a.id,DD:a.dd})+b.resolveIncludes("outline/outline.frag")}},attributes:{a_pos:0,a_offset:1,a_xnormal:2,a_color:3}};d.icon={name:"icon",shaders:function(a){return{vertexShader:c.glslifyDefineMap({ID:a.id,DD:a.dd,SDF:a.sdf})+b.resolveIncludes("icon/icon.vert"),fragmentShader:c.glslifyDefineMap({ID:a.id,DD:a.dd,SDF:a.sdf})+b.resolveIncludes("icon/icon.frag")}},attributes:{a_pos:0,a_vertexOffset:1,a_tex:2,a_levelInfo:3,
a_color:4,a_size:5}};var f=function(a){return c.glslifyDefineMap({ID:a.id,DD:a.dd,PATTERN:a.pattern})};d.line={name:"line",shaders:function(a){return{vertexShader:f(a)+b.resolveIncludes("line/line.vert"),fragmentShader:f(a)+b.resolveIncludes("line/line.frag")}},attributes:{a_pos:0,a_offsetAndNormal:1,a_accumulatedDistance:2,a_color:3,a_width:4}};d.text={name:"text",shaders:function(a){return{vertexShader:c.glslifyDefineMap({ID:a.id,DD:a.dd})+b.resolveIncludes("text/text.vert"),fragmentShader:c.glslifyDefineMap({ID:a.id,
DD:a.dd})+b.resolveIncludes("text/text.frag")}},attributes:{a_pos:0,a_vertexOffset:1,a_tex:2,a_levelInfo:3,a_color:4,a_size:5}};d.tileInfo={name:"tileInfo",shaders:{vertexShader:b.resolveIncludes("tileInfo/tileInfo.vert"),fragmentShader:b.resolveIncludes("tileInfo/tileInfo.frag")},attributes:{a_pos:0}}});
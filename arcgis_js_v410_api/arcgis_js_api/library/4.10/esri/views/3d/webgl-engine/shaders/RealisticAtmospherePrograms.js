// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(e,a,d,b,c){Object.defineProperty(a,"__esModule",{value:!0});a.program={name:"realistic-atmosphere-color",shaders:function(a){return{vertexShader:c.glslifyDefineMap({HAZE:a.haze})+b.resolveIncludes("environment/realisticAtmosphere.vert"),fragmentShader:c.glslifyDefineMap({HAZE:a.haze})+b.resolveIncludes("environment/realisticAtmosphere.frag")}},attributes:d.Default3D}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/compilerUtils ../../../../geometry/support/aaBoundingBox ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil".split(" "),function(n,c,f,g,k,a){Object.defineProperty(c,"__esModule",{value:!0});var h=g.fromValues(-.5,-.5,-.5,.5,.5,.5),l=g.fromValues(-.5,-.5,0,.5,.5,1),m=g.fromValues(-.5,-.5,0,.5,.5,.5);c.isValidPrimitive=function(a){switch(a){case "sphere":case "cube":case "diamond":case "cylinder":case "cone":case "inverted-cone":case "tetrahedron":return!0}return!1};
c.primitiveBoundingBox=function(a){switch(a){case "sphere":case "cube":case "diamond":return h;case "cylinder":case "cone":case "inverted-cone":return l;case "tetrahedron":return m;default:f.neverReached(a)}};c.primitiveGeometryData=function(c){switch(c){case "sphere":return a.createPolySphereGeometry(.5,2,!0);case "cube":return a.createBoxGeometry(1);case "cylinder":return a.createCylinderGeometry(1,.5,32,[0,0,1],[0,0,.5]);case "cone":return a.cgToGIS(a.createConeGeometry(1,.5,15,!1));case "inverted-cone":return a.cgToGIS(a.createConeGeometry(1,
.5,15,!0));case "tetrahedron":return a.cgToGIS(a.createTetrahedronGeometry(1));case "diamond":return a.cgToGIS(a.createDiamondGeometry(1));default:f.neverReached(c)}};c.primitiveLodResources=function(c,g,h){var d=function(b,c,d){void 0===d&&(d=!1);return{levels:b.map(function(b,f){var e=c(b.tesselation);d&&a.cgToGIS(e);return{components:[{geometry:new k(e,h+("_lod"+f)),material:g}],faceCount:e.indexCount/3,minScreenSpaceRadius:b.minScreenSpaceRadius}})}};switch(c){case "sphere":return d([{tesselation:0,
minScreenSpaceRadius:0},{tesselation:1,minScreenSpaceRadius:8},{tesselation:2,minScreenSpaceRadius:16},{tesselation:3,minScreenSpaceRadius:50},{tesselation:4,minScreenSpaceRadius:250}],function(b){return a.createPolySphereGeometry(.5,b,!0)});case "cube":return d([{tesselation:0,minScreenSpaceRadius:0}],function(b){return a.createBoxGeometry(1)});case "cone":return d(e,function(b){return a.createConeGeometry(1,.5,b,!1)},!0);case "inverted-cone":return d(e,function(b){return a.createConeGeometry(1,
.5,b,!0)},!0);case "cylinder":return d(e,function(b){return a.createCylinderGeometry(1,.5,b,[0,0,1],[0,0,.5])});case "tetrahedron":return d([{tesselation:0,minScreenSpaceRadius:0}],function(b){return a.createTetrahedronGeometry(1)},!0);case "diamond":return d([{tesselation:0,minScreenSpaceRadius:0}],function(b){return a.createDiamondGeometry(1)},!0);default:f.neverReached(c)}};var e=[{tesselation:6,minScreenSpaceRadius:0},{tesselation:18,minScreenSpaceRadius:7},{tesselation:64,minScreenSpaceRadius:65}]});
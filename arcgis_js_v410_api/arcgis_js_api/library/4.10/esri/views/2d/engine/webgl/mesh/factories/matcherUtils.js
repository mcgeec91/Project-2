// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/Error","../../../../../../core/Logger","../../util/Matcher"],function(k,a,f,g,c){Object.defineProperty(a,"__esModule",{value:!0});var h=g.getLogger("esri/views/2d/engine/webgl/mesh/factories/matcherUtils");a.createMatcher=function(b,d,e,a){switch(b.type){case "simple":return c.default.fromSimpleRenderer(b,d,e);case "unique-value":case "uniqueValue":return c.MapMatcher.fromUVRenderer(b,d,e,a);case "class-breaks":case "classBreaks":return c.IntervalMatcher.fromCBRenderer(b,
d,e,a);default:return h.error(new f("mapview-mesh:invalid-renderer","Unable to handle unknown renderer type")),null}}});
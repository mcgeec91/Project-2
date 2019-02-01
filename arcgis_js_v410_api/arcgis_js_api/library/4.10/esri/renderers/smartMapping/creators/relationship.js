// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper dojo/i18n!../../nls/smartMapping ../../../core/lang ../../../core/promiseUtils ./type ./support/utils ../support/utils ../symbology/relationship ../../support/AuthoringInfo".split(" "),function(M,h,v,w,z,e,A,c,n,p,B){function C(a){if(!(a&&a.layer&&a.view&&a.field1&&a.field2))return e.reject(c.createError("relationship-renderer:missing-parameters","'layer', 'view', 'field1' and 'field2' parameters are required"));var b=v({},a);b.symbolType=
b.symbolType||"2d";b.defaultSymbolEnabled=null==b.defaultSymbolEnabled?!0:b.defaultSymbolEnabled;b.classificationMethod=b.classificationMethod||"quantile";b.numClasses=b.numClasses||3;b.focus=b.focus||null;if(-1===D.indexOf(b.classificationMethod))return e.reject(c.createError("relationship-renderer:invalid-parameters","classification method "+b.classificationMethod+" is not supported"));if(2>b.numClasses||4<b.numClasses)return e.reject(c.createError("relationship-renderer:invalid-parameters","'numClasses' must be 2, 3 or 4"));
if(a.focus&&-1===E.indexOf(a.focus))return e.reject(c.createError("relationship-renderer:invalid-parameters","'focus' must be 'HH', 'HL', 'LH', 'LL' or null"));a=[0,1,2];var g=n.createLayerAdapter(b.layer,a);return(b.layer=g)?g.load().then(function(){var a=g.geometryType,d=-1<b.symbolType.indexOf("3d");if("mesh"===a)b.symbolType="3d-volumetric",b.colorMixMode=b.colorMixMode||"replace",b.edgesType=b.edgesType||"none";else{if(d&&("polyline"===a||"polygon"===a))return e.reject(c.createError("relationship-renderer:not-supported",
"3d symbols are not supported for polyline and polygon layers"));if(-1<b.symbolType.indexOf("3d-volumetric")&&(!b.view||"3d"!==b.view.type))return e.reject(c.createError("relationship-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'"))}var a=b.field1,d=b.field2,f=[a.field,d.field];a.normalizationField&&f.push(a.normalizationField);d.normalizationField&&f.push(d.normalizationField);return(a=c.verifyBasicFieldValidity(g,
f,"relationship-renderer:invalid-parameters"))?e.reject(a):b}):e.reject(c.createError("relationship-renderer:invalid-parameters","'layer' must be one of these types: "+n.getLayerTypeLabels(a).join(", ")))}function F(a){var b=a.relationshipScheme,g=a.basemap;b?b=p.cloneScheme(b):(b=(a=p.getSchemes({basemap:a.basemap,geometryType:a.geometryType,theme:a.theme,worldScale:a.worldScale,view:a.view}))&&a.primaryScheme,g=a&&a.basemapId);return{scheme:b,basemapId:g}}function G(a,b){a=z.clone(H[a]);return p.flatten2DArray(a,
b)}function I(a,b){return G(a,b).map(function(a){return{value:a,count:0}})}function J(a,b,g,c){var d=a.field;a=a.normalizationField;var f=b.field;b=b.normalizationField;g=g.map(function(a){return[a.minValue,a.maxValue]});c=c.map(function(a){return[a.minValue,a.maxValue]});var e=K[g.length];return"\n  var field1 \x3d $feature['"+d+"'];\n  var field2 \x3d $feature['"+f+"'];\n  var hasNormField1 \x3d "+(a?"true":"false")+";\n  var hasNormField2 \x3d "+(b?"true":"false")+";\n  var normField1 \x3d "+(a?
"$feature['"+a+"']":"null")+";\n  var normField2 \x3d "+(b?"$feature['"+b+"']":"null")+";\n\n  if (\n    IsEmpty(field1) ||\n    IsEmpty(field2) ||\n    (hasNormField1 \x26\x26 (IsEmpty(normField1) || normField1 \x3d\x3d 0)) ||\n    (hasNormField2 \x26\x26 (IsEmpty(normField2) || normField2 \x3d\x3d 0))\n  ) {\n    return null;\n  }\n\n  var value1 \x3d IIf(hasNormField1, (field1 / normField1), field1);\n  var value2 \x3d IIf(hasNormField2, (field2 / normField2), field2);\n\n  var breaks1 \x3d "+
JSON.stringify(g)+";\n  var breaks2 \x3d "+JSON.stringify(c)+";\n  var classCodes \x3d "+JSON.stringify(e)+";\n\n  function getClassCode(value, breaks) {\n    var code \x3d null;\n\n    for (var i in breaks) {\n      var info \x3d breaks[i];\n      if (value \x3e\x3d info[0] \x26\x26 value \x3c\x3d info[1]) {\n        code \x3d classCodes[i];\n        break;\n      }\n    }\n\n    return code;\n  }\n\n  var code1 \x3d getClassCode(value1, breaks1);\n  var code2 \x3d getClassCode(value2, breaks2);\n\n  var classValue \x3d IIf(IsEmpty(code1) || IsEmpty(code2), null, code1 + code2);\n  return classValue;\n  "}
function L(a,b,g){var k=a.basemap,d=a.classificationMethod,f=a.field1,x=a.field2,l=a.focus,q=a.numClasses,m=a.layer,r=b.classBreakInfos,t=g.classBreakInfos;if(q!==r.length||r.length!==t.length)return e.reject(c.createError("relationship-renderer:error","incompatible class breaks"));var h=I(q,l),n=J(a.field1,a.field2,r,t),u=F({basemap:k,geometryType:m.geometryType,theme:"default",relationshipScheme:a.relationshipScheme,worldScale:-1<a.symbolType.indexOf("3d-volumetric"),view:a.view}).scheme;return A.createRenderer({layer:m,
basemap:k,valueExpression:n,valueExpressionTitle:w.relationship.legendTitle,numTypes:-1,sortEnabled:!1,defaultSymbolEnabled:a.defaultSymbolEnabled,typeScheme:v({colors:p.getColors(u,q,l)},u),statistics:{uniqueValueInfos:h},legendOptions:a.legendOptions,symbolType:a.symbolType,colorMixMode:a.colorMixMode,edgesType:a.edgesType,view:a.view}).then(function(a){for(var c=a.renderer,e=w.relationship,k=0,m=c.uniqueValueInfos;k<m.length;k++){var h=m[k];h.label=e[h.value]}e=new B({type:"relationship",classificationMethod:d,
numClasses:q,focus:l,field1:{field:f.field,normalizationField:f.normalizationField,classBreakInfos:r.map(y)},field2:{field:x.field,normalizationField:x.normalizationField,classBreakInfos:t.map(y)}});c.authoringInfo=e;return{renderer:c,classBreaks:{field1:b,field2:g},uniqueValueInfos:a.uniqueValueInfos,relationshipScheme:u,basemapId:a.basemapId}})}Object.defineProperty(h,"__esModule",{value:!0});var D=["equal-interval","natural-breaks","quantile"],E=["HH","HL","LH","LL"],H={2:[["HL","HH"],["LL","LH"]],
3:[["HL","HM","HH"],["ML","MM","MH"],["LL","LM","LH"]],4:[["HL","HM1","HM2","HH"],["M2L","M2M1","M2M2","M2H"],["M1L","M1M1","M1M2","M1H"],["LL","LM1","LM2","LH"]]},K={2:["L","H"],3:["L","M","H"],4:["L","M1","M2","H"]},y=function(a){return{minValue:a.minValue,maxValue:a.maxValue}};h.createRenderer=function(a){return C(a).then(function(a){var b=a.layer,k=a.classificationMethod,d=a.field1,f=a.field2,h=a.numClasses,l=a.view,b=[c.getClassBreaks({layer:b,classificationMethod:k,field:d.field,normalizationField:d.normalizationField,
normalizationType:d.normalizationField?"field":null,minValue:d.minValue,maxValue:d.maxValue,analyzeData:!(null!=d.minValue&&null!=d.maxValue),numClasses:h,view:l}),c.getClassBreaks({layer:b,classificationMethod:k,field:f.field,normalizationField:f.normalizationField,normalizationType:f.normalizationField?"field":null,minValue:f.minValue,maxValue:f.maxValue,analyzeData:!(null!=f.minValue&&null!=f.maxValue),numClasses:h,view:l})];return e.all(b).then(function(b){var d=b[0];b=b[1];return d&&b?L(a,d.result,
b.result):e.reject(c.createError("relationship-renderer:error","error when calculating class breaks"))})})}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/kebabDictionary","../../core/lang"],function(u,d,f,g){function n(b){return null!=b&&b.hasOwnProperty("mapLayerId")}function p(b){return null!=b&&b.hasOwnProperty("dataSource")}function k(b){if(!b)return b;n(b)&&(b.type=d.MAPLAYER);if(p(b)&&(b.type=d.DATALAYER,!b.dataSource.type)){var c=b.dataSource;c.workspaceId?c.type=c.gdbVersion?"table":c.query||c.oidFields?"query-table":"raster":c.leftTableKey&&c.rightTableKey&&c.leftTableSource&&c.rightTableSource&&(c.type=
"join-table",c.leftTableSource=k(c.leftTableSource),c.rightTableSource=k(c.rightTableSource))}return b}function l(b){var c={};if(b.type===d.MAPLAYER)c.mapLayerId=b.mapLayerId,b.gdbVersion&&(c.gdbVersion=b.gdbVersion);else if(b.type===d.DATALAYER){b.fields&&(c.fields=b.fields);var a;a=b.dataSource;var e;switch(a.type){case "table":e={dataSourceName:a.dataSourceName,workspaceId:a.workspaceId,gdbVersion:a.gdbVersion};break;case "query-table":e={geometryType:q.toJSON(a.geometryType),workspaceId:a.workspaceId,
query:a.query,oidFields:a.oidFields,spatialReference:a.spatialReference};break;case "join-table":e={leftTableSource:l(a.leftTableSource),rightTableSource:l(a.rightTableSource),leftTableKey:a.leftTableKey,rightTableKey:a.rightTableKey,joinType:r.toJSON(a.joinType)};break;case "raster":e={workspaceId:a.workspaceId,dataSourceName:a.dataSourceName}}e.type=t.toJSON(a.type);a=g.fixJson(e);c.dataSource=a}c.type=h.toJSON(b.type);return g.fixJson(c)}function m(b){var c={};if(h.fromJSON(b.type)===d.MAPLAYER)c.mapLayerId=
b.mapLayerId,b.gdbVersion&&(c.gdbVersion=b.gdbVersion);else if(h.fromJSON(b.type)===d.DATALAYER){b.fields&&(c.fields=b.fields);var a;a=b.dataSource;var e;switch(a.type){case "table":e={dataSourceName:a.dataSourceName,workspaceId:a.workspaceId,gdbVersion:a.gdbVersion};break;case "queryTable":e={geometryType:q.fromJSON(a.geometryType),workspaceId:a.workspaceId,query:a.query,oidFields:a.oidFields,spatialReference:a.spatialReference};break;case "joinTable":e={leftTableSource:m(a.leftTableSource),rightTableSource:m(a.rightTableSource),
leftTableKey:a.leftTableKey,rightTableKey:a.rightTableKey,joinType:r.fromJSON(a.joinType)};break;case "raster":e={workspaceId:a.workspaceId,dataSourceName:a.dataSourceName}}e.type=t.fromJSON(a.type);a=g.fixJson(e);c.dataSource=a}c.type=h.fromJSON(b.type);return g.fixJson(c)}Object.defineProperty(d,"__esModule",{value:!0});d.MAPLAYER="map-layer";d.DATALAYER="data-layer";var q=f({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",
esriGeometryMultiPatch:"multipatch"}),h=f({mapLayer:d.MAPLAYER,dataLayer:d.DATALAYER}),t=f({joinTable:"join-table",queryTable:"query-table"}),r=f({esriLeftOuterJoin:"left-outer-join",esriLeftInnerJoin:"left-inner-join"});d.isMapLayerSource=n;d.isDataLayerSource=p;d.castSource=k;d.sourceToJSON=l;d.sourceFromJSON=m});
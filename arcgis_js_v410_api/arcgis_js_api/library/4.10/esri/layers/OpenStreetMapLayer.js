// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../geometry ../core/accessorSupport/decorators ./WebTileLayer".split(" "),function(h,k,l,f,c,d,b,g){return function(e){function a(){var a=e.call(this)||this;a.subDomains=["a","b","c"];a.fullExtent=new d.Extent(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,d.SpatialReference.WebMercator);a.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png";
a.operationalLayerType="OpenStreetMap";a.type="open-street-map";a.copyright="Map data \x26copy; OpenStreetMap contributors, CC-BY-SA";return a}f(a,e);c([b.property({readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"subDomains",void 0);c([b.property({readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"fullExtent",void 0);c([b.property({readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"urlTemplate",void 0);c([b.property({type:["OpenStreetMap"]})],a.prototype,"operationalLayerType",void 0);c([b.property({json:{read:!1}})],
a.prototype,"type",void 0);c([b.property({json:{read:!1,write:!1}})],a.prototype,"copyright",void 0);c([b.property({json:{read:!1,write:!1}})],a.prototype,"wmtsInfo",void 0);return a=c([b.subclass("esri.layers.OpenStreetMapLayer")],a)}(b.declared(g))});
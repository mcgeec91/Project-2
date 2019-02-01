// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ./tsSupport/assignHelper ../config ./Error ./has ./Logger ./promiseUtils ../geometry/Point ../geometry/support/webMercatorUtils ../portal/Portal ../tasks/GeometryService ../tasks/support/ProjectParameters".split(" "),function(w,d,x,f,k,g,l,e,m,n,p,q,r){function t(a,c){var b=c.spatialReference;return b.isWGS84?e.resolve(a):b.isWebMercator?e.resolve(n.geographicToWebMercator(a)):u().then(function(c){if(!c)return e.reject(new k("geometry-service:missing-url","Geometry service URL is missing"));
c=new q({url:c});var d=new r({geometries:[a],outSR:b});return c.project(d).then(function(a){return a[0]})})}function u(){if(f.geometryServiceUrl)return e.resolve(f.geometryServiceUrl);var a=p.getDefault();return a.load().catch(function(a){}).then(function(){return a.get("helperServices.geometry.url")})}Object.defineProperty(d,"__esModule",{value:!0});var h=l.getLogger("esri.core.geolocationUtils"),v={maximumAge:0,timeout:15E3,enableHighAccuracy:!0};d.supported=function(){var a=g("esri-geolocation");
a||h.warn("geolocation-unsupported","Geolocation unsupported.");a&&((a=g("esri-secure-context"))||h.warn("insecure-context","Geolocation requires a secure origin."));return a};d.getCurrentPosition=function(a){a||(a=v);var c=e.create(function(b,c){navigator.geolocation.getCurrentPosition(b,c,a)});return e.timeout(c,15E3,void 0)};d.positionToPoint=function(a,c){var b=a&&a.coords||{},b={accuracy:b.accuracy,altitude:b.altitude,altitudeAccuracy:b.altitudeAccuracy,heading:b.heading,latitude:b.latitude,
longitude:b.longitude,speed:b.speed};a=a?{coords:b,timestamp:a.timestamp}:a;a=(a=a&&a.coords)?new m({longitude:a.longitude,latitude:a.latitude,z:a.altitude||null,spatialReference:{wkid:4326}}):null;return t(a,c)}});
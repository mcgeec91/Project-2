// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../tsSupport/assignHelper ./get ./utils ./extensions/serializableProperty".split(" "),function(E,e,C,u,D,r){function q(v,a,f){void 0===f&&(f=y);if(a&&"object"===typeof a){for(var g=D.getProperties(v),p=g.metadatas,e={},d=0,h=Object.getOwnPropertyNames(a);d<h.length;d++){var m=e,k=p,c=h[d],n=a,q=f,b=r.originSpecificReadPropertyDefinition(k[c],q);b&&(!b.read||!1!==b.read.enabled&&!b.read.source)&&(m[c]=!0);for(var w=0,z=Object.getOwnPropertyNames(k);w<z.length;w++){var A=z[w],
b=r.originSpecificReadPropertyDefinition(k[A],q),l;a:{l=c;var B=n;if(b&&b.read&&!1!==b.read.enabled&&b.read.source)if(b=b.read.source,"string"===typeof b){if(b===l||-1<b.indexOf(".")&&0===b.indexOf(l)&&u.exists(b,B)){l=!0;break a}}else for(var x=0;x<b.length;x++){var t=b[x];if(t===l||-1<t.indexOf(".")&&0===t.indexOf(l)&&u.exists(t,B)){l=!0;break a}}l=!1}l&&(m[A]=!0)}}g.setDefaultOrigin(f.origin);h=0;for(m=Object.getOwnPropertyNames(e);h<m.length;h++)d=m[h],c=(k=r.originSpecificReadPropertyDefinition(p[d],
f).read)&&k.source,n=void 0,n=c&&"string"===typeof c?u.valueOf(a,c):a[d],k&&k.reader&&(n=k.reader.call(v,n,a,f)),void 0!==n&&g.set(d,n);if(!f||!f.ignoreDefaults)for(a=0,p=Object.getOwnPropertyNames(p);a<p.length;a++)d=p[a],e[d]||(h=v,m=g,k=f,c=(c=r.originSpecificReadPropertyDefinition(m.metadatas[d],k))&&c.default,void 0!==c&&(h="function"===typeof c?c.call(h,d,k):c,void 0!==h&&m.set(d,h)));g.setDefaultOrigin("user")}}Object.defineProperty(e,"__esModule",{value:!0});var y={origin:"service"};e.read=
q;e.readLoadable=function(e,a,f,g){void 0===g&&(g=y);a=C({},g,{messages:[]});f(a);a.messages.forEach(function(a){"warning"!==a.type||e.loaded?g&&g.messages.push(a):e.loadWarnings.push(a)})};e.default=q});
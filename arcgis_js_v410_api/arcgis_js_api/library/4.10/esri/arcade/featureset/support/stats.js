// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/Deferred","./shared"],function(x,k,l,f){function v(a){a=+a;return isFinite(a)?a-a%1||(0>a?-0:0===a?a:0):a}function n(a){for(var d=0,c=0;c<a.length;c++)d+=a[c];return d/a.length}function p(a){for(var d=n(a),c=0,b=0;b<a.length;b++)c+=Math.pow(d-a[b],2);return c/a.length}function q(a){for(var d=n(a),c=0,b=0;b<a.length;b++)c+=Math.pow(d-a[b],2);return c/(a.length-1)}function r(a){for(var d=0,c=0;c<a.length;c++)d+=a[c];return d}function m(a,d,c,b){void 0===b&&(b=!1);var e=
new l;try{var g=a.iterator(c);t(g,[],d,b).then(f.callback(function(b){e.resolve(b)},e),f.errback(e))}catch(h){e.reject(h)}return e.promise}function t(a,d,c,b){var e=new l;a.next().then(f.callback(function(g){null!==g?c.calculateValueDeferred(g).then(f.callback(function(g){null===g?!1===b&&(d[d.length]=g):d[d.length]=g;t(a,d,c,b).then(f.callback(function(b){e.resolve(b)},e),f.errback(e))},e),f.errback(e)):e.resolve(d)},e),f.errback(e));return e.promise}function w(a,d,c,b){var e=new l;try{var g=a.iterator(b);
u(g,{},[],d,c).then(f.callback(function(b){e.resolve(b)},e),f.errback(e))}catch(h){e.reject(h)}return e.promise}function u(a,d,c,b,e){var g=new l;a.next().then(f.callback(function(h){null!==h?b.calculateValueDeferred(h).then(f.callback(function(h){void 0!==h&&null!==h&&void 0===d[h]&&(c.push(h),d[h]=1);c.length>=e&&-1!==e?g.resolve(c):u(a,d,c,b,e).then(f.callback(function(b){g.resolve(c)},g),f.errback(g))},g),f.errback(g)):g.resolve(c)},g),f.errback(g));return g.promise}Object.defineProperty(k,"__esModule",
{value:!0});k.decodeStatType=function(a){switch(a.toLowerCase()){case "distinct":return"distinct";case "avg":case "mean":return"avg";case "min":return"min";case "sum":return"sum";case "max":return"max";case "stdev":case "stddev":return"stddev";case "var":case "variance":return"var";case "count":return"count"}return""};k.calculateStat=function(a,d,c){void 0===c&&(c=1E3);switch(a.toLowerCase()){case "distinct":a:{a=c;c=[];for(var b={},e=[],g=0;g<d.length;g++){if(void 0!==d[g]&&null!==d[g]){var h=d[g];
if(f.isNumber(h)||f.isString(h))void 0===b[h]&&(c.push(h),b[h]=1);else{for(var l=!1,k=0;k<e.length;k++)!0===f.equalityTest(e[k],h)&&(l=!0);!1===l&&(e.push(h),c.push(h))}}if(c.length>=a&&-1!==a){d=c;break a}}d=c}return d;case "avg":case "mean":return n(d);case "min":return Math.min.apply(Math,d);case "sum":return r(d);case "max":return Math.max.apply(Math,d);case "stdev":case "stddev":return Math.sqrt(p(d));case "var":case "variance":return p(d);case "count":return d.length}return 0};k.min=function(a,
d,c){var b=new l;m(a,d,c,!0).then(f.callback(function(a){0===a.length?b.resolve(null):b.resolve(Math.min.apply(Math,a))},b),f.errback(b));return b.promise};k.max=function(a,d,c){var b=new l;m(a,d,c,!0).then(f.callback(function(a){0===a.length?b.resolve(null):b.resolve(Math.max.apply(Math,a))},b),f.errback(b));return b.promise};k.mean=function(a,d,c){var b=new l,e="";!1===d.isSingleField()&&(e=d.predictType(a.fields,null));m(a,d,c,!0).then(f.callback(function(a){0===a.length?b.resolve(null):(a=n(a),
null===a&&b.resolve(a),"integer"===e?b.resolve(v(a)):b.resolve(a))},b),f.errback(b));return b.promise};k.variance=function(a,d,c){var b=new l;m(a,d,c,!0).then(f.callback(function(a){0===a.length?b.resolve(null):b.resolve(q(a))},b),f.errback(b));return b.promise};k.stdev=function(a,d,c){var b=new l;m(a,d,c,!0).then(f.callback(function(a){0===a.length?b.resolve(null):b.resolve(Math.sqrt(q(a)))},b),f.errback(b));return b.promise};k.sum=function(a,d,c){var b=new l;m(a,d,c,!0).then(f.callback(function(a){0===
a.length?b.resolve(null):b.resolve(r(a))},b),f.errback(b));return b.promise};k.count=function(a,d){var c=new l;try{a.iterator(d).count().then(f.callback(function(a){c.resolve(a)},c),f.errback(c))}catch(b){c.reject(b)}return c.promise};k.distinct=function(a,d,c,b){void 0===c&&(c=1E3);void 0===b&&(b=null);var e=new l;w(a,d,c,b).then(f.callback(function(a){e.resolve(a)},e),f.errback(e));return e.promise}});
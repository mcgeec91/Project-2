//>>built
define("dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/when dojo/promise/all dstore/Store dstore/SimpleQuery dstore/QueryResults".split(" "),function(A,N,H,C,w,I,O,M){function D(a){var d=new H;a.onsuccess=function(a){d.resolve(a.target.result)};a.onerror=function(){a.error.message=a.webkitErrorMessage;d.reject(a.error)};return d.promise}function E(a,d,b){if(x||y.length){a&&(y.push({cursor:a,priority:d,retry:b}),y.sort(function(a,b){return a.priority>b.priority?1:-1}));if(1<=x)return;var c=
y.pop();a=c&&c.cursor}if(a)try{a["continue"](),x++}catch(g){if("TransactionInactiveError"!==g.name&&0!==g.name||!c)throw g;c.retry()}}function J(){return!0}var y=[],x=0,z=window.IDBKeyRange||window.webkitIDBKeyRange;return A([I,O],{constructor:function(a){A.safeMixin(this,a);var d=this,b=this.dbConfig;this.indices=b.stores[this.storeName];this.cachedCount={};for(var c in d.indices)a=d.indices[c],"number"===typeof a&&(d.indices[c]={preference:a});this.db=this.db||b.db;if(!this.db){var g=b.openRequest;
g||(g=b.openRequest=window.indexedDB.open(b.name||"dojo-db",parseInt(b.version,10)),g.onupgradeneeded=function(){var a=d.db=g.result,c;for(c in b.stores){var n=b.stores[c];if(a.objectStoreNames.contains(c))m=g.transaction.objectStore(c);else var m=n.idProperty||"id",m=a.createObjectStore(c,{keyPath:m,autoIncrement:n[m]&&n[m].autoIncrement||!1});for(var l in n)m.indexNames.contains(l)||"autoIncrement"===l||!1===n[l].indexed||m.createIndex(l,l,n[l])}},b.db=D(g));this.db=b.db.then(function(a){return d.db=
a})}},idProperty:"id",storeName:"",indices:{},transaction:function(){var a=this;this._currentTransaction=null;return{abort:function(){a._currentTransaction.abort()},commit:function(){a._currentTransaction=null}}},_getTransaction:function(){if(!this._currentTransaction){this.db||console.error("The database has not been initialized yet");this._currentTransaction=this.db.transaction([this.storeName],"readwrite");var a=this;this._currentTransaction.oncomplete=function(){a._currentTransaction=null};this._currentTransaction.onerror=
function(a){console.error(a)}}return this._currentTransaction},_callOnStore:function(a,d,b,c){var g=this;return C(this.db,function r(n){g.db.then&&(g.db=n);if(n=g._currentTransaction)var m=!0;else n=g._getTransaction();var l,e;if(m)try{e=n.objectStore(g.storeName),b&&(e=e.index(b)),l=e[a].apply(e,d)}catch(u){if("TransactionInactiveError"===u.name||"InvalidStateError"===u.name)return g._currentTransaction=null,r();throw u;}else e=n.objectStore(g.storeName),b&&(e=e.index(b)),l=e[a].apply(e,d);return c?
l:D(l)})},get:function(a){var d=this;return this._callOnStore("get",[a]).then(function(a){return d._restore(a)})},getIdentity:function(a){return a[this.idProperty]},put:function(a,d){d=d||{};this.cachedCount={};var b=this;return this._callOnStore(!1===d.overwrite?"add":"put",[a]).then(function(a){return b._restore(a)})},add:function(a,d){d=d||{};d.overwrite=!1;return this.put(a,d)},remove:function(a){this.cachedCount={};return this._callOnStore("delete",[a])},fetch:function(){return this._fetch(J)},
fetchRange:function(a){return this._fetch(J,a)},forEach:function(a,d){return this._fetch(function(b,c){a.call(d,b,c)})},_union:function(a,d,b){b=b||{};var c=b.start||0,g=b.end||Infinity,k=a.sort,r=a.select;b=a.filter;var n,m;k?(m={sort:k},n=this._createSortQuerier(m)):n=function(a){return a};var l=[],e=0,u=0,v=0,t=[],p,h={},B=[],f=this;return new M(C(b).then(function(b){return w(b.map(function(b,m){function r(a){P.push(a);for(var b=[],e=[];t.every(function(a){if(0<a.length)return(a=a[0])&&e.push(a),
b.push(a)});){if(v>=g||0===e.length){p=!0;return}a=n(e)[0];t[b.indexOf(a)].shift();if(v++>=c&&(B.push(a),!d(a))){p=!0;return}b=[];e=[]}return!0}var P=t[m]=[];b=f._query({filterFunction:a.filterFunction,filter:b,sort:k},function(a){if(!p){var b=f.getIdentity(a);u++;if(b in h)return!0;e++;h[b]=!0;return r(a)}});l[m]=b.totalLength;return b.then(function(a){r(null);return a})}))}).then(function(){return r?r.querier(B):B}),{totalLength:{then:function(){return w(l).then(function(a){return a.reduce(function(a,
b){return a+b})*e/(u||1)}).then.apply(this,arguments)}}})},_normalizeQuery:function(){function a(e){e.forEach(function v(e){if(g)throw Error("Can not process conditions after a union, rearrange the query with the union last");var p=e.type,h=[].slice.call(e.args,0),c=h[0],f=h[1];if(f&&f.fetch&&!f.data)l.push(f.fetch().then(function(a){f.data=a;v(e)},function(a){console.error("Failed to retrieved nested collection",a)}));else if("or"===p)d(h);else if("and"===p)a(h);else if("eq"===p)b(c,f);else if("gt"===
p||"gte"===p)h=k[c]||(k[c]={}),h.from=f,h.excludeFrom="gt"===p,b(c,h);else if("lt"===p||"lte"===p)h=k[c]||(k[c]={}),h.to=f,h.excludeTo="lt"===p,b(c,h);else if("in"===p)d((f.data||f).map(function(a){return{type:"eq",args:[c,a]}}));else if("contains"===p)h=k[c]||(k[c]={}),h.contains=f.data?f.data:f instanceof Array?f:[f],b(c,h);else if("match"===p){f=f.source;if("^"!==f[0]||f.match(/[\{\}\(\)\[\]\.\,\$\*]/))throw Error("The match filter only supports simple prefix matching like /^starts with/");h=k[c]||
(k[c]={});f=f.slice(1);h.from=f;h.to=f+"~";b(c,h)}else throw Error('Unsupported filter type "'+p+'"');})}function d(b){g=b.map(function(b){k={};a([b]);return k})}function b(a,b){"boolean"!==typeof b&&(b&&(b.from||b.to?function(a,c){b.test=function(b){return!a||a<=b&&(!c||c>=b)};b.keyRange=a?c?z.bound(a,c,b.excludeFrom,b.excludeTo):z.lowerBound(a,b.excludeFrom):z.upperBound(c,b.excludeTo)}(b.from,b.to):"object"===typeof b&&b.contains&&function(a){var c,e=a[0];"object"===typeof e&&"match"===e.type?
"^"===e.args[1].source[0]&&(c=e.args[1].source.slice(1),c=z.bound(c,c+"~")):c=z.only(e);b.test=function(b){return a.every(function(a){if("object"===typeof a&&"match"===a.type){var c=a.args[1];return b.some(function(a){return!!c.test(a)})}return b&&-1<b.indexOf(a)})};b.keyRange=c}(b.contains)),k[a]=b)}var c,g,k={},r,n,m,l=[];this.queryLog.forEach(function(b){var e=b.type,d=b.normalizedArguments;if("filter"===e){r=d;var g=c;c=g?function(a){return b.querier(g(a))}:b.querier;a(d,!0)}else"sort"===e?(n=
d[0],n.querier=b.querier):"select"===e&&(m=b)});c=c||function(a){return a};return{filter:0<l.length?w(l).then(function(){return g}):g||k,filterFunction:c,filterOperator:r||null,sort:n,select:m}},_fetch:function(a,d){var b=this._normalizeQuery(),c=b.filter,g=this;return c instanceof Array||c.then?this._union(b,function(b){a(g._restore(b));return!0},d):this._query(b,function(b){a(g._restore(b));return!0},d)},_query:function(a,d,b){function c(a,b,c){v++;var d=k.indices[a];if(d&&!1!==d.indexed&&(b=b||
d.preference*(c||1)||.001,b>u))return u=b,e=a,!0;v++}function g(){function a(a){x--;p.reject(a);E()}C(k._callOnStore("openCursor",L,e,!0),function(c){x++;c.onsuccess=function(a){x--;var e=a.target.result;if(e){if(l){e.advance(l);x++;l=!1;return}q.preFilterOffset++;try{var f=e.value;b.join&&(f=b.join(f));return C(f,function(a){if(0<B([a]).length&&(q.offset++,q.offset>=r&&(G.push(a),!d(a,q.offset-r)||q.offset>=n-1))){c.lastCursor=e;p.resolve(G);E();return}return E(e,b.priority,function(){l=q.preFilterOffset;
G.pop();g()})})}catch(Q){p.reject(Q)}}else{if(!r||q.offset>=r)q.finished=!0;p.resolve(G)}E()};c.onerror=a},a)}b=b||{};var k=this,r=b.start||0,n=b.end||Infinity,m,l,e,u=0,v=0,t,p=new H,h=p.promise,B=a.filterFunction;t=a.filter;var f=a.sort,y=a.select,w;for(w in t){var K=t[w];c(w,null,K&&(K.from||K.to)?.1:1)}var F=JSON.stringify(a.filterOperator)+"-"+JSON.stringify(f),A;if(f)if(a=f[0],a.property===e||c(a.property,1))A=a.descending;else var D=!0,r=0,n=Infinity;var L;e?(m=e in t?(t=t[e])&&t.keyRange?
t.keyRange:z.only(t):null,L=[m,A?"prev":"next"]):L=[];var q=k.cachedPosition;q&&q.queryId===F&&q.offset<r&&1<v?(l=q.preFilterOffset+1,k.cachedPosition=q=N.mixin({},q)):(q=k.cachedPosition={offset:-1,preFilterOffset:-1,queryId:F},2>v&&(q.offset=q.preFilterOffset=(l=r)-1));var G=[];g();if(D){var I=d;d=J;h=h.then(function(a){var c=b.start||0,e=b.end||Infinity;a=f.querier(a).slice(c,e);a.forEach(I);return a})}y&&(h=h.then(function(a){return y.querier(a)}));return new M(h,{totalLength:{then:function(a,
b){function c(a){k.cachedCount[F]=a;return Math.round((q.offset+1.01)/(q.preFilterOffset+1.01)*a)}var d=k.cachedCount[F];return d?a(c(d)):q.finished?(b=new H,b.resolve(q.offset+1),b.then(a)):(m?k._callOnStore("count",[m],e):k._callOnStore("count")).then(c).then(a,b)}}})}})});
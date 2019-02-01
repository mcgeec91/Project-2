// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/PooledArray ../../../../core/urlUtils ./I3SUtil ../../support/orientedBoundingBox".split(" "),function(m,x,p,n,q,h,r){var t="version level sharedResource attributeData geometryData textureData lodSelection".split(" ");m=function(){function c(b,a,k,d,f,g,e,c,v,h,l,m){var u=this;this.rootId=k;this.progressiveLoadPenalty=d;this.nodeIndex=f;this.streamDataSupplier=g;this.viewportQueries=e;this.logger=c;this._isLoaded=v;this._isSelected=
h;this._enable=l;this._needsUpdate=m;this._dirty=!0;this._loadingNodes=new Set;this._indexMissing=1;this._nodesMissing=0;this._maxUnloadedPrio=Number.NEGATIVE_INFINITY;this._maxProcessingPrio=Number.POSITIVE_INFINITY;this._nodeTraversalState={};this._version=0;this._featureEstimate={estimate:0,leafsReached:!1};this._unloadedMemoryEstimate=0;this._missing=new n;this._prefetch=new n;this._updates=new w;this.ignoreServiceOBB=!1;this._maxLodLevel=this.viewportQueries.maxLodLevel;this.rootUrl=q.makeAbsolute(a,
b);this.traverseVisible(function(a,b){return u.nodeTraversalState(b)})}c.prototype.requestReload=function(){this._dirty=!0;this._indexMissing=1;++this._version};c.prototype.update=function(b){var a=this;if(this._dirty){this._nodesMissing=this._indexMissing=0;this._maxProcessingPrio=this._maxUnloadedPrio=Number.NEGATIVE_INFINITY;this._missing.clear();this._prefetch.clear();this._updates.reset(b);var k=!0,d=new l,f=new l;this.traverseVisible(function(g,e,c){a._updateNodeFeatureEstimate(e,f);if(e){if(0===
a._missing.length&&e.children)for(g=0,c=e.children;g<c.length;g++){var h=c[g];a.nodeIndex[h.id]||a._loadingNodes.has(h.id)||a._prefetch.push(p({},h,{baseUrl:e.baseUrl}))}!e.failed&&e.featureData&&0!==e.featureData.length&&(a._isLoaded(e)?(d.known+=e.memory,++d.knownNodes,a._isSelected(e)?e.children&&(k=!1):(d.unremoved+=e.memory,k=!1),a._needsUpdate(e)&&(a._maxProcessingPrio=Math.max(a._maxProcessingPrio,a.entryPriority(e)),a._updates.update.push(e))):(e.memory&&(d.known+=e.memory,++d.knownNodes),
a._isSelected(e)&&(++a._nodesMissing,e.children&&(k=!1),e.memory?(d.missing+=e.memory,d.known+=e.memory,++d.knownNodes):++d.missingNodes,0<=b.indexOf(e.id)?(a._maxProcessingPrio=Math.max(a._maxProcessingPrio,a.entryPriority(e)),a._updates.cancel=a._updates.cancel.filter(function(a){return a!==e.id})):a._enable(e)||(a._maxProcessingPrio=Math.max(a._maxProcessingPrio,a.entryPriority(e)),a._updates.add.push(e)))))}else++a._indexMissing,a._loadingNodes.has(g.id)||a._missing.push(p({},g,{baseUrl:c})),
a._maxProcessingPrio=Math.max(a._maxProcessingPrio,a.entryPriority(g))});this._unloadedMemoryEstimate=d.missing-d.unremoved;3<d.knownNodes&&0<d.missingNodes&&(this._unloadedMemoryEstimate+=d.known/d.knownNodes*d.missingNodes);this._unloadedMemoryEstimate=.8*Math.max(0,this._unloadedMemoryEstimate);this._featureEstimate.estimate=this._computeFeatureEstimate(f);this._featureEstimate.leafsReached=k;this._dirty=0<this._indexMissing||0<this._nodesMissing||0<this._updates.add.length||0<this._updates.update.length||
0<this._updates.cancel.length}};c.prototype.checkFeatureTarget=function(b,a){for(var k=this.viewportQueries.updateScreenSpaceErrorBias(a),d=a,c=a,g=k,e=10;e--;){var h=new l;this._updateFeatureEstimate(d,h);if(this._computeFeatureEstimate(h)<=b){if(d>=a||0<h.missingNodes||0===e)break;g=d;d=.5*(d+c)}else c=d,d=.5*(d+g)}++this._version;this.viewportQueries.updateScreenSpaceErrorBias(k);return Math.min(a,d)};c.prototype._updateFeatureEstimate=function(b,a){var k=this;++this._version;this.viewportQueries.updateScreenSpaceErrorBias(b);
this.traverseVisible(function(b,c){return k._updateNodeFeatureEstimate(c,a)})};c.prototype._updateNodeFeatureEstimate=function(b,a){b&&!b.failed&&b.featureData&&0!==b.featureData.length&&(this._isLoaded(b)?(a.known+=b.numFeatures,++a.knownNodes,this._isSelected(b)||(a.unremoved+=b.numFeatures)):this._isSelected(b)&&(b.numFeatures?(a.missing+=b.numFeatures,a.known+=b.numFeatures,++a.knownNodes):++a.missingNodes))};c.prototype._computeFeatureEstimate=function(b){var a=b.known-b.unremoved;3<b.knownNodes&&
0<b.missingNodes&&(a+=b.known/b.knownNodes*b.missingNodes);return Math.max(0,a)};c.prototype.load=function(b){var a=this;h.buildTopNodeMap(this._missing,b,function(b){return a.entryPriority(b)});if(0>=this._missing.length)return!1;this._maxUnloadedPrio=this.entryPriority(this._missing.front());this._missing.forEach(function(b){return a._loadNode(b)});this._missing.clear();return!0};c.prototype.prefetch=function(b){var a=this;h.buildTopNodeMap(this._prefetch,b,function(b){return a.entryPriority(b)});
if(0>=this._prefetch.length)return!1;this._prefetch.forEach(function(b){return a._loadNode(b)});this._prefetch.clear();return!0};c.prototype.isLoading=function(){return 0<this._indexMissing};c.prototype.getIndexLoading=function(){return this._loadingNodes.size};c.prototype.getIndexMissing=function(){return this._indexMissing};c.prototype.getUnloadedMemoryEstimate=function(){return this._unloadedMemoryEstimate};c.prototype.getNodesMissing=function(){return this._nodesMissing};c.prototype.getUpdates=
function(b){var a=this;h.buildTopNodeMap(this._updates.add,b,function(b){return a.entryPriority(b)},this._maxUnloadedPrio);h.buildTopNodeMap(this._updates.update,Number.POSITIVE_INFINITY,function(b){return a.entryPriority(b)});return this._updates};c.prototype.getFeatureEstimate=function(){return this._featureEstimate};c.prototype.nodeTraversalState=function(b){if(!b)return null;var a=this._nodeTraversalState[b.id];if(a&&a.version===this._version)return a;var c=this.viewportQueries.getLodLevel(b),
d=this.viewportQueries.hasLOD(b),f=!0;if(d)if(b.parentNode){f=this.nodeIndex[b.parentNode.id];if(null==f)return null;f=(f=this._nodeTraversalState[f.id])&&c>f.lodLevel}else f=0<c;if(a)return a.lodLevel=c,a.isChosen=f,a.version=this._version,a;this._nodeTraversalState[b.id]={nodeHasLOD:d,lodLevel:c,isChosen:f,version:this._version};return this._nodeTraversalState[b.id]};c.prototype._loadNode=function(b){var a=this;this._loadingNodes.add(b.id);var c=q.makeAbsolute(b.href,b.baseUrl);this.streamDataSupplier.request(c,
"json").then(function(b,c){var d={id:c.id,mbs:c.mbs,parentNode:c.parentNode,children:c.children,featureData:c.featureData};t.forEach(function(a){d[a]=c.hasOwnProperty(a)?c[a]:null});c.hasOwnProperty("obb")&&!a.ignoreServiceOBB&&(d.obb=r.clone(c.obb),d.hasServiceOBB=!0,a.viewportQueries.updateNode(d.id));a.nodeIndex[d.id]=d;d.baseUrl=b;d.featureData&&1===d.featureData.length&&d.featureData[0].featureRange&&(d.numFeatures=d.featureData[0].featureRange[1]-d.featureData[0].featureRange[0]+1);a.nodeTraversalState(d);
a._loadingNodes.delete(d.id);a._dirty=!0},function(d){a.loadErrorCallback(c);a._loadingNodes.delete(b.id);a._dirty=!0})};c.prototype.entryPriority=function(b){if(null==b.mbs&&b.id===this.rootId)return Infinity;var a=0,c=this.nodeIndex[b.id];if(null!=c&&null!=c.parentNode){var d=this._nodeTraversalState[c.parentNode.id];null!=d&&(a=d.lodLevel)}for(d=this.progressiveLoadPenalty;c;c=c.parentNode?this.nodeIndex[c.parentNode.id]:null)if(this._isLoaded(c)){d=0;break}b=this.viewportQueries.distToPOI(b);
return-b-a*(b+this.progressiveLoadPenalty)+d};c.prototype.traverseVisible=function(b){var a=this.nodeIndex[this.rootId];a?this._traverse({id:this.rootId,mbs:a.mbs,href:this.rootUrl},a,b,""):b({id:this.rootId,mbs:null,href:this.rootUrl},null,"")};c.prototype._traverse=function(b,a,c,d){if(!a.children||0===a.children.length)this.viewportQueries.isGeometryVisible(a)&&c(b,a,d);else if(this.viewportQueries.isNodeVisible(a)&&(c(b,a,d),b=this.nodeTraversalState(a),!b.nodeHasLOD||b.lodLevel!==this._maxLodLevel))for(b=
0,d=a.children;b<d.length;b++){var f=d[b],g=this.nodeIndex[f.id];g?this._traverse(f,g,c,a.baseUrl):this.viewportQueries.isNodeVisible(f)&&c(f,null,a.baseUrl)}};c.prototype.loadErrorCallback=function(b){this.logger.warn("Error loading node: "+b)};c.prototype.updateStats=function(b){this._nodesMissing&&(b.nodes+=" + "+Math.round(this._nodesMissing));this._indexMissing&&(b.index+=" + "+this._indexMissing);b.prio=this._maxProcessingPrio;if(this._featureEstimate.estimate){var a=this._featureEstimate.estimate-
b.features;0<a?b.features+=" + "+a:0>a&&(b.features+=" - "+-a)}};c.prototype.getPriority=function(){return Math.max(this._maxProcessingPrio,this._maxUnloadedPrio)};return c}();var w=function(){function c(){this.update=new n;this.add=new n;this.cancel=[]}c.prototype.reset=function(b){this.add.clear();this.update.clear();this.cancel=b};return c}(),l=function(){return function(){this.unremoved=this.missingNodes=this.missing=this.knownNodes=this.known=0}}();return m});
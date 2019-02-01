// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/has","./Util"],function(m,n,p,g){return function(){function a(b,l,c,d,e){this._locations=this._layout=this._glName=this._context=null;this._indexBuffer=this._buffers=void 0;this._initialized=!1;this._context=b;this._layout=c;this._buffers=d;this._locations=l;e&&(this._indexBuffer=e);this._id=a._nextId++}Object.defineProperty(a.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"glName",{get:function(){return this._glName},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"vertexBuffers",{get:function(){return this._buffers},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"indexBuffer",{get:function(){return this._indexBuffer},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"size",{get:function(){var b=this;return Object.keys(this._buffers).reduce(function(a,c){return a+b._buffers[c].size},this._indexBuffer?this._indexBuffer.size:0)},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"layout",{get:function(){return this._layout},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"locations",{get:function(){return this._locations},enumerable:!0,configurable:!0});a.prototype.dispose=function(b){void 0===b&&(b=!0);if(this._context){var a=this._context.capabilities.vao;a&&this._glName&&(a.deleteVertexArray(this._glName),this._glName=null);this._context.getBoundVAO()===this&&this._context.bindVAO(null);if(b){for(var c in this._buffers)this._buffers[c].dispose(),
delete this._buffers[c];this._indexBuffer&&(this._indexBuffer.dispose(),this._indexBuffer=null)}this._context=null}};a.prototype.initialize=function(){if(!this._initialized){var b=this._context.capabilities.vao;if(b){var a=b.createVertexArray();b.bindVertexArray(a);this._bindLayout();b.bindVertexArray(null);this._glName=a}this._initialized=!0}};a.prototype.bind=function(){this.initialize();var b=this._context.capabilities.vao;b?b.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())};
a.prototype._bindLayout=function(){var b=this._buffers,a=!!this._context.capabilities.vao,c=this._layout,d=this._indexBuffer;b||console.error("Vertex buffer dictionary is empty!");var e=this._context.gl,f;for(f in b){var h=b[f];h||console.error("Vertex buffer is uninitialized!");var k=c[f];k||console.error("Vertex element descriptor is empty!");g.bindVertexBufferLayout(this._context,this._locations,h,k)}d&&(a?e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,d.glName):this._context.bindBuffer(d))};a.prototype.unbind=
function(){this.initialize();var b=this._context.capabilities.vao;b?b.bindVertexArray(null):this._unbindLayout()};a.prototype._unbindLayout=function(){var b=this._buffers,a=this._layout;b||console.error("Vertex buffer dictionary is empty!");for(var c in b){var d=b[c];d||console.error("Vertex buffer is uninitialized!");g.unbindVertexBufferLayout(this._context,this._locations,d,a[c])}(b=this._indexBuffer)&&this._context.unbindBuffer(b.bufferType)};a._nextId=0;return a}()});
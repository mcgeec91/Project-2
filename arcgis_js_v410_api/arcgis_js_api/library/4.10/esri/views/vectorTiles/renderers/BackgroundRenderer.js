// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/libs/gl-matrix-2/gl-matrix ../MemoryBuffer ./rendererUtils ../../webgl/BufferObject ../../webgl/VertexArrayObject".split(" "),function(u,v,q,g,t,m,k){return function(){function e(b){this._patternMatrix=q.mat3f32.create();this._color=q.vec4f32.create();this._rendererInitialized=this._solidrendererInitialized=!1;this._programOptions={id:!1,pattern:!1};this._programCache=b;this._color.set([1,0,0,1])}e.prototype.dispose=function(){this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),
this._solidVertexArrayObject=null);this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)};e.prototype.renderSolidColor=function(b,a){this._solidrendererInitialized||this._initializeSolidRenderer(b);b.bindVAO(this._solidVertexArrayObject);var d=this._programOptions;d.id=!1;d.pattern=!1;d=this._programCache.getProgram(0,0,d);b.bindProgram(d);d.setUniformMatrix4fv("u_transformMatrix",a.u_matrix);d.setUniform2fv("u_normalized_origin",a.u_normalized_origin);d.setUniform1f("u_coord_range",
a.u_coord_range||4096);d.setUniform1f("u_depth",a.u_depth||0);d.setUniform4fv("u_color",a.u_color||this._color);b.drawArrays(5,0,4);b.bindVAO()};e.prototype.render=function(b,a,d,h,e,f,g,m,r){this._rendererInitialized||this._initialize(b);var n=f.getPaintValue("background-color",d);r*=f.getPaintValue("background-opacity",d);var k=f.getPaintValue("background-pattern",d),p=void 0!==k,l=n[3]*r,c=p||1>l;if(!c||0!==h)if(c||1!==h){h=3===h;c=this._programOptions;c.id=h;c.pattern=p;c=this._programCache.getProgram(0,
(h?1:0)<<1|(p?1:0),c);b.bindVAO(this._vertexArrayObject);b.bindProgram(c);c.setUniform1f("u_coord_range",e.coordRange);c.setUniform1f("u_depth",f.z||0);c.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform);c.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord);if(p){f=g.getMosaicItemPosition(k,!0);if(!f)return;d=512*Math.pow(2,Math.floor(d)-e.key.level)*m;q.mat3.identity(this._patternMatrix);e=d/f.size[1];this._patternMatrix[0]=d/f.size[0];this._patternMatrix[4]=e;g.bind(b,
9729,f.page,5);c.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix);c.setUniform1f("u_opacity",r);c.setUniform2f("u_pattern_tl",f.tl[0],f.tl[1]);c.setUniform2f("u_pattern_br",f.br[0],f.br[1]);c.setUniform1i("u_texture",5)}else this._color[0]=l*n[0],this._color[1]=l*n[1],this._color[2]=l*n[2],this._color[3]=l,c.setUniform4fv("u_color",this._color);h&&(a=t.int32To4Bytes(a.layerID),c.setUniform4f("u_id",a[0],a[1],a[2],a[3]));b.drawArrays(5,0,4);b.bindVAO()}};e.prototype._initializeSolidRenderer=
function(b){if(this._solidrendererInitialized)return!0;var a=new Int8Array([0,0,1,0,0,1,1,1]),a=m.createVertex(b,35044,a);this._solidVertexArrayObject=new k(b,this._programCache.getProgramAttributes(0),{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},{geometry:a});return this._solidrendererInitialized=!0};e.prototype._initialize=function(b){if(this._rendererInitialized)return!0;var a=[];a.push(g.i1616to32(0,0));a.push(g.i1616to32(1,0));a.push(g.i1616to32(0,1));
a.push(g.i1616to32(1,1));a=new Uint32Array(a);a=m.createVertex(b,35044,a);this._vertexArrayObject=new k(b,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,divisor:0}]},{geometry:a});return this._rendererInitialized=!0};return e}()});
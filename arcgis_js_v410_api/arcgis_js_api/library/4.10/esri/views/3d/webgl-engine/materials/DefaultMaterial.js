// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/has ../../../../core/libs/gl-matrix-2/gl-matrix ../../support/buffer/InterleavedLayout ../lib/GLMaterialTexture ../lib/Material ../lib/Util ./internal/bufferWriters ./internal/MaterialUtil ./internal/MaterialUtil ../shaders/DefaultPrograms".split(" "),function(y,S,l,z,g,A,m,E,F,G,p,f,n){function r(e,a,c){c=a.slicePlaneEnabled?!1:a.cullFace?"none"!==a.cullFace:!a.transparent&&!a.doubleSided;c?(e.setFaceCullingEnabled(!0),
"front"===a.cullFace?e.setCullFace(1028):e.setCullFace(1029)):e.setFaceCullingEnabled(!1)}function t(e,a){var c=a.vvSizeEnabled;a.vvSizeEnabled?(e.setUniform3fv("vvSizeMinSize",a.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",a.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",a.vvSizeOffset),e.setUniform3fv("vvSizeFactor",a.vvSizeFactor)):c&&e.setUniform3fv("vvSizeValue",a.vvSizeValue);if(c){e.setUniform3fv("vvSymbolAnchor",a.vvSymbolAnchor);var c=a.vvSymbolRotation[2]||0,b=a.vvSymbolRotation[0]||0,
h=a.vvSymbolRotation[1]||0;g.mat4.identity(k);0!==c&&g.mat4.rotateZ(k,k,-c/180*Math.PI);0!==b&&g.mat4.rotateX(k,k,b/180*Math.PI);0!==h&&g.mat4.rotateY(k,k,h/180*Math.PI);e.setUniformMatrix3fv("vvSymbolRotation",g.mat3.fromMat4(H,k))}a.vvColorEnabled&&(e.setUniform1fv("vvColorValues",a.vvColorValues),e.setUniform4fv("vvColorColors",a.vvColorColors))}var B=F.assert;y=function(e){function a(c,b){b=e.call(this,b)||this;b.supportsEdges=!0;b.params=f.copyParameters(c,I);b.instanced=!!c.instanced;b.vertexBufferLayout=
a.getVertexBufferLayout(b.params);b.instanceBufferLayout=b.instanced?a.getInstanceBufferLayout(b.params):null;b.bufferWriter=new J(b.vertexBufferLayout,b.instanceBufferLayout);return b}l(a,e);a.prototype.isVisible=function(){var c=this.params;if(!e.prototype.isVisible.call(this)||0===c.layerOpacity)return!1;var b=c.instanced,a=c.vertexColors,d=c.symbolColors,b=!!b&&-1<b.indexOf("color"),f=c.vvColorEnabled,g="replace"===c.colorMixMode,k=0<c.opacity,c=c.externalColor&&0<c.externalColor[3];return a&&
(b||f||d)?g?!0:k:a?g?c:k:b||f||d?g?!0:k:g?c:k};a.prototype.getParams=function(){return this.params};a.prototype.getParameterValues=function(){return f.copyParameters(this.params)};a.prototype.setParameterValues=function(c){var b=this.params,a;for(a in c)"textureId"===a&&B(b.textureId,"Can only change texture of material that already has a texture"),"castShadows"===a&&B(c.castShadows===b.castShadows,"Can not change shadow casting behavior."),b[a]=c[a];this.notifyDirty("matChanged")};a.prototype.intersect=
function(c,b,a,d,e,k,l,q){if(null!==this.params.verticalOffset){q=d.camera;g.vec3.set(w,a[12],a[13],a[14]);var h=g.vec3.subtract(K,w,q.eye),m=g.vec3.length(h),p=g.vec3.scale(h,h,1/m),n=null,h=null;switch(d.viewingMode){case "global":h=g.vec3.normalize(C,w);break;case "local":h=g.vec3.copy(C,L)}this.params.screenSizePerspective&&(n=g.vec3.dot(h,p));q=f.verticalOffsetAtDistance(q,m,this.params.verticalOffset,n,this.params.screenSizePerspective);g.vec3.scale(h,h,q);g.vec3.transformMat3(x,h,d.transformInverseRotation);
e=g.vec3.subtract(M,e,x);k=g.vec3.subtract(N,k,x)}f.intersectTriangleGeometry(c,b,a,d,e,k,l)};a.prototype.getGLMaterials=function(){return{color:O,depthShadowMap:this.params.castShadows?P:null,normal:Q,depth:D,highlight:R}};a.prototype.getAllTextureIds=function(){return this.params.textureId?[this.params.textureId]:[]};a.getVertexBufferLayout=function(c){var b=A.newLayout().vec3f("position");c.groundNormalShading||(b=c.compressedNormals?b.vec2i16("normalCompressed",{glNormalized:!0}):b.vec3f("normal"));
c.textureId&&(b=b.vec2f("uv0"),c.atlasRegions&&(b=b.vec4u16("region",{glNormalized:!0})));c.vertexColors&&(b=b.vec4u8("color"));c.symbolColors&&(b=b.vec4u8("symbolColor"));c.componentIndices&&(b=b.u16("componentIndex").u16("_padding",{glPadding:!0}));return b};a.getInstanceBufferLayout=function(c){var b=A.newLayout(),b=c.instancedDoublePrecision?b.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):b.mat4f("model").mat4f("modelNormal");c.instanced&&-1<c.instanced.indexOf("color")&&
(b=b.vec4f("instanceColor"));c.instanced&&-1<c.instanced.indexOf("featureAttribute")&&(b=b.vec4f("instanceFeatureAttribute"));return b};return a}(E);var O=function(e){function a(c,b,a){var d=this,h=c.getParams(),d=e.call(this,c,b,a,h.textureId,h.textureInitTransparent)||this;d.params=f.copyParameters(h);c=d.params;d.slot=c.transparent?c.writeDepth?6:9:c.writeStencil?2:4;d.texturing=c.textureId?c.atlasRegions?"AtlasTextured":"Textured":"none";c=c.instanced;d.instanced=!!c;d.instancedColor=!!c&&-1<
c.indexOf("color");d._createPrograms();return d}l(a,e);a.prototype._createPrograms=function(){var c=this;this.programs=p.BindParametersMap.create(this.params,function(b){return c._createProgram(b)})};a.prototype._createProgram=function(c){var b=this.params;return this.programRep.getProgram(n.colorPass,{treeRendering:!!b.treeRendering,viewingMode:this.programRep.globalOptions.viewingMode,textureMode:this.texturing,vertexColors:b.vertexColors,symbolColors:b.symbolColors,flipV:b.flipV,doubleSided:b.doubleSided&&
"normal"===b.doubleSidedType,windowOrderDoubleSided:b.doubleSided&&"winding-order"===b.doubleSidedType,instanced:!!this.instanced,instancedDoublePrecision:b.instancedDoublePrecision,instancedColor:this.instancedColor,receiveShadows:c.receiveShadows,receiveSSAO:c.receiveSSAO,vvSize:b.vvSizeEnabled,vvColor:b.vvColorEnabled,verticalOffset:null!==b.verticalOffset,screenSizePerspective:null!==b.screenSizePerspective,slice:b.slicePlaneEnabled,groundNormalShading:b.groundNormalShading,compressedNormals:b.compressedNormals,
componentColor:null!=b.componentColorBuffer,textureAlphaTest:b.textureAlphaTest,alphaCoverageCorrection:u,iosSafariFix:v})};a.prototype.beginSlot=function(c){return c===this.slot};a.prototype.getProgram=function(){return this.program||this.getPrograms()[0]};a.prototype.getPrograms=function(){return p.BindParametersMap.programs(this.programs)};a.prototype.updateParameters=function(){this.params=this.material.getParameterValues();this.slot=this.params.transparent?this.params.writeDepth?6:9:this.params.writeStencil?
2:4;this.updateTexture(this.params.textureId);this._createPrograms()};a.prototype.bind=function(c,b){var a=this.params,d=this.program=p.BindParametersMap.lookup(this.programs,b);c.bindProgram(d);d.setUniform3fv("ambient",a.ambient);d.setUniform3fv("diffuse",a.diffuse);d.setUniform3fv("specular",a.specular);d.setUniform4fv("externalColor",a.externalColor);d.setUniform1i("colorMixMode",f.colorMixModes[a.colorMixMode]);d.setUniform1f("opacity",a.opacity);d.setUniform1f("layerOpacity",a.layerOpacity);
f.bindVerticalOffset(a.verticalOffset,b,d);f.bindScreenSizePerspective(a.screenSizePerspective,b,d);t(d,a);this.bindTexture(c,d);"none"!==this.texturing&&this.bindTextureSize(c,d);c.setBlendFunctionSeparate(770,771,1,771);a.inverseWindingOrder&&c.setFrontFace(2304);a.transparent?(c.setBlendingEnabled(!0),a.blendModeOneOne?(c.setBlendFunction(1,1),c.setDepthWriteEnabled(!1)):c.setBlendFunctionSeparate(770,771,1,771)):c.setBlendingEnabled(!1);c.setDepthWriteEnabled(a.writeDepth);a.textureAlphaTest&&
d.setUniform1f("textureAlphaCutoff",a.textureAlphaCutoff);a.polygonOffset&&(c.setPolygonOffsetFillEnabled(!0),c.setPolygonOffset(2,2));r(c,a,b);c.setDepthTestEnabled(!0);a.componentIndices&&a.componentColorBuffer&&(a.componentColorBuffer.updateTexture(),a.componentColorBuffer.bind(d,{texName:"uComponentColorTex",invDimName:"uComponentColorTexInvDim",unit:1}))};a.prototype.release=function(c,b){c.setPolygonOffsetFillEnabled(!1);c.setFaceCullingEnabled(!1);c.setBlendingEnabled(!1);c.setBlendFunctionSeparate(770,
771,1,771);c.setDepthWriteEnabled(!0);c.setFrontFace(2305)};a.prototype.bindView=function(c,b){c=this.program=p.BindParametersMap.lookup(this.programs,b);var a=this.params,d=a.instancedDoublePrecision?g.vec3f64.fromValues(b.viewInvTransp[3],b.viewInvTransp[7],b.viewInvTransp[11]):b.origin;f.bindView(d,b.view,c);f.bindCamPos(d,b.viewInvTransp,c);a.instancedDoublePrecision&&f.bindViewOriginDouble(d,c);a.slicePlaneEnabled&&f.bindSlicePlane(d,b.slicePlane,c);b.shadowMappingEnabled&&b.shadowMap.bindView(c,
d)};a.prototype.bindInstance=function(c,b){c=this.program;c.setUniformMatrix4fv("model",b.transformation);c.setUniformMatrix4fv("modelNormal",b.transformationNormal)};a.prototype.getDrawMode=function(){return 4};return a}(m),D=function(e){function a(c,b,a,d){void 0===d&&(d=!1);b=e.call(this,c,b,a,c.getParams().textureId)||this;b.params=f.copyParameters(c.getParams());b.instanced=!!b.params.instanced;b.texturing=c.bufferWriter.vertexBufferLayout.hasField("uv0")?b.params.atlasRegions?"AtlasTextured":
"Textured":"none";b.biased=d;b.selectProgram();b.selectSlot();return b}l(a,e);a.prototype.beginSlot=function(c){return c===this.slot};a.prototype.getProgram=function(){return this.program};a.prototype.selectProgram=function(){this.program=this.programRep.getProgram(n.depthPass,{viewingMode:this.programRep.globalOptions.viewingMode,textureMode:this.texturing,flipV:this.params.flipV,instanced:this.instanced,instancedDoublePrecision:this.params.instancedDoublePrecision,shadowMap:this.biased,vvSize:this.params.vvSizeEnabled,
verticalOffset:null!==this.params.verticalOffset,screenSizePerspective:null!==this.params.screenSizePerspective,slice:this.params.slicePlaneEnabled,textureAlphaTest:this.params.textureAlphaTest,alphaCoverageCorrection:u,iosSafariFix:v})};a.prototype.selectSlot=function(){this.slot=this.params.transparent?this.params.writeDepth?6:9:this.params.writeStencil?2:4};a.prototype.updateParameters=function(){this.params=this.material.getParameterValues();this.selectProgram();this.selectSlot();this.updateTexture(this.params.textureId)};
a.prototype.bind=function(c,b){var a=this.program,d=this.params;c.bindProgram(a);a.setUniform2fv("nearFar",b.nearFar);d.inverseWindingOrder&&c.setFrontFace(2304);f.bindVerticalOffset(d.verticalOffset,b,a);f.bindScreenSizePerspective(d.screenSizePerspective,b,a);t(a,d);d.textureAlphaTest&&a.setUniform1f("textureAlphaCutoff",d.textureAlphaCutoff);this.bindTexture(c,a);r(c,d,b);c.setDepthTestEnabled(!0)};a.prototype.release=function(c){var b=this.params;c.setFaceCullingEnabled(!1);b.inverseWindingOrder&&
c.setFrontFace(2305)};a.prototype.bindView=function(c,b){c=this.program;var a=this.params,d=a.instancedDoublePrecision?g.vec3f64.fromValues(b.viewInvTransp[3],b.viewInvTransp[7],b.viewInvTransp[11]):b.origin;f.bindView(d,b.view,c);a.slicePlaneEnabled&&f.bindSlicePlane(d,b.slicePlane,c);a.screenSizePerspective&&f.bindCamPos(d,b.viewInvTransp,c);a.instancedDoublePrecision&&f.bindViewOriginDouble(d,c)};a.prototype.bindInstance=function(c,b){this.program.setUniformMatrix4fv("model",b.transformation)};
a.prototype.getDrawMode=function(){return 4};return a}(m),P=function(e){function a(c,b,a){return e.call(this,c,b,a,!0)||this}l(a,e);return a}(D),Q=function(e){function a(c,b,a,d){void 0===d&&(d=!1);b=e.call(this,c,b,a,c.getParams().textureId)||this;b.params=f.copyParameters(c.getParams());b.instanced=!!b.params.instanced;b.texturing=c.bufferWriter.vertexBufferLayout.hasField("uv0")?b.params.atlasRegions?"AtlasTextured":"Textured":"none";b.selectProgram();b.selectSlot();return b}l(a,e);a.prototype.beginSlot=
function(c){return c===this.slot};a.prototype.getProgram=function(){return this.program};a.prototype.selectProgram=function(){this.program=this.programRep.getProgram(n.normalPass,{viewingMode:this.programRep.globalOptions.viewingMode,textureMode:this.texturing,flipV:this.params.flipV,instanced:this.instanced,instancedDoublePrecision:this.params.instancedDoublePrecision,vvSize:this.params.vvSizeEnabled,verticalOffset:null!==this.params.verticalOffset,screenSizePerspective:null!==this.params.screenSizePerspective,
slice:this.params.slicePlaneEnabled,compressedNormals:this.params.compressedNormals,textureAlphaTest:this.params.textureAlphaTest,alphaCoverageCorrection:u,iosSafariFix:v})};a.prototype.selectSlot=function(){this.slot=this.params.transparent?this.params.writeDepth?6:9:this.params.writeStencil?2:4};a.prototype.updateParameters=function(){this.params=this.material.getParameterValues();this.selectProgram();this.selectSlot();this.updateTexture(this.params.textureId)};a.prototype.bind=function(c,b){var a=
this.program,d=this.params;c.bindProgram(a);this.bindTexture(c,a);f.bindVerticalOffset(d.verticalOffset,b,a);f.bindScreenSizePerspective(d.screenSizePerspective,b,a);t(a,d);d.textureAlphaTest&&a.setUniform1f("textureAlphaCutoff",d.textureAlphaCutoff);r(c,d,b);d.inverseWindingOrder&&c.setFrontFace(2304);c.setDepthTestEnabled(!0)};a.prototype.release=function(c){var b=this.params;c.setFaceCullingEnabled(!1);b.inverseWindingOrder&&c.setFrontFace(2305)};a.prototype.bindView=function(c,b){c=this.program;
var a=this.params,d=a.instancedDoublePrecision?g.vec3f64.fromValues(b.viewInvTransp[3],b.viewInvTransp[7],b.viewInvTransp[11]):b.origin;f.bindView(d,b.view,c);c.setUniformMatrix4fv("viewNormal",b.viewInvTransp);a.slicePlaneEnabled&&f.bindSlicePlane(d,b.slicePlane,c);a.screenSizePerspective&&f.bindCamPos(d,b.viewInvTransp,c);a.instancedDoublePrecision&&f.bindViewOriginDouble(d,c)};a.prototype.bindInstance=function(c,b){c=this.program;c.setUniformMatrix4fv("model",b.transformation);c.setUniformMatrix4fv("modelNormal",
b.transformationNormal)};a.prototype.getDrawMode=function(){return 4};return a}(m),R=function(e){function a(c,b,a,d){void 0===d&&(d=!1);b=e.call(this,c,b,a,c.getParams().textureId)||this;b.params=f.copyParameters(c.getParams());b.instanced=!!b.params.instanced;b.texturing=c.bufferWriter.vertexBufferLayout.hasField("uv0")?b.params.atlasRegions?"AtlasTextured":"Textured":"none";b.selectProgram();b.selectSlot();return b}l(a,e);a.prototype.beginSlot=function(c){return c===this.slot};a.prototype.getProgram=
function(){return this.program};a.prototype.selectProgram=function(){this.program=this.programRep.getProgram(n.highlightPass,{viewingMode:this.programRep.globalOptions.viewingMode,textureMode:this.texturing,flipV:this.params.flipV,instanced:this.instanced,instancedDoublePrecision:this.params.instancedDoublePrecision,vvSize:this.params.vvSizeEnabled,verticalOffset:null!==this.params.verticalOffset,screenSizePerspective:null!==this.params.screenSizePerspective,slice:this.params.slicePlaneEnabled,textureAlphaTest:this.params.textureAlphaTest,
alphaCoverageCorrection:u,iosSafariFix:v})};a.prototype.selectSlot=function(){this.slot=this.params.transparent?this.params.writeDepth?6:9:this.params.writeStencil?2:4};a.prototype.updateParameters=function(){this.params=this.material.getParameterValues();this.selectProgram();this.selectSlot();this.updateTexture(this.params.textureId)};a.prototype.bind=function(c,b){var a=this.program,d=this.params;c.bindProgram(a);this.bindTexture(c,a);f.bindVerticalOffset(d.verticalOffset,b,a);f.bindScreenSizePerspective(d.screenSizePerspective,
b,a);t(a,d);d.textureAlphaTest&&a.setUniform1f("textureAlphaCutoff",d.textureAlphaCutoff);r(c,d,b);d.inverseWindingOrder&&c.setFrontFace(2304);c.setDepthTestEnabled(!0)};a.prototype.release=function(a){var b=this.params;a.setFaceCullingEnabled(!1);b.inverseWindingOrder&&a.setFrontFace(2304)};a.prototype.bindView=function(a,b){a=this.program;var c=this.params,d=c.instancedDoublePrecision?g.vec3f64.fromValues(b.viewInvTransp[3],b.viewInvTransp[7],b.viewInvTransp[11]):b.origin;f.bindView(d,b.view,a);
c.slicePlaneEnabled&&f.bindSlicePlane(d,b.slicePlane,a);c.screenSizePerspective&&f.bindCamPos(d,b.viewInvTransp,a);c.instancedDoublePrecision&&f.bindViewOriginDouble(d,a)};a.prototype.bindInstance=function(a,b){a=this.program;a.setUniformMatrix4fv("model",b.transformation);a.setUniformMatrix4fv("modelNormal",b.transformationNormal)};a.prototype.getDrawMode=function(){return 4};return a}(m),I={textureId:void 0,textureInitTransparent:!1,ambient:[.2,.2,.2],diffuse:[.8,.8,.8],specular:[0,0,0],externalColor:[1,
1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,blendModeOneOne:!1,inverseWindingOrder:!1,vertexColors:!1,symbolColors:!1,componentIndices:!1,componentColorBuffer:null,flipV:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,compressedNormals:!1,groundNormalShading:!1,writeStencil:!1,receiveSSAO:!0,castShadows:!0,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,
100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotation:[0,0,0],transparent:!1,writeDepth:!0,textureAlphaTest:!0,textureAlphaCutoff:.1,polygonOffset:!1,atlasRegions:!1},J=function(){function e(a,c){this.vertexBufferLayout=a;this.instanceBufferLayout=c}e.prototype.allocate=function(a){return this.vertexBufferLayout.createBuffer(a)};
e.prototype.elementCount=function(a){return a.indices.position.length};e.prototype.write=function(a,c,b,e,d){G.writeDefaultAttributes(c,b,this.vertexBufferLayout,a.transformation,a.invTranspTransformation,e,d)};return e}(),v=!!z("ios")&&!!z("safari"),u=!1,H=g.mat3f64.create(),k=g.mat4f64.create(),M=g.vec3f64.create(),N=g.vec3f64.create(),L=g.vec3f64.fromValues(0,0,1),C=g.vec3f64.create(),x=g.vec3f64.create(),w=g.vec3f64.create(),K=g.vec3f64.create();return y});
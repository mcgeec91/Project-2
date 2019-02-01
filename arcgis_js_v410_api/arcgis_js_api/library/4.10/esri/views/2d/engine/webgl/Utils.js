// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../arcade/Dictionary ../../../../arcade/Feature ../../../../core/Error ../../../../core/Logger ../../../../core/screenUtils ../../../../geometry/support/quantizationUtils ../../../../support/arcadeUtils ./color ./enums ./SymbolProperties ../../../3d/support/mathUtils ../../../webgl/Texture".split(" "),function(u,a,R,S,A,T,B,v,G,H,c,U,I,V){function h(b){for(var a={},g=0;g<b.length;g++){var l=b[g];a[l.name]=l.strideInBytes}return a}function J(b){switch(b){case c.WGLGeometryType.MARKER:return W;
case c.WGLGeometryType.FILL:return X;case c.WGLGeometryType.LINE:return Y;case c.WGLGeometryType.TEXT:return Z;case c.WGLGeometryType.LABEL:return aa}return null}function K(b){switch(b%4){case 0:case 2:return 4;case 1:case 3:return 1}}function n(b){switch(b){case "esriSMS":return"simple-marker";case "esriPMS":return"picture-marker";case "esriSLS":return"simple-line";case "esriPLS":return"picture-line";case "esriSFS":return"simple-fill";case "esriPFS":return"picture-fill";case "esriTS":return"text"}return b}
function L(b){if(b=n(b.type)){switch(b){case "simple-marker":case "picture-marker":return!0;case "CIMPointSymbol":return!0}return!1}}function M(b){if(b=n(b.type)){switch(b){case "simple-fill":case "picture-fill":return!0;case "CIMPolygonSymbol":return!0}return!1}}function N(b){if(b=n(b.type)){switch(b){case "simple-line":case "picture-line":return!0;case "CIMLineSymbol":return!0}return!1}}function O(b){if(b=n(b.type)){switch(b){case "text":return!0;case "CIMTextSymbol":return!0}return!1}}function w(b){return b&&
b.length||0}function P(b){return"string"===typeof b}function Q(b){var a={};switch(b){case "esriGeometryPoint":return function(b,d,f,e){return v.hydratePoint(d,a,b,f,e)};case "esriGeometryPolygon":return function(b,d,f,e){return v.hydratePolygon(d,a,b,f,e)};case "esriGeometryPolyline":return function(b,d,f,e){return v.hydratePolyline(d,a,b,f,e)};case "esriGeometryMultipoint":return function(b,d,f,e){return v.hydrateMultipoint(d,a,b,f,e)};default:return x.error(new A("mapview-arcade","Unable to handle geometryType: "+
b)),function(b,a,d,e){return b}}}Object.defineProperty(a,"__esModule",{value:!0});var r,x=T.getLogger("esri.views.2d.engine.webgl.Utils");a.C_HITTEST_SEARCH_SIZE=4;a.C_VBO_GEOMETRY="geometry";a.C_VBO_PERINSTANCE="per_instance";a.C_VBO_PERINSTANCE_VV="per_instance_vv";a.C_VBO_VISIBILITY="visibility";a.C_VBO_VISIBILITY_RANGE="visibilityRange";a.C_ICON_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:24,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}];a.C_ICON_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,
strideInBytes:40,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}];a.C_FILL_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:28,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}];a.C_FILL_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,strideInBytes:36,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}];a.C_LINE_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:32,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}];a.C_LINE_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,
strideInBytes:44,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}];a.C_TEXT_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:20,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}];a.C_TEXT_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,strideInBytes:36,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}];a.C_LABEL_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:24,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0},{name:a.C_VBO_VISIBILITY_RANGE,strideInBytes:2,
divisor:0}];a.C_ICON_STRIDE_SPEC=h(a.C_ICON_VERTEX_DEF);a.C_ICON_STRIDE_SPEC_VV=h(a.C_ICON_VERTEX_DEF_VV);a.C_FILL_STRIDE_SPEC=h(a.C_FILL_VERTEX_DEF);a.C_FILL_STRIDE_SPEC_VV=h(a.C_FILL_VERTEX_DEF_VV);a.C_LINE_STRIDE_SPEC=h(a.C_LINE_VERTEX_DEF);a.C_LINE_STRIDE_SPEC_VV=h(a.C_LINE_VERTEX_DEF_VV);a.C_TEXT_STRIDE_SPEC=h(a.C_TEXT_VERTEX_DEF);a.C_TEXT_STRIDE_SPEC_VV=h(a.C_TEXT_VERTEX_DEF_VV);a.C_LABEL_STRIDE_SPEC=h(a.C_LABEL_VERTEX_DEF);a.getStrides=function(b,d){switch(b){case c.WGLGeometryType.MARKER:return d?
a.C_ICON_STRIDE_SPEC_VV:a.C_ICON_STRIDE_SPEC;case c.WGLGeometryType.FILL:return d?a.C_FILL_STRIDE_SPEC_VV:a.C_FILL_STRIDE_SPEC;case c.WGLGeometryType.LINE:return d?a.C_LINE_STRIDE_SPEC_VV:a.C_LINE_STRIDE_SPEC;case c.WGLGeometryType.TEXT:return d?a.C_TEXT_STRIDE_SPEC_VV:a.C_TEXT_STRIDE_SPEC;case c.WGLGeometryType.LABEL:return a.C_LABEL_STRIDE_SPEC}return null};var W=[a.C_VBO_GEOMETRY,a.C_VBO_VISIBILITY],X=[a.C_VBO_GEOMETRY,a.C_VBO_VISIBILITY],Y=[a.C_VBO_GEOMETRY,a.C_VBO_VISIBILITY],Z=[a.C_VBO_GEOMETRY,
a.C_VBO_VISIBILITY],aa=[a.C_VBO_GEOMETRY,a.C_VBO_VISIBILITY,a.C_VBO_VISIBILITY_RANGE];a.getNamedBuffers=J;a.strideToPackingFactor=K;a.allocateTypedArrayBuffer=function(b,a){switch(a%4){case 0:case 2:return new Uint32Array(Math.floor(b*a/4));case 1:case 3:return new Uint8Array(b*a)}};a.allocateTypedArrayBufferwithData=function(b,a){switch(a%4){case 0:case 2:return new Uint32Array(b);case 1:case 3:return new Uint8Array(b)}};a.getSymbolGeometryType=function(b){return L(b)?c.WGLGeometryType.MARKER:N(b)?
c.WGLGeometryType.LINE:M(b)?c.WGLGeometryType.FILL:O(b)?c.WGLGeometryType.TEXT:c.WGLGeometryType.UNKNOWN};a.normalizeSymbolType=n;a.isMarkerSymbol=L;a.isFillSymbol=M;a.isLineSymbol=N;a.isPictureSymbol=function(b){if(b=n(b.type))switch(b){case "picture-marker":case "picture-line":case "picture-fill":return!0}return!1};a.isTextSymbol=O;a.getTextProperties=function(b){return U.TextProperties.pool.acquire(b.color?H.copyAndPremultiply(b.color):[255,255,255,255],b.haloColor?H.copyAndPremultiply(b.haloColor):
[255,255,255,255],B.pt2px(b.haloSize),B.pt2px(b.font.size),b.angle*Math.PI/180,b.xoffset/b.font.size,b.yoffset/b.font.size,"left"===b.horizontalAlignment?0:"right"===b.horizontalAlignment?1:.5,"top"===b.verticalAlignment?0:"bottom"===b.verticalAlignment?1:.5)};a.isSameUniformValue=function(b,a){return!1};a.isSameMaterialInfo=function(b,a){if(b.materialKey!==a.materialKey||w(b.texBindingInfo)!==w(a.texBindingInfo)||w(b.materialParams)!==w(a.materialParams))return!1;for(var d=b.texBindingInfo.length,
l=0;l<d;++l){var f=b.texBindingInfo[l],e=a.texBindingInfo[l];if(f.unit!==e.unit||f.pageId!==e.pageId||f.semantic!==e.semantic)return!1}b=b.materialParams.length;for(l=0;l<b;)return!1;return!0};a.serializeString=function(b,a,g){for(var d=0,f=b.length,e=0;e<f;++e)a&&(a[g+d]=b.charCodeAt(e)),++d;a&&(a[g+d]=0);++d;return d};a.deserializeString=function(b,a,g){var d=0;b.s="";for(var f=!0;f;){var e=a[g+d];++d;0!==e?b.s+=String.fromCharCode(e):f=!1}return d};a.isDefined=function(b){return null!==b&&void 0!==
b};a.isNumber=function(b){return"number"===typeof b};a.isString=P;a.isStringOrNull=function(b){return null==b||P(b)};a.lerp=function(b,a,g){return b+(a-b)*g};u=function(){function b(){this._arr=[];this._push=this._push.bind(this)}b.prototype._push=function(b,a){this._arr.push(a)};b.prototype.getKeys=function(a){this._arr.length=0;a&&a.forEach(this._push);return this._arr};return b}();a.KeysGetter=u;u=function(){function a(){this._arr=[];this._push=this._push.bind(this)}a.prototype._push=function(a,
b){this._arr.push(a)};a.prototype.getValues=function(a){this._arr.length=0;a&&a.forEach(this._push);return this._arr};return a}();a.ValuesGetter=u;a.getCapType=function(a,d){switch(a){case "butt":return c.CapType.BUTT;case "round":return d?c.CapType.SQUARE:c.CapType.ROUND;case "square":return c.CapType.SQUARE;default:return x.error(new A("mapview-invalid-type","Cap type "+a+" is not a valid option. Defaulting to round")),c.CapType.ROUND}};a.getJoinType=function(a){switch(a){case "miter":return c.JoinType.MITER;
case "bevel":return c.JoinType.BEVEL;case "round":return c.JoinType.ROUND;default:return x.error(new A("mapview-invalid-type","Join type "+a+" is not a valid option. Defaulting to round")),c.JoinType.ROUND}};a.getVVType=function(a){switch(a){case "opacity":return c.VVType.OPACITY;case "color":return c.VVType.COLOR;case "rotation":return c.VVType.ROTATION;case "size":return c.VVType.SIZE;default:return x.error("Cannot interpret unknown vv: "+a),null}};a.createHydrateFactory=Q;a.getTransformParams=
function(a){return{transform:a.transform,hasZ:a.hasZ,hasM:a.hasM}};a.createArcadeFunction=function(a,d,g){var b=d.fields,f=d.spatialReference,e=d.hasGeometryExpr;d=d.geometryType;var c=G.createFunction(a),z=new S,F=new R({viewingMode:null,scale:null}),h={},m={vars:{$feature:z,$view:null},spatialReference:f},p={fields:b},t=Q(d);return function(a,b,d){e?(b=t(a.geometry,b.transform,b.hasZ,b.hasM),b.spatialReference=f,z.repurposeFromGraphicLikeObject(b,a.attributes,p)):z.repurposeFromGraphicLikeObject(a.geometry,
a.attributes,p);d?(m.vars.$view=F,F.attributes.viewingMode=d.viewingMode,F.attributes.scale=d.scale):m.vars.$view=h;a=G.executeFunction(c,m);return g?g(a):a}};a.copyMeshData=function(a,d,c,l,f,e,h){for(var b in e)for(var g=e[b].stride,y=K(g),m=e[b].data,p=c[b].data,t=g*f.vertexCount/y,k=g*a/y,y=g*f.vertexFrom/y,g=0;g<t;++g)p[g+k]=m[g+y];c=f.indexCount;for(g=0;g<c;++g)l[g+d]=h[g+f.indexFrom]-f.vertexFrom+a};a.C_VBO_INFO=(r={},r[a.C_VBO_GEOMETRY]=35044,r[a.C_VBO_VISIBILITY]=35044,r[a.C_VBO_VISIBILITY_RANGE]=
35048,r);a.createGeometryData=function(a,d){for(var b=[],c=0;5>c;++c){for(var f={},e=0,h=J(c);e<h.length;e++){var z=h[e];f[z]={data:d(c,z)}}b.push({data:a(c),buffers:f})}return b};a.resampleHermite=function(a,d,c,l,f,e,h){void 0===h&&(h=!0);var b=d/f;c/=e;for(var g=Math.ceil(b/2),y=Math.ceil(c/2),m=0;m<e;m++)for(var p=0;p<f;p++){for(var t=4*(p+(h?e-m-1:m)*f),k=0,n=0,r=0,u=0,v=0,w=0,x=0,A=(m+.5)*c,C=Math.floor(m*c);C<(m+1)*c;C++)for(var D=Math.abs(A-(C+.5))/y,B=(p+.5)*b,D=D*D,E=Math.floor(p*b);E<(p+
1)*b;E++){var q=Math.abs(B-(E+.5))/g,k=Math.sqrt(D+q*q);-1<=k&&1>=k&&(k=2*k*k*k-3*k*k+1,0<k&&(q=4*(E+C*d),x+=k*a[q+3],r+=k,255>a[q+3]&&(k=k*a[q+3]/250),u+=k*a[q],v+=k*a[q+1],w+=k*a[q+2],n+=k))}l[t]=u/n;l[t+1]=v/n;l[t+2]=w/n;l[t+3]=x/r}};a.createTextureFromTexelData=function(a,d){var b,c;I.isPowerOfTwo(d.width)&&I.isPowerOfTwo(d.height)?(b=!0,c=9987):(b=!1,c=9729);return new V(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,hasMipmap:b,samplingMode:c,wrapMode:33071,flipped:!0},d)};
a.geometryToMappedGeometry=function(a){return{vertexFrom:void 0,vertexTo:void 0,geometry:a}}});
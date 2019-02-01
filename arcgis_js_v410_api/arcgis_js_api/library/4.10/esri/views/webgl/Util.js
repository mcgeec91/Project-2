// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/assignHelper","../../core/Error"],function(t,e,q,r){function l(a){return a[0].stride}function m(a){switch(a){case 5126:return 4;case 5124:return 4;case 5125:return 4;case 5122:return 2;case 5123:return 2;case 5120:return 1;case 5121:return 1;default:throw Error("Unknown data type");}}Object.defineProperty(e,"__esModule",{value:!0});e.vertexCount=function(a,d){return a.vertexBuffers[d].size/l(a.layout[d])};e.getStride=l;e.getBytesPerElement=m;e.addDescriptor=
function(a,d,b,c,k,f){var h=m(c);if(0<a.length){var n=a[0].stride,p=n+h*b;a.forEach(function(a){return a.stride=p});a.push({name:d,count:b,type:c,offset:n,stride:p,normalized:k,divisor:f})}else a.push({name:d,count:b,type:c,offset:0,stride:h*b,normalized:k,divisor:f})};e.assertCompatibleVertexAttributeLocations=function(a,d){(a=a.locations===d.locations)||console.error("VertexAttributeLocations are incompatible");return a};e.hasAttribute=function(a,d){for(var b=0;b<a.length;b++)if(a[b].name===d)return!0;
return!1};e.findAttribute=function(a,d){for(var b=0;b<a.length;b++)if(a[b].name===d)return a[b];return null};e.copyFramebufferToTexture=function(a,d,b,c,k){void 0===k&&(k=0);var f=a.getBoundFramebufferObject(),h=a.getBoundTexture(0);a.bindFramebuffer(d);a.bindTexture(b,0);a.gl.copyTexImage2D(a.gl.TEXTURE_2D,k,b.descriptor.pixelFormat,c[0],c[1],c[2],c[3],0);a.gl.flush();a.bindFramebuffer(f);a.bindTexture(h,0)};e.assert=function(a,d){if(!a)throw new r(d);};e.setBaseInstanceOffset=function(a,d){var b=
{},c;for(c in a)b[c]=a[c].map(function(a){return a.divisor?q({},a,{baseInstance:d}):a});return b};e.bindVertexBufferLayout=function(a,d,b,c,e){var f=a.gl,h=a.capabilities.instancing;a.bindBuffer(b);c.forEach(function(a){var b=d[a.name],c=(e?e:0+a.baseInstance?a.baseInstance:0)*a.stride;void 0===b&&console.error("There is no location for vertex attribute '"+a.name+"' defined.");a.baseInstance&&!a.divisor&&console.error("Vertex attribute '"+a.name+"' uses baseInstanceOffset without divisor.");if(4>=
a.count)f.vertexAttribPointer(b,a.count,a.type,a.normalized,a.stride,a.offset+c),f.enableVertexAttribArray(b),a.divisor&&0<a.divisor&&h&&h.vertexAttribDivisor(b,a.divisor);else if(9===a.count)for(var g=0;3>g;g++)f.vertexAttribPointer(b+g,3,a.type,a.normalized,a.stride,a.offset+12*g+c),f.enableVertexAttribArray(b+g),a.divisor&&0<a.divisor&&h&&h.vertexAttribDivisor(b+g,a.divisor);else if(16===a.count)for(g=0;4>g;g++)f.vertexAttribPointer(b+g,4,a.type,a.normalized,a.stride,a.offset+16*g+c),f.enableVertexAttribArray(b+
g),a.divisor&&0<a.divisor&&h&&h.vertexAttribDivisor(b+g,a.divisor);else console.error("Unsupported vertex attribute element count: "+a.count)})};e.unbindVertexBufferLayout=function(a,d,b,c){var e=a.gl,f=a.capabilities.instancing;a.bindBuffer(b);c.forEach(function(a){var b=d[a.name];if(4>=a.count)e.disableVertexAttribArray(b),a.divisor&&0<a.divisor&&f&&f.vertexAttribDivisor(b,0);else if(9===a.count)for(var c=0;3>c;c++)e.disableVertexAttribArray(b+c),a.divisor&&0<a.divisor&&f&&f.vertexAttribDivisor(b+
c,0);else if(16===a.count)for(c=0;4>c;c++)e.disableVertexAttribArray(b+c),a.divisor&&0<a.divisor&&f&&f.vertexAttribDivisor(b+c,0);else console.error("Unsupported vertex attribute element count: "+a.count)});a.unbindBuffer(34962)}});
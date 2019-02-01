// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/libs/earcut/earcut","./coordsUtils"],function(y,p,v,w){function x(d,h,c){if(1===d.length)return d[0];h=new Float64Array(h);c=new Uint32Array(c);for(var f=0,n=0,g=0;g<d.length;g++){for(var b=d[g],a=0;a<b.position.length;a++)h[f++]=b.position[a];for(a=0;a<b.faces.length;a++)c[n++]=b.faces[a]}return{position:h,faces:c}}function u(d,h){for(var c=d.length,f=Array(c),n=Array(c),g=Array(c),b=0,a=0,r=0,q=0,k=0;k<c;++k)q+=d[k].length;for(var q=new Float64Array(3*q),
m=0,p=c-1;0<=p;p--){var e=d[p];if(w.isClockwise(e,!1,!1)||1===c){for(var l=e.length,k=0;k<b;++k)l+=f[k].length;k={index:m,pathLengths:Array(b+1),count:l,holeIndices:Array(b)};k.pathLengths[0]=e.length;0<e.length&&(g[r++]={index:m,count:e.length});m=t(e,0,q,m,e.length,h);for(e=0;e<b;++e)l=f[e],k.holeIndices[e]=m,k.pathLengths[e+1]=l.length,0<l.length&&(g[r++]={index:m,count:l.length}),m=t(l,0,q,m,l.length,h);b=0;0<k.count&&(n[a++]=k)}else f[b++]=e}for(e=0;e<b;++e)l=f[e],0<l.length&&(g[r++]={index:m,
count:l.length}),m=t(l,0,q,m,l.length,h);a<c&&(n.length=a);r<c&&(g.length=r);return{position:q,polygons:n,outlines:g}}function t(d,h,c,f,n,g){f*=3;for(var b=0;b<n;++b){var a=d[h++];c[f++]=a[0];c[f++]=a[1];c[f++]=g?a[2]:0}return f/3}Object.defineProperty(p,"__esModule",{value:!0});p.triangulate=function(d){var h=u(d.rings,d.hasZ),c=[],f=0,n=0;d=function(a){var b=a.index,d=new Float64Array(h.position.buffer,3*b*h.position.BYTES_PER_ELEMENT,3*a.count);a=a.holeIndices.map(function(a){return a-b});a=new Uint32Array(v(d,
a,3));c.push({position:d,faces:a});f+=d.length;n+=a.length};for(var g=0,b=h.polygons;g<b.length;g++)d(b[g]);return x(c,f,n)};p.pathsToTriangulationInfo=u});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","./core/promiseUtils","./core/has","dojo/main"],function(e,f,d,g){(function(){var b=g.config,a=b.has&&void 0!==b.has["config-deferredInstrumentation"],c=b.has&&void 0!==b.has["config-useDeferredInstrumentation"];void 0!==b.useDeferredInstrumentation||a||c||(d.add("config-deferredInstrumentation",!1,!0,!0),d.add("config-useDeferredInstrumentation",!1,!0,!0))})();return{version:"4.10",workerMessages:{request:function(b){return f.create(function(a){e(["./request"],a)}).then(function(a){var c=
b.options||{};c.responseType="array-buffer";return a(b.url,c)}).then(function(a){return{result:{data:a.data,ssl:a.ssl},transferList:[a.data]}})}}}});
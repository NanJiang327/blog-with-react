"use strict";var precacheConfig=[["/blog-with-react/index.html","19b0bcb6e55ae17bb853d0ea1d92c576"],["/blog-with-react/static/css/main.77b8cbce.css","9885e1cad8d9743703598551e705db10"],["/blog-with-react/static/js/0.7ff4cdca.chunk.js","e1b0637d648e28a334843e215bad3fd2"],["/blog-with-react/static/js/1.eb5fe970.chunk.js","b966ecaaa2b35a31f4f9d9b53eb3f6f1"],["/blog-with-react/static/js/2.4cff64b5.chunk.js","8637240e543e4f9fbcf7f49a6417fe98"],["/blog-with-react/static/js/3.50274ba7.chunk.js","a58d69e082f0e3f14f4d428f93c6c89c"],["/blog-with-react/static/js/4.63ce27ea.chunk.js","ed4432d5b126abd911647947fb709715"],["/blog-with-react/static/js/main.199fc85e.js","28d952d26c9efec24143fd3e85773f7c"],["/blog-with-react/static/media/Wechat.2b50bc34.png","2b50bc347d88ddc5eb57387ddf6ec8b6"],["/blog-with-react/static/media/bg.942579a6.jpg","942579a6e6859d5315f558b326d37bd5"],["/blog-with-react/static/media/headbg.f1d3f6a3.jpeg","f1d3f6a391b1433b4e7bc660db522a90"],["/blog-with-react/static/media/icon.949ffa46.svg","949ffa467361297feca60a745e7dda1c"],["/blog-with-react/static/media/index.249d7783.less","249d778382f0c169c35f4b8f0fdee35e"],["/blog-with-react/static/media/index.2b1fb981.less","2b1fb981fd773b52f3a69d0517234829"],["/blog-with-react/static/media/index.403acbd0.less","403acbd0e769e03b880b89a16b9c49b6"],["/blog-with-react/static/media/index.42dbc494.less","42dbc494f5bdc0e50b78693516f898d2"],["/blog-with-react/static/media/index.65280da2.less","65280da29ad633c860ee4a03b1cb9cf7"],["/blog-with-react/static/media/index.70e8b3ee.less","70e8b3ee1c3eb7e06cbc1e352222a985"],["/blog-with-react/static/media/index.89b80e5e.less","89b80e5e11396b8acb80daa76ee62212"],["/blog-with-react/static/media/index.a32eb6a6.less","a32eb6a66ca80017f41fd491a4527ec7"],["/blog-with-react/static/media/index.b8ac2f8c.less","b8ac2f8c8023910657b33b7460b8e25f"],["/blog-with-react/static/media/index.c481beb9.less","c481beb91501d605915c5880c07783f3"],["/blog-with-react/static/media/index.c9cbb28e.less","c9cbb28e6f5d10e84578cd318ce341ad"],["/blog-with-react/static/media/index.d34dc5b4.less","d34dc5b4bed73732cfafdf8d4f4a4f77"],["/blog-with-react/static/media/index.dd2f8c0e.less","dd2f8c0e822d116b4977be201f2fbfce"],["/blog-with-react/static/media/index.e9dcda2e.less","e9dcda2e6dd52403966ad3599c7b8588"],["/blog-with-react/static/media/index.eab5285c.less","eab5285cf2356c2db7b2f69a0ee2160f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/blog-with-react/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
"use strict";var precacheConfig=[["/index.html","f0c8564e6cf717f3229f99472a1b12d2"],["/static/js/main.6f23aeb0.js","87c0cb64b8ebe0bb346c48bc6ceb5e02"],["/static/media/About.d3ddab1b.scss","d3ddab1b54821f25f11579ffb2f8cd46"],["/static/media/App.af7f4e46.scss","af7f4e46f77be527902234d9700b2a48"],["/static/media/Donna.e1198c17.jpg","e1198c17835a5cde142d348ec62b7bb9"],["/static/media/Experience.a4e8a0f3.scss","a4e8a0f3d5d9ac05f296299f60c96e73"],["/static/media/ILD_iphone.dfd4c982.png","dfd4c98238580bbb5fb573c33e799c25"],["/static/media/MAKS-Prints.9fe74964.png","9fe7496441f53ef779129073c0e4fc4a"],["/static/media/Project.c130d2f0.scss","c130d2f0ffa8907988b17adab09cba7c"],["/static/media/bucky.0c691cd7.jpg","0c691cd75bd19a19ff4a0b429cf77d57"],["/static/media/ciani.6a6f878e.jpg","6a6f878e3c3a69e2b35745604e9f35b5"],["/static/media/derrida.f8bc839d.jpg","f8bc839d83cd78eeb8ccec3592d54bbc"],["/static/media/grace-hopper.cd939657.jpeg","cd939657b3bfa8a51875efd7511b7c87"],["/static/media/index.3809ef4b.scss","3809ef4b05ade600c094b20400a92804"],["/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/static/media/mcluhan.4340625d.jpg","4340625d34771e23f67933adf723e253"],["/static/media/personal-photo.908825ca.jpeg","908825ca81eb5fcc403444c5992bb16b"],["/static/media/presentSense_iphone8gold_portrait.a13219c7.png","a13219c76a60036582d3e5c0f8aeab0a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
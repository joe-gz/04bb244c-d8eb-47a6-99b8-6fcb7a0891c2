"use strict";var precacheConfig=[["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/index.html","664e8deaa6e2d52de842f1bd2f5a872b"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/css/main.5cdec3f4.css","3392b77b10cb6ecf7be5fdf8811bd4ca"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/js/main.42ed0135.js","86b7ce04595eba00685a9311236a00e3"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/media/bike.d48a1fa7.svg","d48a1fa7b8644b5f6556cb4722fe7dee"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/media/bike2.e59f695e.jpg","e59f695ee7dc87ba6a4d9652e119a64d"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/media/clear-night.8f4012d2.svg","8f4012d2699aa356b9a2b99886d4ac2a"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/media/cloudy.bd44fbf2.svg","bd44fbf294eed7410fb83b1c5d7040bb"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/media/cloudyDay.b3a81b14.svg","b3a81b1420c92bcaf73769f0dd12f2c2"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/media/cloudyNight.0a434fff.svg","0a434fffc8a42df35b43340ea6f345f4"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/media/fog.03457b58.svg","03457b583d033e3d9a02d696047ec453"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/media/metro.74ec1056.svg","74ec10568d225ff0cb110ecfe6abaeea"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/media/metro.fde0710a.jpg","fde0710a97ed338496823cbdb2f8cfda"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/media/rain.25e10a89.svg","25e10a89237e5a82166fd6b30f714539"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/media/sleet.3e187807.svg","3e1878072639de291bb1cd3fc44f6702"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/media/snowy.b9c190ba.svg","b9c190baf008bd6a0f4bc0ce09023d2d"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/media/sunny-day.f42c0882.svg","f42c08826556ec9ef0140e5f9a0e9341"],["/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/static/media/windy.bf68703d.svg","bf68703d9c5833cd90dddac3a21a8c19"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/04bb244c-d8eb-47a6-99b8-6fcb7a0891c2/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
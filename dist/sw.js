if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>s(e,t),d={module:{uri:t},exports:o,require:l};i[t]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B5lqNxBD.css",revision:null},{url:"assets/index-B8V7Wu91.js",revision:null},{url:"index.html",revision:"03bfe8250ea9d15d2dbf831c32df4212"},{url:"registerSW.js",revision:"f2d58655d9e5e2e9bd9e0353b259bdd3"},{url:"icon/icon512_maskable.png",revision:"81e02422e9af59be8b044cc4a06eb852"},{url:"manifest.webmanifest",revision:"ebaec1ab3a5236b1740a65b0e7a03e81"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

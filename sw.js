if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const o=e=>s(e,r),l={module:{uri:r},exports:d,require:o};i[r]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(t(...e),d)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-C1zh4XSt.css",revision:null},{url:"assets/index-CG1S_3-i.js",revision:null},{url:"index.html",revision:"646ce986a7fddb7313f1090e5b7157fd"},{url:"registerSW.js",revision:"f2d58655d9e5e2e9bd9e0353b259bdd3"},{url:"manifest.webmanifest",revision:"b46a3df79f3cada06e79dd765caa1e2c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const f=e=>s(e,o),c={module:{uri:o},exports:t,require:f};i[o]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BsCI1EDq.css",revision:null},{url:"assets/index-Cy_Suxiq.js",revision:null},{url:"index.html",revision:"1f4c139c8925dd05f7939303e8326b70"},{url:"registerSW.js",revision:"f7973c1162e4ef49283661819fc3c507"},{url:"apple-touch-icon.png",revision:"dab561efa4350adf85fc9323f89630bc"},{url:"favicon.ico",revision:"aca24b7322d87c1349692e35bd5d9f46"},{url:"manifest.webmanifest",revision:"5afe4d6eff1495b0568e6494cbe1f4d0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

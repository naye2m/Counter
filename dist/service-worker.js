if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,c)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let p={};const l=s=>a(s,n),t={module:{uri:n},exports:p,require:l};e[n]=Promise.all(i.map((s=>t[s]||l(s)))).then((s=>(c(...s),p)))}}define(["./workbox-9130832d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([
    {url:"../index.html",revision:"1522ed402394e2e2157eec9a9e6b0f47"},{url:"../statics/images/icon.png",revision:"9eb08f27bcff1e2b547ba411a9df7bca"},{url:"../statics/images/icons/apple-icon-180 copy.png",revision:"6da2f3f5c7fc4c39e06ebd5c46e72df4"},{url:"../statics/images/icons/apple-icon-180.png",revision:"6da2f3f5c7fc4c39e06ebd5c46e72df4"},{url:"../statics/images/icons/apple-splash-1125-2436.png",revision:"e5e068c62fae1c3e1f5df6f3b8d2e769"},{url:"../statics/images/icons/apple-splash-1136-640.png",revision:"4fcb28ff995e6f8d77c193018e329c3b"},{url:"../statics/images/icons/apple-splash-1170-2532.png",revision:"a6f113a1540ccfcd2e6890ff2e864f7c"},{url:"../statics/images/icons/apple-splash-1179-2556.png",revision:"5c62b626a098e678f69661b9ddf79b71"},{url:"../statics/images/icons/apple-splash-1206-2622.png",revision:"9e81de20106cf2ad1c38dfa9e1954ca2"},{url:"../statics/images/icons/apple-splash-1242-2208.png",revision:"75a2c937ca2cd9d99624f2c56faf13c3"},{url:"../statics/images/icons/apple-splash-1242-2688.png",revision:"aa0e8c4b60100c419dd21d0102057a68"},{url:"../statics/images/icons/apple-splash-1284-2778.png",revision:"7fcf384513dd00c44be899ecf8cbf07a"},{url:"../statics/images/icons/apple-splash-1290-2796.png",revision:"7e15b672544aad94f016c22b33b4986d"},{url:"../statics/images/icons/apple-splash-1320-2868.png",revision:"5affe4ec7d2635d2346944def4529b66"},{url:"../statics/images/icons/apple-splash-1334-750.png",revision:"bb1d993f42b259b64456cccec387b38a"},{url:"../statics/images/icons/apple-splash-1488-2266.png",revision:"64abeb963767232cd7113e7fae500b7c"},{url:"../statics/images/icons/apple-splash-1536-2048.png",revision:"b332daf6e06fabfb39b6e3c28910d09b"},{url:"../statics/images/icons/apple-splash-1620-2160.png",revision:"1f835bc34d03412463239b757ec47b56"},{url:"../statics/images/icons/apple-splash-1640-2360.png",revision:"8fbeb6ba2a011034ae31f1e64cbd967b"},{url:"../statics/images/icons/apple-splash-1668-2224.png",revision:"bc65d36744a5fdd86f065df3e6eac4b7"},{url:"../statics/images/icons/apple-splash-1668-2388.png",revision:"2ebf11a247943819b12ac5e85a784279"},{url:"../statics/images/icons/apple-splash-1792-828.png",revision:"16a6918e15363aa65390ccaf183a35b8"},{url:"../statics/images/icons/apple-splash-2048-1536.png",revision:"2527c81ac1a074e27c4451c34be408ee"},{url:"../statics/images/icons/apple-splash-2048-2732.png",revision:"395dcfb71a57a9347148e6e451569de7"},{url:"../statics/images/icons/apple-splash-2160-1620.png",revision:"0a8c5cadbf0f8f1225c2206b2d7507cd"},{url:"../statics/images/icons/apple-splash-2208-1242.png",revision:"7d03ad121bcdb9364de44f452888d7b1"},{url:"../statics/images/icons/apple-splash-2224-1668.png",revision:"4b55f380a6c30d68205f31756dab3f00"},{url:"../statics/images/icons/apple-splash-2266-1488.png",revision:"6ea9f7353bccac07e6bac12edf207978"},{url:"../statics/images/icons/apple-splash-2360-1640.png",revision:"bebed51a2e860bfdb90eff759aef0d91"},{url:"../statics/images/icons/apple-splash-2388-1668.png",revision:"c0130b6952dbc56076267a1989d0588b"},{url:"../statics/images/icons/apple-splash-2436-1125.png",revision:"6fef14252ad6403b907292cd14005d69"},{url:"../statics/images/icons/apple-splash-2532-1170.png",revision:"f654f7c110d37f54d8a65108009ed3e7"},{url:"../statics/images/icons/apple-splash-2556-1179.png",revision:"afa1ddca6dba04b5dcefbc294aa2b1a7"},{url:"../statics/images/icons/apple-splash-2622-1206.png",revision:"76ea0f19a688b69d663d3e68d7512981"},{url:"../statics/images/icons/apple-splash-2688-1242.png",revision:"8073004aae54d28a9a35164f40402d1c"},{url:"../statics/images/icons/apple-splash-2732-2048.png",revision:"789775a905e5f86ed7f48bd27fffc939"},{url:"../statics/images/icons/apple-splash-2778-1284.png",revision:"199c726470bdd38bc519e4677b17caa3"},{url:"../statics/images/icons/apple-splash-2796-1290.png",revision:"93b0c391b78dbe5686119efbe867bbd3"},{url:"../statics/images/icons/apple-splash-2868-1320.png",revision:"c058f5ff7c6c10473b60fcb5c078156b"},{url:"../statics/images/icons/apple-splash-640-1136.png",revision:"8c7d3e7197da213568731832224cb20b"},{url:"../statics/images/icons/apple-splash-750-1334.png",revision:"8491f8aa8ad2a42358ced3ce6cb8b902"},{url:"../statics/images/icons/apple-splash-828-1792.png",revision:"157d8948c7415f3d83da6ac91f2afebc"},{url:"../statics/images/icons/manifest-icon-192.maskable.png",revision:"8f512d35369528f5d66da5dbcdf713e1"},{url:"../statics/images/icons/manifest-icon-512.maskable.png",revision:"9cfeefeffa3ac3af12abc568df5555fd"},{url:"../statics/script/conf/workbox-config.js",revision:"4a2a10af47d9c26d252a11ab2c956958"},{url:"../statics/script/script.js",revision:"d5962d1ffc642c6bac6f931e21cc3958"},{url:"../statics/style/style.css",revision:"b1e16e5794fae83ce85d894e4a834e2f"}],{}),s.registerRoute(/\.(?:png|jpg|jpeg|gif|svg|webp)$/,new s.CacheFirst({cacheName:"image-cache",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/$/,new s.StaleWhileRevalidate({cacheName:"static-cache",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:html|js|css)$/,new s.StaleWhileRevalidate({cacheName:"static-cache",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\/api\/.*\/*.json/,new s.NetworkFirst({cacheName:"api-cache",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:20,maxAgeSeconds:300})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
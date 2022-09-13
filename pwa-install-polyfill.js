!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.pwaInstallPolyfill=t():e.pwaInstallPolyfill=t()}(self,(function(){return(()=>{var e={400:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(631),i=r(n(182)),s=r(n(720)),a=r(n(90)),l=r(n(250)),c=r(n(604)),u=r(n(453)),d=r(n(439));t.default=new class e{static KEY_STORAGE_INVITATION="pwa-invitation-polyfill";static MIN_DAYS_BETWEEN_INVITATION=15;appInfoCollector=new d.default;manifest;ruleFinder;translator;renderer;bannerInvite;installUserChoice;installUserChoiceResult;constructor(){this.ruleFinder=new s.default,this.translator=new a.default,this.renderer=new l.default,this.bannerInvite=new u.default(this.translator),this.installUserChoice=new Promise((e=>{this.installUserChoiceResult=e}))}async start(){if(!("serviceWorker"in navigator))return;if(await navigator.serviceWorker.ready,!this.isEligibleToInvite())return;const e=(0,o.detect)("Mozilla/5.0 (Android 11; Mobile; rv:102.0) Gecko/102.0 Firefox/102.0");if(null===e||"browser"!==e.type||null===e.os)return;const t=await this.appInfoCollector.getAppInfo(),n=new i.default(t,e.os,e.name,parseFloat(e.version)),r=this.ruleFinder.getHelperTemplate(n,this.translator);null!==r&&this.triggerInvite(n,r)}triggerInvite(e,t){let n;const r=new Promise((e=>{n=()=>{this.renderer.createHelperPopup(t),this.inviteProcessed(),e({outcome:"accepted",platform:"web"})}}));this.bannerInvite.trigger(e.app.shortName,e.app.icon,n,(()=>{this.inviteProcessed()})),this.dispatchBeforeInstallPromptEvent(r,n)}dispatchBeforeInstallPromptEvent(e,t){window.dispatchEvent(new c.default(e,t,(()=>{this.bannerInvite.cancel()})))}inviteProcessed(){localStorage.setItem(e.KEY_STORAGE_INVITATION,(new Date).toDateString())}isEligibleToInvite(){if(this.isAppMode())return!1;const t=localStorage.getItem(e.KEY_STORAGE_INVITATION);if(null!==t){const n=new Date(t);if(((new Date).getTime()-n.getTime())/1e3/86400<e.MIN_DAYS_BETWEEN_INVITATION)return!1}return!0}isAppMode(){return window.matchMedia("(display-mode: standalone)").matches||"standalone"in window.navigator&&!0===window.navigator.standalone}}},12:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{shortName;name;icon;constructor(e,t,n){this.shortName=e,this.name=t,this.icon=n}}},439:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(375)),i=r(n(12));t.default=class{async getAppInfo(){const e=await o.default.read();if(null===e||!e.short_name||!e.name||!e.icons)throw new Error("Devra être corrigée dans la lib web manifest reader");return new i.default(e.short_name,e.name,this.getIconPath(e.icons))}getIconPath(e){const t=e[0];if(!t.src)throw new Error("Impossible to get the icon path.");return t.src}}},182:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{app;os;browserName;browserVersion;constructor(e,t,n,r){this.app=e,this.os=t,this.browserName=n,this.browserVersion=r}}},250:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{createHelperPopup(e){const t=document.createElement("div");t.classList.add("pwa-homescreen-helper"),t.innerHTML=`\n            <h1>Installer l'application</h1>\n            <div class="message">${e}</div>\n            <div class="button">C'est fait !</div>\n        `;const n=document.createElement("div");n.classList.add("pwa-homescreen-helper-mask");t.addEventListener("click",(()=>{document.body.classList.remove("pwa-helper-active");const e=document.getElementsByClassName("pwa-homescreen-helper").item(0);null!==e&&e.remove();const t=document.getElementsByClassName("pwa-homescreen-helper-mask").item(0);null!==t&&t.remove()})),document.body.appendChild(t),document.body.appendChild(n),document.body.classList.add("pwa-helper-active")}}},831:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(825));t.default=class{support(e){return"Android OS"===e.os&&"firefox"===e.browserName&&e.browserVersion>=100}template(e){return`\n            <div>\n                ${e.translate("helper.introduction")}, ${e.translate("press_on")}\n                ${o.default}\n                ${e.translate("then")} <q>${e.translate("helper.firefox.label")}</q>.\n            </div>\n        `}}},587:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(878));t.default=class{support(e){return"Android OS"===e.os&&"samsung"===e.browserName&&e.browserVersion>=17}template(e){return`\n            <div>\n                ${e.translate("helper.introduction")}, ${e.translate("press_on")}\n                ${o.default}\n                ${e.translate("then")}\n                <q>${e.translate("helper.samsung.label_1")}</q>\n                ${e.translate("and_then")} <q>${e.translate("helper.samsung.label_2")}</q>.\n            </div>\n        `}}},178:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(307));t.default=class{support(e){return"iOS"===e.os&&("safari"===e.browserName||"ios"===e.browserName)&&e.browserVersion>=11.3}template(e){return`\n            <div>\n                ${e.translate("helper.introduction")}, ${e.translate("press_on")}\n                ${o.default}\n                ${e.translate("then")} <q>${e.translate("helper.ios.label")}</q>.\n            </div>\n        `}}},465:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(178)),i=r(n(831)),s=r(n(587)),a=[new i.default,new s.default,new o.default];t.default=a},720:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(465));t.default=class{getHelperTemplate(e,t){const n=o.default.find((t=>t.support(e)));return void 0!==n?n.template(t):null}}},453:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{translator;inviteReference;constructor(e){this.translator=e}trigger(e,t,n,r){this.inviteReference=window.setTimeout((()=>{const o=this.template(e,t);this.show(o,n,r)}),2e3)}cancel(){this.inviteReference&&(clearTimeout(this.inviteReference),this.inviteReference=void 0)}show(e,t,n){const r=document.createElement("div");r.classList.add("pwa-homescreen-invite"),r.innerHTML=e;const o=()=>{const e=document.getElementsByClassName("pwa-homescreen-invite").item(0);null!==e&&e.remove()};document.body.appendChild(r);const i=document.getElementById("pwa-homescreen-dismiss");null!==i&&i.addEventListener("click",(()=>{n(),o()}));const s=document.getElementById("pwa-homescreen-accept");null!==s&&s.addEventListener("click",(()=>{t(),o()})),r.classList.add("pwa-homescreen-invite-active")}template(e,t){return`\n            <div id="pwa-homescreen-icon"><img alt="${e}" src="${t}" /></div>\n            <div id="pwa-homescreen-accept">${this.translator.translate("invite",{"%name%":e})}</div>\n            <div id="pwa-homescreen-dismiss">\n                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>\n            </div>\n        `}}},604:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});class n extends CustomEvent{platforms=["web"];userChoice;#e;#t;constructor(e,t,n){super("beforeinstallprompt"),this.userChoice=e,this.#e=t,this.#t=n}prompt(){return this.#e(),Promise.resolve()}preventDefault(){this.#t()}}t.default=n},90:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(423));class i{static FALLBACK_LANG="en";lang;constructor(){this.lang=this.getLangName()}translate(e,t={}){let n=this.lang in o.default?this.getValueByNestedKey(o.default[this.lang],e):this.getValueByNestedKey(o.default[i.FALLBACK_LANG],e);if(null===n)throw new Error(`Translation ${e} not found`);for(const[e,r]of Object.entries(t))n=n.replace(e,r);return n}getValueByNestedKey(e,t){let n=e;const r=t.split(".");for(let e=0;e<r.length;e+=1){const t=r[e];if(!(t in n))return null;n=n[t]}return n}getLangName(){const[e]=navigator.language.split("-");return e}}t.default=i},423:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(514)),i=r(n(983)),s={fr:o.default,en:i.default};t.default=s},820:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(201);const o=r(n(400));window.addEventListener("load",(()=>{o.default.start()}))},297:(e,t,n)=>{(t=n(645)(!1)).push([e.id,".pwa-homescreen-helper{z-index:10000;position:fixed;left:50%;top:50%;transform:translate(-50%, -50%);background-color:white;padding:15px;color:black;border:1px solid grey;border-radius:5px}.pwa-homescreen-helper h1{font-size:130%}.pwa-homescreen-helper .message{margin:20px 0}.pwa-homescreen-helper .button{color:#1a42b1;text-align:right}.pwa-homescreen-helper q{font-weight:bold;font-style:italic}.pwa-homescreen-helper-mask{position:fixed;height:0;width:0;top:0;left:0;background-color:black;opacity:0.75;z-index:9999}body.pwa-helper-active .pwa-homescreen-helper>div{display:block !important}body.pwa-helper-active .pwa-homescreen-helper-mask{width:100%;height:100%}.pwa-homescreen-invite{z-index:9990;position:fixed;margin:auto;height:60px;max-width:300px;bottom:-60px;right:0;left:0;text-align:center;background-color:white;border-color:grey;border-style:solid;border-width:1px 0 1px 0;font-family:Arial, sans-serif;box-sizing:border-box;color:#1a42b1;line-height:60px;cursor:pointer;display:flex;justify-content:space-between;box-shadow:0 -1px 10px grey;transition-duration:1s}.pwa-homescreen-invite.pwa-homescreen-invite-active{bottom:0}.pwa-homescreen-invite #pwa-homescreen-icon{width:60px;display:flex;align-items:center;justify-content:center}.pwa-homescreen-invite #pwa-homescreen-icon img{max-height:70%;max-width:70%}.pwa-homescreen-invite #pwa-homescreen-accept{display:flex;align-items:center;line-height:20px;text-align:left;color:#4030be}.pwa-homescreen-invite #pwa-homescreen-dismiss{width:60px}.pwa-homescreen-invite .pwa-homescreen-invite-close{height:100%;float:right;margin:0 10px;opacity:0.7}.pwa-homescreen-invite .pwa-homescreen-invite-close img{max-height:63%;vertical-align:middle;background-color:#e2e2e2}\n",""]),e.exports=t},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var s,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},631:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BrowserInfo:()=>o,NodeInfo:()=>i,SearchBotDeviceInfo:()=>s,BotInfo:()=>a,ReactNativeInfo:()=>l,detect:()=>p,browserName:()=>h,parseUserAgent:()=>m,detectOS:()=>v,getNodeVersion:()=>g});var r=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},o=function(e,t,n){this.name=e,this.version=t,this.os=n,this.type="browser"},i=function(e){this.version=e,this.type="node",this.name="node",this.os=process.platform},s=function(e,t,n,r){this.name=e,this.version=t,this.os=n,this.bot=r,this.type="bot-device"},a=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},l=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},c=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,u=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],d=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function p(e){return e?m(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new l:"undefined"!=typeof navigator?m(navigator.userAgent):g()}function f(e){return""!==e&&u.reduce((function(t,n){var r=n[0],o=n[1];if(t)return t;var i=o.exec(e);return!!i&&[r,i]}),!1)}function h(e){var t=f(e);return t?t[0]:null}function m(e){var t=f(e);if(!t)return null;var n=t[0],i=t[1];if("searchbot"===n)return new a;var l=i[1]&&i[1].split(".").join("_").split("_").slice(0,3);l?l.length<3&&(l=r(r([],l,!0),function(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}(3-l.length),!0)):l=[];var u=l.join("."),d=v(e),p=c.exec(e);return p&&p[1]?new s(n,u,d,p[1]):new o(n,u,d)}function v(e){for(var t=0,n=d.length;t<n;t++){var r=d[t],o=r[0];if(r[1].exec(e))return o}return null}function g(){return"undefined"!=typeof process&&process.version?new i(process.version.slice(1)):null}},878:e=>{e.exports='<?xml version="1.0" encoding="iso-8859-1"?>\n<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n     viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97; height: 17px;" xml:space="preserve">\n<g>\n\t<g id="Menu">\n\t\t<path d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03\n\t\t\tC5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"/>\n        <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03\n\t\t\tS379.58,180.455,372.939,180.455z"/>\n        <path d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909\n\t\t\tc6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"/>\n\t</g>\n    <g>\n\t</g>\n    <g>\n\t</g>\n    <g>\n\t</g>\n    <g>\n\t</g>\n    <g>\n\t</g>\n    <g>\n\t</g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n</svg>\n'},825:e=>{e.exports='<svg style="height: 18px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.96 122.88"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>3-vertical-dots</title><path class="cls-1" d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z"/></svg>\n'},307:e=>{e.exports='<svg\n        style="width: 20px;"\n        viewBox="0 0 128 128"\n        xmlns="http://www.w3.org/2000/svg"\n>\n    <title>Share</title>\n    <path fill="#007AFF" d="M48.883,22.992L61.146,10.677L61.146,78.282C61.146,80.005 62.285,81.149 64,81.149C65.715,81.149 66.854,80.005 66.854,78.282L66.854,10.677L79.117,22.992C79.693,23.57 80.256,23.853 81.114,23.853C81.971,23.853 82.534,23.57 83.11,22.992C84.25,21.848 84.25,20.125 83.11,18.981L65.997,1.794C65.715,1.511 65.421,1.215 65.139,1.215C64.563,0.932 63.718,0.932 62.861,1.215C62.579,1.498 62.285,1.498 62.003,1.794L44.89,18.981C43.75,20.125 43.75,21.848 44.89,22.992C46.029,24.149 47.744,24.149 48.883,22.992ZM103.936,35.32L81.114,35.32L81.114,41.053L103.936,41.053L103.936,121.27L24.064,121.27L24.064,41.053L46.886,41.053L46.886,35.32L24.064,35.32C20.928,35.32 18.355,37.904 18.355,41.053L18.355,121.27C18.355,124.419 20.928,127.003 24.064,127.003L103.936,127.003C107.072,127.003 109.645,124.419 109.645,121.27L109.645,41.053C109.645,37.891 107.072,35.32 103.936,35.32Z"></path>\n</svg>\n'},201:(e,t,n)=>{var r=n(379),o=n(297);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var i={injectType:"singletonStyleTag",insert:("head","head"),singleton:!0};r(o,i);e.exports=o.locals||{}},379:(e,t,n)=>{"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=a(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(s[d].references++,s[d].updater(p)):s.push({identifier:u,updater:v(p,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,t){var n,r,o;if(t.singleton){var i=m++;n=h||(h=c(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=c(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);s[o].references--}for(var i=l(e,t),c=0;c<n.length;c++){var u=a(n[c]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=i}}}},375:e=>{window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=new r.default},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.internalStorage=window.sessionStorage}return e.prototype.exists=function(){return null!==this.getManifestPath()},e.prototype.readCallback=function(e){this.read().then((function(t){e(t,null)})).catch((function(t){e(null,t)}))},e.prototype.read=function(){return r(this,void 0,void 0,(function(){var e,t,n;return o(this,(function(r){switch(r.label){case 0:if(e=this.getContentFromCache())return[2,e];if(!(t=this.getManifestPath()))throw new Error("No manifest declaration found.");return[4,this.getManifestContent(t)];case 1:return n=r.sent(),this.storeContentInCache(n),[2,n]}}))}))},e.prototype.getManifestContent=function(e){return r(this,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return[4,fetch(e)];case 1:if(200!==(t=n.sent()).status)throw new Error("Impossible to get the manifest content.");return[4,t.json()];case 2:return[2,n.sent()]}}))}))},e.prototype.getManifestPath=function(){var e=document.head.querySelector('link[rel="manifest"]');return e?e.href:null},e.prototype.getContentFromCache=function(){var t=this.extractCachedContent(e.PWA_COMPAT_STORAGE_KEY);return t||this.extractCachedContent(e.STORAGE_KEY)||null},e.prototype.extractCachedContent=function(e){var t=this.internalStorage.getItem(e);if(t)try{return JSON.parse(t)}catch(e){}return null},e.prototype.storeContentInCache=function(t){this.internalStorage.setItem(e.STORAGE_KEY,JSON.stringify(t))},e.STORAGE_KEY="__web_manifest_reader_storage",e.PWA_COMPAT_STORAGE_KEY="__pwacompat_manifest",e}();t.default=i}])},983:e=>{"use strict";e.exports=JSON.parse('{"invite":"Add %name% to the home screen","helper":{"introduction":"To install this application and enjoy an improved experience","ios":{"label":"Add to Home Screen"},"firefox":{"label":"Install"},"samsung":{"label_1":"Add the page...","label_2":"Home screen"}},"press_on":"tap on","then":"then","and_then":"and then","select":"select"}')},514:e=>{"use strict";e.exports=JSON.parse('{"invite":"Ajouter %name% à l\'écran d\'accueil","helper":{"introduction":"Pour installer cette application et profiter d\'une expérience améliorée","ios":{"label":"Ajout en &eacute;cran d\'accueil"},"firefox":{"label":"Installer"},"samsung":{"label_1":"Ajouter la page à","label_2":"Ecran d\'accueil"}},"press_on":"presser sur","then":"puis","and_then":"et ensuite","select":"s&eacute;lectionner"}')}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(820)})()}));
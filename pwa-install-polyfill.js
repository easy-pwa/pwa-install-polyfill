!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.pwaInstallPolyfill=t():e.pwaInstallPolyfill=t()}(self,(()=>(()=>{var e={400:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(720)),o=r(n(90)),s=r(n(250)),a=r(n(79)),l=r(n(439)),c=r(n(690)),u=r(n(585)),d=r(n(270)),p=r(n(778)),h=r(n(663)),f=r(n(260));t.default=class{appInfoCollector;ruleFinder;ruleRender;langIdentifier;translator;helperRenderer;inviteBannerManager;browserContextFactory;inviteScheduler;inviteEventDispatcher;inviteEligibilityChecker;constructor(){this.appInfoCollector=new l.default,this.ruleFinder=new i.default,this.ruleRender=new c.default,this.langIdentifier=new f.default,this.translator=new o.default(this.langIdentifier),this.helperRenderer=new s.default,this.inviteBannerManager=new a.default(this.translator),this.browserContextFactory=new u.default,this.inviteScheduler=new d.default("pwa-invitation-polyfill",15),this.inviteEventDispatcher=new p.default(this.inviteBannerManager,this.helperRenderer),this.inviteEligibilityChecker=new h.default(this.inviteScheduler,this.translator)}async start(e){if(!this.inviteEligibilityChecker.isEligibleToInvite())return;await navigator.serviceWorker.ready;const t=this.browserContextFactory.getBrowserContext(e);if(null===t)return;const n=await this.appInfoCollector.getAppInfo(),r=this.ruleFinder.findForContext(t);if(null!==r){const e=this.ruleRender.getHelperTemplate(r,this.translator);this.inviteEventDispatcher.dispatch(n,e,(()=>{this.inviteScheduler.storeLastInviteAnsweredAt(new Date)}))}}}},12:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{shortName;name;icon;constructor(e,t,n){this.shortName=e,this.name=t,this.icon=n}}},439:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(375)),o=r(n(12));t.default=class{async getAppInfo(){const e=await i.default.read();if(null===e||!e.short_name||!e.name||!e.icons)throw new Error("Missing property declarations in manifest.");return new o.default(e.short_name,e.name,this.getIconPath(e.icons))}getIconPath(e){const t=e[0];if(!t.src)throw new Error("Impossible to get the icon path.");return t.src}}},626:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{os;browserName;browserVersion;constructor(e,t,n){this.os=e,this.browserName=t,this.browserVersion=n}}},585:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(631),o=r(n(626));t.default=class{getBrowserContext(e){const t=(0,i.detect)(e.userAgent);return null===t||"browser"!==t.type||null===t.os?null:new o.default(t.os,t.name,parseFloat(t.version))}}},563:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{userAgent;constructor(e){this.userAgent=e}}},250:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{createHelperPopup(e){const t=document.createElement("div");t.classList.add("pwa-homescreen-helper"),t.innerHTML=`\n            <h1>Installer l'application</h1>\n            <div class="message">${e}</div>\n            <div class="button">C'est fait !</div>\n        `;const n=document.createElement("div");n.classList.add("pwa-homescreen-helper-mask");const r=()=>{document.body.classList.remove("pwa-helper-active");const e=document.getElementsByClassName("pwa-homescreen-helper").item(0);null!==e&&e.remove();const t=document.getElementsByClassName("pwa-homescreen-helper-mask").item(0);null!==t&&t.remove()};t.addEventListener("click",r),window.setTimeout(r,3e4),document.body.appendChild(t),document.body.appendChild(n),document.body.classList.add("pwa-helper-active")}}},831:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(825));t.default=class{support(e){return"Android OS"===e.os&&"firefox"===e.browserName&&e.browserVersion>=100}template(e){return`\n            <div>\n                ${e.translate("helper.introduction")}, ${e.translate("press_on")}\n                ${i.default}\n                ${e.translate("then")} <q>${e.translate("helper.firefox.label")}</q>.\n            </div>\n        `}}},587:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(878));t.default=class{support(e){return"Android OS"===e.os&&"samsung"===e.browserName&&e.browserVersion>=17}template(e){return`\n            <div>\n                ${e.translate("helper.introduction")}, ${e.translate("press_on")}\n                ${i.default}\n                ${e.translate("then")}\n                <q>${e.translate("helper.samsung.label_1")}</q>\n                ${e.translate("and_then")} <q>${e.translate("helper.samsung.label_2")}</q>.\n            </div>\n        `}}},178:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(307));t.default=class{support(e){return"iOS"===e.os&&("safari"===e.browserName||"ios"===e.browserName)&&e.browserVersion>=11.3}template(e){return`\n            <div>\n                ${e.translate("helper.introduction")}, ${e.translate("press_on")}\n                ${i.default}\n                ${e.translate("then")} <q>${e.translate("helper.ios.label")}</q>.\n            </div>\n        `}}},465:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(178)),o=r(n(831)),s=r(n(587)),a=[new o.default,new s.default,new i.default];t.default=a},720:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(465));t.default=class{findForContext(e){return this.getRuleDefinitions().find((t=>t.support(e)))??null}getRuleDefinitions(){return i.default}}},690:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{getHelperTemplate(e,t){return e.template(t)}}},604:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});class n extends CustomEvent{platforms=["web"];userChoice;#e;#t;constructor(e,t,n){super("beforeinstallprompt"),this.userChoice=e,this.#e=t,this.#t=n}prompt(){return this.#e(),Promise.resolve()}preventDefault(){this.#t()}}t.default=n},79:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{translator;inviteReference;constructor(e){this.translator=e}trigger(e,t,n,r){this.inviteReference=window.setTimeout((()=>{const i=this.template(e,t);this.show(i,n,r)}),2e3)}cancel(){this.inviteReference&&(clearTimeout(this.inviteReference),this.inviteReference=void 0)}show(e,t,n){const r=document.createElement("div");r.classList.add("pwa-homescreen-invite"),r.innerHTML=e;const i=()=>{const e=document.getElementsByClassName("pwa-homescreen-invite").item(0);null!==e&&e.remove()};document.body.appendChild(r);const o=document.getElementById("pwa-homescreen-dismiss");null!==o&&o.addEventListener("click",(()=>{n(),i()}));const s=document.getElementById("pwa-homescreen-accept");null!==s&&s.addEventListener("click",(()=>{t(),i()})),r.classList.add("pwa-homescreen-invite-active")}template(e,t){return`\n            <div id="pwa-homescreen-icon"><img alt="${e}" src="${t}" /></div>\n            <div id="pwa-homescreen-accept">${this.translator.translate("invite",{"%name%":e})}</div>\n            <div id="pwa-homescreen-dismiss">\n                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>\n            </div>\n        `}}},663:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{inviteScheduler;translator;constructor(e,t){this.inviteScheduler=e,this.translator=t}isEligibleToInvite(){return!!this.hasServiceWorkerService()&&(!!this.translator.isSupportedCurrentLang()&&(!this.isAppMode()&&this.inviteScheduler.isTime()))}isAppMode(){return window.matchMedia("(display-mode: standalone)").matches||"standalone"in window.navigator&&!0===window.navigator.standalone}hasServiceWorkerService(){return"serviceWorker"in navigator}}},778:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(604));t.default=class{inviteBannerManager;helperRenderer;constructor(e,t){this.inviteBannerManager=e,this.helperRenderer=t}dispatch(e,t,n){let r;const i=new Promise((e=>{r=()=>{this.helperRenderer.createHelperPopup(t),n(),e({outcome:"accepted",platform:"web"})}}));this.inviteBannerManager.trigger(e.shortName,e.icon,r,(()=>{n()})),this.dispatchBeforeInstallPromptEvent(i,r)}dispatchBeforeInstallPromptEvent(e,t){window.dispatchEvent(new i.default(e,t,(()=>{this.inviteBannerManager.cancel()})))}}},270:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{localStorageKey;minDelayBetweenInvite;constructor(e,t){this.localStorageKey=e,this.minDelayBetweenInvite=t}isTime(){const e=this.getLastInviteAnsweredAt();if(null===e)return!0;return((new Date).getTime()-e.getTime())/1e3/86400>=this.minDelayBetweenInvite}getLastInviteAnsweredAt(){const e=localStorage.getItem(this.localStorageKey);return null===e?null:new Date(e)}storeLastInviteAnsweredAt(e){localStorage.setItem(this.localStorageKey,e.toDateString())}}},260:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{cachedLang;getBrowserLang(){if(!this.cachedLang){const[e]=navigator.language.split("-");this.cachedLang=e}return this.cachedLang}}},90:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(423));t.default=class{langIdentifier;constructor(e){this.langIdentifier=e}isSupportedCurrentLang(){return this.langIdentifier.getBrowserLang()in i.default}translate(e,t={}){let n=this.getValueByNestedKey(i.default[this.langIdentifier.getBrowserLang()],e);if(null===n)throw new Error(`Translation ${e} not found`);for(const[e,r]of Object.entries(t))n=n.replace(e,r);return n}getValueByNestedKey(e,t){let n=e;const r=t.split(".");for(let e=0;e<r.length;e+=1){const t=r[e];if(!(t in n))return null;n=n[t]}return n}}},423:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(514)),o=r(n(983)),s={fr:i.default,en:o.default};t.default=s},820:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(201);const i=r(n(400)),o=r(n(563));window.addEventListener("load",(()=>{const e=new URLSearchParams(window.location.search).get("pwa_install_polyfill_debug_user_agent")??void 0,t=new o.default(e);(new i.default).start(t)}))},297:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(81),i=n.n(r),o=n(645),s=n.n(o)()(i());s.push([e.id,".pwa-homescreen-helper{z-index:10000;position:fixed;left:50%;top:50%;transform:translate(-50%, -50%);background-color:white;padding:15px;color:black;border:1px solid grey;border-radius:5px;min-width:350px}.pwa-homescreen-helper h1{font-size:130%}.pwa-homescreen-helper .message{margin:20px 0}.pwa-homescreen-helper .button{color:#1a42b1;text-align:right}.pwa-homescreen-helper q{font-weight:bold;font-style:italic}.pwa-homescreen-helper-mask{position:fixed;height:0;width:0;top:0;left:0;background-color:black;opacity:0.75;z-index:9999}body.pwa-helper-active .pwa-homescreen-helper>div{display:block !important}body.pwa-helper-active .pwa-homescreen-helper-mask{width:100%;height:100%}.pwa-homescreen-invite{z-index:9990;position:fixed;margin:auto;height:60px;max-width:300px;bottom:-60px;right:0;left:0;text-align:center;background-color:white;border-color:grey;border-style:solid;border-width:1px 0 1px 0;font-family:Lato, sans-serif;box-sizing:border-box;color:#1a276b;line-height:60px;cursor:pointer;display:flex;justify-content:space-between;box-shadow:0 -1px 10px grey;transition-duration:1s}.pwa-homescreen-invite.pwa-homescreen-invite-active{bottom:0}.pwa-homescreen-invite #pwa-homescreen-icon{width:60px;display:flex;align-items:center;justify-content:center}.pwa-homescreen-invite #pwa-homescreen-icon img{max-height:70%;max-width:70%}.pwa-homescreen-invite #pwa-homescreen-accept{display:flex;align-items:center;line-height:20px;text-align:left;color:#20257d}.pwa-homescreen-invite #pwa-homescreen-dismiss{width:60px}.pwa-homescreen-invite .pwa-homescreen-invite-close{height:100%;float:right;margin:0 10px;opacity:0.7}.pwa-homescreen-invite .pwa-homescreen-invite-close img{max-height:63%;vertical-align:middle;background-color:#e2e2e2}\n",""]);const a=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&s[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},631:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BotInfo:()=>a,BrowserInfo:()=>i,NodeInfo:()=>o,ReactNativeInfo:()=>l,SearchBotDeviceInfo:()=>s,browserName:()=>v,detect:()=>h,detectOS:()=>g,getNodeVersion:()=>w,parseUserAgent:()=>m});var r=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},i=function(e,t,n){this.name=e,this.version=t,this.os=n,this.type="browser"},o=function(e){this.version=e,this.type="node",this.name="node",this.os=process.platform},s=function(e,t,n,r){this.name=e,this.version=t,this.os=n,this.bot=r,this.type="bot-device"},a=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},l=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},c=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,u=3,d=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],p=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function h(e){return e?m(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new l:"undefined"!=typeof navigator?m(navigator.userAgent):w()}function f(e){return""!==e&&d.reduce((function(t,n){var r=n[0],i=n[1];if(t)return t;var o=i.exec(e);return!!o&&[r,o]}),!1)}function v(e){var t=f(e);return t?t[0]:null}function m(e){var t=f(e);if(!t)return null;var n=t[0],o=t[1];if("searchbot"===n)return new a;var l=o[1]&&o[1].split(".").join("_").split("_").slice(0,3);l?l.length<u&&(l=r(r([],l,!0),function(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}(u-l.length),!0)):l=[];var d=l.join("."),p=g(e),h=c.exec(e);return h&&h[1]?new s(n,d,p,h[1]):new i(n,d,p)}function g(e){for(var t=0,n=p.length;t<n;t++){var r=p[t],i=r[0];if(r[1].exec(e))return i}return null}function w(){return"undefined"!=typeof process&&process.version?new o(process.version.slice(1)):null}},878:e=>{e.exports='<?xml version="1.0" encoding="iso-8859-1"?>\n<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n     viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97; height: 17px;" xml:space="preserve">\n<g>\n\t<g id="Menu">\n\t\t<path d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03\n\t\t\tC5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"/>\n        <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03\n\t\t\tS379.58,180.455,372.939,180.455z"/>\n        <path d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909\n\t\t\tc6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"/>\n\t</g>\n    <g>\n\t</g>\n    <g>\n\t</g>\n    <g>\n\t</g>\n    <g>\n\t</g>\n    <g>\n\t</g>\n    <g>\n\t</g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n    <g>\n</g>\n</svg>\n'},825:e=>{e.exports='<svg style="height: 18px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.96 122.88"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>3-vertical-dots</title><path class="cls-1" d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z"/></svg>\n'},307:e=>{e.exports='<svg\n        style="width: 20px;"\n        viewBox="0 0 128 128"\n        xmlns="http://www.w3.org/2000/svg"\n>\n    <title>Share</title>\n    <path fill="#007AFF" d="M48.883,22.992L61.146,10.677L61.146,78.282C61.146,80.005 62.285,81.149 64,81.149C65.715,81.149 66.854,80.005 66.854,78.282L66.854,10.677L79.117,22.992C79.693,23.57 80.256,23.853 81.114,23.853C81.971,23.853 82.534,23.57 83.11,22.992C84.25,21.848 84.25,20.125 83.11,18.981L65.997,1.794C65.715,1.511 65.421,1.215 65.139,1.215C64.563,0.932 63.718,0.932 62.861,1.215C62.579,1.498 62.285,1.498 62.003,1.794L44.89,18.981C43.75,20.125 43.75,21.848 44.89,22.992C46.029,24.149 47.744,24.149 48.883,22.992ZM103.936,35.32L81.114,35.32L81.114,41.053L103.936,41.053L103.936,121.27L24.064,121.27L24.064,41.053L46.886,41.053L46.886,35.32L24.064,35.32C20.928,35.32 18.355,37.904 18.355,41.053L18.355,121.27C18.355,124.419 20.928,127.003 24.064,127.003L103.936,127.003C107.072,127.003 109.645,124.419 109.645,121.27L109.645,41.053C109.645,37.891 107.072,35.32 103.936,35.32Z"></path>\n</svg>\n'},201:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(379),i=n.n(r),o=n(37),s=n.n(o),a=n(569),l=n.n(a),c=n(565),u=n.n(c),d=n(216),p=n.n(d),h=n(297),f={};f.setAttributes=u(),f.insert=l().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=p();i()(h.Z,f);const v=h.Z&&h.Z.locals?h.Z.locals:void 0},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],a=0;a<e.length;a++){var l=e[a],c=r.base?l[0]+r.base:l[0],u=o[c]||0,d="".concat(c," ").concat(u);o[c]=u+1;var p=n(d),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=i(h,r);r.byIndex=a,t.splice(a,0,{identifier:d,updater:f,references:1})}s.push(d)}return s}function i(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var a=n(o[s]);t[a].references--}for(var l=r(e,i),c=0;c<o.length;c++){var u=n(o[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},37:e=>{"use strict";var t,n=(t=[],function(e,n){return t[e]=n,t.filter(Boolean).join("\n")});function r(e,t,r,i){var o;if(r)o="";else{o="",i.supports&&(o+="@supports (".concat(i.supports,") {")),i.media&&(o+="@media ".concat(i.media," {"));var s=void 0!==i.layer;s&&(o+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),o+=i.css,s&&(o+="}"),i.media&&(o+="}"),i.supports&&(o+="}")}if(e.styleSheet)e.styleSheet.cssText=n(t,o);else{var a=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(a,l[t]):e.appendChild(a)}}var i={singleton:null,singletonCounter:0};e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=i.singletonCounter++,n=i.singleton||(i.singleton=e.insertStyleElement(e));return{update:function(e){r(n,t,!1,e)},remove:function(e){r(n,t,!0,e)}}}},375:e=>{window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=new r.default},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this.internalStorage=window.sessionStorage}return e.prototype.exists=function(){return null!==this.getManifestPath()},e.prototype.readCallback=function(e){this.read().then((function(t){e(t,null)})).catch((function(t){e(null,t)}))},e.prototype.read=function(){return r(this,void 0,void 0,(function(){var e,t,n;return i(this,(function(r){switch(r.label){case 0:if(e=this.getContentFromCache())return[2,e];if(!(t=this.getManifestPath()))throw new Error("No manifest declaration found.");return[4,this.getManifestContent(t)];case 1:return n=r.sent(),this.storeContentInCache(n),[2,n]}}))}))},e.prototype.getManifestContent=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,fetch(e)];case 1:if(200!==(t=n.sent()).status)throw new Error("Impossible to get the manifest content.");return[4,t.json()];case 2:return[2,n.sent()]}}))}))},e.prototype.getManifestPath=function(){var e=document.head.querySelector('link[rel="manifest"]');return e?e.href:null},e.prototype.getContentFromCache=function(){var t=this.extractCachedContent(e.PWA_COMPAT_STORAGE_KEY);return t||this.extractCachedContent(e.STORAGE_KEY)||null},e.prototype.extractCachedContent=function(e){var t=this.internalStorage.getItem(e);if(t)try{return JSON.parse(t)}catch(e){}return null},e.prototype.storeContentInCache=function(t){this.internalStorage.setItem(e.STORAGE_KEY,JSON.stringify(t))},e.STORAGE_KEY="__web_manifest_reader_storage",e.PWA_COMPAT_STORAGE_KEY="__pwacompat_manifest",e}();t.default=o}])},983:e=>{"use strict";e.exports=JSON.parse('{"invite":"Add %name% to the home screen","helper":{"introduction":"To install this application and enjoy an improved experience","ios":{"label":"Add to Home Screen"},"firefox":{"label":"Install"},"samsung":{"label_1":"Add the page...","label_2":"Home screen"}},"press_on":"tap on","then":"then","and_then":"and then","select":"select"}')},514:e=>{"use strict";e.exports=JSON.parse('{"invite":"Ajouter %name% à l\'écran d\'accueil","helper":{"introduction":"Pour installer cette application et profiter d\'une expérience améliorée","ios":{"label":"Ajout en &eacute;cran d\'accueil"},"firefox":{"label":"Installer"},"samsung":{"label_1":"Ajouter la page à","label_2":"Ecran d\'accueil"}},"press_on":"presser sur","then":"puis","and_then":"et ensuite","select":"s&eacute;lectionner"}')}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(820)})()));
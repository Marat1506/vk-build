!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VkAdapter=t():e.VkAdapter=t()}(self,(()=>(()=>{var e={817:function(e,t){!function(e){"use strict";var t=function(){return t=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},t.apply(this,arguments)};function r(e,t,r,s){return new(r||(r=Promise))((function(a,n){function i(e){try{u(s.next(e))}catch(e){n(e)}}function o(e){try{u(s.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,o)}u((s=s.apply(e,t||[])).next())}))}function s(e,t){var r,s,a,n,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return n={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function o(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;n&&(n=0,o[0]&&(i=0)),i;)try{if(r=1,s&&(a=2&o[0]?s.return:o[0]?s.throw||((a=s.return)&&a.call(s),0):s.next)&&!(a=a.call(s,o[1])).done)return a;switch(s=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,s=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],s=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}function a(e,t,r){if(r||2===arguments.length)for(var s,a=0,n=t.length;a<n;a++)!s&&a in t||(s||(s=Array.prototype.slice.call(t,0,a)),s[a]=t[a]);return e.concat(s||Array.prototype.slice.call(t))}function n(e,r,s){var a=function(e){var t={current:0,next:function(){return++this.current}},r={};return{add:function(s,a){var n=null!=a?a:"".concat(t.next(),"_").concat(e);return r[n]=s,n},resolve:function(e,t,s){var a=r[e];a&&(s(t)?a.resolve(t):a.reject(t),r[e]=null)}}}(s);return r((function(e){if(e.detail&&e.detail.data&&"object"==typeof e.detail.data&&"request_id"in e.detail.data){var t=e.detail.data,r=t.request_id,s=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(r[s[a]]=e[s[a]])}return r}(t,["request_id"]);r&&a.resolve(r,s,(function(e){return!("error_type"in e)}))}})),function(r,s){return void 0===s&&(s={}),new Promise((function(n,i){var o=a.add({resolve:n,reject:i},s.request_id);e(r,t(t({},s),{request_id:o}))}))}}var i,o,u,c,l,d,p,h,v,f,m,b="undefined"!=typeof window,g=Boolean(b&&window.AndroidBridge),y=Boolean(b&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),w=Boolean(b&&window.ReactNativeWebView&&"function"==typeof window.ReactNativeWebView.postMessage),A=b&&!g&&!y,S=A&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),_=A?"message":"VKWebAppEvent",P=a(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppAddToHomeScreenInfo","VKWebAppClose","VKWebAppCopyText","VKWebAppCreateHash","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppSendToClient","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGroupInfo","VKWebAppGetGeodata","VKWebAppGetCommunityToken","VKWebAppGetConfig","VKWebAppGetLaunchParams","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowStoryBox","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet","VKWebAppFlashGetInfo","VKWebAppSubscribeStoryApp","VKWebAppOpenWallPost","VKWebAppCheckAllowedScopes","VKWebAppCheckBannerAd","VKWebAppHideBannerAd","VKWebAppShowBannerAd","VKWebAppCheckNativeAds","VKWebAppShowNativeAds","VKWebAppRetargetingPixel","VKWebAppConversionHit","VKWebAppShowSubscriptionBox","VKWebAppCheckSurvey","VKWebAppShowSurvey","VKWebAppScrollTop","VKWebAppScrollTopStart","VKWebAppScrollTopStop","VKWebAppShowSlidesSheet","VKWebAppTranslate","VKWebAppRecommend","VKWebAppAddToProfile","VKWebAppGetFriends"],A&&!S?["VKWebAppResizeWindow","VKWebAppAddToMenu","VKWebAppShowInstallPushBox","VKWebAppShowCommunityWidgetPreviewBox","VKWebAppCallStart","VKWebAppCallJoin","VKWebAppCallGetStatus"]:["VKWebAppShowImages"],!0),V=b?window.AndroidBridge:void 0,E=y?window.webkit.messageHandlers:void 0,K=A?parent:void 0;e.EAdsFormats=void 0,(o=e.EAdsFormats||(e.EAdsFormats={})).REWARD="reward",o.INTERSTITIAL="interstitial",e.BannerAdLayoutType=void 0,(u=e.BannerAdLayoutType||(e.BannerAdLayoutType={})).RESIZE="resize",u.OVERLAY="overlay",e.BannerAdLocation=void 0,(c=e.BannerAdLocation||(e.BannerAdLocation={})).TOP="top",c.BOTTOM="bottom",e.BannerAdAlign=void 0,(l=e.BannerAdAlign||(e.BannerAdAlign={})).LEFT="left",l.RIGHT="right",l.CENTER="center",e.BannerAdHeightType=void 0,(d=e.BannerAdHeightType||(e.BannerAdHeightType={})).COMPACT="compact",d.REGULAR="regular",e.BannerAdOrientation=void 0,(p=e.BannerAdOrientation||(e.BannerAdOrientation={})).HORIZONTAL="horizontal",p.VERTICAL="vertical",e.EGrantedPermission=void 0,(h=e.EGrantedPermission||(e.EGrantedPermission={})).CAMERA="camera",h.LOCATION="location",h.PHOTO="photo",e.EGetLaunchParamsResponseLanguages=void 0,(v=e.EGetLaunchParamsResponseLanguages||(e.EGetLaunchParamsResponseLanguages={})).RU="ru",v.UK="uk",v.UA="ua",v.EN="en",v.BE="be",v.KZ="kz",v.PT="pt",v.ES="es",e.EGetLaunchParamsResponseGroupRole=void 0,(f=e.EGetLaunchParamsResponseGroupRole||(e.EGetLaunchParamsResponseGroupRole={})).ADMIN="admin",f.EDITOR="editor",f.MEMBER="member",f.MODER="moder",f.NONE="none",e.EGetLaunchParamsResponsePlatforms=void 0,(m=e.EGetLaunchParamsResponsePlatforms||(e.EGetLaunchParamsResponsePlatforms={})).DESKTOP_WEB="desktop_web",m.DESKTOP_WEB_MESSENGER="desktop_web_messenger",m.DESKTOP_APP_MESSENGER="desktop_app_messenger",m.MOBILE_WEB="mobile_web",m.MOBILE_ANDROID="mobile_android",m.MOBILE_ANDROID_MESSENGER="mobile_android_messenger",m.MOBILE_IPHONE="mobile_iphone",m.MOBILE_IPHONE_MESSENGER="mobile_iphone_messenger",m.MOBILE_IPAD="mobile_ipad";var k=function(e){var t=void 0,o=[],u=Math.random().toString(36).substring(2,5);function c(e){o.push(e)}function l(e){return g?!(!V||"function"!=typeof V[e]):y?!(!E||!E[e]||"function"!=typeof E[e].postMessage):!!A&&P.includes(e)}function d(){return y||g}function p(){return A&&window.parent!==window}function h(){return d()||p()}function v(e){if(y||g)return a([],o,!0).map((function(t){return t.call(null,e)}));var r=null==e?void 0:e.data;if(A&&r){if(w&&"string"==typeof r)try{r=JSON.parse(r)}catch(e){}var s=r.type,n=r.data,i=r.frameId;s&&("VKWebAppSettings"!==s?a([],o,!0).map((function(e){return e({detail:{type:s,data:n}})})):t=i)}}w&&/(android)/i.test(navigator.userAgent)?document.addEventListener(_,v):"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(_,v);var f=n((function(r,s){V&&V[r]?V[r](JSON.stringify(s)):E&&E[r]&&"function"==typeof E[r].postMessage?E[r].postMessage(s):w?window.ReactNativeWebView.postMessage(JSON.stringify({handler:r,params:s})):K&&"function"==typeof K.postMessage&&K.postMessage({handler:r,params:s,type:"vk-connect",webFrameId:t,connectVersion:e},"*")}),c,u);return c((function(e){e.detail&&"SetSupportedHandlers"===e.detail.type&&(i=new Set(e.detail.data.supportedHandlers))})),{send:f,sendPromise:f,subscribe:c,unsubscribe:function(e){var t=o.indexOf(e);t>-1&&o.splice(t,1)},supports:function(e){return console.warn("bridge.supports method is deprecated. Use bridge.supportsAsync instead."),l(e)},supportsAsync:function(e){return r(this,void 0,void 0,(function(){var t;return s(this,(function(r){switch(r.label){case 0:if(g||y)return[2,l(e)];if(i)return[2,i.has(e)];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,f("SetSupportedHandlers")];case 2:return t=r.sent(),i=new Set(t.supportedHandlers),[3,4];case 3:return r.sent(),i=new Set(["VKWebAppInit"]),[3,4];case 4:return[2,i.has(e)]}}))}))},isWebView:d,isIframe:p,isEmbedded:h,isStandalone:function(){return!h()}}}("2.15.6");e.applyMiddleware=function e(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];return r.includes(void 0)||r.includes(null)?e.apply(void 0,r.filter((function(e){return"function"==typeof e}))):function(e){if(0===r.length)return e;var s,a={subscribe:e.subscribe,send:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.send.apply(e,t)}},n=r.filter((function(e){return"function"==typeof e})).map((function(e){return e(a)})).reduce((function(e,t){return function(r){return e(t(r))}}));return s=n(e.send),t(t({},e),{send:s})}},e.default=k,e.parseURLSearchParamsForGetLaunchParams=function(t){var r={};try{new URLSearchParams(t).forEach((function(t,s){switch(s){case"vk_ts":case"vk_is_recommended":case"vk_profile_id":case"vk_has_profile_button":case"vk_testing_group_id":case"vk_user_id":case"vk_app_id":case"vk_group_id":r[s]=Number(t);break;case"sign":case"vk_chat_id":case"vk_ref":case"vk_access_token_settings":r[s]=t;break;case"odr_enabled":r.odr_enabled="1"===t?1:void 0;break;case"vk_is_app_user":case"vk_are_notifications_enabled":case"vk_is_favorite":r[s]=function(e){switch(e){case"0":return 0;case"1":return 1;default:return}}(t);break;case"vk_language":r.vk_language=function(t){return Object.values(e.EGetLaunchParamsResponseLanguages).some((function(e){return e===t}))}(t)?t:void 0;break;case"vk_viewer_group_role":r.vk_viewer_group_role=function(t){return Object.values(e.EGetLaunchParamsResponseGroupRole).some((function(e){return e===t}))}(t)?t:void 0;break;case"vk_platform":r.vk_platform=function(t){return Object.values(e.EGetLaunchParamsResponsePlatforms).some((function(e){return e===t}))}(t)?t:void 0}}))}catch(e){console.warn(e)}return r},Object.defineProperty(e,"__esModule",{value:!0})}(t)}},t={};function r(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};return(()=>{"use strict";r.d(s,{default:()=>B});class e{constructor(e){this.adapter=e}init(){return Promise.resolve(!1)}showPreroll(){return this.showInterstitial()}showRewarded(){return Promise.resolve({success:!1,error:"rewarded not supported"})}showInterstitial(){return Promise.resolve({success:!1,error:"interstitial not supported"})}showBannerAd(){return Promise.resolve({success:!1,error:"banner not supported"})}hideBannerAd(){return Promise.resolve({success:!1,error:"banner not supported"})}}class t{constructor(e){this.adapter=e}set(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.adapter.server.setGameData(e),this.setToPlatform(e),this.adapter.server.save(t)}get(e){return Promise.all([this.getFromServer(),this.getFromPlatform(e)]).then((e=>e.find((e=>!!e))))}setToPlatform(e){return Promise.resolve(null)}getFromPlatform(e){return Promise.resolve(null)}getFromServer(){return this.adapter.server.load()}}function a(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class n{constructor(e){this.adapter=e,a(this,"score",0)}init(){return this.getEntry()}getScore(){return this.score}setScore(e){this.score=e,this.adapter.server.setScore(e)}setExtraData(e){this.adapter.server.setExtraData(e)}getEntries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return this.adapter.server.getLb(e,t).then((e=>(console.log("Leaderboard getEntries",e),e.player&&this.setScore(e.player.score),this.formatEntries(this.sortServerEntries(e)))))}getEntry(){return this.getEntries(0,0).then((e=>e[0]))}sortServerEntries(e){const t=e.top||[],r=e.nearby||[],s=e.player,a=[],n=e=>{e&&!a.find((t=>t.player_id===e.player_id))&&a.push(e)};return t.forEach(n),r.forEach(n),n(s),a}formatEntries(e){return Promise.all(e.map((e=>{const t=JSON.parse(e.extra_data||"{}");return{id:e.player_id,score:e.score,rank:e.rank,avatar:t.avatar||"",title:t.title||""}})))}}function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class o{constructor(e){this.adapter=e,i(this,"saves",void 0),i(this,"leaderboard",void 0),this.saves=this.createSaves(),this.leaderboard=this.createLeaderboard()}init(){return this.leaderboard.init()}isAuth(){return Promise.resolve(!1)}auth(){return Promise.resolve(!1)}getId(){return""}getLang(){return""}getName(){return""}getAvatar(){return""}loadData(e){return this.saves.get(e)}saveData(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.saves.set(e,t)}setScore(e){this.leaderboard.setScore(e)}getScore(){return this.leaderboard.getScore()}setLbExtraData(e){this.leaderboard.setExtraData(e)}getLbEntries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return this.leaderboard.getEntries(e,t)}getLbEntry(){return this.leaderboard.getEntry()}createSaves(){return new t(this.adapter)}createLeaderboard(){return new n(this.adapter)}}const u=1e3;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),/Android/i.test(navigator.userAgent);function c(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class l{constructor(e){this.adapter=e,c(this,"catalog",void 0),c(this,"purchaseUrl","")}init(){return this.loadCatalog()}isAvailable(){return!1}getCurrency(){return""}getCatalog(){return this.catalog}buy(e){return this.buyOnPlatform(e).then((e=>e?this.tryGetPurchases():Promise.reject(null))).then((t=>t.find((t=>t.productID===e))||null)).catch((()=>null))}getPurchases(){return this.adapter.server.request({url:this.purchaseUrl+"/get-transactions",data:{app_id:this.getAppId(),user_id:this.adapter.player.getId()}}).then((e=>e.error?Promise.reject(e.error):e.data.filter((e=>"closed"!==e.status)).map((e=>({purchaseToken:e.transaction_id,productID:e.data.product_code})))||[]))}consumePurchase(e){return this.adapter.server.request({url:this.purchaseUrl+"/close-transaction",data:{transaction_id:e,app_id:this.getAppId(),user_id:this.adapter.player.getId(),sign:this.getSign()},retries:3}).then((e=>!e.error||Promise.reject(e.error)))}getAppId(){return this.adapter.options.app_id}getSign(){return""}loadCatalog(){const e=this.adapter.options.catalog_url;return e?fetch(e+"?t="+Date.now()).then((e=>e.json())).then((e=>(this.catalog=e,e))).catch((e=>(console.error("loadCatalog",e),null))):(console.warn("catalog_url is not set"),this.catalog={},Promise.resolve(this.catalog))}buyOnPlatform(e){return Promise.reject(!1)}tryGetPurchases(){let e=5;return new Promise(((t,r)=>{const s=()=>{if(e<=0)return r("no purchases");e-=1,this.timeoutGetPurchases((1+.3*Math.pow(5-e,2))*u).then((e=>{e.length?t(e):s()})).catch((e=>{console.error(e),s()}))};s()}))}timeoutGetPurchases(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;return new Promise(((t,r)=>{setTimeout((()=>{this.getPurchases().then(t).catch(r)}),e)}))}}function d(e){try{return JSON.stringify(e)}catch(e){return console.error("stringifyJSON()",e),""}}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const h="https://bbb.dra.games/api",v=h+"/get-data",f=h+"/save-data",m=h+"/players/get-leaderboard",b="CommonServer error: game code or player id is not set";class g{constructor(e){this.adapter=e,p(this,"lastSnapshot",""),p(this,"lastSaveTime",0),p(this,"timer",null),p(this,"saveStep",u),p(this,"score",void 0),p(this,"extra_data",void 0),p(this,"game_data",void 0),p(this,"saveResolves",[])}init(){return Promise.resolve()}setExtraData(e){this.extra_data=d(e)}setScore(e){this.score=e}setGameData(e){this.game_data=d(e)}load(){return this.isReady()?this.request({url:v,data:{game_code:this.getGameCode(),player_id:this.getPlayerId()},retries:2}).then((e=>{const t=e?.data?.game_data||"";return t&&(this.game_data=t),Promise.resolve(t?function(e){try{return JSON.parse(e)}catch(e){return console.error("parseJSON()",e),null}}(t):null)})).catch((e=>null)):Promise.reject(b)}save(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.isReady())return Promise.reject(b);const t=this.createSaveResolve();return e?this.imidiateSave():this.timeoutSave(),t}createSaveResolve(){return new Promise((e=>{this.saveResolves.push(e)}))}imidiateSave(){this.timer&&clearTimeout(this.timer),this.timer=null,this.saveAllData()}timeoutSave(){const e=Date.now(),t=this.lastSaveTime,r=this.saveStep,s=e-t;s>=r?this.imidiateSave():this.timer||(this.timer=setTimeout((()=>{this.imidiateSave()}),r-s))}saveAllData(){const e=this.lastSnapshot,t=this.captureDataSnapshot();e!==t?(this.lastSnapshot=t,this.lastSaveTime=Date.now(),this.request({url:f,data:{game_code:this.getGameCode(),player_id:this.getPlayerId(),game_data:this.game_data,score:this.score,extra_data:this.extra_data},retries:2}).then((e=>{this.lastSnapshot=t,this.callSaveResolves({success:!0,data:e})})).catch((t=>{this.lastSnapshot=e,this.callSaveResolves({success:!1,error:t})}))):this.callSaveResolves({success:!0,data:null})}captureDataSnapshot(){return d({game_code:this.getGameCode(),player_id:this.getPlayerId(),game_data:this.game_data,score:this.score,extra_data:this.extra_data})}callSaveResolves(e){this.saveResolves.forEach((t=>{t(e)})),this.saveResolves=[]}getLb(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return this.isReady()?this.request({url:m,data:{game_code:this.getGameCode(),player_id:this.getPlayerId(),top_limit:e,nearby_limit:t},retries:1}).then((e=>Promise.resolve(e?.data||{}))).catch((e=>Promise.resolve(null))):Promise.reject(b)}request(e){let t=(e={url:"",contentType:"application/json",retries:0,data:null,method:"POST",...e}).retries||0;return new Promise(((r,s)=>{const a=()=>{this.requestAttempt(e).then((e=>{r(e)})).catch((e=>{t>0?(t--,a()):s(e)}))};a()}))}requestAttempt(e){return fetch(e.url,{method:e.method,headers:{"Content-Type":e.contentType||"application/json"},body:JSON.stringify(e.data)}).then((t=>(console.log("SERVER request success",{url:e.url,data:e.data,response:t}),t.json()))).catch((t=>(console.error("SERVER request error",{url:e.url,data:e.data,response:t}),Promise.reject(t))))}isReady(){return!(!this.getGameCode()||!this.getPlayerId())}getGameCode(){return this.adapter.options.game_code}getPlayerId(){return this.adapter.player.getId()}}class y{constructor(e){this.adapter=e,this.adapter=e}isAvailable(){return!1}act(e){return Promise.resolve()}getStatus(){return Promise.resolve()}}function w(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class A{constructor(e){this.options=e,w(this,"_isReady",!1),w(this,"initResolves",[]),w(this,"api",void 0),w(this,"advertising",void 0),w(this,"player",void 0),w(this,"purchase",void 0),w(this,"server",void 0),w(this,"modules",[]),w(this,"joinGroup",void 0),w(this,"inviteFriends",void 0),w(this,"makePost",void 0),w(this,"subscribeToEvents",void 0),w(this,"makeReview",void 0),w(this,"setShortcut",void 0),w(this,"addToFavorites",void 0),w(this,"makeStories",void 0),this.advertising=this.createAdvertising(),this.player=this.createPlayer(),this.purchase=this.createPurchase(),this.server=this.createServer(),this.modules.push(this.advertising,this.player,this.purchase,this.server),this.joinGroup=this.createJoinGroup(),this.inviteFriends=this.createInviteFriends(),this.makePost=this.createMakePost(),this.subscribeToEvents=this.createSubscribeToEvents(),this.makeReview=this.createMakeReview(),this.setShortcut=this.createSetShortcut(),this.addToFavorites=this.createAddToFavorites(),this.makeStories=this.createMakeStories(),this.initSelf()}get isReady(){return this._isReady}init(){return this.isReady?Promise.resolve():this.getInitPromise()}gameReady(){}loading(){}getApi(){return this.api}createServer(){return new g(this)}createAdvertising(){return new e(this)}createPlayer(){return new o(this)}createPurchase(){return new l(this)}createJoinGroup(){return new y(this)}createInviteFriends(){return new y(this)}createMakePost(){return new y(this)}createSubscribeToEvents(){return new y(this)}createMakeReview(){return new y(this)}createSetShortcut(){return new y(this)}createAddToFavorites(){return new y(this)}createMakeStories(){return new y(this)}initSelf(){let e=!1;const t=()=>{e||(e=!0,this.initApi().then((()=>this.initModules())).then((()=>{this._isReady=!0,this.callInitResolves()})).catch((e=>{console.error(e)})))};window.addEventListener("load",t),"complete"===document.readyState&&t()}initApi(){return Promise.resolve()}initModules(){return Promise.all(this.modules.map((e=>e.init())))}getInitPromise(){return new Promise((e=>{this.initResolves.push(e)}))}callInitResolves(){this.initResolves.forEach((e=>{e()})),this.initResolves=[]}}var S=r(817),_=r.n(S);class P extends e{constructor(e){super(e),this.adapter=e}init(){return Promise.resolve(!0)}showPreroll(){return console.log("VK showPreroll"),_().send("VKWebAppShowNativeAds",{ad_format:"interstitial"}).then((e=>({success:e.result}))).catch((e=>(console.error("VK interstitial error:",e),{success:!1,error:e})))}showInterstitial(){return _().send("VKWebAppShowNativeAds",{ad_format:"interstitial"}).then((e=>(console.log("VK showInterstitial",e),{success:e.result}))).catch((e=>(console.error("VK interstitial error:",e),{success:!1,error:e})))}showRewarded(){return console.log("VK showRewarded"),_().send("VKWebAppShowNativeAds",{ad_format:"reward"}).then((e=>({success:e.result}))).catch((e=>(console.error("VK rewarded error:",e),{success:!1,error:e})))}showBannerAd(){return console.log("VK showBannerAd"),_().send("VKWebAppShowBannerAd",{banner_location:"bottom"}).then((()=>({success:!0}))).catch((e=>(console.error("VK banner error:",e),{success:!1,error:"banner not supported"})))}hideBannerAd(){return Promise.resolve({success:!1,error:"banner not supported"})}}function V(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class E extends o{constructor(e){super(e),this.adapter=e,V(this,"gets",{}),V(this,"__loaded",!1),V(this,"__ready",!1),V(this,"group_id",227029419),V(this,"appId",53366996),V(this,"name","user"),V(this,"avatar","url"),V(this,"score",{}),V(this,"userId",""),V(this,"gameUrl","https://vk.com/app"+this.appId),V(this,"groupUrl","https://vk.com/public"+this.group_id),V(this,"waiters",[]),V(this,"lang","ru")}async init(){try{console.log("VkPlayer initialization started");const e=await this.initUserData();console.log("Data = ",e),await Promise.all([this.initMember()]),console.log("VkPlayer initialized successfully")}catch(e){console.error("VK initialization failed:",e)}finally{this.__ready=!0,this.callWaiters()}}callWaiters(){this.waiters.forEach((e=>e())),this.waiters=[]}async initServer(){return console.log("Server initialization"),Promise.resolve()}async initUserData(){try{console.log("Fetching user info...");const e=await _().send("VKWebAppGetUserInfo");return console.log("Raw user data:",e),this.userId=String(e.id),this.language=e.language||"ru",this.name=e.first_name,this.avatar=e.photo_max_orig,{...e}}catch(e){console.error("Failed to get VK user info:",e)}}async addToFavorites(){try{if(_().supports("VKWebAppAddToFavorites")){const e=await _().send("VKWebAppAddToFavorites");return!0===e?.result}return!1}catch(e){return console.error("Add to favorites failed:",e),!1}}getId(){return this.userId}getLang(){return this.lang}getName(){return this.name}getAvatar(){return this.avatar}getFromGets(e){return this.gets[e]||null}async isAuth(){return Promise.resolve(!0)}async auth(){return Promise.resolve(!0)}initGetData(){["vk_user_id","vk_language","vk_app_id","vk_is_favorite","is_member","vk_are_notifications_enabled"].forEach((e=>{this.gets[e]=this.getParamsFromGET(e)}))}getParamsFromGET(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(t.length){try{const e=new URLSearchParams(window.location.search);if(1===t.length)return e.get(t[0]);{const r={};return t.forEach((t=>{r[t]=e.get(t)})),r}}catch(e){console.error("URLSearchParams not supported")}return!1}}initMember(){return this.__isMember().then((e=>{this.gets.vk_is_member=e}))}__isMember(){return _().send("VKWebAppGetGroupInfo",{group_id:this.group_id}).then((e=>Promise.resolve(!!Number(e?.is_member||0)))).catch((e=>Promise.resolve(!1)))}async saveData(e){try{if(!this.userId)throw new Error("User not initialized");const t=Object.entries(e).map((async e=>{let[t,r]=e;t||(t="default");const s=`player_${this.userId}_${t}`,a="string"==typeof r?r:JSON.stringify(r);console.log("Saving item:",{key:s,value:a});try{const e=await _().send("VKWebAppStorageSet",{key:s,value:a});return!0===e?.result}catch(e){return console.error(`Failed to save key "${t}":`,e),!1}}));return(await Promise.all(t)).every(Boolean)}catch(e){return console.error("VK saveData error:",e),!1}}async loadData(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["default"];try{if(!this.userId)throw new Error("User not initialized");e&&0!==e.length||(e=["default"]);const t=e.map((e=>`player_${this.userId}_${e||"default"}`));console.log("Loading keys:",t);const r=await _().send("VKWebAppStorageGet",{keys:t});if(!r?.keys)return null;const s={};return r.keys.forEach((e=>{const t=e.key.replace(`player_${this.userId}_`,"");try{s[t]=JSON.parse(e.value)}catch{s[t]=e.value}})),s}catch(e){return console.error("VK loadData error:",e),null}}}function K(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class k extends l{constructor(e){super(e),this.adapter=e,K(this,"appId","53366996"),K(this,"currency",[]),K(this,"lang",""),K(this,"catalog",{})}getCurrency(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=this.currency[this.lang]||this.currency.ru;return t?"string"==typeof t?t:t[e]||t["*"+e%10]||t["*"]||t[Object.keys(t)[0]]:"VK"}}class W extends y{constructor(e){super(e)}isAvailable(){return!0}async act(){try{console.log("group_id = ",this.adapter.options.group_id);const e=await _().send("VKWebAppJoinGroup",{group_id:this.adapter.options.group_id});return console.log("VkJoinGroup result = ",e),!0===e?.result}catch(e){return console.error("Join group failed:",e),!1}}async getStatus(){return!0}}class R extends y{constructor(e){super(e)}isAvailable(){return!0}async act(){try{const e=await _().send("VKWebAppAddToFavorites");return console.log("VkAddToFavorites = ",e),!0===e?.result}catch(e){return console.error("Add to favorites failed:",e),!1}}getStatus(){return Promise.resolve(!0)}}class I extends y{constructor(e){super(e)}isAvailable(){return!0}async act(){try{const e=await _().send("VKWebAppShowInviteBox");return console.log("VkInviteFriends result:",e),!0===e?.result}catch(e){return console.error("Invite friends failed:",e),!1}}async getStatus(){return!0}}class T extends y{constructor(e){super(e)}isAvailable(){return!0}async act(e){try{const t=await _().send("VKWebAppShowWallPostBox",{message:e.message,attachments:e.url});return console.log("VkMakePost result:",t),void 0!==t?.post_id}catch(e){return console.error("Make post failed:",e),!1}}async getStatus(){return!0}}class O extends y{constructor(e){super(e)}isAvailable(){return!0}async act(){try{const e=await _().send("VKWebAppAllowNotifications");return console.log("VkSubscribeToEvents result:",e),!0===e?.result}catch(e){return console.error("Subscribe to events failed:",e),!1}}async getStatus(){try{const e=await _().send("VKWebAppAllowNotifications");return console.log("VkSubscribeToEvents status:",e),!0===e?.result}catch(e){return console.error("Check subscription status failed:",e),!1}}}class G extends y{constructor(e){super(e)}isAvailable(){return!0}async act(){try{const e=await _().send("VKWebAppShowRatingDialog");return console.log("VkMakeReview result:",e),!0===e?.result}catch(e){return console.error("Make review failed:",e),!1}}async getStatus(){try{const e=await this.adapter.getApi().call("apps.getRating",{app_id:this.adapter.options.app_id,user_id:this.adapter.player.getId()});return console.log("VkMakeReview status response:",e),e?.rating>0}catch(e){return console.error("Check review status failed:",e),!1}}}class x extends y{constructor(e){super(e)}isAvailable(){return!0}async act(){try{const e=await _().send("VKWebAppAddToHomeScreen");return console.log("VkSetShortcut result:",e),!0===e?.result}catch(e){return console.error("Set shortcut failed:",e),!1}}async getStatus(){try{const e=await _().send("VKWebAppAddToHomeScreenInfo");return console.log("VkSetShortcut status:",e),!0===e?.is_added_to_home_screen}catch(e){return console.error("Check shortcut status failed:",e),!1}}}class L extends y{constructor(e){super(e)}isAvailable(){return!0}async act(e){try{const t=await _().send("VKWebAppShowStoryBox",{background_type:"image",attachment:{type:"url",url:e.href,text:e.text}});return console.log("VkMakeStory result:",t),!0===t?.result}catch(e){return console.error("Make story failed:",e),!1}}async getStatus(){return!0}}function j(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class B extends A{constructor(e){super(e),j(this,"gets",new M(this)),console.log("VkAdapter initialized")}async init(){try{console.log("Starting VK adapter initialization...");if(!(await _().send("VKWebAppInit")).result)throw new Error("VKWebAppInit returned false");console.log("VKWebAppInit completed successfully"),this.gets.init(),await Promise.all([this.advertising.init(),this.player.init(),this.purchase.init()]),console.log("VK adapter successfully initialized")}catch(e){throw console.error("VK adapter initialization failed:",e),e}}createAdvertising(){return new P(this)}createPlayer(){return new E(this)}createPurchase(){return new k(this)}createJoinGroup(){return new W(this)}createAddToFavorites(){return new R(this)}createInviteFriends(){return new I(this)}createMakePost(){return new T(this)}createSubscribeToEvents(){return new O(this)}createMakeReview(){return new G(this)}createSetShortcut(){return new x(this)}createMakeStory(){return new L(this)}}class M{constructor(e){this.adapter=e,j(this,"data",{}),this.adapter=e}init(){if("undefined"!=typeof window){const e=window.location.search,t=new URLSearchParams(e);this.data={},t.forEach(((e,t)=>{this.data[t]=e}))}console.log("GET parameters initialized:",this.data)}get(e){return this.data[e]}}})(),s=s.default})()));
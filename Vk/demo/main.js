(()=>{"use strict";var e={290:(e,t,r)=>{var s=r(680),a=r(958);class n{init(){return Promise.resolve(!1)}showPreroll(){return this.showInterstitial()}showRewarded(){return Promise.resolve({success:!1,error:"rewarded not supported"})}showInterstitial(){return Promise.resolve({success:!1,error:"interstitial not supported"})}showBannerAd(){return Promise.resolve({success:!1,error:"banner not supported"})}hideBannerAd(){return Promise.resolve({success:!1,error:"banner not supported"})}}class i{init(){return Promise.resolve(!1)}isAuth(){return Promise.resolve(!1)}auth(){return Promise.resolve(!1)}getId(){return""}getLang(){return""}getName(){return""}getAvatar(){return""}loadData(e){return Promise.resolve(null)}saveData(e){return Promise.resolve(null)}}class o{constructor(){}init(){return Promise.resolve()}isAvailable(){return Promise.resolve(!1)}getCatalog(){return Promise.resolve()}buy(e){return Promise.resolve()}getPurchases(){return Promise.resolve()}consumePurchase(e){return Promise.resolve()}}class l{constructor(){}init(){return Promise.resolve()}}function c(e,t,r){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:s+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class u{constructor(e){this.options=e,c(this,"_isReady",!1),c(this,"initResolves",[]),c(this,"api",void 0),c(this,"advertising",void 0),c(this,"player",void 0),c(this,"social",void 0),c(this,"purchase",void 0),c(this,"modules",[]),this.advertising=this.createAdvertising(),this.player=this.createPlayer(),this.social=this.createSocial(),this.purchase=this.createPurchase(),this.modules.push(this.advertising,this.player,this.social,this.purchase),this.initSelf()}get isReady(){return this._isReady}init(){return this.isReady?Promise.resolve():this.getInitPromise()}gameReady(){}loading(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}getApi(){return this.api}createAdvertising(){return new n}createPlayer(){return new i}createSocial(){return new l}createPurchase(){return new o}initSelf(){let e=!1,t=()=>{e||(e=!0,this.initApi().then(()=>this.initModules()).then(()=>{this._isReady=!0,this.callInitResolves()}).catch(e=>{console.error(e)}))};window.addEventListener("load",t),"complete"===document.readyState&&t()}initApi(){return Promise.resolve()}initModules(){return Promise.all(this.modules.map(e=>e.init()))}getInitPromise(){return new Promise(e=>{this.initResolves.push(e)})}callInitResolves(){this.initResolves.forEach(e=>{e()}),this.initResolves=[]}}var d=r(817),m=r.n(d);class h extends n{constructor(e){super(),this.adapter=e,function(e,t,r){var s;(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:s+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"isAndroid",!1)}showInterstitial(){return m().send("VKWebAppShowNativeAds",{ad_format:"interstitial"}).then(e=>({success:e.result})).catch(e=>(console.error("VK interstitial error:",e),{success:!1,error:e}))}showRewarded(){return m().send("VKWebAppShowNativeAds",{ad_format:"reward"}).then(e=>({success:e.result})).catch(e=>(console.error("VK rewarded error:",e),{success:!1,error:e}))}showBannerAd(){return m().send("VKWebAppShowBannerAd",{banner_location:"bottom"}).then(()=>({success:!0})).catch(e=>(console.error("VK banner error:",e),{success:!1,error:"banner not supported"}))}createShortcut(){return m().send("VKWebAppAddToHomeScreen").then(e=>!!e.result).catch(e=>(console.error(e),!1))}canCreateShortcut(){return m().send("VKWebAppAddToHomeScreenInfo").then(e=>e.is_feature_supported&&!e.is_added_to_home_screen).catch(e=>(console.error(e),!1))}}function p(e,t,r){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:s+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class v extends i{constructor(e){super(),this.adapter=e,p(this,"gets",{}),p(this,"__loaded",!1),p(this,"group_id","group_id"),p(this,"score",{}),p(this,"userId",null),p(this,"language","ru"),this.initUserData()}async initUserData(){try{let e=await m().send("VKWebAppGetUserInfo");this.userId=e.id,this.language=e.language||"ru"}catch(e){console.error("Failed to get VK user info:",e)}}getId(){return String(this.getFromGets("vk_user_id")||"")}getLang(){return String(this.getFromGets("vk_language")||"")}getName(){return""}getAvatar(){return""}getFromGets(e){return this.gets[e]||null}isAuth(){return Promise.resolve(this.__loaded)}auth(){return Promise.resolve(!1)}initGetData(){["vk_user_id","vk_language","vk_app_id","vk_is_favorite","is_member","vk_are_notifications_enabled"].forEach(e=>{this.gets[e]=this.getParamsFromGET(e)})}getParamsFromGET(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(t.length){try{let e=new URLSearchParams(window.location.search);if(1===t.length)return e.get(t[0]);{let r={};return t.forEach(t=>{r[t]=e.get(t)}),r}}catch(e){console.error("URLSearchParams not supported")}return!1}}initMember(){return this.__isMember().then(e=>{this.gets.vk_is_member=e})}__isMember(){return m().send("VKWebAppGetGroupInfo",{group_id:this.group_id}).then(e=>Promise.resolve(!!Number(e?.is_member||0))).catch(e=>Promise.resolve(!1))}initScore(){return this.getScore(!0).then(e=>{this.score=e||0})}getScore(e){}getUsersDataVk(e){return m().send("VKWebAppGetUserInfo",{user_ids:e.join(",")}).catch(e=>(console.log(e),[]))}getLbData(){return super.getLbData().then(e=>this.getUsersDataVk(e.map(e=>e.id)).then(t=>{console.log("VK users data",t,e.map(e=>e.id));let r=t=>{let r=e.find(e=>Number(e.id)==t.id);if(!r)return;let s=t.first_name||"",a=t.last_name||"";r.avatar=t.photo_100||"",r.title=s+(a?" "+a:"")||""};return t?.result?t.result.forEach(r):t&&r(t),e}))}}function g(e,t,r){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:s+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class b extends o{constructor(e){super(),this.adapter=e,g(this,"appId","512002432556"),g(this,"currency",[]),g(this,"lang",""),g(this,"catalog",{})}buy(e){return m().send("VKWebAppShowOrderBox",{type:"item",item:e}).then(e=>e.success?this.tryGetPurchases():Promise.reject()).then(t=>{let r=t.find(t=>t.productID===e);return!!r&&r}).catch(()=>!1)}tryGetPurchases(){let e=5;return new Promise((t,r)=>{let s=()=>{if(e<=0)return r(null);setTimeout(()=>{this.getPurchases().then(e=>{e.length?t(e):s()}).catch(e=>{console.error(e),s()})},(1+.3*Math.pow(5-(e-=1),2))*1e3)};s()})}getPurchases(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.server.request("https://bbb.dra.games/api/purchase/vk/get-transactions",{app_id:String(this.appId),user_id:this.getId()}).then(e=>(console.log("getPurchase",e),e.error)?Promise.reject(e.error):e.data.filter(e=>"closed"!==e.status).map(e=>({purchaseToken:e.transaction_id,productID:e.data.item_id}))||[]).catch(t=>(console.error("getPurchase",t),e<=1)?[]:this.getPurchases(e-1))}consumePurchase(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return m().send("VKWebAppGetLaunchParams").then(t=>this.server.request("https://bbb.dra.games/api/purchase/vk/close-transaction",{transaction_id:e,app_id:String(this.appId),user_id:this.getId(),sign:t})).then(e=>(console.log("consumePurchase",e),!e.error||Promise.reject(e.error))).catch(r=>(console.error("consumePurchase",r),!(t<=1)&&this.consumePurchase(e,t-1)))}getCatalog(){return fetch("https://dravk.ru/slova_vk/shop/items.json?t="+Date.now()).then(e=>e.json()).then(e=>(this.catalog=Object.keys(e).map(t=>{let r=e[t].price;return{id:t,price:r+" "+this.getCurrency(r),priceValue:r}}),!0)).catch(e=>(console.error("loadCatalog",e),!1))}getCurrency(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this.currency[this.lang]||this.currency.ru;return t?"string"==typeof t?t:t[e]||t["*"+e%10]||t["*"]||t[Object.keys(t)[0]]:"VK"}}class f extends l{constructor(e){super(),this.adapter=e,function(e,t,r){var s;(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:s+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"gets",{})}sendProgress(e){this.sendAppEvent(1,e)}sendAppEvent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return fetch("https://dravk.ru/slova_vk/secure_addAppEvent.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:this.getFromGets("vk_user_id"),v:"5.199",activity_id:e,value:t})}).then(e=>e.json()).then(e=>!e.error&&(console.log("secure_addAppEvent",e),!0)).catch(e=>(console.error("secure_addAppEvent",e),!1))}getFromGets(e){return this.gets[e]||null}showLb(){return m().send("VKWebAppShowLeaderBoardBox").then(e=>Promise.resolve(!!e?.success)).catch(e=>(console.warn(e),Promise.resolve(!1)))}sendPost(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e=e.replace("{url}",this.adapter.options.game_url),m().send("VKWebAppShowWallPostBox",{message:e+`
`+this.gameUrl,attachments:this.gameUrl,owner_id:Number(this.getId())}).then(e=>Promise.resolve(!0)).catch(e=>(console.warn(e),Promise.resolve(!1)))}canInvite(){return Promise.resolve(!0)}invite(){return m().send("VKWebAppShowInviteBox",{}).then(e=>Promise.resolve(!!e?.success)).catch(e=>(console.warn(e),Promise.resolve(!1)))}openGroup(){gipi.openLink(this.groupUrl)}isMember(){return isIOS&&this.game?Promise.resolve(!!Number(this.game.storage.getItem("group")||0)):Promise.resolve(this.getFromGets("vk_is_member")||!!Number(this.getFromGets("is_member")||0))}canMember(){return this.isMember().then(e=>!e)}__isMember(){return m().send("VKWebAppGetGroupInfo",{group_id:this.group_id}).then(e=>Promise.resolve(!!Number(e?.is_member||0))).catch(e=>Promise.resolve(!1))}member(){return m().send("VKWebAppJoinGroup",{group_id:this.group_id}).then(e=>(e.result&&(this.gets.vk_is_member=!0),Promise.resolve(!!e?.result))).catch(e=>(console.warn(e),Promise.resolve(!1)))}favorite(){return m().send("VKWebAppAddToFavorites").then(e=>!!e.result).catch(e=>(console.error(e),!1)).then(e=>(e&&(this.gets.vk_is_favorite=!0),e))}isFavorite(){return Promise.resolve(!!Number(this.getFromGets("vk_is_favorite")))}canAddToFavorite(){return this.isFavorite().then(e=>!e)}matchBonuses(){return Promise.all([this.isMember(),this.isFavorite()]).then(e=>e.filter(e=>e).length-.5)}isSignedForEvents(){return Promise.resolve(!!Number(this.getFromGets("vk_are_notifications_enabled")))}signedForEvents(){return m().send("VKWebAppAllowNotifications").then(e=>!!e.result&&(this.gets.vk_are_notifications_enabled=1,!0)).catch(e=>(console.log(e),!1))}canSignedForEvents(){return this.isSignedForEvents().then(e=>!e)}}function y(e,t,r){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:s+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class P extends u{constructor(e){super(e),y(this,"gets",new w(this)),console.log("VkAdapter"),m().send("VKWebAppInit",{}),this.gets.init()}createAdvertising(){return new h(this)}createPlayer(){return new v(this)}createPurchase(){return new b(this)}createSocial(){return new f(this)}}class w{constructor(e){this.adapter=e,y(this,"data",{}),this.adapter=e}init(){}get(e){return this.data[e]}}let _=null,E=e=>{let{moduleName:t,icon:r,methods:a,isReady:n,onMethodCall:i}=e,[o,l]=(0,s.useState)({}),[c,u]=(0,s.useState)(!0),[d,m]=(0,s.useState)({}),h=e=>{l(t=>({...t,[e]:!t[e]}))},p=(e,t)=>{m(r=>({...r,[e]:t}))},v=e=>{i&&i(e,d[e])};return s.createElement("section",{className:"documentation-module"},s.createElement("h2",{className:"module-header",onClick:()=>u(!c)},s.createElement("span",{className:"module-icon"},r),t,s.createElement("span",{className:"toggle-icon"},c?"▼":"►")),c&&s.createElement("div",{className:"methods-list"},a.map(e=>s.createElement("div",{key:e.id,className:`method-block ${!n?"disabled":""}`},s.createElement("div",{className:"method-header",onClick:()=>h(e.id)},s.createElement("h3",null,e.name),e.isAsync&&s.createElement("span",{className:"async-badge"},"PROMISE"),s.createElement("span",{className:"toggle-icon"},o[e.id]?"↑":"↓")),o[e.id]&&s.createElement("div",{className:"method-details"},s.createElement("p",{className:"description"},e.description),e.parameters&&s.createElement("div",{className:"parameters-section"},s.createElement("h4",null,"Параметры:"),s.createElement("textarea",{value:d[e.id]||"",onChange:t=>p(e.id,t.target.value),placeholder:e.parameters,disabled:!n})),e.returns&&s.createElement("div",{className:"returns-section"},s.createElement("h4",null,"Возвращает:"),s.createElement("textarea",{readOnly:!0,value:e.returns,disabled:!n})),s.createElement("button",{className:"send-button",onClick:()=>v(e.id),disabled:!n},"Send"))))))},A=[{id:"groupSubscription",title:"Подписка на группу"},{id:"notifications",title:"Подписка на уведомления"},{id:"rateGame",title:"Поставить оценку"},{id:"createPost",title:"Разместить пост"},{id:"createStory",title:"Разместить сторис"},{id:"inviteFriend",title:"Пригласить друга"},{id:"addToFavorites",title:"Добавить в избранное"},{id:"addToHomeScreen",title:"Добавить на главный экран"}],S=e=>{let{isReady:t,onMethodCall:r}=e,[a,n]=(0,s.useState)({}),i=e=>{n(t=>({...t,[e]:!t[e]}))};return s.createElement("section",{className:"social-module"},s.createElement("h2",{className:"module-header"},s.createElement("span",{className:"module-icon"},"\uD83D\uDC65"),"Социальные функции"),s.createElement("div",{className:"features-grid"},A.map(e=>{let{id:n,title:o}=e;return s.createElement("div",{key:n,className:"feature-card"},s.createElement("div",{className:"feature-header",onClick:()=>i(n)},s.createElement("h3",null,o),s.createElement("span",{className:"toggle-icon"},a[n]?"▼":"►")),a[n]&&s.createElement("div",{className:"feature-methods"},s.createElement("div",{className:"method-block"},s.createElement("h4",null,"isAvailable()"),s.createElement("p",null,"Проверяет доступность функции"),s.createElement("button",{className:"method-button",onClick:()=>r?.(n,"isAvailable"),disabled:!t},"Вызвать")),s.createElement("div",{className:"method-block"},s.createElement("h4",null,"act()"),s.createElement("p",null,"Выполняет действие"),s.createElement("button",{className:"method-button",onClick:()=>r?.(n,"act"),disabled:!t},"Вызвать")),s.createElement("div",{className:"method-block"},s.createElement("h4",null,"getStatus()"),s.createElement("p",null,"Возвращает текущий статус"),s.createElement("button",{className:"method-button",onClick:()=>r?.(n,"getStatus"),disabled:!t},"Вызвать"))))})))},N=document.getElementById("root");N?(0,a.createRoot)(N).render(s.createElement(s.StrictMode,null,s.createElement(function(){let{initAdapter:e,saveData:t,loadData:r,showAd:a,isReady:n,getCatalog:i,setTextData:o,checkSocialFeature:l,executeSocialAction:c,getSocialStatus:u}=function(){let[e,t]=(0,s.useState)(""),[r,a]=(0,s.useState)(null),[n,i]=(0,s.useState)(!1),o=(0,s.useRef)(0);return{initAdapter:async()=>{var e;let t=(e={gameId:"demo"},_||(_=new P(e)),_);try{await t.init(),a(t),i(!0),console.log("Адаптер успешно инициализирован")}catch(e){console.error("Ошибка инициализации адаптера:",e)}},showAd:async e=>{if(!n||!r)return void console.warn(`[warning] Адаптер не готов: Показ ${e} рекламы`);try{if("reward"===e){let e=await r.advertising.showRewarded();o.current=Date.now(),console.log("watched = ",e),console.log(e?"[success] Награда получена!":"[warning] Реклама закрыта до завершения")}else{let t=await r.advertising.showInterstitial();console.log("showFullscreenAds = ",t),o.current=Date.now(),console.log(`[success] Реклама ${e} показана`)}}catch(t){console.error(`[error] Ошибка ${e}:`,t)}},saveData:async()=>{if(!n||!r)return void console.warn("save (mock)");try{let t=await r.player.saveData(e);console.log("save result = ",t),console.log("[success] Данные сохранены")}catch(e){console.error("[error] Ошибка сохранения:",e)}},loadData:async()=>{if(!n||!r)return console.warn("load (mock)"),null;try{let e=await r.player.loadData();return console.log("[success] Данные загружены",e),t(e||""),e}catch(e){return console.error("[error] Ошибка загрузки:",e),null}},isReady:n,adapter:r,textData:e,setTextData:t,getCatalog:()=>{if(!n||!r)return void console.warn(`[warning] Адаптер не готов`);try{let e=r.purchase.getCatalog();console.log("catalog = ",e)}catch(e){console.log("Ошибка при получении каталога")}},checkSocialFeature:e=>Promise,executeSocialAction:e=>Promise,getSocialStatus:e=>Promise}}();(0,s.useEffect)(()=>{e()},[]);let d=async(e,t)=>{if(n)try{switch(t){case"isAvailable":{let t=await l(e);console.log(`${e} available:`,t);break}case"act":{let t=await c(e);console.log(`${e} action result:`,t);break}case"getStatus":{let t=await u(e);console.log(`${e} status:`,t);break}default:console.warn(`Unknown method ${t} for feature ${e}`)}}catch(r){console.error(`Error handling ${t} for feature ${e}:`,r)}};return s.createElement("div",{className:"scroll-container"},s.createElement("div",{className:"app-container"},s.createElement("header",{className:"app-header"},s.createElement("h1",null,"Документация API"),s.createElement("div",{className:`status-indicator ${n?"ready":"loading"}`},n?"OK API Ready":"OK API Loading...")),s.createElement("main",{className:"dashboard"},s.createElement(E,{moduleName:"ADV",icon:"\uD83D\uDCE2",methods:[{id:"show-interstitial",name:"showInterstitial",isAsync:!0,description:"Показывает interstitial рекламу (полноэкранное объявление)",returns:"Promise<boolean> - true если реклама была показана полностью"},{id:"show-reward",name:"showReward",isAsync:!0,description:"Показывает rewarded рекламу (реклама за вознаграждение)",returns:"Promise<boolean> - true если пользователь досмотрел рекламу и получил награду"}],isReady:n,onMethodCall:e=>{"show-interstitial"===e&&a("interstitial"),"show-reward"===e&&a("reward")}}),s.createElement(E,{moduleName:"Player",icon:"\uD83C\uDFAE",methods:[{id:"save-data",name:"saveData",isAsync:!0,description:"Сохраняет данные игрока на сервер",parameters:"string: данные для сохранения (макс. 8000 символов)",returns:"Promise<void>"},{id:"load-data",name:"loadData",isAsync:!0,description:"Загружает сохраненные данные игрока",returns:"Promise<string> - сохраненные данные"},{id:"get-id",name:"getId",isAsync:!1,description:"Возвращает идентификатор текущего пользователя",returns:"string - ID пользователя"}],isReady:n,onMethodCall:(e,s)=>{"save-data"===e&&(o(s||""),t()),"load-data"===e&&r()}}),s.createElement(E,{moduleName:"Purchase",icon:"\uD83D\uDCB3",methods:[{id:"get-catalog",name:"getCatalog",isAsync:!0,description:"Получает каталог доступных покупок",returns:"Promise<CatalogItem[]> - массив товаров"},{id:"purchase",name:"purchase",isAsync:!0,description:"Совершает покупку товара",parameters:"string: идентификатор товара",returns:"Promise<PurchaseResult>"}],isReady:n,onMethodCall:(e,t)=>{"get-catalog"===e&&i()}}),s.createElement(S,{isReady:n,onMethodCall:d}))))},null))):console.error("Root element not found!")}},t={};function r(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,r),n.exports}r.m=e,(()=>{var e=[];r.O=(t,s,a,n)=>{if(s){n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[s,a,n];return}for(var o=1/0,i=0;i<e.length;i++){for(var[s,a,n]=e[i],l=!0,c=0;c<s.length;c++)(!1&n||o>=n)&&Object.keys(r.O).every(e=>r.O[e](s[c]))?s.splice(c--,1):(l=!1,n<o&&(o=n));if(l){e.splice(i--,1);var u=a();void 0!==u&&(t=u)}}return t}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,s)=>{var a,n,[i,o,l]=s,c=0;if(i.some(t=>0!==e[t])){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(l)var u=l(r)}for(t&&t(s);c<i.length;c++)n=i[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},s=self.webpackChunk=self.webpackChunk||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var s=r.O(void 0,[14],()=>r(290));s=r.O(s)})();
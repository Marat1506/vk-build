(()=>{"use strict";var e={518:(e,t,r)=>{var a=r(680),s=r(958);class i{constructor(e){this.adapter=e}init(){return Promise.resolve(!1)}showPreroll(){return this.showInterstitial()}showRewarded(){return Promise.resolve({success:!1,error:"rewarded not supported"})}showInterstitial(){return Promise.resolve({success:!1,error:"interstitial not supported"})}showBannerAd(){return Promise.resolve({success:!1,error:"banner not supported"})}hideBannerAd(){return Promise.resolve({success:!1,error:"banner not supported"})}}class n{constructor(e){this.adapter=e}set(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.adapter.server.setGameData(e),this.setToPlatform(e),this.adapter.server.save(t)}get(e){return Promise.all([this.getFromServer(),this.getFromPlatform(e)]).then(e=>e.find(e=>!!e))}setToPlatform(e){return Promise.resolve(null)}getFromPlatform(e){return Promise.resolve(null)}getFromServer(){return this.adapter.server.load()}}class o{constructor(e){this.adapter=e,function(e,t,r){var a;(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:0,enumerable:!0,configurable:!0,writable:!0}):e[t]=0}(this,"score",0)}init(){return this.getEntry()}getScore(){return this.score}setScore(e){this.score=e,this.adapter.server.setScore(e)}setExtraData(e){this.adapter.server.setExtraData(e)}getEntries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return this.adapter.server.getLb(e,t).then(e=>(console.log("Leaderboard getEntries",e),e.player&&this.setScore(e.player.score),this.formatEntries(this.sortServerEntries(e))))}getEntry(){return this.getEntries(0,0).then(e=>e[0])}sortServerEntries(e){let t=e.top||[],r=e.nearby||[],a=e.player,s=[],i=e=>{!e||s.find(t=>t.player_id===e.player_id)||s.push(e)};return t.forEach(i),r.forEach(i),i(a),s}formatEntries(e){return Promise.all(e.map(e=>{let t=JSON.parse(e.extra_data||"{}");return{id:e.player_id,score:e.score,rank:e.rank,avatar:t.avatar||"",title:t.title||""}}))}}function l(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class c{constructor(e){this.adapter=e,l(this,"saves",void 0),l(this,"leaderboard",void 0),this.saves=this.createSaves(),this.leaderboard=this.createLeaderboard()}init(){return this.leaderboard.init()}isAuth(){return Promise.resolve(!1)}auth(){return Promise.resolve(!1)}getId(){return""}getLang(){return""}getName(){return""}getAvatar(){return""}loadData(e){return this.saves.get(e)}saveData(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.saves.set(e,t)}setScore(e){this.leaderboard.setScore(e)}getScore(){return this.leaderboard.getScore()}setLbExtraData(e){this.leaderboard.setExtraData(e)}getLbEntries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return this.leaderboard.getEntries(e,t)}getLbEntry(){return this.leaderboard.getEntry()}createSaves(){return new n(this.adapter)}createLeaderboard(){return new o(this.adapter)}}function u(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),/Android/i.test(navigator.userAgent);class d{constructor(e){this.adapter=e,u(this,"catalog",void 0),u(this,"purchaseUrl","")}init(){return this.loadCatalog()}isAvailable(){return!1}getCurrency(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],""}getCatalog(){return this.catalog}buy(e){return this.buyOnPlatform(e).then(e=>e?this.tryGetPurchases():Promise.reject(null)).then(t=>t.find(t=>t.productID===e)||null).catch(()=>null)}getPurchases(){return this.adapter.server.request({url:this.purchaseUrl+"/get-transactions",data:{app_id:this.getAppId(),user_id:this.adapter.player.getId()}}).then(e=>e.error?Promise.reject(e.error):e.data.filter(e=>"closed"!==e.status).map(e=>({purchaseToken:e.transaction_id,productID:e.data.product_code}))||[])}consumePurchase(e){return this.adapter.server.request({url:this.purchaseUrl+"/close-transaction",data:{transaction_id:e,app_id:this.getAppId(),user_id:this.adapter.player.getId(),sign:this.getSign()},retries:3}).then(e=>!e.error||Promise.reject(e.error))}getAppId(){return this.adapter.options.app_id}getSign(){return""}loadCatalog(){return fetch(this.adapter.options.catalog_url+"?t="+Date.now()).then(e=>e.json()).then(e=>(this.catalog=e,e)).catch(e=>(console.error("loadCatalog",e),null))}buyOnPlatform(e){return Promise.reject(!1)}tryGetPurchases(){let e=5;return new Promise((t,r)=>{let a=()=>{if(e<=0)return r("no purchases");e-=1,this.timeoutGetPurchases((1+.3*Math.pow(5-e,2))*1e3).then(e=>{e.length?t(e):a()}).catch(e=>{console.error(e),a()})};a()})}timeoutGetPurchases(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((t,r)=>{setTimeout(()=>{this.getPurchases().then(t).catch(r)},e)})}}function h(e){try{return JSON.stringify(e)}catch(e){return console.error("stringifyJSON()",e),""}}function m(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let v="https://bbb.dra.games/api",g=v+"/get-data",p=v+"/save-data",y=v+"/players/get-leaderboard",b="CommonServer error: game code or player id is not set";class f{constructor(e){this.adapter=e,m(this,"lastSnapshot",""),m(this,"lastSaveTime",0),m(this,"timer",null),m(this,"saveStep",1e3),m(this,"score",void 0),m(this,"extra_data",void 0),m(this,"game_data",void 0),m(this,"saveResolves",[])}init(){return Promise.resolve()}setExtraData(e){this.extra_data=h(e)}setScore(e){this.score=e}setGameData(e){this.game_data=h(e)}load(){return this.isReady()?this.request({url:g,data:{game_code:this.getGameCode(),player_id:this.getPlayerId()},retries:2}).then(e=>{let t=e?.data?.game_data||"";return t&&(this.game_data=t),Promise.resolve(t?function(e){try{return JSON.parse(e)}catch(e){return console.error("parseJSON()",e),null}}(t):null)}).catch(e=>null):Promise.resolve(null)}save(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.isReady())return Promise.reject(b);let t=this.createSaveResolve();return e?this.imidiateSave():this.timeoutSave(),t}createSaveResolve(){return new Promise(e=>{this.saveResolves.push(e)})}imidiateSave(){this.timer&&clearTimeout(this.timer),this.timer=null,this.saveAllData()}timeoutSave(){let e=Date.now(),t=this.lastSaveTime,r=this.saveStep,a=e-t;a>=r?this.imidiateSave():this.timer||(this.timer=setTimeout(()=>{this.imidiateSave()},r-a))}saveAllData(){let e=this.lastSnapshot,t=this.captureDataSnapshot();if(e===t)return void this.callSaveResolves({success:!0,data:null});this.lastSnapshot=t,this.lastSaveTime=Date.now(),this.request({url:p,data:{game_code:this.getGameCode(),player_id:this.getPlayerId(),game_data:this.game_data,score:this.score,extra_data:this.extra_data},retries:2}).then(e=>{this.lastSnapshot=t,this.callSaveResolves({success:!0,data:e})}).catch(t=>{this.lastSnapshot=e,this.callSaveResolves({success:!1,error:t})})}captureDataSnapshot(){return h({game_code:this.getGameCode(),player_id:this.getPlayerId(),game_data:this.game_data,score:this.score,extra_data:this.extra_data})}callSaveResolves(e){this.saveResolves.forEach(t=>{t(e)}),this.saveResolves=[]}getLb(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return this.isReady()?this.request({url:y,data:{game_code:this.getGameCode(),player_id:this.getPlayerId(),top_limit:e,nearby_limit:t},retries:1}).then(e=>Promise.resolve(e?.data||{})).catch(e=>Promise.resolve(null)):Promise.reject(b)}request(e){let t=(e={url:"",contentType:"application/json",retries:0,data:null,method:"POST",...e}).retries||0;return new Promise((r,a)=>{let s=()=>{this.requestAttempt(e).then(e=>{r(e)}).catch(e=>{t>0?(t--,s()):a(e)})};s()})}requestAttempt(e){return fetch(e.url,{method:e.method,headers:{"Content-Type":e.contentType||"application/json"},body:JSON.stringify(e.data)}).then(t=>(console.log("SERVER request success",{url:e.url,data:e.data,response:t}),t.json())).catch(t=>(console.error("SERVER request error",{url:e.url,data:e.data,response:t}),Promise.reject(t)))}isReady(){return!!(this.getGameCode()&&this.getPlayerId())}getGameCode(){return this.adapter.options.game_code}getPlayerId(){return this.adapter.player.getId()}}class w{constructor(e){this.adapter=e,this.adapter=e}isAvailable(){return!1}act(e){return Promise.resolve()}getStatus(){return Promise.resolve()}}function P(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class S{constructor(e){this.options=e,P(this,"_isReady",!1),P(this,"initResolves",[]),P(this,"api",void 0),P(this,"advertising",void 0),P(this,"player",void 0),P(this,"purchase",void 0),P(this,"server",void 0),P(this,"modules",[]),P(this,"joinGroup",void 0),P(this,"inviteFriends",void 0),P(this,"makePost",void 0),P(this,"subscribeToEvents",void 0),P(this,"makeReview",void 0),P(this,"setShortcut",void 0),P(this,"addToFavorites",void 0),P(this,"makeStory",void 0),this.advertising=this.createAdvertising(),this.player=this.createPlayer(),this.purchase=this.createPurchase(),this.server=this.createServer(),this.modules.push(this.advertising,this.player,this.purchase,this.server),this.joinGroup=this.createJoinGroup(),this.inviteFriends=this.createInviteFriends(),this.makePost=this.createMakePost(),this.subscribeToEvents=this.createSubscribeToEvents(),this.makeReview=this.createMakeReview(),this.setShortcut=this.createSetShortcut(),this.addToFavorites=this.createAddToFavorites(),this.makeStory=this.createMakeStory(),this.initSelf()}get isReady(){return this._isReady}init(){return this.isReady?Promise.resolve():this.getInitPromise()}gameReady(){}loading(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}getApi(){return this.api}createServer(){return new f(this)}createAdvertising(){return new i(this)}createPlayer(){return new c(this)}createPurchase(){return new d(this)}createJoinGroup(){return new w(this)}createInviteFriends(){return new w(this)}createMakePost(){return new w(this)}createSubscribeToEvents(){return new w(this)}createMakeReview(){return new w(this)}createSetShortcut(){return new w(this)}createAddToFavorites(){return new w(this)}createMakeStory(){return new w(this)}initSelf(){let e=!1,t=()=>{e||(e=!0,this.initApi().then(()=>this.initModules()).then(()=>{this._isReady=!0,this.callInitResolves()}).catch(e=>{console.error(e)}))};window.addEventListener("load",t),"complete"===document.readyState&&t()}initApi(){return Promise.resolve()}initModules(){return Promise.all(this.modules.map(e=>e.init()))}getInitPromise(){return new Promise(e=>{this.initResolves.push(e)})}callInitResolves(){this.initResolves.forEach(e=>{e()}),this.initResolves=[]}}var E=r(817),A=r.n(E);class k extends i{constructor(e){super(e),this.adapter=e}init(){return Promise.resolve(!0)}showPreroll(){return console.log("VK showPreroll"),A().send("VKWebAppShowNativeAds",{ad_format:"interstitial"}).then(e=>({success:e.result})).catch(e=>(console.error("VK interstitial error:",e),{success:!1,error:e}))}showInterstitial(){console.log("VK showInterstitial - перед вызовом bridge.send");let e=A().send("VKWebAppShowNativeAds",{ad_format:"interstitial"}).then(e=>(console.log("VK showInterstitial - успех",e),{success:e.result})).catch(e=>(console.error("VK interstitial error:",e),{success:!1,error:e}));return console.log("VK showInterstitial - после вызова bridge.send"),e}showRewarded(){return console.log("VK showRewarded"),A().send("VKWebAppShowNativeAds",{ad_format:"reward"}).then(e=>({success:e.result})).catch(e=>(console.error("VK rewarded error:",e),{success:!1,error:e}))}showBannerAd(){return console.log("VK showBannerAd"),A().send("VKWebAppShowBannerAd",{banner_location:"bottom"}).then(()=>({success:!0})).catch(e=>(console.error("VK banner error:",e),{success:!1,error:"banner not supported"}))}hideBannerAd(){return Promise.resolve({success:!1,error:"banner not supported"})}}function N(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class _ extends c{constructor(e){super(e),this.adapter=e,N(this,"gets",{}),N(this,"__loaded",!1),N(this,"__ready",!1),N(this,"group_id",0xd8831ab),N(this,"appId",0x32e50d4),N(this,"name","user"),N(this,"avatar","url"),N(this,"score",{}),N(this,"userId",""),N(this,"gameUrl","https://vk.com/app"+this.appId),N(this,"groupUrl","https://vk.com/public"+this.group_id),N(this,"waiters",[]),N(this,"lang","ru")}async init(){try{console.log("VkPlayer initialization started");let e=await this.initUserData();console.log("Data = ",e),await Promise.all([this.initMember()]),console.log("VkPlayer initialized successfully")}catch(e){console.error("VK initialization failed:",e)}finally{this.__ready=!0,this.callWaiters()}}callWaiters(){this.waiters.forEach(e=>e()),this.waiters=[]}async initServer(){return console.log("Server initialization"),Promise.resolve()}async initUserData(){try{console.log("Fetching user info...");let e=await A().send("VKWebAppGetUserInfo");return console.log("Raw user data:",e),this.userId=String(e.id),this.language=e.language||"ru",this.name=e.first_name,this.avatar=e.photo_max_orig,{...e}}catch(e){console.error("Failed to get VK user info:",e)}}async addToFavorites(){try{if(A().supports("VKWebAppAddToFavorites")){let e=await A().send("VKWebAppAddToFavorites");return e?.result===!0}return!1}catch(e){return console.error("Add to favorites failed:",e),!1}}getId(){return this.userId}getLang(){return this.lang}getName(){return this.name}getAvatar(){return this.avatar}getFromGets(e){return this.gets[e]||null}async isAuth(){return Promise.resolve(!0)}async auth(){return Promise.resolve(!0)}initGetData(){["vk_user_id","vk_language","vk_app_id","vk_is_favorite","is_member","vk_are_notifications_enabled"].forEach(e=>{this.gets[e]=this.getParamsFromGET(e)})}getParamsFromGET(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(t.length){try{let e=new URLSearchParams(window.location.search);if(1===t.length)return e.get(t[0]);{let r={};return t.forEach(t=>{r[t]=e.get(t)}),r}}catch(e){console.error("URLSearchParams not supported")}return!1}}initMember(){return this.__isMember().then(e=>{this.gets.vk_is_member=e})}__isMember(){return A().send("VKWebAppGetGroupInfo",{group_id:this.group_id}).then(e=>Promise.resolve(!!Number(e?.is_member||0))).catch(e=>Promise.resolve(!1))}async saveData(e){try{if(!this.userId)throw Error("User not initialized");let t=Object.entries(e).map(async e=>{let[t,r]=e;t||(t="default");let a=`player_${this.userId}_${t}`,s="string"==typeof r?r:JSON.stringify(r);console.log("Saving item:",{key:a,value:s});try{let e=await A().send("VKWebAppStorageSet",{key:a,value:s});return e?.result===!0}catch(e){return console.error(`Failed to save key "${t}":`,e),!1}});return(await Promise.all(t)).every(Boolean)}catch(e){return console.error("VK saveData error:",e),!1}}async loadData(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["default"];try{if(!this.userId)throw Error("User not initialized");e&&0!==e.length||(e=["default"]);let t=e.map(e=>`player_${this.userId}_${e||"default"}`);console.log("Loading keys:",t);let r=await A().send("VKWebAppStorageGet",{keys:t});if(!r?.keys)return null;let a={};return r.keys.forEach(e=>{let t=e.key.replace(`player_${this.userId}_`,"");try{a[t]=JSON.parse(e.value)}catch{a[t]=e.value}}),a}catch(e){return console.error("VK loadData error:",e),null}}}function I(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class R extends d{constructor(e){super(e),this.adapter=e,I(this,"appId","53366996"),I(this,"currency",[]),I(this,"lang",""),I(this,"catalog",{})}getCurrency(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this.currency[this.lang]||this.currency.ru;return t?"string"==typeof t?t:t[e]||t[`*${e%10}`]||t["*"]||t[Object.keys(t)[0]]:"VK"}}function j(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class D extends S{constructor(e){super(e),j(this,"gets",new T(this)),console.log("VkAdapter initialized")}async init(){try{if(console.log("Starting VK adapter initialization..."),!(await A().send("VKWebAppInit")).result)throw Error("VKWebAppInit returned false");console.log("VKWebAppInit completed successfully"),this.gets.init(),await Promise.all([this.advertising.init(),this.player.init(),this.purchase.init()]),console.log("VK adapter successfully initialized")}catch(e){throw console.error("VK adapter initialization failed:",e),e}}createAdvertising(){return new k(this)}createPlayer(){return new _(this)}createPurchase(){return new R(this)}}class T{constructor(e){this.adapter=e,j(this,"data",{}),this.adapter=e}init(){if("undefined"!=typeof window){let e=new URLSearchParams(window.location.search);this.data={},e.forEach((e,t)=>{this.data[t]=e})}console.log("GET parameters initialized:",this.data)}get(e){return this.data[e]}}let O=null,C=e=>{let{isReady:t,showPreroll:r,showBunnerAd:s,showInterstitial:i,showRewarded:n}=e,[o,l]=(0,a.useState)({}),[c,u]=(0,a.useState)(!0),[d,h]=(0,a.useState)({}),m=e=>{l(t=>({...t,[e]:!t[e]}))},v=async(e,t,r)=>{try{let r=await t();h(t=>({...t,[e]:JSON.stringify(r,null,2)}))}catch(t){h(r=>({...r,[e]:JSON.stringify({error:t.message},null,2)}))}};return a.createElement("section",{className:"documentation-module"},a.createElement("h2",{className:"module-header",onClick:()=>u(!c)},a.createElement("span",{className:"module-icon"},"\uD83D\uDCE2"),"Advertising",a.createElement("span",{className:"toggle-icon"},c?"▼":"►")),c&&a.createElement("div",{className:"methods-list"},[{id:"show-interstitial",name:"showInterstitial",isAsync:!0,description:"Показывает interstitial рекламу (полноэкранное объявление)",returns:"Promise<boolean> - true если реклама была показана полностью",action:i},{id:"show-reward",name:"showReward",isAsync:!0,description:"Показывает rewarded рекламу (реклама за вознаграждение)",returns:"Promise<boolean> - true если пользователь досмотрел рекламу и получил награду",action:n},{id:"show-prerol",name:"showPrerol",isAsync:!0,description:"Показывает preroll рекламу",returns:"Promise<boolean> - true если реклама была показана полностью",action:r},{id:"show-bunnerad",name:"showBunnerAd",isAsync:!0,description:"Показывает баннерную рекламу",returns:"Promise<boolean> - true если реклама была показана",action:s}].map(e=>a.createElement("div",{key:e.id,className:`method-block ${!t?"disabled":""}`},a.createElement("div",{className:"method-header",onClick:()=>m(e.id)},a.createElement("h3",null,e.name),e.isAsync&&a.createElement("span",{className:"async-badge"},"PROMISE"),a.createElement("span",{className:"toggle-icon"},o[e.id]?"↑":"↓")),o[e.id]&&a.createElement("div",{className:"method-details"},a.createElement("p",{className:"description"},e.description),a.createElement("div",{className:"returns-section"},a.createElement("h4",null,"Возвращает:"),a.createElement("textarea",{readOnly:!0,value:d[e.id]||e.returns,rows:4})),a.createElement("button",{className:"send-button",onClick:()=>v(e.id,e.action,e.returns),disabled:!t},"Send"))))))},V=e=>{let{isReady:t,saveData:r,loadData:s,getId:i,getName:n,getLang:o,getAvatar:l,isAuth:c,auth:u}=e,[d,h]=(0,a.useState)({}),[m,v]=(0,a.useState)(!0),[g,p]=(0,a.useState)({}),[y,b]=(0,a.useState)({}),f=e=>{h(t=>({...t,[e]:!t[e]}))},w=(e,t)=>{p(r=>({...r,[e]:t}))},P=async(e,t)=>{try{let r;if("save-data"===e){let a=g[e]||"default text";console.log("SavingPlayer text:",a),r=await t(a)}else r=await t();b(t=>({...t,[e]:JSON.stringify(r,null,2)}))}catch(t){b(r=>({...r,[e]:JSON.stringify({error:t instanceof Error?t.message:"Unknown error"},null,2)}))}};return a.createElement("section",{className:"documentation-module"},a.createElement("h2",{className:"module-header",onClick:()=>v(!m)},a.createElement("span",{className:"module-icon"},"\uD83C\uDFAE"),"Player",a.createElement("span",{className:"toggle-icon"},m?"▼":"►")),m&&a.createElement("div",{className:"methods-list"},[{id:"save-data",name:"saveData",isAsync:!0,description:"Сохраняет данные игрока на сервер",parameters:"string: данные для сохранения (макс. 8000 символов)",returns:"Promise<void>",action:r},{id:"load-data",name:"loadData",isAsync:!0,description:"Загружает сохраненные данные игрока",returns:"Promise<string> - сохраненные данные",action:s},{id:"get-id",name:"getId",isAsync:!0,description:"Возвращает идентификатор текущего пользователя",returns:"Promise<string | null> - ID пользователя",action:i},{id:"get-name",name:"getName",isAsync:!0,description:"Возвращает имя пользователя",returns:"Promise<string | null> - имя пользователя",action:n},{id:"get-lang",name:"getLang",isAsync:!0,description:"Возвращает язык пользователя",returns:"Promise<string | null> - язык пользователя",action:o},{id:"get-avatar",name:"getAvatar",isAsync:!0,description:"Возвращает аватар пользователя",returns:"Promise<string | null> - URL аватара",action:l},{id:"is-auth",name:"isAuth",isAsync:!0,description:"Проверяет авторизацию пользователя",returns:"Promise<boolean> - статус авторизации",action:c},{id:"auth",name:"auth",isAsync:!0,description:"Авторизует пользователя",returns:"Promise<boolean>",action:u}].map(e=>a.createElement("div",{key:e.id,className:`method-block ${!t?"disabled":""}`},a.createElement("div",{className:"method-header",onClick:()=>f(e.id)},a.createElement("h3",null,e.name),e.isAsync&&a.createElement("span",{className:"async-badge"},"PROMISE"),a.createElement("span",{className:"toggle-icon"},d[e.id]?"↑":"↓")),d[e.id]&&a.createElement("div",{className:"method-details"},a.createElement("p",{className:"description"},e.description),e.parameters&&a.createElement("div",{className:"parameters-section"},a.createElement("h4",null,"Параметры:"),a.createElement("textarea",{value:g[e.id]||"",onChange:t=>w(e.id,t.target.value),placeholder:e.parameters})),a.createElement("div",{className:"returns-section"},a.createElement("h4",null,"Возвращает:"),a.createElement("textarea",{readOnly:!0,value:y[e.id]||e.returns,rows:4})),a.createElement("button",{className:"send-button",onClick:()=>P(e.id,e.action),disabled:!t},"Send"))))))},F=e=>{let{isReady:t,getCatalog:r}=e,[s,i]=(0,a.useState)({}),[n,o]=(0,a.useState)(!0),[l,c]=(0,a.useState)({}),u=[{id:"get-catalog",name:"getCatalog",isAsync:!0,description:"Получает каталог доступных покупок",returns:"Promise<CatalogItem[]> - массив товаров",action:async()=>JSON.stringify(await r(),null,2)},{id:"purchase",name:"purchase",isAsync:!0,description:"Совершает покупку товара",parameters:"string: идентификатор товара",returns:"Promise<PurchaseResult>",action:async()=>"Not implemented in this demo"}],d=e=>{i(t=>({...t,[e]:!t[e]}))},h=async e=>{let t=u.find(t=>t.id===e);if(t){let r=await t.action();c(t=>({...t,[e]:r}))}};return a.createElement("section",{className:"documentation-module"},a.createElement("h2",{className:"module-header",onClick:()=>o(!n)},a.createElement("span",{className:"module-icon"},"\uD83D\uDCB3"),"Purchase",a.createElement("span",{className:"toggle-icon"},n?"▼":"►")),n&&a.createElement("div",{className:"methods-list"},u.map(e=>a.createElement("div",{key:e.id,className:`method-block ${!t?"disabled":""}`},a.createElement("div",{className:"method-header",onClick:()=>d(e.id)},a.createElement("h3",null,e.name),e.isAsync&&a.createElement("span",{className:"async-badge"},"PROMISE"),a.createElement("span",{className:"toggle-icon"},s[e.id]?"↑":"↓")),s[e.id]&&a.createElement("div",{className:"method-details"},a.createElement("p",{className:"description"},e.description),a.createElement("div",{className:"returns-section"},a.createElement("h4",null,"Возвращает:"),a.createElement("textarea",{readOnly:!0,value:e.returns+(l[e.id]?`

Result: ${l[e.id]}`:"")})),a.createElement("button",{className:"send-button",onClick:()=>h(e.id),disabled:!t},"Send"))))))},x=[{id:"createJoinGroup",title:"createJoinGroup"},{id:"createInviteFriends",title:"createInviteFriends"},{id:"createMakePost",title:"createMakePost"},{id:"createSubscribeToEvents",title:"createSubscribeToEvents"},{id:"createMakeReview",title:"createMakeReview"},{id:"createSetShortcut",title:"createSetShortcut"},{id:"createAddToFavorites",title:"createAddToFavorites"},{id:"createMakeStory",title:"createMakeStory"}],G=e=>{let{isReady:t,onMethodCall:r}=e,[s,i]=(0,a.useState)({}),n=e=>{i(t=>({...t,[e]:!t[e]}))};return a.createElement("section",{className:"social-module"},a.createElement("h2",{className:"module-header"},a.createElement("span",{className:"module-icon"},"\uD83D\uDC65"),"submodules"),a.createElement("div",{className:"features-grid"},x.map(e=>{let{id:i,title:o}=e;return a.createElement("div",{key:i,className:"feature-card"},a.createElement("div",{className:"feature-header",onClick:()=>n(i)},a.createElement("h3",null,o),a.createElement("span",{className:"toggle-icon"},s[i]?"▼":"►")),s[i]&&a.createElement("div",{className:"feature-methods"},a.createElement("div",{className:"method-block"},a.createElement("h4",null,"isAvailable()"),a.createElement("p",null,"Проверяет доступность функции"),a.createElement("button",{className:"method-button",onClick:()=>r?.(i,"isAvailable"),disabled:!t},"Вызвать")),a.createElement("div",{className:"method-block"},a.createElement("h4",null,"act()"),a.createElement("p",null,"Выполняет действие"),a.createElement("button",{className:"method-button",onClick:()=>r?.(i,"act"),disabled:!t},"Вызвать")),a.createElement("div",{className:"method-block"},a.createElement("h4",null,"getStatus()"),a.createElement("p",null,"Возвращает текущий статус"),a.createElement("button",{className:"method-button",onClick:()=>r?.(i,"getStatus"),disabled:!t},"Вызвать"))))})))},K=document.getElementById("root");K?(0,s.createRoot)(K).render(a.createElement(a.StrictMode,null,a.createElement(function(){let{initAdapter:e,saveData:t,loadData:r,initializationError:s,showPreroll:i,showBunnerAd:n,showInterstitial:o,showRewarded:l,getId:c,getName:u,getLang:d,getAvatar:h,isAuth:m,isReady:v,auth:g,getCatalog:p}=function(){let[e,t]=(0,a.useState)(null),[r,s]=(0,a.useState)(!1),[i,n]=(0,a.useState)(null),o=function(e,t){let[r,s]=(0,a.useState)(0);return{showInterstitial:async()=>{if(!t||!e)return void console.warn(`[warning] Адаптер не готов: Показ showInterstitial рекламы`);try{let t=await e.advertising.showInterstitial();return console.log("showInterstitial = ",t),t}catch(e){return console.log("Ошибка при showInterstitial:",e),e}},showRewarded:async()=>{if(!t||!e)return void console.warn(`[warning] Адаптер не готов: Показ showInterstitial рекламы`);try{let t=await e.advertising.showRewarded();return console.log("showRewarded = ",t),t}catch(e){return console.log("Ошибка при showRewarded:",e),e}},showPreroll:async()=>{if(!t||!e)return void console.warn(`[warning] Адаптер не готов`);try{let t=await e.advertising.showPreroll();return console.log("showPreroll = ",t),t}catch(e){return console.log("Ошибка при showPreroll: ",e),e}},showBunnerAd:async()=>{if(!t||!e)return void console.warn(`[warning] Адаптер не готов`);try{let t=await e.advertising.showBannerAd();return console.log("showBannerAd = ",t),t}catch(e){return console.log("Ошибка при showBannerAd: ",e),e}},lastAdTime:r}}(e,r),l=function(e,t){let[r,s]=(0,a.useState)("");return{saveData:async r=>{if(!t||!e)return console.warn("save (mock)"),!1;try{console.log("Saving text:",r);let t=await e.player.saveData({data:r});return console.log("Save result:",t),t}catch(e){return console.error("Save error:",e),!1}},loadData:async()=>{if(!t||!e)return console.warn("load (mock)"),"";try{let t=await e.player.loadData(["data"]),r=t?.data||"";return s(r),r}catch(e){return console.error("Load error:",e),""}},getId:async()=>{if(!t||!e)return console.warn("load (mock)"),null;try{let t=await e.player.getId();return console.log("id пользователя = ",t),t}catch(e){return console.error(" Ошибка при получении ID:",e),null}},getName:async()=>{if(!t||!e)return console.warn("getName (mock)"),null;try{let t=await e.player.getName();return console.log("getName = ",t),t}catch(e){return console.log("Ошибка при получении имени:"+e),null}},getLang:async()=>{if(!t||!e)return console.warn("getLang (mock)"),null;try{let t=await e.player.getLang();return console.log("getLang = ",t),t}catch(e){return console.log("Ошибка getLang "+e),null}},getAvatar:async()=>{if(!t||!e)return console.warn("getAvatar (mock)"),null;try{let t=await e.player.getAvatar();return console.log("getAvatar = ",t),t}catch(e){return console.log("Ошибка getAvatar "+e),null}},isAuth:async()=>{if(!t||!e)return console.warn("isAuth (mock)"),Promise.resolve(!1);try{let t=await e.player.isAuth();return console.log("isAuth = ",t),t}catch(e){return console.log("Ошибка isAuth "+e),Promise.resolve(!1)}},auth:async()=>{if(!t||!e)return console.warn("isAuth (mock)"),Promise.resolve(!1);try{let t=await e.player.auth();return console.log("auth = ",t),t}catch(e){return console.log("Ошибка auth "+e),Promise.resolve(!1)}},textData:r,setTextData:s}}(e,r),c={getCatalog:()=>{if(!r||!e)return void console.warn(`[warning] Адаптер не готов`);try{let t=e.purchase.getCatalog();console.log("catalog = ",t)}catch(e){console.log("Ошибка при получении каталога")}}},u={addToFavorites:async()=>(r&&e?e.addToFavorites.isAvailable()&&await e.addToFavorites.act():console.warn("addToFavorites (mock)"),Promise.resolve(!0)),joinGroup:async()=>(r&&e?e.joinGroup.isAvailable()&&await e.joinGroup.act():console.warn("joinGroup (mock)"),Promise.resolve(!0)),inviteFriends:async t=>(r&&e?e.inviteFriends.isAvailable()&&await e.inviteFriends.act(t):console.warn("inviteFriends (mock)"),Promise.resolve(!0)),makePost:async t=>(r&&e?e.makePost.isAvailable()&&await e.makePost.act(t):console.warn("makePost (mock)"),Promise.resolve(!0)),subscribeToEvents:async t=>(r&&e?e.subscribeToEvents.isAvailable()&&await e.subscribeToEvents.act(t):console.warn("subscribeToEvents (mock)"),Promise.resolve(!0)),makeReview:async t=>(r&&e?e.makeReview.isAvailable()&&await e.makeReview.act(t):console.warn("makeReview (mock)"),Promise.resolve(!0)),setShortcut:async t=>(r&&e?e.setShortcut.isAvailable()&&await e.setShortcut.act(t):console.warn("setShortcut (mock)"),Promise.resolve(!0)),makeStory:async t=>(r&&e?e.makeStory.isAvailable()&&await e.makeStory.act(t):console.warn("makeStory (mock)"),Promise.resolve(!0))};return{initAdapter:async()=>{try{var e;let r=(e={gameId:"demo"},O||(O=new D(e)),O);await r.init(),await r.player.init(),t(r),s(!0),n(null)}catch(e){console.error("Ошибка инициализации адаптера:",e),n(e),s(!1)}},isReady:r,adapter:e,initializationError:i,...o,...l,...c,...u}}();return(0,a.useEffect)(()=>{e()},[]),(0,a.useEffect)(()=>{s&&console.error("Initialization failed:",s)},[s]),a.createElement("div",{className:"scroll-container"},a.createElement("div",{className:"app-container"},a.createElement("header",{className:"app-header"},a.createElement("h1",null,"Документация API"),a.createElement("div",{className:`status-indicator ${v?"ready":"loading"}`},v?" API Ready":" API Loading...")),a.createElement("main",{className:"dashboard"},a.createElement(C,{isReady:v,showPreroll:i,showBunnerAd:n,showInterstitial:o,showRewarded:l}),a.createElement(V,{isReady:v,saveData:t,loadData:r,getId:c,getName:u,getLang:d,getAvatar:h,isAuth:m,auth:g}),a.createElement(F,{isReady:v,getCatalog:p}),a.createElement(G,{isReady:v}))))},null))):console.error("Root element not found!")}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,a,s,i)=>{if(a){i=i||0;for(var n=e.length;n>0&&e[n-1][2]>i;n--)e[n]=e[n-1];e[n]=[a,s,i];return}for(var o=1/0,n=0;n<e.length;n++){for(var[a,s,i]=e[n],l=!0,c=0;c<a.length;c++)(!1&i||o>=i)&&Object.keys(r.O).every(e=>r.O[e](a[c]))?a.splice(c--,1):(l=!1,i<o&&(o=i));if(l){e.splice(n--,1);var u=s();void 0!==u&&(t=u)}}return t}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var s,i,[n,o,l]=a,c=0;if(n.some(t=>0!==e[t])){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(l)var u=l(r)}for(t&&t(a);c<n.length;c++)i=n[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=r.O(void 0,[14],()=>r(518));a=r.O(a)})();
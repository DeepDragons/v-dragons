(function(t){function e(e){for(var r,a,o=e[0],u=e[1],c=e[2],d=0,l=[];d<o.length;d++)a=o[d],i[a]&&l.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(l.length)l.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(r=!1)}r&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},i={app:0},s=[];function o(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-279890a6":"6aa811de","chunk-5c066d7e":"1b5efcf9","chunk-667bad2a":"d4cf4f2a","chunk-8ad3ea0e":"49801d70","chunk-d865d01a":"251a46e5","chunk-dc7a2ede":"b228629c"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-279890a6":1,"chunk-5c066d7e":1,"chunk-667bad2a":1,"chunk-8ad3ea0e":1,"chunk-d865d01a":1,"chunk-dc7a2ede":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-279890a6":"967fdef4","chunk-5c066d7e":"31158756","chunk-667bad2a":"967fdef4","chunk-8ad3ea0e":"967fdef4","chunk-d865d01a":"02c4c40b","chunk-dc7a2ede":"7120dc25"}[t]+".css",i=u.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===i))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){c=l[o],d=c.getAttribute("data-href");if(d===r||d===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.request=r,delete a[t],f.parentNode.removeChild(f),n(s)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=s);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=o(t),c=function(e){d.onerror=d.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,n[1](s)}i[t]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=d;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1cf7":function(t){t.exports=["DETECT","USER_DENIED_ACCOUNT_ACCESS","NONE_METAMASK_MODE","ADDRESS_CHANGE","LOCKED","NETISDETECT"]},3481:function(t){t.exports=[{constant:!0,inputs:[],name:"totalDragons",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"dragons",outputs:[{name:"gen1",type:"uint256"},{name:"stage",type:"uint8"},{name:"currentAction",type:"uint8"},{name:"gen2",type:"uint240"},{name:"nextBlock2Action",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_dragonID",type:"uint256"}],name:"birthDragon",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"tokensOf",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"dragonName",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"ownerOf",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_dragonID",type:"uint256"},{name:"_dragonPrice",type:"uint256"},{name:"_endBlockNumber",type:"uint256"}],name:"add2MarketPlace",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]},"414a":function(t,e,n){"use strict";var r=n("e814"),a=n.n(r),i=(n("28a5"),n("ab86"));e["a"]={data:function(){return{stages:{0:"dead",1:"egg",2:"dragon"},actions:{0:"free",1:"fight place",2:"random fight",3:"breed market",4:"breed auction",5:"random breed",6:"market place",255:"Necropolis"}}},computed:{cloud:function(){return this.$store.getters.CLOUD}},methods:{getStage:function(t){return this.stages[t]},getUrl:function(t,e){var n=this.getStage(t);return"".concat(this.cloud).concat(n,"_").concat(e,".png")},sortElements:function(){var t=this,e=this.$store.getters[this.storeKey].elements;return e.map(function(e){return{id:e.id,url:t.getUrl(e.stage,e.id),price:e.price,owner:e.owner}})},genParse:function(t,e){var n=Object(i["fromDecimal"])(t);return n=Object(i["padLeft"])(n,e),n=n.split(/(..)/g),n=n.map(function(t){return a()(t,16)}),n=n.filter(function(t){return!isNaN(t)}),n}}}},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view"),n("Footer")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-violet bg-violet"},[n("div",{staticClass:"collapse navbar-collapse row navbar-nav mt-2 mt-lg-0"},[n("a",{staticClass:"navbar-brand col-sm",attrs:{href:"/"}},[t._v("Dragon"+t._s(t.$store.getters.CURRENCY))]),n("div",{staticClass:"col-lg"}),t._l(t.routers,function(e){return n("router-link",{key:e.name,staticClass:"btn btn-outline-warning",attrs:{tag:"button",to:e.path}},[t._v("\n      "+t._s(t._f("uperCase")(e.name))+"\n    ")])}),n("div",{staticClass:"mutagen text-pink mx-auto"},[t._v("\n      "+t._s(t.$store.getters.MUTAGEN)+"\n    ")])],2)])},o=[],u=(n("7f7f"),function(t){return t.toLocaleUpperCase()}),c={name:"NavBar",filters:{uperCase:u},data:function(){return{}},computed:{routers:function(){return this.$router.options.routes.filter(function(t){return!1!==t.name})}}},d=c,l=(n("bbad"),n("2877")),f=Object(l["a"])(d,s,o,!1,null,null,null),p=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-footer font-small indigo bg-darkviolet"},[t._m(0),n("div",{staticClass:"footer-copyright text-center py-3 text-warning"},[t._v("© 2018 Copyright: Dragon"+t._s(t.$store.getters.CURRENCY)+".com")])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container text-center text-md-left"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2 mx-auto"},[n("h5",{staticClass:"font-weight-bold text-uppercase mt-3 mb-4 text-warning"},[t._v("Links")]),n("ul",{staticClass:"list-unstyled"},[n("li",[n("a",{staticClass:"links-item",attrs:{href:"https://dragoneth.com/privacy"}},[t._v("Privacy Policy")])]),n("li",[n("a",{staticClass:"links-item",attrs:{href:"https://dragoneth.com/terms"}},[t._v("Terms of Service")])])])]),n("hr",{staticClass:"clearfix w-100 d-md-none"}),n("div",{staticClass:"col-md-1 mx-auto"},[n("h5",{staticClass:"font-weight-bold text-uppercase mt-3 mb-4 text-warning"},[t._v("Links")]),n("ul",{staticClass:"list-unstyled"},[n("li",[n("a",{staticClass:"links-item",attrs:{target:"_blanck",href:"tg://join?invite=DEnpkgr31xVjG4io-wmwLQ"}},[t._v("Telegram")])]),n("li",[n("a",{staticClass:"links-item",attrs:{target:"_blanck",href:"https://www.facebook.com/ethdragons"}},[t._v("Facebook")])]),n("li",[n("a",{staticClass:"links-item",attrs:{target:"_blanck",href:"https://www.reddit.com/r/DragonsEth"}},[t._v("Reddit")])]),n("li",[n("a",{staticClass:"links-item",attrs:{target:"_blanck",href:"https://twitter.com/dragons_eth"}},[t._v("Twitter")])]),n("li",[n("a",{staticClass:"links-item",attrs:{target:"_blanck",href:"https://discordapp.com/invite/kHMxad4"}},[t._v("Discord")])]),n("li",[n("a",{staticClass:"links-item",attrs:{target:"_blanck",href:"https://medium.com/@dragons_eth"}},[t._v("Medium")])])])]),n("hr",{staticClass:"clearfix w-100 d-md-none"})])])}],g={name:"Footer"},b=g,w=Object(l["a"])(b,h,m,!1,null,null,null),y=w.exports,v=(n("6b54"),n("96cf"),n("3b8d")),k=n("9e8b"),M=n("d959"),O=n("795b"),x=n.n(O),D=n("d225"),E=n("bd86"),_=n("71f8"),A=window.contracts,C=function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A.mutagen,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_;Object(D["a"])(this,t),Object(E["a"])(this,"balanceOf",function(t){return new x.a(function(e,r){n.mutagen.balanceOf.call(t,function(t,n){return t?r(t):e(n)})})}),this.address=r,this.web3=e,this.mutagen=this.web3.eth.contract(a).at(this.address)},S=n("1cf7"),P={mixins:[k["a"],M["a"]],computed:{mutagen:function(){var t=this.$store.getters.WEB3;return new C(t)}},methods:{updateBalanceMutagen:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=this.$store.getters.METAMASK.currentAddress,n){t.next=3;break}return t.abrupt("return",null);case 3:return t.next=5,this.mutagen.balanceOf(n);case 5:e=t.sent,e=e.toString(),this.$store.commit("MUTAGEN",e);case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goWachAddress:function(){var t=this;this.$store.subscribe(function(e,n){"METAMASK"===e.type&&n.MetaMask.msg===S[3]&&(t.updateBalanceMutagen(),t.tokensOf())})}}},T={components:{NavBar:p,Footer:y},mixins:[P],mounted:function(){this.showApp(),this.web3Detect(),this.goWachAddress()},methods:{showApp:function(){window.document.getElementById("fountainG").style.display="none",window.document.getElementById("app").style.display="block"},web3Detect:function(){this.$store.dispatch("enable"),this.$store.dispatch("isAddress"),this.$store.dispatch({type:"isNet",web3:this.$store.getters.WEB3})}}},j=T,R=(n("5c0b"),Object(l["a"])(j,a,i,!1,null,null,null)),N=R.exports,I=n("8c4f");r["a"].use(I["a"]);var $=new I["a"]({mode:"history",base:"/",routes:[{path:"/",name:"buy egg",component:function(){return n.e("chunk-dc7a2ede").then(n.bind(null,"d735"))}},{path:"/dragons",name:"My Dragons",component:function(){return n.e("chunk-667bad2a").then(n.bind(null,"6440"))}},{path:"/dragon/:id",name:!1,component:function(){return n.e("chunk-d865d01a").then(n.bind(null,"17d8"))}},{path:"/market",name:"Market Place",component:function(){return n.e("chunk-279890a6").then(n.bind(null,"f670"))}},{path:"/fightingground",name:"Fighting Ground",component:function(){return n.e("chunk-8ad3ea0e").then(n.bind(null,"634a"))}},{path:"/cemetery",name:"Cemetery",component:function(){return n.e("chunk-5c066d7e").then(n.bind(null,"de57"))}}]}),F=n("2f62"),B=n("645a"),G=n("d107"),U=n("d76d"),K=n("812d"),W=window.config;r["a"].use(F["a"]);var L=new F["a"].Store({state:{buyForm:{range:2,currentPrice:W.currentPrice,eggsSold:W.eggsSold,buyCost:W.buyCost,isCheck:!0},myDragon:{currentPage:1,elements:[],totalItems:0},market:{currentPage:1,elements:[],totalItems:0},fightingGround:{currentPage:1},cemetery:{currentPage:1},dragon:{},mutagen:0,currentAddress:null,MetaMask:{netID:null,currentAddress:"",msg:""}},actions:{isAddress:B["c"],enable:B["a"],isNet:B["d"],buyEgg:function(t){var e=t.state,n=t.getters,r=e.buyForm,a=new G["a"](n.WEB3);a.buy(r.range,r.isCheck)},buyFromMarket:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(e,n){var r,a,i,s,o,u;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getters,a=n.tokenId,s=new U["a"](r.WEB3),t.next=5,s.dragonPrices(a);case 5:return o=t.sent,t.next=8,s.ownersPercent();case 8:return u=t.sent,u=u.div(10),i=o.mul(u).div(100),i=i.toFixed(),o=o.add(i).toString(),t.next=15,s.buyDragon(a,o);case 15:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),toSell:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(e,n){var r,a,i,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:r=e.getters,a=n.tokenId,i=n.dragonPrice,s=new K["a"](r.WEB3),s.add2MarketPlace(a,i);case 4:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}()},getters:{BUYFORM:function(t){return t.buyForm},MYDRAGON:function(t){return t.myDragon},MARKET:function(t){return t.market},FIGHTINGGROUND:function(t){return t.fightingGround},CEMETERY:function(t){return t.cemetery},MUTAGEN:function(t){return t.mutagen},CURRENTADDRESS:function(t){return t.currentAddress},METAMASK:function(t){return t.MetaMask},CLOUD:function(){return W.cloud},CURRENCY:function(){return W.currency},WEB3:function(){return new window.Web3(new window.Web3.providers.HttpProvider(W.providers))}},mutations:{BUYFORM:function(t,e){return t.buyForm=e},MYDRAGON:function(t,e){return t.myDragon=e},MARKET:function(t,e){return t.market=e},FIGHTINGGROUND:function(t,e){return t.fightingGround=e},CEMETERY:function(t,e){return t.cemetery=e},MUTAGEN:function(t,e){return t.mutagen=e},CURRENTADDRESS:function(t,e){return t.currentAddress=e},METAMASK:function(t,e){return t.MetaMask=e}}}),Y=n("8832"),H=n.n(Y),q=n("7b38");r["a"].component("paginate",H.a),r["a"].use(q["a"]),r["a"].config.productionTip=!1,new r["a"]({router:$,store:L,render:function(t){return t(N)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(t,e,n){},"645a":function(t,e,n){"use strict";n.d(e,"c",function(){return u}),n.d(e,"a",function(){return c}),n.d(e,"d",function(){return l}),n.d(e,"b",function(){return f});n("96cf");var r=n("795b"),a=n.n(r),i=n("3b8d"),s=n("1cf7");function o(t){console.warn("WEB3:",t)}function u(t){var e=t.commit,n=t.state,r=n.MetaMask,a=setInterval(function(){window.ethereum?window.ethereum["selectedAddress"]&&r.currentAddress!==window.ethereum["selectedAddress"]&&(r.msg=s[3],r.currentAddress=window.ethereum["selectedAddress"],o(r.msg),e("METAMASK",r)):(r.msg=s[2],o(r.msg),r.currentAddress=null,clearInterval(a),e("METAMASK",r))},1e3)}function c(t){return d.apply(this,arguments)}function d(){return d=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,r=e.state,a=r.MetaMask,!window.ethereum){t.next=15;break}return t.prev=3,t.next=6,ethereum.enable();case 6:window.web3=window.ethereum,a.msg=s[0],t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](3),a.msg=s[1];case 13:t.next=16;break;case 15:a.msg=s[2];case 16:o(a.msg),n("METAMASK",a);case 18:case"end":return t.stop()}},t,this,[[3,10]])})),d.apply(this,arguments)}function l(t,e){var n=t.commit,r=t.state,a=e.web3,i=r.MetaMask,u=setInterval(function(){if(!a)return null;a.version.getNetwork(function(t,e){i.netID=t||e,n("METAMASK",i),o(s[5]),clearInterval(u)})},500)}function f(t){return new a.a(function(e,n){var r=new Web3(ethereum);r.eth.sendTransaction(t,function(t,r){return t?n(t):e(r)})})}},"71f8":function(t){t.exports=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]},"7bef":function(t,e,n){},"812d":function(t,e,n){"use strict";n.d(e,"a",function(){return d});var r=n("795b"),a=n.n(r),i=n("d225"),s=n("bd86"),o=n("3481"),u=n("645a"),c=window.contracts,d=function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.dragonseth,d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;Object(i["a"])(this,t),Object(s["a"])(this,"totalDragons",function(){return new a.a(function(t,e){n.dragonseth.totalDragons.call(function(n,r){return n?e(n):t(r)})})}),Object(s["a"])(this,"dragonName",function(t){return new a.a(function(e,r){n.dragonseth.dragonName.call(t,function(t,n){return t?r(t):e(n)})})}),Object(s["a"])(this,"tokensOf",function(t){return new a.a(function(e,r){n.dragonseth.tokensOf.call(t,function(t,n){return t?r(t):e(n)})})}),Object(s["a"])(this,"add2MarketPlace",function(t,e){var r=0,a=n.dragonseth.add2MarketPlace.getData(t,e,r),i={to:n.address,data:a};return Object(u["b"])(i)}),Object(s["a"])(this,"dragons",function(t){return new a.a(function(e,r){n.dragonseth.dragons.call(t,function(t,n){return t?r(t):e(n)})})}),Object(s["a"])(this,"birthDragon",function(t){return new a.a(function(e,r){n.dragonseth.birthDragon.send(t,function(t,n){return t?r(t):e(n)})})}),Object(s["a"])(this,"safeTransferFrom",function(t,e,r){return new a.a(function(a,i){n.dragonseth.safeTransferFrom.send(t,e,r,function(t,e){return t?i(t):a(e)})})}),Object(s["a"])(this,"ownerOf",function(t){return new a.a(function(e,r){n.dragonseth.ownerOf.call(t,function(t,n){return t?r(t):e(n)})})}),this.address=r,this.web3=e,this.dragonseth=this.web3.eth.contract(d).at(this.address)}},"9b89":function(t){t.exports=[{constant:!1,inputs:[{name:"_dragonID",type:"uint256"}],name:"buyDragon",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"totalDragonsToSale",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_firstIndex",type:"uint256"},{name:"_aboveLastIndex",type:"uint256"}],name:"getSlicedDragonsSale",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"getOwnedDragonToSale",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"dragonPrices",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"ownersPercent",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_dragonIDs",type:"uint256[]"}],name:"getFewDragons",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"dragonsOwner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"}]},"9e8b":function(t,e,n){"use strict";n("6b54"),n("96cf");var r=n("3b8d"),a=n("812d"),i=n("d959"),s=n("414a");e["a"]={mixins:[i["a"],s["a"]],computed:{dragonseth:function(){var t=this.$store.getters.WEB3;return new a["a"](t)}},methods:{tokensOf:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.$store.getters.MYDRAGON,r=this.$store.getters.METAMASK.currentAddress,t.next=4,this.dragonseth.tokensOf(r);case 4:return e=t.sent,t.next=7,this.marketPlace.getFewDragons(e);case 7:return n.elements=t.sent,this.$store.commit("MYDRAGON",n),t.abrupt("return",n.elements);case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),dragonInfo:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.dragonseth.dragonName(e);case 2:return n=t.sent,t.next=5,this.dragonseth.ownerOf(e);case 5:return r=t.sent,t.next=8,this.dragonseth.dragons(e);case 8:return a=t.sent,t.abrupt("return",{dragonName:n,owner:r,gens:{faceGenes:this.genParse(a[0],65),fightsGenes:this.genParse(a[3],62),currentAction:this.actions[a[2]],stage:a[1].toString(),nextBlock2Action:a[4].toString()}});case 10:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}}},bbad:function(t,e,n){"use strict";var r=n("7bef"),a=n.n(r);a.a},d107:function(t,e,n){"use strict";n.d(e,"a",function(){return f});n("96cf");var r=n("3b8d"),a=n("795b"),i=n.n(a),s=n("d225"),o=n("b0b4"),u=n("bd86"),c=n("e08f"),d=n("645a"),l=window.contracts,f=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.crowdsale,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c;Object(s["a"])(this,t),Object(u["a"])(this,"priceChanger",function(){return new i.a(function(t,e){n.crowdsale.priceChanger.call(function(n,r){return n?e(n):t(r)})})}),Object(u["a"])(this,"crowdSaleDragonPrice",function(){return new i.a(function(t,e){n.crowdsale.crowdSaleDragonPrice.call(function(n,r){return n?e(n):t(r)})})}),this.address=r,this.web3=e,this.crowdsale=this.web3.eth.contract(a).at(this.address)}return Object(o["a"])(t,[{key:"buy",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,r,a,i,s,o=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=!(o.length>1&&void 0!==o[1])||o[1],r=o.length>2&&void 0!==o[2]?o[2]:null,a={to:this.address,data:r},t.next=5,this.crowdSaleDragonPrice();case 5:if(i=t.sent,!n){t.next=10;break}t.t0=0,t.next=13;break;case 10:return t.next=12,this.priceChanger();case 12:t.t0=t.sent;case 13:return s=t.t0,a.value=i.add(s),a.value=a.value.mul(e),t.abrupt("return",Object(d["b"])(a));case 17:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),t}()},d76d:function(t,e,n){"use strict";n.d(e,"a",function(){return d});n("6b54");var r=n("795b"),a=n.n(r),i=n("d225"),s=n("bd86"),o=n("9b89"),u=n("645a"),c=window.contracts,d=function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.marketPlace,d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;Object(i["a"])(this,t),Object(s["a"])(this,"ownersPercent",function(){return new a.a(function(t,e){n.marketPlace.ownersPercent.call(function(n,r){return n?e(n):t(r)})})}),Object(s["a"])(this,"dragonPrices",function(t){return new a.a(function(e,r){n.marketPlace.dragonPrices.call(t,function(t,n){return t?r(t):e(n)})})}),Object(s["a"])(this,"buyDragon",function(t,e){return new a.a(function(r,a){var i={value:e,to:n.address,data:n.marketPlace.buyDragon.getData(t)};return Object(u["b"])(i)})}),Object(s["a"])(this,"totalDragonsToSale",function(){return new a.a(function(t,e){n.marketPlace.totalDragonsToSale.call(function(n,r){return n?e(n):t(r.toString())})})}),Object(s["a"])(this,"getSlicedDragonsSale",function(t,e){return new a.a(function(r,a){n.marketPlace.getSlicedDragonsSale.call(t,e,function(t,e){return t?a(t):r(e.map(function(t){return t.toString()}))})})}),Object(s["a"])(this,"getOwnedDragonToSale",function(t){return new a.a(function(e,r){n.marketPlace.getOwnedDragonToSale.call(t,function(t,n){return t?r(t):e(n)})})}),Object(s["a"])(this,"getFewDragons",function(t){return new a.a(function(e,r){n.marketPlace.getFewDragons.call(t,function(t,a){if(t)return r(t);for(var i=[],s=0;s<a.length;s+=4)a[s]&&i.push({id:a[s].toString(),stage:a[s+1].toString(),owner:n.web3.toHex(a[s+2]),price:a[s+3].toString()});return e(i)})})}),Object(s["a"])(this,"dragonsOwner",function(t){return new a.a(function(e,r){n.marketPlace.dragonsOwner.call(t,function(t,n){return t?r(t):e(n)})})}),this.address=r,this.web3=e,this.marketPlace=this.web3.eth.contract(d).at(this.address)}},d959:function(t,e,n){"use strict";n("96cf");var r=n("3b8d"),a=n("d76d");e["a"]={computed:{marketPlace:function(){var t=this.$store.getters.WEB3;return new a["a"](t)}},methods:{getDragonsToSale:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=this.$store.getters.MARKET,t.next=3,this.marketPlace.totalDragonsToSale();case 3:if(e=t.sent,!(e<1)){t.next=6;break}return t.abrupt("return",[]);case 6:return t.next=8,this.marketPlace.getSlicedDragonsSale(0,e++);case 8:return n=t.sent,t.next=11,this.marketPlace.getFewDragons(n);case 11:return r.elements=t.sent,this.$store.commit("MARKET",r),t.abrupt("return",r.elements);case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),buyFromMarket:function(t){this.$store.dispatch({type:"buyFromMarket",tokenId:t})}}}},e08f:function(t){t.exports=[{constant:!0,inputs:[],name:"crowdSaleDragonPrice",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"priceChanger",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]}});
//# sourceMappingURL=app.64fbd2d4.js.map
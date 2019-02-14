(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-465f2cff"],{"634a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container pt-5"},[r("div",{staticClass:"row justify-content-md-center"},t._l(t.cards,function(e){return r("Card",{key:e.id,staticClass:"col-md-3",attrs:{hover:t.hover,paramPath:"/dragon/"+e.id,url:e.url}},[r("h3",{staticClass:"text-lightviolet"},[t._v("#"+t._s(e.id))]),r("router-link",{staticClass:"btn btn-outline-danger",attrs:{tag:"a",to:"/battle/"+e.id}},[t._v("\n        FIGHT\n      ")])],1)}),1),t.isShow?r("paginate",{attrs:{"page-count":t.totalRows,"page-range":t.perPage,"prev-text":t.prevText,"next-text":t.nextText,"container-class":"pagination"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],1)},a=[],s=(r("96cf"),r("3b8d")),i=r("f095"),o=r("efa8"),c=r("414a"),u=r("b592"),l={name:"FightingGround",components:{Card:i["a"]},mixins:[o["a"],c["a"],u["a"]],data:function(){return{storeKey:"FIGHTINGGROUND",hover:"red"}},computed:{cards:function(){var t=this.sortElements();return this.pageChanged(t)}},mounted:function(){this.preStart()},methods:{preStart:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.cards.length>0)){t.next=2;break}return t.abrupt("return",null);case 2:return this.loaderShow(),t.next=5,this.getDragonsTofight();case 5:this.loaderHide();case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},h=l,g=r("2877"),d=Object(g["a"])(h,n,a,!1,null,null,null);e["default"]=d.exports},"916e":function(t,e,r){"use strict";var n=r("b75e"),a=r.n(n);a.a},a481:function(t,e,r){"use strict";var n=r("cb7c"),a=r("4bf8"),s=r("9def"),i=r("4588"),o=r("0390"),c=r("5f1b"),u=Math.max,l=Math.min,h=Math.floor,g=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,f=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,function(t,e,r,p){return[function(n,a){var s=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,s,a):r.call(String(s),n,a)},function(t,e){var a=p(r,t,this,e);if(a.done)return a.value;var h=n(t),g=String(this),d="function"===typeof e;d||(e=String(e));var m=h.global;if(m){var b=h.unicode;h.lastIndex=0}var x=[];while(1){var w=c(h,g);if(null===w)break;if(x.push(w),!m)break;var P=String(w[0]);""===P&&(h.lastIndex=o(g,s(h.lastIndex),b))}for(var y="",$=0,S=0;S<x.length;S++){w=x[S];for(var _=String(w[0]),C=u(l(i(w.index),g.length),0),k=[],T=1;T<w.length;T++)k.push(f(w[T]));var G=w.groups;if(d){var I=[_].concat(k,C,g);void 0!==G&&I.push(G);var R=String(e.apply(void 0,I))}else R=v(_,g,C,k,G,e);C>=$&&(y+=g.slice($,C)+R,$=C+_.length)}return y+g.slice($)}];function v(t,e,n,s,i,o){var c=n+t.length,u=s.length,l=d;return void 0!==i&&(i=a(i),l=g),r.call(o,l,function(r,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":o=i[a.slice(1,-1)];break;default:var l=+a;if(0===l)return r;if(l>u){var g=h(l/10);return 0===g?r:g<=u?void 0===s[g-1]?a.charAt(1):s[g-1]+a.charAt(1):r}o=s[l-1]}return void 0===o?"":o})}})},b592:function(t,e,r){"use strict";r("6b54"),r("96cf");var n=r("3b8d"),a=r("338d");e["a"]={computed:{fightPlace:function(){var t=this.$store.getters.WEB3;return new a["a"](t)}},methods:{getDragonsTofight:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.getters.FIGHTINGGROUND,t.next=3,this.fightPlace.getAllDragonsFight();case 3:return e.elements=t.sent,e.elements=e.elements.map(function(t){return{stage:2,id:t.toString(),owner:"",price:0}}),this.$store.commit("FIGHTINGGROUND",e),t.abrupt("return",e.elements);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}}},b75e:function(t,e,r){},efa8:function(t,e,r){"use strict";e["a"]={data:function(){return{currentPage:1,perPage:6,prevText:"<",nextText:">"}},mounted:function(){this.currentPage=this.$store.getters[this.storeKey].currentPage},computed:{totalRows:function(){var t=this.$store.getters[this.storeKey].elements,e=t.length;return e<1?null:(e/=this.perPage,e=Math.ceil(+e),e)},isShow:function(){var t=this.$store.getters[this.storeKey].elements;return t.length>this.perPage}},watch:{currentPage:function(){var t=this.$store.getters[this.storeKey];t.currentPage=this.currentPage,this.$store.commit(this.storeKey,t)}},methods:{pageChanged:function(t){var e=(this.currentPage-1)*this.perPage,r=this.currentPage*this.perPage;return t.slice(e,r)}}}},f095:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"s-myeggs__item"},[r("div",{staticClass:"s-myeggs__circle bg-violet",class:[t.hover],on:{click:t.goTo}},[r("img",{staticClass:"s-myeggs__eggpic",attrs:{src:t.url,onerror:"this.onerror=null; this.src='http://res.cloudinary.com/dragonseth/image/upload/sub.png'"}})]),r("div",{staticClass:"card-body"},[t._t("default")],2)])},a=[],s=(r("a481"),{name:"Card",props:{hover:{type:String,default:"default"},url:String,paramPath:String},methods:{goTo:function(){if(!this.paramPath)return null;this.$router.replace(this.paramPath)}}}),i=s,o=(r("916e"),r("2877")),c=Object(o["a"])(i,n,a,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-465f2cff.7fdbb0a2.js.map
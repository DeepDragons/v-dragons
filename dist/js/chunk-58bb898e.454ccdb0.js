(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58bb898e"],{"11e9":function(t,e,r){var n=r("52a7"),a=r("4630"),i=r("6821"),o=r("6a99"),s=r("69a8"),c=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=i(t),e=o(e,!0),c)try{return u(t,e)}catch(r){}if(s(t,e))return a(!n.f.call(t,e),t[e])}},"5dbc":function(t,e,r){var n=r("d3f4"),a=r("8b97").set;t.exports=function(t,e,r){var i,o=e.constructor;return o!==r&&"function"==typeof o&&(i=o.prototype)!==r.prototype&&n(i)&&a&&a(t,i),t}},"634a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container pt-5"},[r("div",{staticClass:"row justify-content-md-center m-auto"},t._l(t.cards,function(e){return r("Card",{key:e.id,staticClass:"col-auto col-xl-auto p-auto",attrs:{classContent:t.hover,paramPath:"/dragon/"+e.id,url:e.url}},[r("h3",{staticClass:"text-lightviolet"},[t._v("#"+t._s(e.id))]),r("router-link",{staticClass:"btn btn-outline-danger",attrs:{tag:"a",to:"/battle/"+e.id}},[t._v("\n        FIGHT\n      ")])],1)}),1),t.isShow?r("paginate",{attrs:{"page-count":t.totalRows,"page-range":t.perPage,"prev-text":t.prevText,"next-text":t.nextText,"container-class":"pagination"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e(),t.isNotDragons?r("None",{attrs:{title:t.noneTitle,btns:!1}},[r("p",{staticClass:"load text-lightviolet"},[t._v("You can add it yourself!")])]):t._e()],1)},a=[],i=(r("96cf"),r("3b8d")),o=r("f095"),s=r("efa8"),c=r("414a"),u=r("b592"),l=function(){return r.e("chunk-2d0cebeb").then(r.bind(null,"6182"))},f={name:"FightingGround",components:{Card:o["a"],None:l},mixins:[s["a"],c["a"],u["a"]],data:function(){return{storeKey:"FIGHTINGGROUND",hover:"v-red",noneTitle:"it's empty here!"}},computed:{cards:function(){var t=this.sortElements();return this.pageChanged(t)},isNotDragons:function(){return this.$store.getters[this.storeKey].elements.length<1}},mounted:function(){this.preStart()},methods:{preStart:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.cards.length>0)){t.next=2;break}return t.abrupt("return",null);case 2:return this.loaderShow(),t.next=5,this.getDragonsTofight();case 5:this.loaderHide();case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},h=f,g=r("2877"),p=Object(g["a"])(h,n,a,!1,null,null,null);e["default"]=p.exports},"8b97":function(t,e,r){var n=r("d3f4"),a=r("cb7c"),i=function(t,e){if(a(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,r){return i(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:i}},9093:function(t,e,r){var n=r("ce10"),a=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},"916e":function(t,e,r){"use strict";var n=r("b75e"),a=r.n(n);a.a},a481:function(t,e,r){"use strict";var n=r("cb7c"),a=r("4bf8"),i=r("9def"),o=r("4588"),s=r("0390"),c=r("5f1b"),u=Math.max,l=Math.min,f=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,g=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,function(t,e,r,d){return[function(n,a){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,a):r.call(String(i),n,a)},function(t,e){var a=d(r,t,this,e);if(a.done)return a.value;var f=n(t),h=String(this),g="function"===typeof e;g||(e=String(e));var b=f.global;if(b){var m=f.unicode;f.lastIndex=0}var y=[];while(1){var x=c(f,h);if(null===x)break;if(y.push(x),!b)break;var _=String(x[0]);""===_&&(f.lastIndex=s(h,i(f.lastIndex),m))}for(var N="",P=0,I=0;I<y.length;I++){x=y[I];for(var w=String(x[0]),S=u(l(o(x.index),h.length),0),C=[],E=1;E<x.length;E++)C.push(p(x[E]));var T=x.groups;if(g){var k=[w].concat(C,S,h);void 0!==T&&k.push(T);var $=String(e.apply(void 0,k))}else $=v(w,h,S,C,T,e);S>=P&&(N+=h.slice(P,S)+$,P=S+w.length)}return N+h.slice(P)}];function v(t,e,n,i,o,s){var c=n+t.length,u=i.length,l=g;return void 0!==o&&(o=a(o),l=h),r.call(s,l,function(r,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":s=o[a.slice(1,-1)];break;default:var l=+a;if(0===l)return r;if(l>u){var h=f(l/10);return 0===h?r:h<=u?void 0===i[h-1]?a.charAt(1):i[h-1]+a.charAt(1):r}s=i[l-1]}return void 0===s?"":s})}})},aa77:function(t,e,r){var n=r("5ca1"),a=r("be13"),i=r("79e5"),o=r("fdef"),s="["+o+"]",c="​",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),f=function(t,e,r){var a={},s=i(function(){return!!o[t]()||c[t]()!=c}),u=a[t]=s?e(h):o[t];r&&(a[r]=u),n(n.P+n.F*s,"String",a)},h=f.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},b75e:function(t,e,r){},c5f6:function(t,e,r){"use strict";var n=r("7726"),a=r("69a8"),i=r("2d95"),o=r("5dbc"),s=r("6a99"),c=r("79e5"),u=r("9093").f,l=r("11e9").f,f=r("86cc").f,h=r("aa77").trim,g="Number",p=n[g],d=p,v=p.prototype,b=i(r("2aeb")(v))==g,m="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():h(e,3);var r,n,a,i=e.charCodeAt(0);if(43===i||45===i){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+e}for(var o,c=e.slice(2),u=0,l=c.length;u<l;u++)if(o=c.charCodeAt(u),o<48||o>a)return NaN;return parseInt(c,n)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof p&&(b?c(function(){v.valueOf.call(r)}):i(r)!=g)?o(new d(y(e)),r,p):y(e)};for(var x,_=r("9e1e")?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;_.length>N;N++)a(d,x=_[N])&&!a(p,x)&&f(p,x,l(d,x));p.prototype=v,v.constructor=p,r("2aba")(n,g,p)}},efa8:function(t,e,r){"use strict";e["a"]={data:function(){return{currentPage:1,perPage:6,prevText:"<",nextText:">"}},mounted:function(){this.currentPage=this.$store.getters[this.storeKey].currentPage},computed:{totalRows:function(){var t=this.$store.getters[this.storeKey].elements,e=t.length;return e<1?null:(e/=this.perPage,e=Math.ceil(+e),e)},isShow:function(){var t=this.$store.getters[this.storeKey].elements;return t.length>this.perPage}},watch:{currentPage:function(){var t=this.$store.getters[this.storeKey];t.currentPage=this.currentPage,this.$store.commit(this.storeKey,t)}},methods:{pageChanged:function(t){var e=(this.currentPage-1)*this.perPage,r=this.currentPage*this.perPage;return t.slice(e,r)}}}},f095:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-content bg-violet",class:[t.classContent],on:{click:t.goTo}},[r("img",{staticClass:"card-img-top",attrs:{src:t.url,height:t.imgHeight,width:t.imgWidth,onerror:"this.onerror=null; this.src='https://res.cloudinary.com/dragonseth/image/upload/sub.png'"}})]),r("div",{staticClass:"card-body text-center p-2"},[t._t("default")],2)])},a=[],i=(r("a481"),r("c5f6"),{name:"Card",props:{classContent:{type:String,default:""},imgHeight:{type:Number,default:250},imgWidth:{type:Number,default:250},url:String,paramPath:String},methods:{goTo:function(){if(!this.paramPath)return null;this.$router.replace(this.paramPath)}}}),o=i,s=(r("916e"),r("2877")),c=Object(s["a"])(o,n,a,!1,null,null,null);e["a"]=c.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-58bb898e.454ccdb0.js.map
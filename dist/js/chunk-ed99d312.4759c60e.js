(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed99d312"],{"386b":function(t,e,s){var i=s("5ca1"),r=s("79e5"),n=s("be13"),a=/"/g,o=function(t,e,s,i){var r=String(n(t)),o="<"+e;return""!==s&&(o+=" "+s+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+r+"</"+e+">"};t.exports=function(t,e){var s={};s[t]=e(o),i(i.P+i.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",s)}},3890:function(t,e,s){"use strict";var i=s("cd1c"),r=s.n(i);r.a},"673e":function(t,e,s){"use strict";s("386b")("sub",function(t){return function(){return t(this,"sub","","")}})},"73e2":function(t,e,s){"use strict";var i=s("ab86");e["a"]=function(t,e){var s=9e11,r=100;return+t<=r?(t=Object(i["fromWei"])(t,"wei"),e="WEI"):+t<=s?(t=Object(i["fromWei"])(t,"gwei"),e="GWEI"):t=Object(i["fromWei"])(t,"ether"),e&&(t="".concat(t," ").concat(e)),t}},ac6a:function(t,e,s){for(var i=s("cadf"),r=s("0d58"),n=s("2aba"),a=s("7726"),o=s("32e9"),c=s("84f2"),u=s("2b4c"),l=u("iterator"),g=u("toStringTag"),m=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=r(d),v=0;v<f.length;v++){var b,h=f[v],C=d[h],p=a[h],y=p&&p.prototype;if(y&&(y[l]||o(y,l,m),y[g]||o(y,g,h),c[h]=m,C))for(b in i)y[b]||n(y,b,i[b],!0)}},cd1c:function(t,e,s){},d735:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container pt-5 px-lg-12"},[s("div",{staticClass:"row justify-content-md-center m-auto"},[t._m(0),s("div",{staticClass:"jumbotron col-lg"},[s("h2",{staticClass:"text-warning text-center"},[t._v("\n        "+t._s(t.values.eggsSold)+" "),s("span",{staticClass:"text-lightviolet"},[t._v("EGGS SOLD")])]),s("hr",{staticClass:"my-4 bg-lightviolet"}),s("div",{staticClass:"p-3"},[s("h3",{staticClass:"text-pink"},[t._v("Price")]),s("p",{staticClass:"lead text-indigo"},[t._v("\n          Price of last egg: \n          "),s("span",{staticClass:"text-ightindigo"},[t._v(t._s(t._f("fromWei")(t.last)))]),s("span",{staticClass:"text-warning"},[t._v(" "+t._s(t.$store.getters.CURRENCY))])]),s("p",{staticClass:"lead text-indigo"},[t._v("\n          Price of next egg:\n          "),s("span",{staticClass:"text-ightindigo"},[t._v(t._s(t._f("fromWei")(t.next)))]),s("span",{staticClass:"text-warning"},[t._v(" "+t._s(t.$store.getters.CURRENCY))])]),s("p",{staticClass:"text-indigo"},[t._v("\n          The cost of each new egg will be increased by: \n          "),s("span",{staticClass:"text-ightindigo"},[t._v(t._s(t._f("fromWei")(t.values.buyCost)))]),s("span",{staticClass:"text-warning"},[t._v(" "+t._s(t.$store.getters.CURRENCY))])])]),s("hr",{staticClass:"my-4 bg-lightviolet"}),s("div",{staticClass:"p-3"},[s("h3",{staticClass:"text-pink"},[t._v("\n          Current Price: \n          "),s("span",{staticClass:"text-ightindigo"},[t._v(t._s(t._f("fromWei")(t.values.currentPrice)))]),s("span",{staticClass:"text-warning"},[t._v(" "+t._s(t.$store.getters.CURRENCY))])]),s("Range",{attrs:{storeKey:t.storeKey}})],1),s("div",{staticClass:"row p-3"},[s("div",{staticClass:"form-group col-lg"},[s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.tokenAmount,expression:"tokenAmount",modifiers:{lazy:!0}}],staticClass:"form-control text-ightindigo p-1",attrs:{type:"number",max:t.maxEgg},domProps:{value:t.tokenAmount},on:{change:function(e){t.tokenAmount=e.target.value}}}),s("br"),s("small",{staticClass:"form-text text-muted"},[t._v("Number of eggs")])]),s("div",{staticClass:"col"}),s("div",{staticClass:"form-group col-lg"},[s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.priceAmount,expression:"priceAmount",modifiers:{lazy:!0}}],staticClass:"form-control text-ightindigo p-1",attrs:{step:t._f("fromWei")(t.values.currentPrice),type:"number"},domProps:{value:t.priceAmount},on:{change:function(e){t.priceAmount=e.target.value}}}),s("br"),s("small",{staticClass:"form-text text-muted"},[t._v("Price")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"}),s("button",{directives:[{name:"btn",rawName:"v-btn",value:"success col-lg btn-buy",expression:"'success col-lg btn-buy'"}],on:{click:function(e){return t.$store.dispatch("buyEgg")}}},[t._v("\n          BUY\n        ")]),s("div",{staticClass:"col"})]),s("SwitchMT",{attrs:{isCheck:t.values.isCheck,storeKey:t.storeKey,title:t.switchTitle}}),s("p",{staticClass:"text-indigo"},[t._v("\n        We will increase the amount of "+t._s(t.$store.getters.CURRENCY)+" you send by 0.0001 ETH to ensure your order in case if somebody will buy an egg before you do. All unused "+t._s(t.$store.getters.CURRENCY)+" will return to your wallet.\n      ")])],1)])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col eggglow"},[s("div",{staticClass:"glow"},[s("img",{staticClass:"rounded float-left",attrs:{src:"/img/buy-egg-q.png"}})])])}],n=(s("ac6a"),s("673e"),s("6b54"),s("ab86")),a=(s("96cf"),s("3b8d")),o=s("9e8b"),c=s("d107"),u={mixins:[o["a"]],computed:{crowdsale:function(){var t=this.$store.getters.WEB3;return new c["a"](t)}},methods:{commonUpdate:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.getters.BUYFORM,t.next=3,this.crowdsale.crowdSaleDragonPrice();case 3:return e.currentPrice=t.sent,t.next=6,this.crowdsale.priceChanger();case 6:return e.buyCost=t.sent,t.next=9,this.dragonseth.totalDragons();case 9:return e.eggsSold=t.sent,e.currentPrice=e.currentPrice.toString(),e.buyCost=e.buyCost.toString(),this.$store.commit("BUYFORM",e),t.abrupt("return",e);case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},l=s("73e2"),g=s("8111"),m=s("414a"),d=function(){return s.e("chunk-0c81409c").then(s.bind(null,"680f"))},f=function(){return s.e("chunk-0546630a").then(s.bind(null,"f01f"))},v={name:"BuyEgg",components:{Range:d,SwitchMT:f},mixins:[u,m["a"]],filters:{fromWei:l["a"]},directives:{btn:g["a"]},data:function(){return{switchTitle:"Guarantee my order.",storeKey:"BUYFORM",maxEgg:15}},computed:{values:function(){return this.$store.getters[this.storeKey]},last:function(){var t=this.$store.getters[this.storeKey],e=Object(n["toBigNumber"])(t.currentPrice),s=Object(n["toBigNumber"])(t.buyCost);return e.sub(s).toString()},next:function(){var t=this.$store.getters[this.storeKey],e=Object(n["toBigNumber"])(t.currentPrice),s=Object(n["toBigNumber"])(t.buyCost);return e.add(s).toString()},tokenAmount:{get:function(){return this.values.range},set:function(t){var e=this.values;t=(+t).toFixed(),t=+t,t>this.maxEgg?t=this.maxEgg:t<1&&(t=1),e.range=t,this.$store.commit(this.storeKey,e)}},priceAmount:{get:function(){var t,e=this.values,s=Object(n["toBigNumber"])(e.buyCost),i=Object(n["toBigNumber"])(e.currentPrice);return e.isCheck&&(i=i.add(s)),t=i.mul(e.range),Object(l["a"])(t)},set:function(t){var e,s=Object(n["toBigNumber"])(this.values.currentPrice);t=Object(n["toWei"])(t),t=Object(n["toBigNumber"])(t),e=t.div(s),e=e.toString(),this.tokenAmount=e}}},mounted:function(){this.commonUpdate()}},b=v,h=(s("3890"),s("2877")),C=Object(h["a"])(b,i,r,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-ed99d312.4759c60e.js.map
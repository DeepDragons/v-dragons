(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02a037a6"],{"6c08":function(t,e,a){},abc9:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[t.iShow?a("div",{staticClass:"row"},[a("div",{staticClass:"btn-group col-lg"},[a("button",{directives:[{name:"btn",rawName:"v-btn"}],on:{click:t.isGiftModal}},[t._v("GIFT")]),t.isEgg?t._e():a("button",{directives:[{name:"btn",rawName:"v-btn"}],on:{click:t.toFight}},[t._v("TO FIGHT")]),a("button",{directives:[{name:"btn",rawName:"v-btn"}],on:{click:t.isSellModal}},[t._v("TO SELL")]),t.isEgg||t.values.currentAction!=t.actions[0]?t._e():a("router-link",{staticClass:"btn btn-outline-success",attrs:{tag:"a",to:"/lab/"+t.id}},[t._v(" GENE LAB ")]),t.isEgg?t._e():a("button",{directives:[{name:"btn",rawName:"v-btn",value:"danger",expression:"'danger'"}],on:{click:t.isShowSuicide}},[t._v("SUICIDE")]),t.isEgg?a("button",{directives:[{name:"btn",rawName:"v-btn",value:"success",expression:"'success'"}],on:{click:t.birth}},[t._v("birth")]):t._e()],1)]):t._e(),a("div",{staticClass:"row"},[t.values.isOwner||t.values.currentAction!=t.actions[6]?t._e():a("button",{directives:[{name:"btn",rawName:"v-btn"}],on:{click:function(e){return t.buyFromMarket(t.id)}}},[t._v(" BUY "+t._s(t._f("fromWei")(t.values.price,t.$store.getters.CURRENCY))+" ")]),t.values.isOwner&&t.values.currentAction==t.actions[99]?a("button",{directives:[{name:"btn",rawName:"v-btn",value:t.warning,expression:"warning"}],on:{click:t.wakeUp}},[t._v(" WAKE UP ")]):t._e(),t.values.isOwner&&t.values.currentAction==t.actions[1]?a("button",{directives:[{name:"btn",rawName:"v-btn",value:t.warning,expression:"warning"}],on:{click:t.returnFight}},[t._v(" RETURN ")]):t._e(),t.values.isOwner&&t.values.currentAction==t.actions[6]?a("button",{directives:[{name:"btn",rawName:"v-btn",value:t.warning,expression:"warning"}],on:{click:t.returnMarket}},[t._v(" RETURN ")]):t._e(),t.isEgg||t.values.currentAction!=t.actions[1]?t._e():a("router-link",{staticClass:"btn btn-outline-danger",attrs:{tag:"a",to:"/battle/"+t.id}},[t._v(" FIGHT WITH ")])],1)]),a("b-modal",{attrs:{title:t.gift.title,"header-bg-variant":t.headerBgVariant,"header-text-variant":t.headerTextVariant,"body-bg-variant":t.bodyBgVariant,"footer-bg-variant":t.footerBgVariant},model:{value:t.gift.show,callback:function(e){t.$set(t.gift,"show",e)},expression:"gift.show"}},[a("div",{staticClass:"form-group col-lg"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gift.giftAddress,expression:"gift.giftAddress"}],staticClass:"indigo text-ightindigo w-100 p-2",attrs:{type:"text"},domProps:{value:t.gift.giftAddress},on:{input:function(e){e.target.composing||t.$set(t.gift,"giftAddress",e.target.value)}}}),a("br"),a("small",{staticClass:"form-text text-muted"},[t._v(" "+t._s(t.$store.getters.CURRENCY)+" address ")])]),a("div",{staticClass:"w-100 justify-content-md-center",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{directives:[{name:"btn",rawName:"v-btn",value:"info col-xs-12 p-2",expression:"'info col-xs-12 p-2'"}],on:{click:t.makeGift}},[t._v("GIFT")])])]),a("b-modal",{attrs:{title:t.sell.title,"header-bg-variant":t.headerBgVariant,"header-text-variant":t.headerTextVariant,"body-bg-variant":t.bodyBgVariant,"footer-bg-variant":t.footerBgVariant},model:{value:t.sell.show,callback:function(e){t.$set(t.sell,"show",e)},expression:"sell.show"}},[a("p",{staticClass:"lead text-indigo col-lg"},[t._v(" Commission for the sale will be "),a("span",{staticClass:"text-ightindigo"},[t._v(t._s(t.sell.commission)+"%")])]),a("div",{staticClass:"form-group col-lg"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.sell.price,expression:"sell.price"}],staticClass:"text-ightindigo w-100 p-2 indigo",attrs:{type:"number"},domProps:{value:t.sell.price},on:{input:function(e){e.target.composing||t.$set(t.sell,"price",e.target.value)}}}),a("br"),a("small",{staticClass:"form-text text-muted"},[t._v(" "+t._s(t.$store.getters.CURRENCY)+" amount ")])]),a("div",{staticClass:"w-100 justify-content-md-center",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{directives:[{name:"btn",rawName:"v-btn",value:"info col-xs-12 p-2",expression:"'info col-xs-12 p-2'"}],on:{click:t.makeSell}},[t._v("TRADE")])])]),a("b-modal",{attrs:{title:t.suicide.title,"header-bg-variant":t.headerBgVariant,"header-text-variant":t.headerTextVariant,"body-bg-variant":t.bodyBgVariant,"footer-bg-variant":t.footerBgVariant},model:{value:t.suicide.show,callback:function(e){t.$set(t.suicide,"show",e)},expression:"suicide.show"}},[a("p",{staticClass:"lead text-danger col-lg"},[t._v(" Are you sure you want to kill a dragon? ")]),a("div",{staticClass:"w-100 justify-content-md-center",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{directives:[{name:"btn",rawName:"v-btn",value:"danger col-xs-12 p-2",expression:"'danger col-xs-12 p-2'"}],on:{click:t.makeSuicide}},[t._v("MAKE IT")])])])],1)},s=[],n=(a("d3b7"),a("ddb0"),a("baab")),r=a("414a"),o=a("8111"),l=a("73e2"),c={name:"ActionPanel",mixins:[n["a"],r["a"]],directives:{btn:o["a"]},filters:{fromWei:l["a"]},props:{keyStore:String},data:function(){return{warning:"warning"}},computed:{values:function(){return this.$store.getters[this.keyStore]},iShow:function(){return this.values.isOwner&&this.values.currentAction==this.actions[0]},isEgg:function(){return 1==this.values.stage}}},u=c,d=(a("d4a2"),a("2877")),v=Object(d["a"])(u,i,s,!1,null,null,null);e["default"]=v.exports},d4a2:function(t,e,a){"use strict";var i=a("6c08"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-02a037a6.95beea96.js.map
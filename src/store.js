import Vue from 'vue'
import Vuex from 'vuex'

import {
  isAddress, enable, isNet
} from './mixins/ETH/web3'
import Crowdsale from './mixins/ETH/crowdsale'
import MarketPlace from './mixins/ETH/marketPlace'
import Dragonseth from './mixins/ETH/dragonseth'


var CONFIG = window.config;

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buyForm: {
      range: 2,
      currentPrice: CONFIG.currentPrice,
      eggsSold: CONFIG.eggsSold,
      buyCost: CONFIG.buyCost,
      isCheck: true
    },
    myDragon: {
      currentPage: 1,
      elements: [],
      totalItems: 0
    },
    market: {
      currentPage: 1,
      elements: [],
      totalItems: 0
    },
    fightingGround: {
      currentPage: 1
    },
    cemetery: {
      currentPage: 1
    },
    dragon: {
      
    },
    mutagen: 0,
    currentAddress: null,
    MetaMask: {
      netID: null,
      currentAddress: '',
      msg: ''
    }
  },
  actions: {
    isAddress, enable, isNet,
    buyEgg: ({ state, getters }) => {
      let payload = state.buyForm;
      let crowdsale = new Crowdsale(getters.WEB3);

      crowdsale.buy(
        payload.range,
        payload.isCheck
      );
    },
    async buyFromMarket({ getters }, { tokenId }) {
      let ownersPrice;
      let marketPlace = new MarketPlace(getters.WEB3);
      let priceForToken = await marketPlace.dragonPrices(tokenId);
      let ownersPercent = await marketPlace.ownersPercent();

      ownersPercent = ownersPercent.div(10);
      ownersPrice = priceForToken.mul(ownersPercent).div(100);
      ownersPrice = ownersPrice.toFixed();
      priceForToken = priceForToken.add(ownersPrice).toString();

      await marketPlace.buyDragon(tokenId, priceForToken);
    },
    async toSell({ getters }, { tokenId, dragonPrice }) {
      let dragonseth = new Dragonseth(getters.WEB3);
      dragonseth.add2MarketPlace(tokenId, dragonPrice);
    }
  },
  getters: {
    BUYFORM: state => state.buyForm,
    MYDRAGON: state => state.myDragon,
    MARKET: state => state.market,
    FIGHTINGGROUND: state => state.fightingGround,
    CEMETERY: state => state.cemetery,
    MUTAGEN: state => state.mutagen,
    CURRENTADDRESS: state => state.currentAddress,
    METAMASK: state => state.MetaMask,
    CLOUD: () => CONFIG.cloud,
    CURRENCY: () => CONFIG.currency,
    WEB3: () => {
      return new window.Web3(
        new window.Web3.providers.HttpProvider(CONFIG.providers)
      );
    }
  },
  mutations: {
    BUYFORM: (state, payload) => state.buyForm = payload,
    MYDRAGON: (state, payload) => state.myDragon = payload,
    MARKET: (state, payload) => state.market = payload,
    FIGHTINGGROUND: (state, payload) => state.fightingGround = payload,
    CEMETERY: (state, payload) => state.cemetery = payload,
    MUTAGEN: (state, payload) => state.mutagen = payload,
    CURRENTADDRESS: (state, payload) => state.currentAddress = payload,
    METAMASK: (state, payload) => state.MetaMask = payload
  }
})

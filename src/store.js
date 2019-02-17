import Vue from 'vue'
import Vuex from 'vuex'

import {
  isAddress, enable, isNet,
  getBlockNumber
} from './mixins/ETH/web3'
import Crowdsale from './mixins/ETH/crowdsale'
import MarketPlace from './mixins/ETH/marketPlace'
import Dragonseth from './mixins/ETH/dragonseth'
import FightPlace from './mixins/ETH/fightPlace'


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
      totalItems: 0,
      filter: {
        selected: 'all',
        options: [ 'all', 'dragon', 'egg' ],
        filterById: null
      }
    },
    market: {
      currentPage: 1,
      elements: [],
      totalItems: 0,
      filter: {
        selected: 'all',
        options: [ 'all', 'dragon', 'egg' ],
        filterById: null
      }
    },
    fightingGround: {
      currentPage: 1,
      elements: [],
      totalItems: 0,
      filter: {
        selected: null,
        filterById: null
      }
    },
    dragon: {
      dragonName: 'no name',
      isOwner: false,
      addressOwner: '',
      stage: null,
      nextBlock2Action: null,
      currentAction: '',
      price: 0,
      gensFight: [],
      tokenId: null
    },
    battle: {
      items: [],
      filter: {
        selected: null,
        filterById: null
      }
    },
    mutagen: 0,
    contentShow: true,
    MetaMask: {
      netID: null,
      currentBlockNUmber: null,
      currentAddress: '',
      msg: ''
    }
  },
  actions: {
    isAddress, enable, isNet,
    async blockNumberUpdate({ getters, state }, { number }) {
      let web3 = getters.WEB3;

      if (number) {
        state.MetaMask.currentBlockNUmber = number;
      } else {
        state.MetaMask.currentBlockNUmber = await getBlockNumber(web3);
      }

      return state.MetaMask.currentBlockNUmber;
    },
    buyEgg({ state, getters }) {
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
    },
    async addDragonName({ getters }, { tokenId, name }) {
      let dragonseth = new Dragonseth(getters.WEB3);
      let hash = await dragonseth.addDragonName(tokenId, name);
      console.log(hash);
    },
    async birth({ state, getters, commit }, { tokenId }) {
      let payload = state.dragon;
      let dragonseth = new Dragonseth(getters.WEB3);
      let hash = await dragonseth.birthDragon(tokenId);
      console.log(hash);
      payload.stage = 2;
      commit('DRAGON', payload);
    },
    async transfer({ state, getters, commit }, { to, tokenId }) {
      let payload = state.dragon;
      let { currentAddress } = state.MetaMask;
      let dragonseth = new Dragonseth(getters.WEB3);
      let hash = await dragonseth.safeTransferFrom(
        currentAddress, to, tokenId
      );
      console.log(hash);
      payload.addressOwner = to;
      commit('DRAGON', payload); 
    },
    async killDragon({ getters }, { tokenId }) {
      let dragonseth = new Dragonseth(getters.WEB3);
      let hash = await dragonseth.killDragon(tokenId);
      console.log(hash);
    },
    async addToFight({ getters }, { tokenId }) {
      let fightPlace = new FightPlace(getters.WEB3);
      let price = await fightPlace.priceToAdd();
      fightPlace.addToFightPlace(tokenId, price);
    },
    async fightWithDragon({ getters }, { youId, oponentId }) {
      let fightPlace = new FightPlace(getters.WEB3);
      let price = await fightPlace.priceToFight();
      fightPlace.fightWithDragon(youId, oponentId, price);
    },
    async wakeUp({ getters, state }) {
      let { nextBlock2Action, tokenId } = getters.DRAGON;
      let dragonseth = new Dragonseth(getters.WEB3);
      let price = await dragonseth.priceDecraseTime2Action();
      let currentBlockNUmber = await getBlockNumber(getters.WEB3);

      state.MetaMask.currentBlockNUmber = currentBlockNUmber;

      if (nextBlock2Action < currentBlockNUmber) {
        throw new Error('nexBN < currentBN');
      }

      price = price.mul(nextBlock2Action - currentBlockNUmber);
      price = price.toString();
    
      let hash = await dragonseth.decraseTimeToAction(
        tokenId, price
      );
      console.log(hash);
    },
    async delFromFightPlace({ getters, commit }) {
      let dragon = getters.DRAGON;
      let fightPlace = new FightPlace(getters.WEB3);
      let hash = await fightPlace.delFromFightPlace(dragon.tokenId);
      dragon.currentAction = 'free';
      commit('DRAGON', dragon);
      console.log(hash);
    },
    async delFromFixMarketPlace({ getters, commit }) {
      let dragon = getters.DRAGON;
      let marketPlace = new MarketPlace(getters.WEB3);
      let hash = await marketPlace.delFromFixMarketPlace(dragon.tokenId);
      dragon.currentAction = 'free';
      commit('DRAGON', dragon);
      console.log(hash);
    }
  },
  getters: {
    BUYFORM: state => state.buyForm,
    MYDRAGON: state => state.myDragon,
    MARKET: state => state.market,
    FIGHTINGGROUND: state => state.fightingGround,
    DRAGON: state => state.dragon,
    BATTLE: state => state.battle,
    MUTAGEN: state => state.mutagen,
    CURRENTADDRESS: state => state.currentAddress,
    METAMASK: state => state.MetaMask,
    CONTENTSHOW: state => state.contentShow,
    CLOUD: () => CONFIG.cloud,
    BLOCKEXPLORERURL: () => CONFIG.blockExplorer,
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
    DRAGON: (state, payload) => state.dragon = payload,
    MUTAGEN: (state, payload) => state.mutagen = payload,
    CURRENTADDRESS: (state, payload) => state.currentAddress = payload,
    METAMASK: (state, payload) => state.MetaMask = payload,
    CONTENTSHOW: (state, payload) => state.contentShow = payload,
    BATTLE: (state, payload) => state.contentShow = payload
  }
})

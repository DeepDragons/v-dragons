import Vue from 'vue'
import Vuex from 'vuex'
import CONFIG from './mixins/config'

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
      currentPage: 1
    },
    market: {
      currentPage: 1
    },
    fightingGround: {
      currentPage: 1
    },
    mutagen: 32,
    currentAddress: '0x68a8191add50d107BB8b25f3Feea172c35Cf2685'
  },
  actions: {
    
  },
  getters: {
    BUYFORM: state => {
      return state.buyForm;
    },
    MYDRAGON: state => {
      return state.myDragon;
    },
    MARKET: state => {
      return state.market;
    },
    FIGHTINGGROUND: state => {
      return state.fightingGround;
    },
    MUTAGEN: state => {
      return state.mutagen;
    },
    CURRENTADDRESS: state => {
      return state.currentAddress;
    },
    CLOUD: () => CONFIG.cloud,
    CURRENCY: () => CONFIG.currency
  },
  mutations: {
    BUYFORM: (state, payload) => {
      state.buyForm = payload;
    },
    MYDRAGON: (state, payload) => {
      state.myDragon = payload;
    },
    MARKET: (state, payload) => {
      state.market = payload;
    },
    FIGHTINGGROUND: (state, payload) => {
      state.fightingGround = payload;
    },
    MUTAGEN: (state, payload) => {
      state.mutagen = payload;
    },
    CURRENTADDRESS: (state, payload) => {
      state.currentAddress = payload;
    }
  }
})

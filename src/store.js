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
    cemetery: {
      currentPage: 1
    },
    mutagen: 32,
    currentAddress: '0x68a8191add50d107BB8b25f3Feea172c35Cf2685',
    MetaMask: {
      netID: CONFIG.netID,
      currentAddress: '',
      access: false,
      msg: ''
    }
  },
  actions: {
    
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
      if (window.ethereum && window.ethereum.selectedAddress) {
        return window.ethereum;
      } else {
        return new window.Web3(
          new window.Web3.providers.HttpProvider(CONFIG.providers)
        );
      }
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

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buyForm: {
      range: 2,
      currentPrice: '444434343',
      eggsSold: '33',
      buyCost: '3122321',
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
    }
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
    }
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
    }
  }
})

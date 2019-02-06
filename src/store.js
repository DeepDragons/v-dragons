import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buyForm: {
      range: 2,
      currentPrice: '444434343',
      eggsSold: '33',
      buyCost: '3122321'
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    BUYFORM: state => {
      return state.buyForm;
    }
  },
  mutations: {
    BUYFORM: (state, payload) => {
      state.buyForm = payload;
    }
  }
})

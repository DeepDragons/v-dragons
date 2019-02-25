import Vue from 'vue'
import Vuex from 'vuex'

import {
  isAddress, enable, isNet,
  blockNumberUpdate
} from './mixins/ETH/web3'

import {
  toSell, addDragonName,
  birth, transfer, killDragon,
  wakeUp
} from './actions/dragonseth'

import {
  addToFight, fightWithDragon,
  delFromFightPlace
} from './actions/fightPlace'

import {
  buyFromMarket,
  delFromFixMarketPlace
} from './actions/marketPlace'

import { buyEgg } from './actions/crowdsale'
import { genToMax, genRand } from './actions/genLab'


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
      tokenId: null,
      stat: null
    },
    battle: {
      items: [],
      filter: {
        selected: null,
        filterById: null
      }
    },
    mutagen: 0,
    lab: {
      toMaxPrice: null,
      forMutagenPrice: null,
      minMutagen: null
    },
    contentShow: true,
    MetaMask: {
      netID: null,
      currentBlockNUmber: null,
      currentAddress: '',
      msg: '',
      modal: {
        wrongNetId: false
      }
    }
  },
  actions: {
    // web3 work //
    isAddress,
    enable,
    isNet,
    blockNumberUpdate,
    // web3 work //

    // main dragonETH contract //
    toSell,
    addDragonName,
    birth,
    transfer,
    killDragon,
    wakeUp,
    // main dragonETH contract //

    // crowdsale contract // 
    buyEgg,
    // crowdsale contract // 

    // marketPlace contract //
    buyFromMarket,
    delFromFixMarketPlace,
    // marketPlace contract //

    // fightPlace contract //
    addToFight,
    fightWithDragon,
    delFromFightPlace,
    // fightPlace contract //

    genToMax,
    genRand
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
    LAB: state => state.lab,
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
    BATTLE: (state, payload) => state.contentShow = payload,
    LAB: (state, payload) => state.lab = payload
  }
})

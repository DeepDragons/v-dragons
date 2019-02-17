import Dragonseth from '../dragonseth'
import MarketPlaceMixin from './marketPlace'
import Stat from '../stat'
import DefUtils from '../../utils'
import Proxy from '../proxy'


export default {
  mixins: [MarketPlaceMixin, DefUtils],
  computed: {
    dragonseth() {
      let web3 = this.$store.getters.WEB3;
      return new Dragonseth(web3);
    },
    dragonStat() {
      let web3 = this.$store.getters.WEB3;
      return new Stat(web3);
    },
    proxy() {
      let web3 = this.$store.getters.WEB3;
      return new Proxy(web3);
    }
  },
  methods: {
    async tokensOf() {
      let dragonsIds;
      let object;
      let payload = this.$store.getters.MYDRAGON;
      let metaMask = this.$store.getters.METAMASK;
      
      dragonsIds = await this.proxy.tokensOf(metaMask.currentAddress);
      object = await this.proxy.getDragons(dragonsIds);
      payload.elements = object.result;
      metaMask.currentBlockNUmber = object.blockNumber;

      this.$store.commit('METAMASK', metaMask);
      this.$store.commit('MYDRAGON', payload);

      return payload.elements;
    },
    async dragonInfo(_dragonID) {
      let metaMask = this.$store.getters.METAMASK;
      let dragonName = await this.dragonseth.dragonName(_dragonID);
      let object = await this.proxy.getDragons([_dragonID]);

      metaMask.currentBlockNUmber = object.blockNumber;
      
      this.$store.commit('METAMASK', metaMask);
      
      object = object.result[0];

      return {
        blockNumber: metaMask.currentBlockNUmber,
        dragonName: dragonName,
        owner: object.owner,
        lastActionDragonID: object.lastActionDragonID,
        lastActionID: object.lastActionID,
        currentAction: object.currentAction,
        stage: object.stage,
        nextBlock2Action: object.nextBlock2Action,
        gens: {
          // faceGenes: this.genParse(dragonInfo[0], 65),
          fightsGenes: this.genParse(object.gen2, 62)
        },
        stat: {
          fightLose: object.fightLose,
          fightToDeathWin: object.fightToDeathWin,
          fightWin: object.fightWin,
          genLabFace: object.genLabFace,
          genLabFight: object.genLabFight,
          mutagenFace: object.mutagenFace,
          mutagenFight: object.mutagenFight
        }
      };
    },
    async getAllTheTokenData(_DragonId) {
      let dragonData;
      let payload = this.$store.getters.DRAGON;

      try {        
        dragonData = await this.dragonInfo(_DragonId);
      } catch (err) {
        window.location.reload();
        return null;
      }

      payload.tokenId = _DragonId;
      payload.stage = dragonData.stage;
      payload.nextBlock2Action = dragonData.nextBlock2Action;
      payload.currentAction = this.actions[+dragonData.currentAction];
      payload.gensFight = dragonData.gens.fightsGenes;
      payload.addressOwner = dragonData.owner;
      payload.dragonName = dragonData.dragonName;
      payload.stat = dragonData.stat;

      if (+dragonData.blockNumber < +payload.nextBlock2Action) {
        payload.currentAction = this.actions[99];   
      } else {
        // payload.currentAction = this.actions[+currentAction];
      }

      this.$store.commit('DRAGON', payload);
      this.isOwnerToken();

      return payload;
    },
    async isOwnerToken() {
      let payload = this.$store.getters.DRAGON;
      let { currentAddress } = this.$store.getters.METAMASK;

      if (payload.addressOwner == this.marketPlace.address) {
        payload.addressOwner = await this.marketPlace.dragonsOwner(payload.tokenId);
        payload.price = await this.marketPlace.dragonPrices(payload.tokenId);
      }

      if (payload.addressOwner == currentAddress) {
        payload.isOwner = true;
      } else {
        payload.isOwner = false;
      }

      this.$store.commit('DRAGON', payload);
    }
  }
}

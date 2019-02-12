import dragonseth from '../dragonseth'
import MarketPlaceMixin from './marketPlace'
import DefUtils from '../../utils'


export default {
  mixins: [MarketPlaceMixin, DefUtils],
  computed: {
    dragonseth() {
      let web3 = this.$store.getters.WEB3;
      return new dragonseth(web3);
    }
  },
  methods: {
    async tokensOf() {
      let dragonsIds;
      let payload = this.$store.getters.MYDRAGON;
      let { currentAddress } = this.$store.getters.METAMASK;
      
      dragonsIds = await this.dragonseth.tokensOf(currentAddress);
      payload.elements = await this.marketPlace.getFewDragons(dragonsIds);

      this.$store.commit('MYDRAGON', payload);

      return payload.elements;
    },
    async dragonInfo(_dragonID) {
      let dragonName = await this.dragonseth.dragonName(_dragonID);
      let owner = await this.dragonseth.ownerOf(_dragonID);
      let dragonInfo = await this.dragonseth.dragons(_dragonID);

      return {
        dragonName: dragonName,
        owner: owner,
        gens: {
          faceGenes: this.genParse(dragonInfo[0], 65),
          fightsGenes: this.genParse(dragonInfo[3], 62),
          currentAction: this.actions[dragonInfo[2]],
          stage: dragonInfo[1].toString(),
          nextBlock2Action: dragonInfo[4].toString()
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
      payload.stage = dragonData.gens.stage;
      payload.nextBlock2Action = dragonData.gens.nextBlock2Action;
      payload.currentAction = dragonData.gens.currentAction;
      payload.gensFight = dragonData.gens.fightsGenes;
      payload.addressOwner = dragonData.owner;
      payload.dragonName = dragonData.dragonName;

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

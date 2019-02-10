import dragonseth from '../dragonseth'
import MarketPlaceMixin from './marketPlace'


export default {
  mixins: [MarketPlaceMixin],
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
    }
  }
}

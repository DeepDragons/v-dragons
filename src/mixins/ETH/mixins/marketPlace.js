import MarketPlace from '../marketPlace'


export default {
  computed: {
    marketPlace() {
      let web3 = this.$store.getters.WEB3;
      return new MarketPlace(web3);
    }
  },
  methods: {
    async getDragonsToSale() {
      let totalDragonsToSale;
      let totalDragonIds;
      let payload = this.$store.getters.MARKET;
      
      totalDragonsToSale = await this.marketPlace.totalDragonsToSale();

      if (totalDragonsToSale < 1) return [];

      totalDragonIds = await this.marketPlace.getSlicedDragonsSale(0, totalDragonsToSale++);
      payload.elements = await this.marketPlace.getFewDragons(totalDragonIds);

      this.$store.commit('MARKET', payload);

      return payload.elements;
    }
  }
}

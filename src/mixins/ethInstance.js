import Crowdsale from './ETH/crowdsale'


export default {
  data() {
    return {}
  },
  computed: {
    crowdsale() {
      let web3 = this.$store.getters.WEB3;
      return new Crowdsale(web3);
    }
  },
  methods: {
    async commonUpdate() {
      let payload = this.$store.getters.BUYFORM;
      payload.currentPrice = await this.crowdsale.crowdSaleDragonPrice();
      payload.buyCost = await this.crowdsale.priceChanger();
      payload.currentPrice = payload.currentPrice.toString();
      payload.buyCost = payload.buyCost.toString();
      this.$store.commit('BUYFORM', payload);
    }
  }
}

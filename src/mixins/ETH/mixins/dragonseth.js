import dragonseth from '../dragonseth'


export default {
  computed: {
    dragonseth() {
      let web3 = this.$store.getters.WEB3;
      return new dragonseth(web3);
    }
  },
  methods: {
    async tokensOf() {
      let amount;
      let payload = this.$store.getters.MYDRAGON;
      let { currentAddress } = this.$store.getters.METAMASK;
      
      amount = await this.dragonseth.tokensOf(currentAddress);
      amount = amount.map(id => id.toString());
      payload.elements = amount;

      this.$store.commit('MYDRAGON', payload);

      return amount;
    }
  }
}

import GenLab from '../genlab'


export default {
  computed: {
    genLab() {
      let web3 = this.$store.getters.WEB3;
      return new GenLab(web3);
    }
  },
  methods: {
    async genLabCommonData() {
      let payload = this.$store.getters.LAB;
      let data = await this.genLab.returnPrices();

      payload.toMaxPrice = data[2].toString();
      payload.forMutagenPrice = data[1].toString();
      payload.minMutagen = data[0].toString();

      this.$store.commit('LAB', payload);

      return payload;
    }
  }
}

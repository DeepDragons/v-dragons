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
      let data = await this.genLab.returnPrices;
      console.log(data);
    }
  }
}

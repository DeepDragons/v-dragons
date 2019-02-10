import MarketPlace from '../marketPlace'


export default {
  computed: {
    marketPlace() {
      let web3 = this.$store.getters.WEB3;
      return new MarketPlace(web3);
    }
  },
  methods: { }
}

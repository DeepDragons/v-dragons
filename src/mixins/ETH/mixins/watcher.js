import DragonMixin from './dragonseth'
import Mutagen from '../mutagen'
import CODE from '../code'


export default {
  mixins: [DragonMixin],
  computed: {
    mutagen() {
      let web3 = this.$store.getters.WEB3;
      return new Mutagen(web3);
    }
  },
  methods: {
    async updateBalanceMutagen() {
      let balance;
      let { currentAddress } = this.$store.getters.METAMASK;
      
      if (!currentAddress) return null;

      balance = await this.mutagen.balanceOf(currentAddress);
      balance = balance.toString();

      this.$store.commit('MUTAGEN', balance);
    },
    goWachAddress() {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'METAMASK' && state.MetaMask.msg === CODE[3]) {
          this.updateBalanceMutagen();
          this.tokensOf();
        }
      });
    }
  }
}

/* eslint-disable */
import DragonMixin from './dragonseth'
import FightPlace from '../fightPlace'
import MarketPlaceMixin from './marketPlace'
import Mutagen from '../mutagen'
import CODE from '../code'


export default {
  mixins: [DragonMixin, MarketPlaceMixin],
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
          this.isOwnerToken();
        }
      });
    },
    eventsRun() {
      let metaMaskt = this.$store.getters.METAMASK;
      let web3 = new Web3(ethereum);
      let fightPlace = new FightPlace(web3);
      // let address = metaMaskt.currentAddress;

      fightPlace.events.watch((err, event) => {
        /**
         * @addToFightPlace: 0x3;
         * @fightFP: fightWithDragon;
         */
        
        metaMaskt.currentBlockNUmber = event.blockNumber;
        
        // let fightFP = event;
        // fightFP.args._loseerId = fightFP.args._loseerId.toString();
        // fightFP.args._winnerId = fightFP.args._winnerId.toString();
        console.log(event);
        this.updateBalanceMutagen();

        this.$store.commit('METAMASK', metaMaskt);
      });
    }
  }
}

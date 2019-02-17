/* eslint-disable */
import DragonMixin from './dragonseth'
import FightPlace from '../fightPlace'
import MarketPlaceMixin from './marketPlace'
import FightPlaceMixin from './fightPlace'
import Mutagen from '../mutagen'
import CODE from '../code'
import { getBlockNumber } from '../web3'


export default {
  mixins: [DragonMixin, MarketPlaceMixin, FightPlaceMixin],
  methods: {
    async updateBalanceMutagen() {
      let web3 = this.$store.getters.WEB3;
      let mutagen = new Mutagen(web3);
      let balance;
      let { currentAddress } = this.$store.getters.METAMASK;
      
      if (!currentAddress) return null;

      balance = await mutagen.balanceOf(currentAddress);
      balance = balance.toString();

      this.$store.commit('MUTAGEN', balance);
    },
    goWachAddress() {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'METAMASK') {
          if (state.MetaMask.msg === CODE[3]) {
            this.updateBalanceMutagen();
            this.tokensOf();
            this.isOwnerToken();
          }
          if (state.MetaMask.msg === CODE[6]) {
            this.$refs.metaMask.show();
          } else if (state.MetaMask.msg === CODE[5]) {
            this.$refs.metaMask.hide();
          }
        }
      });
    },
    async eventsRun() {
      let web3 = new Web3(ethereum);
      let fightPlace = new FightPlace(web3);
      let mutagen = new Mutagen(web3);
      let { currentBlockNUmber } = this.$store.getters.METAMASK;

      if (currentBlockNUmber <= 0) {
        currentBlockNUmber = await getBlockNumber(web3);
        currentBlockNUmber -= 50;
      }

      fightPlace.events({ fromBlock: currentBlockNUmber }).watch((err, event) => {
        /**
         * @fightFP: fightWithDragon;
         * @AddDragonFP: add to fightplace.
         * @RemoveDragonFP: remove from fightPlace.
         */
        let element;
        let metaMaskt = this.$store.getters.METAMASK;

        switch (event.event) {
          case 'AddDragonFP':
            element = this.AddElementById(event.args._tokenId);
            this.dragonFightListAdd(element);
            break;

          case 'RemoveDragonFP':
            element = this.AddElementById(event.args._tokenId);
            this.dragonFightListRm(element);
            break;
          
          case 'FightFP':
            this.battleHistory(event);
            element = this.AddElementById(event.args._loseerId);
            this.dragonFightListRm(element);
            element = this.AddElementById(event.args._winnerId);
            this.dragonFightListRm(element);
            break;

          default: break;
        }
        
        metaMaskt.currentBlockNUmber = event.blockNumber;
        this.$store.commit('METAMASK', metaMaskt);
      });

      mutagen.mutagen.Transfer().watch((err, event) => {
        if (err) return null;
        let metaMaskt = this.$store.getters.METAMASK;

        if (+metaMaskt.currentBlockNUmber == +event.blockNumber) {
          return null;
        } else {
          metaMaskt.currentBlockNUmber = event.blockNumber;
        }
        if (metaMaskt.currentAddress == event.args.to) {
          let mutagenAmount = +this.$store.getters.MUTAGEN;
          mutagenAmount += +event.args.value;
          this.$store.commit('MUTAGEN', mutagenAmount);
        }

        this.$store.commit('METAMASK', metaMaskt);
      });
    }
  }
}

/* eslint-disable */
import DragonMixin from './dragonseth'
import FightPlace from '../fightPlace'
import MarketPlaceMixin from './marketPlace'
import FightPlaceMixin from './fightPlace'
import Mutagen from '../mutagen'
import PaginateMixin from '../../paginate'
import CODE from '../code'
import { getBlockNumber } from '../web3'


export default {
  mixins: [
    DragonMixin, MarketPlaceMixin,
    FightPlaceMixin, PaginateMixin
  ],
  data() {
    return {
      storeKey: ''
    };
  },
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
      let isModalNet = true;
      this.$store.subscribe((mutation, state) => {
        let metaMask = mutation.type === 'METAMASK';

        if (metaMask && state.MetaMask.msg === CODE[3] && state.MetaMask.currentAddress) {
          this.updateBalanceMutagen();
          this.tokensOf();
          this.isOwnerToken();
          this.storeKey = 'MYDRAGON';
          this.currentPage = 1;
        }

        if (metaMask && state.MetaMask.msg === CODE[6] && isModalNet) {
          state.MetaMask.modal.wrongNetId = true;
          isModalNet = false;
        } else if (state.MetaMask.msg === CODE[5]) {
          state.MetaMask.modal.wrongNetId = false;
        }
      });
    },
    async eventsRun() {
      if (!window.ethereum) return null;
      let web3 = new Web3(ethereum);
      let fightPlace = new FightPlace(web3);
      let mutagen = new Mutagen(web3);
      let { currentBlockNUmber } = this.$store.getters.METAMASK;
      let filter;
      let transactionHashFightPlace;
      let transactionHashMutagen;

      if (currentBlockNUmber <= 0) {
        currentBlockNUmber = await getBlockNumber(web3);
      }

      currentBlockNUmber -= 50;
      filter = { fromBlock: currentBlockNUmber };

      fightPlace.events(filter).watch((err, event) => {
        /**
         * @fightFP: fightWithDragon;
         * @AddDragonFP: add to fightplace.
         * @RemoveDragonFP: remove from fightPlace.
         */
        if (err) return null;

        let element;
        let metaMaskt = this.$store.getters.METAMASK;

        metaMaskt.currentBlockNUmber = event.blockNumber;
        this.$store.commit('METAMASK', metaMaskt);

        if (transactionHashFightPlace == event.transactionHash) {
          return null;
        }

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

        transactionHashFightPlace = event.transactionHash;
      });

      mutagen.mutagen.Transfer(filter).watch((err, event) => {
        if (err) return null;

        let metaMaskt = this.$store.getters.METAMASK;

        metaMaskt.currentBlockNUmber = event.blockNumber;
        this.$store.commit('METAMASK', metaMaskt);

        if (transactionHashMutagen == event.transactionHash) {
          return null;
        }

        if (metaMaskt.currentAddress == event.args.to) {
          let mutagenAmount = +this.$store.getters.MUTAGEN;
          mutagenAmount += +event.args.value;
          this.$store.commit('MUTAGEN', mutagenAmount);
        }

        transactionHashMutagen = event.transactionHash;
      });
    }
  }
}

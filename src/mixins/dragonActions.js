import { toWei, isAddress } from 'web3/lib/utils/utils'
import FightPlace from './ETH/mixins/fightPlace'


export default {
  mixins: [FightPlace],
  props: { id: String },
  data() {
    return {
      gift: {
        show: false,
        title: 'Make a gift',
        giftAddress: null
      },
      sell: {
        show: false,
        title: 'Sell dragon',
        price: 0,
        commission: 5
      },
      suicide: {
        show: false,
        title: 'Make a suicide',
      },
      bodyBgVariant: 'violetbody',
      headerBgVariant: 'violet',
      headerTextVariant: 'ightindigo',
      footerBgVariant: 'darkviolet',
    };
  },
  methods: {
    isGiftModal() {
      this.gift.show = !this.gift.show;
    },
    makeGift() {
      let addressTo = this.gift.giftAddress;
      if (!isAddress(addressTo)) return null;
      this.$store.dispatch({
        type: 'transfer',
        to: addressTo,
        tokenId: this.id
      });
      this.isGiftModal();
    },
    isSellModal() {
      this.sell.show = !this.sell.show;
    },
    makeSell() {
      this.$store.dispatch({
        type: 'toSell',
        tokenId: this.id,
        dragonPrice: toWei(this.sell.price, 'ether')
      });
      this.isSellModal();
    },
    isShowSuicide() {
      this.suicide.show = !this.suicide.show;
    },
    makeSuicide() {
      this.$store.dispatch({
        type: 'killDragon',
        tokenId: this.id
      });
      this.isShowSuicide();
    },
    toFight() {
      this.$store.dispatch({
        type: 'addToFight',
        tokenId: this.id
      });
    },
    birth() {
      this.$store.dispatch({
        type: 'birth',
        tokenId: this.id
      });
    },
    buyFromMarket() {
      this.$store.dispatch({
        type: 'buyFromMarket',
        tokenId: this.id
      });
    },
    wakeUp() {
      this.$store.dispatch('wakeUp');
    },
    returnFight() {
      this.$store.dispatch('delFromFightPlace');
    },
    returnMarket() {
      this.$store.dispatch('delFromFixMarketPlace');
    }
  }
}
import { toWei } from 'web3/lib/utils/utils'


export default {
  props: {
    id: String
  },
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
      this.isGiftModal();
      console.log(this.gift.giftAddress, 'transfer');
    },
    isSellModal() {
      this.sell.show = !this.sell.show;
    },
    makeSell() {
      this.isSellModal();
      this.$store.dispatch({
        type: 'toSell',
        tokenId: this.id,
        dragonPrice: toWei(this.sell.price, 'ether')
      });
    },
    isShowSuicide() {
      this.suicide.show = !this.suicide.show;
    },
    makeSuicide() {
      this.isShowSuicide();
      console.log('make Suicide');
    },
    toFight() {
      console.log('make a fight');
    }
  }
}
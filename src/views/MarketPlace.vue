<template>
  <div class="container pt-5">
    <div class="row">
      <Card class="col-sm col-md"
            v-for="el of cards"
            :key="el.id"
            :hover="hover"
            :paramPath="el.id"
            :url="el.url">
        <h3 class="text-lightviolet">#{{el.id}}</h3>
        <router-link tag="a"
                     class="btn btn-outline-info"
                     :to="'/dragon/' + el.id">
          BUY {{el.price}} {{$store.getters.CURRENCY}}
        </router-link>
      </card>
    </div>

    <paginate v-model="currentPage"
              :page-count="totalRows"
              :page-range="perPage"
              :prev-text="prevText"
              :next-text="nextText"
              :container-class="'pagination'">
    </paginate>
  </div>
</template>

<script>
import Card from '../components/UI/Card'
import Paginate from '../mixins/paginate'
import MarketPlaceMixin from '../mixins/ETH/mixins/marketPlace'

export default {
  name: 'MarketPlace',
  components: { Card },
  mixins: [Paginate, MarketPlaceMixin],
  data() {
    return {
      storeKey: 'MARKET',
      hover: 'pinck',
      cards: [
        {
          id: '1',
          price: '0.01',
          url: this.$store.getters.CLOUD + 'egg_1.png'
        },
        {
          id: '2',
          price: '0.31',
          url: this.$store.getters.CLOUD + 'egg_2.png'
        },
        {
          id: '3',
          price: '1.01',
          url: this.$store.getters.CLOUD + 'egg_3.png'
        },
        {
          id: '4',
          price: '0.51',
          url: this.$store.getters.CLOUD + 'egg_4.png'
        },
        {
          id: '5',
          price: '0.06',
          url: this.$store.getters.CLOUD + 'egg_5.png'
        },
        {
          id: '6',
          price: '0.08',
          url: this.$store.getters.CLOUD + 'egg_6.png'
        },
      ]
    }
  },
  mounted() {
    // this.marketPlace.getSlicedDragonsSale(1, 699).then(els => {
    //   return this.marketPlace.getFewDragons(els);
    // }).then(console.log);
  }
}
</script>

<style lang="scss">
.pinck:hover {
    // border: 2px solid #f261ee;
    box-shadow: inset 0px 0px 40px #f261ee;
}
</style>

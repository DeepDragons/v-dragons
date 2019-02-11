<template>
  <div class="container pt-5">
    <div class="row">
      <Card class="col-sm col-md"
            v-for="el of cards"
            :key="el.id"
            :hover="hover"
            :paramPath="'/dragon/' + el.id"
            :url="el.url">
        <h3 class="text-lightviolet">#{{el.id}}</h3>
        <a class="btn btn-outline-info text-info"
           @click="buyFromMarket(el.id)">
          BUY {{el.price | fromWei($store.getters.CURRENCY)}}
        </a>
      </card>
    </div>

    <paginate v-if="isShow"
              v-model="currentPage"
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
import DefUtils from '../mixins/utils'
import MarketPlaceMixin from '../mixins/ETH/mixins/marketPlace'
import fromWei from '../filters/fromWei'

export default {
  name: 'MarketPlace',
  components: { Card },
  mixins: [Paginate, MarketPlaceMixin, DefUtils],
  filters: { fromWei },
  data() {
    return {
      storeKey: 'MARKET',
      hover: 'pinck'
    }
  },
  computed: {
    cards() {
      let tokensForSale = this.sortElements();
      return this.pageChanged(tokensForSale);
    }
  },
  methods: { },
  mounted() {
    this.getDragonsToSale();
  }
}
</script>

<style lang="scss">
</style>

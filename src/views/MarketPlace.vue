<template>
  <div class="container pt-5">

    <div class="row justify-content-md-center m-auto">
      <FilterBy class="col-auto col-xl-auto p-auto"
                :storeKey="storeKey"
                v-if="!isNotDragons"/>
    </div>
    <div class="row justify-content-md-center m-auto">
      <Card class="col-auto col-xl-auto p-auto"
            v-for="el of cards"
            :key="el.id"
            :classContent="hover"
            :paramPath="'/dragon/' + el.id"
            :url="el.url">
        <h3 class="text-lightviolet">#{{el.id}}</h3>
        <button v-btn
                @click="buyFromMarket(el.id)">
          BUY {{el.price | fromWei($store.getters.CURRENCY)}}
        </button>
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
import DragonActions from '../mixins/dragonActions'
import MarketPlaceMixin from '../mixins/ETH/mixins/marketPlace'
import fromWei from '../filters/fromWei'
import btn from '../directives/btn'

const FilterBy = () => import('../components/UI/FilterBy')


export default {
  name: 'MarketPlace',
  components: { Card, FilterBy },
  mixins: [Paginate, DragonActions, DefUtils, MarketPlaceMixin],
  filters: { fromWei },
  directives: { btn },
  data() {
    return {
      storeKey: 'MARKET',
      hover: 'v-pinck'
    }
  },
  computed: {
    cards() {
      let tokensForSale = this.sortElements();
      return this.pageChanged(tokensForSale);
    },
    isNotDragons() {
      return this.$store.getters[this.storeKey].elements.length < 1;
    }
  },
  mounted() {
    this.preStart();
  },
  methods: {
    async preStart() {
      if (this.cards.length > 0) return null;
      this.loaderShow();
      await this.getDragonsToSale();
      this.loaderHide()
    }
  }
}
</script>

<style lang="scss">
</style>

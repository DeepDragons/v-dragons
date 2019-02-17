<template>
  <div class="container broader pt-5">

    <div class="row justify-content-md-center m-auto">
      <FilterBy class="col-auto col-xl-auto p-auto"
                :storeKey="storeKey"
                v-if="!isNotDragons"/>
    </div>
    <div class="row justify-content-md-center m-auto">
      <Card class="col-auto col-xl-auto p-auto"
               v-for="el of cards"
               :classContent="'v-hover'"
               :key="el.id"
               :paramPath="'/dragon/' + el.id"
               :url="el.url">
        <h3 class="text-lightviolet">#{{el.id}}</h3>
      </Card>
    </div>

    <paginate v-if="isShow"
              v-model="currentPage"
              :page-count="totalRows"
              :page-range="perPage"
              :prev-text="prevText"
              :next-text="nextText"
              :container-class="'pagination'">
    </paginate>

    <None v-if="isNotDragons"/>
  </div>
</template>

<script>
import Card from '../components/UI/Card'
import Paginate from '../mixins/paginate'
import DefUtils from '../mixins/utils'
import DragonMixin from '../mixins/ETH/mixins/dragonseth'
import btn from '../directives/btn'

const FilterBy = () => import('../components/UI/FilterBy')
const None = () => import('../components/UI/None')


export default {
  name: 'MyDragons',
  components: { Card, None, FilterBy },
  mixins: [Paginate, DragonMixin, DefUtils],
  directives: { btn },
  computed: {
    cards() {
      let tokensOwner = this.sortElements();
      return this.pageChanged(tokensOwner);
    },
    isNotDragons() {
      return this.$store.getters[this.storeKey].elements.length < 1;
    }
  },
  data() {
    return {
      storeKey: 'MYDRAGON'
    }
  },
  mounted() {
    this.preStart();
  },
  methods: {
    async preStart() {
      if (this.cards.length > 0) return null;
      this.loaderShow();
      await this.tokensOf();
      setTimeout(() => {
        this.loaderHide();
      }, 500);
    }
  }
}
</script>

<style lang="scss">
</style>

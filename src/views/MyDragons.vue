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
               :classContent="cardHover(el.action)"
               :key="el.id"
               :paramPath="'/dragon/' + el.id"
               :url="el.url">
        <h3 class="text-lightviolet">
          #{{el.id}}
        </h3>
        <p class="text-lightviolet">{{el.action}}</p>
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
    }
  },
  data() {
    return {
      storeKey: 'MYDRAGON',
      isNotDragons: false
    }
  },
  mounted() {
    this.preStart();
  },
  methods: {
    preStart() {
      if (this.cards.length > 1) return null;
      this.loaderShow();
      setTimeout(() => {
        this.loaderHide();
        this.isNotDragons = this.cards.length < 1;
      }, 2000);
    },
    cardHover(action) {
      if (typeof action !== 'string') {
        return '';
      } else if (action == this.actions[0]) {
        return 'v-hover';
      } else if (action == this.actions[1]) {
        return 'v-red';
      } else if (action == this.actions[6]) {
        return 'v-pinck';
      } else if (action == this.actions[99]) {
        return 'v-shade';
      } else {
        return '';
      }
    }
  }
}
</script>

<style lang="scss">
</style>

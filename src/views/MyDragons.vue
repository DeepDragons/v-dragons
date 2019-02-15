<template>
  <div class="container broader pt-5">
    <div class="row justify-content-md-center m-auto">
      <Card class="col-xs-3 col mx-auto"
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
import None from '../components/UI/None'
import Paginate from '../mixins/paginate'
import DefUtils from '../mixins/utils'
import DragonMixin from '../mixins/ETH/mixins/dragonseth'
import btn from '../directives/btn'

export default {
  name: 'MyDragons',
  components: { Card, None },
  mixins: [Paginate, DragonMixin, DefUtils],
  directives: { btn },
  computed: {
    cards() {
      let tokensOwner = this.sortElements();
      return this.pageChanged(tokensOwner);
    },
    isNotDragons() {
      return this.cards.length < 1;
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

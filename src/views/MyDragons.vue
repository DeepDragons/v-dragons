<template>
  <div class="container broader pt-5">
    <div class="row justify-content-sm-center">
      <Card class="col-md-3 pl-auto"
            v-for="el of cards"
            :key="el.id"
            :paramPath="'/dragon/' + el.id"
            :url="el.url">
        <h3 class="text-lightviolet">#{{el.id}}</h3>
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
    }
  },
  data() {
    return {
      storeKey: 'MYDRAGON',
      isNotDragons: null
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
        if (this.cards.length < 1)  this.isNotDragons = true;
      }, 500);
    }
  }
}
</script>

<style lang="scss">
</style>

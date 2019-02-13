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

    <div v-if="isNotDragons" class="row">
      <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/UI/Card'
import Paginate from '../mixins/paginate'
import DefUtils from '../mixins/utils'
import DragonMixin from '../mixins/ETH/mixins/dragonseth'

export default {
  name: 'MyDragons',
  components: { Card },
  mixins: [Paginate, DragonMixin, DefUtils],
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
        if (!this.cards)  this.isNotDragons = true;
      }, 500);
    }
  }
}
</script>

<style lang="scss">
</style>

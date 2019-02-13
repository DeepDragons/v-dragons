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
      this.loaderHide()
    }
  }
}
</script>

<style lang="scss">
</style>

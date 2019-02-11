<template>
  <div class="container broader pt-5">
    <div class="row align-items-start">
      <Card class="col-sm"
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
  directives: { },
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
  }
}
</script>

<style lang="scss">
</style>

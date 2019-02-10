<template>
  <div class="container pt-5">
    <div class="row">
      <Card class="col-sm col-md"
            v-for="el of cards"
            :key="el.id"
            :paramPath="el.id"
            :url="el.url">
        <h3 class="text-lightviolet">#{{el.id}}</h3>
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
import DragonMixin from '../mixins/ETH/mixins/dragonseth'

export default {
  name: 'MyDragons',
  components: { Card },
  mixins: [Paginate, DragonMixin],
  computed: {
    cards() {
      let cloud = this.$store.getters.CLOUD;
      let { elements } = this.$store.getters[this.storeKey];
      let tokensOwner = elements.map(el => {
        let stage = el.stage > 1 ? 'dragon' : 'egg';
        return { id: el.id, url: `${cloud}${stage}_${el.id}.png` }
      });

      return this.pageChanged(tokensOwner);
    }
  },
  data() {
    return {
      storeKey: 'MYDRAGON'
    }
  },
  mounted() {
    // this.tokensOf();
  }
}
</script>

<style lang="scss">
</style>

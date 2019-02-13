<template>
  <div class="container pt-5">
    <div class="row justify-content-md-center">
      <Card class="col-md-3"
            v-for="el of cards"
            :key="el.id"
            :hover="hover"
            :paramPath="'/dragon/' + el.id"
            :url="el.url">
        <h3 class="text-lightviolet">#{{el.id}}</h3>
        <router-link tag="a"
                     class="btn btn-outline-danger"
                     :to="'/battle/' + el.id">
          FIGHT
        </router-link>
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
import FightPlaceMixin from '../mixins/ETH/mixins/fightPlace'

export default {
  name: 'FightingGround',
  components: { Card },
  mixins: [Paginate, DefUtils, FightPlaceMixin],
  data() {
    return {
      storeKey: 'FIGHTINGGROUND',
      hover: 'red'
    }
  },
  computed: {
    cards() {
      let tokensForSale = this.sortElements();
      return this.pageChanged(tokensForSale);
    }
  },
  mounted() {
    this.preStart();
  },
  methods: {
    async preStart() {
      if (this.cards.length > 0) return null;
      this.loaderShow();
      await this.getDragonsTofight();
      this.loaderHide()
    }
  }
}
</script>

<style lang="scss">
</style>

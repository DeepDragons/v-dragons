<template>
  <div class="container pt-5">
    <div class="row justify-content-md-center m-auto">
      <Card class="col-auto col-xl-auto p-auto"
            v-for="el of cards"
            :key="el.id"
            :classContent="hover"
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

    <None v-if="isNotDragons"
          :title="noneTitle"
          :btns="false">
      <p class="load text-lightviolet">You can add it yourself!</p>
    </None>
  </div>
</template>

<script>
import Card from '../components/UI/Card'
import None from '../components/UI/None'
import Paginate from '../mixins/paginate'
import DefUtils from '../mixins/utils'
import FightPlaceMixin from '../mixins/ETH/mixins/fightPlace'

export default {
  name: 'FightingGround',
  components: { Card, None },
  mixins: [Paginate, DefUtils, FightPlaceMixin],
  data() {
    return {
      storeKey: 'FIGHTINGGROUND',
      hover: 'v-red',
      noneTitle: `it's empty here!`
    }
  },
  computed: {
    cards() {
      let tokensForSale = this.sortElements();
      return this.pageChanged(tokensForSale);
    },
    isNotDragons() {
      return this.cards.length < 1;
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

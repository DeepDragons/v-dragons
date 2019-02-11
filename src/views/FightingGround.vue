<template>
  <div class="container pt-5">
    <div class="row">
      <Card class="col-sm col-md"
            v-for="el of cards"
            :key="el.id"
            :hover="hover"
            :paramPath="el.id"
            :url="el.url">
        <h3 class="text-lightviolet">#{{el.id}}</h3>
        <router-link tag="a"
                     class="btn btn-outline-danger"
                     :to="'/dragon/' + el.id">
          FIGHT
        </router-link>
      </card>
    </div>

    <!-- <paginate v-if="isShow"
              v-model="currentPage"
              :page-count="totalRows"
              :page-range="perPage"
              :prev-text="prevText"
              :next-text="nextText"
              :container-class="'pagination'">
    </paginate> -->

  </div>
</template>

<script>
import Card from '../components/UI/Card'
// import Paginate from '../mixins/paginate'

export default {
  name: 'FightingGround',
  components: { Card },
  mixins: [],
  data() {
    return {
      storeKey: 'FIGHTINGGROUND',
      hover: 'red',
      cards: [
        {
          id: '1',
          url: this.$store.getters.CLOUD + 'dragon_1.png'
        },
        {
          id: '2',
          url: this.$store.getters.CLOUD + 'dragon_2.png'
        },
        {
          id: '3',
          url: this.$store.getters.CLOUD + 'dragon_3.png'
        },
        {
          id: '4',
          url: this.$store.getters.CLOUD + 'dragon_4.png'
        },
        {
          id: '5',
          url: this.$store.getters.CLOUD + 'dragon_5.png'
        },
        {
          id: '6',
          url: this.$store.getters.CLOUD + 'dragon_6.png'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
</style>

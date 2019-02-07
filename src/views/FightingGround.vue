<template>
  <div class="container pt-5">
    <div class="row">
      <Card class="col-sm col-md"
            v-for="el of cards"
            :key="el.id"
            :hover="hover"
            :url="el.url">
        <h3 class="text-lightviolet">{{el.id}}</h3>
        <router-link tag="a"
                     class="btn btn-outline-danger"
                     :to="'/fight/' + el.id">
          FIGHT
        </router-link>
      </card>
    </div>

    <b-pagination size="md"
                  :total-rows="totalRows"
                  v-model="currentPage"
                  :per-page="perPage">
    </b-pagination>
  </div>
</template>

<script>
import Card from '../components/UI/Card'
import Paginate from '../mixins/paginate'

export default {
  name: 'FightingGround',
  components: { Card },
  mixins: [Paginate],
  data() {
    return {
      storeKey: 'FIGHTINGGROUND',
      hover: 'red',
      cards: [
        {
          id: '#1',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_1.png'
        },
        {
          id: '#2',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_2.png'
        },
        {
          id: '#3',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_3.png'
        },
        {
          id: '#4',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_4.png'
        },
        {
          id: '#5',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_5.png'
        },
        {
          id: '#6',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_6.png'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.red:hover {
    border: 2px solid #E52B50;
    box-shadow: 0px 0px 40px #E52B50;
}
</style>

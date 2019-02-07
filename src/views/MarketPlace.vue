<template>
  <div class="container pt-5">
    <div class="row">
      <Card class="col-sm col-md"
            v-for="el of cards"
            :key="el.id"
            :hover="hover"
            :url="el.url">
        <h3 class="text-lightviolet">#{{el.id}}</h3>
        <router-link tag="a"
                     class="btn btn-outline-info"
                     :to="'/dragon/' + el.id">
          Buy {{el.price}} TRX
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
  name: 'MarketPlace',
  components: { Card },
  mixins: [Paginate],
  data() {
    return {
      storeKey: 'MARKET',
      hover: 'pinck',
      cards: [
        {
          id: '1',
          price: '0.01',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_1.png'
        },
        {
          id: '2',
          price: '0.31',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_2.png'
        },
        {
          id: '3',
          price: '1.01',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_3.png'
        },
        {
          id: '4',
          price: '0.51',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_4.png'
        },
        {
          id: '5',
          price: '0.06',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_5.png'
        },
        {
          id: '6',
          price: '0.08',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_6.png'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.pinck:hover {
    border: 2px solid #f261ee;
    box-shadow: 0px 0px 40px #f261ee;
}
</style>

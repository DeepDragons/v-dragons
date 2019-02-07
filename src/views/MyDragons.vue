<template>
  <div class="container pt-5">
    <div class="row">
      <Card class="col-sm col-md"
            v-for="el of cards"
            :key="el.id"
            :url="el.url">
        <h3 class="text-lightviolet">#{{el.id}}</h3>
        <router-link :to="'/dragons/' + el.id">About</router-link>
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
  name: 'MyDragons',
  components: { Card },
  mixins: [Paginate],
  data() {
    return {
      storeKey: 'MYDRAGON',
      cards: [
        {
          id: '1',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_1.png'
        },
        {
          id: '2',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_2.png'
        },
        {
          id: '3',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_3.png'
        },
        {
          id: '4',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_4.png'
        },
        {
          id: '5',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_5.png'
        },
        {
          id: '6',
          url: 'http://res.cloudinary.com/dragonseth/image/upload/egg_6.png'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
ul {
  li.page-item {
    margin: 0 0.5%;
    * {
      color: #8c76d8;
       border-radius: 50% !important;
      background-color: #061222f2 !important;
      border: #8c76d8;
    }
    *:hover {
      box-shadow: 0px 0px 5px #493e70;
    }
  }
}
</style>

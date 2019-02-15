<template>
  <div class="row text-center">
    <div class="col-sm jumbotron text-ightindigo p-5 mt-5">
      <h1 class="">{{title}}</h1>
      <hr class="my-4 bg-lightviolet">
      
      <slot/>

      <router-link tag="a"
                    class="btn btn-lg btn-outline-success"
                    :to="'/'">
        BUY EGG
      </router-link>
      <router-link tag="a"
                    class="btn btn-lg btn-outline-success"
                    :to="'/market'">
        MARKET
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'None',
  props:  {
    title: {
      type: String,
      default: 'Unfortunately, you have no dragons yet.'
    }
  }
}
</script>

<style>

</style>

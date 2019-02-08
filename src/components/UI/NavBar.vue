<template>
  <nav class="navbar navbar-expand-lg navbar-violet bg-violet">
    <div class="collapse navbar-collapse row navbar-nav mt-2 mt-lg-0">
      
      <a class="navbar-brand col-sm" href="/">Dragon{{$store.getters.CURRENCY}}</a>
      <div class="col-lg"></div>

      <router-link tag="button"
                   class="btn btn-outline-warning"
                   v-for="link of routers"
                   :key="link.name"
                   :to="link.path">
        {{link.name | uperCase}}
      </router-link>
    
      <div class="mutagen text-pink mx-auto">
        {{$store.getters.MUTAGEN}}
      </div>
    </div>
  </nav>
</template>

<script>
import UperCase from '../../filters/upercase'

export default {
  name: 'NavBar',
  filters: {
    uperCase: UperCase
  },
  data() {
    return { }
  },
  computed: {
    routers() {
      return this.$router
                 .options
                 .routes
                 .filter(el => el.name !== false);
    }
  }
}
</script>

<style lang="scss">
.navbar-collapse {
  padding: 0 3%;
}
.btn {
  margin: 0.5%;
}
.mutagen {
    margin-left: 16px;
    background-position: 0 -90px;
    padding-top: 3px;
    padding-left: 44px;
    background-image: url('/img/icons.svg');
    background-repeat: no-repeat;
}
</style>

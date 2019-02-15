<template>
  <nav class="navbar navbar-expand-lg navbar-violet bg-violet">
    <div class="collapse navbar-collapse row navbar-nav mt-2 mt-lg-0">
      
      <a class="navbar-brand col-xs logo_text"
         href="https://dragoneth.com/">
        <img src="/img/logo_img.png" height="50">
        Dragon {{$store.getters.CURRENCY}}
      </a>
      <div class="col-lg"></div>

      <router-link tag="a"
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
.logo_text {
    position: relative;
    display: inline-block;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
}
.logo_text {
    background: linear-gradient(to right,#BBB 0%,#D0D0D0 12%,#DDD 33%,#FFF 52%,#BBB 63%,#797979 78%,#CECECE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>

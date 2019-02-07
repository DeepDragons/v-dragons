<template>
  <nav class="navbar navbar-expand-lg navbar-violet bg-violet">
    <div class="navbar-collapse row">
      
      <a class="navbar-brand" href="/">Dragontrx</a>
      <div class="col-lg"></div>

      <router-link tag="button"
                   class="btn btn-outline-warning"
                   v-for="link of routers"
                   :key="link.name"
                   :to="link.path">
        {{link.name}}
      </router-link>
    
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
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
  margin: 0 0.5%;
}
</style>

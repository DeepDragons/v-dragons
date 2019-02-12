<template>
  <div id="app">
    <NavBar/>
    <router-view v-show="$store.getters.CONTENTSHOW"/>
    <Footer v-show="$store.getters.CONTENTSHOW"/>
  </div>
</template>

<script>
import NavBar from './components/UI/NavBar'
import Footer from './components/UI/Footer'
import MutagenMixin from './mixins/ETH/mixins/watcher'

export default {
  components: { NavBar, Footer },
  mixins: [MutagenMixin],
  mounted() {
    this.showApp();
    this.web3Detect();
    this.goWachAddress();
  },
  methods: {
    showApp() {
      window.document
            .getElementById('fountainG')
            .style
            .display = 'none';
      window.document
            .getElementById('app')
            .style
            .display = 'block';
      window.document
            .getElementById('loaderlogo')
            .remove();
    },
    web3Detect() {
      this.$store.dispatch('enable');
      this.$store.dispatch('isAddress');
      this.$store.dispatch({
        type: 'isNet',
        web3: this.$store.getters.WEB3
      });
    }
  }
}
</script>



<style lang="scss">
@import "./styles/bootstrap";

a {
  cursor: pointer;
  text-decoration: none;
  color: $lightviolet;
}
a:hover {
  color: $pink;
  text-decoration: none;
  text-shadow: 0 0 11px $lightping;
}

* { outline:none; }

.container {
  margin-bottom: 3%;
}
</style>

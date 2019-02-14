<template>
  <div id="app">
    <NavBar/>
    <img class="smoke-left" src="/img/bc_cloud_left-p-500.png">
    <img class="smoke-right" src="/img/bc_cloud_right.png">
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
    setTimeout(() => this.showApp(), 500);
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
      this.$store.dispatch({
        type: 'blockNumberUpdate'
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

.smoke-right {
  position: absolute;
  right: 0;
  z-index: -1;
}
.smoke-left {
  position: absolute;
  // left: auto;
  z-index: -1;
}
@media screen and (max-width: 1024px) {
  .smoke-left, .smoke-right {
    display: none;
  }
}
</style>

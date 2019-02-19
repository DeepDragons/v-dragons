<template>
  <div id="app">
    <NavBar/>
    <img class="smoke-left" src="/img/bc_cloud_left-p-500.png">
    <img class="smoke-right" src="/img/bc_cloud_right.png">
    <router-view v-show="$store.getters.CONTENTSHOW"/>
    <Footer v-show="$store.getters.CONTENTSHOW"/>

    <b-modal v-model="wrongNet"
             hide-footer
             :title="'MetaMask'"
             :header-bg-variant="headerBgVariant"
             :header-text-variant="headerTextVariant"
             :body-bg-variant="bodyBgVariant">

         <div class="d-block text-center p-3">
           <p class="lead text-lightviolet">
             Please select main network!
           </p>
           <img height="250" src="/img/net.png">
         </div>      
    </b-modal>
  </div>
</template>

<script>
import NavBar from './components/UI/NavBar'
import Footer from './components/UI/Footer'
import Watcher from './mixins/ETH/mixins/watcher'
import ModalVaribles from './mixins/dragonActions'
import btn from './directives/btn'


export default {
  components: { NavBar, Footer },
  mixins: [Watcher, ModalVaribles],
  directives: { btn },
  computed: {
    wrongNet: {
      get: function() {
        console.log(this.$store.getters.METAMASK.modal.wrongNetId);
        return this.$store.getters.METAMASK.modal.wrongNetId;
      },
      set: function(value) {
        let key = 'METAMASK';
        let payload = this.$store.getters[key];
        payload.modal.wrongNetId = value;
        this.$store.commit(key, payload);
      }
    }
  },
  mounted() {
    setTimeout(() => this.showApp(), 500);
    this.eventsRun();
    this.web3Detect();
  },
  methods: {
    showApp() {
      let fountainG = window.document.querySelector('#fountainG');
      let app = window.document.querySelector('#app');
      let loaderh1 = window.document.querySelector('#loaderlogo');

      fountainG.style.display = 'none';
      app.style.display = 'block';

      if (loaderh1) {
        loaderh1.remove();
      }
    },
    web3Detect() {
      this.goWachAddress();
      this.$store.dispatch('enable');
      this.$store.dispatch('isAddress');
      this.$store.dispatch('isNet');
      this.$store.dispatch({
        type: 'blockNumberUpdate'
      });
    }
  }
}
</script>



<style lang="scss">
@import "./styles/bootstrap";

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

<template>
  <div id="app">
    <NavBar/>
    <img class="smoke-left" src="/img/bc_cloud_left-p-500.png">
    <img class="smoke-right" src="/img/bc_cloud_right.png">
    <router-view v-show="$store.getters.CONTENTSHOW"/>
    <Footer v-show="$store.getters.CONTENTSHOW"/>

    <b-modal v-model="wrong"
             hide-footer
             :title="'MetaMask'"
             :header-bg-variant="headerBgVariant"
             :header-text-variant="headerTextVariant"
             :body-bg-variant="bodyBgVariant">

         <div class="d-block text-center p-3">
           <p class="lead text-lightviolet">
             {{wrongModal.p}}
           </p>
           <img height="250" :src="wrongModal.url">
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
import CODE from './mixins/ETH/code'


export default {
  components: { NavBar, Footer },
  mixins: [Watcher, ModalVaribles],
  directives: { btn },
  computed: {
    wrong: {
      get: function() {
        return this.$store.getters.METAMASK.modal.wrongNetId;
      },
      set: function(value) {
        let key = 'METAMASK';
        let payload = this.$store.getters[key];
        payload.modal.wrongNetId = value;
        this.$store.commit(key, payload);
      }
    },
    wrongModal() {
      let { msg } = this.$store.getters.METAMASK;

      if (msg == CODE[2]) {
        return {
          url: '/img/metamask.png',
          p: 'Please install metaMask!'
        };
      }
      if (msg == CODE[6]) {
        return {
          url: '/img/net.png',
          p: 'Please select main network!'
        };
      }
      return { url: null, p: null };
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

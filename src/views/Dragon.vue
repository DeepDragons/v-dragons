<template>
  <div class="container pt-5">

    <h1 class="text-left text-ightindigo pb-5">
      name:
      <input type="text" id="dragon-name"
             disabled class="form-control text-pink"
             value="test" v-model.lazy="dragonName">
    </h1>
    <h1 class="text-left text-ightindigo pb-5">
      Owner: <span class="text-pink">{{onwer}}...</span>
    </h1>
    
    <div class="row pt-2 pb-2">
      <canvas id="combat"
              width="800" height="300"></canvas>

      <Card class="col-lg selected d-block mx-auto"
            :url="url">
        <h1 class="text-pink">
          #{{id}}
        </h1>
      </card>
    </div>

    <ActionPanel v-if="isOwner"/>
  </div>
</template>

<script>
import Card from '../components/UI/Card'
import Charts from '../mixins/charts'
import ActionPanel from '../components/ActionPanel'

export default {
  name: 'Dragon',
  components: { Card, ActionPanel },
  mixins: [Charts],
  data() {
    return {
      dragonName: 'my dragon',
      isOwner: null,
      addressOwner: '0x68a8191add50d107BB8b25f3Feea172c35Cf2685'
    }
  },
  computed: {
    id() {
      return this.$router.history.current['params']['id'];
    },
    url() {
      return `${this.$store.getters.CLOUD}egg_${this.id}.png`;
    },
    onwer() {
      return this.addressOwner.substr(0, 8);
    }
  },
  mounted() {
    this.paintChart();
    this.checkOwner();
  },
  methods: {
    paintChart() {
      let ctx = window.document.getElementById('combat');
      this.createCombatChart(ctx);
    },
    checkOwner() {
      let currentAddress = this.$store.getters.CURRENTADDRESS;
      
      if (currentAddress == this.addressOwner) {
        this.isOwner = true;
        document.getElementById('dragon-name').disabled = false;
      } else {
        this.isOwner = false;
      }
    }
  },
  watch: {
    dragonName(value) {
      console.log('setDragonName', value);
    }
  }
}
</script>

<style lang="scss">
#dragon-name {
  background: #2125290c;
  border: #2125290c;
}
#combat {
  position: absolute;
  right: 0;
  z-index: 99;
}

div.selected div.s-myeggs__circle {
  animation: shadow 2s infinite alternate;
  border: 2px solid #8c76d8;
  -webkit-box-shadow: 0px 0px 40px #8c76d8;
  box-shadow: 0px 0px 40px #8c76d8;
  cursor: default;
  height: 400px;
  width: 400px;
  img { margin: 4%; }
}

@keyframes shadow {
  from {box-shadow: 0 0 50px 10px #8269dd}
  to {text-shadow: 0 0 60px 15px #f261ee }
}

@media screen and (max-width: 991px) {
  div.selected div.s-myeggs__circle {
      height: 200px;
      width: 200px;
      margin: 35%;
      img { margin: -3%; }
  }
}
@media screen and (max-width: 414px) {
  div.selected div.s-myeggs__circle {
      margin: 20%;
      img { margin: -3%; }
  }
}
@media screen and (max-width: 980px) {
  #combat {
    position: relative;
    left: 0;
  }
}
</style>

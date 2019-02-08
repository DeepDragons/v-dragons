<template>
  <div class="container pt-5">
    <div class="row">
      <canvas id="combat"
              width="800" height="300"></canvas>

      <Card class="col-lg selected"
            :url="url">
        <h1 class="text-pink">#{{id}}</h1>
      </card>
    </div>

    <div class="container">
      <div class="row">
        <div v-if="isOwner" class="btn-group col-lg">
          <button type="button" class="btn btn-outline-info">GIFT</button>
          <button type="button" class="btn btn-outline-info">TO FIGHT</button>
          <button type="button" class="btn btn-outline-info">TO SELL</button>
        </div>

        <h2 class="text-ightindigo col-lg">
          Owner: <span class="text-pink">{{onwer}}...</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/UI/Card'
import Charts from '../mixins/charts'

export default {
  name: 'Dragon',
  components: { Card },
  mixins: [Charts],
  data() {
    return {
      isOwner: null,
      addressOwner: '0x68a8191add50d107BB8b25f3Feea172c35Cf2685'
    }
  },
  computed: {
    id() {
      return this.$router.history.current['params']['id'];
    },
    onwer() {
      return this.addressOwner.substr(0, 8);
    },
    url() {
      return `${this.$store.getters.CLOUD}egg_${this.id}.png`;
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
      } else {
        this.isOwner = false;
      }
    }
  }
}
</script>

<style lang="scss">
#combat {
  position: absolute;
  right: 0;
  left: 30%;
  z-index: 99;
}
@media screen and (max-width: 980px) {
  #combat {
    position: relative;
    left: 0;
  }
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
</style>

<template>
  <div>
    <div class="row justify-content-md-center m-auto">
      <img height="600" :src="urlOpponent" class="col-auto col-xs-auto">
      <div class="col-auto col-xs-auto btn-group">
        <button v-if="urlMe"
                @click="fight"
                type="button"
                class="btn b-menu__item b-menu__item--reverse pt-5">
          <span class="b-menu__item-icon"></span>
          <span class="b-menu__item-name"></span>
        </button>
      </div>
      <img v-if="urlMe" height="600" :src="urlMe" class="col-auto col-xs-auto flip">
    </div>

    <div class="row justify-content-md-center m-auto">
      <canvas width="800" height="300"
              class="mr-auto p-2 bd-highlight"
              id="gens"></canvas>
    </div>
      
      <vue-glide v-if="cards.length > 1"
                 :perView="slideAmount"
                 :rewind="true"
                 :keyboard="true"
                 :peek="peek"
                 class="glide">
        <vue-glide-slide v-for="el of cards"
                         :key="el.id">
          <Card :classContent="hover"
                :url="el.url"
                @click.native="dragonGens(el.id)">
            <h3 class="text-lightviolet">#{{el.id}}</h3>
          </card>
        </vue-glide-slide>
        <template slot="control">
          <img src="/img/arrow.png" class="arrow flip" data-glide-dir="<">
          <img src="/img/arrow.png" class="arrow" data-glide-dir=">">
        </template>
      </vue-glide>

    <div class="container">
      <None v-if="isNotDragons">
        <p class="load">You need a dragon to join the fight!</p>
      </None>
    </div>
  </div>
</template>

<script>
import None from '../components/UI/None'
import { Glide, GlideSlide } from 'vue-glide-js'
import Card from '../components/UI/Card'
import DefUtils from '../mixins/utils'
import DragonMixin from '../mixins/ETH/mixins/dragonseth'
import Charts from '../mixins/charts'

export default {
  name: 'Battle',
  mixins: [DefUtils, DragonMixin, Charts],
  components: {
    'vue-glide': Glide,
    'vue-glide-slide': GlideSlide,
    Card, None
  },
  data() {
    return {
      storeKey: 'MYDRAGON',
      peek: 200,
      hover: 'v-red',
      dragonId: false,
      canvosId: 'gens'
    }
  },
  computed: {
    id() {
      return this.$router.history.current['params']['id'];
    },
    urlOpponent() {
      return this.getUrl(2, this.id);
    },
    urlMe() {
      if (!this.dragonId) return null;
      return this.getUrl(2, this.dragonId);
    },
    cards() {
      let tokensOwner = this.sortElements();
      return tokensOwner.filter(el => el.stage > 1);
    },
    slideAmount() {
      let slideAmount;
      let numberOfDiv;
      let screenWidth = window.screen.width;

      if (screenWidth > 1024) {
        numberOfDiv = 350;
      } else {
        numberOfDiv = 900;
      }
      
      slideAmount = screenWidth / numberOfDiv;
      return +slideAmount.toFixed() || 1;
    },
    isNotDragons() {
      if (this.cards.length < 1) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.preStart();
  },
  methods: {
    async dragonGens(_DragonId) {
      this.loaderShow();
      this.dragonId = _DragonId;

      let dataGensSet;

      try {
        dataGensSet = await this.fightsGenes(
          this.dragonId, 'you gens', '#7568B0', '#7568B0'
        );
      } catch(err) {
        let fightPath = this.$router.options.routes[3].path;
        this.$router.replace(fightPath);
      }

      this.radarChartData.datasets[1] = dataGensSet;

      this.loaderHide();
      this.printChart();
    },
    async fightsGenes(_DragonId, label, borderColor,
                      pointHoverBackgroundColor) {
      let dragonGens = await this.dragonInfo(_DragonId);

      return this.parseGens(
        _DragonId, dragonGens.gens.fightsGenes,
        label, borderColor, pointHoverBackgroundColor
      );
    },
    async preStart() {
      this.loaderShow();

      let dataGensSet;

      try {
        dataGensSet = await this.fightsGenes(
          this.id, 'opponent gens', '#dc3545', '#dc3545'
        );
      } catch(err) {
        let fightPath = this.$router.options.routes[3].path;
        this.$router.replace(fightPath);
      }

      this.radarChartData.datasets[0] = dataGensSet;

      this.loaderHide();
      this.printChart();
    },
    printChart() {
      let ctx = window.document.getElementById(this.canvosId);
      this.generateCharts(ctx);
    },
    fight() {
      this.$store.dispatch({
        type: 'fightWithDragon',
        youId: this.dragonId,
        oponentId: this.id
      });
    }
  }
}
</script>

<style lang="scss">
@import "../styles/colors";

img.flip {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

img[data-glide-dir="<"],
img[data-glide-dir=">"] {
 position: absolute;
//  padding: 10%;
 cursor: pointer;
 bottom: 45%;
 height: 40%;
}

img[data-glide-dir=">"] {
  right:0px
}
img[data-glide-dir="<"] {
  left: 0px;
}

.b-menu__item-icon {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;
    border: 1px solid $lightviolet;
    border-radius: 50%;
    box-shadow: none;
    transition: all .3s ease;
}
.b-menu__item-icon::before {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: 5px;
    width: 88px;
    height: 88px;
    border: 5px solid $red;
    border-radius: 50%;
    transition: .3s ease;
}

.b-menu__item-icon::after {
    content: '';
    display: block;
    position: absolute;
    left: 5px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    transition: .3s ease;
    background-image: url('/img/battle.png');
    background-repeat: no-repeat;
    background-position: center center;
}
.b-menu__item:hover:last-child .b-menu__item-icon::after {
    background: url("/img/battle-active.png") center center no-repeat;
    transition: .3s ease;
    transform: scale(1.5, 1.5);
}

</style>

<template>
  <div>
    <div class="row">
      <img height="600" :src="urlOpponent" class="col-xs">
      <div class="col btn-group">
        <button v-if="urlMe"
                @click="fight"
                type="button"
                class="btn b-menu__item b-menu__item--reverse pt-5">
          <span class="b-menu__item-icon"></span>
          <span class="b-menu__item-name"></span>
        </button>
      </div>
      <img v-if="urlMe" height="600" :src="urlMe" class="col-xs flip">
    </div>

    <div class="row">
      <canvas width="800" height="300"
              class="mr-auto p-2 bd-highlight"
              id="gens"></canvas>
    </div>

    <div v-if="cards.length > 1" class="d-flex flex-column bd-highlight">
      
      <vue-glide v-model="active"
                 :perView="slideAmount"
                 :rewind="true"
                 :keyboard="true"
                 :peek="peek">
        <vue-glide-slide v-for="el of cards"
                         :key="el.id">
          <Card :hover="hover"
                :url="el.url"
                @click.native="dragonGens(el.id, 'gens')">
            <h3 class="text-lightviolet">#{{el.id}}</h3>
          </card>
        </vue-glide-slide>
        <template slot="control">
          <img src="/img/arrow.png" class="arrow" data-glide-dir="<">
          <img src="/img/arrow.png" class="arrow flip" data-glide-dir=">">
        </template>
      </vue-glide>

    </div>
  </div>
</template>

<script>
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
    Card
  },
  data() {
    return {
      storeKey: 'MYDRAGON',
      active: 1,
      slideAmount: 5,
      peek: 200,
      hover: 'red',
      dragonId: false
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
    }
  },
  mounted() { },
  methods: {
    async dragonGens(_DragonId, canvosId) {
      this.loaderShow();
      this.dragonId = _DragonId;
      let opponentGens = await this.dragonInfo(this.id);
      let selectDragonGens = await this.dragonInfo(_DragonId);
      let length = opponentGens.gens.fightsGenes.length;
      let ctx = window.document.getElementById(canvosId);
      let combatData = {
        labels: [],
        datasets: [
            {
              label: 'opponent gens #' + this.id,
              borderColor: '#dc3545',
              pointHoverBackgroundColor: '#dc3545',
              data: [],
              borderWidth: 2
            },
            {
              label: 'you gens #' + _DragonId,
              borderColor: '#7568B0',
              pointHoverBackgroundColor: '#f261ee',
              data: [],
              borderWidth: 2
            }
        ]
      };

      for (let index = 0; index < length; index++) {
        combatData.labels.push(index);
        combatData.datasets[0].data.push(
          opponentGens.gens.fightsGenes[index]
        );
        combatData.datasets[1].data.push(
          selectDragonGens.gens.fightsGenes[index]
        );
      }

      this.loaderHide()
      this.createTowCharts(ctx, combatData);
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

.fixed-top {
  z-index: -1;
}
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
.b-menu__item {
  margin-left: 40%;
  margin-top: 10%;
}
</style>

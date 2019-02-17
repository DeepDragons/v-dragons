<template>
  <div class="container pt-5">

    <h3 class="text-left text-ightindigo">
      Name:
      <input type="text" id="dragon-name"
             :disabled="!values.isOwner && values.currentAction != actions[0]"
             class="form-control text-pink"
             value="test" v-model.lazy="dragonName">
    </h3>
    <h3 class="text-left text-ightindigo">
      Owner: <a :href="addressUrl"
                target="_blanck"
                class="text-pink">{{owner}}</a>
    </h3>
    <h3 class="text-left text-ightindigo pb-5">
      Current action: <span class="text-pink">{{values.currentAction}}</span>
    </h3>
    
    <div class="d-flex bd-highlight">
      <Card class="p-2 flex-fill bd-highlight"
            :classContent="cardHover"
            :imgHeight="card.imgHeight"
            :imgWidth="card.imgWidth"
            :url="url">
        <h2 class="text-pink">
          #{{id}}
        </h2>
      </card>
      <canvas id="combat"
              width="800" height="300"></canvas>
    </div>

    <ActionPanel :id="id" :keyStore="keyStore"/>

    <div v-if="tableShow" class="row">
      <b-table class="text-ightindigo text-center col-sm-12"
               :fields="stat.fight.fields"
               :items="stat.fight.items"></b-table>

      <div class="col-sm-3"></div>

      <b-table class="text-ightindigo text-center col-sm-6 mt-5"
               :fields="stat.lab.fields"
               :items="stat.lab.items"></b-table>
    </div>
  </div>
</template>

<script>
import Card from '../components/UI/Card'
import Charts from '../mixins/charts'
import DragonMixin from '../mixins/ETH/mixins/dragonseth'
import DefUtils from '../mixins/utils'
import fromWei from '../filters/fromWei'
import Table from '../mixins/table'

const bTable = () => import('bootstrap-vue/es/components/table/table')
const ActionPanel = () => import('../components/ActionPanel')


export default {
  name: 'Dragon',
  components: { Card, ActionPanel, bTable },
  mixins: [Charts, DragonMixin, DefUtils, Table],
  filters: { fromWei },
  data() {
    return {
      keyStore: 'DRAGON',
      card: {
        imgHeight: 400,
        imgWidth: 400
      }
    }
  },
  computed: {
    values() {
      return this.$store.getters[this.keyStore];
    },
    id() {
      return this.$router.history.current['params']['id'];
    },
    url() {
      return this.getUrl(this.values.stage, this.id);
    },
    owner() {
      let { currentAddress } = this.$store.getters.METAMASK;
      let { addressOwner } = this.values;

      if (currentAddress == addressOwner) {
        return 'you';
      } else {
        return addressOwner.substr(0, 8) + '...';
      }
    },
    cardHover() {
      let { currentAction } = this.values;
      let defClass = 'none';
      let newClass = `${defClass} ${currentAction.replace(' ', '')}`;
      return newClass.toLocaleLowerCase();
    },
    addressUrl() {
      return this.viewAddressUrl(this.values.addressOwner);
    },
    dragonName: {
      get: function() {
        if (!this.values.dragonName) {
          return 'no name'
        } else {
          return this.values.dragonName;
        }
      },
      set: function(value) {
        if (value && value != this.dragonName) {
          this.$store.dispatch({
            type: 'addDragonName',
            tokenId: this.id,
            name: value
          });
        }
      }
    }
  },
  mounted() {
    this.preStart();
  },
  methods: {
    paintChart(values) {
      let ctx = window.document.getElementById('combat');
      let label = 'Combat gens';
      let dataSet = this.parseGens(
        this.id, values, label,
        '#7568B0', '#f261ee'
      );
      let options = {
        legend: {
          display: true
        },
        scale:{
          pointLabels:{
            fontColor:"#d528d0",
          }
        },
        layout: {
          padding: {
            left: 300
          }
        }
      };

      this.radarChartData.datasets[0] = dataSet;      
      this.generateCharts(ctx, options);
    },
    async preStart() {
      let data;
      let stats;
      this.loaderShow();
      data = await this.getAllTheTokenData(this.id);
      this.loaderHide();
      this.paintChart(data.gensFight);
      if (this.values.dragonName) {
        this.dragonName = this.values.dragonName;
      }
      stats = await this.dragonStat.dragonStats(this.id);
      this.stat.fight.items[0] = stats;
      this.stat.lab.items[0] = stats;
      this.tableShow = true;
    }
  }
}
</script>

<style lang="scss">
@import "../styles/colors";
#dragon-name {
  background: #2125290c;
  border: #2125290c;
  width: 50%;
}
#combat {
  position: absolute;
  right: 0;
}
.none  {
  animation: shadow 2s infinite alternate;
  cursor: default;
  height: 400px !important;
  width: 400px !important;
}
.fightplace {
  border: 2px solid $red;
  -webkit-box-shadow: 0px 0px 40px $red;
  box-shadow: 0px 0px 40px $red;
}
.marketplace {
  border: 2px solid $lightping;
  -webkit-box-shadow: 0px 0px 40px $lightping;
  box-shadow: 0px 0px 40px $lightping;
}
.free {
  border: 2px solid $lightviolet;
  -webkit-box-shadow: 0px 0px 40px $lightviolet;
  box-shadow: 0px 0px 40px $lightviolet;
}
.necropolis {
  animation: none;
  filter: grayscale(100%);
}

@keyframes shadow {
  from {box-shadow: 0 0 40px 5px $lightviolet}
  to {text-shadow: 0 0 40px 10px $lightping }
}
</style>

<template>
  <div class="container broader pt-5">
    <div class="row pt-5 m-auto">
      <div class="col-sm">
        <Card :classContent="cardHover"
              :imgHeight="card.imgHeight"
              :imgWidth="card.imgWidth"
              :url="url">
          <h3 class="text-success text-lg-left">
            #{{id}}
          </h3>
        </card>
      </div>

      <div class="col-sm-6 text-center">
        <h2 class="text-lightviolet">
          Here you can improve your dragon’s combat performance!
        </h2>
      </div>

      <img class="col-xs-auto bottle" src="/img/potion2_1.png"
            height="300">
    </div>

    <canvas id="gens" height="300" width="300"></canvas>


    <div class="row p-5">
      <b-table class="text-ightindigo text-center col-sm-12"
               :fields="gensTable.fields"
               :items="gensTable.items">
        <template slot="action" slot-scope="data">
          <button v-btn="'success'">{{ data.value }}</button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import Card from '../components/UI/Card'
import UtilsMixin from '../mixins/utils'
import TableMixin from '../mixins/table'
import DragonMixin from '../mixins/ETH/mixins/dragonseth'
import Charts from '../mixins/charts'
import btn from '../directives/btn'

const bTable = () => import('bootstrap-vue/es/components/table/table')


export default {
  name: 'GenLab',
  mixins: [UtilsMixin, DragonMixin, Charts, TableMixin],
  components: { Card, bTable },
  directives: { btn },
  data() {
    return {
      keyStore: 'DRAGON',
      card: {
        imgHeight: 300,
        imgWidth: 300
      },
      cardHover: 'lab'
    }
  },
  computed: {
    url() {
      return this.getUrl(2, this.id);
    },
    id() {
      return this.$router.history.current['params']['id'];
    },
    values() {
      return this.$store.getters[this.keyStore];
    },
    sortGens() {
      let fightGens = this.values.gensFight;
      let slice = 15;
      let gens = [];
      
      for (let index = 0; index < fightGens.length; index++) {
        if (index < slice) {
          gens.push({
            attack: fightGens[index],
            protect: fightGens[index + slice],
            action: 'CHANGE'
          });
        }
      }

      return gens;
    }
  },
  methods: {
    async preStart() {
      let data;

      this.loaderShow();
      data = await this.getAllTheTokenData(this.id);
      this.loaderHide();
      this.paintChart(data.gensFight);
    },
    paintChart(values) {
      let ctx = window.document.getElementById('gens');
      let label = `#${this.id} gens`;
      let dataSet = this.parseGens(
        this.id, values, label,
        'rgb(32, 201, 151)', 'rgb(32, 201, 151)'
      );

      this.radarChartData.datasets[0] = dataSet;
      this.generateCharts(ctx);
      this.gensTable.items = this.sortGens;
    }
  },
  mounted() {
    if (!this.values.tokenId || this.values.tokenId != this.id) {
      this.preStart();
    } else {
      this.paintChart(this.values.gensFight);
    }
  }
}
</script>

<style lang="scss">
@import "../styles/colors";

.lab {
  animation: LabShadow 1.5s infinite alternate;
  cursor: default;
  height: 300px !important;
  width: 300px !important;
  box-shadow: 0 0 40px 9px $teal;
}

@keyframes LabShadow {
  from {box-shadow: 0 0 40px 5px $teal}
  to {text-shadow: 0 0 90px 30px $green }
}
</style>

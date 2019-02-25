<template>
  <div class="container broader pt-5">
    <div class="row pt-5 m-auto">
      <div class="col-sm">
        <Card :classContent="cardHover"
              :imgHeight="card.imgHeight"
              :imgWidth="card.imgWidth"
              :url="url">
          <h3 class="text-success text-lg-left">
            #{{idParam}}
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
        <template slot="attack" slot-scope="data">
          <button v-btn="'danger'"
                  @click="modalShow(data.value.genId)">
            {{data.value.value}}
          </button>
        </template>
        <template slot="protect" slot-scope="data">
          <button v-btn="'success'"
                  @click="modalShow(data.value.genId)">
            {{data.value.value}}
          </button>
        </template>
      </b-table>
    </div>

    <b-modal v-model="modalIsShow"
             :title="'mutate ' + genForMutate + ' gen'"
             :header-bg-variant="headerBgVariant"
             :header-text-variant="headerTextVariant"
             :body-bg-variant="bodyBgVariant"
             :footer-bg-variant="footerBgVariant">
      
      <p class="col text-ightindigo">
          Pump the gene to the maximum level, for {{labValue.toMaxPrice | fromWei}}
          <b class="text-warning">{{$store.getters.CURRENCY}}</b>
          <br>
          Or you can give the dragon
          {{labValue.minMutagen}} and {{labValue.forMutagenPrice | fromWei}}
          <b class="text-warning">{{$store.getters.CURRENCY}}</b>
          mutagens and the gene will change randomly
      </p>

      <div slot="modal-footer" class="w-100 justify-content-md-center">
        <button v-btn="'success'"
                @click="genToMax(genForMutate)">
          TO MAX
        </button>
        <button v-btn="'success float-right'"
                @click="genRand(genForMutate)">RANDOM</button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Card from '../components/UI/Card'
import UtilsMixin from '../mixins/utils'
import TableMixin from '../mixins/table'
import DragonActionsMixin from '../mixins/dragonActions'
import DragonMixin from '../mixins/ETH/mixins/dragonseth'
import Charts from '../mixins/charts'
import btn from '../directives/btn'
import fromWei from '../filters/fromWei'

const bTable = () => import('bootstrap-vue/es/components/table/table')


export default {
  name: 'GenLab',
  mixins: [
    UtilsMixin, DragonMixin,
    Charts, TableMixin,
    DragonActionsMixin
  ],
  filters: { fromWei },
  components: { Card, bTable },
  directives: { btn },
  data() {
    return {
      keyStore: 'DRAGON',
      card: {
        imgHeight: 300,
        imgWidth: 300
      },
      genForMutate: null,
      cardHover: 'lab',
      modalIsShow: false
    }
  },
  computed: {
    url() {
      return this.getUrl(2, this.idParam);
    },
    labValue() {
      return this.$store.getters['LAB'];
    },
    idParam() {
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
            attack: {
              value: fightGens[index],
              genId: index
            },
            protect: {
              value: fightGens[index + slice],
              genId: index + slice
            }
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
      data = await this.getAllTheTokenData(this.idParam);
      this.loaderHide();
      this.paintChart(data.gensFight);
    },
    modalShow(genId) {
      this.genForMutate = genId;
      this.modalIsShow = !this.modalIsShow;
    },
    paintChart(values) {
      let chartRadar;
      let ctx = window.document.getElementById('gens');
      let label = 'gens';
      let dataSet = this.parseGens(
        this.idParam, values, label,
        'rgb(32, 201, 151)', 'rgb(32, 201, 151)'
      );

      this.radarChartData.datasets[0] = dataSet;
      this.gensTable.items = this.sortGens;
      chartRadar = this.generateCharts(ctx);

      ctx.onclick = evt => {
        let activePoints = chartRadar.getElementsAtEvent(evt);
        
        if (activePoints[0]) {
          let idx = activePoints[0]['_index'];
          this.modalShow(idx);
        }
      }
    }
  },
  mounted() {
    if (!this.values.tokenId || this.values.tokenId != this.idParam) {
      this.preStart();
    } else {
      this.paintChart(this.values.gensFight);
    }
    this.appShadow('rgb(32, 201, 151)');
  },
  destroyed() {
    this.appShadow(null);
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
  to {box-shadow: 0 0 60px 20px $green }
}

</style>

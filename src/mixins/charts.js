import Chart from 'chart.js'

var defaultOptions = {
  legend: {
    display: true
  },
  scale:{
    pointLabels:{
       fontColor:"#d528d0",
    }
  }
};


export default {
  data() {
    return {
      attacName: 'A',
      defName: 'D',
      radarChartData: {
        labels: [],
        datasets: []
      }
    }
  },
  computed: {
    combatGensLabels() {
      let amountAttackGens = 14;
      let amountAllGens = 30;
      let array = [];

      for (let index = 0; index < amountAllGens; index++) {
        if (index <= amountAttackGens) {
          array.push(`${this.attacName} ${index}`);
        } else {
          array.push(`${this.defName} ${index}`);
        }
      }

      return array;
    }
  },
  mounted() {
    this.radarChartData.labels = this.combatGensLabels;
  },
  methods: {
    generateCharts(ctx, options=defaultOptions) {
      let combatChart = new Chart(ctx, {
        type: 'radar',
        data: this.radarChartData,
        options
      });

      return combatChart;
    },
    parseGens(id, gensArray, label, borderColor,
                    pointHoverBackgroundColor, borderWidth=2) {
      let dataset = {
        label: `${label} #${id}`,
        borderColor: borderColor,
        pointHoverBackgroundColor: pointHoverBackgroundColor,
        data: gensArray,
        borderWidth: borderWidth
      };

      return dataset;
    }
  }
};

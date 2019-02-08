import Chart from 'chart.js'


var combatData = {
  labels: [1, 2, 3, 4, 5, 6, 7],
  datasets: [
      {
        label: 'dragon combat gens',
        borderColor: '#7568B0',
        pointHoverBackgroundColor: '#f261ee',
        data: [20, 10, 4, 2, 3, 9, 8],
        borderWidth: 1
      }
  ]
};

var options = {
  text: 'dragon fighting genes',
  legend: {
    display: true,
    
    labels: {
        fontColor: '#f261ee'
    }
  },
  layout: {
    // padding: {
    //     left: 500,
    //     right: 0,
    //     top: 0,
    //     bottom: 200
    // }
  }
};


export default {
  data() {
    return {
      combatData
    }
  },
  methods: {
    createCombatChart(ctx) {
      let combatChart = new Chart(ctx, {
        type: 'radar',
        data: this.combatData,
        options
      });

      return combatChart;
    }
  }
};

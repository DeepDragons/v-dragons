import Chart from 'chart.js'

var options = {
  text: 'dragon fighting genes',
  legend: {
    display: true,
    
    labels: {
        fontColor: '#f261ee'
    }
  }
};


export default {
  methods: {
    createCombatChart(ctx, values) {
      let combatChart;
      let combatData = {
        labels: [],
        datasets: [
            {
              label: 'dragon combat gens',
              borderColor: '#7568B0',
              pointHoverBackgroundColor: '#f261ee',
              data: [],
              borderWidth: 1
            }
        ]
      };

      values.forEach((item, index) => {
        combatData.labels.push(index);
        combatData.datasets[0].data.push(item);
      });
      combatChart = new Chart(ctx, {
        type: 'radar',
        data: combatData,
        options
      });

      return combatChart;
    }
  }
};

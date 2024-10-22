
   <template>
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
      <span style="color:#FFFFFF;font-size: 16px; font-weight: 600; margin-left: 10px;">Portfolio Stats</span>
   
    </div>
    <div id="chart-timeline" ref="areaChart"></div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import ApexCharts from 'apexcharts';
  
  const areaChart = ref(null);
  
  const options = {
    series: [
      {
        name: "Fiat Revenue",
        data: [
          [new Date('2023-01-01').getTime(), 5205],
          [new Date('2023-02-01').getTime(), 228493],
          // Add more data points for other months and years
        ]
      },

      {
        name: "Crypto Revenue",
        data: [
          [new Date('2023-01-01').getTime(), 5205],
          [new Date('2023-02-01').getTime(), 228493],
          // Add more data points for other months and years
        ]
      }
    ],
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        autoScaleYaxis: true
      }
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return `$${value.toLocaleString()}`;
        }
      },
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      },
    },
    theme: {
      mode: 'dark',
      palette: 'palette1'
    }
  };
  
  onMounted(() => {
    const chart = new ApexCharts(areaChart.value, options);
    chart.render();
  });
  
 
  </script>
  
  <style>
  #chart-timeline {
    background-color: #161D26;
  }
  
  button {
    background-color: transparent;
    border: 1px solid #666666; /* Better border color */
    color: #cccccc; /* Light gray text color */
  }

  .apexcharts-zoomin-icon{
    display: none !important;
  }
  .apexcharts-zoomout-icon{
    display: none !important;
  }
  .apexcharts-zoom-icon{
    display: none !important;
  }
  .apexcharts-pan-icon{
    display: none !important;
  }
  .apexcharts-reset-icon{
    display: none !important;
  }
  .apexcharts-menu-icon{
    display: none !important;
  }
  
  button.active {
    background-color: #00E396;
    color: white;
  }
  .apexcharts-canvas  svg{
    background: none !important;
  }

  line{
    stroke: #303842;
  }

  .apexcharts-grid line{
     stroke: #303842;
  }

  text{
     fill: white;
  }
  </style>
   
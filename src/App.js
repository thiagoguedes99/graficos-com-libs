import React from 'react';
import logo from './logo.svg';
import './App.css';

// import ApexCharts from 'apexcharts'
// import ReactApexChart from 'apexcharts'
// import ApexCharts from 'apexcharts'

import Chart from 'react-apexcharts'
// import ApexCharts from 'react-apexcharts'

// function App() {

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'XYZ MOTORS',
        // data: dates
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      options: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: 'zoom'
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
        },
        title: {
          text: 'Stock Price Movement',
          align: 'left'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0);
            },
          },
          title: {
            text: 'Price'
          },
        },
        xaxis: {
          type: 'datetime',
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0)
            }
          }
        }
      },
    
    
    };

    // this.state = {
    //   chart: {
    //     type: 'bar'
    //   },
    //   series: [
    //     {
    //       name: 'sales',
    //       data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    //     }
    //   ],
    //   xaxis: {
    //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    //   }
    // }
  }
  

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        // type="bar"
        type="area"
        width={500}
        height={320}
      />

      // <ReactApexChart
      //   options={this.state.options}
      //   series={this.state.series}
      //   type="area"
      //   height={350}
      // />
      );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

// import ApexCharts from 'apexcharts'
// import ReactApexChart from 'apexcharts'
// import ApexCharts from 'apexcharts'

import Chart from 'react-apexcharts'
// import ApexCharts from 'react-apexcharts'


import { Line } from 'react-chartjs-2';

import { ResponsiveLine } from '@nivo/line'


// import DatePicker, {registerLocale} from "react-datepicker";
import DatePicker from "react-datepicker";
// // import es from 'date-fns/locale/es';
// import pt from 'date-fns/locale/pt';


import "react-datepicker/dist/react-datepicker.css";

// registerLocale('pt', pt)


// function App() {
  // colors:['#9C27B0', '#E91E63', '#9C27B0'],

  const dataNivo = [
    {
      "id": "data 1",
      // "color": "hsl(281, 70%, 50%)",
      // "color": "#9C27B0",
      "data": [
        {
          "x": "1980",
          "y": 5
        },
        {
          "x": "1981",
          "y": 8
        },
        {
          "x": "1982",
          "y": 9
        },
        {
          "x": "1983",
          "y": 10
        },
        {
          "x": "1984",
          "y": 12
        },
        {
          "x": "1985",
          "y": 14
        },
        {
          "x": "1986",
          "y": 19
        },
        {
          "x": "1987",
          "y": 19
        },
        {
          "x": "1988",
          "y": 21
        },
        {
          "x": "1989",
          "y": 21
        },
        {
          "x": "1990",
          "y": 23
        },
        {
          "x": "1991",
          "y": 25
        },
        {
          "x": "1992",
          "y": 26
        },
        {
          "x": "1993",
          "y": 27
        },
        {
          "x": "1994",
          "y": 30
        },
        {
          "x": "1995",
          "y": 40
        },
        {
          "x": "1996",
          "y": 45
        },
        {
          "x": "1997",
          "y": 50
        },
        {
          "x": "1998",
          "y": 49
        },
        {
          "x": "1999",
          "y": 60
        }
      ]
    },
    {
      "id": "data 2",
      // "color": "#E91E63",
      "data": [
        {
          "x": "1980",
          "y": 2
        },
        {
          "x": "1981",
          "y": 3
        },
        {
          "x": "1982",
          "y": 5
        },
        {
          "x": "1983",
          "y": 9
        },
        {
          "x": "1984",
          "y": 12
        },
        {
          "x": "1985",
          "y": 16
        },
        {
          "x": "1986",
          "y": 22
        },
        {
          "x": "1987",
          "y": 25
        },
        {
          "x": "1988",
          "y": 29
        },
        {
          "x": "1989",
          "y": 23
        },
        {
          "x": "1990",
          "y": 21
        },
        {
          "x": "1991",
          "y": 20
        },
        {
          "x": "1992",
          "y": 29
        },
        {
          "x": "1993",
          "y": 30
        },
        {
          "x": "1994",
          "y": 35
        },
        {
          "x": "1995",
          "y": 45
        },
        {
          "x": "1996",
          "y": 50
        },
        {
          "x": "1997",
          "y": 49
        },
        {
          "x": "1998",
          "y": 60
        },
        {
          "x": "1999",
          "y": 70
        }
      ]
    },

  ]


  const data = {
    // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    labels: [1980,1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    datasets: [
      {
        label: 'My First dataset',
        spanGaps: true,
        fill: true, // pintura da linha até o final
        lineTension: 0.5, // curva da linha
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [5, 8, 9, 10, 12, 14, 19, 20, 21, 23, 25, 26, 27, 30, 40, 45, 50, 49, 60, 70, 91]
        // data: [[5,5], [8, 10], 9, 10, 12, 14, 19, 20, 21, 23, 25, 26, 27, 30, 40, 45, 50, 49, 60, 70, 91]
        // data: [[1,5], [2, 10]]
      },
      {
        label: 'My First dataset2',
        spanGaps: true,
        fill: true, // pintura da linha até o final
        lineTension: 0.5, // curva da linha
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [2, 3, 5, 9, 12, 16, 22, 25, 29, 23, 21, 20, 29, 30, 35, 45, 50, 49, 60, 70, 91]
        // data: [[5,5], [8, 10], 9, 10, 12, 14, 19, 20, 21, 23, 25, 26, 27, 30, 40, 45, 50, 49, 60, 70, 91]
        // data: [[1,5], [2, 10]]
      },
    ]
  };


class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   startDate: new Date()
    // }

    this.state = {
      options: {
        chart: {
          id: 'apexchart-example',
          zoom: {
            // type: 'x',
            // enabled: false,
            autoScaleYaxis: false
          },
          toolbar: {
            // show: false,
            download: false,



            // autoSelected: 'zoom'
            // autoSelected: false
            // enabled: false
            // enabled: false
          },
        },

        tooltip: {
          enabled: true,
          enabledOnSeries: undefined,
          shared: true,
          followCursor: false,
          intersect: false,
          inverseOrder: false,
          custom: undefined,
          // custom: function({series, seriesIndex, dataPointIndex, w}) {
          //   console.log('series')
          //   console.log(series)
          //   console.log(seriesIndex)
          //   console.log(dataPointIndex)
          //   console.log(w)
          //   // return '<div class="arrow_box">' +
          //   //   '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
          //   //   '</div>'

          //   return (
          //     '<div style="width:60px; height:80px; backgroundColor:white">'+
          //       '<span>'+ series[0][dataPointIndex]  +'-</span>'+
          //       '<span>'+ series[1][dataPointIndex]  +'</span>'+
          //     '</div>'
          //   )
          // },
          fillSeriesColor: false,
          // theme: false,
          style: {
            fontSize: '12px', // tamanho total do tooltip
            fontFamily: undefined
          },
          // onDatasetHover: {
          //     highlightDataSeries: false,
          // },
          // x: {
          //     show: true,
          //     format: 'dd MMM',
          //     formatter: undefined,
          // },
          // y: {
          //     formatter: undefined,
          //     title: {
          //         formatter: (seriesName) => seriesName,
          //     },
          // },
          // z: {
          //     formatter: undefined,
          //     title: 'Size: '
          // },
          // marker: {
          //     show: true,
          // },
          // items: {
          //    display: 'flex',
          // },
          // fixed: {
          //     enabled: false,
          //     position: 'topRight',
          //     offsetX: 0,
          //     offsetY: 0,
          // },
        },



        colors:['#9C27B0', '#E91E63', '#9C27B0'],
        dataLabels: {
          enabled: false, // mostra os quadrados na linha
        },
        xaxis: {
          // type: 'datetime',
          categories: [1980,1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: 'series-1',
          data: [5, 8, 9, 10, 12, 14, 19, 20, 21, 23, 25, 26, 27, 30, 40, 45, 50, 49, 60, 70, 91]
        },
        // {
        //   name: 'series-2',
        //   data: [2, 3, 5, 9, 12, 16, 22, 25, 29, 23, 21, 20, 29, 30, 35, 45, 50, 49, 60, 70, 91]
        // }
    ]
    }
  }

  handleChange = (va) => {
    console.log(va)
    this.setState({startDate: va})
  }

  render() {
    return (
      <React.Fragment>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>react-apexcharts</p>
        <Chart
          options={this.state.options}
          series={this.state.series}
          // type="bar"
          type="area"
          // width={500}
          // height={320}
        />

        <p style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '20px' }}>react-chartjs-2</p>
        <Line
        // style={{ width: '500px', height: '320px' }}
          data={data}
          // width={500}
          // height={320}
        />


      <p style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '20px' }}>@nivo/line</p>
      <div style={{ height: '500px' }}>
        <ResponsiveLine
          data={dataNivo}
          curve='monotoneX'
          enableSlices='x'
          sliceTooltip={slice => {
            // console.log('slice tooltip')
            // console.log(slice)
            return (
            <div className={`tooltip-grafico`}>
              {/* <h4>{slice.point.serieId}</h4> */}
              <p>
                <span>
                  Variação:{' '}
                  {slice.slice.points[0].data.y}
                  {/* <em>{slice.point.data.y.toString().replace('.', ',')}</em> */}
                </span>
                <br />
                <span>
                {slice.slice.points[1].data.y}
                  {/* Data: <em>{slice.point.data.x}</em> */}
                </span>
              </p>
            </div>
          )}}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          // yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
          // yScale={{ type: 'point', min: 'auto', max: 'auto', stacked: true, reverse: false }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          // colors={{ scheme: 'nivo' }}
          colors={['#9C27B0', '#E91E63', '#9C27B0']}
          enablePoints={true}
          pointSize={5}
          // pointColor={{ theme: 'background' }}
          pointColor={{ from: 'color', modifiers: [] }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </div>


      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        // locale="pt-BR"
        locale="pt-BR"
        // dateFormat="MM/dd/yyyy h:mm aa"
        dateFormat="dd/MM/yyyy"
        // dateFormat="Pp"
      />
      </React.Fragment>
    )
  }
}

export default App;

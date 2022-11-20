import React from "react"
import './chart.css'
import { Chart as ChartJS, registerables } from 'chart.js'
import { Line } from "react-chartjs-2"
ChartJS.register(...registerables);



const ChartSection = ({ data, isLoading }) => {
  const deaths = data.map((dead) => {
    return dead.deaths.total
  })
  console.log(deaths)

  const cases = data.map((dat) => {
    return dat.cases.total
  })

  const tests = data.map((dat) => {
    return dat.tests.total
  })

  const label = data.map((dat) => {
    return dat.time.slice(11, -9)
  })

  const chart = {
    labels: label.reverse(),
    datasets: [
      {
        label: "Deaths",
        borderColor: 'red',
        lineTension: 0.1,
        data: deaths.reverse(),
        fill: false
      },
      {
        label: "Cases",
        borderColor: 'blue',
        data: cases.reverse(),
        fill: false
      },
      {
        label: "Test",
        borderColor: 'yellow',
        data: tests.reverse(),
        fill: false
      },
    ],

  }

  return (
    <section id="chart">
      <div className="chartsection">
        <h1>Hourly graph of showing covid-19 history</h1>

        <div style={{ width: "80%" }}>
          {
            isLoading ?
              <div className="loaderImage">
                <img src="./images/loader.gif" width={300} />
              </div>
              :
              <Line data={chart} />


          }

        </div>
      </div>
    </section>

  )
}

export default ChartSection
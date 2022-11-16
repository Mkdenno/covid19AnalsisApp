import React, { useState, useEffect } from 'react'
import Statistic from './Statistic'
import Table from './Table'


const Home = () => {

  const [stats, setStats] = useState([])

  const statisticoptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5970fc4886msh928284f8d99bbbfp184ca1jsn8771bf837182",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com"
    }

  }

  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  useEffect(() => {
    fetch("https://covid-193.p.rapidapi.com/statistics", statisticoptions)
      .then((res) => res.json())
      .then((data) => {
        setStats(data.response)
      })

  }, [])



  return (
    <div>
      <Table stats={stats}/>
    </div>
  )
}

export default Home
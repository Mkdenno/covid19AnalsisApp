import React from 'react'
import ChartSection from "./Chart";
import Table from './Table'


const Home = ({ stats,data,isLoading }) => {


  return (
    <div>
      <ChartSection data={data} isLoading={isLoading} />
      <Table stats={stats} />
    </div>
  )
}

export default Home
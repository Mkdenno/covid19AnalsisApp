import Home from "./components/Home";
import React , { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {


  const [stats, setStats] = useState([])
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false);


  const historyOption = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5970fc4886msh928284f8d99bbbfp184ca1jsn8771bf837182",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com"
    }

  }
  const statisticoptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5970fc4886msh928284f8d99bbbfp184ca1jsn8771bf837182",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com"
    }

  }
  

  useEffect(() => {
    setIsLoading(true);
    fetch("https://covid-193.p.rapidapi.com/statistics", statisticoptions)
      .then((res) => res.json())
      .then((data) => {
        setStats(data.response)
        setIsLoading(false);

      })

  }, [])

  useEffect(() => {
    setIsLoading(true);
    fetch("https://covid-193.p.rapidapi.com/history?country=usa", historyOption)
      .then((res) => res.json())
      .then((data) => {
        setData(data.response)
        setIsLoading(false);
        console.log(data.response)
      })

  }, [])
  return (
    <div className="App">
      <Header/>
      <Home stats={stats} isLoading={isLoading} data={data}/>
    </div>
  );
}

export default App;

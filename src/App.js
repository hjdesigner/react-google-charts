import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import logo from './logo.svg';
import './App.css';

function App() {
  const [options, setOptions] = useState({
    title: 'Gráfico de Pizza'
  })
  const [data, setData] = useState([
    ['Linguagens', 'Quantidade'],
    ['React', 100],
    ['Angula', 80],
    ['Vue', 50],
  ])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            data={data}
            options={options}
          />
        </div>
      </header>
    </div>
  );
}

export default App;

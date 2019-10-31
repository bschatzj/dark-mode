import React from 'react'
import Chart from "./Chart";


const newChart = ({ coinData }) => {

return (
    coinData.map(coin => (
        <div className="chart__container" key={coin.current_price} valueOne = {coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h2 className='current_price;'>{coin.current_price} </h2>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      )))
  
};
export default newChart;
import React, { useState, useEffect } from "react";
import Chart from "./Chart";

export default function charts(props) {
  console.log(props)


let sorted = []

{props.coinData.map(coin => sorted.push((
  <div className="chart__container" key={coin.current_price} valueOne = {coin.name}>
    <h2 className="coin__title">{coin.name}</h2>
    <h2 className='current_price;'>{coin.current_price} </h2>
    <div className="coin__logo">
      <img src={coin.image} height="40" alt={coin.name} />
    </div>
    <Chart sparklineData={coin.sparkline_in_7d.price} />
  </div>
)))}


if (props.sortFunction == "alphabetical"){
  props.alphabetical(sorted)
}
if (props.sortFunction == 'reverseAlpha'){
  props.reverseAlpha(sorted)
}
if (props.sortFunction == 'desending'){
  props.desending(sorted)
}
if (props.sortFunction == 'ascending'){
  props.ascending(sorted)
}


  return (
    sorted
  );
};


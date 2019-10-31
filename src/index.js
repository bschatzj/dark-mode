import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import styled from 'styled-components'

import "./styles.scss";

const Button = styled.button`
width: 200px;
margin 20px;
background-color: purple;
color: orange;
border: none;
font-size: 2rem;
`

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [sortFunction, setSortFunction] = useState('desending')
  
function desending(data) {
  data.sort(function(a, b){
  return a.key-b.key
})}

function ascending(data) {
  data.sort(function(a, b){
    return b.key - a.key 
  })
}

function alphabetical(data) {data.sort(function(a, b){
  let nameA=a.props.valueOne.toLowerCase(), nameB=b.props.valueOne.toLowerCase()
  if (nameA < nameB)
      return -1 
  if (nameA > nameB)
      return 1
  return 0 
})}

function reverseAlpha(data) {data.sort(function(a, b){
  let nameA=a.props.valueOne.toLowerCase(), nameB=b.props.valueOne.toLowerCase()
  if (nameA > nameB)
      return -1 
  if (nameA < nameB)
      return 1
  return 0 
})}


  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
 
  return (
    <div className="App">
      <Navbar />
      <Button onClick={() => {setSortFunction('alphabetical')}}>alphabetical</Button>
      <Button onClick={() => {setSortFunction('desending')}}>ascending value</Button>
      <Button onClick={() => {setSortFunction('ascending')}}>desending value</Button>
      <Button onClick={() => {setSortFunction('reverseAlpha')}}>Reverse alphabetical</Button>
      <Charts coinData={coinData}
      sortFunction={sortFunction}
      reverseAlpha = {reverseAlpha}
      alphabetical = {alphabetical}
      desending = {desending}
      ascending = {ascending}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

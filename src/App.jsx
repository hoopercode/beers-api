import React, {useState, useEffect} from 'react';

import './App.scss';

import Nav from "../src/components/Nav/Nav"
import Main from './components/Main/Main';


const App = () => {
const [count, setCount] = useState(0)
const [searchTerm, setSearchTerm] = useState("")
const [punk, setPunk] = useState([])
const [Acidic, setAcidic] = useState([])
const [HighABV, setHighABV] = useState([])
const [ClassicRange, setClassicRange] = useState([])


useEffect(() => {

  const getPunk = () => {//This function gets all Punk Beers
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
      .then((response) => response.json())
      .then((response) => setPunk(response));
  }

  const getAcidic = () => {//This function gets all Acidic Beers
    //This isn't working
    fetch("https://api.punkapi.com/v2/beers?ph_gt=4")
      .then((response) => response.json())
      .then((response) => setAcidic(response));
  }

  const getHighABV = () => {//This function gets all High ABV  Beers
    fetch("https://api.punkapi.com/v2/beers?abv_gt=6")
      .then((response) => response.json())
      .then((response) => setHighABV(response));
  }

  const getClassicRange = () => {//This function gets all beers before 2010
    fetch("https://api.punkapi.com/v2/beers?brewed_before=01-2010")
    .then((response) => response.json())
    .then((response) => setClassicRange(response));
  }
getPunk()
getAcidic()
getHighABV()
getClassicRange()

},[count])




const handleInput = event => {
  const cleanInput = event.target.value.toLowerCase();
  setSearchTerm(cleanInput)

}





const filteredBeers = punk.filter(beer => {
  const searchToLower = beer.name.toLowerCase()
  
  return searchToLower.includes(searchTerm)
  
  });


const handleClick = () => {

punk.map((punk) => {
  const abv = punk.abv;
  console.log(abv)
})
  return 
}



return (

<div className="app">

  <header>
    <Nav placeholder="Search" searchTerm={searchTerm} handleInput={handleInput} handleClick={handleClick} filterHighABV={filteredBeers} filterAcidic={filteredBeers} filterClassic={filteredBeers}/>
  </header>
    <Main beersArr={filteredBeers}/>
</div>
    
  )
};

export default App
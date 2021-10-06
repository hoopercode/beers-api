import React, {useState, useEffect} from 'react';

import './App.scss';

import Nav from "../src/components/Nav/Nav"
import Main from './components/Main/Main';
import HighABV from './components/BeerFilter/HighABV/HighABV';



const App = () => {
const [count, setCount] = useState(0)
const [link, setLink] = useState("https://api.punkapi.com/v2/beers?page=2&per_page=80")
const [searchTerm, setSearchTerm] = useState("")
const [punk, setPunk] = useState([])





useEffect(() => {

  const getPunk = () => {//This function gets all Punk Beers
    fetch(link)
      .then((response) => response.json())
      .then((response) => {setPunk(response)
      console.log(response)});
  }

  
getPunk()

},[link])

//Mapping over punk to get the beers to lowercase to match with search term below.
const filteredBeers = punk.filter(beer => {  
  const searchToLower = beer.name.toLowerCase()

  return searchToLower.includes(searchTerm)
  
  });


//Functions to handle clicking the Nav words
const handleHighABV = () => {
 setLink("https://api.punkapi.com/v2/beers?abv_gt=6")
}

const handleClassicRange = () => {
  setLink("https://api.punkapi.com/v2/beers?brewed_before=01-2010")
  
}
//Not working yet
const handleAcidic= () => {

  link.map()
  setLink("https://api.punkapi.com/v2/beers?ph_gt=4")
}

const handleAllBeers = () => {
  setLink("https://api.punkapi.com/v2/beers?page=2&per_page=80")
}


//Getting search input, turning it to lower case and then setting Search Term as the lower case version.
const handleInput = event => {
  const cleanInput = event.target.value.toLowerCase();
  setSearchTerm(cleanInput)
  

}
//What we are showing on the page
return (

<div className="app">

  <header>
    <Nav placeholder="Search" searchTerm={searchTerm} handleInput={handleInput} handleAcidicClick={handleAcidic} handleClassicRangeClick={handleClassicRange}handleHighABVClick={handleHighABV} handleAllBeersClick={handleAllBeers}/>
  </header>
    <Main beersArr={filteredBeers}/>
</div>
    
  )
};

export default App
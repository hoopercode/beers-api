import React, {useState, useEffect} from 'react';

import './App.scss';

import Nav from "../src/components/Nav/Nav"
import Main from './components/Main/Main';
import HighABV from './components/BeerFilter/HighABV/HighABV';



const App = () => {
const [count, setCount] = useState(0)
const [link, setLink] = useState("")
const [searchTerm, setSearchTerm] = useState("")
const [punk, setPunk] = useState([])
const [Acidic, setAcidic] = useState([])
const [HighABV, setHighABV] = useState([])
const [ClassicRange, setClassicRange] = useState([])





useEffect(() => {

  const getPunk = () => {//This function gets all Punk Beers
    fetch(`https://api.punkapi.com/v2/beers${link}`)
      .then((response) => response.json())
      .then((response) => {setPunk(response)
      console.log(response)});
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

},[link])

//Mapping over punk to get the beers to lowercase to match with search term below.
const filteredBeers = punk.filter(beer => {  
  const searchToLower = beer.name.toLowerCase()

  return searchToLower.includes(searchTerm)
  
  });


//Functions to handle clicking the Nav words - Not currently working
const handleHighABV = () => {
 setLink("?abv_gt=6")
}

const handleClassicRange = () => {
  setLink("?brewed_before=01-2010")
  
}

const handleAcidic= () => {
  setLink("https://api.punkapi.com/v2/beers?ph_gt=4")
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
    <Nav placeholder="Search" searchTerm={searchTerm} handleInput={handleInput} handleAcidicClick={handleAcidic} handleClassicRangeClick={handleClassicRange}handleHighABVClick={handleHighABV}/>
  </header>
    <Main beersArr={filteredBeers}/>
</div>
    
  )
};

export default App
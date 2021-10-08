import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Route
} from "react-router-dom";

import './App.scss';
import data from "../src/data/beers"

import Nav from "../src/components/Nav/Nav"
import Main from './components/Main/Main';




const App = () => {
  

const [link, setLink] = useState("?page=2&per_page=80")
const [searchTerm, setSearchTerm] = useState("")
const [punk, setPunk] = useState([])
const [acidic, setAcidic] =useState([])
const [highABV, setHighABV] =useState([])
const [classicRange, setClassicRange] = useState([])

useEffect(() => {

  const getPunk = () => {//This function gets all Punk Beers
    fetch(`https://api.punkapi.com/v2/beers${link}`)
      .then((response) => response.json())
      .then((response) => {setPunk(response)});
       }

  const getAcidic = () => {//This function gets all Punk Beers
        fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=80`)
          .then((response) => response.json())
          .then((response) => {setAcidic(response)});
            }

  const getHighABV = () => {//This function gets all Punk Beers
        fetch(`https://api.punkapi.com/v2/beers?abv_gt=6`)
          .then((response) => response.json())
          .then((response) => {setHighABV(response)});
                  }
  const getClassicRange = () => {//This function gets all Punk Beers
        fetch(`https://api.punkapi.com/v2/beers?brewed_before=01-2010`)
          .then((response) => response.json())
          .then((response) => {setClassicRange(response)});
                  }               


    getPunk()
    getAcidic()   
    getHighABV()
    getClassicRange()
    setTimeout(function(){}, 3000);
    },[link])


//Functions to handle clicking the Nav words
const handleAllBeers = () => {
  setLink("?page=2&per_page=80")
}

const handleHighABV = () => {
 setLink("?abv_gt=6")
}

const handleClassicRange = () => {
  setLink("?brewed_before=01-2010")
  
}
//Not working yet
const handleAcidic= () => {
 console.log(acidicBeers)

}



//Getting search input, turning it to lower case and then setting Search Term as the lower case version.
const handleInput = event => {
  const cleanInput = event.target.value.toLowerCase();
  setSearchTerm(cleanInput)
}

//Mapping over punk to get the beers to lowercase to match with search term below.

  const filteredBeers = punk.filter(beer => {  
  const searchToLower = beer.name.toLowerCase()

  return searchToLower.includes(searchTerm)
  
  });

const acidicBeers = acidic.filter(beer => {
  
  const acidicBeer = beer.ph < 4

  return acidicBeer
})
  
//What we are showing on the page
return (
<Router>
  <div className="app">

    <header>
      <Nav placeholder="Search" searchTerm={searchTerm} handleInput={handleInput} handleAcidicClick={handleAcidic} handleClassicRangeClick={handleClassicRange}handleHighABVClick={handleHighABV} handleAllBeersClick={handleAllBeers}/>
    </header>
    <Switch>
     <Route path="/acidic">
        <Main beersArr={acidicBeers} placeholder="Search" searchTerm={searchTerm} handleInput={handleInput} />
      </Route>
      <Route path="/classicRange">
        <Main beersArr={classicRange} placeholder="Search" searchTerm={searchTerm} handleInput={handleInput} />
      </Route>
      <Route path="/highABV">
        <Main beersArr={highABV} placeholder="Search" searchTerm={searchTerm} handleInput={handleInput} />
      </Route>
      <Route path="/">
        <Main beersArr={filteredBeers} placeholder="Search" searchTerm={searchTerm} handleInput={handleInput} />
      </Route>
    </Switch>
  </div>
</Router>
  )
};

export default App
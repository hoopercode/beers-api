import React, {useState} from 'react';

import './App.scss';

import Nav from "../src/components/Nav/Nav"
import Main from './components/Main/Main';
import beers from './data/beers';


const App = () => {
const [searchTerm, setSearchTerm] = useState("")
const [selection, setSelection] = useState("")

const handleInput = event => {
  const cleanInput = event.target.value.toLowerCase();
  setSearchTerm(cleanInput)

}

const filteredBeers = beers.filter(beer => {
  const searchToLower = beer.name.toLowerCase()
  
  return searchToLower.includes(searchTerm)
  
  });

const HighABVFilter = beers.filter(beer => {
    const searchToLower = beer.name.toLowerCase()
    
    return searchToLower.includes(searchTerm)

    
    });

const handleClick = event => {
 let selection = "hello"
  console.log(event.target.value)

  return selection
}



return (

<div className="app">
  <header>
    <Nav placeholder="Search" searchTerm={searchTerm} handleInput={handleInput} handleClick={handleClick} selection={selection}/>
  </header>
    <Main beersArr={filteredBeers}/>
</div>
    
  )
};

export default App
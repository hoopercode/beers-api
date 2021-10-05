import React, {useState} from 'react';

import './App.scss';

import Nav from "../src/components/Nav/Nav"
import Main from './components/Main/Main';


const App = () => {
const [searchTerm, setSearchTerm] = useState("")
const [selection, setSelection] = useState("")
const [punk, setPunk] = useState([])

const handleInput = event => {
  const cleanInput = event.target.value.toLowerCase();
  setSearchTerm(cleanInput)

}
const getPunk = () => {
  fetch("https://api.punkapi.com/v2/beers")
    .then((response) => response.json())
    .then((response) => setPunk(response));
   

}
getPunk()

console.log(punk)



const filteredBeers = punk.filter(beer => {
  const searchToLower = beer.name.toLowerCase()
  
  return searchToLower.includes(searchTerm)
  
  });

// const HighABVFilter = beers.filter(beer => {
//     const searchToLower = beer.name.toLowerCase()
    
//     return searchToLower.includes(searchTerm)

    
//     });

const handleClick = event => {
 let selection = "hello"
  console.log(event.target.value)

  return selection
}



return (

<div className="app">
  <header>
    <Nav placeholder="Search" searchTerm={searchTerm} handleInput={handleInput}/>
  </header>
    <Main beersArr={filteredBeers}/>
</div>
    
  )
};

export default App
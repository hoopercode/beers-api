import React, {useState} from 'react';
import "./SearchBar.scss"


const SearchBar = () => { 

const getData = (text) => {
  console.log(text.target.value)
}
    return (

      <input id="searchBar "type="text" placeholder="Search" onChange={getData} />
    
    )
  }


export default SearchBar;
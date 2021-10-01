import './App.scss';

import Nav from "../src/components/Nav/Nav"
import BeerCard from './components/BeerCard/BeerCard';
import beers from './data/beers';

const App = () => {

return (

<div className="app">
  <header>
      <Nav />
  </header>
  <section className="beerCards">
    <BeerCard beersArr={beers}/>
  </section>
</div>
    
  )
};

export default App
import './App.scss';

import Nav from "../src/components/Nav/Nav"
import BeerCard from './components/BeerCard/BeerCard';
import beers from './data/beers';

const names = beers.map(beer => beer.name)
const images = beers.map(beer => beer.image)
const taglines = beers.map(beer => beer.tagline)


const App = () => {

return (

<div className="app">
  <header>
      <Nav />
  </header>
  <section className="beerCards">
    <BeerCard name={beers[0].name} imgSrc={beers[0].image_url} description={beers[0].description} tagline={beers[0].tagline}/>
    <BeerCard name={beers[1].name} imgSrc={beers[1].image_url} description={beers[1].description} tagline={beers[1].tagline}/> 
    <BeerCard name={beers[2].name} imgSrc={beers[2].image_url} description={beers[2].description} tagline={beers[2].tagline}/>
    <BeerCard name={beers[3].name} imgSrc={beers[3].image_url} description={beers[3].description} tagline={beers[3].tagline}/>
    <BeerCard name={beers[4].name} imgSrc={beers[4].image_url} description={beers[4].description} tagline={beers[4].tagline}/>
    <BeerCard name={beers[5].name} imgSrc={beers[5].image_url} description={beers[5].description} tagline={beers[5].tagline}/>
  </section>
</div>
    
  )
};

export default App
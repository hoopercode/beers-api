# Feedback

Right click on the file and click Open Preview or `ctrl/cmd + shift + v` to open preview

## Goals

1. Working beers web app - ✔
2. Practice using API and React - ✔
3. Application of what you're learning (React, Fetch etc.) - ✔

## Specification

### Start

- All the wireframe content in black is the first part of the challenge - that is, the sidenav, the main section containing the beers and beer cards for each piece of data.

### Extension 1

- Once you've got the design and layout sorted to render the elements, it's time to add some search functionality. Make it so you can search the beers by their name, and the page content should update as you type each letter in the box.

### Extension 2

- Finally attempt to make it so you can filter the content on three conditions:

  - High Alcohol (ABV value greater than 6%)
  - Classic Range (Was first brewed before 2010)
  - High Acidity (pH lower than 4)
  - If you can’t achieve this after a good attempt, then feel free to move on to the final extension.

### Extension 3

- Style the website however you see fit! Go wild!

## Overall

This code is really really clever, I like your use of reacts state and routing in order to serve different views of the application and it shows that your understanding react well. The notes below are mostly related to vanilla JS concepts like functional programming and reusability.

## To work on

### Smarter way of making multiple API calls

You create four different fetch functions which all look the same apart from the url difference. Simple change here is to pass the url to fetch from as a parameter:

```js
const getBeers = async (option) => {
  const response = await fetch("https://api.punkapi.com/v2/beers?" + option);
  const jsonResponse = await response.json();
  return jsonResponse;
};
```

Another quality of life change is that your App handles a large amnount of logic with fetching from the API for all routes. This is fine for the small API but consider if you had more data to fetch from a larger database. It would make more sense to only fetch the data when someone visits that page, as opposed to fetching the data and passing the data down.

Consider this example instead:

```jsx
// Main.jsx
const Main = (props) => {
  const [beers, setBeers] = useState([]);

  const { getBeers } = props;

  useEffect(() => {
    const fetchedBeers = getBeers();
    setBeers(fetchedBeers);
  }, []);

  return <main>{/* some jsx */}</main>;
};

export default Main;
```

Where `getBeers()` is the function written in App above. This allows each "page" of the app to only fetch the data when it loaded (mounted) onto the webpage.

This also clears a lot of state from your App component and makes your Main more responsible for getting data as it should be.

### BeerCard:

Minor note, but very important, there are very few use cases where you should be declaring functions inside of other functions. So the `descriptionShorten()` function should be moved outside of the `beersArr.map`

On the `beersArr.map`, there is a lot of JSX declared inside the map, along with styling. It's a better practice to turn `BeerCard` into the singular version of the component where it accepts a prop for a single beer, and move the map up a level to `Main` where you can render a lot of `BeerCard`s with a `map`. This keeps `map` methods simple and easy to understand but will require a small restructure of logic.

### duplicate components

SeeAllBeers, HighABV, ClassRange and Acidic are all the same component and do the same thing. You can instead create a single component that looks like this:

```jsx
import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

function Navigation(props) {
  const { to, handleNavigationClick, selection, filterNavigation, text } =
    props;

  return (
    <Link to={to}>
      <p
        className="nav__Navigation"
        onClick={handleNavigationClick}
        value={filterNavigation}
        selection={selection}
      >
        {text}
      </p>
    </Link>
  );
}

export default Navigation;
```

And use it like this:

```jsx
function BeerFilter(props) {
  const {
    handleHighABVClick,
    handleAcidicClick,
    handleClassicRangeClick,
    handleAllBeersClick
  } = props;
  return (
    <>
      <Navigation
        to="/"
        handleNavigationClick={handleAllBeersClick}
        text="See the entire range"
      />
      <Navigation
        to="/highABV"
        handleNavigationClick={handleHighABVClick}
        text="High ABV &#40;&#60;6.0%&#41;"
      />
      <Navigation
        to="/classicRange"
        handleNavigationClick={handleClassicRangeClick}
        text="Classic Range"
      />
      <Navigation
        to="/acidic"
        handleNavigationClick={handleAcidicClick}
        text="Acidic"
      />
    </>
  );
}
```

This generalises the components a lot and makes them very resuable. However, if you follow the rest of the advice, the pages we now be maintaining their own state, and performing their own fetches on load so there would be no need to pass any functions into these components at all in the navbar. Then it could be stripped back to just being a simple navbar which would render text, wrapped in a `<Link>` component:

```jsx
function BeerFilter(props) {
  return (
    <>
      <Link to="/">See the entire range</Link>
      <Link to="/highABV">High ABV &#40;&#60;6.0%&#41;</Link>
      <Link to="/classicRange">Classic Range</Link>
      <Link to="/acidic">Acidic</Link>
    </>
  );
}
```

Hopefully that doesn't feel like too much, but the react code is of a really good quality! These are just some ways to take it to a next level by leveraging the props system better and thinking about which component handles which responsibility more.

Really good job!

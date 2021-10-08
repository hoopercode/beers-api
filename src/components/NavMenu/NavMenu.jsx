

import "./NavMenu.scss";
import blackCross from "../../assets/images/black-cross.png"
import {Link} from "react-router-dom"


const NavMenu = props => {
  const { toggleNav } = props;

  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img src={blackCross} alt="Close menu" className="nav-menu__cross" onClick={toggleNav} />

        <Link to="/" className="nav-menu__item" onClick={toggleNav}>
          Home
        </Link>
        <Link to="/acidic" title="Rated Albums" className="nav-menu__item" onClick={toggleNav}>
          Acidic Beers
        </Link>
        <Link to="/highABV" className="nav-menu__item" onClick={toggleNav}>
          High ABV Beers
        </Link>
        <Link to="/classicRange" className="nav-menu__item" onClick={toggleNav}>
          Classic Range Beers
        </Link>
      
       
      </div>
    </div>
  );
};

export default NavMenu;

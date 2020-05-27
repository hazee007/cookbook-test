import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const SideBar = () => (
  <div className="side">
    <h2 className="title">Meal's Menu</h2>

    <ul className="ul">
      <div className="link">
        <li>
          <Link to="/toast_hawaii">Toast Hawaii</Link>
        </li>
        <li>
          <Link to="/classic_hamburger">Classic Hamburger</Link>
        </li>
        <li>
          <Link to="/wiener_schnitzel">Wiener Schnitzel</Link>
        </li>
        <li>
          <Link to="/salad">Salad with Smoked Salmon</Link>
        </li>
        <li>
          <Link to="/spaghetti">Spaghetti with Tomato Sauce</Link>
        </li>
      </div>
    </ul>
  </div>
);

export default SideBar;

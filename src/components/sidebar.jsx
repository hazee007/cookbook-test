import React from 'react';
import { Link } from 'react-router-dom';
import { recipes } from './recipes';
import './styles.css';

const SideBar = () => (
  <div className="side">
    <h2 className="title">Meal's Menu</h2>

    <ul className="ul">
      <div className="link">
        {recipes.map((recipe, index) => (
          <li key={index}>
            <Link to={recipe.Url}>{recipe.title}</Link>
          </li>
        ))}
      </div>
    </ul>
  </div>
);

export default SideBar;

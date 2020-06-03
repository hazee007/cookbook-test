import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { createStructuredSelector } from 'reselect';
import { selectRecepies } from '../redux/recepies/recepie.selector';
import { connect } from 'react-redux';

const SideBar = ({ getrecipe }) => {
  if (getrecipe) {
  }
  console.log(getrecipe);
  return (
    <div className="side">
      <h2 className="title">Meal's Menu</h2>

      <ul className="ul">
        <div className="link">
          {getrecipe
            ? getrecipe.map((recipe, index) => (
                <li key={index}>
                  <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                </li>
              ))
            : null}
        </div>
      </ul>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  getrecipe: selectRecepies,
});

export default connect(mapStateToProps)(SideBar);

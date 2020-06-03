import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import './styles.css';
import {
  getRecipeById,
  selectRecepies,
} from '../redux/recepies/recepie.selector';
import { createStructuredSelector } from 'reselect';

const MealDetails = () => {
  // React router has this nice hook now, we can get match in any file we ant
  const match = useRouteMatch();
  // Get our selected recipe from the URL
  const recipeId = match.params.id;
  // Find this specific recipe from the redux store
  const recipe = useSelector((state) => getRecipeById(state, recipeId));
  debugger;

  // Most likely, we're loading data
  if (!recipe) return null;

  return (
    <div className="food">
      <div key={recipe.id}>
        {
          <div className="detail-card">
            <h2 className="title">{recipe.title}</h2>
            <img src={recipe.imageUrl} alt="food" />
            <p>Duration: {recipe.duration}m</p>
            <h3 className="title">Ingredients</h3>
            {recipe.ingredients.map((ingredients, index) => (
              <p className="listItem" key={index}>
                {ingredients}
              </p>
            ))}
            <h3 className="title">Steps</h3>
            {recipe.steps.map((steps, index) => (
              <p className="listItem" key={index}>
                {steps}
              </p>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  getrecipe: selectRecepies,
});

export default connect(mapStateToProps)(MealDetails);

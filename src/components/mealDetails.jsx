import React from 'react';
import { recipes } from './recipes';
import './styles.css';

const MealDetails = ({ match }) => {
  let params;
  if (match !== undefined) {
    params = match.params.id;
  }
  console.log(params);
  return (
    <div className="food">
      {recipes.map((recipe) =>
        recipe.Url === params ? (
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
        ) : null
      )}
    </div>
  );
};

export default MealDetails;

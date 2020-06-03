import React from 'react';
import './styles.css';
import { selectRecepies } from '../redux/recepies/recepie.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const MealDetails = ({ match, getrecipe }) => {
  let params;
  if (match !== undefined) {
    params = match.params.id;
  }
  console.log(params);
  return (
    <div className="food">
      {getrecipe
        ? getrecipe.map((recipe) =>
            recipe.routeName === encodeURI(params.toLowerCase()) ? (
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
          )
        : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  getrecipe: selectRecepies,
});

export default connect(mapStateToProps)(MealDetails);

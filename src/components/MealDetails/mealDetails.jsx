import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import {
  getRecipeById,
  selectRecepies,
} from '../../redux/recepies/recepie.selector';
import { createStructuredSelector } from 'reselect';
import {
  Container,
  Title,
  SubTitle,
  ListItem,
  Image,
} from './mealDetails.styles';

const MealDetails = () => {
  // React router has this nice hook now, we can get match in any file we ant
  const match = useRouteMatch();
  // Get our selected recipe from the URL
  const recipeId = match.params.id;
  // Find this specific recipe from the redux store
  const recipe = useSelector((state) => getRecipeById(state, recipeId));

  // Most likely, we're loading data
  if (!recipe) return null;

  return (
    <Container>
      <div key={recipe.id}>
        {
          <div>
            <Title>{recipe.title}</Title>
            <Image src={recipe.imageUrl} alt="food" />
            <p>Duration: {recipe.duration}m</p>
            <SubTitle>Ingredients</SubTitle>
            {recipe.ingredients.map((ingredients, index) => (
              <ListItem key={index}>{ingredients}</ListItem>
            ))}
            <SubTitle>Steps</SubTitle>
            {recipe.steps.map((steps, index) => (
              <ListItem key={index}>{steps}</ListItem>
            ))}
          </div>
        }
      </div>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  getrecipe: selectRecepies,
});

export default connect(mapStateToProps)(MealDetails);

import React, { useState } from 'react';
import {
  Article,
  Main,
  FormContainer,
  FieldSet,
  Legend,
  Container,
  Label,
  Input,
  Button,
  LinkContainer,
  ButtonLink,
} from './formStyles';
// import { useDispatch } from 'react-redux';
// import { addRecipeCollection } from '../../firebase/firebase.utils';
// import RecepieActionType from '../../redux/recepies/recepie.types';

const Form = () => {
  // const dispatch = useDispatch();
  const [recipeDetails, setRecipeDetails] = useState({
    title: '',
    url: '',
    author: '',
    duration: '',
    steps: [],
    ingredients: [],
  });

  debugger;

  const addSteps = () => {
    debugger;
    setRecipeDetails({ steps: [...recipeDetails.steps, ''] });
  };

  const handleAddStep = (e) => {
    debugger;
    const updatedSteps = [...recipeDetails.steps];
    updatedSteps[e.target.dataset.id] = e.target.value;
    setRecipeDetails({ steps: updatedSteps });
  };

  const removeStep = (index) => {
    let step = [...recipeDetails.steps];
    step.splice(index, 1);
    setRecipeDetails({ steps: step });
  };

  const addIng = () => {
    debugger;
    setRecipeDetails({ ingredients: [...recipeDetails.ingredients, ''] });
  };

  const handleAddIng = (e) => {
    debugger;
    const updatedIng = [...recipeDetails.ingredients];
    updatedIng[e.target.dataset.idx] = e.target.value;
    setRecipeDetails({ ingredients: updatedIng });
  };

  const removeIng = (index) => {
    let ing = [...recipeDetails.ingredients];
    ing.splice(index, 1);
    setRecipeDetails({ ingredients: ing });
  };

  const handleChange = (event) => {
    debugger;
    const { value, name } = event.target;
    setRecipeDetails({ ...recipeDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(recipeDetails);
    // addRecipeCollection('Recepies', recipeDetails, (addrecipe) => {
    //   dispatch({ type: RecepieActionType.ADD_RECIPES_SUCCESS, addrecipe });
    // });
  };

  return (
    <Article>
      <Main>
        <FormContainer onSubmit={handleSubmit}>
          <FieldSet>
            <Legend>Add Recepie</Legend>
            <Container>
              <Label>Name of Recepie</Label>
              <Input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
              />
            </Container>
            <Container>
              <Label>ImageUrl</Label>
              <Input type="text" name="url" id="url" onChange={handleChange} />
            </Container>
            <Container>
              <Label>Author</Label>
              <Input
                type="text"
                name="author"
                id="author"
                onChange={handleChange}
              />
            </Container>
            <Container>
              <Label>Duration</Label>
              <Input
                type="number"
                name="duration"
                id="duration"
                onChange={handleChange}
              />
            </Container>
            <Container>
              <Label>Steps</Label>
              <Button type="button" value="Add Steps" onClick={addSteps} />

              {recipeDetails.steps.map((val, index) => (
                <div key={index}>
                  <Input
                    type="text"
                    name="steps"
                    // value={val}
                    data-id={index}
                    onChange={handleAddStep}
                  />

                  <Button
                    type="button"
                    value="Remove Steps"
                    onClick={() => removeStep(index)}
                  />
                </div>
              ))}
            </Container>
            <Container>
              <Label>Ingredients</Label>
              <Button type="button" value="Add Ingredients" onClick={addIng} />

              {recipeDetails.ingredients.map((value, index) => (
                <div key={index}>
                  <Input
                    type="text"
                    name="ingredients"
                    // value={value}
                    data-idx={index}
                    onChange={handleAddIng}
                  />

                  <Button
                    type="button"
                    value="Remove"
                    onClick={() => removeIng(index)}
                  />
                </div>
              ))}
            </Container>
          </FieldSet>
          <Button type="submit" value="Submit" />
          <LinkContainer>
            <ButtonLink to="/recipe/:id">Meal Menu </ButtonLink>
          </LinkContainer>
        </FormContainer>
      </Main>
    </Article>
  );
};

export default Form;

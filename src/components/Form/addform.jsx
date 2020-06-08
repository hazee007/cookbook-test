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
import { useDispatch } from 'react-redux';
import { addRecipeCollection } from '../../firebase/firebase.utils';
import RecepieActionType from '../../redux/recepies/recepie.types';
import { Redirect } from 'react-router-dom';

const Form = () => {
  const dispatch = useDispatch();
  const [recipeDetails, setRecipeDetails] = useState({
    title: '',
    url: '',
    author: '',
    duration: '',
  });

  const [steps, setSteps] = useState({ steps: [] });
  const [ingredients, setIngredients] = useState({ ingredients: [] });

  const addSteps = () => {
    setSteps({ steps: [...steps.steps, ''] });
  };

  const handleAddStep = (e) => {
    const updatedSteps = [...steps.steps];
    updatedSteps[e.target.dataset.id] = e.target.value;
    setSteps({ steps: updatedSteps });
  };

  const removeStep = (index) => {
    let delStep = [...steps.steps];
    delStep.splice(index, 1);
    setSteps({ steps: delStep });
  };

  const addIng = () => {
    setIngredients({ ingredients: [...ingredients.ingredients, ''] });
  };

  const handleAddIng = (e) => {
    const addIng = [...ingredients.ingredients];
    addIng[e.target.dataset.idx] = e.target.value;
    setIngredients({ ingredients: addIng });
  };

  const removeIng = (index) => {
    let ing = [...ingredients.ingredients];
    ing.splice(index, 1);
    setIngredients({ ingredients: ing });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setRecipeDetails({ ...recipeDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { ...recipeDetails, ...ingredients, ...steps };
    console.log(data);
    addRecipeCollection('Recepies', data, (addrecipe) => {
      dispatch({ type: RecepieActionType.ADD_RECIPES_SUCCESS, addrecipe });
    });
    event.target.reset();

    return <Redirect to="/recipe/:id" />;
    // history.pushState('/');
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
              <Input
                type="text"
                name="imageUrl"
                id="imageUrl"
                onChange={handleChange}
              />
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

              {steps.steps.map((val, index) => (
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

              {ingredients.ingredients.map((value, index) => (
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

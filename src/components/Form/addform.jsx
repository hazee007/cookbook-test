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
  TextArea,
  Button,
  LinkContainer,
  ButtonLink,
} from './formStyles';
import { useDispatch } from 'react-redux';
import { addRecipeCollection } from '../../firebase/firebase.utils';
import RecepieActionType from '../../redux/recepies/recepie.types';

const Form = () => {
  const dispatch = useDispatch();
  const [recipeDetails, setRecipeDetails] = useState('');

  const handleChange = (event) => {
    const { value, name } = event.target;

    setRecipeDetails({ ...recipeDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addRecipeCollection('Recepies', recipeDetails, (addrecipe) => {
      dispatch({ type: RecepieActionType.ADD_RECIPES_SUCCESS, addrecipe });
    });
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
                required
              />
            </Container>
            <Container>
              <Label>ImageUrl</Label>
              <Input
                type="text"
                name="url"
                id="url"
                onChange={handleChange}
                required
              />
            </Container>
            <Container>
              <Label>Author</Label>
              <Input
                type="text"
                name="author"
                id="author"
                onChange={handleChange}
                required
              />
            </Container>
            <Container>
              <Label>Duration</Label>
              <Input
                type="number"
                name="duration"
                id="duration"
                onChange={handleChange}
                required
              />
            </Container>
            <Container>
              <Label>Steps</Label>
              <TextArea
                type="text"
                name="steps"
                id="steps"
                onChange={handleChange}
                required
              />
            </Container>
            <Container>
              <Label>Ingredients</Label>
              <TextArea
                type="text"
                name="ingredients"
                id="ingredients"
                onChange={handleChange}
                required
              />
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

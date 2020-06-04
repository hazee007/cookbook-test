import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectRecepies } from '../../redux/recepies/recepie.selector';
import { connect } from 'react-redux';
import { ButtonLink } from '../Form/formStyles';
import { Title } from '../MealDetails/mealDetails.styles';
import { UList, SideDiv, List, LinkAdd, ButtonWrapper } from './sidebar.styles';

const SideBar = ({ getrecipe }) => {
  if (getrecipe) {
  }
  return (
    <SideDiv>
      <Title>Meal's Menu</Title>

      <UList>
        <div>
          {getrecipe
            ? getrecipe.map((recipe, index) => (
                <List key={index}>
                  <LinkAdd to={`/recipe/${recipe.id}`}>{recipe.title}</LinkAdd>
                </List>
              ))
            : null}
        </div>
      </UList>
      <ButtonWrapper>
        <ButtonLink to="/addrecipe">Add Recepie </ButtonLink>
      </ButtonWrapper>
    </SideDiv>
  );
};

const mapStateToProps = createStructuredSelector({
  getrecipe: selectRecepies,
});

export default connect(mapStateToProps)(SideBar);

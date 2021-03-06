import { createSelector } from 'reselect';

const selectRecepie = (state) => state.recepies;

export const selectRecepies = createSelector(
  [selectRecepie],
  (recepie) => recepie.recepies
);

export function getRecipeById(state, id) {
  // Javascript 2020 optional chaining*
  return state?.recepies?.recepies?.find(recipe => recipe.id === id);
}
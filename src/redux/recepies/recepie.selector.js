import { createSelector } from 'reselect';

const selectRecepie = (state) => state.recepies;

export const selectRecepies = createSelector(
  [selectRecepie],
  (recepie) => recepie.recepies
);

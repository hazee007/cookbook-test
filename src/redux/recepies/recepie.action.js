import RecepieActionType from './recepie.types';

export const getRecepies = (recepies) => ({
  type: RecepieActionType.FETCH_RECEPIE,
  payload: recepies,
});

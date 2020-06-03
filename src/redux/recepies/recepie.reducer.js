import RecepieActionType from './recepie.types';

const INITIAL_STATE = {
  recepies: null,
};

const recepiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RecepieActionType.FETCH_RECEPIE:
      return {
        ...state,
        recepies: action.payload,
      };

    default:
      return state;
  }
};

export default recepiesReducer;
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { observeCollection } from './firebase/firebase.utils';
import RecepieActionType from './redux/recepies/recepie.types';

import MealDetails from './components/MealDetails/mealDetails';
import SideBar from './components/SideBar/sidebar';
import Form from './components/Form/addform';
import { AppContainer, AppParticles } from './App.styles';

const particleOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

export default function App() {
  const dispatch = useDispatch();

  // Get recipe from firestore
  React.useEffect(() => {
    return observeCollection('Recepies', (recipes) => {
      dispatch({ type: RecepieActionType.GET_RECIPES_SUCCESS, recipes });
    });
  }, [dispatch]);

  return (
    <AppContainer className="app">
      <AppParticles className="particles" params={particleOptions} />
      <SideBar />
      <Switch>
        <Route path="/recipe/:id" component={MealDetails} />
        <Route exact path="/addrecipe" component={Form} />
      </Switch>
    </AppContainer>
  );
}

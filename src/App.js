import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import { useDispatch } from 'react-redux';

import { observeCollection } from './firebase/firebase.utils';
import RecepieActionType from './redux/recepies/recepie.types';

import MealDetails from './components/MealDetails';
import SideBar from './components/sidebar';
import './App.css';

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
      dispatch({ type: RecepieActionType.ADD_RECIPES_SUCCESS, recipes });
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Particles className="particles" params={particleOptions} />
      <SideBar />
      <Switch className="food">
        <Route path="/recipe/:id" component={MealDetails} />
      </Switch>
    </div>
  );
}

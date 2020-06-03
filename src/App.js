import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import { connect } from 'react-redux';

import { firestore, getCollectionSnapshot } from './firebase/firebase.utils';
import { getRecepies } from './redux/recepies/recepie.action';

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
function App({ getRecepies }) {
  //Upload Recepies to firestore only run once
  // React.useEffect(() => {
  //   addCollectionAndDocuments('Recepies', recipes);
  // }, []);

  // Get recipe from firestore
  React.useEffect(() => {
    const collectionRef = firestore.collection('Recepies');
    collectionRef.onSnapshot(async (snapshot) => {
      const recipes = getCollectionSnapshot(snapshot);
      getRecepies(recipes);
    });
  }, [getRecepies]);

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

const mapDispatchToProps = (dispatch) => ({
  getRecepies: (recipes) => dispatch(getRecepies(recipes)),
});

export default connect(null, mapDispatchToProps)(App);

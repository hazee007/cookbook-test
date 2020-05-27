import React from 'react';
import Particles from 'react-particles-js';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import MealDetails from './components/mealDetails';
import SideBar from './components/sidebar';

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
function App() {
  return (
    <div className="app">
      <Particles className="particles" params={particleOptions} />
      <BrowserRouter>
        <SideBar />
        <Switch className="food">
          <Route path="/:id" component={MealDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

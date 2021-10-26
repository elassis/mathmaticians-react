import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Quote from './components/Quote';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
    </Switch>
  </>
);

export default App;

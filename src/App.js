import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Quote from './components/Quote';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <div className="hp-container">
          <h1 className="title-page">This is the Home Page</h1>
          <p className="hp-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat
            Integer sagittis interdum rhoncus. Praesent malesuada elit vitae
            Donec in sapien viverra, mattis magna non, rutrum enim.Donec
            Fusce vitae tristique sapien, eget mattis purus. Ut quis accumsan turpis.
            lectus quis, varius condimentum lectus. Pellentesque in sapien
            Praesent semper posuere orci, et eleifend neque tempor eu.
          </p>
          <br />

          <p className="hp-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer sagittis interdum rhoncus. Praesent malesuada
            Donec in sapien viverra, mattis magna non, rutrum enim.Donec
            Fusce vitae tristique sapien, eget mattis purus. Ut quis
            lectus quis, varius condimentum lectus. Pellentesque in
            Praesent semper posuere orci, et eleifend neque tempor eu.
          </p>

        </div>
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

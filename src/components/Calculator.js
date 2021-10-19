import React from 'react';
import '../App.css';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container-calculator">
        <div className="calculator-container">
          <div className="row">
            <div className="screen" />
          </div>
          <div className="row">
            <button type="button" title="AC" className="button">AC</button>
            <button type="button" className="button">+/-</button>
            <button type="button" className="button">%</button>
            <button type="button" className="button">/</button>
          </div>
          <div className="row">
            <button type="button" className="number">7</button>
            <button type="button" className="number">8</button>
            <button type="button" className="number">9</button>
            <button type="button" className="button">x</button>
          </div>
          <div className="row">
            <button type="button" className="number">4</button>
            <button type="button" className="number" title="#5">5</button>
            <button type="button" className="number">6</button>
            <button type="button" className="button">-</button>
          </div>
          <div className="row">
            <button type="button" className="number">1</button>
            <button type="button" className="number">2</button>
            <button type="button" className="number">3</button>
            <button type="button" className="button">+</button>
          </div>
          <div className="row">
            <button type="button" className="number zero">0</button>
            <button type="button" className="button dot">.</button>
            <button type="button" className="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

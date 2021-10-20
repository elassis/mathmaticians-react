import React from 'react';
import '../App.css';
import Screen from './Screen';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.display = this.display.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  display(value) {
    const screen = document.querySelector('#screen');
    let val = value;
    if (value === 'AC') {
      val = '';
    }
    const { total, next, operation } = this.state;
    const obj = {
      total,
      next,
      operation,
    };
    let objR = {};
    objR = calculate(obj, val);
    if (objR.total || objR.total === null) {
      obj.total = objR.total;
    }
    if (objR.next || objR.next === null) {
      obj.next = objR.next;
    }
    if (objR.operation || objR.operation === null) {
      obj.operation = objR.operation;
    }
    if (value === 'AC') {
      screen.innerText = '';
    } else if (value === '=') {
      screen.innerText = obj.total;
    } else if (value === '+/-') {
      screen.innerText = obj.next;
    } else {
      screen.innerText += value;
    }
    this.setState({
      total: obj.total,
      next: obj.next,
      operation: obj.operation,
    });
  }

  render() {
    return (
      <div className="container-calculator">
        <div className="calculator-container">
          <div className="row">
            <Screen />
          </div>
          <div className="row">
            <button type="button" title="AC" className="button" onClick={() => { this.display('AC'); }}>AC</button>
            <button type="button" className="button" onClick={() => { this.display('+/-'); }}>+/-</button>
            <button type="button" className="button" onClick={() => { this.display('%'); }}>%</button>
            <button type="button" className="button" onClick={() => { this.display('/'); }}>/</button>
          </div>
          <div className="row">
            <button type="button" className="number" onClick={() => { this.display('7'); }}>7</button>
            <button type="button" className="number" onClick={() => { this.display('8'); }}>8</button>
            <button type="button" className="number" onClick={() => { this.display('9'); }}>9</button>
            <button type="button" className="button" onClick={() => { this.display('x'); }}>x</button>
          </div>
          <div className="row">
            <button type="button" className="number" onClick={() => { this.display('4'); }}>4</button>
            <button type="button" className="number" title="#5" onClick={() => { this.display('5'); }}>5</button>
            <button type="button" className="number" onClick={() => { this.display('6'); }}>6</button>
            <button type="button" className="button" onClick={() => { this.display('-'); }}>-</button>
          </div>
          <div className="row">
            <button type="button" className="number" onClick={() => { this.display('1'); }}>1</button>
            <button type="button" className="number" onClick={() => { this.display('2'); }}>2</button>
            <button type="button" className="number" onClick={() => { this.display('3'); }}>3</button>
            <button type="button" className="button" onClick={() => { this.display('+'); }}>+</button>
          </div>
          <div className="row">
            <button type="button" className="number zero" onClick={() => { this.display('0'); }}>0</button>
            <button type="button" className="button dot" onClick={() => { this.display('.'); }}>.</button>
            <button type="button" className="button" onClick={() => { this.display('='); }}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

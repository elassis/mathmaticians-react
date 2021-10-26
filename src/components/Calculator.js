import React, { useState } from 'react';
import '../App.css';
import Screen from './Screen';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state] = useState({ total: null, next: null, operation: null });

  function display(value) {
    const screen = document.querySelector('#screen');

    if (value === 'AC') {
      screen.innerText = '0';
    }

    let obj = {};
    obj = calculate(state, value);
    if (obj.total || obj.total === null) {
      state.total = obj.total;
    }
    if (obj.next || obj.next === null) {
      state.next = obj.next;
    }
    if (obj.operation || obj.operation === null) {
      state.operation = obj.operation;
    }
    if (value === 'AC') {
      screen.innerText = '';
    } else if (value === '=') {
      screen.innerText = state.total;
    } else if (value === '+/-') {
      screen.innerText = state.next;
    } else {
      screen.innerText += value;
    }
  }
  return (
    <div className="container-calculator">
      <h1 className="title-page">Let&apos;s do some math!</h1>
      <div className="calculator-container">
        <div className="row">
          <div className="screen">
            <Screen />
          </div>
        </div>
        <div className="row">
          <button type="button" title="AC" className="button" onClick={() => { display('AC'); }}>AC</button>
          <button type="button" className="button" onClick={() => { display('+/-'); }}>+/-</button>
          <button type="button" className="button" onClick={() => { display('%'); }}>%</button>
          <button type="button" className="button" onClick={() => { display('/'); }}>/</button>
        </div>
        <div className="row">
          <button type="button" className="number" onClick={() => { display('7'); }}>7</button>
          <button type="button" className="number" onClick={() => { display('8'); }}>8</button>
          <button type="button" className="number" onClick={() => { display('9'); }}>9</button>
          <button type="button" className="button" onClick={() => { display('x'); }}>x</button>
        </div>
        <div className="row">
          <button type="button" className="number" onClick={() => { display('4'); }}>4</button>
          <button type="button" className="number" title="#5" onClick={() => { display('5'); }}>5</button>
          <button type="button" className="number" onClick={() => { display('6'); }}>6</button>
          <button type="button" className="button" onClick={() => { display('-'); }}>-</button>
        </div>
        <div className="row">
          <button type="button" className="number" onClick={() => { display('1'); }}>1</button>
          <button type="button" className="number" onClick={() => { display('2'); }}>2</button>
          <button type="button" className="number" onClick={() => { display('3'); }}>3</button>
          <button type="button" className="button" onClick={() => { display('+'); }}>+</button>
        </div>
        <div className="row">
          <button type="button" className="number zero" onClick={() => { display('0'); }}>0</button>
          <button type="button" className="button dot" onClick={() => { display('.'); }}>.</button>
          <button type="button" className="button" onClick={() => { display('='); }}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

import Big from 'big.js';

export default function operate(numberOne = 0, numberTwo = 0, operation) {
  try {
    const one = (Number.isNaN(numberOne)) ? '0' : Big(numberOne);
    const two = (Number.isNaN(numberTwo)) ? '0' : Big(numberTwo);

    if (operation === '+') {
      return one.plus(two).toString();
    }
    if (operation === '-') {
      return one.minus(two).toString();
    }
    if (operation === 'x') {
      return one.times(two).toString();
    }
    if (operation === '/') {
      if (numberTwo === '0') {
        return 'Division by Zero Error';
      }
      return one.div(two).toString();
    }
    if (operation === '%') {
      return one.div(two).toString();
    }
    throw Error(`Unknown operation '${operation}'`);
  } catch {
    return 'Unexpected Number';
  }
}

import React from 'react';
import './calculator.css';
import '../logic/operate';
import '../logic/calculate';
import PropTypes from 'prop-types';

const Calculator = (props) => {
  const { calc, handleClick } = props;
  const { total, next } = calc;

  let val = 0;
  if (next) {
    val = next;
  } else if (total) {
    val = total;
  }

  return (
    <div className="wrapper">

      <input type="text" className="operator display" id="calc-screen" placeholder="0" value={val} readOnly />

      <button type="button" className="operator all-clear" name="AC" onClick={handleClick}>AC</button>
      <button type="button" className="operator Plus-minus operations" name="+/-" onClick={handleClick}>+/-</button>
      <button type="button" className="operator" name="%" onClick={handleClick}>%</button>
      <button type="button" className="operator operation" name="÷" onClick={handleClick}>&divide;</button>

      <button type="button" className="operator number" name="7" onClick={handleClick}>7</button>
      <button type="button" className="operator number" name="8" onClick={handleClick}>8</button>
      <button type="button" className="operator number" name="9" onClick={handleClick}>9</button>
      <button type="button" className="operator operation" name="x" onClick={handleClick}>x</button>

      <button type="button" className="operator number" name="4" onClick={handleClick}>4</button>
      <button type="button" className="operator number" name="5" onClick={handleClick}>5</button>
      <button type="button" className="operator number" name="6" onClick={handleClick}>6</button>
      <button type="button" className="operator operation" name="-" onClick={handleClick}>-</button>

      <button type="button" className="operator number" name="1" onClick={handleClick}>1</button>
      <button type="button" className="operator number" name="2" onClick={handleClick}>2</button>
      <button type="button" className="operator number" name="3" onClick={handleClick}>3</button>
      <button type="button" className="operator operation" name="+" onClick={handleClick}>+</button>

      <button type="button" className="operator number zero" name="0" onClick={handleClick}>0</button>
      <button type="button" className="operator number" name="." onClick={handleClick}>.</button>
      <button type="button" className="operator operation" name="=" onClick={handleClick}>=</button>

    </div>
  );
};

Calculator.propTypes = {
  calc: PropTypes.instanceOf(Object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Calculator;

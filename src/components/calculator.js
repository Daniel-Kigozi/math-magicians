import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import '../logic/operate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((previousState) => calculate(previousState, e.target.innerText));
  }

  render() {
    let val = 0;
    const { total, next } = this.state;
    if (next) {
      val = next;
    } else if (total) {
      val = total;
    }

    return (
      <div className="wrapper">

        <input type="text" className="operator display" id="calc-screen" placeholder="0" value={val} readOnly />

        <button type="button" className="operator all-clear" name="AC" onClick={this.handleClick}>AC</button>
        <button type="button" className="operator Plus-minus operations" name="+/-" onClick={this.handleClick}>+/-</button>
        <button type="button" className="operator" name="%" onClick={this.handleClick}>%</button>
        <button type="button" className="operator operation" name="÷" onClick={this.handleClick}>&divide;</button>

        <button type="button" className="operator number" name="7" onClick={this.handleClick}>7</button>
        <button type="button" className="operator number" name="8" onClick={this.handleClick}>8</button>
        <button type="button" className="operator number" name="9" onClick={this.handleClick}>9</button>
        <button type="button" className="operator operation" name="x" onClick={this.handleClick}>x</button>

        <button type="button" className="operator number" name="4" onClick={this.handleClick}>4</button>
        <button type="button" className="operator number" name="5" onClick={this.handleClick}>5</button>
        <button type="button" className="operator number" name="6" onClick={this.handleClick}>6</button>
        <button type="button" className="operator operation" name="-" onClick={this.handleClick}>-</button>

        <button type="button" className="operator number" name="1" onClick={this.handleClick}>1</button>
        <button type="button" className="operator number" name="2" onClick={this.handleClick}>2</button>
        <button type="button" className="operator number" name="3" onClick={this.handleClick}>3</button>
        <button type="button" className="operator operation" name="+" onClick={this.handleClick}>+</button>

        <button type="button" className="operator number zero" name="0" onClick={this.handleClick}>0</button>
        <button type="button" className="operator number" name="." onClick={this.handleClick}>.</button>
        <button type="button" className="operator operation" name="=" onClick={this.handleClick}>=</button>

      </div>
    );
  }
}
export default Calculator;

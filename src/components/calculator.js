import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">

        <input type="text" className="operator display" id="calc-screen" placeholder="0" disabled />

        <button type="button" className="operator all-clear" name="AC">AC</button>
        <button type="button" className="operator Plus-minus operations" name="+/-">+/-</button>
        <button type="button" className="operator" name="%">%</button>
        <button type="button" className="operator operation" name="+">+</button>

        <button type="button" className="operator number" name="7">7</button>
        <button type="button" className="operator number" name="8">8</button>
        <button type="button" className="operator number" name="9">9</button>
        <button type="button" className="operator operation" name="x">&times;</button>

        <button type="button" className="operator number" name="4">4</button>
        <button type="button" className="operator number" name="5">5</button>
        <button type="button" className="operator number" name="6">6</button>
        <button type="button" className="operator operation" name="-">-</button>

        <button type="button" className="operator number" name="1">1</button>
        <button type="button" className="operator number" name="2">2</button>
        <button type="button" className="operator number" name="3">3</button>
        <button type="button" className="operator operation" name="÷">&divide;</button>

        <button type="button" className="operator number zero" name="0">0</button>
        <button type="button" className="operator number" name=".">.</button>
        <button type="button" className="operator operation" name="=">=</button>

      </div>
    );
  }
}
export default Calculator;

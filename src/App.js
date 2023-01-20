import React, { useState } from 'react';
import Calculator from './components/calculator';
import calculate from './logic/calculate';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    total: 0,
    next: 0,
  });
  const handleClick = (e) => {
    setState((old) => calculate(old, e.target.innerText));
  };

  const { total, next } = state;
  const calc = { total, next };
  return (
    <div className="App">
      <Calculator handleClick={handleClick} calc={calc} />
    </div>
  );
};

export default App;

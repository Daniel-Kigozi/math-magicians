import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import calculate from './logic/calculate';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';
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
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator handleClick={handleClick} calc={calc} />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </>
  );
};

export default App;

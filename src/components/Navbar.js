import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

/* eslint-disable */
export const Navbar = () => (
  <nav className="nav-bar">
    <header>
      <h1>Math Magicians</h1>
    </header>
    <NavLink to="/">Home</NavLink>
    |
    <NavLink to="/calculator">Calculator</NavLink>
    |
    <NavLink to="/quote">Quote</NavLink>
  </nav>
);

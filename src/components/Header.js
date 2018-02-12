import React from 'react';
import logo from '../Star_Wars_Logo.svg';
import {NavLink} from "react-router-dom";

const Header = () => {
  return(
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p></p>
      <NavLink exact to="/" className="App-title">Home</NavLink>
    </header>
  );
};

export default Header;
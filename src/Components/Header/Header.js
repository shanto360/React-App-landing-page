import React from "react";
import './Header.css'
const Header = () => {
  return (
    <div>
      <header>
        <a href="/" class="logo">
          <span>best</span>App
        </a>
        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar" class="fas fa-bars"></label>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#features">features</a>
          <a href="#about">about</a>
          <a href="#review">review</a>
          <a href="#pricing">pricing</a>
          <a href="#contact">contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;

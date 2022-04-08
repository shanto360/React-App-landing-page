import React from "react";
import './Header.css'
import CustomLink from "../CustomLink/CustomLink";
const Header = () => {
  return (
    <nav className="header">
      <h2 className="title">Best<span>App</span></h2>
      <div className="link">
        <CustomLink to="/home">HOME</CustomLink>
        <CustomLink to="/features">FEATURES</CustomLink>
        <CustomLink to="/about">ABOUT</CustomLink>
        <CustomLink to="/review">REVIEW</CustomLink>
        <CustomLink to="/pricing">PRICING</CustomLink>
        <CustomLink to="/contact">CONTACT</CustomLink>
      </div>
    </nav>
  );
};

export default Header;

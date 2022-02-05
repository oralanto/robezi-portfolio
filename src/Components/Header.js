import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">Robezi</div>
      <div className="Header__navigation">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="Header__navigation__item">Portfolio</p>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <p className="Header__navigation__item">A propos</p>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <p className="Header__navigation__item">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;

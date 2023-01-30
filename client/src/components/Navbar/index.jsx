import React from "react";
import "./index.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="primary-nav">
      <div>
        <img src={Logo} alt="Roadmap Runner logo" />
        <div>Career Compass</div>
      </div>
    </nav>
  );
};

export default Navbar;

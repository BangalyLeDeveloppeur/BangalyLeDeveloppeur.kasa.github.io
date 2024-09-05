import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";


const Navigation = () => {
  return (
    <div className="navigation">
      {/* image du log*/}
      <img src={logo} alt="logo kasa"/>
      <ul>
        <NavLink
          /* Controle de after sur le header*/
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          <li> A Propos</li>
        </NavLink >
      </ul>
    </div>
  );
};

export default Navigation;

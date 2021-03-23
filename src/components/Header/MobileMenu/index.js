import React from "react";
import { NavLink } from "react-router-dom";
import MenuContainer from "./style";

const MobileMenu = ({ active }) => {
  return (
    <MenuContainer className={active ? "active" : ""}>
      <ul className="navLinks">
        <li className="navLinksItem">
          <NavLink to="/shortly-frontend-coding-challenge">Features</NavLink>
        </li>
        <li className="navLinksItem">
          <NavLink to="/shortly-frontend-coding-challenge">Pricing</NavLink>
        </li>
        <li className="navLinksItem">
          <NavLink to="/shortly-frontend-coding-challenge">Resources</NavLink>
        </li>
      </ul>
      <hr />
      <ul className="authLinks">
        <li>
          <NavLink to="/shortly-frontend-coding-challenge"> Login </NavLink>
        </li>
        <li>
          <button className="btn signUp">Sign Up</button>
        </li>
      </ul>
    </MenuContainer>
  );
};

export default MobileMenu;

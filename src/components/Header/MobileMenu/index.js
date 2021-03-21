import React from "react";
import { NavLink } from "react-router-dom";
import MenuContainer from "./style";

const MobileMenu = ({ active }) => {
  return (
    <MenuContainer className={active ? "active" : ""}>
      <ul className="navLinks">
        <li className="navLinksItem">
          <NavLink to="/">Features</NavLink>
        </li>
        <li className="navLinksItem">
          <NavLink to="/">Pricing</NavLink>
        </li>
        <li className="navLinksItem">
          <NavLink to="/">Resources</NavLink>
        </li>
      </ul>
      <hr />
      <ul className="authLinks">
        <li>
          <NavLink to="/"> Login </NavLink>
        </li>
        <li>
          <button className="btn signUp">Sign Up</button>
        </li>
      </ul>
    </MenuContainer>
  );
};

export default MobileMenu;

import React from "react";
import HeaderContainer from "./style";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <HeaderContainer>
      <div className="container">
        <nav>
          <NavLink to="/">
            <Logo className="logo" />
          </NavLink>

          {!isMobile && (
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
          )}
        </nav>

        {!isMobile ? (
          <div>
            <span className="login">Login</span>
            <button className="btn signUp">Sign Up</button>
          </div>
        ) : (
          <div className="mobileMenuIcon"></div>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;

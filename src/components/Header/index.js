import React from "react";
import HeaderContainer from "./style";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false);

  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      let scrollTop = window.pageYOffset;

      if (scrollTop > 10 && isMobile) setScrolled(true);
      else setScrolled(false);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <>
      <HeaderContainer className={scrolled ? "bg-white" : ""}>
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
            <div
              className="mobileMenuIcon"
              onClick={() =>
                setMobileMenuActive((mobileMenuActive) => !mobileMenuActive)
              }
            ></div>
          )}
        </div>
      </HeaderContainer>

      {isMobile && <MobileMenu active={mobileMenuActive} />}
    </>
  );
};

export default Header;

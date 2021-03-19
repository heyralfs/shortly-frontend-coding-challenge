import React from "react";
import FooterContainer from "./style";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../../images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../images/icon-instagram.svg";
import { ReactComponent as PinterestIcon } from "../../images/icon-pinterest.svg";
import { ReactComponent as TwitterIcon } from "../../images/icon-twitter.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <Logo className="footer--logo" />

        <div className="footer--features">
          <h1>Features</h1>
          <ul>
            <li>
              <Link to="/">Link Shortening</Link>
            </li>
            <li>
              <Link to="/">Branded Links</Link>
            </li>
            <li>
              <Link to="/">Analytics</Link>
            </li>
          </ul>
        </div>

        <div className="footer--resources">
          <h1>Resources</h1>
          <ul>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Developers</Link>
            </li>
            <li>
              <Link to="/">Support</Link>
            </li>
          </ul>
        </div>

        <div className="footer--company">
          <h1>Company</h1>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Our Team</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer--socialLinks">
          <ul>
            <li>
              <Link to="/">
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link to="/">
                <TwitterIcon />
              </Link>
            </li>
            <li>
              <Link to="/">
                <PinterestIcon />
              </Link>
            </li>
            <li>
              <Link to="/">
                <InstagramIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

import React from "react";
import logo from "../../../images/svg/logo.svg";
import link from "../../../images/svg/Link.svg";
import link2 from "../../../images/svg/Link2.svg";
import link3 from "../../../images/svg/Link3.svg";
import play from "../../../images/play.png";
import app from "../../../images/app.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="landing-page-footer">
      <img src={logo} alt="" />
      <div className="social">
        <ul>
          <li>
            <Link href="#">
              <img src={link} alt="link" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src={link2} alt="link" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src={link3} alt="link" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="google">
        <img src={play} alt="" />
        <img src={app} alt="" />
      </div>
      <p>
        Copyright© 2023<span> QUICKPAYUS </span>All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

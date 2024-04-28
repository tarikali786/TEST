import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { tocapitalCase } from "../../../Common/Common";
import profile from "../../../images/Profile/profile.png";
import bell from "../../../images/svg/bell.svg";
import signout from "../../../images/svg/signout.svg";
import {
  checkAuthAsync,
  selectAuthInfo,
} from "../../../features/auth/authSlice";
export const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthInfo);
  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch, user]);
  // Mobile Version
  const [openCloseNav, setOpenCloseNav] = useState(false);
  const handleNavigation = () => {
    setOpenCloseNav(!openCloseNav);
  };
  const links = [
    {
      link: "/dashboard",
      name: "dashboard",
    },
    {
      link: "/statements",
      name: "statements",
    },
    {
      link: "/deposit",
      name: "deposit",
    },
    {
      link: "/withdrawal",
      name: "withdrawal",
    },
    {
      link: "/referral",
      name: "referrals",
    },
    {
      link: "/rank",
      name: "rank",
    },
    {
      link: "/support",
      name: "support",
    },
  ];
  return (
    <div
      className={`nav-container-auth container-xxl ${
        openCloseNav ? "active" : ""
      }`}
    >
      <nav>
        <ul className="mobile-nav ps-0">
          <li>
            <Link to="/#" className="link-logo"></Link>
          </li>
          <li>
            <div
              className="menu-icon-container"
              onClick={(e) => handleNavigation()}
            >
              <div className="menu-icon">
                <span className="line-1"></span>
                <span className="line-2"></span>
              </div>
            </div>
          </li>
        </ul>

        <ul className="desktop-nav ps-0">
          <li>
            <Link to="/dashboard" className="link-logo"></Link>
          </li>
          {links.map((link) => (
            <li key={link.name} className="d-md-none">
              <Link to={link.link} className="active">
                {tocapitalCase(link.name)}
              </Link>
            </li>
          ))}
          <li className="nav-item d-none d-md-block ms-auto">
            <Link className="nav-link" to="#">
              <img src={bell} alt="bell" />
            </Link>
          </li>
          <li className="nav-item dropdown d-none d-md-block">
            <div className="d-flex">
              <p>{user.firstName} {user.lastName}</p>
              <Link
                className="nav-link dropdown-toggle d-flex"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="round">
                  <img src={profile} alt="" />
                </div>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/me">
                    My profile
                  </Link>
                </li>
                <li className="m-0">
                  <Link className="dropdown-item" to="/setting">
                    Settings
                  </Link>
                </li>
                <li className="">
                  <div className="d-flex">
                    <Link className="dropdown-item" to="/signout">
                      Sign Out
                    </Link>
                    <Link to="/signout">
                      <img src={signout} alt="signout" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import user from "../../assets/images/user.jpg";
import sign from "../../assets/images/sign.svg";
import {
  checkAuthAsync,
  selectAuthInfo,
} from "../../../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthInfo);
  /* useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch, user]); */
  return (
    <nav className="navbar bg-light navbar-expand-lg bg-body-tertiary">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item notifications-menu">
            <div className="dropdown">
              {/* {<img
                src={bell}
                className="dropdown-toggle img-fluid"
                type="button"
                data-bs-toggle="dropdown"
                alt="bell"
              />} */}
              {/* <ul className="dropdown-menu">
                <div
                  className="card"
                  style={{ width: "22rem", height: "28rem" }}
                >
                  <div className="card-header text-center">
                    <p className="text-theme">Notifications</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <i className="fas fa-user text-theme" />
                      </div>
                      <div className="col-md-10">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Obcaecati, molestias.
                        </p>
                        <span className="text-theme">1 hour ago</span>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-2">
                        <i className="fas fa-user text-theme" />
                      </div>
                      <div className="col-md-10">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Obcaecati, molestias.
                        </p>
                        <span className="text-theme">1 hour ago</span>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-2">
                        <i className="fas fa-user text-theme" />
                      </div>
                      <div className="col-md-10">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Obcaecati, molestias.
                        </p>
                        <span className="text-theme">1 hour ago</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <i className="fas fa-user text-theme" />
                      </div>
                      <div className="col-md-10">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Obcaecati, molestias.
                        </p>
                        <span className="text-theme">1 hour ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    <p className="text-theme">Mark as all read</p>
                  </div>
                </div>
              </ul> */}
            </div>
          </li>
          <li className="nav-item dropdown">
            <div className="d-flex">
              <p>
                {user?.firstName} {user?.lastName}
              </p>
              <Link
                className="nav-link dropdown-toggle d-flex"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                {/* <div className="round">
                  <img src={user} alt="profile pic" />
                </div> */}
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    My profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/setting">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Home
                  </Link>
                </li>
                <li className="mt-3">
                  <div className="d-flex">
                    <Link className="dropdown-item" to="/signout">
                      Sign Out
                    </Link>
                    <img src={sign} alt="signout" />
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

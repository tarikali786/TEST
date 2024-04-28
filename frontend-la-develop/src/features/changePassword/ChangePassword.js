import React, { useState } from "react";
import "./ChangePassword.css";
import { Navbar } from "../../components/Auth/Navbar/Navbar";
import SideBar from "../../Common/components/SideBar/SideBar";
const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleToggle = (field) => {
    switch (field) {
      case "password":
        setShowPassword(!showPassword);
        break;
      case "password1":
        setShowPassword1(!showPassword1);
        break;
      case "password2":
        setShowPassword2(!showPassword2);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Navbar />
      <div className="row">
        <div className=" d-none d-md-block col-md-3 col-lg-2">
          <SideBar />
        </div>
        <div className="col-12 col-md-9 col-lg-10">
          <div className="main-content" style={{ overflowX: "hidden" }}>
            <div className="container-fluid">
              <section className="headline">
                <h1>Change Password</h1>
              </section>
              <section className="password-sec">
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label htmlFor="password" className="mb-2">
                          Current Password
                        </label>
                        <div className="input-group">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            id="password"
                            placeholder="Enter Your Current Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div className="input-group-append">
                            <span
                              className="input-group-text password-toggle-btn"
                              onClick={() => handleToggle("password")}
                            >
                              <i
                                className={`fa ${
                                  showPassword ? "fa-eye-slash" : "fa-eye"
                                }`}
                                aria-hidden="true"
                              ></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="password" className="mb-2">
                          New Password
                        </label>
                        <div className="input-group">
                          <input
                            type={showPassword1 ? "text" : "password"}
                            className="form-control"
                            id="password1"
                            placeholder="Enter Your New Password"
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                          />
                          <div className="input-group-append">
                            <span
                              className="input-group-text password-toggle-btn"
                              onClick={() => handleToggle("password1")}
                            >
                              <i
                                className={`fa ${
                                  showPassword1 ? "fa-eye-slash" : "fa-eye"
                                }`}
                                aria-hidden="true"
                              ></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="password" className="mb-2">
                          Confirm Password
                        </label>
                        <div className="input-group">
                          <input
                            type={showPassword2 ? "text" : "password"}
                            className="form-control"
                            id="password2"
                            placeholder="Re-enter Your Password to confirm"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                          />
                          <div className="input-group-append">
                            <span
                              className="input-group-text password-toggle-btn"
                              onClick={() => handleToggle("password2")}
                            >
                              <i
                                className={`fa ${
                                  showPassword2 ? "fa-eye-slash" : "fa-eye"
                                }`}
                                aria-hidden="true"
                              ></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;

import React from "react";
import "./Setting.css";
import { Navbar } from "../../components/Auth/Navbar/Navbar";
import SideBar from "../../Common/components/SideBar/SideBar";

const Setting = () => {
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
                <h1>Settings</h1>
              </section>
              <section className="block">
                <div className="heading">
                  <div className="row">
                    <div className="col-md-12">
                      <h3>GENERAL</h3>
                    </div>
                  </div>
                </div>
                <div className="row first">
                  <div className="col-md-8">
                    <p>Change Password</p>
                  </div>
                  <div className="col-md-4">
                    <img src="images/arrow.svg" alt="" />
                  </div>
                </div>
                <div className="row second">
                  <div className="col-md-8">
                    <p>Allow notifications on E-mail provided</p>
                  </div>
                  <div className="col-md-4">
                    <div className="toggle">
                      <input type="checkbox" id="check" />
                      <label for="check" className="button"></label>
                    </div>
                  </div>
                </div>
              </section>
              <section className="block">
                <div className="heading">
                  <div className="row">
                    <div className="col-md-12">
                      <h3>NOTIFICATION SETTINGS</h3>
                    </div>
                  </div>
                </div>
                <div className="row first">
                  <div className="col-md-8">
                    <p>Alert notifications</p>
                  </div>
                  <div className="col-md-4">
                    <div className="toggle">
                      <input type="checkbox" id="check1" />
                      <label for="check1" className="button"></label>
                    </div>
                  </div>
                </div>
                <div className="row second">
                  <div className="col-md-8">
                    <p>
                      Allow notifications of important events on E-mail provided
                    </p>
                  </div>
                  <div className="col-md-4">
                    <div className="toggle">
                      <input type="checkbox" id="check2" />
                      <label for="check2" className="button"></label>
                    </div>
                  </div>
                </div>
              </section>
              <section className="block">
                <div className="heading">
                  <div className="row">
                    <div className="col-md-12">
                      <h3>LANGUAGE & REGION</h3>
                    </div>
                  </div>
                </div>
                <div className="row first">
                  <div className="col-md-8">
                    <p>Choose Language</p>
                  </div>
                  <div className="col-md-4">
                    <img src="images/arrow.svg" alt="" />
                  </div>
                </div>
                <div className="row second">
                  <div className="col-md-8">
                    <p>Choose Region</p>
                  </div>
                  <div className="col-md-4">
                    <img src="images/arrow.svg" alt="" />
                  </div>
                </div>
              </section>
              <section className="block">
                <div className="heading">
                  <div className="row">
                    <div className="col-md-12">
                      <h3>ACCOUNT DEACTIVATION</h3>
                    </div>
                  </div>
                </div>
                <div className="row first">
                  <div className="col-md-8">
                    <p>Deactivate Account</p>
                  </div>
                  <div className="col-md-4">
                    <div className="toggle">
                      <input type="checkbox" id="check3" />
                      <label for="check3" className="button"></label>
                    </div>
                  </div>
                </div>
                <div className="row second last">
                  <div className="col-md-12">
                    <div className="d-flex">
                      <p>Sign out</p>
                      <img src="images/sign.svg" alt="" />
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

export default Setting;

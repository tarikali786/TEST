import React from "react";
import "./Support.css";
import { Navbar } from "../../components/Auth/Navbar/Navbar";
import SideBar from "../../Common/components/SideBar/SideBar";
import account from "../../images/svg/Support/Account.svg";
import billing from "../../images/svg/Support/Billing.svg";
import report from "../../images/svg/Support/Report.svg";

const Support = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className=" d-none d-md-block col-md-3 col-lg-2">
          <SideBar />
        </div>
        <div className="col-12 col-md-9 col-lg-10">
          <div className="main-content pt-0" style={{ overflowX: "hidden" }}>
            <section className="support-heading">
              <h1>How can we help?</h1>
              <div className="search-container">
                <input
                  type="text"
                  className="search-box"
                  placeholder="Search..."
                />
              </div>
            </section>
            <div className="support-container">
              <div className="support-section">
                <h1 className="page-title">Help Topics</h1>
                <div className="support-card-container">
                  <div className="support-card">
                    <div className="icon">
                      <img src={account} alt="account" />
                    </div>
                    <div className="card-detail">
                      <h1>My Account</h1>
                      <p>How to manage your account and it’s features.</p>
                    </div>
                  </div>
                  <div className="support-card">
                    <div className="icon">
                      <img src={billing} alt="Billing" />
                    </div>
                    <div className="card-detail">
                      <h1>Billing & Payments</h1>
                      <p>Information about how we chargefor our services.</p>
                    </div>
                  </div>
                  <div className="support-card">
                    <div className="icon">
                      <img src={report} alt="Report" />
                    </div>
                    <div className="card-detail">
                      <h1>Report</h1>
                      <p>Report any issue or complaint related to us.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;

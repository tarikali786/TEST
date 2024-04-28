import React from "react";
import SideBar from "../../Common/components/SideBar/SideBar";
import "./Referrals.css";
import { Navbar } from "../../components/Auth/Navbar/Navbar";
import referralProgram from "../../images/svg/referral_program.svg";
import referral_program_line from "../../images/svg/referral_program_line.svg";
import { Link } from "react-router-dom";
const Referrals = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className=" d-none d-md-block col-md-3 col-lg-2">
          <SideBar />
        </div>
        <div className="col-12 col-md-9 col-lg-10 position-relative">
          <div className="main-content p-0" style={{ overflowX: "hidden" }}>
              <h1 className="page-title d-md-none">REFERRAL</h1>
            <div className="row justify-content-center">
              <div className="col-6 refreral-section">
                <Link to="/referral/dashboard">REFERRAL DASHBOARD</Link>
                <p>Click to know direct/indirect referrals.</p>
                <h1>Join our Referral Program</h1>
                <h6>Get commission by referring friends</h6>
                <p>Once they sign up, you’ll get money of your clean.</p>
                <input type="text" placeholder="Enter Email-address.." />
                <button>SEND</button>
              </div>
              <div className="col-6 d-none d-md-block">
                <img
                  src={referralProgram}
                  alt="referralProgram"
                  className="referralProgram-img"
                />
              </div>
              <img
                src={referral_program_line}
                alt="referral_program_line"
                className="referral_program_line d-none d-md-block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Referrals;

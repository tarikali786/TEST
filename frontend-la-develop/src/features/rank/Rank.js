import React from "react";
import SideBar from "../../Common/components/SideBar/SideBar";
import "./Rank.css";
import { Navbar } from "../../components/Auth/Navbar/Navbar";
import profilePic from "../../images/Profile/profile.png";

const Rank = () => {
  return (
    <>
      <Navbar />
      <div className="mt-44">
        <div className="row">
          <div className=" d-none d-md-block col-md-3 col-lg-2">
            <SideBar />
          </div>
          <div className="col-12 col-md-9 col-lg-10">
            <div className="main-content" style={{ overflowX: "hidden" }}>
              <h1 className="page-title">Rank</h1>
              <div className="rank-cards row">
                <div className="user-detail-card">
                  <div className="profile-pic">
                    <img src={profilePic} alt="profilePic" />
                  </div>
                  <div className="user-details">
                    <h3>Christine Joseph</h3>
                    <div className="d-grid">
                      <p className="title">Current Rank</p>
                      <p className="value">New</p>
                      <p className="title">Joining Date</p>
                      <p className="value">11/21/2023</p>
                      <p className="title">Rank Upgrade Date</p>
                      <p className="value">12/21/2023</p>
                    </div>
                  </div>
                </div>
                <div className="statistics">
                  <h1 className="heading">Statistics</h1>
                  <div className="d-grid">
                    <p className="title">Current sales revenue</p>
                    <p className="value">$16k</p>
                    <p className="title">Direct Referrals</p>
                    <p className="value">20</p>
                    <p className="title">Advance to your next Rank</p>
                    <p className="value">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                      >
                        <path
                          d="M10.1021 7.76431L3.77475 13.5521C3.33742 13.9522 2.63025 13.9522 2.19757 13.5521L1.14611 12.5903C0.708783 12.1903 0.708783 11.5434 1.14611 11.1476L5.63108 7.04509L1.14611 2.94254C0.708783 2.5425 0.708783 1.89562 1.14611 1.49984L2.19291 0.529523C2.63025 0.129482 3.33742 0.129482 3.7701 0.529523L10.0974 6.31735C10.5394 6.71739 10.5394 7.36427 10.1021 7.76431Z"
                          fill="#DF0B0B"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
                {/* <div className="rank-card">
                  <h1>Investment Rank</h1>
                  <h6>Rank:</h6>
                  <h5>Leader 1</h5>
                  <h6>Direct referrals required:</h6>
                  <h5>25</h5>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rank;

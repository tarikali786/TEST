import React, { useRef } from 'react';
import "./Dashboard.css";
import ReferFriend from "../../images/svg/ReferFriend.svg";
import accountBalnce from "../../images/svg/account_balnce.svg";
import equalityBalnce from "../../images/svg/equality_balnce.svg";
import copyIcon from "../../images/svg/png files/clipboard.png"; // Import the copy SVG icon
import ChartBar from "../../Common/components/ChartBar/ChartBar";
import SideBar from "../../Common/components/SideBar/SideBar";
import { Navbar } from "../../components/Auth/Navbar/Navbar";
import { selectAuthInfo } from "../auth/authSlice";
import { useSelector } from 'react-redux';
const Dashboard = () => {
  const chartData = {
    labels: [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
      "Category 6",
      "Category 7",
    ],
    values: [10, 25, 15, 30, 50, 60, 70],
  };
  const user = useSelector(selectAuthInfo);
  const currentHost = window.location.hostname;
  const referralLink = `${currentHost}:3000/signup.referral?user=${user?.username}`;

  const referralLinkInput = useRef(null);

  const copyToClipboard = () => {
    referralLinkInput.current.select();
    document.execCommand('copy');
  };

  return (
    <>
      <Navbar />
      <div className="mt-44">
        <div className="row">
          <div className=" d-none d-md-block col-md-3 col-lg-2">
            <SideBar />
          </div>
          <div className="col">
            <div className="row">
              <div className="col-12 col-md-8">
                <div className="main-content" style={{ overflowX: "hidden" }}>
                  <h1 className="page-title">Account Overview</h1>
                  <div className="account-status">
                    <div className="icon">
                      <img src={accountBalnce} alt="Account Balnce" />
                    </div>
                    <div className="info">
                      <h5>Account Balance</h5>
                      <h4>$50.53</h4>
                    </div>
                    <div className="info">
                      <h6>Principle Balance</h6>
                      <h4>$19.53</h4>
                    </div>
                    <div className="info">
                      <h6>Profit Balance</h6>
                      <h4>$50.53</h4>
                    </div>
                    <div className="info-icon"></div>
                  </div>
                  <div className="account-status mt-5">
                    <div className="icon">
                      <img src={equalityBalnce} alt="Account Balnce" />
                    </div>
                    <div className="info">
                      <h5>Equity Balance</h5>
                      <h4>$50.53</h4>
                    </div>
                    <div className="info">
                      <h6>Principle Balance</h6>
                      <h4>$19.53</h4>
                    </div>
                    <div className="info">
                      <h6>Profit Balance</h6>
                      <h4>$50.53</h4>
                    </div>
                    <div className="info last-child">
                      <h6>Credit Balance</h6>
                      <h4>$50.53</h4>
                    </div>
                    <div className="info-icon"></div>
                  </div>
                  <ChartBar data={chartData} />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="referral">
                  <img src={ReferFriend} alt="ReferFriend" className="referral-img"/>
                  <h3>Your Referral Link</h3>
                  <div className="d-flex">
                    <input type="text" value={referralLink} readOnly ref={referralLinkInput} className="referral-link col-10"/>
                    <button onClick={copyToClipboard} className="copy col">
                      <img src={copyIcon} alt="copy"  width="30px" height="30px"/>
                    </button>
                  </div>
                </div>
                <div className="mt-5 announcement">
                  Announcement
                  <div className="announcement-img"></div>
                </div>
                <div className="dashboard-prelaunch mt-1">
                  Prelaunch Campaign
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import React from "react";
import logo from "../../assets/images/logo.svg";
import right from "../../assets/images/right.svg";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      <ul
        className="navbar-nav sidebar bg-light sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand mb-4 d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-text mx-3 mt-4">
            <img src={logo} className="img-fluid" alt="logo" />
          </div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li
          className={`nav-item mb-1 ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider my-0" />
        <li
          className={`nav-item mb-1 ${
            location.pathname === "/announcements" ||
            location.pathname === "/announcements/create"
              ? "active"
              : ""
          }`}
        >
          <Link className="nav-link" to="/announcements">
            <i class="fa-solid fa-bullhorn"></i>
            <span>Anouncements</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">User Management</div>
        <li
          className={`nav-item mb-1 ${
            location.pathname === "/users" ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/users">
            <i className="fas fa-users" />
            <span>Users</span>
          </Link>
          {/* <div className="collapse" id="users">
            <div className="card card-body collapse-inner rounded">
              <Link className="collapse-item" to="/users">
                All Users
              </Link>
              <Link className="collapse-item" href="/active_users">
                Active Users
              </Link>
              <Link className="collapse-item" href="/disabled_users">
                Disabled Users
              </Link>
            </div>
          </div> */}
        </li>
        <li
          className={`nav-item mb-1 ${
            location.pathname === "/kyc" ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/kyc">
            <i className="fa fa-question-circle" />
            <span>KYC</span>
          </Link>
          {/* <div className="collapse" id="kyc">
            <div className="card card-body collapse-inner rounded">
              <Link className="collapse-item" to="/pending_kyc">
                Pending KYC
              </Link>
              <Link className="collapse-item" to="/rejected_kyc">
                Rejected KYC
              </Link>
              <Link className="collapse-item" to="/kyc_logs">
                All KYC Logs
              </Link>
            </div>
          </div> */}
        </li>
        {/* <li 
          className={`nav-item mb-1 ${
            location.pathname === "/users" ? "active" : ""
          }`}>
          <Link className="nav-link" to="/transactions">
            <i className="fas fa-exchange-alt" />
            <span>Transactions</span>
          </Link>
        </li> */}
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Investment Management</div>
        {/* <li 
          className={`nav-item mb-1 ${
            location.pathname === "/users" ? "active" : ""
          }`}>
          <Link className="nav-link" to="/investments" role="button">
            <i className="fas fa-money-bill-wave" />
            <span>Investments</span>
          </Link>
        </li> */}
        <li
          className={`nav-item mb-1 ${
            location.pathname === "/investment_packages" ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/investment_packages" role="button">
            <i className="fas fa-cubes" />
            <span>Investment Packages</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">FINANCIAL TRANSACTIONS</div>
        <li
          className={`nav-item mb-1 ${
            location.pathname === "/transactions" ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/transactions">
            <i className="fas fa-money-check-alt" />
            <span>Transactions</span>
          </Link>
          {/* <div className="collapse" id="deposit">
            <div className="card card-body collapse-inner rounded">
              <Link className="collapse-item" to="/pending_deposit">
                Pending Deposit
              </Link>
              <Link className="collapse-item" to="/deposit_history">
                Deposit History
              </Link>
            </div>
          </div> */}
        </li>
        {/* <li 
          className={`nav-item mb-1 ${
            location.pathname === "/users" ? "active" : ""
          }`}>
          <Link
            className="nav-link"
            to="/withdraw"
          >
            <i className="far fa-money-bill-alt" />
            <span>Withdraw</span>
          </Link>
           <div className="collapse" id="withdraw">
            <div className="card card-body collapse-inner rounded">
              <Link className="collapse-item" to="/pending_withdraw">
                Pending Withdraw
              </Link>
              <Link className="collapse-item" to="/withdraw_history">
                Withdraw History
              </Link>
            </div>
          </div> 
        </li>*/}
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">REFERRAL PROGRAM</div>
        {/* <li 
          className={`nav-item mb-1 ${
            location.pathname === "/users" ? "active" : ""
          }`}>
          <Link className="nav-link" to="/referral" role="button">
            <i className="fas fa-network-wired" />
            <span>Referral Relationships</span>
          </Link>
        </li> */}
        <li
          className={`nav-item mb-1 ${
            location.pathname === "/credit" ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/credit" role="button">
            <i className="fas fa-percent" />
            <span>Credit Percentages</span>
          </Link>
        </li>
        <li
          className={`nav-item mb-1 ${
            location.pathname === "/claimed-rewards" ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/claimed-rewards" role="button">
            <i className="fas fa-percent" />
            <span>Claimed Rewards</span>
          </Link>
        </li>
        {/* Divider */}
        {/* <hr className="sidebar-divider" />
        <div className="sidebar-heading">RANK MANAGEMENT</div>
        <li 
          className={`nav-item mb-1 ${
            location.pathname === "/users" ? "active" : ""
          }`}>
          <Link className="nav-link" to="/ranking" role="button">
            <i className="fas fa-bullseye" />
            <span>User Ranking</span>
          </Link>
        </li> */}
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        {/* <div className="sidebar-heading">SUPPORT AND COMMUNICATION</div>
        <li
          className={`nav-item mb-1 ${
            location.pathname === "/complaints_or_Issues" ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/complaints_or_Issues" role="button">
            <i className="fas fa-exclamation" />
            <span>Complaints or Issues</span>
          </Link>
        </li> */}
        {/* Divider */}
        {/* <hr className="sidebar-divider" /> */}
        {/* Heading */}
        {/* <div className="sidebar-heading">EMAIL AND NOTIFICATIONS</div>
        <li
          className={`nav-item mb-1 ${
            location.pathname === "/users" ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/email" role="button">
            <i className="fas fa-envelope" />
            <span>Email</span>
          </Link>
        </li>
        <li
          className={`nav-item mb-1 ${
            location.pathname === "/users" ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/notifications" role="button">
            <i className="fas fa-bell" />
            <span>Notifications</span>
          </Link>
        </li> */}
        {/* Divider */}
        {/* <hr className="sidebar-divider" />
        <div className="sidebar-heading">CONTENT MANAGEMENT</div>
        <li 
          className={`nav-item mb-1 ${
            location.pathname === "/users" ? "active" : ""
          }`}>
          <Link
            className="nav-link"
            data-bs-toggle="collapse"
            to="#landing"
            role="button"
            aria-expanded="false"
            aria-controls="landing"
          >
            <i className="fas fa-tasks" />
            <span>Landing Page</span>
            <img className="float-right" src={right} alt="landing page" />
          </Link>
          <div className="collapse" id="landing">
            <div className="card card-body collapse-inner rounded">
              <a className="collapse-item" href="buttons.html">
                Buttons
              </a>
              <a className="collapse-item" href="cards.html">
                Cards
              </a>
            </div>
          </div>
        </li> */}
        {/* Divider */}
        <hr className="sidebar-divider mt-2" />
        <li className="nav-item mt-3">
          <Link
            className="nav-link"
            data-bs-toggle="collapse"
            to="#settings"
            role="button"
            aria-expanded="false"
            aria-controls="settings"
          >
            <i className="fas fa-cog" />
            <span>Settings</span>
            <img className="float-right" src={right} alt="setting" />
          </Link>
          <div className="collapse" id="settings">
            <div className="card card-body collapse-inner rounded">
              <a className="collapse-item" href="/profile">
                Profile
              </a>
              {/* <a className="collapse-item" href="settings.html">
                Site Settings
              </a> */}
            </div>
          </div>
        </li>
        <li className={`nav-item mb-1 `}>
          <Link className="nav-link text-danger" to="/signout" role="button">
            <i className="fas fa-sign-out-alt" />
            <span>Sign Out</span>
          </Link>
        </li>
      </ul>
      {/* End of Sidebar */}
    </>
  );
};

export default Sidebar;

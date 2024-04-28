import React from "react";
import "./SideBar.css";
import dashboard from "../../../images/svg/dashboard.svg";
import statements from "../../../images/svg/statements.svg";
import deposit from "../../../images/svg/deposit.svg";
import withdraw from "../../../images/svg/withdraw.svg";
import referrals from "../../../images/svg/referrals.svg";
import rank from "../../../images/svg/rank.svg";
import support from "../../../images/svg/support.svg";
import { Link } from "react-router-dom";
import { tocapitalCase } from "../../Common";
const SideBar = () => {
  const links = [
    {
      link: "/dashboard",
      name: "dashboard",
      icon: dashboard,
      arrow: false,
    },
    {
      link: "/statements",
      name: "statements",
      icon: statements,
    },
    {
      link: "/deposit",
      name: "deposit",
      icon: deposit,
    },
    {
      link: "/withdrawal",
      name: "withdrawal",
      icon: withdraw,
    },
    {
      link: "/referral",
      name: "referrals",
      icon: referrals,
    },
    {
      link: "/rank",
      name: "rank",
      icon: rank,
    },
    {
      link: "/support",
      name: "support",
      icon: support,
    },
  ];
  return (
    <div className="sidebar">
      <div className="links">
        {links.map((link) => (
          <Link to={link.link} className="menu-item active" key={link.name}>
            <div className="icon">
              <img className="active" src={link.icon} alt={link.name} />
            </div>
            <div className="text">{tocapitalCase(link.name)}</div>
            {/* <div className="arrow">
            {link.arrow && <img src={arrowLeft} alt="arrow" />}
          </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import logo from "../../../../images/svg/logo.svg";
import bg from "../../../../images/svg/bg.svg";
const Home = () => {
  return (
    <section id="home">
      {/* <header>
        <div className="imgbx">
          <img src={logo} className="img-fluid" alt="logo" />
        </div>
      </header>
      <div className="sub-heading">
        <h5>
          QUICKPAYUS is offering you financial freedom. With us, let's turn dreams{" "}
          <br />
          into reality. Start the journey to GET RICH!
        </h5>
      </div> */}
      <header>
        <img src={bg} alt="" />
        <div className="imgbx">
          <img src={logo} alt="" />
        </div>
        <div className="sub-heading">
          <h5>
            QUICKPAYUS is offering you financial freedom. With us, let's turn
            dreams <br />
            into reality. Start the journey to GET RICH!
          </h5>
        </div>
      </header>
    </section>
  );
};

export default Home;

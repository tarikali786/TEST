import React from "react";
import box from "../../../../images/svg/box.svg";
import box2 from "../../../../images/svg/box2.svg";
import box3 from "../../../../images/svg/box3.svg";
const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Why Choose Us</h2>
            <p>More Easy</p>
            <div className="divider"></div>
            <div className="box-sec">
              <div className="row">
                <div className="col-md-4">
                  <div className="why-box">
                    <img src={box} alt="box" className="img-fluid" />
                    <h6>Our powerhouse</h6>
                    <p>
                      QUICKPAYUS is at the forefront of safeguarding your
                      investment. Our powerhouse of analysts and traders,{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="why-box">
                    <img src={box2} alt="box" className="img-fluid" />
                    <h6>cutting-edge AI</h6>
                    <p>
                      Fortified by cutting-edge AI and executing flawlessly
                      implemented strategies, actively slashes risks, driving
                      the chance of loss to an infinitesimally low figure,
                      nearly 0%.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="why-box">
                    <img src={box3} alt="box" className="img-fluid" />
                    <h6>financial freedom</h6>
                    <p>
                      We are unwaveringly committed to providing an
                      unparalleled, secure, and trustworthy space for your
                      financial freedom.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button className="btn btn-success">learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

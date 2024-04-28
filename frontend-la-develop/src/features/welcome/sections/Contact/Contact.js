import React from "react";
import email from "../../../../images/svg/email.svg";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left">
            <h2>Our Social Presence</h2>
            <p>
              Elevate your social experience with our seamless platform. Craft
              your personal profile, engage in real-time conversations, and
              enjoy tailored content. Connect effortlessly, share freely, and
              engage authentically. Join us today for a new era of digital
              connection!
            </p>
            <div className="email">
              <img src={email} alt="email" className="img-fluid" />
              <p>info@craft.com</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-form">
              <form action="">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <input type="text" placeholder="Subject" />
                  </div>
                  <div className="col-md-12">
                    <textarea placeholder="Message"></textarea>
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn-success">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

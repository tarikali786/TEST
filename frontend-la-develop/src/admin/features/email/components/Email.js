import React from "react";
import Main from "../../../components/Main/Main";

const Email = () => {
  return (
    <Main>
      <div className="d-sm-flex mt-4 align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Email</h1>
        {/* <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50" /> Generate Report
        </a> */}
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4 table-card">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-theme">
                Send Email To All
              </h6>
            </div>
            <div className="card-body">
              <div className="mb-3 mt-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Subject
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Email Details
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <button className="btn btn-primary mb-5">Send</button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Email;

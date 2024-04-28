import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";

const Notifications = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          <Navbar />
          {/* Begin Page Content */}
          <div className="container-fluid" style={{ overflowX: "scroll" }}>
            {/* Page Heading */}
            <div className="d-sm-flex mt-4 align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Notifications</h1>
              <a
                href="#"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-download fa-sm text-white-50" /> Generate
                Report
              </a>
            </div>
            {/* Content Row */}
            <div className="row">
              {/* Area Chart */}
              <div className="col-xl-12 col-lg-12">
                <div className="card shadow mb-4 table-card">
                  {/* Card Header -  Dropdown */}
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-theme">
                      Send Notifications To All
                    </h6>
                  </div>
                  {/* Card Body */}
                  <div className="card-body">
                    <div className="mb-3 mt-4">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Notification text
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
          </div>
          {/* /.container-fluid */}
        </div>
        {/* End of Main Content */}
        {/* Footer */}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright © Your Website 2021</span>
            </div>
          </div>
        </footer>
        {/* End of Footer */}
      </div>
      {/* End of Content Wrapper */}
    </div>
  );
};

export default Notifications;

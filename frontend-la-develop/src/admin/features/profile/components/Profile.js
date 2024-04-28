import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import user from "../../../assets/images/user.jpg"
const Profile = () => {
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
              <h1 className="h3 mb-0 text-gray-800">Profile</h1>
            </div>
            {/* Content Row */}
            <div className="row">
              {/* Area Chart */}
              <div className="col-md-4">
                <div className="card shadow mb-4 table-card">
                  {/* Card Body */}
                  <div className="card-body text-center">
                    <img src={user} className="mb-3" />
                    <h3 className="mb-3">Name Here</h3>
                    <p className="mb-3">Supar Admin</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card shadow mb-4 table-card">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-theme">
                      Information
                    </h6>
                  </div>
                  {/* Card Body */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3 mt-3">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name Here"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3 mt-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3 mt-3">
                          <label className="form-label">Phone</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder={123456789}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3 mt-3">
                          <label className="form-label">Role</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Super Admin"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mt-3 mb-3">
                        <button
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
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

export default Profile;

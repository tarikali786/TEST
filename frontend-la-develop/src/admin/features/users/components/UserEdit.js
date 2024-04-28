import React, { useEffect } from "react";
import Footer from "../../../components/Footer/Footer.jsx";
import Navbar from "../../../components/Navbar/Navbar.js";
import Sidebar from "../../../components/Sidebar/Sidebar.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { selectUser, userDataAsync } from "../usersSlice.js";
import { useSelector, useDispatch } from "react-redux";

const UserEdit = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const user = useSelector(selectUser);
  useEffect(() => {
    if (username) {
      dispatch(userDataAsync(username));
    }
  }, [dispatch, username]);
  console.log(user);

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid" style={{ overflowX: "scroll" }}>
              <div className="d-sm-flex mt-4 align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">
                  Details of {user?.firstName} {user?.lastName}
                </h1>
                <Link
                  to="/users"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  Back
                </Link>
              </div>
              <div className="row">
                <div className="col-xl-8 col-lg-8 edit-card">
                  <div className="card shadow mb-4 table-card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="user-img">
                            <p>AS</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 intro">
                          <h2>Name Here</h2>
                          <p>Bangladesh</p>
                        </div>
                        <div className="col-md-12">
                          <ul>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-title="Send Email"
                            >
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i className="fas fa-envelope" />
                              </a>
                              <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h1
                                        className="modal-title fs-5"
                                        id="exampleModalLabel"
                                      >
                                        Send Mail to "Name"
                                      </h1>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
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
                                      <button className="btn btn-primary">
                                        Send
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-title="Login As User"
                            >
                              <a href="#">
                                <i className="fas fa-user-plus" />
                              </a>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-title="Fund add or Subtract"
                            >
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal2"
                              >
                                <i className="fas fa-wallet" />
                              </a>
                              <div
                                className="modal fade"
                                id="exampleModal2"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h1
                                        className="modal-title fs-5"
                                        id="exampleModalLabel"
                                      >
                                        Balance Add or Subtract
                                      </h1>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <div className="mb-3 mt-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option value={1}>Add</option>
                                          <option value={2}>Subtract</option>
                                        </select>
                                      </div>
                                      <div className="mb-3">
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option value={1}>Main Wallet</option>
                                          <option value={2}>
                                            Profit Wallet
                                          </option>
                                        </select>
                                      </div>
                                      <div className="input-group mb-3">
                                        <span
                                          className="input-group-text"
                                          id="basic-addon1"
                                        >
                                          USD
                                        </span>
                                        <input
                                          type="number"
                                          className="form-control"
                                          placeholder={123}
                                        />
                                      </div>
                                      <button className="btn btn-primary">
                                        Apply Now
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-12">
                          <div className="wallet-box mb-3">
                            <h3>Main Wallet</h3>
                            <p>
                              USD <span>$120 </span>{" "}
                            </p>
                          </div>
                          <div className="wallet-box mb-3">
                            <h3>Profit Wallet</h3>
                            <p>
                              USD <span>$120 </span>{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row acc-info">
                        <div className="col-md-12">
                          <div className="card">
                            <div className="card-header">
                              <h4 className="text-theme">
                                Account Information
                              </h4>
                            </div>
                            <div className="card-body">
                              <div className="mb-3 mt-3">
                                <label htmlFor="">Account Status</label>
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option value={1}>Active</option>
                                  <option value={2}>Disabled</option>
                                </select>
                              </div>
                              <div className="mb-3 mt-3">
                                <label htmlFor="">Email verification</label>
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option value={1}>Verified</option>
                                  <option value={2}>Unverified</option>
                                </select>
                              </div>
                              <div className="mb-3 mt-3">
                                <label htmlFor="">KYC verification</label>
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option value={1}>Verified</option>
                                  <option value={2}>Unverified</option>
                                </select>
                              </div>
                              <div className="mb-3 mt-3">
                                <label htmlFor="">2FA verification</label>
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option value={1}>Active</option>
                                  <option value={2}>Disabled</option>
                                </select>
                              </div>
                              <div className="mb-3 mt-3">
                                <label htmlFor="">Deposit Status</label>
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option value={1}>Active</option>
                                  <option value={2}>Disabled</option>
                                </select>
                              </div>
                              <div className="mb-3 mt-3">
                                <label htmlFor="">Withdraw Status</label>
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option value={1}>Active</option>
                                  <option value={2}>Disabled</option>
                                </select>
                              </div>
                              <div className="mb-3 mt-3">
                                <label htmlFor="">Send Money Status</label>
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option value={1}>Active</option>
                                  <option value={2}>Disabled</option>
                                </select>
                              </div>
                              <div className="mb-3 mt-3">
                                <button className="btn btn-primary">
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12">
                  <div className="card shadow mb-4 table-card">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-theme">
                        Basic Info
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3 mt-3">
                            <label className="form-label">First Name:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3 mt-3">
                            <label className="form-label">Last Name:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3 mt-3">
                            <label className="form-label">Phone</label>
                            <input
                              type="number"
                              disabled=""
                              className="form-control"
                              placeholder={+880}
                            />
                          </div>
                          <div className="mb-3 mt-3">
                            <label className="form-label">Gender</label>
                            <input
                              type="text"
                              disabled=""
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3 mt-3">
                            <label className="form-label">Zip Code</label>
                            <input type="number" className="form-control" />
                          </div>
                          <div className="mb-3 mt-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3 mt-3">
                            <label className="form-label">
                              Date of Birthday
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              disabled=""
                            />
                          </div>
                          <div className="mb-3 mt-3">
                            <label className="form-label">Address</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3 mt-3">
                            <label className="form-label">Country</label>
                            <input
                              type="text"
                              className="form-control"
                              disabled=""
                            />
                          </div>
                          <div className="mb-3 mt-3">
                            <label className="form-label">Email</label>
                            <input
                              type="text"
                              className="form-control"
                              disabled=""
                            />
                          </div>
                          <div className="mb-3 mt-3">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3 mt-3">
                            <label className="form-label">Joining Date</label>
                            <input
                              type="date"
                              className="form-control"
                              disabled=""
                            />
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-primary">Save Changes</button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12">
                  <div className="card shadow mb-4 table-card">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-theme">
                        Change Password
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3 mt-3">
                            <label className="form-label">New password</label>
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3 mt-3">
                            <label className="form-label">
                              Confirm Password
                            </label>
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-primary">Save Changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default UserEdit;

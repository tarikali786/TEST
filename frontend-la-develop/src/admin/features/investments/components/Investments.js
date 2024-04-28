import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";

const Investments = () => {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid" style={{ overflowX: "scroll" }}>
              <div className="d-sm-flex mt-4 align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Investments</h1>
                {/* <a
                  href="#"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50" /> Generate
                  Report
                </a> */}
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="card shadow mb-4 table-card">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-theme">
                        Investments
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          className="table table-bordered all-user"
                          id="dataTable"
                          width="100%"
                          cellSpacing={0}
                        >
                          <thead>
                            <tr>
                              <th>Icon</th>
                              <th>User</th>
                              <th>Schema</th>
                              <th>ROI</th>
                              <th>Profit</th>
                              <th>Capital Back</th>
                              <th>Period Remaining</th>
                              <th>Timeline</th>
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <th>Icon</th>
                              <th>User</th>
                              <th>Schema</th>
                              <th>ROI</th>
                              <th>Profit</th>
                              <th>Capital Back</th>
                              <th>Period Remaining</th>
                              <th>Timeline</th>
                            </tr>
                          </tfoot>
                          <tbody>
                            <tr>
                              <td>
                                <i className="fas fa-user" />
                              </td>
                              <td>ChitChit</td>
                              <td>
                                <p>Pro plan -&gt; $250</p>
                                <p>Jan 02 2024</p>
                                <p>03:31</p>
                              </td>
                              <td>$10</td>
                              <td>0 x 10 = 0 USD</td>
                              <td>
                                <span className="badge text-bg-success p-2">
                                  Yes
                                </span>
                              </td>
                              <td>5 times</td>
                              <td>
                                <p>0D : 22H : 40M : 53S</p>
                                <span className="badge text-bg-primary p-2 mb-2">
                                  5.54%
                                </span>
                                <div
                                  className="progress"
                                  role="progressbar"
                                  aria-label="Basic example"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  <div
                                    className="progress-bar bg-danger"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="fas fa-user" />
                              </td>
                              <td>ChitChit</td>
                              <td>
                                <p>Pro plan -&gt; $250</p>
                                <p>Jan 02 2024</p>
                                <p>03:31</p>
                              </td>
                              <td>$10</td>
                              <td>0 x 10 = 0 USD</td>
                              <td>
                                <span className="badge text-bg-success p-2">
                                  Yes
                                </span>
                              </td>
                              <td>5 times</td>
                              <td>
                                <p>0D : 22H : 40M : 53S</p>
                                <span className="badge text-bg-primary p-2 mb-2">
                                  5.54%
                                </span>
                                <div
                                  className="progress"
                                  role="progressbar"
                                  aria-label="Basic example"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  <div
                                    className="progress-bar bg-danger"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="fas fa-user" />
                              </td>
                              <td>ChitChit</td>
                              <td>
                                <p>Pro plan -&gt; $250</p>
                                <p>Jan 02 2024</p>
                                <p>03:31</p>
                              </td>
                              <td>$10</td>
                              <td>0 x 10 = 0 USD</td>
                              <td>
                                <span className="badge text-bg-success p-2">
                                  Yes
                                </span>
                              </td>
                              <td>5 times</td>
                              <td>
                                <p>0D : 22H : 40M : 53S</p>
                                <span className="badge text-bg-primary p-2 mb-2">
                                  5.54%
                                </span>
                                <div
                                  className="progress"
                                  role="progressbar"
                                  aria-label="Basic example"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  <div
                                    className="progress-bar bg-danger"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="fas fa-user" />
                              </td>
                              <td>ChitChit</td>
                              <td>
                                <p>Pro plan -&gt; $250</p>
                                <p>Jan 02 2024</p>
                                <p>03:31</p>
                              </td>
                              <td>$10</td>
                              <td>0 x 10 = 0 USD</td>
                              <td>
                                <span className="badge text-bg-success p-2">
                                  Yes
                                </span>
                              </td>
                              <td>5 times</td>
                              <td>
                                <p>0D : 22H : 40M : 53S</p>
                                <span className="badge text-bg-primary p-2 mb-2">
                                  5.54%
                                </span>
                                <div
                                  className="progress"
                                  role="progressbar"
                                  aria-label="Basic example"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  <div
                                    className="progress-bar bg-danger"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="fas fa-user" />
                              </td>
                              <td>ChitChit</td>
                              <td>
                                <p>Pro plan -&gt; $250</p>
                                <p>Jan 02 2024</p>
                                <p>03:31</p>
                              </td>
                              <td>$10</td>
                              <td>0 x 10 = 0 USD</td>
                              <td>
                                <span className="badge text-bg-success p-2">
                                  Yes
                                </span>
                              </td>
                              <td>5 times</td>
                              <td>
                                <p>0D : 22H : 40M : 53S</p>
                                <span className="badge text-bg-primary p-2 mb-2">
                                  5.54%
                                </span>
                                <div
                                  className="progress"
                                  role="progressbar"
                                  aria-label="Basic example"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  <div
                                    className="progress-bar bg-danger"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="fas fa-user" />
                              </td>
                              <td>ChitChit</td>
                              <td>
                                <p>Pro plan -&gt; $250</p>
                                <p>Jan 02 2024</p>
                                <p>03:31</p>
                              </td>
                              <td>$10</td>
                              <td>0 x 10 = 0 USD</td>
                              <td>
                                <span className="badge text-bg-success p-2">
                                  Yes
                                </span>
                              </td>
                              <td>5 times</td>
                              <td>
                                <p>0D : 22H : 40M : 53S</p>
                                <span className="badge text-bg-primary p-2 mb-2">
                                  5.54%
                                </span>
                                <div
                                  className="progress"
                                  role="progressbar"
                                  aria-label="Basic example"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  <div
                                    className="progress-bar bg-danger"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="fas fa-user" />
                              </td>
                              <td>ChitChit</td>
                              <td>
                                <p>Pro plan -&gt; $250</p>
                                <p>Jan 02 2024</p>
                                <p>03:31</p>
                              </td>
                              <td>$10</td>
                              <td>0 x 10 = 0 USD</td>
                              <td>
                                <span className="badge text-bg-success p-2">
                                  Yes
                                </span>
                              </td>
                              <td>5 times</td>
                              <td>
                                <p>0D : 22H : 40M : 53S</p>
                                <span className="badge text-bg-primary p-2 mb-2">
                                  5.54%
                                </span>
                                <div
                                  className="progress"
                                  role="progressbar"
                                  aria-label="Basic example"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  <div
                                    className="progress-bar bg-danger"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="fas fa-user" />
                              </td>
                              <td>ChitChit</td>
                              <td>
                                <p>Pro plan -&gt; $250</p>
                                <p>Jan 02 2024</p>
                                <p>03:31</p>
                              </td>
                              <td>$10</td>
                              <td>0 x 10 = 0 USD</td>
                              <td>
                                <span className="badge text-bg-success p-2">
                                  Yes
                                </span>
                              </td>
                              <td>5 times</td>
                              <td>
                                <p>0D : 22H : 40M : 53S</p>
                                <span className="badge text-bg-primary p-2 mb-2">
                                  5.54%
                                </span>
                                <div
                                  className="progress"
                                  role="progressbar"
                                  aria-label="Basic example"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  <div
                                    className="progress-bar bg-danger"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="fas fa-user" />
                              </td>
                              <td>ChitChit</td>
                              <td>
                                <p>Pro plan -&gt; $250</p>
                                <p>Jan 02 2024</p>
                                <p>03:31</p>
                              </td>
                              <td>$10</td>
                              <td>0 x 10 = 0 USD</td>
                              <td>
                                <span className="badge text-bg-success p-2">
                                  Yes
                                </span>
                              </td>
                              <td>5 times</td>
                              <td>
                                <p>0D : 22H : 40M : 53S</p>
                                <span className="badge text-bg-primary p-2 mb-2">
                                  5.54%
                                </span>
                                <div
                                  className="progress"
                                  role="progressbar"
                                  aria-label="Basic example"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  <div
                                    className="progress-bar bg-danger"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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

export default Investments;

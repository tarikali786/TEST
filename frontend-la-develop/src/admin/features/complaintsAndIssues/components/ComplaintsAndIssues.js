import React from "react";
import Main from "../../../components/Main/Main";

const ComplaintsAndIssues = () => {
  return (
    <Main>
      <div className="d-sm-flex mt-4 align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Complaints and Issues</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50" /> Generate Report
        </a>
      </div>
      <div className="row">
        {/* Area Chart */}
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4 table-card">
            {/* Card Header -  Dropdown */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-theme">
                Complaints and Issues
              </h6>
            </div>
            {/* Card Body */}
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
                      <th>User</th>
                      <th>Email</th>
                      <th>Complaints</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>User</th>
                      <th>Email</th>
                      <th>Complaints</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td>ChitChit</td>
                      <td>BukunmiOgundeji2085 </td>
                      <td>
                        You can include multiple progress components inside a
                        container with .progress-stacked to create a single
                        stacked progress bar
                      </td>
                      <td>
                        <span
                          className="badge text-bg-primary p-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Reply"
                        >
                          <i className="fas fa-reply" />
                        </span>
                        <span
                          className="badge text-bg-danger p-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Delete"
                        >
                          <i className="fas fa-trash" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>ChitChit</td>
                      <td>BukunmiOgundeji2085 </td>
                      <td>
                        You can include multiple progress components inside a
                        container with .progress-stacked to create a single
                        stacked progress bar
                      </td>
                      <td>
                        <span
                          className="badge text-bg-primary p-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Reply"
                        >
                          <i className="fas fa-reply" />
                        </span>
                        <span
                          className="badge text-bg-danger p-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Delete"
                        >
                          <i className="fas fa-trash" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>ChitChit</td>
                      <td>BukunmiOgundeji2085 </td>
                      <td>
                        You can include multiple progress components inside a
                        container with .progress-stacked to create a single
                        stacked progress bar
                      </td>
                      <td>
                        <span
                          className="badge text-bg-primary p-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Reply"
                        >
                          <i className="fas fa-reply" />
                        </span>
                        <span
                          className="badge text-bg-danger p-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Delete"
                        >
                          <i className="fas fa-trash" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>ChitChit</td>
                      <td>BukunmiOgundeji2085 </td>
                      <td>
                        You can include multiple progress components inside a
                        container with .progress-stacked to create a single
                        stacked progress bar
                      </td>
                      <td>
                        <span
                          className="badge text-bg-primary p-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Reply"
                        >
                          <i className="fas fa-reply" />
                        </span>
                        <span
                          className="badge text-bg-danger p-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Delete"
                        >
                          <i className="fas fa-trash" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ComplaintsAndIssues;

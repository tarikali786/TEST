import React from "react";
import { Navbar } from "../../../components/Guest/Navbar/Navbar";
import SideBar from "../../../Common/components/SideBar/SideBar";

const ReferralsDashboard = () => {
  const TableData = () => {
    return (
      <>
        <div className="table-responsive transction-table">
          <table className="table active">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email address</th>
                <th scope="col">Reference</th>
                <th scope="col">Investment</th>
                <th scope="col">Joining Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$1000</td>
                <td>Kahlan ameil</td>
                <td>1293546739</td>
                <td>Deposit</td>
                <td>Monday, Oct 21,2023 8:22 pm</td>
              </tr>
              <tr>
                <td>$1000</td>
                <td>Kahlan ameil</td>
                <td>1293546739</td>
                <td>Deposit</td>
                <td>Monday, Oct 21,2023 8:22 pm</td>
              </tr>
              <tr>
                <td>$1000</td>
                <td>Kahlan ameil</td>
                <td>1293546739</td>
                <td>Deposit</td>
                <td>Monday, Oct 21,2023 8:22 pm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination-conatiner">
          <div className="pagination">
            <div className="arrow-left"></div>
            <div className="page-num">1</div>
            <div className="arrow-right"></div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="mt-44">
        <div className="row">
          <div className=" d-none d-md-block col-md-3 col-lg-2">
            <SideBar />
          </div>
          <div className="col-12 col-md-9 col-lg-10">
            <div className="main-content" style={{ overflowX: "hidden" }}>
              <div className="d-flex justify-content-between">
                <h1 className="page-title">Referrals</h1>
                <div className="dropdown">
                  <button className="dropdown-button">Dropdown</button>
                  <div className="dropdown-content">
                    <a href="#">Item 1</a>
                    <a href="#">Item 2</a>
                    <a href="#">Item 3</a>
                  </div>
                </div>
              </div>
              <TableData />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralsDashboard;

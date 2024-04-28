import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  depositAsync,
  selectTransactionsData,
  withdrawAsync,
} from "./transactionsSlice";
import "./Transactions.css";
import SideBar from "../../Common/components/SideBar/SideBar";
import { Navbar } from "../../components/Auth/Navbar/Navbar";
import { Link } from "react-router-dom";
import { dateFormate } from "../../Common/Common";

const Transactions = () => {
  const dispatch = useDispatch();
  const [statementDeopdown, setStatementDeopdown] = useState("Deposit");
  const TableData = () => {
    useEffect(() => {
      if (statementDeopdown === "Deposit") {
        dispatch(depositAsync());
      } else {
        dispatch(withdrawAsync());
      }
    }, []);
    const data = useSelector(selectTransactionsData);
    return (
      <>
        <div className="table-responsive transction-table">
          <table className="table active">
            <thead>
              <tr>
                <th scope="col">Amount</th>
                <th scope="col">Customer</th>
                <th scope="col">Reference</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.length !== 0 &&
                data.map((item) => (
                  <tr>
                    <td>${item.amount}</td>
                    <td>Kahlan ameil</td>
                    <td>{item._id}</td>
                    <td>{item.status}</td>
                    <td>{dateFormate(item.createdAt)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="pagination-conatiner">
          <div className="pagination">
            <div className="arrow"></div>
            <div className="page-num">1</div>
            <div className="arrow right"></div>
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
                <h1 className="page-title">Account Overview</h1>
                <div className="dropdown">
                  <button className="dropdown-button">
                    {statementDeopdown}
                  </button>
                  <div className="dropdown-content">
                    <Link onClick={(e) => setStatementDeopdown("Deposit")}>
                      Deposit
                    </Link>
                    <Link onClick={(e) => setStatementDeopdown("withdraw")}>
                      Withdraw
                    </Link>
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

export default Transactions;

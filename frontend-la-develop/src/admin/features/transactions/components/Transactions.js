import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  clearError,
  clearMessage,
  selectData,
  selectError,
  selectMessage,
  selectTotalPages,
  transactionUpdateAsync,
  transactionsAsync,
} from "../transactionsSlice";
import { toastError, toastSuccess } from "../../../../Common/toast/toast";
import { tocapitalCase } from "../../../../Common/Common";
import { Link } from "react-router-dom";
import Main from "../../../components/Main/Main";
const Modal = ({ handleTransaction, transaction, show }) => {
  const dispatch = useDispatch();
  const [reason, setReason] = useState("");
  const handleStatus = (transaction) => {
    const data = {
      status: transaction?.status,
      reason,
      transactionId: transaction?.id,
    };
    dispatch(transactionUpdateAsync(data));
    handleTransaction({});
  };
  return (
    <div
      className={`modal fade ${show && "show d-block"}`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="showPopUpLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="showPopUpLabel">
              Are You Sure do you want to {transaction?.status?.toLowerCase()}{" "}
              this transaction?
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => handleTransaction({})}
            ></button>
          </div>
          <div className="modal-body">
            {transaction.status === "REJECTED" && (
              <textarea
                name="reason"
                id="reason"
                cols="20"
                rows="3"
                className="form-control"
                onChange={(e) => setReason(e.target.value)}
              ></textarea>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => handleTransaction(null)}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              disabled={transaction?.status === "REJECTED" && reason === ""}
              onClick={() => handleStatus(transaction)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Table = ({ type, page, status, onPageChange }) => {
  const [transaction, setTransaction] = useState({});
  const dispatch = useDispatch();
  const items = useSelector(selectData);
  const totalPages = useSelector(selectTotalPages);
  const message = useSelector(selectMessage);
  const error = useSelector(selectError);
  useEffect(() => {
    if (!message)
      dispatch(transactionsAsync({ transactionType: type, page, status }));
  }, [transaction, dispatch, type, page, status, message]);
  const handleTransaction = (data) => {
    setTransaction(data);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (message) {
        dispatch(clearMessage());
        toastSuccess(message);
      }
      if (error) {
        dispatch(clearError());
        toastError(error);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [message, error, dispatch]);

  return (
    <>
      <Modal
        handleTransaction={handleTransaction}
        transaction={transaction}
        show={transaction && transaction.status !== undefined}
      />
      <div className="table-responsive">
        <table
          className="table table-bordered all-user"
          width="100%"
          cellSpacing={0}
        >
          <thead>
            <tr>
              <th>Date</th>
              <th>User</th>
              <th>Transaction ID</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.createdAt} {item.lastName}
                </td>
                <td>{item.username}</td>
                <td>{item._id}</td>
                <td>{item.transactionType}</td>
                {/* <td>
                  <span
                    className={`badge ${
                      item.isActive ? "text-bg-success" : "text-bg-danger"
                    } p-2`}
                  >
                    {item.isActive ? "Active" : "Inactive"}
                  </span>
                </td> */}
                <td>
                  <span className={` p-2`}>{item.amount}</span>
                </td>
                <td>
                  {transaction === item._id && item.status === "PENDING" ? (
                    <select
                      name="status"
                      id="status"
                      value={item.status}
                      onChange={(e) =>
                        handleTransaction({
                          id: item._id,
                          status: e.target.value,
                        })
                      }
                    >
                      <option value="PENDING">Pending</option>
                      <option value="APPROVED">Approved</option>
                      <option value="REJECTED">Rejected</option>
                    </select>
                  ) : (
                    <span
                      onClick={(e) => setTransaction(item._id)}
                      className={`badge text-bg-${
                        item.status === "PENDING"
                          ? "warning"
                          : item.status === "APPROVED"
                          ? "success"
                          : "danger"
                      } p-2`}
                    >
                      {tocapitalCase(item.status)}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="page-link"
        >
          <span aria-hidden="true">&laquo;</span>
        </button>
        <span>
          Page {totalPages > 0 ? page : 0} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="page-link"
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </div>
    </>
  );
};
const Transactions = () => {
  const [type, SetType] = useState("DEPOSIT");
  const [status, SetStatus] = useState("PENDING");
  const [page, setPage] = useState(1);
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  return (
    <Main>
      <div className="d-sm-flex mt-4 align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Transactions</h1>
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
              <h6 className="m-0 font-weight-bold text-theme">Transactions</h6>
              <div className="dropdown">
                <button className="dropdown-button">{type}</button>
                <div className="dropdown-content">
                  <Link onClick={(e) => SetType("WITHDRAWAL")}>WITHDRAWAL</Link>
                  <Link onClick={(e) => SetType("DEPOSIT")}>DEPOSIT</Link>
                  <Link onClick={(e) => SetType("PROFIT")}>PROFIT</Link>
                  <Link onClick={(e) => SetType("REFERRAL_CREDIT")}>
                    REFERRAL_CREDIT
                  </Link>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropdown-button">{status}</button>
                <div className="dropdown-content">
                  <Link onClick={(e) => SetStatus("PENDING")}>Pending</Link>
                  <Link onClick={(e) => SetStatus("APPROVED")}>Approved</Link>
                  <Link onClick={(e) => SetStatus("REJECTED")}>Rejected</Link>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  type={type}
                  status={status}
                  page={page}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Transactions;

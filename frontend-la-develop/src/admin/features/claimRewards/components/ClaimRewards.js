import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { toastError, toastSuccess } from "../../../../Common/toast/toast";
import { dateFormate, tocapitalCase } from "../../../../Common/Common";
import { Link } from "react-router-dom";
import Main from "../../../components/Main/Main";
import {
  claimRewardUpdateAsync,
  claimRewardsAsync,
  clearError,
  clearMessage,
  selectData,
  selectError,
  selectMessage,
  selectTotalPages,
} from "../claimRewardsSlice";
const Modal = ({ handleTransaction, transaction, show }) => {
  const dispatch = useDispatch();
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");

  const updateStatus = (transaction) => {
    const data = {
      status: transaction?.status,
      reason,
      amount,
      rewardId: transaction?.item?.reward?._id,
    };
    dispatch(claimRewardUpdateAsync(data));
    handleTransaction({});
  };
  return (
    <div
      class={`modal fade ${show && "show d-block"}`}
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
              Are you sure do you want to{" "}
              {transaction?.status === "REJECTED" && "Reject"}{" "}
              {transaction?.status === "APPROVED" && "approve"} this reward?
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
            {transaction?.status === "REJECTED" ? (
              <textarea
                name="reason"
                id="reason"
                cols="20"
                rows="3"
                placeholder="Enter reason"
                required
                className="form-control"
                onChange={(e) => setReason(e.target.value)}
              ></textarea>
            ) : (
              <>
                <input
                  type="number"
                  name="amount"
                  className="form-control"
                  required
                  min={transaction?.reward?.rewardFrom}
                  max={transaction?.reward?.rewardTo}
                  placeholder="Enter amount"
                  id="amount"
                  onChange={(e) => setAmount(e.target.value)}
                />
                <p>
                  The amount should be between the range:{" "}
                  {transaction?.item?.rank?.rewardFrom} -{" "}
                  {transaction?.item?.rank?.rewardTo}
                </p>
              </>
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
              disabled={
                (transaction?.status === "REJECTED" && reason === "") ||
                (transaction?.status === "APPROVED" && amount === "") ||
                (transaction?.status !== "REJECTED" &&
                  (amount < transaction?.item?.rank?.rewardFrom ||
                    amount > transaction?.item?.rank?.rewardTo))
              }
              onClick={() => updateStatus(transaction)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Table = ({ status }) => {
  const [page, setPage] = useState(1);
  const [transaction, setTransaction] = useState({});
  const dispatch = useDispatch();
  const items = useSelector(selectData);
  const totalPages = useSelector(selectTotalPages);
  const message = useSelector(selectMessage);
  const error = useSelector(selectError);
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
    }, 3000);

    return () => clearTimeout(timeout);
  }, [message, error, dispatch]);
  useEffect(() => {
    dispatch(claimRewardsAsync({ page, status }));
  }, [transaction, dispatch, page, status]);
  const handleTransaction = (data) => {
    setTransaction(data);
  };
  return (
    <>
      {
        <Modal
          handleTransaction={handleTransaction}
          transaction={transaction}
          show={transaction && transaction?.status !== undefined}
        />
      }
      <div className="table-responsive">
        <table
          className="table table-bordered all-user"
          width="100%"
          cellSpacing={0}
        >
          <thead>
            <tr>
              <th>User</th>
              <th>Claimed Reward</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item?.reward?.id}>
                <td>{item?.user?.username}</td>
                <td>{item?.rank?.title}</td>
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
                  <span>{item?.reward?.amount}</span>
                </td>
                <td>
                  {transaction?.item?.reward?._id === item?.reward?._id &&
                  item?.reward?.status === "PENDING" ? (
                    <select
                      name="status"
                      id="status"
                      value={item?.reward?.status}
                      onChange={(e) =>
                        handleTransaction({
                          item: item,
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
                      onClick={(e) => setTransaction({ item })}
                      className={`badge text-bg-${
                        item?.reward?.status === "PENDING"
                          ? "warning"
                          : item?.reward?.status === "APPROVED"
                          ? "success"
                          : "danger"
                      } p-2`}
                    >
                      {tocapitalCase(item?.reward?.status)}
                    </span>
                  )}
                </td>
                <td>{dateFormate(item?.reward?.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className="page-link"
        >
          <span aria-hidden="true">&laquo;</span>
        </button>
        <span>
          Page {totalPages > 0 ? page : 0} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === totalPages}
          className="page-link"
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </div>
    </>
  );
};
const ClaimRewards = () => {
  const [status, SetStatus] = useState("PENDING");
  return (
    <Main>
      <div className="d-sm-flex mt-4 align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Claimed Rewards</h1>
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
                Claimed Rewards
              </h6>
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
                <Table status={status} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ClaimRewards;

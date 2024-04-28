import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./Users.css";
import {
  clearError,
  clearMessage,
  selectError,
  selectMessage,
  selectTotalPages,
  selectUsers,
  userUpdateAsync,
  usersAsync,
} from "../usersSlice.js";
import { toastError, toastSuccess } from "../../../../Common/toast/toast.js";
import Main from "../../../components/Main/Main.js";
const Modal = ({ handleUser, user }) => {
  const dispatch = useDispatch();
  const [reason, setReason] = useState("");
  const handleStatus = (user) => {
    const data = {
      isActive: !user.isActive,
      reason,
      id: user.id,
    };
    dispatch(userUpdateAsync(data));
    handleUser("");
  };
  return (
    <div
      className="modal fade"
      id="showPopUp"
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
              Are you yure do you want to {user.firstName} {user.lastName} to
              {user.isActive ? "deactivate" : "activate"}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {user.isActive && (
              <textarea
                name="reason"
                id="reason"
                cols="30"
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
              onClick={() => handleUser("")}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              disabled={user.isActive && reason === ""}
              onClick={() => handleStatus(user)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Table = ({ type }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const totalPages = useSelector(selectTotalPages);
  const [selectedUser, setSelectedUser] = useState("");
  const message = useSelector(selectMessage);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(usersAsync({ type, page }));
  }, [selectedUser, dispatch, type, page]);
  const handleSelectedUser = (user) => {
    setSelectedUser(user);
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
    }, 3000);

    return () => clearTimeout(timeout);
  }, [message, error, dispatch]);

  return (
    <>
      <Modal handleUser={handleSelectedUser} user={selectedUser} />
      <div className="table-responsive">
        <table
          className="table table-bordered all-user"
          width="100%"
          cellSpacing={0}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>User</th>
              <th>Email</th>
              <th>Balance</th>
              <th>Profit</th>
              <th>KYC</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.depositBalance}USD</td>
                <td>{user.profitBalance}USD</td>
                <td>
                  <span
                    className={`badge ${
                      user.kyc && user.kyc.status
                        ? "text-bg-success"
                        : "text-bg-warning"
                    } p-2`}
                  >
                    {user.kyc && user.kyc.status ? "Verified" : "Not verified"}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge ${
                      user.isActive ? "text-bg-success" : "text-bg-danger"
                    } p-2`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </td>

                <td>
                  {/* <span
                    className="badge text-bg-primary p-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Edit"
                  >
                    <i className="fas fa-edit" />
                  </span> */}
                  <span
                    className={`badge ${
                      user.isActive ? "text-bg-danger" : "text-bg-success"
                    } p-2`}
                    data-bs-placement="top"
                    data-bs-title="Suspend"
                    data-bs-toggle="modal"
                    data-bs-target="#showPopUp"
                    onClick={(e) => setSelectedUser(user)}
                  >
                    {user.isActive ? (
                      <i className="fas fa-ban" />
                    ) : (
                      <i className="fa-solid fa-check" />
                    )}
                  </span>
                  {/* <span
                    className="badge text-bg-danger p-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Delete"
                  >
                    <i className="fas fa-trash" />
                  </span> */}
                </td>
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
const Users = () => {
  const [type, SetType] = useState("All");
  return (
    <Main>
      <div className="d-sm-flex mt-4 align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        {/* <Link
                  to="/generate/users"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50" /> Generate
                  Report
                </Link> */}
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4 table-card">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-theme">{type} Users</h6>
              <div className="dropdown">
                <button className="dropdown-button">{type} Users</button>
                <div className="dropdown-content">
                  <Link onClick={(e) => SetType("All")}>All Users</Link>
                  <Link onClick={(e) => SetType("Active")}>Active Users</Link>
                  <Link onClick={(e) => SetType("inActive")}>
                    InActive Users
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-body">
              <Table type={type} />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Users;

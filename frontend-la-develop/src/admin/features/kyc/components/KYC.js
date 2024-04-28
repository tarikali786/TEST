import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectError,
  selectMessage,
  selectTotalPages,
  selectUsers,
  usersAsync,
} from "../kycSlice";
import { toastError, toastSuccess } from "../../../../Common/toast/toast";
import { dateFormate, tocapitalCase } from "../../../../Common/Common";
import Main from "../../../components/Main/Main";

const Table = ({ type, page, onPageChange }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const totalPages = useSelector(selectTotalPages);
  const message = useSelector(selectMessage);
  const error = useSelector(selectError);
  if (error) {
    toastError(error);
  }
  if (message) {
    toastSuccess(message);
  }
  useEffect(() => {
    dispatch(usersAsync({ page, kycStatus: type, kyc: true }));
  }, [dispatch, type, page]);

  return (
    <>
      <div className="table-responsive">
        <table
          className="table table-bordered all-user"
          width="100%"
          cellSpacing={0}
        >
          <thead>
            <tr>
              <th>User</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>
                  <span
                    className={`badge ${
                      user.kyc && user.kyc.status === "APPROVED"
                        ? "text-bg-success"
                        : user.kyc && user.kyc.status === "PENDING"
                        ? "text-bg-warning"
                        : "text-bg-danger"
                    } p-2`}
                  >
                    {user?.kyc?.status !== undefined &&
                      tocapitalCase(user?.kyc?.status)}
                  </span>
                </td>
                <td>{dateFormate(user.createdAt)}</td>
                <td>{dateFormate(user.updatedAt)}</td>
                <td>
                  <span
                    className="badge text-bg-primary p-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="View"
                  >
                    <i className="fas fa-eye" />
                  </span>
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
const KYC = () => {
  const [type, SetType] = useState("PENDING");
  const [page, setPage] = useState(1);
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  return (
    <Main>
      <div className="d-sm-flex mt-4 align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">KYC</h1>
        <Link
          to="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50" /> Generate Report
        </Link>
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4 table-card">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-theme">
                {type} KYC Logs
              </h6>
              <div className="dropdown">
                <button className="dropdown-button">{type} kyc</button>
                <div className="dropdown-content">
                  <Link onClick={(e) => SetType("PENDING")}>Pending KYC</Link>
                  <Link onClick={(e) => SetType("APPROVED")}>Approved KYC</Link>
                  <Link onClick={(e) => SetType("REJECTED")}>Rejected KYC</Link>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  type={type}
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

export default KYC;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { toastError, toastSuccess } from "../../../../Common/toast/toast";
import { Link } from "react-router-dom";
import {
  clearError,
  clearMessage,
  clearSuccess,
  //clearMessage,
  deleteAnouncementAsync,
  getAsync,
  selectData,
  selectError,
  selectMessage,
  selectSuccess,
  selectTotalPages,
} from "../announcementsSlice";
import Main from "../../../components/Main/Main";
const Modal = ({ handleAnouncement, anouncement }) => {
  const dispatch = useDispatch();
  const handleDelete = (anouncement) => {
    const data = {
      id: anouncement._id,
    };
    dispatch(deleteAnouncementAsync(data));
    handleAnouncement({});
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
              Are you sure do you want to delete?
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body"></div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => handleAnouncement({})}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => handleDelete(anouncement)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Table = () => {
  const [anouncement, setAnouncement] = useState({});
  const [page, setPage] = useState(1);
  const data = useSelector(selectData);
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const message = useSelector(selectMessage);
  const error = useSelector(selectError);
  const success = useSelector(selectSuccess);
  const handleAnouncement = (data) => {
    setAnouncement(data);
  };
  useEffect(() => {
    dispatch(getAsync({ page }));
  }, [dispatch, page]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (success) {
        dispatch(clearSuccess());
      }
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
  }, [message, error, dispatch, success]);
  return (
    <>
      {
        <Modal
          handleAnouncement={handleAnouncement}
          anouncement={anouncement}
          show={anouncement && anouncement?.status !== undefined}
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
              <th>title</th>
              <th>description</th>
              <th>type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item?.title}</td>
                  <td>{item?.description}</td>
                  <td>{item?.type}</td>
                  <td>
                    <span
                      className={`badge text-bg-danger p-2`}
                      data-bs-placement="top"
                      data-bs-title="Suspend"
                      data-bs-toggle="modal"
                      data-bs-target="#showPopUp"
                      onClick={(e) => handleAnouncement(item)}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </span>
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
const Announcements = () => {
  return (
    <Main>
      <div className="d-sm-flex mt-4 align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Announcements</h1>
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
              <h6 className="m-0 font-weight-bold text-theme">Announcements</h6>
              <Link to="/announcements/create" className="btn btn-primary">
                Create
              </Link>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Announcements;

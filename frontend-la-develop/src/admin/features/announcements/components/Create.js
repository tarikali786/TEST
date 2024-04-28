import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { tocapitalCase } from "../../../../Common/Common";
import Main from "../../../components/Main/Main";
import { createAsync, selectSuccess } from "../announcementsSlice";
import { Navigate } from "react-router-dom";

const Create = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const success = useSelector(selectSuccess);
  if (success) return <Navigate to="/announcements" replace={true} />;

  return (
    <>
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
                <h6 className="m-0 font-weight-bold text-theme">
                  Create Announcements
                </h6>
              </div>
              <div className="card-body">
                <form
                  onSubmit={handleSubmit(async (data) => {
                    dispatch(createAsync(data));
                  })}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                          Title
                        </label>
                        <input
                          type="text"
                          {...register("title", {
                            required: "Title is required",
                          })}
                          className="form-control"
                          id="title"
                          placeholder="Enter title"
                        />
                        {errors.title && (
                          <p className="text-danger"> {errors.title.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="type" className="form-label">
                          Type
                        </label>
                        <select
                          {...register("type", {
                            required: "Type is required",
                          })}
                          className="form-select"
                          aria-label="Default select type"
                        >
                          {[
                            "URGENT",
                            "WARNING",
                            "GENERAL",
                            "IMPORTANT",
                            "UPDATES",
                          ].map((value) => (
                            <option value={value} key={value}>
                              {tocapitalCase(value)}
                            </option>
                          ))}
                        </select>
                        {errors.type && (
                          <p className="text-danger"> {errors.type.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      {...register("description", {
                        required: "Description is required",
                      })}
                      className="form-control"
                      id="description"
                      rows={3}
                      defaultValue={""}
                    />
                    {errors.description && (
                      <p className="text-danger">
                        {" "}
                        {errors.description.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-3 d-flex justify-content-end">
                    <button className="btn btn-primary" type="sumbit">
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Create;

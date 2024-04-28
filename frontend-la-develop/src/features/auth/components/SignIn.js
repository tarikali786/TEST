import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync, selectAuthError, selectAuthInfo } from "../authSlice";
import { initializeRecaptcha } from "../../../Common/Common";
import "./SignIn.css";
import { Navbar } from "../../../components/Guest/Navbar/Navbar";
import { Navigate } from "react-router-dom";
import { toastError } from "../../../Common/toast/toast";

const SignIn = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthInfo);
  const error = useSelector(selectAuthError);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const currentFieldError =
    (errors.username && errors.password.message) ||
    (errors.password && errors.password.message);
  if (currentFieldError || error) {
    toastError(currentFieldError || error);
  }
  return (
    <>
      {user && <Navigate to="/dashboard" replace={true} />}
      <Navbar />
      <div className="container-auth mesh">
        <div className="absolute">
          <div className="absolute inset-0 justify-center">
            <div className="bg-shape1 bg-teal opacity-50 bg-blur" />
            <div className="bg-shape2 bg-primary opacity-50 bg-blur" />
            <div className="bg-shape1 bg-purple opacity-50 bg-blur" />
          </div>
        </div>
        <div className="page-wrapper p-t-50 p-b-100 font-poppins">
          <div className="wrapper wrapper--w680">
            <div className="card card-4">
              <div className="card-body">
                <h2 className="title">Sign In</h2>
                <form
                  onSubmit={handleSubmit(async (data) => {
                    const recaptchaToken = await initializeRecaptcha();
                    dispatch(
                      loginAsync({
                        email: data.username,
                        password: data.password,
                        recaptchaToken,
                      })
                    );
                  })}
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          {...register("username", {
                            required: "Username OR Email is required",
                          })}
                          placeholder=""
                        />
                        <label htmlFor="username">Username</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          {...register("password", {
                            required: "password is required",
                          })}
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        defaultValue="Sign In"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

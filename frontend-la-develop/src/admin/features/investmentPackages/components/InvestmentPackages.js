import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { selectprogramData } from "../../../../features/program/programSlice";
import { useForm } from "react-hook-form";
import {
  clearError,
  clearMessage,
  getProftConfigAsync,
  selectError,
  selectMessage,
  selectProgramConfig,
  updateProftConfigAsync,
} from "../investmentPackagesSlice";
import { toastError, toastSuccess } from "../../../../Common/toast/toast";

const InvestmentPackages = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const programConfig = useSelector(selectProgramConfig);
  const program = useSelector(selectprogramData);
  const message = useSelector(selectMessage);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(getProftConfigAsync());
  }, [dispatch]);
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
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="container-fluid" style={{ overflowX: "scroll" }}>
            <div className="d-sm-flex mt-4 align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Investment Packages</h1>
            </div>
            <div className="table-responsive">
              <form
                onSubmit={handleSubmit(async (data) => {
                  dispatch(updateProftConfigAsync({ profit: data }));
                })}
              >
                <table
                  className="table table-bordered all-user"
                  width="100%"
                  cellSpacing={0}
                >
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["A", "B", "C", "D", "E"].map((item, index) => (
                      <tr key={item}>
                        <td>Level {item}</td>
                        <td>
                          <select
                            {...register(`${item}`, {
                              required: `${item} is required`,
                            })}
                            className="form-control"
                            defaultValue={programConfig[item]}
                          >
                            {Array.from(
                              {
                                length:
                                  program[index].data[0].profitPercentTo -
                                  program[index].data[0].profitPercentFrom +
                                  1,
                              },
                              (_, i) => (
                                <option
                                  key={i}
                                  value={
                                    program[index].data[0].profitPercentFrom + i
                                  }
                                >
                                  {program[index].data[0].profitPercentFrom + i}
                                </option>
                              )
                            )}
                          </select>
                          <p className="text-danger">{errors[item]}</p>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={2}>
                        <div className="d-flex justify-content-end">
                          <button type="submit" className="btn btn-primary">
                            Update
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default InvestmentPackages;

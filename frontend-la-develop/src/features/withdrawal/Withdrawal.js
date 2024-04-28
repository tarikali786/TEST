import React from "react";
import "./Withdrawal.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Navbar } from "../../components/Auth/Navbar/Navbar";
import SideBar from "../../Common/components/SideBar/SideBar";
import dollorSign from "../../images/svg/input_icons/dollor_sign.svg";
import contact from "../../images/svg/input_icons/contact.svg";
import withdrawalIcon from "../../images/svg/withdrawal_icon.svg";
import OTP from "../../images/svg/otp.svg";
import {
  selectWithdrawalError,
  selectWithdrawalMessage,
  withdrawalAsync,
} from "./withdrawalSlice";
import { selectAuthInfo } from "../auth/authSlice";
import { toastError, toastSuccess } from "../../Common/toast/toast";
const Withdrawal = () => {
  const withdrawalError = useSelector(selectWithdrawalError);
  const withdrawalMessage = useSelector(selectWithdrawalMessage);
  const user = useSelector(selectAuthInfo);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  if (withdrawalError) {
    toastError(withdrawalError);
  }
  if (withdrawalMessage) {
    toastSuccess(withdrawalMessage);
  }
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
              <form
                onSubmit={handleSubmit((data) => {
                  dispatch(withdrawalAsync(data));
                })}
              >
                <h1 className="page-title">Withdrawal</h1>
                <div className="deposit-card">
                  <div className="mb-3">
                    <label>Account Balance</label>
                    <div className="input-field">
                      <div className="icon">
                        <img src={dollorSign} alt="currency" />
                      </div>
                      <input
                        type="text"
                        disabled
                        value={`${user.depositBalance}$`}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label>Withdrawal Address</label>
                    <div className="input-field">
                      <div className="icon">
                        <img src={withdrawalIcon} alt="contact" />
                      </div>
                      <input
                        type="text"
                        id="withdrawalAddress"
                        {...register("withdrawalAddress", {
                          required: "Please enter reciver Transaction ID",
                        })}
                        placeholder="Enter the USDT address."
                      />
                    </div>
                    {errors.withdrawalAddress &&
                      toastError(errors.withdrawalAddress.message)}
                  </div>
                  <div className="mb-3">
                    <label>Amount</label>
                    <div className="input-field">
                      <div className="icon">
                        <img src={contact} alt="currency" />
                      </div>
                      <input
                        type="number"
                        id="amount"
                        {...register("amount", {
                          required: "Please enter Amount for withdraw",
                          min: {
                            value: 10,
                            message: "You canoot withdraw lass than 10$",
                          },
                          max: {
                            value: user.depositBalance,
                            message: "your balance is insufficient",
                          },
                        })}
                        placeholder="Enter the amount to withdraw."
                      />
                    </div>
                    {errors.amount && toastError(errors.amount.message)}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="opt">Enter OTP</label>
                    <div className="input-field">
                      <div className="icon">
                        <img src={OTP} alt="currency" />
                      </div>
                      <input
                        type="number"
                        id="otp"
                        placeholder="Enter the OTP."
                        {...register("otp", {
                          required: "Please enter the OTP",
                        })}
                      />
                    </div>
                    {errors.otp && toastError(errors.otp.message)}
                  </div>
                </div>
                <div className="deposit-card-button">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdrawal;

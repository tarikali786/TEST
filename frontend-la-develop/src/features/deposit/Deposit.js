import React from "react";
import "./Deposit.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Navbar } from "../../components/Auth/Navbar/Navbar";
import SideBar from "../../Common/components/SideBar/SideBar";
import dollorSign from "../../images/svg/input_icons/dollor_sign.svg";
import contact from "../../images/svg/input_icons/contact.svg";
import { selectprogramData } from "../program/programSlice";
import {
  depositAsync,
  selectDepositError,
  selectDepositMessage,
} from "./depositSlice";
const Deposit = () => {
  const programData = useSelector(selectprogramData);
  const depositError = useSelector(selectDepositError);
  const depositMessage = useSelector(selectDepositMessage);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const currentFieldError =
    (errors.amount && errors.amount) ||
    (errors.senderTransactionId && errors.senderTransactionId.message);
  if (currentFieldError || depositError) {
    toast.error(currentFieldError || depositError, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  if (depositMessage) {
    toast.success(depositMessage, {
      position: toast.POSITION.TOP_RIGHT,
    });
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
                  dispatch(depositAsync(data));
                })}
              >
                <h1 className="page-title">Deposit</h1>
                <div className="deposit-card">
                  <label>Deposit/Investment Amount</label>
                  <label htmlFor="amount" className="input-field">
                    <div className="icon">
                      <img src={dollorSign} alt="currency" />
                    </div>
                    <select
                      name="amount"
                      id="amount"
                      {...register("amount", {
                        required: "Please select Deposit/Investment Amount",
                      })}
                    >
                      <option value="$100" disabled>
                        $100
                      </option>
                      {programData.map((program) =>
                        program.data.map((item) => {
                          if ("investment" in item) {
                            const { investment } = item;
                            return (
                              <option key={investment} value={investment}>
                                ${investment}
                              </option>
                            );
                          } else {
                            return null;
                          }
                        })
                      )}
                    </select>
                  </label>
                  <label>Receiver’s USDT Transaction ID:</label>
                  <label
                    htmlFor="receiverUsdtTransactionId"
                    className="input-field"
                  >
                    <div className="icon">
                      <img src={contact} alt="contact" />
                    </div>
                    <input
                      type="text"
                      id="receiverUsdtTransactionId"
                      {...register("receiverUsdtTransactionId", {
                        required:
                          "Please enter correct Sender’s Transaction ID",
                      })}
                      placeholder="Enter the user ID to recharge the account."
                    />
                  </label>
                  <label>Sender’s Transaction ID</label>
                  <label
                    htmlFor="senderTransactionId"
                    className="input-field"
                    {...register("senderTransactionId", {
                      required: "Please enter correct Sender’s Transaction ID",
                    })}
                  >
                    <div className="icon">
                      <img src={contact} alt="currency" />
                    </div>
                    <input
                      type="text"
                      id="senderTransactionId"
                      {...register("senderTransactionId", {
                        required:
                          "Please enter correct Sender’s Transaction ID",
                      })}
                      placeholder="Enter the user ID to recharge the account."
                    />
                  </label>
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

export default Deposit;

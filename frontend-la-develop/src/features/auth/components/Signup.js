import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "./Signup.css";
import { checkDataExist } from "../authAPI";
import { initializeRecaptcha } from "../../../Common/Common";
import { createUserAsync, selectAuthError, selectAuthInfo } from "../authSlice";
import { Navbar } from "../../../components/Guest/Navbar/Navbar";
import { Navigate, useLocation } from "react-router-dom";
import { toastError } from "../../../Common/toast/toast";

const TermsAndConditions = () => (
  <div
    className="modal fade"
    id="termsAndContions"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel text-dark">
            Terms & Conditions:
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <p>
            1. Acknowledgment of Terms: Users accessing and engaging with the
            services on QUICKPAYUS.com explicitly recognize and consent to the
            terms and conditions outlined herein. This mutual understanding
            establishes a legally binding agreement between the user and
            QUICKPAYUS, ensuring compliance and cooperation in accordance with the
            stipulated terms for the use of our services.
          </p>
          <p>
            2. Eligibility Affirmation: Users solemnly affirm that they must be
            of legal age in their jurisdiction, thereby attesting to their
            requisite maturity and understanding of legal nuances. This
            acknowledgment extends to possessing the legal capacity, knowledge,
            and cognitive prowess necessary to deliberately enter into
            meticulously crafted contractual agreements. The active and informed
            participation in QUICKPAYUS investment programs is expressly contingent
            upon the scrupulous fulfillment of this foundational eligibility
            criterion, highlighting the profound importance of aligning with the
            stipulated legal prerequisites to navigate the financial landscape
            responsibly.
          </p>
          <p>
            3. Investment Risks: In the pursuit of safeguarding user interests,
            QUICKPAYUS diligently endeavors to mitigate risks associated with
            investments. Notwithstanding these efforts, users are expressly
            called upon to recognize and accept the inherent risks accompanying
            all investment endeavors. It is imperative to emphasize that past
            performance, while informative, should not be construed as an
            unequivocal guarantee of future results. Users are earnestly
            encouraged to exercise prudence, due diligence, and a thoughtful
            approach when navigating the dynamic landscape of investment
            opportunities presented by QUICKPAYUS.
          </p>
          <p>
            4. Cryptocurrency Transactions: QUICKPAYUS exclusively accepts
            transactions in cryptocurrency, specifically USDT (TRC20) on the
            TRON network. Users are responsible for ensuring the accuracy of
            their transaction details, and any discrepancies are at their own
            risk.
          </p>
          <p>
            5. Withdrawal Timing: Users are advised that withdrawal requests are
            processed exclusively on Saturdays and Sundays, and the timing of
            withdrawals is subject to the processing schedules of relevant
            financial institutions and cryptocurrency networks.
          </p>
          <p>
            6. Transaction Fees: A 5% transaction fee applies to all deposits
            and withdrawals made on the QUICKPAYUS platform. This fee is
            automatically deducted from the total transaction amount, and users
            are responsible for any additional fees imposed by third-party
            payment processors.
          </p>
          <p>
            7. Minimum Withdrawal Requirement: QUICKPAYUS imposes a minimum
            withdrawal amount of $10. Any withdrawal requests below this
            threshold will not be processed, and users are encouraged to
            familiarize themselves with this requirement.
          </p>
          <p>
            8. Termination of Accounts: QUICKPAYUS reserves the right to terminate
            user accounts at its discretion, particularly in cases of any
            violation of the terms and conditions outlined herein or any
            suspicion of fraudulent or unauthorized activities.
          </p>
          <p>
            9. Communication: By using QUICKPAYUS.com, users consent to receiving
            communications, updates, and notifications from QUICKPAYUS via email or
            other designated communication channels. Users are responsible for
            ensuring the accuracy of their contact information.
          </p>
          <p>
            10. Website Availability: While QUICKPAYUS endeavors to maintain
            continuous website availability, users acknowledge that factors such
            as maintenance, technical issues, or unforeseen circumstances may
            temporarily affect accessibility. QUICKPAYUS is not liable for any
            inconvenience arising from such instances.
          </p>
          <p>
            11. Intellectual Property: All content, logos, and intellectual
            property displayed on QUICKPAYUS.com are the exclusive property of
            QUICKPAYUS. Users are prohibited from unauthorized use, reproduction,
            or distribution of any materials without explicit consent.
          </p>
          <p>
            12. Modification of property: Users are responsible for regularly
            checking the terms and conditions for updates, as QUICKPAYUS may modify
            them without notification. Continued use of the platform indicates
            acceptance of any changes.
          </p>
          <p>
            13. Privacy Policy: Users are encouraged to review the QUICKPAYUS
            privacy policy, available on the website, to understand how their
            personal information is collected, used, and protected.
          </p>
          <p>
            14. Compliance with Laws: Users agree to comply with all applicable
            laws and regulations in their jurisdiction concerning cryptocurrency
            transactions, investments, and the use of QUICKPAYUS services.
          </p>
          <p>
            15. Accuracy of Information: Users are responsible for providing
            accurate and up-to-date information during the registration process
            and transactions. QUICKPAYUS is not liable for any issues arising from
            inaccuracies in user-provided information.
          </p>
          <p>
            16. Customer Support: While QUICKPAYUS provides customer support for
            user assistance, response times may vary based on the volume of
            inquiries. Users can reach out through designated channels for
            support and guidance.
          </p>
          <p>
            17. Force Majeure: QUICKPAYUS is not liable for any failure or delay in
            performance arising from circumstances beyond its reasonable
            control, including but not limited to natural disasters, acts of
            God, or other unforeseen events.
          </p>
          <p>
            18. Entire Agreement: These terms and conditions constitute the
            entire agreement between users and QUICKPAYUS, superseding any prior
            agreements, discussions, or understandings, whether written or oral.
            Users acknowledge that they have read, understood, and agreed to
            these terms and conditions.
          </p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);
const Signup = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const [current, setCurrent] = useState(1);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const location = useLocation();
  const [referralUser, setReferralUser] = useState(null);
  const user = useSelector(selectAuthInfo);
  const {
    handleSubmit,
    register,
    getValues,
    trigger,

    formState: { errors },
  } = useForm();
  const currentFieldError =
    (errors.firstName && errors.firstName.message) ||
    (errors.lastName && errors.lastName.message) ||
    (errors.username && errors.username.message) ||
    (errors.email && errors.email.message) ||
    (errors.countryCode && errors.countryCode.message) ||
    (errors.mobileNo && errors.mobileNo.message) ||
    (errors.password && errors.password.message) ||
    (errors.confirmPassword && errors.confirmPassword.message);
  if (currentFieldError || error) {
    toastError(currentFieldError || error);
  }

  const validateUserData = async (value) => {
    const response = await checkDataExist(value);
    const { data } = response;
    const { success, message } = data;
    if (message) {
      toastError(message);
    }
    return success; // Return true if email is valid, false otherwise
  };
  const handleNext = async (e) => {
    e.preventDefault();
    try {
      const recaptchaToken = await initializeRecaptcha();
      const isValid = await trigger(); // trigger validation for the current level
      if (isValid) {
        if (current === 2 || current === 3) {
          const { email, username, countryCode, mobileNo } = getValues();
          const data = {
            email,
            username,
            countryCode,
            mobileNo,
            recaptchaToken,
          };
          const response = await validateUserData(data);
          if (response) {
            setCurrent((prevLevel) => prevLevel + 1);
          }
        } else {
          setCurrent((prevLevel) => prevLevel + 1);
        }
      }
    } catch (error) {
      toastError(new Error("Error during form submission:", error));
    }
  };
  const handlePrev = (e) => {
    e.preventDefault();
    if (current > 1) setCurrent(current - 1);
  };
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const user = queryParams.get("user");
    setReferralUser(user);
  }, [location.search]);
  useEffect(() => {
    const setToken = async () => {
      const token = await initializeRecaptcha();
      setRecaptchaToken(token);
    };

    setToken();
  }, []);
  if (recaptchaToken === null) {
    return null; // or some other UI indicating loading or disabled state
  }
  
  return (
    <>
      {user && <Navigate to="/login" replace={true} />}
      <Navbar />
      <TermsAndConditions />
      <div className="container-signup mesh">
        <div className="absolute">
          <div className="absolute inset-0 justify-center">
            <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
            <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
            <div className="bg-shape1 bg-purple opacity-50 bg-blur"></div>
          </div>
        </div>
        <div className="box23">
          <header>Sign Up</header>
          <div className="progress-line">
            <div className="step">
              <p className={`${current > 1 && "active"}`}>Name</p>
              <div className={`bullet ${current > 1 ? "active" : ""}`}>
                <span>1</span>
              </div>
              <div
                className={`check fas fa-check ${current > 1 ? "active" : ""}`}
              ></div>
            </div>
            <div className="step">
              <p className={`${current > 2 && "active"}`}>Email</p>
              <div className={`bullet ${current > 2 ? "active" : ""}`}>
                <span>2</span>
              </div>
              <div
                className={`check fas fa-check ${current > 2 ? "active" : ""}`}
              ></div>
            </div>
            <div className="step">
              <p className={`${current > 3 && "active"}`}>Contact</p>
              <div className={`bullet ${current > 3 ? "active" : ""}`}>
                <span>3</span>
              </div>
              <div
                className={`check fas fa-check ${current > 3 ? "active" : ""}`}
              ></div>
            </div>
            <div className="step">
              <p className={`${current > 4 && "active"}`}>Password</p>
              <div className={`bullet ${current > 4 ? "active" : ""}`}>
                <span>4</span>
              </div>
              <div
                className={`check fas fa-check ${current > 4 ? "active" : ""}`}
              ></div>
            </div>
            <div className="step">
              <p className={`${current > 5 && "active"}`}>Referral</p>
              <div className={`bullet ${current > 5 ? "active" : ""}`}>
                <span>5</span>
              </div>
              <div
                className={`check fas fa-check ${current > 5 ? "active" : ""}`}
              ></div>
            </div>
          </div>
          <div className="form-outer">
            <form
              onSubmit={handleSubmit(async (data) => {
                const recaptchaToken = await initializeRecaptcha();
                dispatch(createUserAsync({ ...data, recaptchaToken }));              
              })}
            >
              {current === 1 && (
                <div
                  className="page slide-page"
                  style={{ marginLeft: -(current - 1) * 25 + "%" }}
                >
                  <div className="field">
                    <div className="label">First Name</div>
                    <input
                      type="text"
                      id="firstName"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                    />
                  </div>
                  <div className="field">
                    <div className="label">Last Name</div>
                    <input
                      type="text"
                      id="lastName"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                    />
                  </div>
                  <div className="field">
                    <button
                      type="button"
                      className="firstNext next"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {current === 2 && (
                <div className="page">
                  <div className="field">
                    <div className="label">Email Address</div>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "email is required",
                        pattern: {
                          value: /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi,
                          message: "Email is not valid",
                        },
                      })}
                    />
                  </div>
                  <div className="field">
                    <div className="label">Username</div>
                    <input
                      type="text"
                      id="username"
                      {...register("username", {
                        required: "Username is required",
                      })}
                    />
                  </div>
                  <div className="field btns">
                    <button
                      type="button"
                      className="prev-1 prev"
                      onClick={handlePrev}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="next-1 next"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {current === 3 && (
                <div className="page">
                  <div className="field">
                    <div className="label">Country Code</div>
                    <input
                      type="number"
                      id="countryCode"
                      {...register("countryCode", {
                        required: "Country Code is required",
                      })}
                    />
                  </div>
                  <div className="field">
                    <div className="label">Phone Number</div>
                    <input
                      type="number"
                      id="mobileNo"
                      {...register("mobileNo", {
                        required: "Phone Number is required",
                      })}
                    />
                  </div>
                  <div className="field btns">
                    <button
                      type="button"
                      className="prev-2 prev"
                      onClick={handlePrev}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="next-2 next"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {current === 4 && (
                <div className="page">
                  <div className="field">
                    <div className="label">Password</div>
                    <input
                      type="password"
                      id="password"
                      {...register("password", {
                        required: "password is required",
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                          message: `- at least 8 characters\n
              - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
              - Can contain special characters`,
                        },
                      })}
                    />
                  </div>
                  <div className="field">
                    <div className="label">Confirm Password</div>
                    <input
                      type="password"
                      id="confirmPassword"
                      {...register("confirmPassword", {
                        validate: (value, formValues) =>
                          value === formValues.password ||
                          "password not matching",
                      })}
                    />
                  </div>
                  <div className="field btns">
                    <button
                      type="button"
                      className="prev-3 prev"
                      onClick={handlePrev}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="next-3 next"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {current === 5 && (
                <div className="page">
                  <div className="field">
                    <div className="label">Referral Code (Optional)</div>
                    {referralUser ? (
            <input type="text" {...register("referralCode")} value={referralUser} readOnly />
          ) : (
            <input type="text" {...register("referralCode")} placeholder="Referral Code (Optional)" />
          )}
                  </div>
                  <input
                    type="checkbox"
                    {...register("termsAndConditions", {
                      required: "termsAndConditions is required",
                    })}
                    id="termsAndConditions"
                    style={{ width: "14px" }}
                    required
                  />
                  <label
                    htmlFor="termsAndConditions"
                    className="text-dark d-inline"
                  >
                    I agree with Privacy & Policy and
                    <span
                      data-bs-toggle="modal"
                      data-bs-target="#termsAndContions"
                      className="text-primary cursor-pointer"
                      style={{ fontSize: "inherit", cursor: "pointer" }}
                    >
                      terms & conditions
                    </span>
                  </label>
                  <div className="field btns">
                    <button
                      type="button"
                      className="prev-4 prev"
                      onClick={handlePrev}
                    >
                      Previous
                    </button>
                    <button type="submit" className="submit">
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;

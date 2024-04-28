import { checkAuthAsync, selectAuthInfo } from "../auth/authSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "./Profile.css";
import { Navbar } from "../../components/Auth/Navbar/Navbar";
import SideBar from "../../Common/components/SideBar/SideBar";
import profile from "../../images/Profile/profile.png";
import edit from "../../images/svg/edit.svg";
import location from "../../images/svg/location.svg";
import { updateProfile } from "./profileAPI";
import { toastError, toastSuccess } from "../../Common/toast/toast";
const Profile = () => {
  const dispatch = useDispatch();
  const nationalities = [
    "Afghan",
    "Albanian",
    "Algerian",
    "American",
    "Andorran",
    "Angolan",
    "Antiguans",
    "Argentinean",
    "Armenian",
    "Australian",
    "Austrian",
    "Azerbaijani",
    "Bahamian",
    "Bahraini",
    "Bangladeshi",
    "Barbadian",
    "Barbudans",
    "Batswana",
    "Belarusian",
    "Belgian",
    "Belizean",
    "Beninese",
    "Bhutanese",
    "Bolivian",
    "Bosnian",
    "Brazilian",
    "British",
    "Bruneian",
    "Bulgarian",
    "Burkinabe",
    "Burmese",
    "Burundian",
    "Cambodian",
    "Cameroonian",
    "Canadian",
    "Cape Verdean",
    "Central African",
    "Chadian",
    "Chilean",
    "Chinese",
    "Colombian",
    "Comoran",
    "Congolese",
    "Costa Rican",
    "Croatian",
    "Cuban",
    "Cypriot",
    "Czech",
    "Danish",
    "Djibouti",
    "Dominican",
    "Dutch",
    "East Timorese",
    "Ecuadorean",
    "Egyptian",
    "Emirian",
    "Equatorial Guinean",
    "Eritrean",
    "Estonian",
    "Ethiopian",
    "Fijian",
    "Filipino",
    "Finnish",
    "French",
    "Gabonese",
    "Gambian",
    "Georgian",
    "German",
    "Ghanaian",
    "Greek",
    "Grenadian",
    "Guatemalan",
    "Guinea-Bissauan",
    "Guinean",
    "Guyanese",
    "Haitian",
    "Herzegovinian",
    "Honduran",
    "Hungarian",
    "Icelander",
    "Indian",
    "Indonesian",
    "Iranian",
    "Iraqi",
    "Irish",
    "Israeli",
    "Italian",
    "Ivorian",
    "Jamaican",
    "Japanese",
    "Jordanian",
    "Kazakhstani",
    "Kenyan",
    "Kittian and Nevisian",
    "Kuwaiti",
    "Kyrgyz",
    "Laotian",
    "Latvian",
    "Lebanese",
    "Liberian",
    "Libyan",
    "Liechtensteiner",
    "Lithuanian",
    "Luxembourger",
    "Macedonian",
    "Malagasy",
    "Malawian",
    "Malaysian",
    "Maldivan",
    "Malian",
    "Maltese",
    "Marshallese",
    "Mauritanian",
    "Mauritian",
    "Mexican",
    "Micronesian",
    "Moldovan",
    "Monacan",
    "Mongolian",
    "Moroccan",
    "Mosotho",
    "Motswana",
    "Mozambican",
    "Namibian",
    "Nauruan",
    "Nepalese",
    "New Zealander",
    "Ni-Vanuatu",
    "Nicaraguan",
    "Nigerien",
    "North Korean",
    "Northern Irish",
    "Norwegian",
    "Omani",
    "Pakistani",
    "Palauan",
    "Panamanian",
    "Papua New Guinean",
    "Paraguayan",
    "Peruvian",
    "Polish",
    "Portuguese",
    "Qatari",
    "Romanian",
    "Russian",
    "Rwandan",
    "Saint Lucian",
    "Salvadoran",
    "Samoan",
    "San Marinese",
    "Sao Tomean",
    "Saudi",
    "Scottish",
    "Senegalese",
    "Serbian",
    "Seychellois",
    "Sierra Leonean",
    "Singaporean",
    "Slovakian",
    "Slovenian",
    "Solomon Islander",
    "Somali",
    "South African",
    "South Korean",
    "Spanish",
    "Sri Lankan",
    "Sudanese",
    "Surinamer",
    "Swazi",
    "Swedish",
    "Swiss",
    "Syrian",
    "Taiwanese",
    "Tajik",
    "Tanzanian",
    "Thai",
    "Togolese",
    "Tongan",
    "Trinidadian or Tobagonian",
    "Tunisian",
    "Turkish",
    "Tuvaluan",
    "Ugandan",
    "Ukrainian",
    "Uruguayan",
    "Uzbekistani",
    "Venezuelan",
    "Vietnamese",
    "Welsh",
    "Yemenite",
    "Zambian",
    "Zimbabwean",
  ];
  const user = useSelector(selectAuthInfo);
  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch, user]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const fieldError =
    (errors.firstName && errors.firstName.message) ||
    (errors.lastName && errors.lastName.message) ||
    (errors.username && errors.username.message) ||
    (errors.email && errors.email.message) ||
    (errors.mobileNo && errors.mobileNo.message) ||
    (errors.dateOfBirth && errors.dateOfBirth.message) ||
    (errors.gender && errors.gender.message) ||
    (errors.nationality && errors.nationality.message) ||
    (errors.occupation && errors.occupation.message) ||
    (errors.image && errors.image.message);

  if (fieldError) {
    toastError(fieldError);
  }
  return (
    <>
      <Navbar />
      <div className="row">
        <div className=" d-none d-md-block col-md-3 col-lg-2">
          <SideBar />
        </div>
        <div className="col-12 col-md-9 col-lg-10">
          <div
            className="main-content profile-page"
            style={{ overflowX: "hidden" }}
          >
            <div className="container-fluid">
              <section className="cover"></section>
              <section className="profile-box">
                <div className="row">
                  {/*   <div className="col-md-2">
                   <img src={profile} alt="profile" />
                  </div> */}
                  <div className="col-md-10">
                    <div className="row">
                      <div className="col-md-12 d-flex">
                        <h1>
                          {user.firstName} {user.lastName}
                        </h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 d-flex">
                        <label>
                          <img src={location} alt="location" />
                        </label>
                        <p>{user.nationality}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 level">
                    <h5>
                      Lvl. {(user.investmentLevel && user.investmentLevel) || 0}
                    </h5>
                  </div>
                </div>
              </section>
              <section className="profile-kyc">
                <div className="row">
                  <div className="col-md-8">
                    <h3>KYC VERIFICATION</h3>
                    <form
                      onSubmit={handleSubmit(async (data) => {
                        const allowedFileTypes = ["image/jpeg", "image/png"];
                        if (data.images) {
                          for (const file of data.images) {
                            if (!allowedFileTypes.includes(file.type)) {
                              toastError(
                                "Invalid file type. Please upload a JPG or PNG file."
                              );
                              return;
                            }
                          }
                        }
                        const response = await updateProfile(data);
                        if (response.success) {
                          toastSuccess(response.message);
                        } else {
                          toastError(response.message);
                        }
                      })}
                      encType="multipart/form-data"
                      multiple
                    >
                      <div className="input-group mb-3">
                        <label htmlFor="firstName" className="input-group-text">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          defaultValue={user.firstName}
                          {...register("firstName", {
                            required: "First Name is required",
                          })}
                          aria-label="first name"
                          placeholder="Enter First name"
                          className="form-control"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label htmlFor="lastName" className="input-group-text">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          defaultValue={user.lastName}
                          {...register("lastName", {
                            required: "First Name is required",
                          })}
                          aria-label="Last name"
                          placeholder="Enter Last name"
                          className="form-control"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          htmlFor="dateOfBirth"
                          className="input-group-text"
                        >
                          Date of birth
                        </label>
                        <input
                          type="date"
                          id="dateOfBirth"
                          defaultValue={new Date(
                            user.dateOfBirth
                          ).toLocaleDateString("en-CA")}
                          {...register("dateOfBirth", {
                            required: "Date of birth is required",
                          })}
                          aria-label="Last name"
                          placeholder="mm/dd/yyyy"
                          className="form-control"
                        />
                      </div>
                      <div className="d-flex mb-3">
                        <div className="input-group">
                          <label htmlFor="gender" className="input-group-text">
                            Gender
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            id="gender"
                            {...register("gender", {
                              required: "Date of birth is required",
                            })}
                          >
                            <option
                              value=""
                              disabled
                              hidden
                              className="placeholder"
                            >
                              Your gender.
                            </option>
                            {["Male", "Female", "Other"].map((gender) => (
                              <option
                                key={gender}
                                value={gender}
                                selected={user.gender === gender}
                              >
                                {gender}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="input-group nationality">
                          <label
                            htmlFor="nationality"
                            className="input-group-text"
                          >
                            Nationality
                          </label>

                          <select
                            className="form-select"
                            id="nationality"
                            {...register("nationality", {
                              required: "nationality is required",
                            })}
                          >
                            <option value="">-- Select One --</option>
                            {nationalities.map((nationality, index) => (
                              <option
                                key={index}
                                value={nationality}
                                selected={user.nationality === nationality}
                              >
                                {nationality}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <label htmlFor="" className="input-group-text">
                          Occupation
                        </label>
                        <input
                          type="text"
                          id="occupation"
                          defaultValue={user.occupation}
                          {...register("occupation", {
                            required: "Occupation is required",
                          })}
                          aria-label="Last name"
                          placeholder="Your occupation"
                          className="form-control"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label htmlFor="" className="input-group-text">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          defaultValue={user.email}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi,
                              message: "Email is not valid",
                            },
                          })}
                          aria-label="Email"
                          placeholder="abcdefg@gmail.com"
                          className="form-control"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label htmlFor="mobileNo" className="input-group-text">
                          Contact No.
                        </label>
                        <input
                          type="number"
                          id="mobileNo"
                          defaultValue={user.mobileNo}
                          {...register("mobileNo", {
                            required: "Contact No. is required",
                          })}
                          aria-label="Contact No."
                          placeholder="+1234567890"
                          className="form-control"
                        />
                      </div>
                      <div
                        className={`input-group mb-3 ${
                          user.kyc &&
                          (user.kyc.status === "PENDING" ||
                            user.kyc.status === "SUCCCESS")
                            ? "justify-content-center"
                            : ""
                        }`}
                      >
                        {(user.kyc && user.kyc.status === "PENDING") ||
                        (user.kyc && user.kyc.status === "SUCCCESS") ? (
                          <>Your kyc in {user.kyc.status}</>
                        ) : (
                          <>
                            <label htmlFor="images" className="input-group-text">
                              Identification
                            </label>
                            <input
                              type="file"
                              id="images"
                              accept=".jpg, .jpeg, .png"
                              {...register("images", {
                                required: "Identification is required",
                              })}
                              className="form-control"
                              multiple
                            />
                          </>
                        )}
                      </div>
                      <div className="mb-3">
                        <button type="submit" className="btn btn-success">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

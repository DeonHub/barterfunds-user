import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./User.css";
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";
import FileUpload from "./components/FileUpload";
import { countries } from "./components/data";
import PhoneNumberInput from "./components/PhoneNumberInput";
import openNotification from "../components/OpenNotification";
import axios from "axios";
import { Modal } from "antd";
import Loader from "../components/Loader";


const KycForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];
  const [submitButton, setSubmitButton] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    email: "",
    contact: "233 558587873",
    dateOfBirth: "",
    country: "",
    nationality: "",
    region: "",
    city: "",
    residentialAddress: "",
    postalAddress: "",
    identityDocumentType: "",
    identityDocumentNumber: "",
    issueDate: "",
    expiryDate: "",
    issuingAuthority: "",
    identityDocumentUploaded: "",
    photograph: "",
    frontImage: "",
    backImage: "",
    proofDocumentUploaded: "",
    proofOfAddress: "",
  });

  const setSelectedProof = (file, name) => {
    setFormData(
      (prevData) => ({
        ...prevData,
        [name]: file,
      }),
      () => {
        console.log(formData);
      }
    );
  };

  useEffect(() => {
    document.title = "KYC Application | BarterFunds";
    const token = window.sessionStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    // Check if all fields in formData have non-empty values
    const allFieldsFilled = Object.values(formData).every(
      (value) => value !== ""
    );

    if (allFieldsFilled) {
      setSubmitButton(true);
    } else {
      setSubmitButton(false);
    }

    setIsLoading(false);
  }, [formData, selectedCountryCode]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    // Check if the event target is a checkbox or select element
    const newValue =
      type === "checkbox"
        ? checked
        : type === "file"
        ? files[0]
        : type === "tel"
        ? String(value)
        : value;

    // If the name is 'contact', append the country code to the input value
    const updatedValue =
      name === "contact" ? `${selectedCountryCode} ${newValue}` : newValue;

    // Update state based on the name of the input field
    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));

    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    setIsLoading(true);
    console.log(formData);

    const token = window.sessionStorage.getItem("token");
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlZGViOTc0MTFAc2Vvc25hcHMuY29tIiwidXNlcklkIjoiNjVkMjFmMzZjYjE3Nzc0MWJiZmE3ZTk2IiwiaWF0IjoxNzE0MDU1OTg0LCJleHAiOjE3MTY2NDc5ODR9.bWMdV8VRZoQV2DNIsFHFIUFZbQCLoNyfrMkmq-m9rPg";

    const body = new FormData();
    for (const key in formData) {
      body.append(key, formData[key]);
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/kycs`, body, { headers: headers })
      .then((response) => {
        if (response.data.success) {
          // setMessage('Login Successfully')
          openNotification(
            "topRight",
            "success",
            "KYC Form Submitted",
            "KYC form has been successfully submitted. We will review and get back to you."
          );
          // console.log("response.data :>> ", response.data);
          // setPassword("");
          // setConfirmPassword("");

          setTimeout(() => {
            window.location.href = `${process.env.REACT_APP_PUBLIC_URL}/user/kycs`;
          }, 2000);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        openNotification(
          "topRight",
          "error",
          "Error",
          error.response.data.message
        );

        console.log("error :>> ", error.response.data.message);
      });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (e) => {
    setIsModalOpen(false);
    handleSubmit(e);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="nk-body npc-crypto bg-white has-sidebar">
      <div className="nk-app-root">
        <div className="nk-main ">
          <UserSidebar active={"kycs"} />
          <div className="nk-wrap ">
            <UserHeader />

            {isLoading ? (
              <Loader />
            ) : (
              <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                  <div className="nk-content-body">
                    <div className="kyc-app wide-sm m-auto">
                      <div className="nk-block-head nk-block-head-lg wide-xs mx-auto">
                        <div className="nk-block-head-content text-center">
                          <h2 className="nk-block-title fw-normal">
                            Begin your ID-Verification
                          </h2>
                          <div className="nk-block-des">
                            <p>
                              To comply with regulation each participant will
                              have to go through indentity verification
                              (KYC/AML) to prevent fraud causes.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="nk-block">
                        <div className="card card-bordered">
                          <div className="nk-kycfm">
                            <div className="nk-kycfm-head">
                              <div className="nk-kycfm-count">01</div>
                              <div className="nk-kycfm-title">
                                <h5 className="title">Personal Details</h5>
                                <p className="sub-title">
                                  Your simple personal information required for
                                  identification
                                </p>
                              </div>
                            </div>
                            <div className="nk-kycfm-content">
                              <div className="nk-kycfm-note">
                                <p>
                                  Please type carefully and fill out the form
                                  with your personal details. You can’t edit
                                  these details once you submitted the form.
                                </p>
                              </div>
                              <div className="row g-4">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        First Name{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Samuel"
                                        name="firstname"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Surname
                                        <span className="text-danger">*</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Appiah"
                                        name="surname"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Email Address
                                        <span className="text-danger">*</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="example@gmail.com"
                                        name="email"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Phone Number{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <PhoneNumberInput
                                        handleChange={handleChange}
                                        setSelectedCountryCode={
                                          setSelectedCountryCode
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Date of Birth{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <input
                                        type="date"
                                        className="form-control form-control-lg date-picker-alt"
                                        placeholder="11/03/2024"
                                        max={minDate}
                                        name="dateOfBirth"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Whatsapp Number
                                        <span className="text-danger">*</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder={+233598870911}
                                        // onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="nk-kycfm-head">
                              <div className="nk-kycfm-count">02</div>
                              <div className="nk-kycfm-title">
                                <h5 className="title">Your Address</h5>
                                <p className="sub-title">
                                  Your residential details required for
                                  identification
                                </p>
                              </div>
                            </div>
                            <div className="nk-kycfm-content">
                              <div className="nk-kycfm-note">
                                <p>
                                  You can’t edit these details once you
                                  submitted the form.
                                </p>
                              </div>
                              <div className="row g-4">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Country
                                        <span className="text-danger"> *</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <select
                                        className="form-control form-control-lg nationality-selector"
                                        id="nationality-select"
                                        name="country"
                                        onChange={handleChange}
                                      >
                                        <option value="">
                                          Select a country
                                        </option>
                                        {countries.map((country, index) => (
                                          <option key={index} value={country}>
                                            {country}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        State or Region
                                        <span className="text-danger"> *</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Greater Accra"
                                        name="region"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Town or City
                                        <span className="text-danger">*</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Adenta"
                                        name="city"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Residential Address
                                        <span className="text-danger"> *</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Lame Dwaahe st"
                                        name="residentialAddress"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Postal Address
                                        <span className="text-danger"> *</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="GD-029-3112"
                                        name="postalAddress"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Complex or Building (Optional)
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Hse no, building name, unit number, or floor"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="nk-kycfm-head">
                              <div className="nk-kycfm-count">03</div>
                              <div className="nk-kycfm-title">
                                <h5 className="title">Identification</h5>
                                <p className="sub-title">
                                  Your simple personal information required for
                                  identification
                                </p>
                              </div>
                            </div>
                            <div className="nk-kycfm-content">
                              <div className="nk-kycfm-note">
                                <p>
                                  You can’t edit these details once you
                                  submitted the form.
                                </p>
                              </div>
                              <div className="row g-4">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Nationality
                                        <span className="text-danger"> *</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <select
                                        className="form-control form-control-lg nationality-selector"
                                        id="nationality-select"
                                        name="nationality"
                                        onChange={handleChange}
                                      >
                                        <option value="">
                                          Select a country
                                        </option>
                                        {countries.map((country, index) => (
                                          <option key={index} value={country}>
                                            {country}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Identification Document Type
                                        <span className="text-danger"> *</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <select
                                        className="form-control form-control-lg nationality-selector"
                                        onChange={handleChange}
                                        name="identityDocumentType"
                                      >
                                        <option value="">
                                          Select an identification document
                                        </option>
                                        <option value="Passport">
                                          Passport
                                        </option>

                                        <option value="National ID">
                                          National ID
                                        </option>
                                        <option value="Drivers License">
                                          Drivers License
                                        </option>
                                        <option value="Other">Other ID</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Identity Document Number
                                        <span className="text-danger"> *</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="GHA-007463639-8"
                                        name="identityDocumentNumber"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Identity Document Issue Date
                                        <span className="text-danger"> *</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        placeholder="GHA-007463639-8"
                                        max={minDate}
                                        name="issueDate"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Identity Document Expiry
                                        <span className="text-danger"> *</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        placeholder="GHA-007463639-8"
                                        min={minDate}
                                        name="expiryDate"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-group">
                                    <div className="form-label-group">
                                      <label className="form-label">
                                        Issuing Authority
                                        <span className="text-danger"> *</span>
                                      </label>
                                    </div>
                                    <div className="form-control-group">
                                      <select
                                        className="form-control form-control-lg nationality-selector"
                                        onChange={handleChange}
                                        name="issuingAuthority"
                                      >
                                        <option value="">
                                          Select an identification document
                                        </option>
                                        <option value="Local Government">
                                          Local Government
                                        </option>

                                        <option value="International Organization">
                                          International Organization
                                        </option>
                                        <option value="DriverLicense">
                                          Private Entity
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="nk-kycfm-head">
                              <div className="nk-kycfm-count">04</div>
                              <div className="nk-kycfm-title">
                                <h5 className="title">Document Upload</h5>
                                <p className="sub-title">
                                  To verify your identity, please upload any of
                                  your document.
                                </p>
                              </div>
                            </div>
                            <div className="nk-kycfm-content">
                              <div className="nk-kycfm-note">
                                <p>
                                  In order to complete, please upload any of the
                                  following personal document.
                                </p>
                              </div>
                              <ul className="nk-kycfm-control-list g-3">
                                <li className="nk-kycfm-control-item">
                                  <input
                                    className="nk-kycfm-control"
                                    type="radio"
                                    name="identityDocumentUploaded"
                                    id="passport"
                                    data-title="Passport"
                                    value="Passport"
                                    onChange={handleChange}
                                  />
                                  <label
                                    className="nk-kycfm-label"
                                    htmlFor="passport"
                                  >
                                    <span className="nk-kycfm-label-icon">
                                      <span className="label-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 71.9904 75.9285"
                                        >
                                          <path
                                            d="M27.14,23.73A15.55,15.55,0,1,0,42.57,39.4v-.12A15.5,15.5,0,0,0,27.14,23.73Zm11.42,9.72H33a25.55,25.55,0,0,0-2.21-6.53A12.89,12.89,0,0,1,38.56,33.45ZM31,39.28a26.9929,26.9929,0,0,1-.2,3.24H23.49a26.0021,26.0021,0,0,1,0-6.48H30.8A29.3354,29.3354,0,0,1,31,39.28ZM26.77,26.36h.75a21.7394,21.7394,0,0,1,2.85,7.09H23.91A21.7583,21.7583,0,0,1,26.77,26.36Zm-3.28.56a25.1381,25.1381,0,0,0-2.2,6.53H15.72a12.88,12.88,0,0,1,7.78-6.53ZM14.28,39.28A13.2013,13.2013,0,0,1,14.74,36H20.9a29.25,29.25,0,0,0,0,6.48H14.74A13.1271,13.1271,0,0,1,14.28,39.28Zm1.44,5.83h5.57a25.9082,25.9082,0,0,0,2.2,6.53A12.89,12.89,0,0,1,15.72,45.11ZM27.51,52.2h-.74a21.7372,21.7372,0,0,1-2.85-7.09h6.44A21.52,21.52,0,0,1,27.51,52.2Zm3.28-.56A25.1413,25.1413,0,0,0,33,45.11h5.57a12.84,12.84,0,0,1-7.77,6.53Zm2.59-9.12a28.4606,28.4606,0,0,0,0-6.48h6.15a11.7,11.7,0,0,1,0,6.48ZM14.29,62.6H40v2.6H14.28V62.61ZM56.57,49l1.33-5,2.48.67-1.33,5Zm-6,22.52L55.24,54l2.48.67L53.06,72.14Zm21.6-61.24-29.8-8a5.13,5.13,0,0,0-6.29,3.61h0L33.39,16H6.57A2.58,2.58,0,0,0,4,18.55V70.38A2.57,2.57,0,0,0,6.52,73L6.57,73h29.7l17.95,4.85a5.12,5.12,0,0,0,6.28-3.6v-.06L75.8,16.61a5.18,5.18,0,0,0-3.6066-6.3763L72.18,10.23ZM6.57,70.38V18.55H45.14a2.57,2.57,0,0,1,2.57,2.57V67.79a2.57,2.57,0,0,1-2.55,2.59H6.57ZM73.34,15.91,58,73.48a2.59,2.59,0,0,1-2.48,1.93,2.5192,2.5192,0,0,1-.67-.09l-9-2.42a5.15,5.15,0,0,0,4.37-5.11V47.24l1.32.36,1.33-5-2.49-.67-.16.62V21.94l2.62.71,3.05,10,2.13.57L57.88,24l3.76,1,1.65,3,1.42.39-.25-4.09,2.24-3.42-1.41-.39L62.4,22.15l-3.76-1,4.76-7.92-2.13-.57-7.6,7.14-4-1.08A5.1,5.1,0,0,0,45.14,16H36.05l2.51-9.45a2.57,2.57,0,0,1,3.12-1.84h0l29.81,8.05a2.56,2.56,0,0,1,1.56,1.21A2.65,2.65,0,0,1,73.34,15.91ZM56.57,39.59l.66-2.5,2.44.65L59,40.24Zm4.88,1.31.66-2.51,2.44.66-.65,2.5Zm-9.76-2.61.66-2.51,2.45.66-.66,2.5Z"
                                            transform="translate(-3.9995 -2.101)"
                                            fill="#6476ff"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="nk-kycfm-label-text">
                                      Passport
                                    </span>
                                  </label>
                                </li>
                                <li className="nk-kycfm-control-item">
                                  <input
                                    className="nk-kycfm-control"
                                    type="radio"
                                    name="identityDocumentUploaded"
                                    id="national-id"
                                    data-title="National ID"
                                    value="National ID"
                                    onChange={handleChange}
                                  />
                                  <label
                                    className="nk-kycfm-label"
                                    htmlFor="national-id"
                                  >
                                    <span className="nk-kycfm-label-icon">
                                      <span className="label-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 76 63"
                                        >
                                          <path
                                            d="M76,18.79,56.53,9.56a6.19,6.19,0,0,0-5.19,0l-19.5,9.23a3.35,3.35,0,0,0-1.9,2.55H8.33A6.26,6.26,0,0,0,2,27.51v38.3A6.27,6.27,0,0,0,8.33,72H71.67A6.27,6.27,0,0,0,78,65.81v-44A3.37,3.37,0,0,0,76,18.79Zm-.56,47a3.77,3.77,0,0,1-3.8,3.71H8.33a3.77,3.77,0,0,1-3.8-3.71V27.51a3.75,3.75,0,0,1,3.7993-3.7H29.87v9.34A34.49,34.49,0,0,0,44,60.41l7.51,5.8a4.11,4.11,0,0,0,4.94,0l7.51-5.8A36.5307,36.5307,0,0,0,75.47,45.62V65.81Zm0-32.66a32.09,32.09,0,0,1-13.1,25.34l-7.51,5.8a1.5,1.5,0,0,1-1.8,0l-7.51-5.8A32.05,32.05,0,0,1,32.4,33.15V21.83A.91.91,0,0,1,33,21l19.5-9.23a3.51,3.51,0,0,1,3,0L74.92,21a.91.91,0,0,1,.55.82V33.15ZM53.87,21.43a12.47,12.47,0,0,0-12.6,12.31,12.62,12.62,0,0,0,25.23,0,12.46,12.46,0,0,0-12.6178-12.3l-.0122,0Zm0,22.14A9.83,9.83,0,1,1,64,33.78a10,10,0,0,1-10.1,9.79Zm3.31-13.22-5.32,5.19-1.18-1.15a1.29,1.29,0,0,0-1.79,0,1.2,1.2,0,0,0-.013,1.697l.013.013h0l2.08,2a1.27,1.27,0,0,0,1.79,0L59,32.09a1.22,1.22,0,0,0,0-1.72h0a1.29,1.29,0,0,0-1.8,0ZM29.87,57.16h-20a1.24,1.24,0,1,0,0,2.47h20a1.24,1.24,0,0,0,0-2.47ZM19.73,62.1H9.89a1.24,1.24,0,0,0,0,2.48h9.84a1.24,1.24,0,0,0,0-2.48Zm8.66-14.28h0L24,45.71a.36.36,0,0,1-.22-.34V44.16a1.878,1.878,0,0,1,.18-.24,10.9991,10.9991,0,0,0,1.35-2.48,2.53,2.53,0,0,0,1.23-2.16V37.51a2.61,2.61,0,0,0-.46-1.43V34a4.69,4.69,0,0,0-1.15-3.43,6.68,6.68,0,0,0-5.19-1.85,6.67,6.67,0,0,0-5.18,1.85A4.61,4.61,0,0,0,13.4,34v2a2.46,2.46,0,0,0-.46,1.43v1.78a2.49,2.49,0,0,0,.78,1.81,10.148,10.148,0,0,0,1.52,3v1.2a.36.36,0,0,1-.21.33l-4.1,2.15A4.79,4.79,0,0,0,8.33,52v1.43a1.26,1.26,0,0,0,.37.88,1.33,1.33,0,0,0,.9.36H29.87a1.31,1.31,0,0,0,.9-.36,1.26,1.26,0,0,0,.37-.88V52.11A4.76,4.76,0,0,0,28.39,47.82Zm.21,4.4H10.87V52a2.27,2.27,0,0,1,1.25-2l4.12-2.16a2.85,2.85,0,0,0,1.54-2.5V43.72a1.3,1.3,0,0,0-.3-.8,7.39,7.39,0,0,1-1.4-2.8,1.53,1.53,0,0,0-.6-.83V37.46a1.22,1.22,0,0,0,.43-.92v-2.7a2.17,2.17,0,0,1,.53-1.58,4.38,4.38,0,0,1,3.28-1,4.43,4.43,0,0,1,3.26,1,2.22,2.22,0,0,1,.55,1.6.8552.8552,0,0,0,0,.16v2.56a1.36,1.36,0,0,0,.46,1l-.08,1.86a1.23,1.23,0,0,0-.84.8,8.5819,8.5819,0,0,1-1.19,2.31c-.1.14-.22.28-.33.41a1.22,1.22,0,0,0-.33.82v1.66A2.86,2.86,0,0,0,22.86,48l4.41,2a2.28,2.28,0,0,1,1.33,2.07v.15Z"
                                            transform="translate(-2 -8.9898)"
                                            fill="#6476ff"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="nk-kycfm-label-text">
                                      National ID
                                    </span>
                                  </label>
                                </li>
                                <li className="nk-kycfm-control-item">
                                  <input
                                    className="nk-kycfm-control"
                                    type="radio"
                                    name="identityDocumentUploaded"
                                    id="driver-licence"
                                    data-title="Driving License"
                                    value="Driving License"
                                    onChange={handleChange}
                                  />
                                  <label
                                    className="nk-kycfm-label"
                                    htmlFor="driver-licence"
                                  >
                                    <span className="nk-kycfm-label-icon">
                                      <span className="label-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 76 76"
                                        >
                                          <path
                                            d="M70.5,2H9.9A7.9167,7.9167,0,0,0,2,9.9V51.5A7.49,7.49,0,0,0,9.5,59H31.6a1.538,1.538,0,0,0,1.5-1.5A1.4727,1.4727,0,0,0,31.6,56H9.7A4.6946,4.6946,0,0,1,5,51.3V15H75V46.9a1.5,1.5,0,1,0,3,0V10.1C78,5.6,74.7,2,70.5,2ZM75,11H5V9.5A4.6115,4.6115,0,0,1,9.8,5H70.3a4.6115,4.6115,0,0,1,4.8,4.5V11ZM64.3,29.5a4.1408,4.1408,0,0,1-1.5,2.9.9593.9593,0,0,0-.3,1L63,35a.9879.9879,0,0,0,.7.7l3.9,1a2.0749,2.0749,0,0,1,1,.6.972.972,0,0,0,1.4-.1h0a.9663.9663,0,0,0-.1-1.4h0a5.7028,5.7028,0,0,0-2.2-1.1l-3-.8-.1-.5a7.08,7.08,0,0,0,1.6-3.1,1.8059,1.8059,0,0,0,1-1.4l.2-1.7a1.8411,1.8411,0,0,0-.8-1.8l.1-1.1.2-.2a2.5846,2.5846,0,0,0,.1-3.4,4.3847,4.3847,0,0,0-3.8-1.8,7.2965,7.2965,0,0,0-3.5.9c-4.1.1-4.6,2.4-4.6,4,0,.3.1.9.1,1.5-.1.1-.3.2-.4.3a1.9638,1.9638,0,0,0-.5,1.5l.2,1.7a2.0944,2.0944,0,0,0,1.1,1.5,6.1046,6.1046,0,0,0,1.5,3l-.1.6-3,.8A5.4636,5.4636,0,0,0,49.9,40a.9448.9448,0,0,0,1,1H65a1,1,0,0,0,0-2H52.1a3.1116,3.1116,0,0,1,2.5-2.3l3.6-.9a.9879.9879,0,0,0,.7-.7l.4-1.7a.8065.8065,0,0,0-.3-.9,4.6858,4.6858,0,0,1-1.4-2.9.8949.8949,0,0,0-1-.8l-.3-1.6a.9448.9448,0,0,0,1-1v-.1a19.0913,19.0913,0,0,1-.2-2c0-1,0-2,2.9-2a1.4213,1.4213,0,0,0,.6-.2,4.1045,4.1045,0,0,1,2.6-.7,2.1984,2.1984,0,0,1,2.1.9c.4.6.2.8.1.9l-.4.2a.9078.9078,0,0,0-.3.7L64.6,26a.7787.7787,0,0,0,.7.9h.2l-.1,1.6A1.0278,1.0278,0,0,0,64.3,29.5ZM34.1,27a1.538,1.538,0,0,0,1.5-1.5A1.4727,1.4727,0,0,0,34.1,24h-6a1.5,1.5,0,0,0,0,3ZM12.8,37h21a1.5,1.5,0,0,0,0-3h-21a1.538,1.538,0,0,0-1.5,1.5A1.4727,1.4727,0,0,0,12.8,37Zm-.4-10h9a1.5,1.5,0,0,0,0-3h-9a1.5,1.5,0,1,0,0,3ZM74.9,55a2.0059,2.0059,0,0,0-2-2h-.2a7.0756,7.0756,0,0,0-3.1,1c-1.4-3-3.8-5.6-5.4-6.4-1.1-.6-4.9-1.2-8.3-1.2s-7.1.6-8.2,1.2c-1.7.8-4,3.4-5.4,6.4a6.6831,6.6831,0,0,0-3.1-1,2.2959,2.2959,0,0,0-1.4.4A2.0876,2.0876,0,0,0,37,55a5.5585,5.5585,0,0,0,2,4c.2.1.3.2.5.3a16.4687,16.4687,0,0,0-1,5.8c0,2.1.2,5.8,1.5,7.7v2.4a2.9483,2.9483,0,0,0,2.8,2.9h3.4A2.8616,2.8616,0,0,0,49,75.3h0v-1a27.5212,27.5212,0,0,0,7,1,27.5212,27.5212,0,0,0,7-1v1a2.7754,2.7754,0,0,0,2.7,2.8H69a2.8183,2.8183,0,0,0,2.9-2.8h0V72.9c1.2-1.9,1.4-5.5,1.4-7.7a16.0869,16.0869,0,0,0-1-5.8.8643.8643,0,0,0,.6-.3A5.7634,5.7634,0,0,0,74.9,55ZM49.3,50.1a22.2387,22.2387,0,0,1,6.8-.8,30.84,30.84,0,0,1,6.8.8c1.1.5,3.6,3.4,4.6,6.5-2.7.4-9.1,1.2-11.5,1.2s-8.7-.9-11.4-1.2C45.7,53.5,48.2,50.7,49.3,50.1Zm-8.1,6.6c-.1-.2-.3-.3-.4-.5a2.1859,2.1859,0,0,1,.5.3c0,.1,0,.1-.1.2ZM46.1,75H43V74h3v1.1Zm23,0H66V74h3v1.1Zm.4-5H66.9a6.7381,6.7381,0,0,0-2.6.9h0a32.0084,32.0084,0,0,1-8.2,1.4,42.62,42.62,0,0,1-7.6-1.5,6.1538,6.1538,0,0,0-1.9-.2l-4,.4a19.5493,19.5493,0,0,1-.8-5.9,6.15,6.15,0,0,1,.1-1.4c1.9.1,4.2.7,4.2,1.4a1.52,1.52,0,0,0,1.4,1.5h0c.8,0,1.5-1.4,1.5-1.4v-.7c0-3.4-4.7-4-6.5-4.1.2-.5.4-1,.6-1.4h0c.4.1,9.8,1.4,13,1.4S68.7,59.1,69,59h0c.2.5.4.9.6,1.4-1.8.1-6.4.7-6.4,4.1a1.4036,1.4036,0,0,0,2.8,0v-.1c0-.7,2.2-1.3,4.2-1.4a6.602,6.602,0,0,1,.1,1.4A17.2549,17.2549,0,0,1,69.5,70Zm1.6-13.3c0-.1-.1-.1-.1-.2l.5-.3A2.1813,2.1813,0,0,1,71.1,56.7ZM59.2,64h-6a1.5,1.5,0,0,0,0,3h6a1.5,1.5,0,0,0,0-3Z"
                                            transform="translate(-2 -2)"
                                            fill="#6476ff"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="nk-kycfm-label-text">
                                      Driving License
                                    </span>
                                  </label>
                                </li>
                              </ul>
                              <h6 className="title">
                                To avoid delays when verifying account, Please
                                make sure below:
                              </h6>
                              <ul className="list list-sm list-checked">
                                <li>Chosen credential must not be expired.</li>
                                <li>
                                  Document should be in good condition and
                                  clearly visible.
                                </li>
                                <li>
                                  Make sure that there is no light glare on the
                                  card.
                                </li>
                              </ul>

                              <div className="nk-kycfm-upload">
                                <h6 className="title nk-kycfm-upload-title">
                                  ID Front
                                </h6>
                                <div className="row align-items-center">
                                  <div className="col-sm-8">
                                    <FileUpload
                                      name={"frontImage"}
                                      id={"frontImage"}
                                      setSelectedProof={(file) =>
                                        setSelectedProof(file, "frontImage")
                                      }
                                    />
                                  </div>
                                  <div className="col-sm-4 d-none d-sm-block">
                                    <div className="mx-md-4">
                                      <img
                                        src="/assets/images/icons/id-front.svg"
                                        alt="ID Front"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-kycfm-upload">
                                <h6 className="title nk-kycfm-upload-title">
                                  ID Back
                                </h6>
                                <div className="row align-items-center">
                                  <div className="col-sm-8">
                                    <FileUpload
                                      name={"backImage"}
                                      id={"backImage"}
                                      setSelectedProof={(file) =>
                                        setSelectedProof(file, "backImage")
                                      }
                                    />
                                  </div>
                                  <div className="col-sm-4 d-none d-sm-block">
                                    <div className="mx-md-4">
                                      <img
                                        src="/assets/images/icons/id-back.svg"
                                        alt="ID Back"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="nk-kycfm-head">
                              <div className="nk-kycfm-count">05</div>
                              <div className="nk-kycfm-title">
                                <h5 className="title">Proof of address</h5>
                                <p className="sub-title">
                                  To verify your address, please upload any of
                                  your document.
                                </p>
                              </div>
                            </div>
                            <div className="nk-kycfm-content">
                              <div className="nk-kycfm-note">
                                <p>
                                  In order to complete, please upload any of the
                                  following personal document.
                                </p>
                              </div>
                              <ul className="nk-kycfm-control-list g-3">
                                <li className="nk-kycfm-control-item">
                                  <input
                                    className="nk-kycfm-control"
                                    type="radio"
                                    name="proofDocumentUploaded"
                                    id="bank-statement"
                                    data-title="Bank Statement"
                                    defaultChecked=""
                                    value="Bank Statement"
                                    onChange={handleChange}
                                  />
                                  <label
                                    className="nk-kycfm-label"
                                    htmlFor="bank-statement"
                                  >
                                    <span className="nk-kycfm-label-icon">
                                      <span className="label-icon">
                                        <svg
                                          version={1.0}
                                          id="Layer_1"
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          viewBox="0 0 64 64"
                                          enableBackground="new 0 0 64 64"
                                          xmlSpace="preserve"
                                          fill="#000000"
                                        >
                                          <g
                                            id="SVGRepo_bgCarrier"
                                            strokeWidth={0}
                                          />
                                          <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <g id="SVGRepo_iconCarrier">
                                            <g>
                                              <path
                                                fill="#6B7CFF"
                                                d="M60,58c0-2.209-1.791-4-4-4h-2V25h6c1.795,0,3.369-1.194,3.852-2.922c0.484-1.728-0.242-3.566-1.775-4.497 l-28-17C33.439,0.193,32.719,0,32,0s-1.438,0.193-2.076,0.581l-28,17c-1.533,0.931-2.26,2.77-1.775,4.497 C0.632,23.806,2.207,25,4,25h6v29H8c-2.209,0-4,1.791-4,4c-2.209,0-4,1.791-4,4v2h64v-2C64,59.791,62.209,58,60,58z M52,54h-4V25h4 V54z M18,25h4v29h-4V25z M24,25h4v29h-4V25z M30,25h4v29h-4V25z M36,25h4v29h-4V25z M42,25h4v29h-4V25z M4,23 c-0.893,0-1.685-0.601-1.926-1.462c-0.241-0.859,0.124-1.784,0.888-2.247l28-17.001C31.275,2.1,31.635,2,32,2 c0.367,0,0.725,0.1,1.039,0.291l28,17c0.764,0.463,1.129,1.388,0.887,2.248C61.686,22.399,60.893,23,60,23H4z M12,25h4v29h-4V25z M8,56h48c1.105,0,2,0.896,2,2H6C6,56.896,6.896,56,8,56z M2,62c0-1.104,0.896-2,2-2h56c1.105,0,2,0.896,2,2H2z"
                                              ></path>
                                              <path
                                                fill="#6B7CFF"
                                                d="M32,9c-2.762,0-5,2.238-5,5s2.238,5,5,5s5-2.238,5-5S34.762,9,32,9z M32,17c-1.656,0-3-1.343-3-3 s1.344-3,3-3c1.658,0,3,1.343,3,3S33.658,17,32,17z"
                                              ></path>
                                            </g>
                                          </g>
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="nk-kycfm-label-text">
                                      Bank Statement
                                    </span>
                                  </label>
                                </li>
                                {/* .nk-kycfm-control-item */}
                                <li className="nk-kycfm-control-item">
                                  <input
                                    className="nk-kycfm-control"
                                    type="radio"
                                    name="proofDocumentUploaded"
                                    id="utility-bill"
                                    data-title="Utility Bill"
                                    value="Utility Bill"
                                    onChange={handleChange}
                                  />
                                  <label
                                    className="nk-kycfm-label"
                                    htmlFor="utility-bill"
                                  >
                                    <span className="nk-kycfm-label-icon">
                                      <span className="label-icon">
                                        <svg
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g
                                            id="SVGRepo_bgCarrier"
                                            strokeWidth={0}
                                          />
                                          <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <g id="SVGRepo_iconCarrier">
                                            <path
                                              d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
                                              stroke="#6B7CFF"
                                              strokeWidth="1.5"
                                              strokeMiterlimit={10}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
                                              stroke="#6B7CFF"
                                              strokeWidth="1.5"
                                              strokeMiterlimit={10}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              opacity="0.4"
                                              d="M9 13.0098H12"
                                              stroke="#6B7CFF"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              opacity="0.4"
                                              d="M9 9.00977H12"
                                              stroke="#6B7CFF"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              opacity="0.4"
                                              d="M5.99609 13H6.00508"
                                              stroke="#6B7CFF"
                                              strokeWidth={2}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              opacity="0.4"
                                              d="M5.99451 9H6.00349"
                                              stroke="#6B7CFF"
                                              strokeWidth={2}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </g>
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="nk-kycfm-label-text">
                                      Utility Bill
                                    </span>
                                  </label>
                                </li>

                                <li className="nk-kycfm-control-item">
                                  <input
                                    className="nk-kycfm-control"
                                    type="radio"
                                    name="proofDocumentUploaded"
                                    id="other-documents"
                                    data-title="Other Documents"
                                    value="Other Documents"
                                    onChange={handleChange}
                                  />
                                  <label
                                    className="nk-kycfm-label"
                                    htmlFor="other-documents"
                                  >
                                    <span className="nk-kycfm-label-icon">
                                      <span className="label-icon">
                                        <svg
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g
                                            id="SVGRepo_bgCarrier"
                                            strokeWidth={0}
                                          />
                                          <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <g id="SVGRepo_iconCarrier">
                                            <path
                                              d="M10.5 11L17 11"
                                              stroke="#6B7CFF"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                            />
                                            <path
                                              d="M7 11H7.5"
                                              stroke="#6B7CFF"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                            />
                                            <path
                                              d="M7 7.5H7.5"
                                              stroke="#6B7CFF"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                            />
                                            <path
                                              d="M7 14.5H7.5"
                                              stroke="#6B7CFF"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                            />
                                            <path
                                              d="M17 14.5H16M10.5 14.5H13.5"
                                              stroke="#6B7CFF"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                            />
                                            <path
                                              d="M17 7.5H14M10.5 7.5H11.5"
                                              stroke="#6B7CFF"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                            />
                                            <path
                                              d="M21 7V6.37006C21 5.17705 21 4.58055 20.842 4.09946C20.5425 3.18719 19.8468 2.47096 18.9606 2.16261C18.4933 2 17.9139 2 16.755 2H7.24502C6.08614 2 5.50671 2 5.03939 2.16261C4.15322 2.47096 3.45748 3.18719 3.15795 4.09946C3 4.58055 3 5.17705 3 6.37006V15M21 11V20.3742C21 21.2324 20.015 21.6878 19.3919 21.1176C19.0258 20.7826 18.4742 20.7826 18.1081 21.1176L17.625 21.5597C16.9834 22.1468 16.0166 22.1468 15.375 21.5597C14.7334 20.9726 13.7666 20.9726 13.125 21.5597C12.4834 22.1468 11.5166 22.1468 10.875 21.5597C10.2334 20.9726 9.26659 20.9726 8.625 21.5597C7.98341 22.1468 7.01659 22.1468 6.375 21.5597L5.8919 21.1176C5.52583 20.7826 4.97417 20.7826 4.6081 21.1176C3.985 21.6878 3 21.2324 3 20.3742V19"
                                              stroke="#6B7CFF"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                            />
                                          </g>
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="nk-kycfm-label-text">
                                      Other Documents
                                    </span>
                                  </label>
                                </li>
                              </ul>
                              <h6 className="title">
                                To avoid delays when verifying account, Please
                                make sure below:
                              </h6>
                              <ul className="list list-sm list-checked">
                                <li>Chosen credential must not be expired.</li>
                                <li>
                                  Document should be in good condition and
                                  clearly visible.
                                </li>
                                <li>
                                  Make sure that there is no light glare on the
                                  document.
                                </li>
                              </ul>
                              <div className="nk-kycfm-upload">
                                <h6 className="title nk-kycfm-upload-title">
                                  Upload Your Proof
                                </h6>
                                <div className="row align-items-center">
                                  <div className="col-sm-8">
                                    <FileUpload
                                      name={"proofOfAddress"}
                                      id={"proofOfAddress"}
                                      setSelectedProof={(file) =>
                                        setSelectedProof(file, "proofOfAddress")
                                      }
                                    />
                                  </div>
                                  <div className="col-sm-4 d-none d-sm-block">
                                    <div className="mx-md-4">
                                      <img
                                        src="/assets/images/icons/secure-documents-icon.svg"
                                        alt="ID Front"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="nk-kycfm-head">
                              <div className="nk-kycfm-count">06</div>
                              <div className="nk-kycfm-title">
                                <h5 className="title">Selfie With ID (SWID)</h5>
                                <p className="sub-title">
                                  To verify your identity, please provide a
                                  clear photo of yourself holding your
                                  identification document.
                                </p>
                              </div>
                            </div>
                            <div className="nk-kycfm-content">
                              <h6 className="title">
                                To avoid delays when verifying account, Please
                                make sure below:
                              </h6>
                              <ul className="list list-sm list-checked">
                                <li>
                                  Your chosen identification document must be
                                  valid and not expired.
                                </li>
                                <li>
                                  Ensure that both your face and the details on
                                  the document are visible in the photo.
                                </li>
                                <li>
                                  The document should be in good condition and
                                  legible.
                                </li>
                                <li>
                                  Avoid any light glare or shadows obscuring the
                                  document or your face.
                                </li>
                              </ul>
                              <div className="nk-kycfm-upload">
                                <h6 className="title nk-kycfm-upload-title">
                                  Upload Your Selfie
                                </h6>
                                <div className="row align-items-center">
                                  <div className="col-sm-8">
                                    <FileUpload
                                      name={"photograph"}
                                      id={"photograph"}
                                      setSelectedProof={(file) =>
                                        setSelectedProof(file, "photograph")
                                      }
                                    />
                                  </div>
                                  <div className="col-sm-4 d-none d-sm-block">
                                    <div className="mx-md-4">
                                      <img
                                        src="/assets/images/icons/id-front.svg"
                                        alt="ID Front"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="nk-kycfm-footer">
                              <div className="form-group text-center">
                                <div className="">
                                  <span className="">
                                    By submitting, I agree to The{" "}
                                    <a href="#">Terms Of Condition</a> And{" "}
                                    <a href="#">Privacy Policy</a> of
                                    BarterFunds
                                  </span>
                                </div>
                              </div>
                              {/* <div className="form-group">
                              <div className="custom-control custom-control-xs custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="info-assure"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="info-assure"
                                >
                                  All The Personal Information I Have Entered Is
                                  Correct.
                                </label>
                              </div>
                            </div> */}
                              <div className="nk-kycfm-action pt-2">
                                <button
                                  type="button"
                                  className="btn btn-lg btn-primary btn-block"
                                  // onClick={handleSubmit}
                                  onClick={showModal}
                                  disabled={!submitButton}
                                >
                                  Submit for Verification
                                </button>

                                <Modal
                                  title={
                                    <div className="text-center">
                                      {"Submit for Verification"}
                                      <hr />
                                    </div>
                                  }
                                  open={isModalOpen}
                                  onOk={handleOk}
                                  onCancel={handleCancel}
                                >
                                  <div className="text-center">
                                    {
                                      "Are you sure you want to submit for verification? You can’t edit these details once you submitted the form."
                                    }
                                    <hr />
                                  </div>
                                </Modal>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <UserFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycForm;

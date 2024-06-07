import React, { useState, useEffect } from "react";
import TextInput from "../components/TextInput";
import axios from "axios";
import openNotification from "../components/OpenNotification";
import Success from "./Success";
import Loader from "../components/Loader";

const Signup = () => {

  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [errorFirstname, setErrorFirstname] = useState(false);
  const [errorSurname, setErrorSurname] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorContact, setErrorContact] = useState(false);
  const [errorMessage, setErrorMessage] = useState("This is a required field");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Signup | BarterFunds";
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
      setErrorEmail(false);
    } else if (name === "password") {
      setPassword(value);
      setErrorPassword(false);
    } else if (name === "firstname") {
      setFirstname(value);
      setErrorFirstname(false);
    } else if (name === "surname") {
      setSurname(value);
      setErrorSurname(false);
    } else if (name === "contact") {
      setContact(value);
      setErrorContact(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    window.sessionStorage.clear();
    window.localStorage.clear();

    const error = {
      errorFirstname: firstname.length === 0,
      errorSurname: surname.length === 0,
      errorContact: contact.length === 0,
      errorEmail: email.length === 0,
      errorPassword: password.length === 0,
    };

    setErrorFirstname(error.errorFirstname);
    setErrorSurname(error.errorSurname);
    setErrorContact(error.errorContact);
    setErrorEmail(error.errorEmail);
    setErrorPassword(error.errorPassword);
    setErrorMessage(
      error.errorFirstname ||
        error.errorSurname ||
        error.errorEmail ||
        error.errorPassword ||
        error.errorContact
        ? "This is a required field"
        : "This is a required field"
    );

    if (
      !error.errorFirstname &&
      !error.errorSurname &&
      !error.errorEmail &&
      !error.errorPassword &&
      !error.errorContact
    ) {
      const body = {
        firstname,
        surname,
        contact,
        email,
        password,
      };

      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
        .then((response) => {
          if (response.data.success) {
            setIsLoading(false);
            openNotification(
              "topRight",
              "success",
              "Success",
              "Registration successful"
            );
            setTimeout(() => {
              setSuccess(true);
              setFirstname("");
              setSurname("");
              setEmail("");
              setPassword("");
              setContact("");
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
          setFirstname("");
          setSurname("");
          setEmail("");
          setPassword("");
          setContact("");
          console.log("error :>> ", error.response.data.message);
        });
    }
  };

  return (
    <div className="nk-app-root">
      <div className="nk-main ">
        <div className="nk-wrap nk-wrap-nosidebar">
          {isLoading ? (<Loader />) : (
            <div className="nk-content ">
            <div className="nk-block nk-block-middle nk-auth-body wide-xs">
              <div className="brand-logo pb-4 text-center">
                <a href={`/`} className="logo-link">
                  <img
                    className="logo-dark logo-img logo-img-lg"
                    src="/assets/images/barterfunds-logo.png"
                    alt="logo"
                  />
                </a>
              </div>

              {success ? (
                <Success
                  title={"🎉 Congratulations! 🎉"}
                  subtitle={"You’re now part of Barter Funds community."}
                  body={
                    "Please check your email and verify your account to unlock all the exciting features awaiting you."
                  }
                />
              ) : (
                <div className="card card-bordered">
                  <div className="card-inner card-inner-lg">
                    <div className="nk-block-head">
                      <div className="nk-block-head-content">
                        <h4 className="nk-block-title nk-block-des">Register</h4>
                        <div className="nk-block-des">
                          <p>Create A New Account With Us</p>
                        </div>
                      </div>
                    </div>
                    <form>
                      <TextInput
                        placeholder={"Enter your firstname"}
                        label={"Firstname"}
                        inputname={"firstname"}
                        inputtype={"text"}
                        value={firstname}
                        errorState={errorFirstname}
                        errorMessage={errorMessage}
                        onValueChange={handleInputChange}
                        required
                      />

                      <TextInput
                        placeholder={"Enter your surname"}
                        label={"Surname"}
                        inputname={"surname"}
                        inputtype={"text"}
                        value={surname}
                        errorState={errorSurname}
                        errorMessage={errorMessage}
                        onValueChange={handleInputChange}
                        required
                      />

                      <TextInput
                        placeholder={"Enter your email address"}
                        label={"Email Address"}
                        inputname={"email"}
                        inputtype={"email"}
                        value={email}
                        errorState={errorEmail}
                        errorMessage={errorMessage}
                        onValueChange={handleInputChange}
                        required
                      />

                      <TextInput
                        placeholder={"Enter your password"}
                        label={"Password"}
                        inputname={"password"}
                        inputtype={"password"}
                        value={password}
                        errorState={errorPassword}
                        errorMessage={errorMessage}
                        onValueChange={handleInputChange}
                        showEye
                        required
                      />

                      <TextInput
                        placeholder={"Enter your contact"}
                        label={"Contact"}
                        inputname={"contact"}
                        inputtype={"tel"}
                        value={contact}
                        errorState={errorContact}
                        errorMessage={errorMessage}
                        onValueChange={handleInputChange}
                        required
                      />

                      <div className="form-note-s2 text-center my-4">
                        <p>
                          By creating an account, you agree to Barter Funds
                          <a href={"/"}> Privacy Policy</a> &amp;{" "}
                          <a href={"/"}> Terms of Use.</a>
                        </p>
                      </div>

                      <div className="form-group">
                        <button
                          onClick={handleSubmit}
                          className="btn btn-lg btn-primary btn-block"
                        >
                          Register
                        </button>
                      </div>
                    </form>

                    <div className="form-note-s2 text-center pt-4">
                      Already have an account?
                      <a href={`/login`}>
                        <strong> Sign in instead</strong>
                      </a>
                    </div>
                    {/* <div className="text-center pt-4 pb-3">
                      <h6 className="overline-title overline-title-sap">
                        <span>OR</span>
                      </h6>
                    </div>
                    <ul className="nav justify-center gx-8">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Facebook
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Google
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </div>
              )}
            </div>
          </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Signup;

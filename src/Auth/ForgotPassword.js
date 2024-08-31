import React, { useState, useEffect } from "react";
import TextInput from "../components/TextInput";
import axios from "axios";
import openNotification from "../components/OpenNotification";
import Success from "./Success";
import Loader from "../components/Loader";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [submitButton, setSubmitButton] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    document.title = "Forgot Password | BarterFunds";
    const headers = {};
    axios
      .get(`${process.env.REACT_APP_API_URL}`, {
        headers: headers,
      })

      .then((response) => {
          console.log('')
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(value);

    if (name === "email") {
      setEmail(value);
      setSubmitButton(isEmailValid);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const body = { email };

    axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot-password`, body)
      .then((response) => {
        if (response.data) {
          setIsLoading(false);
          openNotification(
            "topRight",
            "success",
            "Reset Link sent",
            "Please check your email for reset instructions."
          );

          setSubmitButton(false);
          setEmail("");
          setSuccess(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        openNotification(
          "topRight",
          "error",
          "Invalid Email address",
          "User with email does not exist"
        );

        console.log("error :>> ", error.response.data.message);
      });
  };

  return (
    <div className="nk-app-root">
      <div>
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
                    title={"Password Reset Link"}
                    subtitle={""}
                    body={
                      "If there's an account associated with this email address, we'll send the password reset instructions."
                    }
                  />
                ) : (
                  <div className="card card-bordered">
                    <div className="card-inner card-inner-lg">
                      <div className="nk-block-head">
                        <div className="nk-block-head-content">
                          <div className="nk-block-des">
                            <p className="text-uppercase">
                              Request Password Reset
                            </p>
                          </div>
                        </div>
                      </div>

                      <form>
                        <TextInput
                          placeholder={"Enter your email address"}
                          inputname={"email"}
                          inputtype={"email"}
                          value={email}
                          onValueChange={handleInputChange}
                        />
                        <div className="form-group">
                          <button
                            className="btn btn-lg btn-primary btn-block"
                            disabled={!submitButton}
                            onClick={handleSubmit}
                          >
                            Send Reset Link
                          </button>
                        </div>
                      </form>

                      <div className="form-note-s2 text-center pt-4">
                        <a href={`/login`}>
                          <strong>Return to Login</strong>
                        </a>
                      </div>
                      <div>
                        <p className="card-description nk-block-des mb-5 mt-2 text-center">
                          Need help signing in?
                          <a
                            href="/support-center"
                            style={{
                              color: "#810020",
                              cursor: "pointer",
                              marginLeft: "3px",
                            }}
                          >
                            {""}Contact Us
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
            )}
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

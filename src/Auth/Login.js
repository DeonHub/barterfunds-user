import React, { useState, useEffect } from "react";
import "./Auth.css";
import TextInput from "../components/TextInput";
import axios from "axios";
import openNotification from "../components/OpenNotification";
import FailedLogin from "./FailedLogin";
import Loader from "../components/Loader";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const storedData = JSON.parse(localStorage.getItem("loginData")) || {};
  const initialDeadline = storedData.deadline || Date.now() + 1000 * 60 * 5;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("This is a required field");
  const [showFailedLogin, setShowFailedLogin] = useState(storedData.showFailedLogin || false);
  const [failedLoginAttempts, setFailedLoginAttempts] = useState(storedData.failedLoginAttempts || 0);
  const [deadline, setDeadline] = useState(initialDeadline);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Login | BarterFunds";
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

    if (failedLoginAttempts >= 5) {
      const countdownTimer = setInterval(() => {
        const currentTime = Date.now();
        if (currentTime >= deadline) {
          clearInterval(countdownTimer);
          setFailedLoginAttempts(0);
          setShowFailedLogin(false);
          setDeadline(0);
          localStorage.removeItem("loginData");
        }
      }, 1000);
      return () => clearInterval(countdownTimer);
    }
  }, [failedLoginAttempts, deadline, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
      setErrorEmail(false);
    } else if (name === "password") {
      setPassword(value);
      setErrorPassword(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    

    window.sessionStorage.clear();
    window.localStorage.clear();

    setErrorEmail(email.length === 0);
    setErrorPassword(password.length === 0);
    setErrorMessage(email.length === 0 || password.length === 0 ? "This is a required field" : "");

    if (email.length !== 0 && password.length !== 0) {
      const body = { email, password };
      setIsLoading(true);
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/login`, body, { credentials: 'include' }, { headers: {
          'Content-Type': 'application/json',
        },})
        .then((response) => {
          if (response.data.success) {

            let token = response.data.token;

            window.sessionStorage.setItem("token", token);
            window.sessionStorage.setItem("email", email);
            // dispatch(setUser(response.data.user));

            setIsLoading(false);

            openNotification("topRight", "success", "Success", "Login Successful");


            setTimeout(() => {
              navigate(`/login/mfa`);
            }, 1000);
          }
        })
        .catch((error) => {
          setIsLoading(false);
          openNotification("topRight", "error", "Login Error", error.response.data.message);
          setEmail("");
          setPassword("");

          const updatedFailedLoginAttempts = failedLoginAttempts + 1;
          setFailedLoginAttempts(updatedFailedLoginAttempts);

          if (updatedFailedLoginAttempts >= 5) {
            localStorage.setItem(
              "loginData",
              JSON.stringify({
                failedLoginAttempts: updatedFailedLoginAttempts,
                deadline: deadline,
                showFailedLogin: true,
              })
            );
            setShowFailedLogin(true);
            return;
          }

          console.log("error :>> ", error.response.data.message);
        });
    }
  };

  return (
    <div className="nk-app-root">
      {isLoading && <Loader />}

      {showFailedLogin ? (
        <FailedLogin deadline={deadline} />
      ) : (
        <div>
          <div className="nk-main">
            <div className="nk-wrap nk-wrap-nosidebar">
              <div className="nk-content">
                <div className="nk-block nk-block-middle nk-auth-body wide-xs">
                  <div className="brand-logo pb-4 text-center">
                    <a href={`/`} className="logo-link">
                      <img className="logo-dark logo-img logo-img-lg" src="/assets/images/barterfunds-logo.png" alt="logo" />
                    </a>
                  </div>

                  <div className="card card-bordered">
                    <div className="card-inner card-inner-lg">
                      <div className="nk-block-head">
                        <div className="nk-block-head-content">
                          <h4 className="nk-block-title nk-block-des">Sign-In</h4>
                          <div className="nk-block-des">
                            <p>Sign in using your email address and password.</p>
                          </div>
                        </div>
                      </div>
                      <form>
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
                          showForgotPassword
                          showEye
                          required
                        />

                        <div className="form-group">
                          <button onClick={handleSubmit} className="btn btn-lg btn-primary btn-block">
                            Sign in
                          </button>
                        </div>
                      </form>
                      <div className="form-note-s2 text-center pt-4">
                        New on our platform?
                        <a href={`/signup`}> Create an account</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

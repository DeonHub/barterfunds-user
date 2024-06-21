import React, { useEffect, useState } from "react";
import "./User.css";
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";
import { useUser } from "./components/UserContext";
import Loader from "../components/Loader";
import axios from "axios";
import openNotification from "../components/OpenNotification";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";

const PasswordReset = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Password Reset | BarterFunds";
    const token = window.sessionStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    setIsLoading(false);
   
  }, [navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "password") {
      setPassword(value);
    } else if (name === "confirm-password") {
      setConfirmPassword(value);
    }
  };


  const handleSubmit = (event) => {
    setIsLoading(true)
    const token = window.sessionStorage.getItem("token");
    event.preventDefault();
    let body = {
      password
    };

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/update-password`, body,  { headers: headers })
      .then((response) => {
        if (response.data.success) {
          // setMessage('Login Successfully')
          openNotification(
            "topRight",
            "success",
            "Password Reset Successful",
            "Password Reset Successful. Please Login to continue."
          );

          window.sessionStorage.clear();
          window.localStorage.clear();

          setTimeout(() => {
            navigate(`/login`);
          }, 2000);
        }
      })
      .catch((error) => {
        openNotification(
          "topRight",
          "error",
          "Error",
          error.response.data.message
        );

        navigate(`/user/password-reset`);

        console.log("error :>> ", error.response.data.message);
      });
  };

  const passwordsMatch = password === confirmPassword && password.length >= 8;

  return (
    <div className="nk-body npc-crypto bg-white has-sidebar">
      <div className="nk-app-root">
        <div className="nk-main ">
          <UserSidebar active={"dashboard"} />

          <div className="nk-wrap ">
            <UserHeader user={user} />

            {isLoading ? (<Loader />) : (
              <>

<div className="nk-content nk-content-fluid">
              <div className="container-xl wide-lg">
                <div className="nk-content-body">
                  <div className="nk-block">
                    <div className="card card-bordered">
                      <div className="card-aside-wrap">
                        <div className="card-inner card-inner-lg">

                          <div className="nk-block-head nk-block-head-lg">
                            <h4>Password Reset</h4>
                          </div>
                          
                        <div className="row">
                          <div className="col-md-6">
                          <TextInput
                              placeholder={"Enter your password"}
                              label={"Password"}
                              inputname={"password"}
                              inputtype={"password"}
                              value={password}
                              onValueChange={handleInputChange}
                              showTooltip
                              toolTipMessage={"Password must be 8 characters minimum"}
                              showEye
                            />
                          </div>
                          <div className="col-md-6">
                          <TextInput
                              placeholder={"Confirm your password"}
                              label={"Confirm Password"}
                              inputname={"confirm-password"}
                              inputtype={"password"}
                              value={confirmPassword}
                              onValueChange={handleInputChange}
                              // showEye
                              // showTooltip
                              // toolTipMessage={"Password must match"}
                            />
                          </div>
                          

                          </div>
                        
                          <div className="col-12 mt-5">
                            <button 
                            type="button" 
                            className="btn btn-primary w-100 h-45 center" 
                            onClick={handleSubmit}
                            disabled={!passwordsMatch}>
                              Reset Password
                            </button>
                          </div>
                         
                       
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                      


        
              </>
            )}
            


            <UserFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;

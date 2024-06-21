import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import openNotification from "../components/OpenNotification";
import { useNavigate } from 'react-router-dom';
import Loader from "../components/Loader";

const TwoFactor = () => {
  const navigate = useNavigate();
  const inputsRef = useRef(null);

  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);
  const [imageSrc, setImageSrc] = useState(null);
  const [submitButton, setSubmitButton] = useState(false);
  const [userId, setUserId] = useState('');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Two Factor Authentication | BarterFunds";
    setIsLoading(true);

    const token = window.sessionStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/two-factor-auth`, { headers })
      .then((response) => {
        if (response.data.success) {
          setImageSrc(response.data.user.twoFactorAuthQrcode);
          setUserId(response.data.user._id);
          setTwoFactorAuth(response.data.user.twoFactorAuth);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log("error :>> ", error);
      });
  }, []);

  useEffect(() => {
    // Perform any actions you want when inputValues change
  }, [inputValues]);

  const handleScan = () => {
    const token = window.sessionStorage.getItem("token");
    const headers = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const body = JSON.stringify({
      twoFactorAuth: "true",
    });

    axios
      .patch(`${process.env.REACT_APP_API_URL}/users/${userId}`, body, { headers })
      .then((response) => {
        // setGlobalState((prevState) => ({
        //   ...prevState,
        //   user: response.data.user,
        // }));
        console.log("response :>> ", response);
      })
      .catch((error) => {
        console.log("error :>> ", error);
      });
  };

  const handleInputChange = (index, value) => {
    const sanitizedValue = value.replace(/[^0-9]/g, '');
    const newInputValues = [...inputValues];
    newInputValues[index] = sanitizedValue;
    setInputValues(newInputValues);

    const allFieldsFilled = newInputValues.every((value) => value !== "");
    setSubmitButton(allFieldsFilled);

    if (sanitizedValue && index < 5) {
      focusNextInput(index + 1);
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && index > 0 && !event.target.value) {
      handleInputChange(index, "");
      focusPrevInput(index - 1);
    }
  };

  const handlePaste = (event, index) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text");
    if (/^\d{6}$/.test(pasteData)) {
      const newInputValues = [...inputValues];
      pasteData.split("").forEach((char, i) => {
        newInputValues[index + i] = char;
      });
      setInputValues(newInputValues);
    }
  };

  const focusNextInput = (index) => {
    const inputs = inputsRef.current.querySelectorAll(".input-section input");
    if (index < inputs.length) {
      inputs[index].focus();
    }
  };

  const focusPrevInput = (index) => {
    const inputs = inputsRef.current.querySelectorAll(".input-section input");
    if (index >= 0) {
      inputs[index].focus();
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const otp = inputValues.join("");

    const token = window.sessionStorage.getItem("token");
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    axios.get(`${process.env.REACT_APP_API_URL}/auth/verify-otp/${otp}`, { headers })
      .then((response) => {
        if (response.data.success) {
          setIsLoading(false);
          openNotification('topRight', 'success', 'Success', 'Verification Successful');

          setTimeout(() => {
            navigate(`/user/dashboard`);
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        openNotification('topRight', 'error', 'Invalid OTP', error.response.data.message);

        setInputValues(["", "", "", "", "", ""]);
        setSubmitButton(false);
      });
  };

  return (
    <div className="nk-app-root">
      <div className="nk-main">
        <div className="nk-wrap nk-wrap-nosidebar">
          {isLoading ? (<Loader />) : (
             <div className="nk-content">
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
               <div className="card card-bordered">
                 <div className="card-inner card-inner-lg">
                   <div className="nk-block-head">
                     <div className="nk-block-head-content">
                       <div className="nk-block-des" style={{ marginBottom: "-5%", textAlign: "center" }}>
                         {twoFactorAuth ? (
                           <p>
                             Enter the 6-digit verification code generated by your authenticator app
                           </p>
                         ) : (
                           <p>
                             Open your authenticator app (e.g., Google Authenticator, Authy) and scan the QR code below.
                             This will add a new account to your authenticator app.
                           </p>
                         )}
                       </div>
                     </div>
                   </div>
 
                   {twoFactorAuth ? (
                     <div>
                       <div>
                         <div
                           className="input-container mb-4"
                           ref={inputsRef}
                           style={{
                             display: "flex",
                             justifyContent: "space-between",
                             textAlign: "center"
                           }}
                         >
                           {inputValues.map((value, index) => (
                             <div
                               className="input-section"
                               key={index}
                               style={{ flex: 1, marginRight: "10px" }}
                             >
                               <input
                                 type="text"
                                 maxLength="1"
                                 placeholder="x"
                                 value={value}
                                 onChange={(e) => handleInputChange(index, e.target.value)}
                                 onKeyDown={(e) => handleKeyDown(e, index)}
                                 onPaste={(e) => handlePaste(e, index)}
                                 style={{
                                   width: "calc(100% - 10px)",
                                   padding: "10px",
                                   border: "1px solid #ccc",
                                   borderRadius: "5px",
                                   fontSize: "16px",
                                   textAlign: "center",
                                   marginTop: "20px",
                                 }}
                               />
                             </div>
                           ))}
                         </div>
                       </div>
 
                       <button
                         onClick={handleSubmit}
                         className="btn btn-lg btn-primary btn-block"
                         disabled={!submitButton}
                       >
                         Submit
                       </button>
                     </div>
                   ) : (
                     <div>
                       <div className="card mt-0">
                         <img className="card-image" src={imageSrc} alt="QR Code" />
                         <p className="card-description nk-block-des">
                           Click on{" "}
                           <span
                             style={{
                               color: "#810020",
                               fontWeight: "bold",
                               cursor: "pointer",
                             }}
                             onClick={handleScan}
                           >
                             NEXT
                           </span>{" "}
                           below once you are done scanning.
                         </p>
                       </div>
 
                       <button
                         onClick={handleScan}
                         className="btn btn-lg btn-primary btn-block mt-3"
                       >
                         Next
                       </button>
                     </div>
                   )}
 
                   <div className="form-group mt-3"></div>
                 </div>
               </div>
             </div>
 
             <div>
               <p className="card-description nk-block-des mb-5 mt-2 text-center">
                 Need help signing in?
                 <a href="mailto:barterfunds@gmail.com"
                   style={{
                     color: "#810020",
                     cursor: "pointer",
                     marginLeft: "3px"
                   }}
                 >
                   Contact Us
                 </a>
               </p>
             </div>
           </div>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default TwoFactor;

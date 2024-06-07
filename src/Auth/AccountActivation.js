import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AccountActivation = () => {
  const { activationToken } = useParams();
  const [success, setSuccess] = useState(false);

  useEffect(() => {

      let body = {
        activationToken
      }
      
      axios.post(`${process.env.REACT_APP_API_URL}/auth/account-activation`, body)
      .then((response) => {
        if (response.data.success) {
          setSuccess(true);
        }
      })
      .catch((error) => {
        setSuccess(false);

        console.log("error :>> ", error.response.data.message);
      });
  }, [activationToken]);

  return (
    <div className="nk-app-root">
      {success ? (
        <div className="nk-main text-center">
          <div className="nk-wrap nk-wrap-nosidebar">
            <div className="nk-content ">
              <div className="nk-block nk-block-middle nk-auth-body">
                <div className="brand-logo pb-4 text-center">
                  <a href={`/`} className="logo-link">
                    <img
                      className="logo-dark logo-img logo-img-lg"
                      src="/assets/images/barterfunds-logo.png"
                      alt="logo"
                    />
                  </a>
                </div>

                <div className="nk-block-head text-center">
                  <div className="nk-block-head-content  text-success">
                    <h4 className="nk-block-title mb-3">
                      🎉 Congratulations! 🎉
                    </h4>
                    <h6>Your account has been successfully activated.</h6>
                    <div className="nk-block-des">
                      <p>
                        You can now{" "}
                        <a href={`/login`}>Login</a>{" "}
                        and start using our services.
                      </p>
                      <p>Thank you for choosing BarterFunds.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default AccountActivation;

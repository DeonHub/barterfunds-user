import React, { useState, useEffect } from "react";
import "./User.css";
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";
import FileUpload from "./components/FileUpload";
import Loader from "../components/Loader";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import openNotification from "../components/OpenNotification";

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();

  const [formStage, setFormStage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [usdAmount, setUsdAmount] = useState("");
  const [ghsAmount, setGhsAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [selectedProof, setSelectedProof] = useState('');
  const [submitButton, setSubmitButton] = useState(false);

  useEffect(() => {
    const reference = searchParams.get("reference");
    // const reference = 1234567890;

    const secret_key = process.env.REACT_APP_TEST_SECRET_KEY;
    const token = window.sessionStorage.getItem("token");

    const payment_headers = {
      Authorization: `Bearer ${secret_key}`,
    };

    const transaction_headers = {
      Authorization: `Bearer ${token}`,
    };

    const transaction_body = {
      paymentSuccess: true
    }

    axios
      .get(`https://api.paystack.co/transaction/verify/${reference}`, {
        headers: payment_headers,
      })
      .then((response) => {
        if (response.data.status) {
        // console.log(response.data.data)
  
      axios
      .patch(`${process.env.REACT_APP_API_URL}/orders/x/${reference}`, transaction_body, { headers: transaction_headers})
        .then((response) => {
          if (response.data.success) {
           
            setGhsAmount(response.data.order.amountGhs)
            setUsdAmount(response.data.order.amountUsd)
            setTransactionId(response.data.order.transactionId)

            openNotification(
              "topRight",
              "success",
              "Payment successful",
              "Payment is successful. Your wallet will soon be credited."
            );
            
            setSuccess(true);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          openNotification(
            "topRight",
            "error",
            "Error",
            error.response.data.message
          );
          
          console.log("error :>> ", error.response.data.message);
        });

          setSuccess(true);
          setIsLoading(false);

        }
      })
      .catch((error) => {
        openNotification(
          "topRight",
          "error",
          "Error",
          error.response.data.message
        );
        setSuccess(false);
        setIsLoading(false)

        console.log("error :>> ", error);
      });

      
  }, [searchParams]);

  const nextFormStage = () => {
    setFormStage(formStage + 1);
  };

  const previousFormStage = () => {
    setFormStage(formStage - 1);
  };

  function formatCurrency(value) {
    const number = Number(value);

    if (!Number.isFinite(number)) {
      return "Invalid number";
    }

    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const handleOk = () => {
    setIsLoading(true);
    const body = new FormData();
    const token = window.sessionStorage.getItem("token");

    const headers = {
        Authorization: `Bearer ${token}`,
      };


      body.append('paymentProof', selectedProof);

      axios
      .patch(`${process.env.REACT_APP_API_URL}/transactions/${transactionId}`, body, { headers: headers })
      .then((updateResult) => {
        
        if (updateResult.data.success) {
          openNotification(
            "topRight",
            "success",
            "Success",
            "Payment Proof uploaded successfully"
          );

          setTimeout(() => {
            window.location.href = `/user/transactions`;
          }, 1000);
        } else {
          openNotification(
            "topRight",
            "error",
            "Error",
            "Failed to upload payment proof"
          );
        }
      })
      .catch((updateError) => {
        openNotification(
          "topRight",
          "error",
          "Error",
          "Failed to upload payment proof"
        );
        console.log("cannot update transaction id")
      });  

  };

  return (
    <div className="nk-body npc-crypto bg-white has-sidebar">
      <div className="nk-app-root">
        <div className="nk-main ">
          <UserSidebar active={"transactions"} />
          <div className="nk-wrap ">
            <UserHeader />

            {isLoading ? (
              <Loader />
            ) : (
              <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg my-5">
                  <div className="nk-content-body">
                    <div className="buysell wide-xs m-auto">
                      {formStage === 1 && (
                        <div
                          className={`form-stage ${
                            formStage === 1 ? "visible" : ""
                          }`}
                          id="stage1"
                        >
                          {success ? (
                            <div className="nk-modal text-center">
                              <em className="nk-modal-icon icon icon-circle icon-circle-xxl la la-check bg-success" />
                              <h4 className="nk-modal-title">
                                Payment made successfully!
                              </h4>
                              <div className="nk-modal-text">
                                <p className="caption-text">
                                  You’ve successfully made deposit of
                                  <b> {formatCurrency(ghsAmount)} GHS / {formatCurrency(usdAmount)} USD </b>  to your wallet.
                                </p>
                                <p className="sub-text-sm">
                                  Your wallet will soon be credited. If you have any questions or issues, please 
                                  <a href={"/"}> Contact Us</a>
                                </p>
                              </div>
                              <div className="nk-modal-action-lg">
                                <ul className="btn-group gx-4">
                                  <li>
                                    <a href={`/user/wallet`}>
                                    <button
                                      type="button"
                                      className="btn btn-lg btn-mw btn-primary"
                                    >
                                      Check Order Status
                                    </button>
                                    </a>
                                    
                                  </li>
                                </ul>
                              </div>
                            </div>
                          ) : (
                            <div className="nk-modal text-center">
                              <em className="nk-modal-icon icon icon-circle icon-circle-xxl la la-times-circle bg-danger" />
                              <h4 className="nk-modal-title">
                                Payment Failed!
                              </h4>
                              <div className="nk-modal-text">
                                <p className="caption-text">
                                  Your payment was not successful. Please try it
                                  again.
                                </p>
                                <p className="sub-text-sm">
                                  If you have any questions or issues, please contact
                                  support.
                                </p>
                              </div>
                              <div className="nk-modal-action-lg">
                                <ul className="btn-group gx-4">
                                  <li>
                                    <a
                                      href="mailto:support@barterfunds.com"
                                      className="btn btn-lg btn-mw btn-primary"
                                      onClick={nextFormStage}
                                    >
                                      Contact Support
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}

                          <br />
                          <div className="text-center w-100">
                            <p>
                              Earn up to GHS 100 for each friend your refer!
                              <a href={"/"}> Invite friends</a>
                            </p>
                          </div>
                        </div>
                      )}

                      {formStage === 2 && (
                        <div
                          className={`form-stage ${
                            formStage === 2 ? "visible" : ""
                          }`}
                          id="stage2"
                        >
                          <div className="buysell-field form-group">
                            <div className="form-navigation">
                              <label type="button" onClick={previousFormStage}>
                                <i className="icon la la-arrow-left" />
                              </label>
                            </div>

                            <div className="text-center">
                              <p>
                                Please upload a screenshot proof of your
                                payment. If you don't have the screenshot now,
                                you can go to your orders page and upload it
                                later.
                              </p>
                            </div>
                          </div>
                          <div className="buysell-field form-group">
                            <FileUpload name={"screenshot"} id={"screenshot"} setSelectedProof={setSelectedProof} setSubmitButton={setSubmitButton} />
                          </div>

                          <div className="form-navigation">
                          <button
                             type="button"
                             className="btn btn-lg btn-block btn-primary"
                             onClick={handleOk}
                             disabled={!submitButton}
                         >
                             Submit Screenshot
                         </button>
                          </div>

                          <div className="text-center my-3">
                            <a href={`/user/wallet`}>
                              I will upload later
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <UserFooter />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;

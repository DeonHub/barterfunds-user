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

const TransactionSuccess = ({ globalState, ...props }) => {
  const [searchParams] = useSearchParams();

  const [formStage, setFormStage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [usdAmount, setUsdAmount] = useState("");
  const [ghsAmount, setGhsAmount] = useState("");
  const [currency, setCurrency] = useState("Bitcoin (BTC)");

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
      status: 'pending',
      payment_success: true,
      action: 'Pending confirmation from Admin'
    }

    axios
      .get(`https://api.paystack.co/transaction/verify/${reference}`, {
        headers: payment_headers,
      })
      .then((response) => {
        if (response.data.status) {
        // console.log(response.data.data)
  
      axios
      .patch(`${process.env.REACT_APP_API_URL}/transactions/x/${reference}`, transaction_body, { headers: transaction_headers})
        .then((response) => {
          if (response.data.success) {
           
            setGhsAmount(response.data.transaction.amountGhs)
            setUsdAmount(response.data.transaction.amountUsd)
            setCurrency(response.data.transaction.currencyId.currencyName)

            openNotification(
              "topRight",
              "success",
              "Success",
              "Payment successful. Pending confirmation from Admin."
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
                                  You’ve successfully bought
                                  <strong> {formatCurrency(usdAmount)} </strong>
                                  USD of {currency} for <strong>{formatCurrency(ghsAmount)} </strong> GHS.
                                </p>
                                <p className="sub-text-sm">
                                  You can check your order status here.
                                  <a href={"/"}> Click here</a>
                                </p>
                              </div>
                              <div className="nk-modal-action-lg">
                                <ul className="btn-group gx-4">
                                  <li>
                                    <button
                                      type="button"
                                      className="btn btn-lg btn-mw btn-primary"
                                      onClick={nextFormStage}
                                    >
                                      Upload Payment Screenshot
                                    </button>
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
                              Earn upto GHS 100 for each friend your refer!
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
                            <FileUpload name={"screenshot"} id={"screenshot"} />
                          </div>

                          <div className="form-navigation">
                            <button
                              type="button"
                              className="btn btn-lg btn-block btn-primary"
                            >
                              Submit Screenshot
                            </button>
                          </div>

                          <div className="text-center my-3">
                            <a href={`/user/orders`}>
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

export default TransactionSuccess;

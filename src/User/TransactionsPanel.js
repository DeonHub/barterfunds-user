import React, { useState, useEffect } from "react";
import "./User.css";
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";
import { withGlobalState } from "../withGlobalState";
import BuyPanel from "./BuyPanel";
import SellPanel from "./SellPanel";
import { currencies } from "./components/data";
import SendPanel from "./SendPanel";
import ReceivePanel from "./ReceivePanel";
import { user } from "./components/data";
import { Button, Result } from "antd";
import Loader from "../components/Loader";
import axios from "axios";

const TransactionsPanel = ({ globalState, ...props }) => {
  const [action, setAction] = useState("buy");
  const [formStage, setFormStage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  // const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    document.title = "Transactions Panel | BarterFunds";
    const token = window.sessionStorage.getItem("token");
    const headers = {
          Authorization: `Bearer ${token}`,
        };

    // axios
    //   .get(`${process.env.REACT_APP_API_URL}/currencies`, { headers: headers })
    //   .then((response) => {
    //     if (response.data.success) {
    //       setCurrencies(response.data.currencies);
    //       setIsLoading(false);
    //     } else {
    //       setCurrencies([]);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    
  },[])

  const receiveDataFromChild = (data) => {
    setFormStage(data);
  };

  const handleNavigationClick = (clickedAction) => {
    setAction(clickedAction);
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

{isLoading ? (<Loader />) : (            <div className="nk-content nk-content-fluid">
              <div className="container-xl wide-lg">
                <div className="nk-content-body">
                  {user.kycApproved ? (
                    <div className="buysell wide-xs m-auto">
                      {formStage === 1 && (
                        <div className="navigation">
                          <a
                            href="javascript:void(0);"
                            className={action === "buy" ? "active" : ""}
                            onClick={() => handleNavigationClick("buy")}
                          >
                            BUY
                          </a>
                          <a
                            href="javascript:void(0);"
                            className={action === "sell" ? "active" : ""}
                            onClick={() => handleNavigationClick("sell")}
                          >
                            SELL
                          </a>
                          <a
                            href="javascript:void(0);"
                            className={action === "send" ? "active" : ""}
                            onClick={() => handleNavigationClick("send")}
                          >
                            SEND
                          </a>
                          <a
                            href="javascript:void(0);"
                            className={action === "receive" ? "active" : ""}
                            onClick={() => handleNavigationClick("receive")}
                          >
                            RECEIVE
                          </a>
                        </div>
                      )}

                      {action === "buy" && (
                        <BuyPanel
                          currencies={currencies}
                          sendDataToParent={receiveDataFromChild}
                          formatCurrency={formatCurrency}
                          setIsLoading={setIsLoading}
                        />
                      )}
                      {action === "sell" && (
                        <SellPanel
                          currencies={currencies}
                          sendDataToParent={receiveDataFromChild}
                          formatCurrency={formatCurrency}
                          setIsLoading={setIsLoading}
                        />
                      )}
                      {action === "send" && (
                        <SendPanel
                        currencies={currencies}
                        sendDataToParent={receiveDataFromChild}
                        formatCurrency={formatCurrency}
                        setIsLoading={setIsLoading}
                        />
                      )}
                      {action === "receive" && (
                        <ReceivePanel
                        currencies={currencies}
                        sendDataToParent={receiveDataFromChild}
                        formatCurrency={formatCurrency}
                        setIsLoading={setIsLoading}
                        />
                      )}
                    </div>
                  ) : (
                    <Result
                      status="403"
                      title="Verify Your Identity (KYC)"
                      subTitle="Complete your KYC verification to make transactions. If you have already submitted, please check on the progress or contact our support for help"
                      extra={[
                        <Button
                          href={`${process.env.REACT_APP_PUBLIC_URL}/user/kycs`}
                          type="primary"
                        >
                          Verify Identity
                        </Button>,
                        <Button
                          href="mailto:support@barterfunds.com"
                          type="default"
                        >
                          Contact Support
                        </Button>,
                      ]}
                    />
                  )}
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

export default TransactionsPanel;

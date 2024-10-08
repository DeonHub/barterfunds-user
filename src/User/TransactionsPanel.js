import React, { useState, useEffect } from "react";
import "./User.css";
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";
import BuyPanel from "./BuyPanel";
import SellPanel from "./SellPanel";

import SendPanel from "./SendPanel";
import ReceivePanel from "./ReceivePanel";
// import { user } from "./components/data";
import { Button, Result } from "antd";
import Loader from "../components/Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "./components/UserContext";


const TransactionsPanel = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [action, setAction] = useState("buy");
  const [formStage, setFormStage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [currencies, setCurrencies] = useState([]);
  const [wallet, setWallet] = useState({});


  useEffect(() => {
    document.title = "Transactions Panel | BarterFunds";
    const token = window.sessionStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${process.env.REACT_APP_API_URL}/wallets/x/user`, {
        headers: headers,
      })

      .then((response) => {
        if (response.data.success) {
          // console.log(response.data.wallet);
          setWallet(response.data.wallet);
        } else {
          setWallet({});
        }
      })
      .catch((error) => {
        console.log(error);
      });
    
  }, []);

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");

    if (!token || user === null) {
      navigate("/login");
      return;
    }

    const headers = {
          Authorization: `Bearer ${token}`,
        };

    axios
      .get(`${process.env.REACT_APP_API_URL}/currencies`, { headers: headers })
      .then((response) => {
        if (response.data.success) {
          const activeCurrencies = response.data.currencies.filter(currency => currency.status === 'active');
          setCurrencies(activeCurrencies);
          setIsLoading(false);
        } else {
          setCurrencies([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    
  },[navigate, user])


  

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
                          <span
                            
                            className={action === "buy" ? "active" : ""}
                            onClick={() => handleNavigationClick("buy")}
                          >
                            BUY
                          </span>
                          <span
                            
                            className={action === "sell" ? "active" : ""}
                            onClick={() => handleNavigationClick("sell")}
                          >
                            SELL
                          </span>
                          <span
                            
                            className={action === "send" ? "active" : ""}
                            onClick={() => handleNavigationClick("send")}
                          >
                            SEND
                          </span>
                          <span
                            
                            className={action === "receive" ? "active" : ""}
                            onClick={() => handleNavigationClick("receive")}
                          >
                            RECEIVE
                          </span>
                        </div>
                      )}

                      {action === "buy" && (
                        <BuyPanel
                          currencies={currencies}
                          sendDataToParent={receiveDataFromChild}
                          formatCurrency={formatCurrency}
                          setIsLoading={setIsLoading}
                          wallet={wallet}
                        />
                      )}
                      {action === "sell" && (
                        <SellPanel
                          currencies={currencies}
                          sendDataToParent={receiveDataFromChild}
                          formatCurrency={formatCurrency}
                          setIsLoading={setIsLoading}
                          wallet={wallet}
                        />
                      )}
                      {action === "send" && (
                        <SendPanel
                        currencies={currencies}
                        sendDataToParent={receiveDataFromChild}
                        formatCurrency={formatCurrency}
                        setIsLoading={setIsLoading}
                        wallet={wallet}
                        />
                      )}
                      {action === "receive" && (
                        <ReceivePanel
                        currencies={currencies}
                        sendDataToParent={receiveDataFromChild}
                        formatCurrency={formatCurrency}
                        setIsLoading={setIsLoading}
                        wallet={wallet}
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
                          className="btn btn-sm btn-primary"
                          href={`/user/kycs`}
                          
                        >
                          Verify Identity
                        </Button>,
                        <Button
                          href="/support-center"
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

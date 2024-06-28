import React, { useEffect, useState } from "react";
import "./User.css";
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";

import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
// import { useSelector } from "react-redux";
import UserWelcome from "./UserWelcome";
import { useUser } from "./components/UserContext";
import openNotification from "../components/OpenNotification";
import OrdersModal from "./components/OrdersModal";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [currencies, setCurrencies] = useState([]);
  const [wallet, setWallet] = useState({});
  const [referrals, setReferrals] = useState(0);

  const { user } = useUser();

  useEffect(() => {
    setIsLoading(true);
    document.title = "User Dashboard  | BarterFunds";
    const token = window.sessionStorage.getItem("token");
    
    if (!token) {
      navigate("/login");
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${process.env.REACT_APP_API_URL}/dashboard/user`, {
        headers: headers,
      })

      .then((response) => {
        if (response.data.success) {
          setCurrencies(response.data.info.currencies);

          setReferrals(response.data.info.referrals);
          setWallet(response.data.info.wallet);

          setIsLoading(false);
        } else {
          setCurrencies([]);
          setWallet({});
          setReferrals(0);
        }
      })
      .catch((error) => {
        console.log(error);
      });


    setIsLoading(false);

    
  }, [navigate, user]);

  const formatCurrency = (value) => {
    const number = Number(value);

    if (!Number.isFinite(number)) {
      return "Invalid number";
    }

    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const copyText = () => {

    var text = document.getElementById("usdt-address-input");
    text.select();
 
    navigator.clipboard.writeText(text.value);
    openNotification(
      "topRight",
      "success",
      "Referral link copied",
      ""
    );
}

  return (
    
    isLoading ? (
      <Loader />
    ) : 
    (<> 
    <div className="nk-body npc-crypto bg-white has-sidebar">
      <div className="nk-app-root">

        <div className="nk-main ">
          
          <UserSidebar active={"dashboard"} />


          <div className="nk-wrap ">
            <UserHeader />

            
            
            {!user.verified ||
            !user.twoFactorAuth ||
            !user.kycApproved ||
            !user.addedPaymentMethod ? (
              <UserWelcome user={user} />
            ) : (
            // {wallet && wallet._id && ()}
            <>
            {wallet && wallet._id && (
            <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                  <div className="nk-content-body">
                    <div className="nk-block">
                      <div className="row gy-gs">
                      
                        <div className="col-lg-5 col-xl-4">
                          <div className="nk-block">
                            <div className="nk-block-head-xs">
                              <div className="nk-block-head-content">
                                <h5 className="nk-block-title title">
                                  Overview
                                </h5>
                              </div>
                            </div>

                            
                            <div className="nk-block">

                               <div className="card card-bordered text-light is-dark h-100">
                                <div className="card-inner">
                                  <div className="nk-wg7">
                                    <div className="nk-wg7-stats">
                                      <div className="nk-wg7-title">
                                        Barter Wallet Balance
                                      </div>
                                      <div className="number-lg amount">
                                        GHS {formatCurrency(wallet.balanceGhs || 0)}
                                      </div>
                                    </div>
                                    <div className="user-account-actions">
                                      <ul className="g-1">
                                        <li>

                                          <OrdersModal
                                          text={"Deposit"}
                                          
                                          title={"Deposit Form"}
                                          action={"deposit"}
                                          buttonText={"Proceed to Payment"}
                                          topText={
                                            "Enter amount you want to deposit into your wallet."
                                          }
                                          isButton={true}
                                          claxx={"btn btn-lg btn-primary text-center"}
                                          walletId={wallet._id}
                                          setIsLoading={setIsLoading}
                                        />
                                        </li>
                                        <li>
                                          

                                          <OrdersModal
                                    text={"Withdraw"}
                                    title={"Withdrawal Form"}
                                    action={"withdraw"}
                                    buttonText={"Submit for Processing"}
                                    topText={
                                      "Enter amount you want to withdraw from your wallet (GHS)."
                                    }
                                    isButton={true}
                                    claxx={"btn btn-lg btn-primary"}
                                    walletId={wallet._id}
                                    setIsLoading={setIsLoading}
                                  />
                                        </li>
                                      </ul>
                                      <br></br>
                                      <div>
                                        <a href="/user/transactions-panel"
                                          
                                          className="btn btn-lg btn-primary"
                                        >
                                          <span>Exchange</span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> 
                            </div>
                            
                            

                          </div>
                        </div>

                        <div className="col-lg-7 col-xl-8">
                          <div className="nk-block">
                            <div className="nk-block-head-xs">
                              <div className="nk-block-between-md g-2">
                                <div className="nk-block-head-content">
                                  <h5 className="nk-block-title title">
                                    Currencies
                                  </h5>
                                </div>
                              </div>
                            </div>

                            <div className="row g-2">
                              {currencies.map((currency) => {
                                return(
                                  <div className="col-sm-4">
                                <div className="card bg-light">
                                  <div className="nk-wgw sm">
                                    <a
                                      className="nk-wgw-inner"
                                      href="/user/transactions-panel"
                                    >
                                      <div className="nk-wgw-name">
                                        <div className="nk-wgw-icon">
                                          <img
                                            src={currency.currencyLogo}
                                            alt={currency.currencyName}
                                          />
                                        </div>
                                        <h5 className="nk-wgw-title title">
                                        {currency.currencyName}
                                        </h5>
                                      </div>
                                      <div className="nk-wgw-balance">
                                        <div className="text-black" style={{ fontSize: "14px"}}>
                                         1 USD = {formatCurrency(currency.exchangeRate)} GHS
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                                )

                              })}
                              
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="nk-block">
                          <div className="card card-bordered">
                            <div className="nk-refwg">
                              <div className="nk-refwg-invite card-inner">
                                <div className="nk-refwg-head g-3">
                                  <div className="nk-refwg-title">
                                    <h5 className="title">
                                      Refer Us &amp; Earn
                                    </h5>
                                    <div className="title-sub">
                                      Use the below link to invite your friends.
                                    </div>
                                  </div>
                                  <div className="nk-refwg-action">
                                    <span className="btn btn-primary" onClick={copyText}
                                      >
                                      Invite
                                    </span>
                                  </div>
                                </div>
                                <div className="nk-refwg-url">
                                  <div className="form-control-wrap">
                                    <div
                                      className="form-clip clipboard-init"
                                      onClick={copyText}
                                      style={{
                                        cursor: "pointer"
                                      }}
                                      
                                    >
                                      <span className="clipboard-text">
                                        Copy Link
                                      </span>
                                    </div>
                                    <div className="form-icon" />
                                    <input
                                      type="text"
                                      className="form-control copy-text"
                                      
                                      id="usdt-address-input"
                                      defaultValue={`${process.env.REACT_APP_PUBLIC_URL}/signup/?ref=${user.referralCode}`}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="nk-refwg-stats card-inner bg-lighter">
                                <div className="nk-refwg-group g-3">
                                  <div className="nk-refwg-name">
                                    <h6 className="title">My Referrals</h6>
                                  </div>
                                  <div className="nk-refwg-info g-3 mt-4">
                                    <div className="nk-refwg-sub">
                                      <div className="title">{referrals}</div>
                                      <div className="sub-text">
                                        Total Joined
                                      </div>
                                    </div>
                                    
                                    <div className="nk-refwg-sub">
                                      <div className="title">0</div>
                                      <div className="sub-text">
                                        Referral Earn
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            </>
              
            )}
            

            {/* this content */}
            

            <UserFooter />
          </div>
        </div>


      </div>
    </div>
    </>)
  );
};

export default UserDashboard;

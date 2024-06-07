import React, { useEffect, useState } from "react";
import "./User.css";
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";

import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
// import axios from "axios";
import { useSelector } from "react-redux";
import UserWelcome from "./UserWelcome";


const UserDashboard = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    document.title = "User Dashboard  | BarterFunds";
    const token = window.sessionStorage.getItem("token");
    

    if (!token || !user) {
      navigate("/login");
      return;
    }
    setIsLoading(false);

    // const headers = {
    //   Authorization: `Bearer ${token}`,
    // };

    // const body = {
    //   token,
    // };

    // console.log(body)


    // axios
    //   .post(`${process.env.REACT_APP_API_URL}/auth/get-user-from-token`, body, {
    //     headers: headers,
    //   })
    //   .then((response) => {
    //     if (response.data.success) {
    //       setUser(response.data.user);
    //       console.log(response.data.user)
    //       setIsLoading(false);

    //     } else {
    //       setUser([]);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [navigate, user]);


  return (

    <div className="nk-body npc-crypto bg-white has-sidebar">
      <div className="nk-app-root">
        <div className="nk-main ">
          <UserSidebar active={"dashboard"} />
          <div className="nk-wrap ">
            <UserHeader />

            {isLoading ? (
              <Loader />
            ) : (<> 
            {!user.verified ||
            !user.twoFactorAuth ||
            !user.kycApproved ||
            !user.addedPaymentMethod ? (
              <UserWelcome user={user} />
            ) : (
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
                                        GHS 290.00
                                      </div>
                                    </div>
                                    <div className="user-account-actions">
                                      <ul className="g-1">
                                        <li>
                                          <span
                                           
                                            className="btn btn-lg btn-primary"
                                          >
                                            <span>Deposit</span>
                                          </span>
                                        </li>
                                        <li>
                                          <span
                                           
                                            className="btn btn-lg btn-primary"
                                          >
                                            <span>Withdraw</span>
                                          </span>
                                        </li>
                                      </ul>
                                      <br></br>
                                      <div>
                                        <span
                                          
                                          className="btn btn-lg btn-primary"
                                        >
                                          <span>Exchange</span>
                                        </span>
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
                              <div className="col-sm-4">
                                <div className="card bg-light">
                                  <div className="nk-wgw sm">
                                    <a
                                      className="nk-wgw-inner"
                                      href="/frontend/user/panel/buy/btc.html"
                                    >
                                      <div className="nk-wgw-name">
                                        <div className="nk-wgw-icon">
                                          <img
                                            src="/assets/images/currency/btc.png"
                                            alt="bitcoin"
                                          />
                                        </div>
                                        <h5 className="nk-wgw-title title">
                                          Bitcoin
                                        </h5>
                                      </div>
                                      <div className="nk-wgw-balance">
                                        <div className="amount">
                                          4.434953
                                          <span className="currency currency-nio">
                                            BTC
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-4">
                                <div className="card bg-light">
                                  <div className="nk-wgw sm">
                                    <a
                                      className="nk-wgw-inner"
                                      href="/frontend/user/panel/buy/usdc.html"
                                    >
                                      <div className="nk-wgw-name">
                                        <div className="nk-wgw-icon">
                                          <img
                                            src="/assets/images/currency/usdc.png"
                                            alt="usd coin"
                                          />
                                        </div>
                                        <h5 className="nk-wgw-title title">
                                          USD Coin
                                        </h5>
                                      </div>
                                      <div className="nk-wgw-balance">
                                        <div className="amount">
                                          4.434953
                                          <span className="currency currency-nio">
                                            USDC
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-4">
                                <div className="card bg-light">
                                  <div className="nk-wgw sm">
                                    <a
                                      className="nk-wgw-inner"
                                      href="/frontend/user/panel/buy/usdt.html"
                                    >
                                      <div className="nk-wgw-name">
                                        <div className="nk-wgw-icon">
                                          <img
                                            src="/assets/images/currency/usdt.png"
                                            alt="usdt"
                                          />
                                        </div>
                                        <h5 className="nk-wgw-title title">
                                          Tether USDT
                                        </h5>
                                      </div>
                                      <div className="nk-wgw-balance">
                                        <div className="amount">
                                          4.434953
                                          <span className="currency currency-usdt">
                                            USDT
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-4">
                                <div className="card bg-light">
                                  <div className="nk-wgw sm">
                                    <a
                                      className="nk-wgw-inner"
                                      href="/frontend/user/panel/buy/eth.html"
                                    >
                                      <div className="nk-wgw-name">
                                        <div className="nk-wgw-icon">
                                          <img
                                            src="/assets/images/currency/ethereum.png"
                                            alt="ethereum"
                                          />
                                        </div>
                                        <h5 className="nk-wgw-title title">
                                          Ethereum
                                        </h5>
                                      </div>
                                      <div className="nk-wgw-balance">
                                        <div className="amount">
                                          0.000560
                                          <span className="currency currency-eth">
                                            ETH
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-4">
                                <div className="card bg-light">
                                  <div className="nk-wgw sm">
                                    <a
                                      className="nk-wgw-inner"
                                      href="/frontend/user/panel/buy/ltc.html"
                                    >
                                      <div className="nk-wgw-name">
                                        <div className="nk-wgw-icon">
                                          <img
                                            src="/assets/images/currency/litecoin.png"
                                            alt="light coin"
                                          />
                                        </div>
                                        <h5 className="nk-wgw-title title">
                                          Litecoin
                                        </h5>
                                      </div>
                                      <div className="nk-wgw-balance">
                                        <div className="amount">
                                          0.000560
                                          <span className="currency currency-ltc">
                                            LTC
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-4">
                                <div className="card bg-light">
                                  <div className="nk-wgw sm">
                                    <a
                                      className="nk-wgw-inner"
                                      href="/frontend/user/panel/buy/bch.html"
                                    >
                                      <div className="nk-wgw-name">
                                        <div className="nk-wgw-icon">
                                          <img
                                            src="/assets/images/currency/bch.png"
                                            alt="bitcoin cash"
                                          />
                                        </div>
                                        <h5 className="nk-wgw-title title">
                                          Bitcoin Cash
                                        </h5>
                                      </div>
                                      <div className="nk-wgw-balance">
                                        <div className="amount">
                                          0.000560
                                          <span className="currency currency-bch">
                                            BCH
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-4">
                                <div className="card bg-light">
                                  <div className="nk-wgw sm">
                                    <a
                                      className="nk-wgw-inner"
                                      href="/frontend/user/panel/buy/paypal.html"
                                    >
                                      <div className="nk-wgw-name">
                                        <div className="nk-wgw-icon">
                                          <img
                                            src="/assets/images/currency/paypal.png"
                                            alt="paypal"
                                          />
                                        </div>
                                        <h5 className="nk-wgw-title title">
                                          Paypal
                                        </h5>
                                      </div>
                                      <div className="nk-wgw-balance">
                                        <div className="amount">
                                          4.434953
                                          <span className="currency currency-nio">
                                            PP
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-4">
                                <div className="card bg-light">
                                  <div className="nk-wgw sm">
                                    <a
                                      className="nk-wgw-inner"
                                      href="/frontend/user/panel/buy/cny.html"
                                    >
                                      <div className="nk-wgw-name">
                                        <div className="nk-wgw-icon">
                                          <img
                                            src="/assets/images/currency/alipay.png"
                                            alt="Alipay"
                                          />
                                        </div>
                                        <h5 className="nk-wgw-title title">
                                          Yuan CNY
                                        </h5>
                                      </div>
                                      <div className="nk-wgw-balance">
                                        <div className="amount">
                                          4.434953
                                          <span className="currency currency-btc">
                                            RMB
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-4">
                                <div className="card bg-light">
                                  <div className="nk-wgw sm">
                                    <a
                                      className="nk-wgw-inner"
                                      href="/frontend/user/panel/buy/pm.html"
                                    >
                                      <div className="nk-wgw-name">
                                        <div className="nk-wgw-icon">
                                          <img
                                            src="/assets/images/currency/perfectmoney.png"
                                            alt="perfectmoney Icon"
                                          />
                                        </div>
                                        <h5 className="nk-wgw-title title">
                                          Perfect Money
                                        </h5>
                                      </div>
                                      <div className="nk-wgw-balance">
                                        <div className="amount">
                                          0.000560
                                          <span className="currency currency-eth">
                                            PM
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
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
                                    <a href="/" className="btn btn-primary">
                                      Invite
                                    </a>
                                  </div>
                                </div>
                                <div className="nk-refwg-url">
                                  <div className="form-control-wrap">
                                    <div
                                      className="form-clip clipboard-init"
                                      data-clipboard-target="#refUrl"
                                      data-success="Copied"
                                      data-text="Copy Link"
                                    >
                                      <span className="clipboard-text">
                                        Copy Link
                                      </span>
                                    </div>
                                    <div className="form-icon" />
                                    <input
                                      type="text"
                                      className="form-control copy-text"
                                      id="refUrl"
                                      defaultValue={`https://barter-funds.com/?ref=${user.referralCode}`}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="nk-refwg-stats card-inner bg-lighter">
                                <div className="nk-refwg-group g-3">
                                  <div className="nk-refwg-name">
                                    <h6 className="title">My Referrals</h6>
                                  </div>
                                  <div className="nk-refwg-info g-3">
                                    <div className="nk-refwg-sub">
                                      <div className="title">0</div>
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
            </>)}

            {/* this content */}
            

            <UserFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

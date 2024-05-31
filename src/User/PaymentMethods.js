import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './User.css'
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";

const PaymentMethods = () => {
  return (
    <div className="nk-body npc-crypto bg-white has-sidebar">
      <div className="nk-app-root">
          {/*Main Start*/}
          <div className="nk-main ">
              {/*Sidebar Start*/}
              <UserSidebar />
              {/*Sidebar End*/}
              <div className="nk-wrap ">
                  {/*Main Header Start*/}
                  <UserHeader />
                  {/*Main Header End*/}
                  {/*Content Start*/}
                  <div className="nk-content nk-content-fluid">
<div className="container-xl wide-lg">
  <div className="nk-content-body">
    <div className="nk-block">
      <div className="nk-block-head">
        <div className="nk-block-head-content">
          <h5 className="nk-block-title">Payment Methods</h5>
          <div className="nk-block-des">
            <p>
              These are the accounts you will use to send and receive payments
              on the platform.
            </p>
          </div>
        </div>
      </div>
      {/* .nk-block-head */}
      {/* Mobile money accounta */}
      <div className="nk-data data-list">
        <div className="data-head">
          <h6 className="overline-title">Mobile Money</h6>
        </div>
        <div className="dropdown buysell-cc-dropdown">
          <a
            href="#"
            className="buysell-cc-chosen dropdown-indicator"
            data-bs-toggle="dropdown"
          >
            <div className="coin-item coin-btc">
              <div className="coin-icon">
                <img
                  src="/frontend/user/images/payment/mtn.png"
                  alt="Bitcoin Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="coin-info">
                <span className="coin-name">Mobile Money</span>
                <span className="coin-text">0246580585</span>
              </div>
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-auto dropdown-menu-mxh">
            <ul className="buysell-cc-list">
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="coin-item coin-btc">
                    <div className="coin-icon">
                      <img
                        src="/frontend/user/images/payment/mtn.png"
                        alt="Bitcoin Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="coin-info">
                      <span className="coin-name">MTN Mobile Money</span>
                      <span className="coin-text">0246580585</span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="coin-item coin-btc">
                    <div className="coin-icon">
                      <img
                        src="/frontend/user/images/payment/telecel.png"
                        alt="Bitcoin Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="coin-info">
                      <span className="coin-name">Telecel Cash</span>
                      <span className="coin-text">0201720269</span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="coin-item coin-btc">
                    <div className="coin-icon">
                      <img
                        src="/frontend/user/images/payment/atmoney.png"
                        alt="Bitcoin Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="coin-info">
                      <span className="coin-name">AT Money</span>
                      <span className="coin-text">0236221124</span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="pm-item pm-mtn">
                    <div className="pm-icon">
                      <em className="icon la la-plus-circle" />
                    </div>
                    <div className="coin-info">
                      <span
                        className="buysell-cc-opt"
                        data-bs-toggle="modal"
                        data-bs-target="#profile-edit"
                      >
                        Add Mobile Money Wallet
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
            </ul>
          </div>
        </div>
        {/* .dropdown */}
      </div>
      {/* Bank accounts */}
      <div className="nk-data data-list">
        <div className="data-head">
          <h6 className="overline-title">Bank</h6>
        </div>
        <div className="dropdown buysell-cc-dropdown">
          <a
            href="#"
            className="buysell-cc-chosen dropdown-indicator"
            data-bs-toggle="dropdown"
          >
            <div className="coin-item coin-btc">
              <div className="coin-icon">
                <img
                  src="/frontend/user/images/payment/uba.png"
                  alt="Bitcoin Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="coin-info">
                <span className="coin-name">Bank Account</span>
                <span className="coin-text">01015517502516</span>
              </div>
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-auto dropdown-menu-mxh">
            <ul className="buysell-cc-list">
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="coin-item coin-btc">
                    <div className="coin-icon">
                      <img
                        src="/frontend/user/images/payment/uba.png"
                        alt="Bitcoin Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="coin-info">
                      <span className="coin-name">Bank Account</span>
                      <span className="coin-text">01015517502516</span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="pm-item pm-mtn">
                    <div className="pm-icon">
                      <em className="icon la la-plus-circle" />
                    </div>
                    <div className="coin-info">
                      <span
                        className="buysell-cc-opt"
                        data-bs-toggle="modal"
                        data-bs-target="#profile-edit"
                      >
                        Add bank account
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
            </ul>
          </div>
        </div>
        {/* .dropdown */}
      </div>
      {/* Mobile money accounta */}
      <div className="nk-data data-list">
        <div className="data-head">
          <h6 className="overline-title">Fiat</h6>
        </div>
        <div className="dropdown buysell-cc-dropdown">
          <a
            href="#"
            className="buysell-cc-chosen dropdown-indicator"
            data-bs-toggle="dropdown"
          >
            <div className="coin-item coin-btc">
              <div className="coin-icon">
                <img
                  src="/frontend/user/images/payment/paypal.png"
                  alt="Bitcoin Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="coin-info">
                <span className="coin-name">Paypal</span>
                <span className="coin-text">barterfunds@gmail.com</span>
              </div>
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-auto dropdown-menu-mxh">
            <ul className="buysell-cc-list">
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="coin-item coin-btc">
                    <div className="coin-icon">
                      <img
                        src="/frontend/user/images/payment/paypal.png"
                        alt="Bitcoin Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="coin-info">
                      <span className="coin-name">Paypal</span>
                      <span className="coin-text">barterfunds@gmail.com</span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="coin-item coin-btc">
                    <div className="coin-icon">
                      <img
                        src="/frontend/user/images/payment/alipay.png"
                        alt="Bitcoin Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="coin-info">
                      <span className="coin-name">Alipay</span>
                      <span className="coin-text">0201720269</span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="coin-item coin-btc">
                    <div className="coin-icon">
                      <img
                        src="/frontend/user/images/payment/wechat-pay.png"
                        alt="Bitcoin Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="coin-info">
                      <span className="coin-name">Wechat pay</span>
                      <span className="coin-text">0236221124</span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="coin-item coin-btc">
                    <div className="coin-icon">
                      <img
                        src="/frontend/user/images/payment/perfectmoney.png"
                        alt="Bitcoin Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="coin-info">
                      <span className="coin-name">Perfect Money</span>
                      <span className="coin-text">0236221124</span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="pm-item pm-mtn">
                    <div className="pm-icon">
                      <em className="icon la la-plus-circle" />
                    </div>
                    <div className="coin-info">
                      <span
                        className="buysell-cc-opt"
                        data-bs-toggle="modal"
                        data-bs-target="#profile-edit"
                      >
                        Add Mobile Money Wallet
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
            </ul>
          </div>
        </div>
        {/* .dropdown */}
      </div>
      <div className="nk-data data-list">
        <div className="data-head">
          <h6 className="overline-title">Cryptocurrency</h6>
        </div>
        {/* Bank accounts */}
        <div className="dropdown buysell-cc-dropdown">
          <a
            href="#"
            className="buysell-cc-chosen dropdown-indicator"
            data-bs-toggle="dropdown"
          >
            <div className="coin-item coin-btc">
              <div className="coin-icon">
                <img
                  src="/frontend/user/images/payment/bitcoin.png"
                  alt="Bitcoin Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="coin-info">
                <span className="coin-name">Bitcoin</span>
                <span className="coin-text">
                  1BoatSLRHtKNngkdXEeobR76b53LETtpyT
                </span>
              </div>
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-auto dropdown-menu-mxh">
            <ul className="buysell-cc-list">
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="coin-item coin-btc">
                    <div className="coin-icon">
                      <img
                        src="/frontend/user/images/payment/bitcoin.png"
                        alt="Bitcoin Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="coin-info">
                      <span className="coin-name">Bitcoin</span>
                      <span className="coin-text">
                        1BoatSLRHtKNngkdXEeobR76b53LETtpyT
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="coin-item coin-btc">
                    <div className="coin-icon">
                      <img
                        src="/frontend/user/images/payment/bch.png"
                        alt="Bitcoin Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="coin-info">
                      <span className="coin-name">Bitcoin Cash</span>
                      <span className="coin-text">
                        2BoatSLRHtKNngkdXEeobR76b53LETtpyT
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="coin-item coin-btc">
                    <div className="coin-icon">
                      <img
                        src="/frontend/user/images/payment/usdc.png"
                        alt="Bitcoin Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="coin-info">
                      <span className="coin-name">USD Coin</span>
                      <span className="coin-text">
                        3BoatSLRHtKNngkdXEeobR76b53LETtpyT
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="coin-item coin-btc">
                    <div className="coin-icon">
                      <img
                        src="/frontend/user/images/payment/ethereum.png"
                        alt="Bitcoin Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="coin-info">
                      <span className="coin-name">Ethereum</span>
                      <span className="coin-text">
                        4BoatSLRHtKNngkdXEeobR76b53LETtpyT
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="coin-item coin-btc">
                    <div className="coin-icon">
                      <img
                        src="/frontend/user/images/payment/usdt.png"
                        alt="Bitcoin Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="coin-info">
                      <span className="coin-name">USDT TRC20</span>
                      <span className="coin-text">
                        5BoatSLRHtKNngkdXEeobR76b53LETtpyT
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
              <li className="buysell-cc-item">
                <a href="#" className="buysell-cc-opt" data-currency="btc">
                  <div className="coin-item coin-btc">
                    <div className="coin-icon">
                      <img
                        src="/frontend/user/images/payment/litecoin.png"
                        alt="Bitcoin Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="coin-info">
                      <span className="coin-name">Litecoin</span>
                      <span className="coin-text">
                        6BoatSLRHtKNngkdXEeobR76b53LETtpyT
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              {/* .buysell-cc-item */}
            </ul>
          </div>
        </div>
        {/* .nk-data */}
      </div>
      {/* NK-Block @e */}
    </div>
  </div>
</div>
</div>

                  {/*Content End*/}
                  {/*Footer Start*/}
                  <UserFooter />
                  {/*Footer End*/}

              </div>
          </div>
          {/*Main End*/}

      </div>
    </div> 



  );
}

export default PaymentMethods;

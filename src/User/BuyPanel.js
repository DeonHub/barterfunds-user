import React, { useState, useEffect } from "react";
import OpenModal from "./components/OpenModal";
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const BuyPanel = ({
  currencies,
  sendDataToParent,
  formatCurrency,
  setIsLoading,
}) => {
  const [formStage, setFormStage] = useState(1);
  const [usdAmount, setUsdAmount] = useState("");
  const [ghsAmount, setGhsAmount] = useState("");
  const [conversionRate, setConversionRate] = useState(
    currencies[0].exchangeRate
  );
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [usdInputChangedByUser, setUsdInputChangedByUser] = useState(true);
  const [ghsInputChangedByUser, setGhsInputChangedByUser] = useState(true);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const transactionFee = 10;
  const transactionType = "buy";


  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleWalletInputChange = (event) => {
    setWalletAddress(event.target.value);
  };

  useEffect(() => {
    // Convert USD to GHS only if input changed by user
    if (usdAmount !== "" && usdInputChangedByUser) {
      const ghsValue = parseFloat(usdAmount) * conversionRate;
      setGhsAmount(ghsValue.toFixed(2));
    }
  }, [usdAmount, conversionRate, usdInputChangedByUser]);

  useEffect(() => {
    // Convert GHS to USD only if input changed by user
    if (ghsAmount !== "" && ghsInputChangedByUser) {
      const usdValue = parseFloat(ghsAmount) / conversionRate;
      setUsdAmount(usdValue.toFixed(2));
    }
  }, [ghsAmount, conversionRate, ghsInputChangedByUser]);

  const handleUsdInputChange = (event) => {
    const value = event.target.value;

    if (value < 0) {
      return;
    }

    setUsdAmount(value);
    setUsdInputChangedByUser(true);
    setGhsInputChangedByUser(false);

    if (value === "") {
      setGhsAmount("");
    }
  };

  const handleGhsInputChange = (event) => {
    const value = event.target.value;

    if (value < 0) {
      return;
    }

    setGhsAmount(value);
    setGhsInputChangedByUser(true);
    setUsdInputChangedByUser(false);

    if (value === "") {
      setUsdAmount("");
    }
  };

  const nextFormStage = () => {
    if (formStage === 1) {
      // Check if required fields in stage 1 have values
      if (!ghsAmount || !usdAmount) {
        alert("Please fill in all required fields.");
        return;
      }
    } else if (formStage === 2) {
      // Check if required fields in stage 2 have values
      if (!walletAddress || !paymentMethod) {
        alert("Please fill in all required fields.");
        return;
      }
    }
  
    // Proceed to the next stage if all required fields have values
    setFormStage((prevStage) => {
      sendDataToParent(prevStage + 1);
      return prevStage + 1;
    });
  };

  const previousFormStage = () => {
    setFormStage((prevStage) => {
      sendDataToParent(prevStage - 1);
      return prevStage - 1;
    });
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setConversionRate(currency.exchangeRate);
  };

  return (
    <>
      {formStage === 1 && (
        <div
          className={`form-stage ${formStage === 1 ? "visible" : ""}`}
          id="stage1"
        >
          <div className="buysell-block">
            <form action="#" className="buysell-form">
              <div className="buysell-field form-group form-section">
                <div className="buysell-field form-group">
                  <div className="form-label-group">
                    <label className="form-label">
                      Choose what you want to get
                    </label>
                  </div>

                  <div className="dropdown buysell-cc-dropdown">
                    <a
                      href="#"
                      className="buysell-cc-choosen dropdown-indicator"
                      data-bs-toggle="dropdown"
                    >
                      <div
                        className={`coin-item coin-${selectedCurrency.currencyCode}`}
                      >
                        <div className="coin-icon">
                          <img
                            src={selectedCurrency.currencyLogo}
                            alt={`${selectedCurrency.currencyCode.toUpperCase()} (${selectedCurrency.currencyCode.toUpperCase()})`}
                          />
                        </div>
                        <div className="coin-info">
                          <span className="coin-name">
                            {selectedCurrency.currencyName}
                          </span>
                          <span className="coin-text">
                            {selectedCurrency.currencyCode}
                          </span>
                        </div>
                      </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-auto dropdown-menu-mxh">
                      <ul className="buysell-cc-list">
                        {currencies.map((currency) => (
                          <li
                            className={`buysell-cc-item ${
                              selectedCurrency === currency ? "selected" : ""
                            }`}
                            key={currency.currencyCode}
                          >
                            <span
                              className="buysell-cc-opt"
                              data-currency={currency.currencyCode}
                              onClick={() => selectCurrency(currency)}
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              <div
                                className={`coin-item coin-${currency.currencyCode}`}
                              >
                                <div className="coin-icon">
                                  <img
                                    src={currency.currencyLogo}
                                    alt={`${currency.currencyCode.toUpperCase()} (${currency.currencyCode.toUpperCase()})`}
                                  />
                                </div>
                                <div className="coin-info">
                                  <span className="coin-name">
                                    {currency.currencyName}
                                  </span>
                                  <span className="coin-text">
                                    {currency.currencyCode}
                                  </span>
                                </div>
                              </div>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="buysell-field form-group">
                 
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="usd-input">
                      I will receive <Tooltip placement="right" title={"This is a required field"}><QuestionCircleOutlined /></Tooltip>
                    </label>
                  </div>
                  <div className="currency-box">
                    <input
                      type="number"
                      className="form-control form-control-lg form-control-number"
                      id="usd-input"
                      name="usd-input"
                      placeholder="Amount in USD"
                      value={usdAmount}
                      onChange={handleUsdInputChange}
                      required
                    />
                    <span className="currency-symbol">&nbsp;USD</span>
                    <img
                      src="/assets/images/payment/usd-icon.png"
                      alt="US Dollar (USD)"
                    />
                  </div>
                  &nbsp;
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="ghs-input">
                      I will pay <Tooltip placement="right" title={"This is a required field"}><QuestionCircleOutlined /></Tooltip>
                    </label>
                  </div>
                  <div className="currency-box">
                    <input
                      type="number"
                      className="form-control form-control-lg form-control-number"
                      id="ghs-input"
                      name="ghs-input"
                      placeholder="Amount in GHS"
                      value={ghsAmount}
                      onChange={handleGhsInputChange}
                      required
                    />
                    <span className="currency-symbol">&nbsp;GHS</span>
                    <img
                      src="/assets/images/payment/cedis-icon.png"
                      alt="Ghana Cedis (GHS)"
                    />
                  </div>
                  
                  <div className="form-note-group">
                    <span className="buysell-min form-note-alt">
                      Minimum: {selectedCurrency.minimumBuyAmount ? formatCurrency(selectedCurrency.minimumBuyAmount) : formatCurrency(100.00)} GHS
                    </span>
                    <span className="buysell-max form-note-alt">
                      Maximum: {selectedCurrency.maximumBuyAmount ? formatCurrency(selectedCurrency.maximumBuyAmount) : formatCurrency(100.00)} GHS
                    </span>
                    <span className="buysell-rate form-note-alt">
                      1 USD = {conversionRate} GHS
                    </span>
                  </div>
                </div>

                <div className="form-navigation">
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                    onClick={nextFormStage}
                  >
                    Continue To Buy
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {formStage === 2 && (
        <div
          className={`form-stage ${formStage === 2 ? "visible" : ""}`}
          id="stage2"
        >
          <div className="buysell-field form-group">
            <div className="form-navigation">
              <label type="button" onClick={previousFormStage}>
                <i className="icon la la-arrow-left" />
              </label>
            </div>

            
            <div className="form-label-group">
              <label className="form-label">Enter Wallet Address <Tooltip placement="right" title={"This is a required field"}><QuestionCircleOutlined /></Tooltip></label>
            </div>
            <div className="currency-box">
              <input
                type="text"
                className="form-control form-control-lg form-control-number usdt-address-input"
                id="usdt-address-input"
                name="usdt-address-input"
                placeholder="1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71"
                value={walletAddress}
                onChange={handleWalletInputChange}
              />
              <span className="currency-symbol" />
              <div className="buysell-field form-group">
                <img
                  src="/assets/images/qr-upload.png"
                  alt="qr code"
                  className="currency-image"
                  id="uploaded-image"
                />
              </div>
            </div>
          </div>
          <div className="buysell-field form-group">
            <div className="form-label-group">
              <label className="form-label">I will pay with <Tooltip placement="right" title={"This is a required field"}><QuestionCircleOutlined /></Tooltip></label>
            </div>
            <div className="buysell-pm-list">
              <li className="buysell-pm-item">
                <input
                  className="buysell-pm-control"
                  type="radio"
                  name="bs-method"
                  id="pm-momo"
                  value="momo"
                  checked={paymentMethod === "momo"}
                  onChange={handlePaymentMethodChange}
                />
                <label className="buysell-pm-label" htmlFor="pm-momo">
                  <span className="pm-name">Mobile Money</span>
                  <span className="pm-icon">
                    <em className="icon la la-money" />
                  </span>
                </label>
              </li>

              <li className="buysell-pm-item">
                <input
                  className="buysell-pm-control"
                  type="radio"
                  name="bs-method"
                  id="pm-bank"
                  value="credit-card"
                  checked={paymentMethod === "credit-card"}
                  onChange={handlePaymentMethodChange}
                />
                <label className="buysell-pm-label" htmlFor="pm-bank">
                  <span className="pm-name">Credit Card</span>
                  <span className="pm-icon">
                    <em className="icon la la-credit-card" />
                  </span>
                </label>
              </li>

              <li className="buysell-pm-item">
                <input
                  className="buysell-pm-control"
                  type="radio"
                  name="bs-method"
                  id="pm-wallet"
                  value="wallet"
                  checked={paymentMethod === "wallet"}
                  onChange={handlePaymentMethodChange}
                />
                <label className="buysell-pm-label" htmlFor="pm-wallet">
                  <span className="pm-name">Barter Wallet</span>
                  <span className="pm-icon">
                    <em className="icon la la-wallet" />
                  </span>
                </label>
              </li>
            </div>
          </div>

          <div className="form-navigation">
            <button
              type="button"
              className="btn btn-lg btn-block btn-primary"
              onClick={nextFormStage}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}

      {formStage === 3 && (
        <div
          className={`form-stage ${formStage === 3 ? "visible" : ""}`}
          id="stage3"
        >
          <div className="form-navigation">
            <label type="button" onClick={previousFormStage}>
              <i className="icon la la-arrow-left" />
            </label>
          </div>

          <div className="nk-block-head nk-block-head-xs text-center">
            <h5 className="nk-block-title">Confirm Order</h5>
            <div className="nk-block-text">
              <div className="caption-text">
                You are about to buy
                <strong> {usdAmount}</strong> USD of {selectedCurrency.currencyName} for
                <strong> {ghsAmount}</strong> GHS
              </div>
              <span className="sub-text-sm">
                Exchange rate: 1 USD = {formatCurrency(conversionRate)} GHS
              </span>
            </div>
          </div>
          <div className="nk-block">
            <div className="buysell-overview">
              <ul className="buysell-overview-list">
                <li className="buysell-overview-item">
                  <span className="pm-title">Payment Method</span>
                  <span className="pm-currency">
                    {paymentMethod === "momo" ? (
                      <>
                        <em className="icon la la-money" />
                        <span>Mobile Money</span>
                      </>
                    ) : paymentMethod === "credit-card" ? (
                      <>
                        <em className="icon la la-credit-card" />
                        <span>Bank Transfer</span>
                      </>
                    ) : (
                      <>
                        <em className="icon la la-wallet" />
                        <span>Barter Wallet</span>
                      </>
                    )}
                  </span>
                </li>
                <li className="buysell-overview-item">
                  <span className="pm-title">Wallet Address</span>
                  <span className="pm-currency">
                    {walletAddress}
                  </span>
                </li>
                <li className="buysell-overview-item">
                  <span className="pm-title">Sub Total</span>
                  <span className="pm-currency">
                    {formatCurrency(ghsAmount)} GHS
                  </span>
                </li>
                <li className="buysell-overview-item">
                  <span className="pm-title">Transaction Fee</span>
                  <span className="pm-currency">
                    {formatCurrency(transactionFee)} GHS
                  </span>
                </li>
                <li className="buysell-overview-item">
                  <span className="pm-title">Total Amount</span>
                  <span className="pm-currency">
                    {formatCurrency(Number(ghsAmount) + Number(transactionFee))}{" "}
                    GHS
                  </span>
                </li>
              </ul>
              <div className="sub-text-sm">
                * Our transaction fee are included.
                <a href="#"> See transaction fee</a>
              </div>
            </div>

            <OpenModal
              title={"Proceed to Payment"}
              content={
                "Are you sure you want to proceed to payment? Please ensure all details provided are correct to prevent processing delay."
              }
              usdAmount={usdAmount}
              ghsAmount={ghsAmount}
              transactionFee={transactionFee}
              selectedCurrency={selectedCurrency}
              paymentMethod={paymentMethod}
              walletAddress={walletAddress}
              transactionType={transactionType}
              setIsLoading={setIsLoading}
            />
          </div>
        </div>
      )}

      {formStage === 4 && (
        <div
          className={`form-stage ${formStage === 4 ? "visible" : ""}`}
          id="stage4"
        >
          <div className="nk-modal text-center">
            <em className="nk-modal-icon icon icon-circle icon-circle-xxl la la-check bg-success" />
            <h4 className="nk-modal-title">Successfully sent payment!</h4>
            <div className="nk-modal-text">
              <p className="caption-text">
                You’ve successfully bought
                <strong> 100</strong>
                USD for <strong>1,200.00</strong> GHS.
              </p>
              <p className="sub-text-sm">
                Learn when you reciveve bitcoin in your wallet.
                <a href="#"> Click here</a>
              </p>
            </div>
            <div className="nk-modal-action-lg">
              <ul className="btn-group gx-4">
                <li>
                  <a
                    href="/assets/transactions.html"
                    className="btn btn-lg btn-mw btn-primary"
                  >
                    Check Order Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div className="text-center w-100">
            <p>
              Earn upto GHS 100 for each friend your refer!
              <a href="#">Invite friends</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyPanel;

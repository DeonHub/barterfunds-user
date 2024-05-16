import React, { useState, useEffect } from "react";
import "./User.css";
import OpenModal from "./components/OpenModal";
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import FileUpload from "./components/FileUpload";

const SellPanel = ({   
  currencies,
  sendDataToParent,
  formatCurrency,
  setIsLoading
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

  const [receipientMethod, setReceipientMethod] = useState("");
  const [receipientNumber, setReceipientNumber] = useState("");

  const transactionFee = 10;
  const transactionType = "sell";



  const handleReceipientMethodChange = (event) => {
    setReceipientMethod(event.target.value);
    setReceipientNumber('')
  };

  const handleReceipientInputChange = (event) => {
    setReceipientNumber(event.target.value);
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
      if (!receipientMethod || !receipientNumber) {
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
                      Choose what you want to sell
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
                      I want to pay <Tooltip placement="right" title={"This is a required field"}><QuestionCircleOutlined /></Tooltip>
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
                      I will receive <Tooltip placement="right" title={"This is a required field"}><QuestionCircleOutlined /></Tooltip>
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
                    Continue To Sell
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

            
            <div className="buysell-field form-group">
            <div className="form-label-group">
              <label className="form-label">I want to receive via <Tooltip placement="right" title={"This is a required field"}><QuestionCircleOutlined /></Tooltip></label>
            </div>
            <div className="buysell-pm-list">
              <li className="buysell-pm-item">
                <input
                  className="buysell-pm-control"
                  type="radio"
                  name="bs-method"
                  id="pm-momo"
                  value="momo"
                  checked={receipientMethod === "momo"}
                  onChange={handleReceipientMethodChange}
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
                  value="bank"
                  checked={receipientMethod === "bank"}
                  onChange={handleReceipientMethodChange}
                />
                <label className="buysell-pm-label" htmlFor="pm-bank">
                  <span className="pm-name">Bank Transfer</span>
                  <span className="pm-icon">
                    <em className="icon la la-bank" />
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
                  checked={receipientMethod === "wallet"}
                  onChange={handleReceipientMethodChange}
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

          <div className="form-label-group">
              <label className="form-label">Enter {receipientMethod === 'momo' ? 'Mobile Money Number' : receipientMethod === 'bank' ? 'Bank Account Number' : receipientMethod === 'wallet' ? 'Barter Wallet Address' : 'Receipient Number'} <Tooltip placement="right" title={"This is a required field"}><QuestionCircleOutlined /></Tooltip></label>
            </div>
            <div className="currency-box">
              <input
                type="text"
                className="form-control form-control-lg form-control-number usdt-address-input"
                id="usdt-address-input"
                name="usdt-address-input"
                placeholder="Enter value here ..."
                value={receipientNumber}
                onChange={handleReceipientInputChange}
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
          <div className="form-navigation">
            <button
              type="button"
              className="btn btn-lg btn-block btn-primary"
              onClick={nextFormStage}
            >
              Continue To Sell
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
                You are about to sell
                <strong> <strong>{formatCurrency(usdAmount)}</strong> USD
                of {selectedCurrency.currencyName} for {formatCurrency(ghsAmount)}</strong> GHS 
              </div>
              <span className="sub-text-sm">
                Exchange rate: 1 USD = {formatCurrency(selectedCurrency.exchangeRate)} GHS
              </span>
            </div>
          </div>
          <div className="nk-block">
            <div className="buysell-overview">
              <ul className="buysell-overview-list">
                <li className="buysell-overview-item">
                  <span className="pm-title">Receive via</span>
                  <span className="pm-currency">
                    {receipientMethod === "momo" ? (
                      <>
                        <em className="icon la la-money" />
                        <span>Mobile Money</span>
                      </>
                    ) : receipientMethod === "bank" ? (
                      <>
                        <em className="icon la la-bank" />
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
                  <span className="pm-title">{receipientMethod === 'momo' ? "Mobile Number" : receipientMethod === 'bank' ? "Account Number" : "Wallet Address"}</span>
                  <span className="pm-currency">{receipientNumber}</span>
                </li>
                <li className="buysell-overview-item">
                  <span className="pm-title">Sub Total</span>
                  <span className="pm-currency">{formatCurrency(ghsAmount)} GHS</span>
                </li>
                <li className="buysell-overview-item">
                  <span className="pm-title">Total Amount</span>
                  <span className="pm-currency">{formatCurrency(ghsAmount)} GHS</span>
                </li>
              </ul>
              <div className="sub-text-sm">
                * Our transaction fee are included.
                <a href="#"> See transaction fee</a>
              </div>
            </div>
            {/* <div className="form-navigation">
              <button
                type="button"
                className="btn btn-lg btn-block btn-primary"
                onClick={nextFormStage}
              >
                Confirm Your Order
              </button>
            </div> */}

            <OpenModal
              title={"Confirm your Order"}
              usdAmount={usdAmount}
              ghsAmount={ghsAmount}
              transactionFee={transactionFee}
              selectedCurrency={selectedCurrency}
              receipientMethod={receipientMethod}
              receipientNumber={receipientNumber}
              transactionType={transactionType}
              setIsLoading={setIsLoading}
              nextFormStage={nextFormStage}
            />
          </div>
          {/* .nk-block */}
        </div>
      )}

{formStage === 4 && (
        <div
          className={`form-stage ${formStage === 4 ? "visible" : ""}`}
          id="stage4"
        >
          <div className="nk-modal text-center">
            <em className="nk-modal-icon icon icon-circle icon-circle-xxl la la-check bg-success" />
            <h4 className="nk-modal-title">Order Successfully Made!</h4>
            <div className="nk-modal-text">
              <p className="caption-text">
                You will receive {formatCurrency(ghsAmount)} GHS for{" "}
                {formatCurrency(usdAmount)} USD of{" "}
                {selectedCurrency.currencyName}.
              </p>
              <p className="sub-text-sm">
                Once we confirm payment into our account.
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
          <br />
          <div className="text-center w-100">
            <p>
              Earn up to GHS 100 for each friend your refer!
              <a href="#">Invite friends</a>
            </p>
          </div>
        </div>
      )}

      {formStage === 5 && (
        <div
          className={`form-stage ${formStage === 5 ? "visible" : ""}`}
          id="stage5"
        >
          <div className="buysell-field form-group">
            <div className="form-navigation">
              <label type="button" onClick={previousFormStage}>
                <i className="icon la la-arrow-left" />
              </label>
            </div>

            <div className="text-center">
              <p>
                Please upload a screenshot proof of your payment. If you don't
                have the screenshot now, you can go to your orders page and
                upload it later.
              </p>
            </div>
          </div>
          <div className="buysell-field form-group">
            <FileUpload name={"screenshot"} id={"screenshot"} />
          </div>

          <div className="form-navigation">
            <button type="button" className="btn btn-lg btn-block btn-primary">
              Submit Screenshot
            </button>
          </div>

          <div className="text-center my-3">
            <a href={`${process.env.REACT_APP_PUBLIC_URL}/user/orders`}>
              I will upload later
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SellPanel;

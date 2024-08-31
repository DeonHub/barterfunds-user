import React, { useState, useEffect } from "react";
import "./User.css";
import OpenModal from "./components/OpenModal";
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import axios from "axios";
import FileUpload from "./components/FileUpload";
import openNotification from "../components/OpenNotification";
import WalletModal from "./components/WalletModal";


const SendPanel = ({   
  currencies,
  sendDataToParent,
  formatCurrency,
  setIsLoading,
  wallet 
}) => {
  currencies = currencies.filter(currency => currency.availableForSend === true);
  const [formStage, setFormStage] = useState(1);
  const [usdAmount, setUsdAmount] = useState("");
  const [ghsAmount, setGhsAmount] = useState("");
  const [conversionRate, setConversionRate] = useState(
    currencies[0].sendAt
  );
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [usdInputChangedByUser, setUsdInputChangedByUser] = useState(true);
  const [ghsInputChangedByUser, setGhsInputChangedByUser] = useState(true);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  // const [transactionForm, setTransactionForm] = useState("");
  const [submitButton, setSubmitButton] = useState(false);
  const [selectedProof, setSelectedProof] = useState('');
  const [transactionFee, setTransactionFee] = useState(0)
  const transactionType = "send";


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

      const ghsValue = parseFloat(ghsAmount);
      const minAmount = selectedCurrency.minimumBuyAmount || 100.00;
      const maxAmount = selectedCurrency.maximumBuyAmount || 100.00;

      
      if (ghsValue < minAmount) {
        alert(`The amount must be greater than the minimum amount of GHS ${formatCurrency(minAmount)}.`);
        return;
      }

      if (ghsValue > maxAmount) {
        alert(`The amount must be less than the maximum amount of GHS ${formatCurrency(maxAmount)}.`);
        return;
      }


      if(selectedCurrency.sendFixedCharge > 0){
        setTransactionFee(selectedCurrency.sendFixedCharge)
      } else{
      setTransactionFee((selectedCurrency.sendPercentCharge / 100) * ghsValue)
      }

    } else if (formStage === 2) {
      // Check if required fields in stage 2 have values
      if ((!walletAddress && !selectedFile) || !paymentMethod) {
        alert("Please fill in all required fields.");
        return;
      }

      if(paymentMethod === 'wallet' && wallet?.balanceGhs < ghsAmount){
        alert("Insufficient funds in wallet. Please fund your wallet and try again.");
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
    setConversionRate(currency.sendAt);
  };

  const handleOk = () => {
    setIsLoading(true);
    const body = new FormData();
    const token = window.sessionStorage.getItem("token");
    const transactionId = window.sessionStorage.getItem("transactionId");

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

          window.sessionStorage.removeItem('transactionId');

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

  const [selectedFile, setSelectedFile] = useState(null);

const handleFileSelect = (e) => {
    const file = e.target.files[0];
    // const name = e.target.name;
    // console.log(file)

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileURL = event.target.result;

        setSelectedFile(() => {
          return { file, fileURL };
        });

      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(() => {
      return null;
    });
    document.getElementById('qrcode-upload').value = null;
  };


  const triggerFileInput = () => {
    document.getElementById('qrcode-upload').click();
  };

  const truncateWord = (word) => {
    if (word.length > 10) {
        return word.slice(0, 10) + '...';
    }
    return word;
}

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
                      Choose what you want to send
                    </label>
                  </div>

                  <div className="dropdown buysell-cc-dropdown">
                    <span

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
                    </span>
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
                      I want to send <Tooltip placement="right" title={"This is a required field"}><QuestionCircleOutlined /></Tooltip>
                    </label>
                  </div>
                  <div className="currency-box">
                    <input
                      type="number"
                      className="form-control form-control-lg form-control-number"
                      id="usd-input"
                      name="usd-input"
                      placeholder={`Amount in ${selectedCurrency.currencyCode.toLowerCase().includes('rmb') ? "RMB" : "USD"}`}
                      value={usdAmount}
                      onChange={handleUsdInputChange}
                      required
                    />
                    <span className="currency-symbol">&nbsp;{selectedCurrency.currencyCode.toLowerCase().includes('rmb') ? "RMB" : "USD"}</span>
                    <img
                      src={selectedCurrency.currencyCode.toLowerCase().includes('rmb') ? "/assets/images/currency/cny.png" : "/assets/images/payment/usd-icon.png"}
                      alt={selectedCurrency.currencyName.includes('yuan') ? "Chinese Yuan (CNY)" : "US Dollar (USD)"}
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
                      Min: {selectedCurrency.minimumBuyAmount ? formatCurrency(selectedCurrency.minimumBuyAmount) : formatCurrency(100.00)} GHS
                    </span>
                    <span className="buysell-max form-note-alt">
                      Max: {selectedCurrency.maximumBuyAmount ? formatCurrency(selectedCurrency.maximumBuyAmount) : formatCurrency(100.00)} GHS
                    </span>
                    <span className="buysell-rate form-note-alt">
                      1 {selectedCurrency.currencyCode.toLowerCase().includes('rmb') ? "RMB" : "USD"} = {formatCurrency(conversionRate)} GHS
                    </span>
                  </div>
                </div>
                <div className="form-navigation">
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                    onClick={nextFormStage}
                  >
                    Continue To Send
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
              <label className="form-label">Receipient {selectedCurrency.currencyName} Address <Tooltip placement="right" title={"Enter Wallet Address or Upload QR Code"}><QuestionCircleOutlined /></Tooltip></label>
            </div>
            <div className="currency-box">
              <input
                type="text"
                className="form-control form-control-lg form-control-number usdt-address-input"
                id="usdt-address-input"
                name="usdt-address-input"
                placeholder={`Enter ${selectedCurrency.currencyName} Address`}
                value={walletAddress}
                onChange={handleWalletInputChange}
              />
              <span className="currency-symbol" />
              <div className="buysell-field form-group">
              <Tooltip placement="right" title={"Click to upload Wallet Address QR code if you have"}>
                <img
                  src="/assets/images/qr-upload.png"
                  alt="qr code"
                  className="currency-image"
                  id="uploaded-image"
                  onClick={triggerFileInput}
                  style={{ cursor: 'pointer' }}
                  // title="Click to upload QR Code"
                />
                </Tooltip>
               
              </div>
            </div>

            
            <input
              type="file"
              accept="image/*, application/pdf"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
              id={'qrcode-upload'}
              name={'name'}
            />
            

            {selectedFile && (
        <div className="view-file mt-3 mb-3">
          <span>View File: </span>
          <a href={selectedFile.fileURL} target="_blank" rel="noopener noreferrer">Uploaded File</a>
        
          <span
              onClick={handleRemoveFile}
              className={`bg-white btn btn-sm btn-outline-light btn-icon success float-end`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Remove File"
            >
              <span className="icon material-symbols-outlined">
                delete
              </span>
            </span>
        </div>
      )}
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
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={handlePaymentMethodChange}
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
              Continue To Send
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
                You are about to send
                <strong> {formatCurrency(usdAmount)} {selectedCurrency.currencyCode.toLowerCase().includes('rmb') ? "RMB" : "USD"} of {selectedCurrency.currencyName}</strong> 
              </div>
              <span className="sub-text-sm">
                Exchange rate: 1 {selectedCurrency.currencyCode.toLowerCase().includes('rmb') ? "RMB" : "USD"} = {formatCurrency(conversionRate)} GHS
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
                    ) : paymentMethod === "bank" ? (
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
                  <span className="pm-title">Wallet Address</span>
                  <span className="pm-currency">{walletAddress ? truncateWord(walletAddress) : 'No Wallet Address'}</span>
                </li>
                {selectedFile && (
                <li className="buysell-overview-item">
                  <span className="pm-title">Wallet QR Code</span>
                  <span className="pm-currency">
                  
                    <div className="view-file">
                      {/* <span>View File: </span> */}
                      <a href={selectedFile.fileURL} target="_blank" rel="noopener noreferrer">Uploaded File</a>
                    
                    </div>
                  
                  </span>
                </li>
              )}
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
              <div className="sub-text-sm text-center">
                * Our transaction fee are included.
                <a href={"/fees"}> See transaction fee</a>
              </div>
            </div>
            {paymentMethod === 'wallet' ? (
                
                <WalletModal 
                title={"Confirm your Order"}
                content={
                  "Are you sure you want to confirm this order? Please ensure all details provided are correct to prevent processing delay."
                }
                usdAmount={usdAmount}
                ghsAmount={ghsAmount}
                transactionFee={transactionFee}
                selectedCurrency={selectedCurrency}
                paymentMethod={paymentMethod}
                walletAddress={walletAddress}
                transactionType={transactionType}
                setIsLoading={setIsLoading}
                nextFormStage={nextFormStage}
                formatCurrency={formatCurrency}
                selectedFile={selectedFile}
                exchangeRate={conversionRate}
                />
                ) : (
                  <OpenModal
                title={"Confirm your Order"}
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
                nextFormStage={nextFormStage}
                formatCurrency={formatCurrency}
                selectedFile={selectedFile}
                exchangeRate={conversionRate}
              />
                )}
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
            <h4 className="nk-modal-title"><strong>Order Successfully Made!</strong></h4>
            <div className="nk-modal-text">
              <p className="caption-text">
                Your recipient will receive <strong>{formatCurrency(usdAmount)} {selectedCurrency.currencyCode.toLowerCase().includes('rmb') ? "RMB" : "USD"} of{" "}
                {selectedCurrency.currencyName}</strong>
                
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
              Earn up to GHS 20 for each friend your refer!
              <a href={"/user/dashboard"}>Invite friends</a>
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
            <a href={`/user/transactions`}>
              I will upload later
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SendPanel;

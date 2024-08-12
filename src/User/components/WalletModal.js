
import React, { useState } from "react";
import { Modal, Button } from "antd";
import openNotification from "../../components/OpenNotification";
import axios from "axios";

const WalletModal = ({ title,
  content,
  usdAmount,
  ghsAmount,
  selectedCurrency,
  paymentMethod,
  walletAddress,
  transactionType,
  setIsLoading,
  transactionFee,
  receipientMethod,
  receipientNumber,
  nextFormStage,
  transactionForm,
  formatCurrency,
  selectedFile,
  exchangeRate}) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const generateDateTimeString = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
  
    return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
  }
  
  const generateTransactionReference = () => {
  
    const reference = Math.floor(10000000 + Math.random() * 90000000);
    return reference.toString();
  }

  const handleOk = () => {
    setIsLoading(true);
    const body = new FormData();
    const token = window.sessionStorage.getItem("token");

    const transaction_body = {
      currencyId: selectedCurrency._id,
      transactionId: generateDateTimeString(),
      transactionType: transactionType,
      amountGhs: ghsAmount,
      amountUsd: usdAmount,
      walletAddress: walletAddress ? walletAddress : "",
      paymentMethod: paymentMethod ? paymentMethod : "",
      receipientMethod: receipientMethod ? receipientMethod : "",
      receipientNumber: receipientNumber ? receipientNumber : "",
      transactionForm: transactionForm ? transactionForm : "",
      referenceId: generateTransactionReference(),
      status: "processing",
      action: "Pending Admin Approval",
      qrCode: selectedFile ? selectedFile?.file : "",
      transactionFee: transactionFee,
      exchangeRate: exchangeRate ? exchangeRate : 0
    };

    // console.log(transaction_body)

    const transaction_headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };

    if(transactionType === 'sell' || transactionType === 'receive' || transactionType === 'buy' || transactionType === 'send'){
      setIsLoading(false)
      setTimeout(() => {
        nextFormStage();
      }, 2000)
    }

    // const body = new FormData();
    for (const key in transaction_body) {
      body.append(key, transaction_body[key]);
    }

    // console.log(body)


    axios
    .post(`${process.env.REACT_APP_API_URL}/transactions`, body, { headers: transaction_headers })
    .then((result) => {
      if (result.data.success) {

        window.sessionStorage.setItem('transactionId', result.data.transaction._id)
        console.log("Success: Transaction saved successfully")
        
      }
    })
    .catch((error) => {
      openNotification(
        "topRight",
        "error",
        "Error",
        "Failed to save transaction"
      );

      console.log("error: Failed to save transaction")
    });
      setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };


  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px', // Adjust as needed
  };

  const contentStyle = {
    textAlign: 'center',
  };

  return (
    <>
     <div className="form-navigation">
        <button
          type="button"
          className="btn btn-lg btn-block btn-primary"
          onClick={showModal}
        >
          Confirm Your Order
        </button>
      </div>

      <Modal
        open={open}
        // mask={open}
        title={<div style={titleStyle}>{title}<hr/></div>}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ zIndex: "1", left: "10%" }}
        footer={[
          <Button onClick={handleCancel} style={{ float: "left"}}>
            Cancel
          </Button>,
          <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={handleOk}
        >
          OK
        </button>
        ]}
        // style={modalStyle}
      >
        <div style={contentStyle}>{content}<hr/></div>
      </Modal>
    </>
  );
};

export default WalletModal;

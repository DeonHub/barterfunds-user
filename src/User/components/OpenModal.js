import React, { useState } from "react";
import { Modal, Button } from "antd";
import openNotification from "../../components/OpenNotification";
import axios from "axios";

// http://127.0.0.1:3000/user/dashboard?trxref=a3a3z9rfas&reference=a3a3z9rfas
// sk_live_1a41ffe0e54e7c32b729d0385428316674b58817
// sk_test_cce3e73b36ceafb4510dd4949249bcc0515a64ff
// pk_live_5f9f4f8d7b4d3e4d0d1f5b5b8b7b1f0f2f4f7f9f
// pk_test_121aa9585f43aadc97ff2732726abcaf06dff65e

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

const OpenModal = ({
  title,
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
  exchangeRate
}) => {

  const [open, setOpen] = useState(false);
  const number = paymentMethod === "momo" ? "0530467164" : "01015517602516"

  const copyText = () => {

    var text = document.getElementById("usdt-address-input");
    text.select();
 
    navigator.clipboard.writeText(text.value);
    openNotification(
      "topRight",
      "success",
      "Wallet Address copied",
      ""
    );
}

const copyNumber = () => {

  var text = document.getElementById("usdt-number-input");
  text.select();

  navigator.clipboard.writeText(text.value);
  openNotification(
    "topRight",
    "success",
    "Number copied successfully",
    ""
  );
}

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setIsLoading(true);
    const body = new FormData();
    const token = window.sessionStorage.getItem("token");
    // const email = window.sessionStorage.getItem("email");
    // const secret_key = process.env.REACT_APP_TEST_SECRET_KEY;



    // const payment_headers = {
    //   Authorization: `Bearer ${secret_key}`,
    // };

    // const payment_body = {
    //   amount: (Number(ghsAmount) + Number(transactionFee)) * 100,
    //   email: email ? email : "barterfunds@gmail.com",
    //   callback_url: `/user/transactions/success`,
    // };

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
      status: "pending",
      action: "Pending User Payment",
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

        // setIsLoading(false)
        // setTimeout(() => {
        //   nextFormStage();
        // }, 2000)
                
          // openNotification(
          //   "topRight",
          //   "success",
          //   "Success",
          //   "Order made successfully."
          // );
        

        // if( transactionType === 'buy' || transactionType === 'send' ){
        //   axios
        //     .post("https://api.paystack.co/transaction/initialize", payment_body, { headers: payment_headers})
        //     .then((response) => {
        //       if (response.data.status) {

        //         body.append('referenceId', response.data.data.reference);

        //           axios
        //           .patch(`${process.env.REACT_APP_API_URL}/transactions/${result.data.transaction._id}`, body, { headers: transaction_headers })
        //           .then((updateResult) => {
                    
        //             if (updateResult.data.success) {
        //               openNotification(
        //                 "topRight",
        //                 "success",
        //                 "Success",
        //                 "Redirecting to payment page..."
        //               );

                      
          
        //               setTimeout(() => {
        //                 window.location.href = response.data.data.authorization_url;
        //               }, 1000);
        //             } else {
        //               openNotification(
        //                 "topRight",
        //                 "error",
        //                 "Error",
        //                 "Failed to update transaction with reference ID"
        //               );
        //             }
        //           })
        //           .catch((updateError) => {
        //             openNotification(
        //               "topRight",
        //               "error",
        //               "Error",
        //               "Failed to update transaction with reference ID: "
        //             );
        //             console.log("cannot update transaction id")
        //           });

        //       }
        //     })
        //     .catch((error) => {
        //       openNotification(
        //         "topRight",
        //         "error",
        //         "Error",
        //         "Cannot make payment"
        //       );

        //       console.log("error :>> Cannot make payment");
        //     }); 

        // }
        
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
    textAlign: "center",
    marginBottom: "20px",
  };

  const contentStyle = {
    textAlign: "center",
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
        title={
          <div style={titleStyle}>
            {title}
            <hr />
          </div>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button onClick={handleCancel} style={{ float: "left" }}>
            Cancel
          </Button>,
          <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={handleOk}
        >
          I Have Transferred
        </button>
          // <Button onClick={handleOk} className="btn-primary">
          //   I Have Transferred
          // </Button>,
        ]}
        // style={modalStyle}
      >
        <div style={contentStyle}>
          {transactionType === 'buy' || transactionType === 'send' ? (
            (
              <div className="buysell-field form-group">
              
                <div className="form-label-group">
                  {paymentMethod === 'momo' ? (
                  <label className="form-label text-center">Copy the number below and make the transfer. You are to transfer a total of <span style={{ fontWeight: 'bold'}}>{formatCurrency(Number(ghsAmount) + Number(transactionFee))} GHS.</span> Click <span style={{ fontWeight: 'bold'}}>"I Have Transferred"</span> once you're done with the transfer.<br/><br/><span style={{ fontWeight: 'bold'}}>ACCOUNT NAME: BARTERFUNDS / MICHAEL ADZATO</span></label>
                  ) : (
                  <label className="form-label text-center">Copy the number below and make the transfer. You are to transfer a total of <span style={{ fontWeight: 'bold'}}>{formatCurrency(Number(ghsAmount) + Number(transactionFee))} GHS.</span> Click <span style={{ fontWeight: 'bold'}}>"I Have Transferred"</span> once you're done with the transfer.<br/><br/><span style={{ fontWeight: 'bold'}}>ACCOUNT NAME: BARTERFUNDS <br/>BANK NAME: UNITED BANK OF AFRICA(UBA)</span></label>
                  )}
                  {/* <label className="form-label text-center">Copy the number below and make the transfer. You are to transfer a total of <span style={{ fontWeight: 'bold'}}>{formatCurrency(Number(ghsAmount) + Number(transactionFee))} GHS.</span> Click <span style={{ fontWeight: 'bold'}}>"I Have Transferred"</span> once you're done with the transfer.<br/><br/><span style={{ fontWeight: 'bold'}}>ACCOUNT NAME: BARTERFUNDS / MICHAEL ADZATO <br/>BANK NAME: UNITED BANK OF AFRICA(UBA) */}
                {/* </span></label> */}
               
                </div>
                
                <div className="currency-box">
                  <input
                    type="text"
                    className="form-control form-control-lg form-control-number usdt-address-input"
                    id="usdt-number-input"
                    name="usdt-number-input"
                    value={number}
                    disabled
                  />
                  <span className="currency-symbol" />
                  <div className="buysell-field form-group">
                    <img
                      src="/assets/images/copy-icon.svg"
                      alt="Copy Icon"
                      className="currency-image"
                      id="uploaded-image"
                      onClick={copyNumber}
                      style={{
                        cursor: "pointer"
                      }}
                    />
                  </div>
                </div>
              </div>
              )
          ) : (
          <div className="buysell-field form-group">
          
            <div className="form-label-group">
              {transactionType === 'receive' ? (
                <span className="text-center">Copy the wallet address below and make the transfer. You are to transfer a total of <span style={{fontWeight: 'bold'}}>{formatCurrency(Number(usdAmount) - Number(transactionFee))} USD of {selectedCurrency.currencyName}.</span> Click <span style={{fontWeight: 'bold'}}>"I Have Transferred"</span> once you're done with the transfer.</span>
                ) : (
                <span className="text-center">Copy the wallet address below and make the transfer. You are to transfer a total of <span style={{fontWeight: 'bold'}}>{formatCurrency(Number(usdAmount) + Number(transactionFee))} USD of {selectedCurrency.currencyName}.</span> Click <span style={{fontWeight: 'bold'}}>"I Have Transferred"</span> once you're done with the transfer.</span>
                )}
              
            </div>
            <div className="currency-box">
              <input
                type="text"
                className="form-control form-control-lg form-control-number usdt-address-input"
                id="usdt-address-input"
                name="usdt-address-input"
                placeholder="1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71"
                value={selectedCurrency.walletAddress}
                disabled
              />
              <span className="currency-symbol" />
              <div className="buysell-field form-group">
                <img
                  src="/assets/images/copy-icon.svg"
                  alt="Copy Icon"
                  className="currency-image"
                  id="uploaded-image"
                  onClick={copyText}
                  style={{
                    cursor: "pointer"
                  }}
                />
              </div>
            </div>
          </div>
          )}
          <hr />
        </div>
      </Modal>
    </>
  );
};

export default OpenModal;

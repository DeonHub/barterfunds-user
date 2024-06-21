import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import openNotification from "../../components/OpenNotification";
import axios from "axios";

// http://127.0.0.1:3000/user/dashboard?trxref=a3a3z9rfas&reference=a3a3z9rfas
// sk_live_1a41ffe0e54e7c32b729d0385428316674b58817
// sk_test_cce3e73b36ceafb4510dd4949249bcc0515a64ff
// pk_live_5f9f4f8d7b4d3e4d0d1f5b5b8b7b1f0f2f4f7f9f
// pk_test_121aa9585f43aadc97ff2732726abcaf06dff65e

function generateOrderId(length = 10) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let orderId = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    orderId += characters[randomIndex];
  }
  return orderId;
}

const OrdersModal = ({
  text,
  icon,
  setIsLoading,
  title,
  action,
  buttonText,
  topText,
  isButton,
  walletId,
  claxx
}) => {
  const [open, setOpen] = useState(false);
  const [usdAmount, setUsdAmount] = useState("");
  const [ghsAmount, setGhsAmount] = useState("");
  const [usdInputChangedByUser, setUsdInputChangedByUser] = useState(true);
  const [ghsInputChangedByUser, setGhsInputChangedByUser] = useState(true);
  const conversionRate = 12.1;
  const [method, setMethod] = useState("");
  const [receipientNumber, setReceipientNumber] = useState('')

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


  const showModal = () => {
    setOpen(true);
  };



  const handleOk = () => {
    setIsLoading(true);
    const body = new FormData();
    const token = window.sessionStorage.getItem("token");
    const email = window.sessionStorage.getItem("email");
    const secret_key = process.env.REACT_APP_TEST_SECRET_KEY;


    const payment_headers = {
      Authorization: `Bearer ${secret_key}`,
    };

    const payment_body = {
      amount: (Number(ghsAmount)) * 100,
      email: email ? email : "barterfunds@gmail.com",
      callback_url: `/user/orders/success`,
    };

    const transaction_body = {
      walletId: walletId,
      orderId: generateOrderId(),
      amountGhs: ghsAmount,
      amountUsd: usdAmount,
      paymentMethod: action === 'deposit' ? method : "",
      receipientMethod: action === 'withdraw' ? method : "",
      receipientNumber: receipientNumber ? receipientNumber : '',
      action: action
    };

    const transaction_headers = {
      Authorization: `Bearer ${token}`,
    };



    // if(action === 'withdraw'){
    //   setIsLoading(false)
    //   setTimeout(() => {
    //     nextFormStage();
    //   }, 2000)
    // }


    axios
    .post(`${process.env.REACT_APP_API_URL}/orders`, transaction_body, { headers: transaction_headers })
    .then((result) => {
      if (result.data.success) {

        if(action === 'deposit'){
          axios
            .post("https://api.paystack.co/transaction/initialize", payment_body, { headers: payment_headers})
            .then((response) => {
              if (response.data.status) {

                body.append('referenceId', response.data.data.reference);

                  axios
                  .patch(`${process.env.REACT_APP_API_URL}/orders/${result.data.order._id}`, body, { headers: transaction_headers })
                  .then((updateResult) => {
                    
                    if (updateResult.data.success) {
                      openNotification(
                        "topRight",
                        "success",
                        "Success",
                        "Redirecting to payment page..."
                      );

                      setTimeout(() => {
                        window.location.href = response.data.data.authorization_url;
                      }, 1000);
                    } else {
                      openNotification(
                        "topRight",
                        "error",
                        "Error",
                        "Failed to update transaction with reference ID"
                      );
                    }
                  })
                  .catch((updateError) => {
                    openNotification(
                      "topRight",
                      "error",
                      "Error",
                      "Failed to update transaction with reference ID: "
                    );
                    console.log("cannot update transaction id")
                  });

              }
            })
            .catch((error) => {
              openNotification(
                "topRight",
                "error",
                "Error",
                "Cannot make payment"
              );

              console.log("error :>> Cannot make payment");
            }); 

        }
        else{
          openNotification(
            "topRight",
            "success",
            "Withdrawal Request Success",
            "Your withdrawal request has been sent successfully. Please wait for approval..."
          );

          setTimeout(() => {
            window.location.href = `/user/wallet`;
          }, 1000);

          setIsLoading(false)
          setOpen(false);
        }

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
      {isButton ? (
        <span
          onClick={showModal}
          // className={"btn btn-dim btn-outline-light"}
          className={claxx}
        >
          <span>{text}</span>
          {icon && (<span class="icon material-symbols-outlined">{icon}</span>)}
          
        </span>
      ) : (
        <span onClick={showModal} style={{ color: "#fff", cursor: "pointer"}}>
          <span style={{ color: "#fff"}} class="icon material-symbols-outlined">{icon}</span>
          <span style={{ color: "#fff"}}>{text}</span>
        </span>
      )}

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
        footer={
          [
            // <Button onClick={handleCancel} style={{ float: "left" }}>
            //   Cancel
            // </Button>,
            // <Button type="primary" onClick={handleOk}>
            //   OK
            // </Button>,
          ]
        }
      >
        <div style={contentStyle}>
          <div className="buysell-field form-group">
            {/* <div className="form-label-group"> */}
            <span className="text-center">{topText}</span>
            {/* </div> */}
            <div className="row g-4 mt-1">
              <div className="col-md-12">
                <div className="form-group">
                  <div className="input-group ">
                    <span className="input-group-text mobile-code">
                      Amount in GHS
                    </span>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      className="form-control"
                      placeholder="Enter amount you want to deposit..."
                      value={ghsAmount}
                      onChange={handleGhsInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <div className="input-group ">
                    <span className="input-group-text mobile-code">
                      Amount in USD
                    </span>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      className="form-control"
                      placeholder="Enter amount you want to deposit..."
                      value={usdAmount}
                      onChange={handleUsdInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <div className="input-group ">
                    <span className="input-group-text mobile-code">
                      {action === 'deposit' ? 'Payment' : 'Receipient'} Method
                    </span>
                    <select
                                      className="form-control form-control-lg"
                                      id="payment-method"
                                      name="payment-method"
                                      onChange={(e) => {setMethod(e.target.value)}}
                                    >
                                      <option value="">Select a {action === 'deposit' ? 'payment' : 'receipient'} method</option>
                                      <option value="momo">Mobile Money</option>
                                      <option value="bank">Bank Transfer</option>
                                      {action === 'deposit' && (<option value="credit-card">Credit Card</option>)}
                                      
                                      
                                    </select>
                  </div>
                </div>
              </div>

              {action === 'withdraw' && (
                <div className="col-md-12">
                <div className="form-group">
                  <div className="input-group ">
                    <span className="input-group-text mobile-code">
                      
                      {method === 'momo' ? "Mobile Money Number" : method === 'bank' ? "Bank Account Number" : "Receipient Number"}
                    </span>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      className="form-control"
                      placeholder={method === 'momo' ? "Enter Mobile Money number..." : method === 'bank' ? "Enter Bank Account Number..." : "Enter recipient number"}
                      onChange={(e) => {setReceipientNumber(e.target.value)}}
                    />
                  </div>
                </div>
              </div>
              )}
              

            </div>
          </div>
          <hr />
          <button
            type="button"
            className="btn btn-lg btn-primary btn-block"
            onClick={handleOk}
          >
            {buttonText}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default OrdersModal;

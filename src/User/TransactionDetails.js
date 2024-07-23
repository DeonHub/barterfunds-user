import React, {useState } from 'react';
import axios from 'axios';
import FileUpload from './components/FileUpload';
import { Modal } from "antd";
import openNotification from "../components/OpenNotification";


const TransactionDetails = ({ 
    transaction, 
    formatDate,
    formatTime,
    formatCurrency,
    setIsLoading,
    id 
}) => {
  const [open, setOpen] = useState(false);
  const [selectedProof, setSelectedProof] = useState('');
  const [submitButton, setSubmitButton] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setIsLoading(true);
    const body = new FormData();
    const token = window.sessionStorage.getItem("token");

    const headers = {
        Authorization: `Bearer ${token}`,
      };


      body.append('paymentProof', selectedProof);

      axios
      .patch(`${process.env.REACT_APP_API_URL}/transactions/${id}`, body, { headers: headers })
      .then((updateResult) => {
        console.log(updateResult);
        if (updateResult.data.success) {
          openNotification(
            "topRight",
            "success",
            "Success",
            "Payment Proof uploaded successfully"
          );

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



    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const getFileUrl = (path) => {
    if (path.startsWith('uploads')) {
      return `${process.env.REACT_APP_API_URL}/${path}`;
    }
    return path;
  };

  return (
    <>
      <span
        className="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
        title="View Details"
        onClick={showModal}
        >
        <span className="icon material-symbols-outlined">
            visibility
        </span>
        </span>

      <Modal
        open={open}
        // title="Transaction Details"
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        footer={[
        //   <Button key="cancel" onClick={handleCancel}>
        //     Cancel
        //   </Button>,
        //   <Button key="ok" type="primary" onClick={handleOk}>
        //     OK
        //   </Button>,
        ]}
      >


        <div className="p-3">
            <div className="nk-modal-head mb-3 mb-sm-5">
                <h4 className="nk-modal-title title">Transaction <small className="text-primary">#{transaction ? transaction.transactionId : "1234567890"}</small></h4>
            </div>
            <div className="nk-tnx-details">
                <div className="nk-block-between flex-wrap g-3">
                    <div className="nk-tnx-type">
                        <div className="nk-tnx-type-icon bg-warning text-white">
                            {/* <span className="icon material-symbols-outlined">north_east</span> */}
                            <img
                                            src={transaction?.currencyId ? transaction.currencyId.currencyLogo : "/assets/images/currency/btc.png"}
                                            alt="bitcoin"
                                          />
                        </div>
                        <div className="nk-tnx-type-text">
                            <h5 className="title">{transaction ? (`${formatCurrency(transaction.amountUsd)} ${transaction?.currencyId?.currencyName.toLowerCase().includes('yuan') ? "RMB" : "USD"} of ${transaction?.currencyId ? transaction.currencyId.currencyName : "Bitcoin (BTC)"}`): ''} </h5>
                            <span className="sub-text mt-n1">{transaction ? formatDate(transaction.createdAt) : ''} {transaction ? formatTime(transaction.createdAt) : ''}</span>
                        </div>
                    </div>
                    <ul className="align-center flex-wrap gx-3">
                        
                        { transaction ? transaction.status === 'pending' && (
                                      <li className="badge badge-sm bg-info">
                                        Pending
                                      </li>
                                    ) : ''}
                                    {transaction ? transaction.status === 'success' && (
                                      <li className="badge badge-sm bg-success">
                                        Completed
                                      </li>
                                    ) : ''}
                                    {transaction ? transaction.status === 'cancelled' && (
                                      <li className="badge badge-sm bg-warning">
                                        Cancelled
                                      </li>
                                    ) : ''}
                                    {transaction ? transaction.status === 'failed' && (
                                      <li className="badge badge-sm bg-danger">
                                        Failed
                                      </li>
                                    ) : ''}
                    </ul>
                </div>
                <div className="nk-modal-head mt-sm-5 mt-4 mb-4">
                    <h5 className="title">Transaction Info</h5>
                </div>
                <div className="row gy-3">
                    <div className="col-lg-6">
                        <span className="sub-text">Transaction ID</span>
                        <span className="caption-text">{transaction ? transaction.transactionId : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Reference ID</span>
                        <span className="caption-text text-break">{transaction ? transaction.referenceId ? transaction.referenceId : 'No reference ID' : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Transaction Fee</span>
                        <span className="caption-text">0.002 GHS</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Amount Paid</span>
                        <span className="caption-text">{transaction ? formatCurrency(transaction.amountGhs) : ''} GHS</span>
                    </div>
                </div>
                <div className="nk-modal-head mt-sm-5 mt-4 mb-4">
                    <h5 className="title">Transaction Details</h5>
                </div>
                <div className="row gy-3">
                    <div className="col-lg-6">
                        <span className="sub-text">Transaction Type</span>
                        <span className="caption-text">{ transaction ? transaction.transactionType === 'buy' ? "Buy" : transaction.transactionType === 'sell' ? "Sell" : transaction.transactionType === 'send' ? "Send" : "Receive" : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Payment Gateway</span>
                        <span className="caption-text align-center">Manual</span>
                                
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Payment From</span>
                        <span className="caption-text text-break">1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71</span>
                    </div>

                    { transaction ? transaction.transactionType === 'receive' || transaction.transactionType === 'sell' ?
                         <div className="col-lg-6">
                         <span className="sub-text">Receive via</span>
                         <span className="caption-text text-break">{transaction ? transaction.receipientMethod === "momo" ? "Mobile Money" : transaction.receipientMethod === "bank" ? "Bank Transfer" : transaction.receipientMethod === "wallet" ? "Barter Wallet" : "" : ''}</span>
                        </div>
                    : '' : ''}
                   

                    <div className="col-lg-6">
                        <span className="sub-text">Transfer To</span>
                        <span className="caption-text text-break">{transaction ? transaction.receipientNumber ? transaction.receipientNumber  : transaction.walletAddress : ''}</span>
                    </div>
                    
                    <div className="col-lg-12">
                        <span className="sub-text">Action</span>
                        <span className="caption-text">{transaction ? transaction.action : ''}</span>
                    </div>

                    <hr/>

                    { transaction ? transaction.paymentProof ? (
                      <div className="text-center">
                        <a href={getFileUrl(transaction.paymentProof)} target='_blank' rel="noreferrer">View Payment Proof</a>
                      </div>
                      //   <div className='preview-image'>
                      //   {/* <img src={transaction.paymentProof} alt="Uploaded File" /> */}
                      //   <Image
                      //       // width={200}
                      //       src={transaction.paymentProof}
                      //       alt="Uploaded File"
                      //   />

                        
                      //   {/* <div className="overlay"></div> */}
                        
                      // </div>
                    ) : (
                         <div className="col-lg-12">
                         <div className="buysell-field form-group">

                         {/* <div className="text-center">
                             <p>
                             Please upload a screenshot proof of your
                             payment. If you don't have the screenshot now,
                             you can go to your orders page and upload it
                             later.
                             </p>
                         </div> */}
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
                         </div>
                    ) : ''}

                   
                </div>
            </div>
        </div>
   
      </Modal>
    </>
  );
};

export default TransactionDetails;


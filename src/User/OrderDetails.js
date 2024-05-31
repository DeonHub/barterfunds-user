import React, {useState} from 'react';
import axios from 'axios';

import { Modal } from "antd";
import openNotification from "../components/OpenNotification";


const OrderDetails = ({ 
    order, 
    formatDate,
    formatTime,
    formatCurrency,
    setIsLoading,
    id
}) => {
  const [open, setOpen] = useState(false);
  // const [selectedProof, setSelectedProof] = useState('');
  const selectedProof = '';


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
        
        if (updateResult.data.success) {
          openNotification(
            "topRight",
            "success",
            "Success",
            "Payment Proof uploaded successfully"
          );

          setTimeout(() => {
            window.location.href = `${process.env.REACT_APP_PUBLIC_URL}/user/transactions`;
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
        console.log("cannot update order id")
      });  



    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
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
        // title="order Details"
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
                <h4 className="nk-modal-title title">Order <small className="text-primary">#{order ? order.orderId : "1234567890"}</small></h4>
            </div>
            <div className="nk-tnx-details">
                <div className="nk-block-between flex-wrap g-3">
                    <div className="nk-tnx-type">
                        
                        <div className="nk-tnx-type-text">
                            <h5 className="title">Submitted on</h5>
                            <span className="sub-text mt-n1">{order ? formatDate(order.createdAt) : ''} {order ? formatTime(order.createdAt) : ''}</span>
                        </div>
                    </div>
                    <ul className="align-center flex-wrap gx-3">
                        
                        { order ? order.status === 'pending' && (
                                      <li className="badge badge-sm bg-info">
                                        Pending
                                      </li>
                                    ) : ''}
                                    {order ? order.status === 'success' && (
                                      <li className="badge badge-sm bg-success">
                                        Completed
                                      </li>
                                    ) : ''}
                                    {order ? order.status === 'cancelled' && (
                                      <li className="badge badge-sm bg-warning">
                                        Cancelled
                                      </li>
                                    ) : ''}
                                    {order ? order.status === 'failed' && (
                                      <li className="badge badge-sm bg-danger">
                                        Failed
                                      </li>
                                    ) : ''}
                    </ul>
                </div>
                <div className="nk-modal-head mt-sm-5 mt-4 mb-4">
                    <h5 className="title">Order Details</h5>
                </div>
                <div className="row gy-3">
                    <div className="col-lg-6">
                        <span className="sub-text">Order ID</span>
                        <span className="caption-text">{order ? order.orderId : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Order Type</span>
                        <span className="caption-text text-break">{order ? order.action === 'deposit' ? 'Deposit' : 'Withdrawal' : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Amount Paid (GHS)</span>
                        <span className="caption-text">{order ? formatCurrency(order.amountGhs) : ''} GHS</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Amount Paid (USD)</span>
                        <span className="caption-text">{order ? formatCurrency(order.amountUsd) : ''} USD</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Wallet Balance (GHS)</span>
                        <span className="caption-text">{order ? formatCurrency(order.balanceGhs) : ''} GHS</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Wallet Balance (USD)</span>
                        <span className="caption-text">{order ? formatCurrency(order.balanceUsd) : ''} USD</span>
                    </div>

                    <div className="col-lg-6">
                        <span className="sub-text">Paid via</span>
                        <span className="caption-text">{order ? order.action === 'deposit' ? order.paymentMethod === 'momo' ? 'Mobile Money' : 'Bank Transfer' : 'Barter Wallet' : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Receive via</span>
                        <span className="caption-text">{order ? order.action === 'withdraw' ? order.receipientMethod === 'momo' ? 'Mobile Money' : 'Bank Transfer' : 'Barter Wallet' : ''}</span>
                    </div>

                    <div className="col-lg-6">
                        <span className="sub-text">{order ? order.action === 'withdraw' ? 'Receipient Number' : 'Wallet Address' : ''}</span>
                        <span className="caption-text">{order ? order.action === 'withdraw' ? order.receipientNumber : order.walletId : ''}</span>
                    </div>
                </div>
                
               
            </div>
        </div>
   
      </Modal>
    </>
  );
};

export default OrderDetails;


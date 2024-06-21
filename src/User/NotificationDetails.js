import React, {useState} from 'react';
import axios from 'axios';

import { Modal } from "antd";
import openNotification from "../components/OpenNotification";


const NotificationDetails = ({ 
    notification, 
    formatDate,
    formatTime,
    setIsLoading,
    setNotifications,
    id
}) => {
  const [open, setOpen] = useState(false);
  const selectedProof = '';


  const markAsRead = async (notificationId) => {
    const token = window.sessionStorage.getItem("token");

    let config = {
      method: 'patch',
      url: `${process.env.REACT_APP_API_URL}/notifications/${notificationId}`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    
    axios.request(config)
    .then((response) => {
          setNotifications((prevData) =>
            prevData.map((notification) =>
              notification._id === notificationId ? { ...notification, read: true } : notification
            )
          );
    })
    .catch((error) => {
      console.log(error);
    });

  };

  const showModal = () => {
    markAsRead(id)
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
        console.log("cannot update notification id")
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
        // title="notification Details"
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
                <h4 className="nk-modal-title title">Notification <small className="text-primary">#1234567890</small></h4>
            </div>
            <div className="nk-tnx-details">
                <div className="nk-block-between flex-wrap g-3">
                    <div className="nk-tnx-type">
                        
                        <div className="nk-tnx-type-text">
                            <h5 className="title">Added on</h5>
                            <span className="sub-text mt-n1">{notification ? formatDate(notification.createdAt) : ''} {notification ? formatTime(notification.createdAt) : ''}</span>
                        </div>
                    </div>
                   
                </div>
                <div className="nk-modal-head mt-sm-5 mt-4 mb-4">
                    <h5 className="title">Notification Details</h5>
                </div>
                <div className="row gy-3">
                    <div className="col-lg-6">
                        <span className="sub-text">Notification ID</span>
                        <span className="caption-text">1234567890</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Notification Type</span>
                        <span className="caption-text text-break">Info</span>
                    </div>
                    

                    <div className="col-lg-6">
                        <span className="sub-text">Subject</span>
                        <span className="caption-text">{notification?.subject ? notification.subject : ""}</span>
                    </div>
                    <div className="col-lg-12">
                        <span className="sub-text">Message</span>
                        <span className="caption-text">{notification?.message ? notification.message : ""}</span>
                    </div>

                
                </div>
                
               
            </div>
        </div>
   
      </Modal>
    </>
  );
};

export default NotificationDetails;


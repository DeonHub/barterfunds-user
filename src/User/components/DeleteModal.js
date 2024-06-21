
import React, { useState } from "react";
import { Modal, Button } from "antd";
import openNotification from "../../components/OpenNotification";
import axios from "axios";

const DeleteModal = ({ title, content, notification }) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    const token = window.sessionStorage.getItem("token");
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_API_URL}/notifications/${notification._id}`,
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    
    axios.request(config)
    .then((response) => {
      if(response.data.success){
        openNotification('topRight', 'success', 'Notification Deleted', "Notification deleted successfully")
        window.location.href = '/user/notifications'

      }
    })
    .catch((error) => {
      console.log(error);
    });
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
      <span
        onClick={showModal}
        className={`bg-white btn btn-sm btn-outline-light btn-icon success`}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Delete Notification"
        
      >
        <span className="icon material-symbols-outlined">
          delete
        </span>
      </span>

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
          <Button onClick={handleOk}>
            OK
          </Button>,
        ]}
        // style={modalStyle}
      >
        <div style={contentStyle}>{content}<hr/></div>
      </Modal>
    </>
  );
};

export default DeleteModal;

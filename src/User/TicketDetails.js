import React, {useState, useEffect } from 'react';
import axios from 'axios';
import FileUpload from './components/FileUpload';
import { Modal, Button, Image, Rate } from "antd";
import openNotification from "../components/OpenNotification";


const TicketDetails = ({ 
    ticket, 
    formatDate,
    formatTime,
    setIsLoading,
    id 
}) => {
  const [open, setOpen] = useState(false);
  const [selectedProof, setSelectedProof] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [submitButton, setSubmitButton] = useState(!feedback || !rating ? false : true);


  const showModal = () => {
    setOpen(true);
  };

  const handleRatingChange = (value) => {
    setRating(value);

    setSubmitButton(value > 0);
  };

  const handleOk = () => {
    setIsLoading(true);
    // const body = new FormData();
    const token = window.sessionStorage.getItem("token");

    const body = {
      feedback: feedback,
      rating: rating
    }

    const headers = {
        Authorization: `Bearer ${token}`,
      };


      axios
      .patch(`${process.env.REACT_APP_API_URL}/tickets/${id}`, body, { headers: headers })
      .then((updateResult) => {
        
        if (updateResult.data.success) {
          openNotification(
            "topRight",
            "success",
            "Success",
            "Payment Proof uploaded successfully"
          );

          setTimeout(() => {
            window.location.href = `${process.env.REACT_APP_PUBLIC_URL}/user/support`;
          }, 1000);
        } else {
          openNotification(
            "topRight",
            "error",
            "Error",
            "Failed to update ticket status"
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
        console.log("cannot update ticket id")
      });  



    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open':
        return 'info'; 
      case 'resolved':
        return 'success'; 
      case 'pending':
        return 'warning'; 
      case 'closed':
        return 'danger'; 
      default:
        return '';
    }
  };
  return (
    <>
      <a
        href="javascript:void(0);"
        className="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
        title="View Details"
        onClick={showModal}
        >
        <span className="icon material-symbols-outlined">
            visibility
        </span>
        </a>

      <Modal
        open={open}
        // title="ticket Details"
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
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
                <h4 className="nk-modal-title title">Ticket <small className="text-primary">#{ticket ? ticket.ticketId : "1234567890"}</small></h4>
            </div>
            <div className="nk-tnx-details">
                <div className="nk-block-between flex-wrap g-3">
                    <div className="nk-tnx-type">
                        
                        <div className="nk-tnx-type-text">
                            <h5 className="title">Submitted On</h5>
                            <span className="sub-text mt-n1">{ticket ? formatDate(ticket.createdAt) : ''} {ticket ? formatTime(ticket.createdAt) : ''}</span>
                        </div>
                    </div>
                    <ul className="align-center flex-wrap gx-3">
                        
                        { ticket ? ticket.status === 'open' && (
                                      <li className="badge badge-sm bg-info">
                                        Open
                                      </li>
                                    ) : ''}
                                    {ticket ? ticket.status === 'resolved' && (
                                      <li className="badge badge-sm bg-success">
                                        Resolved
                                      </li>
                                    ) : ''}
                                    {ticket ? ticket.status === 'pending' && (
                                      <li className="badge badge-sm bg-warning">
                                        Pending
                                      </li>
                                    ) : ''}
                                    {ticket ? ticket.status === 'closed' && (
                                      <li className="badge badge-sm bg-danger">
                                        Closed
                                      </li>
                                    ) : ''}
                    </ul>
                </div>
                <div className="nk-modal-head mt-sm-5 mt-4 mb-4">
                    <h5 className="title">Ticket Details</h5>
                </div>
                <div className="row gy-3">
                    <div className="col-lg-6">
                        <span className="sub-text">Ticket ID</span>
                        <span className="caption-text">{ticket ? ticket.ticketId : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Category</span>
                        <span className="caption-text text-break">{ticket ? ticket.category ? ticket.category : 'Customer Service and General Inquiries'  : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Subject</span>
                        <span className="caption-text text-break">{ticket ? ticket.subject : ''}</span>
                    </div>
                    <div className="col-lg-12">
                        <span className="sub-text">Message</span>
                        <span className="caption-text">{ticket ? ticket.message : ''}</span>
                    </div>
                    <br/>
                    

                    { ticket ? ticket.files.length > 0 ? 
                    <div className="col-lg-12">
                        <span className="sub-text">Supporting Documents</span>
                        <span className="col-lg-6">
                          {ticket.files.map((file, index) => {
                              return(
                                <span className="">
                                <div className="col-lg-6" key={index}>
                                  {file.description}
                                  {file.originalName}
                                  <Image src={file.path} />
                                  </div>
                                  <br/>
                                  </span>
                              )
                          }) }
                          
                        </span>
                    </div>
                    : '' : ''}

                    <hr/>

{ticket ? ticket.status === 'resolved' || ticket.status === 'closed' ? (
          <div>
          <div className='row gy-3'>
          <div className="col-lg-6 mb-3">
          <span className="sub-text">Reviewer</span>
          <span className="caption-text">{ticket ? ticket.reviewer ? ticket.reviewer : 'Not reviewed' : ''}</span>
        </div>

        <div className="col-lg-6 mb-3">
          <span className="sub-text">Reviewed On</span>
          <span className="caption-text">{ticket ? `${formatDate(ticket.updatedAt)} ${formatTime(ticket.updatedAt)}` : ''}</span>
        </div>

        <div className="col-lg-12 mb-3">
          <span className="sub-text">Reviewer comments</span>
          <span className="caption-text">{ticket ? ticket.comments ? ticket.comments : 'No comments yet' : ''}</span>
        </div>

        <div className="col-lg-12 mb-3">
          <span className="sub-text">Feedback</span>
          <span className="caption-text"><textarea class="form-control" placeholder="Enter your feedback here..." onChange={(e) => {setFeedback(e.target.value); setSubmitButton(e.target.value.length > 0)}} disabled={ticket.feedback}>{ticket.feedback ? ticket.feedback : ''}</textarea></span>
        </div>

        <div className="col-lg-12 mb-3">
          <span className="sub-text">Provide rating</span>
          <span className="caption-text">
          <Rate 
          value={ticket.rating ? ticket.rating : rating} 
          disabled={ticket.rating ? true : false}
          onChange={handleRatingChange}
          />
          </span>
        </div>
        </div>
        <br/>

      { ticket ? !ticket.feedback || !ticket.rating ? (
        <div className="form-navigation">
        <button
            type="button"
            className="btn btn-lg btn-block btn-primary"
            onClick={handleOk}
            disabled={!submitButton}
            
        >
            Submit Feedback
        </button>
        </div>
      ) : '' : ''}
        

          </div>
) : '' : ''}

                    
                
               
            </div>
            </div>
        </div>
      </Modal>
    
    </>
  );
};

export default TicketDetails;


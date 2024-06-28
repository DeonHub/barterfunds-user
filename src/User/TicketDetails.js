import React, {useState } from 'react';
import axios from 'axios';

// import { Modal, Image, Rate } from "antd";
import { Modal } from "antd";
import openNotification from "../components/OpenNotification";
import ReplyTicket from './ReplyTicket';


const TicketDetails = ({ 
    ticket, 
    formatDate,
    formatTime,
    setIsLoading,
    id 
}) => {
  const [open, setOpen] = useState(false);
  // const [rating, setRating] = useState(0);
  // const [submitButton, setSubmitButton] = useState(!rating ? false : true);


  const showModal = () => {
    setOpen(true);
  };

  // const handleRatingChange = (value) => {
  //   setRating(value);

  //   setSubmitButton(value > 0);
  // };

  const handleOk = () => {
    setIsLoading(true);
    // const body = new FormData();
    const token = window.sessionStorage.getItem("token");

    const body = {
      // rating: rating
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
            window.location.href = `/user/support`;
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

  const getFileUrl = (path) => {
    if (path.startsWith('uploads')) {
      return `${process.env.REACT_APP_API_URL}/${path}`;
    }
    return path;
  };

  return (
    <>
      <span
        className="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip mr-5"
        title="View Details"
        onClick={showModal}
        // style={{
        //   marginRight: "5px !important"
        // }}
        >
        <span className="icon material-symbols-outlined">
            visibility
        </span>
        </span>

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
            {/* <div className="nk-modal-head mb-3 mb-sm-5">
                <h4 className="nk-modal-title title">Ticket <small className="text-primary">#{ticket ? ticket.ticketId : "1234567890"}</small></h4>
            </div> */}
            <div className="nk-tnx-details">
                <div className="nk-block-between flex-wrap g-3">
                    <div className="nk-tnx-type">
                        
                        <div className="nk-tnx-type-text">
                            <h5 className="title">Ticket ID: #{ticket?.ticketId } </h5>
                            <span className="sub-text mt-n1">Submitted On: {ticket ? formatDate(ticket.createdAt) : ''} {ticket ? formatTime(ticket.createdAt) : ''}</span>
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
                
                <div className="row gy-3 mt-3">
                    
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
                                
                                  <a href={getFileUrl(file.path)} target='_blank' key={index} rel="noreferrer">View {file.description}</a>
                                  <br/>
                                  </span>
                              )
                          }) }
                          
                        </span>
                    </div>
                    : '' : ''}

                    <hr/>



            {ticket?.replies?.length > 0 ? (
              <>
              
                <div className="nk-modal-head mb-1">
                  <h5 className="title">Ticket Replies</h5>
                </div>
                {ticket.replies.map((reply, index) => {
                  return (
                    <div key={index} className={`col-lg-12 mb-1 ${reply.role === 'user' ? "" : "text-end"}`}>
                      <span className="sub-text" style={{ fontWeight: "bold", color: "black" }} >{reply.role === 'user' ? `${ticket.userId.username}` : "BarterFunds"}</span>
                      <span className="caption-text">{reply.message}</span>

                      {reply.files.length > 0 && (
                        <div className="col-lg-12">
                          <span className="sub-text">Supporting Documents</span>
                          <div className="col-lg-6">
                            {reply.files.map((file, fileIndex) => (
                              <div key={fileIndex} className="col-lg-6">
                                <a href={getFileUrl(file.path)} target='_blank' key={index} rel="noreferrer">View {file.description}</a>
                                <br />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </>
            ) : ('')}

                <hr/>

                <ReplyTicket ticketId={ticket?._id} isButton={true} setIsLoading={setIsLoading} />
               
               {/* { ticket?.status === 'closed' ? (
          <div>
          <div className='row gy-3'>

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

      { !ticket?.rating ? (
        <div className="form-navigation">
        <button
            type="button"
            className="btn btn-lg btn-block btn-primary"
            onClick={handleOk}
            disabled={!submitButton}
            
        >
            Submit Rating
        </button>
        </div>
      ) : ''}
        

          </div>
) : ''} */}
            </div>
            </div>
        </div>
      </Modal>
    
    </>
  );
};

export default TicketDetails;


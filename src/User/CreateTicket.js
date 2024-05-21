import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from "antd";
import openNotification from "../components/OpenNotification";
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';


const CreateTicket = ({ setIsLoading }) => {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');
  const [fileInputs, setFileInputs] = useState([{ description: '', file: null }]);
  const [submitButton, setSubmitButton] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleFileInputChange = (index, event) => {
    const { name, value, files } = event.target;
    const newFileInputs = [...fileInputs];
    if (name === 'description') {
      newFileInputs[index].description = value;
    } else if (name === 'file') {
      newFileInputs[index].file = files[0];
    }
    setFileInputs(newFileInputs);
  };

  const addFileInput = () => {
    if (fileInputs.length < 5) {
      setFileInputs([...fileInputs, { description: '', file: null }]);
    } else {
      openNotification(
        "topRight",
        "warning",
        "Maximum file upload",
        "You can only upload up to 5 files."
      );
    }
  }

  const removeFileInput = (index) => {
    const newFileInputs = [...fileInputs];
    newFileInputs.splice(index, 1);
    setFileInputs(newFileInputs);
  };

  const handleOk = () => {
    setIsLoading(true);
    const token = window.sessionStorage.getItem("token");
  
    const formData = new FormData();
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('category', category);
  
    // Filter out file inputs that have no file selected
    const filesWithDescriptions = fileInputs.filter(input => input.file);
    
    // Check if every file has a corresponding description
    const hasAllDescriptions = filesWithDescriptions.every(input => input.description.trim() !== '');
  
    if (!hasAllDescriptions) {
      openNotification(
        "topRight",
        "error",
        "Error",
        "You need to provide a description for all files."
      );
      setIsLoading(false);
      return;
    }
  
    // Append files and descriptions to the formData
    filesWithDescriptions.forEach((input) => {
      formData.append('files', input.file);
      formData.append('descriptions', input.description);
    });
  
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };
  
    axios.post(`${process.env.REACT_APP_API_URL}/tickets`, formData, { headers })
      .then((response) => {
        if (response.data.success) {
          openNotification(
            "topRight",
            "success",
            "Ticket created successfully",
            "Your ticket has been created successfully. We will get back to you as soon as possible."
          );
  
          setTimeout(() => {
            window.location.href = `${process.env.REACT_APP_PUBLIC_URL}/user/support`;
          }, 1000);
        } else {
          openNotification(
            "topRight",
            "error",
            "Error",
            "Failed to create ticket"
          );
        }
      })
      .catch((error) => {
        openNotification(
          "topRight",
          "error",
          "Error",
          "An error occurred while creating the ticket."
        );
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
        setOpen(false);
      });
  };
  

  const handleCancel = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'subject') {
      setSubject(value);
    } else if (name === 'message') {
      setMessage(value);
    }
    else if (name === 'category') {
      setCategory(value);
    }
    setSubmitButton(!!subject && !!message);
  };

  return (
    <>
      <a
        href="javascript:void(0);"
        title="Create Ticket"
        onClick={showModal}
        className="btn btn-primary btn-tooltip"
      >
        <span className="icon material-symbols-outlined">
          confirmation_number
        </span>
        <span>Create Ticket</span>
      </a>

     {/* {isLoading ? <Loader /> : ( */}
            <Modal
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            width={900}
            footer={[]}
          >
            <div className="nk-content nk-content-fluid">
              <div className="container-xl wide-lg">
                <div className="nk-content-body">
                  <div className="kyc-app wide-sm m-auto">
                    <div className="nk-block-head nk-block-head-lg wide-xs mx-auto">
                      <div className="nk-block-head-content text-center">
                        <h5>Do you have any complaint?</h5>
                        <div className="nk-block-des">
                          <p>
                            Please fill the form below and submit. We will get back to you as soon as possible.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="nk-block">
                      <div className="card card-bordered">
                        <div className="nk-kycfm">
                          <div className="nk-kycfm-content">
                            <div className="row g-4">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <div className="form-label-group">
                                    <label className="form-label">
                                      Category <Tooltip placement="right" title={"This is a required field."}><QuestionCircleOutlined /></Tooltip>
                                    </label>
                                    
                                  </div>
                                  <div className="form-control-group">
                                    <select
                                      className="form-control form-control-lg"
                                      id="category"
                                      name="category"
                                      onChange={handleChange}
                                    >
                                      <option value="">Select a category</option>
                                      <option value="Account and Security Issues">Account and Security Issues</option>
                                      <option value="Payment and Transaction Issues">Payment and Transaction Issues</option>
                                      <option value="Technical and Website Issues">Technical and Website Issues</option>
                                      <option value="Policy and Compliance Issues">Policy and Compliance Issues</option>
                                      <option value="Customer Service and General Inquiries">Customer Service and General Inquiries</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <div className="form-label-group">
                                    <label className="form-label">
                                      Subject <Tooltip placement="right" title={"This is a required field."}><QuestionCircleOutlined /></Tooltip>
                                    </label>
                                  </div>
                                  <div className="form-control-group">
                                    <input
                                      type="text"
                                      className="form-control form-control-lg"
                                      placeholder="Enter subject here..."
                                      name="subject"
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <div className="form-label-group">
                                    <label className="form-label">
                                      Message <Tooltip placement="right" title={"This is a required field."}><QuestionCircleOutlined /></Tooltip>
                                    </label>
                                  </div>
                                  <div className="form-control-group">
                                    <textarea
                                      className="form-control form-control-lg"
                                      placeholder="Enter message here..."
                                      name="message"
                                      onChange={handleChange}
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="col-md-12">
                                <div className="form-group">
                                  <div className="form-label-group">
                                    <label className="form-label">
                                      Upload any supporting documents you may have, eg, Payment Screenshot, etc
                                    </label>
                                  </div>
    
                                  {fileInputs.map((input, index) => (
                                    <div key={index} className="form-group">
                                      <div className="form-control-group">
                                        <input
                                          type="text"
                                          name="description"
                                          className="col-md-5 mr-2 form-control-sm"
                                          placeholder='Example: Payment Screenshot...'
                                          value={input.description}
                                          onChange={(e) => handleFileInputChange(index, e)}
                                        />
                                        <input
                                          type="file"
                                          name="file"
                                          className='ml-1 form-control-sm'
                                          onChange={(e) => handleFileInputChange(index, e)}
                                        />
                                        <a
                                          href="javascript:void(0);"
                                          title="Add file"
                                          className="btn btn-success btn-sm mx-1"
                                          onClick={addFileInput}
                                        >
                                          <span className="icon material-symbols-outlined">
                                            add
                                          </span>
                                        </a>
                                        {index > 0 && (
                                          <a
                                            href="javascript:void(0);"
                                            title="Remove file"
                                            className="btn btn-danger btn-sm"
                                            onClick={() => removeFileInput(index)}
                                          >
                                            <span className="icon material-symbols-outlined">
                                              cancel
                                            </span>
                                          </a>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
    
                          <div className="nk-kycfm-footer">
                            <div className="nk-kycfm-action pt-2">
                              <button
                                type="button"
                                className="btn btn-lg btn-primary btn-block"
                                onClick={handleOk}
                                disabled={!submitButton}
                              >
                                Submit
                              </button>
    
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
     {/* )} */}

    </>
  );
};

export default CreateTicket;

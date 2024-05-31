import React, {useState} from 'react';
import axios from 'axios';
import { Modal, Image } from "antd";
import openNotification from "../components/OpenNotification";


const KycDetails = ({ 
    kyc, 
    formatDate,
    formatTime,
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
      .patch(`${process.env.REACT_APP_API_URL}/kycs/${id}`, body, { headers: headers })
      .then((updateResult) => {
        
        if (updateResult.data.success) {
          openNotification(
            "topRight",
            "success",
            "Success",
            "Payment Proof uploaded successfully"
          );

          setTimeout(() => {
            window.location.href = `/user/kycs`;
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
        console.log("cannot update kyc id")
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
        // title="kyc Details"
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
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
                <h4 className="nk-modal-title title">KYC <small className="text-primary">Details</small></h4>
            </div>
            <div className="nk-tnx-details">
                <div className="nk-block-between flex-wrap g-3">
                    <div className="nk-tnx-type">
                        
                        <div className="nk-tnx-type-text">
                            <h5 className="title">Submitted On</h5>
                            <span className="sub-text mt-n1">{kyc ? formatDate(kyc.createdAt) : ''} {kyc ? formatTime(kyc.createdAt) : ''}</span>
                        </div>
                    </div>
                    <ul className="align-center flex-wrap gx-3">
                        
                        { kyc ? kyc.status === 'pending' && (
                                      <li className="badge badge-sm bg-info">
                                        Pending
                                      </li>
                                    ) : ''}
                                    {kyc ? kyc.status === 'approved' && (
                                      <li className="badge badge-sm bg-success">
                                        Approved
                                      </li>
                                    ) : ''}
                                    {kyc ? kyc.status === 'reviewing' && (
                                      <li className="badge badge-sm bg-warning">
                                        Reviewing
                                      </li>
                                    ) : ''}
                                    {kyc ? kyc.status === 'rejected' && (
                                      <li className="badge badge-sm bg-danger">
                                        Rejected
                                      </li>
                                    ) : ''}
                    </ul>
                </div>
                <div className="nk-modal-head mt-sm-5 mt-4 mb-4">
                    <h5 className="title">Personal Details</h5>
                </div>
                <div className="row gy-3">
                    <div className="col-lg-6">
                        <span className="sub-text">Firstname</span>
                        <span className="caption-text">{kyc ? kyc.firstname : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Surname</span>
                        <span className="caption-text text-break">{kyc ? kyc.surname : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Email</span>
                        <span className="caption-text">{kyc ? kyc.email : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Contact</span>
                        <span className="caption-text">{kyc ? `+${kyc.contact ? kyc.contact : '1234567890'}` : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Date of Birth</span>
                        <span className="caption-text">{kyc ? formatDate(kyc.dateOfBirth) : ''}</span>
                    </div>
                </div>
                <div className="nk-modal-head mt-sm-5 mt-4 mb-4">
                    <h5 className="title">Your Address</h5>
                </div>
                <div className="row gy-3">
                    <div className="col-lg-6">
                        <span className="sub-text">Country</span>
                        <span className="caption-text">{kyc ? kyc.country : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">State or Region</span>
                        <span className="caption-text text-break">{kyc ? kyc.region : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Town or City</span>
                        <span className="caption-text">{kyc ? kyc.city : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Residential Address</span>
                        <span className="caption-text">{kyc ? kyc.residentialAddress : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Postal Address</span>
                        <span className="caption-text">{kyc ? kyc.postalAddress : ''}</span>
                    </div>
                </div>

                <div className="nk-modal-head mt-sm-5 mt-4 mb-4">
                    <h5 className="title">Identification</h5>
                </div>
                <div className="row gy-3">
                    <div className="col-lg-6">
                        <span className="sub-text">Nationality</span>
                        <span className="caption-text">{kyc ? kyc.nationality : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Identification Document Type</span>
                        <span className="caption-text text-break">{kyc ? kyc.identityDocumentType : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Identity Document Number</span>
                        <span className="caption-text">{kyc ? kyc.identityDocumentNumber : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Identity Document Issue Date</span>
                        <span className="caption-text">{kyc ? formatDate(kyc.issueDate ): ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Identity Document Expiry</span>
                        <span className="caption-text">{kyc ? formatDate(kyc.expiryDate) : ''}</span>
                    </div>
                    <div className="col-lg-6">
                        <span className="sub-text">Issuing Authority</span>
                        <span className="caption-text">{kyc ? kyc.issuingAuthority : ''}</span>
                    </div>
                </div>

                <div className="nk-modal-head mt-sm-5 mt-4 mb-4">
                    <h5 className="title">Document Upload</h5>
                </div>
                <div className="row gy-3">
                    <div className="col-lg-6">
                        <span className="sub-text">Document Uploaded</span>
                        <span className="caption-text">{kyc ? kyc.identityDocumentUploaded : 'National ID'}</span>
                    </div>
                    <div className="col-lg-12">
                        <span className="sub-text">ID Front</span>
                        <div className='preview-image'>
                        
                        <Image
                            width={500}
                            src={kyc.frontImage}
                            alt="Uploaded File"
                        />
                        
                      </div>
                    </div>
                    <div className="col-lg-12">
                        <span className="sub-text">ID Back</span>
                        <div className='preview-image'>
                        
                        <Image
                            width={500}
                            src={kyc.backImage}
                            alt="Uploaded File"
                        />
                        
                      </div>
                    </div>
                   
                </div>


                <div className="nk-modal-head mt-sm-5 mt-4 mb-4">
                    <h5 className="title">Proof of address</h5>
                </div>
                <div className="row gy-3">
                    <div className="col-lg-6">
                        <span className="sub-text">Document Uploaded</span>
                        <span className="caption-text">{kyc ? kyc.proofDocumentUploaded : 'Utility Bill'}</span>
                    </div>
                    <div className="col-lg-12">
                        <span className="sub-text">Proof Document</span>
                        <div className='preview-image'>
                        
                        <Image
                            width={500}
                            src={kyc.proofOfAddress}
                            alt="Uploaded File"
                        />
                        
                      </div>
                    </div>
                    
                </div>

                <div className="nk-modal-head mt-sm-5 mt-4 mb-4">
                    <h5 className="title">Selfie With ID (SWID)</h5>
                </div>
                <div className="row gy-3">
                    
                    <div className="col-lg-12">
                        <span className="sub-text">Uploaded Selfie</span>
                        <div className='preview-image'>
                        
                        <Image
                            width={500}
                            src={kyc.photograph}
                            alt="Uploaded File"
                        />
                        
                      </div>
                    </div>
                    
                </div>
            </div>
        </div>
   
      </Modal>
    </>
  );
};

export default KycDetails;


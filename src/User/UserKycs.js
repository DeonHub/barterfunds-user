import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";
import Loader from "../components/Loader";
import KycDetails from "./KycDetails";
import axios from "axios";

const UserKycs = () => {
  const navigate = useNavigate();
  const [kycs, setKycs] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(20);
  const itemsPerPage = 20;
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);



  useEffect(() => {
    document.title = "User KYCs | BarterFunds";
    const token = window.sessionStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${process.env.REACT_APP_API_URL}/kycs/x/user`, {
        headers: headers,
      })

      .then((response) => {
        if (response.data.success) {
          setKycs(response.data.kycs);
          setCount(response.data.count);
          setIsLoading(false);
        } else {
          setKycs([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  //   setCurrentPage(1);
  // };


  // const filteredData = kycs.filter(
  //   (kyc) =>
  //     kyc.firstname
  //       .toLowerCase()
  //       .includes(searchTerm.toLowerCase())
  // );

  // Calculate pagination
  const totalItems = kycs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // const totalPages = 10;

  // Calculate the index range of items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Get the data for the current page
  const currentPageData = kycs.slice(startIndex, endIndex);

  // Pagination handlers
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const amPM = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, "0");

    return `${hours}:${minutes} ${amPM}`;
  };



  return (
    <div className="nk-body npc-crypto bg-white has-sidebar">
      <div className="nk-app-root">
        <div className="nk-main ">
          <UserSidebar active={"kycs"} />
          <div className="nk-wrap ">
            <UserHeader />

            {isLoading ? (
              <Loader />
            ) : 
            
             count === 0 ? (
              <div className="nk-content nk-content-fluid">
              <div className="container-xl wide-lg">
                <div className="nk-content-body">
                  <div className="kyc-app wide-sm m-auto">
                    <div className="nk-block-head nk-block-head-lg wide-xs mx-auto">
                      <div className="nk-block-head-content text-center">
                        <h2 className="nk-block-title fw-normal">
                          KYC Verification
                        </h2>
                        <div className="nk-block-des">
                          <p>
                            To comply with regulation each participant will have
                            to go through indentity verification (KYC/AML) to
                            prevent fraud causes.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="nk-block">
                      <div className="card card-bordered">
                        <div className="card-inner card-inner-lg">
                          <div className="nk-kyc-app p-sm-2 text-center">
                            <div className="nk-kyc-app-icon">
                              <i class="icon las la-copy"></i>
                            </div>
                            <div className="nk-kyc-app-text mx-auto">
                              <p className="lead">
                                You have not submitted your necessary documents
                                to verify your identity. In order to purchase
                                our tokens, please verify your identity.
                              </p>
                            </div>
                            <div className="nk-kyc-app-action">
                              <a
                                href={`${process.env.REACT_APP_PUBLIC_URL}/user/kycs/application`}
                                className="btn btn-lg btn-primary"
                              >
                                Click here to complete your KYC
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center pt-4">
                        <p>
                          If you have any question, please contact our support
                          team{" "}
                          <a href="mailto:info@barter-funds.com">
                            info@barter-funds.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ) : (
              <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                  <div className="nk-content-body">
                    <div className="nk-block-head nk-block-head-sm">
                      <div className="nk-block-between g-3">
                        <div className="nk-block-head-content">
                          <h3 className="nk-block-title page-title">KYCs</h3>
                          <div className="nk-block-des text-soft">
                            <p>You have submitted a total {count} KYCs.</p>
                          </div>
                        </div>
                        <div className="nk-block-head-content">
                          <div className="toggle-wrap nk-block-tools-toggle">
                            <span
                      
                              className="btn btn-icon btn-trigger toggle-expand me-n1"
                              data-target="pageMenu"
                            >
                              <em className="icon ni ni-menu-alt-r" />
                            </span>
                            
                            <div
                              className="toggle-expand-content"
                              data-content="pageMenu"
                            >
                              <ul className="nk-block-tools g-3">
                                <li>
                                  <a
                                    href={`${process.env.REACT_APP_PUBLIC_URL}/user/kycs/application`}
                                    className="btn btn-outline-primary"
                                  >
                                    <span class="icon material-symbols-outlined">
                                    add
                                    </span>
                                    <span>Submit KYC</span>
                                  </a>
                                </li>
                                
                              </ul>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="nk-block">
                      <div className="card card-bordered card-stretch">
                        <div className="card-inner-group">
                          <div className="card-inner">
                            <div className="card-title-group">
                              <div className="card-title">
                                <h5 className="title">All KYCs</h5>
                              </div>
                              {/* <div className="card-tools me-n1">
                                <ul className="btn-toolbar gx-1">
                                  <li>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Search ..."
                                      value={searchTerm}
                                      onChange={handleSearchChange}
                                    />
                                  </li>
                                </ul>
                              </div> */}
                            </div>
                          </div>

                          <div className="card-inner p-0 text-center">
                            <div className="nk-tb-list nk-tb-tnx">
                              <div className="nk-tb-item nk-tb-head">
                                <div className="nk-tb-col">
                                  <span>Fullname</span>
                                </div>
                                
                                <div className="nk-tb-col tb-col-lg">
                                  <span>Email / Contact</span>
                                </div>
                                
                                <div className="nk-tb-col tb-col-sm">
                                  <span>Submitted On</span>
                                </div>
                                <div className="nk-tb-col tb-col-sm">
                                  <span>Reviewer</span>
                                </div>
                                <div className="nk-tb-col nk-tb-col-status">
                                  <span className="sub-text d-none d-md-block">
                                    Status
                                  </span>
                                </div>
                                <div className="nk-tb-col nk-tb-col-tools" />
                              </div>

                              {currentPageData.map((kyc) => {
                                  return(
                                    <div className="nk-tb-item text-center" key={kyc._id}>
                                   

                                    <div className="nk-tb-col">
                                      <span className="tb-amount">
                                        <span className="tb-date">
                                        {kyc.firstname} {kyc.surname}
                                        </span>
                                      </span>
                                      
                                    </div>


                                    <div className="nk-tb-col tb-col-lg ">
                                      <span className="tb-lead-sub">
                                        {kyc.email}
                                      </span>
                                      <span className="text">
                                        {`+${kyc.contact ? kyc.contact : '1234567890'}`}
                                      </span>
                                    </div>
                                    

                                    <div className="nk-tb-col tb-col-sm">
                                      <span className="tb-amount">
                                        <span className="tb-date">
                                          {formatDate(kyc.createdAt)}
                                        </span>
                                      </span>
                                      <span className="tb-amount-sm">
                                      {formatTime(kyc.createdAt)}
                                      </span>
                                    </div>

                                    <div className="nk-tb-col tb-col-sm">
                                      <span className="tb-amount">
                                        <span className="tb-date">
                                        {kyc.kycReviewer ? kyc.kycReviewer : 'Not Reviewed'}
                                        </span>
                                      </span>
                                      
                                    </div>

                                    

                                    <div className="nk-tb-col nk-tb-col-status">
                                    <div className="dot dot-primary d-md-none" />
                                    {kyc.status === 'pending' && (
                                      <span className="badge badge-sm badge-dim bg-outline-info d-none d-md-inline-flex">
                                        Pending
                                      </span>
                                    )}
                                    {kyc.status === 'approved' && (
                                      <span className="badge badge-sm badge-dim bg-outline-success d-none d-md-inline-flex">
                                        Approved
                                      </span>
                                    )}
                                    {kyc.status === 'reviewing' && (
                                      <span className="badge badge-sm badge-dim bg-outline-warning d-none d-md-inline-flex">
                                        Reviewing
                                      </span>
                                    )}
                                    {kyc.status === 'rejected' && (
                                      <span className="badge badge-sm badge-dim bg-outline-danger d-none d-md-inline-flex">
                                        Rejected
                                      </span>
                                    )}
                                  </div>

                                    <div className="nk-tb-col nk-tb-col-tools">
                                      <ul className="nk-tb-actions gx-2">
                                        
                                        <li className="">
                                          <KycDetails kyc={kyc} id={kyc._id} formatDate={formatDate} formatTime={formatTime} setIsLoading={setIsLoading} />
                                        </li>
                                        {/* <li className="">
                                          <span
                                            onClick={() => {
                                              if (kyc.status === 'success') {
                                                // Handle the click action here
                                                // For example, show an alert
                                                alert("Download Receipt");
                                              }
                                            }}
                                            className={`bg-white btn btn-sm btn-outline-light btn-icon success`}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Download Receipt"
                                            style={{
                                              cursor: transaction.status === 'success' ? 'pointer' : 'not-allowed' 
                                            }}
                                          >
                                            <span className="icon material-symbols-outlined">
                                              download
                                            </span>
                                          </span>
                                        </li> */}

                                      </ul>
                                    </div>
                                  </div>
                                  )
                                  
                                })
                              }

                            </div>
                          </div>

                          <div className="card-inner">
                            <ul className="pagination justify-content-center justify-content-md-start">
                          

                              <li
                                className="page-item"
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 1}
                              >
                                <button
                                  className="page-link"
                                  disabled={currentPage === 1}
                                >
                                  «
                                </button>
                              </li>

                              {[...Array(totalPages)].map((_, index) => (
                                <li
                                  key={index}
                                  className={`page-item ${
                                    index + 1 === currentPage ? "active" : ""
                                  }`}
                                >
                                  <button
                                    className="page-link"
                                    onClick={() => goToPage(index + 1)}
                                  >
                                    {index + 1}
                                  </button>
                                </li>
                              ))}

                              <li
                                className="page-item"
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                              >
                                <button
                                  className="page-link"
                                  disabled={currentPage === totalPages}
                                >
                                  »
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            }

            <UserFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserKycs;

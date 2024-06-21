import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";
import TransactionDetails from "./TransactionDetails";
import Loader from "../components/Loader";
import axios from "axios";

const Transactions = ({ globalState, ...props }) => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  // const [itemsPerPage, setItemsPerPage] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Transactions | BarterFunds";
    const token = window.sessionStorage.getItem("token");
    // const userId = window.sessionStorage.getItem("userId");

    if (!token) {
      navigate("/login");
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${process.env.REACT_APP_API_URL}/transactions/x/user`, {
        headers: headers,
      })
      .then((response) => {
        if (response.data.success) {
          const sortedTransactions = response.data.transactions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setTransactions(sortedTransactions);
          setCount(response.data.count);
          setIsLoading(false);
        } else {
          setTransactions([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };


  const filteredData = transactions.filter(
    (transaction) =>
      transaction.transactionType
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) || 
        transaction.transactionId
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // const totalPages = 10;

  // Calculate the index range of items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Get the data for the current page
  const currentPageData = filteredData.slice(startIndex, endIndex);

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

  const formatCurrency = (value) => {
    const number = Number(value);

    if (!Number.isFinite(number)) {
      return "Invalid number";
    }

    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'info'; 
      case 'success':
        return 'success'; 
      case 'cancelled':
        return 'warning'; 
      case 'failed':
        return 'danger'; 
      default:
        return '';
    }
  };
  

  return (
    <div className="nk-body npc-crypto bg-white has-sidebar">
      <div className="nk-app-root">
        <div className="nk-main ">
          <UserSidebar active={"orders"} />

          <div className="nk-wrap ">
            <UserHeader />

            {isLoading ? (
              <Loader />
            ) : (
              <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                  <div className="nk-content-body">
                    <div className="nk-block-head nk-block-head-sm">
                      <div className="nk-block-between g-3">
                        <div className="nk-block-head-content">
                          <h3 className="nk-block-title page-title">Transactions</h3>
                          <div className="nk-block-des text-soft">
                            <p>You have total {count} transactions.</p>
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
                                  <span
                                   
                                    className="btn btn-white btn-dim btn-outline-light"
                                  >
                                    <span class="icon material-symbols-outlined">
                                      cloud_download
                                    </span>
                                    <span>Export</span>
                                  </span>
                                </li>
                                <li className="nk-block-tools-opt">
                                  <div className="drodown">
                                    <span
                                     
                                      className="dropdown-toggle btn btn-icon btn-primary"
                                      data-bs-toggle="dropdown"
                                    >
                                      <span class="icon material-symbols-outlined">
                                        add
                                      </span>
                                    </span>
                                  </div>
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
                                <h5 className="title">All Transactions</h5>
                              </div>
                              <div className="card-tools me-n1">
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
                              </div>
                            </div>
                          </div>

                          <div className="card-inner p-0">
                            <div className="nk-tb-list nk-tb-tnx">
                              <div className="nk-tb-item nk-tb-head">
                                <div className="nk-tb-col">
                                  <span>Details</span>
                                </div>
                                <div className="nk-tb-col tb-col-xxl">
                                  <span>Source</span>
                                </div>
                                <div className="nk-tb-col tb-col-lg">
                                  <span>Currency</span>
                                </div>
                                <div className="nk-tb-col text-end">
                                  <span>Amount Paid</span>
                                </div>
                                <div className="nk-tb-col text-end tb-col-sm">
                                  <span>Date Created</span>
                                </div>
                                <div className="nk-tb-col nk-tb-col-status">
                                  <span className="sub-text d-none d-md-block">
                                    Status
                                  </span>
                                </div>
                                <div className="nk-tb-col nk-tb-col-tools" />
                              </div>

                              {currentPageData.length === 0 ? (
                                <div>No data</div>
                              ) : (
                                currentPageData.map((transaction) => {
                                  return(
                                    <div className="nk-tb-item" key={transaction._id}>
                                    <div className="nk-tb-col">
                                      <div className="nk-tnx-type">
                                        <div className={`nk-tnx-type-icon bg-${getStatusColor(transaction.status)}-dim text-${getStatusColor(transaction.status)}`}>
                                        <img
                                            src={transaction.currencyId ? transaction.currencyId.currencyLogo : "/assets/images/currency/btc.png"}
                                            alt="currency"
                                          />
                                        </div>
                                        <div className="nk-tnx-type-text">
                                          <span className="tb-lead">
                                            {transaction.transactionId}
                                          </span>
                                          <span className={`badge badge-dot bg-${getStatusColor(transaction.status)}`}>
                                            {transaction.transactionType === 'buy' ? "Buy" : transaction.transactionType === 'sell' ? "Sell" : transaction.transactionType === 'send' ? "Send" : "Receive"}
                                          </span>

                                        </div>
                                      </div>
                                    </div>

                                    <div className="nk-tb-col tb-col-lg">
                                      <span className="tb-lead-sub">
                                      {transaction.currencyId ? transaction.currencyId.currencyName : "Bitcoin (BTC)"}
                                      </span>
                                      <span className="text">
                                        1.00 USD = {transaction.currencyId ? formatCurrency(transaction.currencyId.exchangeRate) : "12.32"} GHS
                                      </span>
                                    </div>
                                    <div className="nk-tb-col text-end">
                                      <span className="tb-amount">
                                        {formatCurrency(transaction.amountGhs)} <span>GHS</span>
                                      </span>
                                      <span className="tb-amount-sm">
                                      {formatCurrency(transaction.amountUsd)} USD
                                      </span>
                                    </div>

                                    <div className="nk-tb-col text-end tb-col-sm">
                                      <span className="tb-amount">
                                        <span className="tb-date">
                                          {formatDate(transaction.createdAt)}
                                        </span>
                                      </span>
                                      <span className="tb-amount-sm">
                                      {formatTime(transaction.createdAt)}
                                      </span>
                                    </div>

                                    <div className="nk-tb-col nk-tb-col-status">
                                    <div className="dot dot-primary d-md-none" />
                                    {transaction.status === 'pending' && (
                                      <span className="badge badge-sm badge-dim bg-outline-info d-none d-md-inline-flex">
                                        Pending
                                      </span>
                                    )}
                                    {transaction.status === 'success' && (
                                      <span className="badge badge-sm badge-dim bg-outline-success d-none d-md-inline-flex">
                                        Completed
                                      </span>
                                    )}
                                    {transaction.status === 'cancelled' && (
                                      <span className="badge badge-sm badge-dim bg-outline-warning d-none d-md-inline-flex">
                                        Cancelled
                                      </span>
                                    )}
                                    {transaction.status === 'failed' && (
                                      <span className="badge badge-sm badge-dim bg-outline-danger d-none d-md-inline-flex">
                                        Failed
                                      </span>
                                    )}
                                  </div>

                                    <div className="nk-tb-col nk-tb-col-tools">
                                      <ul className="nk-tb-actions gx-2">
                                        
                                        <li className="">
                                          <TransactionDetails transaction={transaction} id={transaction._id} formatDate={formatDate} formatTime={formatTime} formatCurrency={formatCurrency} setIsLoading={setIsLoading} />
                                        </li>
                                        <li className="">
                                          <span
                                            onClick={() => {
                                              if (transaction.status === 'success') {
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
                                        </li>

                                      </ul>
                                    </div>
                                  </div>
                                  )
                                  
                                })
                              )}

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
            )}

            <UserFooter />

            <TransactionDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;

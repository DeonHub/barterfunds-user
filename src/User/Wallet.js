import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";
import Loader from "../components/Loader";
import axios from "axios";
import OrdersModal from "./components/OrdersModal";
import OrderDetails from "./OrderDetails";
import { Button, Result } from "antd";
import { useUser } from "./components/UserContext";

const UserWallet = () => {
  const { user } = useUser();

  const navigate = useNavigate();
  const [wallet, setWallet] = useState({});
  const [orderHistory, setOrderHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  // const [itemsPerPage, setItemsPerPage] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  const [walletId, setWalletId] = useState(0);

  useEffect(() => {
    document.title = "Barter Wallet | BarterFunds";
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
      .get(`${process.env.REACT_APP_API_URL}/wallets/x/user`, {
        headers: headers,
      })
      .then((response) => {
        if (response.data.success) {
          //   const sortedTickets = response.data.tickets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          // console.log(response.data.wallet);
          setWallet(response.data.wallet);
          setOrderHistory(response.data.wallet.orderHistory);
          setWalletId(response.data.wallet._id);
          //   setCount(response.data.count);
          setIsLoading(false);
        } else {
          setWallet({});
          setOrderHistory([]);
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

  const filteredData = orderHistory.filter(
    (order) =>
      order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.action.toLowerCase().includes(searchTerm.toLowerCase())
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
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "info";
      case "success":
        return "success";
      case "cancelled":
        return "warning";
      case "failed":
        return "danger";
      default:
        return "";
    }
  };

  return (
    <div className="nk-body npc-crypto bg-white has-sidebar">
      <div className="nk-app-root">
        <div className="nk-main ">
          <UserSidebar active={"wallet"} />
          <div className="nk-wrap ">
            <UserHeader />

            {isLoading ? (
              <Loader />
            ) : (
              <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                  <div className="nk-content-body">
                    {user.kycApproved ? (
                      <>
                        <div className="nk-block-head">
                          <div className="nk-block-head-sub">
                            <span>Account Wallet</span>{" "}
                          </div>
                          <div className="nk-block-between-md g-4">
                            <div className="nk-block-head-content">
                              <h2 className="nk-block-title fw-normal">
                                Wallet / Assets
                              </h2>
                              <div className="nk-block-des">
                                <p>
                                  Here is the list of your assets / wallets!
                                </p>
                              </div>
                            </div>
                            <div className="nk-block-head-content">
                              <ul className="nk-block-tools gx-3">
                                <li>
                                  <a
                                    href={`/user/transactions-panel`}
                                    className="btn btn-primary"
                                  >
                                    <span>Buy Sell</span>

                                    <span class="icon material-symbols-outlined">
                                      arrow_forward
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <OrdersModal
                                    text={"Withdraw"}
                                    icon={"keyboard_tab_rtl"}
                                    title={"Withdrawal Form"}
                                    action={"withdraw"}
                                    buttonText={"Submit for Processing"}
                                    topText={
                                      "Enter amount you want to withdraw from your wallet (GHS)."
                                    }
                                    isButton={true}
                                    claxx={"btn btn-dim btn-outline-light"}
                                    walletId={walletId}
                                    setIsLoading={setIsLoading}
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="nk-block">
                          <div className="nk-block-head-sm">
                            <div className="nk-block-head-content">
                              <h5 className="nk-block-title title">
                                Barter Accounts
                              </h5>
                            </div>
                          </div>
                          <div className="row g-gs">
                            <div className="col-sm-6 col-lg-4 col-xl-6 col-xxl-4">
                              <div
                                className="card card-bordered is-dark"
                                style={{ backgroundColor: "#2c3782" }}
                              >
                                <div className="nk-wgw">
                                  <div className="nk-wgw-inner">
                                    <span className="nk-wgw-name">
                                      <div className="nk-wgw-icon is-default">
                                        <i class="icon las la-coins"></i>
                                      </div>
                                      <h5 className="nk-wgw-title title">
                                        {wallet.walletName}
                                      </h5>
                                    </span>
                                    <div className="nk-wgw-balance">
                                      <div className="amount">
                                        {formatCurrency(wallet.balanceGhs)}
                                        <span className="currency currency-nio">
                                          GHS
                                        </span>
                                      </div>
                                      <div className="amount-sm">
                                        {formatCurrency(wallet.balanceUsd)}
                                        <span className="currency currency-usd">
                                          USD
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="nk-wgw-actions">
                                    <ul>
                                      <li>
                                        <a href={`/user/transactions-panel`}>
                                          <span
                                            style={{ color: "#fff" }}
                                            class="icon material-symbols-outlined"
                                          >
                                            north_east
                                          </span>
                                          <span style={{ color: "#fff" }}>
                                            Send
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href={`/user/transactions-panel`}>
                                          <span
                                            style={{ color: "#fff" }}
                                            class="icon material-symbols-outlined"
                                          >
                                            south_west
                                          </span>
                                          <span style={{ color: "#fff" }}>
                                            Receive
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <OrdersModal
                                          text={"Deposit"}
                                          icon={"keyboard_tab"}
                                          title={"Deposit Form"}
                                          action={"deposit"}
                                          buttonText={"Proceed to Payment"}
                                          topText={
                                            "Enter amount you want to deposit into your wallet."
                                          }
                                          isButton={false}
                                          walletId={walletId}
                                          setIsLoading={setIsLoading}
                                        />
                                      </li>
                                      <li>
                                        <OrdersModal
                                          text={"Withdraw"}
                                          icon={"keyboard_tab_rtl"}
                                          title={"Withdrawal Form"}
                                          action={"withdraw"}
                                          buttonText={"Submit for Processing"}
                                          topText={
                                            "Enter amount you want to withdraw from your wallet."
                                          }
                                          isButton={false}
                                          walletId={walletId}
                                          setIsLoading={setIsLoading}
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="nk-wgw-more dropdown">
                                    <span
                                      className="btn btn-icon btn-trigger"
                                      data-bs-toggle="dropdown"
                                    >
                                      <i class="icon las la-ellipsis-h"></i>
                                    </span>
                                    <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                      <ul className="link-list-plain sm">
                                        <li>
                                          <span>Details</span>
                                        </li>
                                        <li>
                                          <span>Edit</span>
                                        </li>
                                        <li>
                                          <span>Delete</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-6 col-xxl-4">
                              <div className="card card-bordered">
                                <div className="nk-wgw">
                                  <div className="nk-wgw-inner">
                                    <span className="nk-wgw-name">
                                      <h5 className="nk-wgw-title title">
                                        Referral Commission Earned
                                      </h5>
                                    </span>
                                    <div className="nk-wgw-balance">
                                      <div className="amount">
                                        0.00
                                        <span className="currency currency-eth">
                                          GHS
                                        </span>
                                      </div>
                                      <div className="amount-sm">
                                        0.00
                                        <span className="currency currency-usd">
                                          USD
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="nk-wgw-actions">
                                    <ul>
                                      <li>
                                        <a href={`/user/transactions-panel`}>
                                          <span class="icon material-symbols-outlined">
                                            north_east
                                          </span>
                                          <span>Send</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href={`/user/transactions-panel`}>
                                          <span class="icon material-symbols-outlined">
                                            south_west
                                          </span>
                                          <span>Receive</span>
                                        </a>
                                      </li>
                                      <li>
                                        <span>
                                          <span class="icon material-symbols-outlined">
                                            keyboard_tab
                                          </span>
                                          <span>Deposit</span>
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <span class="icon material-symbols-outlined">
                                            keyboard_tab_rtl
                                          </span>
                                          <span>Withdraw</span>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* <div className="nk-wgw-more dropdown">
                                            <a
                                              href="#"
                                              className="btn btn-icon btn-trigger"
                                              data-bs-toggle="dropdown"
                                            >
                                              <em className="icon ni ni-more-h" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                              <ul className="link-list-plain sm">
                                                <li>
                                                  <a href="#">Details</a>
                                                </li>
                                                <li>
                                                  <a href="#">Edit</a>
                                                </li>
                                                <li>
                                                  <a href="#">Delete</a>
                                                </li>
                                                <li>
                                                  <a href="#">Make Default</a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="nk-block">
                          <div class="card card-bordered card-stretch">
                            <div class="card-inner-group">
                              <div class="card-inner">
                                <div class="card-title-group">
                                  <div class="card-title">
                                    <h5 class="title">All Orders</h5>
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

                                  <div
                                    class="card-search search-wrap"
                                    data-search="search"
                                  >
                                    <div class="search-content">
                                      <span
                                        class="search-back btn btn-icon toggle-search"
                                        data-target="search"
                                      >
                                        <em class="icon ni ni-arrow-left"></em>
                                      </span>
                                      <input
                                        type="text"
                                        class="form-control border-transparent form-focus-none"
                                        placeholder="Quick search by transaction"
                                      />
                                      <button class="search-submit btn btn-icon">
                                        <em class="icon ni ni-search"></em>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card-inner p-0">
                                <div class="nk-tb-list nk-tb-tnx">
                                  <div class="nk-tb-item nk-tb-head">
                                    <div class="nk-tb-col">
                                      <span>Details</span>
                                    </div>
                                    <div class="nk-tb-col tb-col-lg">
                                      <span>Order</span>
                                    </div>
                                    <div class="nk-tb-col text-end">
                                      <span>Amount</span>
                                    </div>
                                    <div class="nk-tb-col text-end tb-col-sm">
                                      <span>Balance</span>
                                    </div>
                                    <div class="nk-tb-col nk-tb-col-status">
                                      <span class="sub-text d-none d-md-block">
                                        Status
                                      </span>
                                    </div>
                                    <div class="nk-tb-col nk-tb-col-tools"></div>
                                  </div>

                                  {currentPageData.length === 0 ? (
                                    <div>No data</div>
                                  ) : (
                                    currentPageData.map((order) => {
                                      return (
                                        <div class="nk-tb-item">
                                          <div class="nk-tb-col">
                                            <div class="nk-tnx-type">
                                              <div
                                                class={`nk-tnx-type-icon bg-${getStatusColor(
                                                  order.status
                                                )}-dim text-${getStatusColor(
                                                  order.status
                                                )}`}
                                              >
                                                <span class="icon material-symbols-outlined">
                                                  {order.action === "deposit"
                                                    ? "keyboard_tab"
                                                    : "keyboard_tab_rtl"}
                                                </span>
                                              </div>
                                              <div class="nk-tnx-type-text">
                                                <span class="tb-lead">
                                                  {order.action === "deposit"
                                                    ? "Deposited Funds"
                                                    : "Withdrawal Funds"}
                                                </span>
                                                <span class="tb-date">
                                                  {formatDate(order.createdAt)}{" "}
                                                  {formatTime(order.createdAt)}
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="nk-tb-col tb-col-lg">
                                            <span class="tb-lead-sub">
                                              {order.orderId}
                                            </span>
                                            <span
                                              class={`badge badge-dot bg-${getStatusColor(
                                                order.status
                                              )}`}
                                            >
                                              {order.action === "deposit"
                                                ? "Deposit"
                                                : "Withdrawal"}
                                            </span>
                                          </div>
                                          <div class="nk-tb-col text-end">
                                            <span class="tb-amount">
                                              {formatCurrency(order.amountGhs)}
                                              <span> GHS</span>
                                            </span>
                                            <span class="tb-amount-sm">
                                              {formatCurrency(order.amountUsd)}{" "}
                                              USD
                                            </span>
                                          </div>
                                          <div class="nk-tb-col text-end tb-col-sm">
                                            <span class="tb-amount">
                                              {formatCurrency(order.balanceGhs)}
                                              <span> GHS</span>
                                            </span>
                                            <span class="tb-amount-sm">
                                              {formatCurrency(order.balanceUsd)}{" "}
                                              USD
                                            </span>
                                          </div>

                                          <div className="nk-tb-col nk-tb-col-status">
                                            <div className="dot dot-primary d-md-none" />
                                            {order.status === "pending" && (
                                              <span className="badge badge-sm badge-dim bg-outline-info d-none d-md-inline-flex">
                                                Pending
                                              </span>
                                            )}
                                            {order.status === "success" && (
                                              <span className="badge badge-sm badge-dim bg-outline-success d-none d-md-inline-flex">
                                                Completed
                                              </span>
                                            )}
                                            {order.status === "cancelled" && (
                                              <span className="badge badge-sm badge-dim bg-outline-warning d-none d-md-inline-flex">
                                                Cancelled
                                              </span>
                                            )}
                                            {order.status === "failed" && (
                                              <span className="badge badge-sm badge-dim bg-outline-danger d-none d-md-inline-flex">
                                                Failed
                                              </span>
                                            )}
                                          </div>

                                          <div className="nk-tb-col nk-tb-col-tools">
                                            <ul className="nk-tb-actions gx-2">
                                              <li className="">
                                                <OrderDetails
                                                  order={order}
                                                  id={order._id}
                                                  formatDate={formatDate}
                                                  formatTime={formatTime}
                                                  formatCurrency={
                                                    formatCurrency
                                                  }
                                                  setIsLoading={setIsLoading}
                                                  walletAddress={
                                                    wallet.walletAddress
                                                  }
                                                />
                                              </li>
                                              <li className="">
                                                <span
                                                  onClick={() => {
                                                    if (
                                                      order.status === "success"
                                                    ) {
                                                      alert("Download Receipt");
                                                    }
                                                  }}
                                                  className={`bg-white btn btn-sm btn-outline-light btn-icon success`}
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  title="Download Receipt"
                                                  style={{
                                                    cursor:
                                                      order.status === "success"
                                                        ? "pointer"
                                                        : "not-allowed",
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
                                      );
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
                                        index + 1 === currentPage
                                          ? "active"
                                          : ""
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
                      </>
                    ) : (
                      <Result
                        status="403"
                        title="Verify Your Identity (KYC)"
                        subTitle="Complete your KYC verification to claim your BarterFunds Wallet. If you have already submitted, please check on the progress or contact our support for help"
                        extra={[
                          <Button href={`/user/kycs`} type="primary">
                            Verify Identity
                          </Button>,
                          <Button
                            href="mailto:support@barterfunds.com"
                            type="default"
                          >
                            Contact Support
                          </Button>,
                        ]}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}

            <UserFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWallet;

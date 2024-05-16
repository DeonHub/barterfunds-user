import React, { useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./User.css";
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";

const UserWallet = () => {
  return (
    <div className="nk-body npc-crypto bg-white has-sidebar">
      <div className="nk-app-root">
        <div className="nk-main ">
          <UserSidebar active={'wallet'} />
          <div className="nk-wrap ">
            <UserHeader />

            <div className="nk-content nk-content-fluid">
              <div className="container-xl wide-lg">
                <div className="nk-content-body">
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
                          <p>Here is the list of your assets / wallets!</p>
                        </div>
                      </div>
                      <div className="nk-block-head-content">
                        <ul className="nk-block-tools gx-3">

                          <li>
                            <a href="#" className="btn btn-primary">
                              <span>Buy Sell</span>{" "}

                              <span class="icon material-symbols-outlined">arrow_forward</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="btn btn-dim btn-outline-light"
                            >
                              <span>Withdraw</span>
                              <em className="icon ni ni-arrow-long-right" />
                            </a>
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
                        <div className="card card-bordered is-dark" style={{ backgroundColor: '#2c3782'}}>
                          <div className="nk-wgw">
                            <div className="nk-wgw-inner">
                              <a
                                className="nk-wgw-name"
                                href=""
                              >
                                <div className="nk-wgw-icon is-default">
                                  
                                  <i class="icon las la-coins"></i>
                                </div>
                                <h5 className="nk-wgw-title title">
                                  Barter Wallet
                                </h5>
                              </a>
                              <div className="nk-wgw-balance">
                                <div className="amount">
                                  40.509505
                                  <span className="currency currency-nio">
                                    GHS
                                  </span>
                                </div>
                                <div className="amount-sm">
                                  8,924.63
                                  <span className="currency currency-usd">
                                    USD
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="nk-wgw-actions">
                              <ul>
                                <li>
                                  <a href="#">
                                  <span class="icon material-symbols-outlined">north_east</span>
                                    <span>Send</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                  <span class="icon material-symbols-outlined">south_west</span>
                                    <span>Receive</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span class="icon material-symbols-outlined">keyboard_tab</span>
                                    <span>Deposit</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span class="icon material-symbols-outlined">keyboard_tab_rtl</span>
                                    <span>Withdraw</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="nk-wgw-more dropdown">
                              <a
                                href="#"
                                className="btn btn-icon btn-trigger"
                                data-bs-toggle="dropdown"
                              >
                                
                                <i class="icon las la-ellipsis-h"></i>
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
                              <a
                                className="nk-wgw-name"
                                href="/frontend/admin/wallet-bitcoin.html"
                              >
                                <div className="nk-wgw-icon">
                                  <em className="icon ni ni-sign-eth" />
                                </div>
                                <h5 className="nk-wgw-title title">
                                  Ethereum Wallet
                                </h5>
                              </a>
                              <div className="nk-wgw-balance">
                                <div className="amount">
                                  0.452058
                                  <span className="currency currency-eth">
                                    ETH
                                  </span>
                                </div>
                                <div className="amount-sm">
                                  1,583.25
                                  <span className="currency currency-usd">
                                    USD
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="nk-wgw-actions">
                              <ul>
                                <li>
                                  <a href="#">
                                    <em className="icon ni ni-arrow-up-right" />
                                    <span>Send</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <em className="icon ni ni-arrow-down-left" />
                                    <span>Receive</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <em className="icon ni ni-arrow-to-right" />
                                    <span>Withdraw</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="nk-wgw-more dropdown">
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
                            </div>
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
                                                
                                                <div class="card-search search-wrap" data-search="search">
                                                    <div class="search-content">
                                                        <a href="#" class="search-back btn btn-icon toggle-search"
                                                            data-target="search"><em
                                                                class="icon ni ni-arrow-left"></em></a>
                                                        <input type="text"
                                                            class="form-control border-transparent form-focus-none"
                                                            placeholder="Quick search by transaction" />
                                                        <button class="search-submit btn btn-icon"><em
                                                                class="icon ni ni-search"></em></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-inner p-0">
                                            <div class="nk-tb-list nk-tb-tnx">
                                                <div class="nk-tb-item nk-tb-head">
                                                    <div class="nk-tb-col"><span>Details</span></div>
                                                    <div class="nk-tb-col tb-col-xxl"><span>Source</span></div>
                                                    <div class="nk-tb-col tb-col-lg"><span>Order</span></div>
                                                    <div class="nk-tb-col text-end"><span>Amount</span></div>
                                                    <div class="nk-tb-col text-end tb-col-sm"><span>Balance</span></div>
                                                    <div class="nk-tb-col nk-tb-col-status"><span
                                                            class="sub-text d-none d-md-block">Status</span></div>
                                                    <div class="nk-tb-col nk-tb-col-tools"></div>
                                                </div>
                                                <div class="nk-tb-item">
                                                    <div class="nk-tb-col">
                                                        <div class="nk-tnx-type">
                                                            <div class="nk-tnx-type-icon bg-success-dim text-success">
                                                                <em class="icon ni ni-arrow-up-right"></em>
                                                            </div>
                                                            <div class="nk-tnx-type-text">
                                                                <span class="tb-lead">Deposited Funds</span>
                                                                <span class="tb-date">18/10/2019 12:04 PM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-xxl">
                                                        <span class="tb-lead-sub">Using PayPal Account</span>
                                                        <span class="tb-sub">mypay*****com</span>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-lg">
                                                        <span class="tb-lead-sub">YWLX52JG73</span>
                                                        <span class="badge badge-dot bg-success">Deposit</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end">
                                                        <span class="tb-amount">+ 0.010201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">1290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end tb-col-sm">
                                                        <span class="tb-amount">1.30910201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">101290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-status">
                                                        <div class="dot dot-success d-md-none"></div>
                                                        <span
                                                            class="badge badge-sm badge-dim bg-outline-success d-none d-md-inline-flex">Completed</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-tools">
                                                        <ul class="nk-tb-actions gx-2">
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Approve"><em
                                                                        class="icon ni ni-done"></em></a>
                                                            </li>
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#tranxDetails" data-bs-toggle="modal"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                                                    title="Details"><em class="icon ni ni-eye"></em></a>
                                                            </li>
                                                            <li>
                                                                <div class="dropdown">
                                                                    <a href="#"
                                                                        class="dropdown-toggle bg-white btn btn-sm btn-outline-light btn-icon"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-h"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt">
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-done"></em><span>Approve</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-cross-round"></em><span>Reject</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-repeat"></em><span>Check</span></a>
                                                                            </li>
                                                                            <li><a href="#tranxDetails"
                                                                                    data-bs-toggle="modal"><em
                                                                                        class="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="nk-tb-item">
                                                    <div class="nk-tb-col">
                                                        <div class="nk-tnx-type">
                                                            <div class="nk-tnx-type-icon bg-warning-dim text-warning">
                                                                <em class="icon ni ni-arrow-up-right"></em>
                                                            </div>
                                                            <div class="nk-tnx-type-text">
                                                                <span class="tb-lead">Withdrawal Funds</span>
                                                                <span class="tb-date">18/10/2019 12:04 PM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-xxl">
                                                        <span class="tb-lead-sub">Using PayPal Account</span>
                                                        <span class="tb-sub">mypay*****com</span>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-lg">
                                                        <span class="tb-lead-sub">YWLX52JG73</span>
                                                        <span class="badge badge-dot bg-warning">Withdrawal</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end">
                                                        <span class="tb-amount">+ 0.010201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">1290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end tb-col-sm">
                                                        <span class="tb-amount">1.30910201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">101290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-status">
                                                        <div class="dot dot-success d-md-none"></div>
                                                        <span
                                                            class="badge badge-sm badge-dim bg-outline-warning d-none d-md-inline-flex">Upcoming</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-tools">
                                                        <ul class="nk-tb-actions gx-2">
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Approve"><em
                                                                        class="icon ni ni-done"></em></a>
                                                            </li>
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#tranxDetails" data-bs-toggle="modal"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                                                    title="Details"><em class="icon ni ni-eye"></em></a>
                                                            </li>
                                                            <li>
                                                                <div class="dropdown">
                                                                    <a href="#"
                                                                        class="dropdown-toggle bg-white btn btn-sm btn-outline-light btn-icon"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-h"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt">
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-done"></em><span>Approve</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-cross-round"></em><span>Reject</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-repeat"></em><span>Check</span></a>
                                                                            </li>
                                                                            <li><a href="#tranxDetails"
                                                                                    data-bs-toggle="modal"><em
                                                                                        class="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="nk-tb-item">
                                                    <div class="nk-tb-col">
                                                        <div class="nk-tnx-type">
                                                            <div class="nk-tnx-type-icon bg-info-dim text-info">
                                                                <em class="icon ni ni-arrow-up-right"></em>
                                                            </div>
                                                            <div class="nk-tnx-type-text">
                                                                <span class="tb-lead">Credited Profits</span>
                                                                <span class="tb-date">18/10/2019 12:04 PM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-xxl">
                                                        <span class="tb-lead-sub">Using PayPal Account</span>
                                                        <span class="tb-sub">mypay*****com</span>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-lg">
                                                        <span class="tb-lead-sub">YWLX52JG73</span>
                                                        <span class="badge badge-dot bg-info">Profit</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end">
                                                        <span class="tb-amount">+ 0.010201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">1290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end tb-col-sm">
                                                        <span class="tb-amount">1.30910201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">101290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-status">
                                                        <div class="dot dot-info d-md-none"></div>
                                                        <span
                                                            class="badge badge-sm badge-dim bg-outline-info d-none d-md-inline-flex">Pending</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-tools">
                                                        <ul class="nk-tb-actions gx-2">
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Approve"><em
                                                                        class="icon ni ni-done"></em></a>
                                                            </li>
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#tranxDetails" data-bs-toggle="modal"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                                                    title="Details"><em class="icon ni ni-eye"></em></a>
                                                            </li>
                                                            <li>
                                                                <div class="dropdown">
                                                                    <a href="#"
                                                                        class="dropdown-toggle bg-white btn btn-sm btn-outline-light btn-icon"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-h"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt">
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-done"></em><span>Approve</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-cross-round"></em><span>Reject</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-repeat"></em><span>Check</span></a>
                                                                            </li>
                                                                            <li><a href="#tranxDetails"
                                                                                    data-bs-toggle="modal"><em
                                                                                        class="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="nk-tb-item">
                                                    <div class="nk-tb-col">
                                                        <div class="nk-tnx-type">
                                                            <div class="nk-tnx-type-icon bg-danger-dim text-danger">
                                                                <em class="icon ni ni-arrow-up-right"></em>
                                                            </div>
                                                            <div class="nk-tnx-type-text">
                                                                <span class="tb-lead">Withdrawal Funds</span>
                                                                <span class="tb-date">18/10/2019 12:04 PM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-xxl">
                                                        <span class="tb-lead-sub">Using PayPal Account</span>
                                                        <span class="tb-sub">mypay*****com</span>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-lg">
                                                        <span class="tb-lead-sub">YWLX52JG73</span>
                                                        <span class="badge badge-dot bg-danger">Withdrawal</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end">
                                                        <span class="tb-amount">+ 0.010201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">1290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end tb-col-sm">
                                                        <span class="tb-amount">1.30910201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">101290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-status">
                                                        <div class="dot dot-success d-md-none"></div>
                                                        <span
                                                            class="badge badge-sm badge-dim bg-outline-danger d-none d-md-inline-flex">Rejected</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-tools">
                                                        <ul class="nk-tb-actions gx-2">
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Approve"><em
                                                                        class="icon ni ni-done"></em></a>
                                                            </li>
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#tranxDetails" data-bs-toggle="modal"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                                                    title="Details"><em class="icon ni ni-eye"></em></a>
                                                            </li>
                                                            <li>
                                                                <div class="dropdown">
                                                                    <a href="#"
                                                                        class="dropdown-toggle bg-white btn btn-sm btn-outline-light btn-icon"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-h"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt">
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-done"></em><span>Approve</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-cross-round"></em><span>Reject</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-repeat"></em><span>Check</span></a>
                                                                            </li>
                                                                            <li><a href="#tranxDetails"
                                                                                    data-bs-toggle="modal"><em
                                                                                        class="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="nk-tb-item">
                                                    <div class="nk-tb-col">
                                                        <div class="nk-tnx-type">
                                                            <div class="nk-tnx-type-icon bg-warning-dim text-warning">
                                                                <em class="icon ni ni-arrow-up-right"></em>
                                                            </div>
                                                            <div class="nk-tnx-type-text">
                                                                <span class="tb-lead">Deposited Funds</span>
                                                                <span class="tb-date">18/10/2019 12:04 PM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-xxl">
                                                        <span class="tb-lead-sub">Using PayPal Account</span>
                                                        <span class="tb-sub">mypay*****com</span>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-lg">
                                                        <span class="tb-lead-sub">YWLX52JG73</span>
                                                        <span class="badge badge-dot bg-warning">Deposit</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end">
                                                        <span class="tb-amount">+ 0.010201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">1290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end tb-col-sm">
                                                        <span class="tb-amount">1.30910201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">101290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-status">
                                                        <div class="dot dot-warning d-md-none"></div>
                                                        <span
                                                            class="badge badge-sm badge-dim bg-outline-warning d-none d-md-inline-flex">Pending</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-tools">
                                                        <ul class="nk-tb-actions gx-2">
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Approve"><em
                                                                        class="icon ni ni-done"></em></a>
                                                            </li>
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#tranxDetails" data-bs-toggle="modal"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                                                    title="Details"><em class="icon ni ni-eye"></em></a>
                                                            </li>
                                                            <li>
                                                                <div class="dropdown">
                                                                    <a href="#"
                                                                        class="dropdown-toggle bg-white btn btn-sm btn-outline-light btn-icon"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-h"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt">
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-done"></em><span>Approve</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-cross-round"></em><span>Reject</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-repeat"></em><span>Check</span></a>
                                                                            </li>
                                                                            <li><a href="#tranxDetails"
                                                                                    data-bs-toggle="modal"><em
                                                                                        class="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="nk-tb-item">
                                                    <div class="nk-tb-col">
                                                        <div class="nk-tnx-type">
                                                            <div class="nk-tnx-type-icon bg-warning-dim text-warning">
                                                                <em class="icon ni ni-arrow-up-right"></em>
                                                            </div>
                                                            <div class="nk-tnx-type-text">
                                                                <span class="tb-lead">Withdrawal Funds</span>
                                                                <span class="tb-date">18/10/2019 12:04 PM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-xxl">
                                                        <span class="tb-lead-sub">Using PayPal Account</span>
                                                        <span class="tb-sub">mypay*****com</span>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-lg">
                                                        <span class="tb-lead-sub">YWLX52JG73</span>
                                                        <span class="badge badge-dot bg-warning">Withdrawal</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end">
                                                        <span class="tb-amount">+ 0.010201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">1290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end tb-col-sm">
                                                        <span class="tb-amount">1.30910201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">101290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-status">
                                                        <div class="dot dot-success d-md-none"></div>
                                                        <span
                                                            class="badge badge-sm badge-dim bg-outline-warning d-none d-md-inline-flex">Upcoming</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-tools">
                                                        <ul class="nk-tb-actions gx-2">
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Approve"><em
                                                                        class="icon ni ni-done"></em></a>
                                                            </li>
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#tranxDetails" data-bs-toggle="modal"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                                                    title="Details"><em class="icon ni ni-eye"></em></a>
                                                            </li>
                                                            <li>
                                                                <div class="dropdown">
                                                                    <a href="#"
                                                                        class="dropdown-toggle bg-white btn btn-sm btn-outline-light btn-icon"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-h"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt">
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-done"></em><span>Approve</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-cross-round"></em><span>Reject</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-repeat"></em><span>Check</span></a>
                                                                            </li>
                                                                            <li><a href="#tranxDetails"
                                                                                    data-bs-toggle="modal"><em
                                                                                        class="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="nk-tb-item">
                                                    <div class="nk-tb-col">
                                                        <div class="nk-tnx-type">
                                                            <div class="nk-tnx-type-icon bg-info-dim text-info">
                                                                <em class="icon ni ni-arrow-up-right"></em>
                                                            </div>
                                                            <div class="nk-tnx-type-text">
                                                                <span class="tb-lead">Credited Profits</span>
                                                                <span class="tb-date">18/10/2019 12:04 PM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-xxl">
                                                        <span class="tb-lead-sub">Using PayPal Account</span>
                                                        <span class="tb-sub">mypay*****com</span>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-lg">
                                                        <span class="tb-lead-sub">YWLX52JG73</span>
                                                        <span class="badge badge-dot bg-info">Profit</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end">
                                                        <span class="tb-amount">+ 0.010201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">1290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end tb-col-sm">
                                                        <span class="tb-amount">1.30910201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">101290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-status">
                                                        <div class="dot dot-info d-md-none"></div>
                                                        <span
                                                            class="badge badge-sm badge-dim bg-outline-info d-none d-md-inline-flex">Pending</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-tools">
                                                        <ul class="nk-tb-actions gx-2">
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Approve"><em
                                                                        class="icon ni ni-done"></em></a>
                                                            </li>
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#tranxDetails" data-bs-toggle="modal"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                                                    title="Details"><em class="icon ni ni-eye"></em></a>
                                                            </li>
                                                            <li>
                                                                <div class="dropdown">
                                                                    <a href="#"
                                                                        class="dropdown-toggle bg-white btn btn-sm btn-outline-light btn-icon"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-h"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt">
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-done"></em><span>Approve</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-cross-round"></em><span>Reject</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-repeat"></em><span>Check</span></a>
                                                                            </li>
                                                                            <li><a href="#tranxDetails"
                                                                                    data-bs-toggle="modal"><em
                                                                                        class="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="nk-tb-item">
                                                    <div class="nk-tb-col">
                                                        <div class="nk-tnx-type">
                                                            <div class="nk-tnx-type-icon bg-danger-dim text-danger">
                                                                <em class="icon ni ni-arrow-up-right"></em>
                                                            </div>
                                                            <div class="nk-tnx-type-text">
                                                                <span class="tb-lead">Withdrawal Funds</span>
                                                                <span class="tb-date">18/10/2019 12:04 PM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-xxl">
                                                        <span class="tb-lead-sub">Using PayPal Account</span>
                                                        <span class="tb-sub">mypay*****com</span>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-lg">
                                                        <span class="tb-lead-sub">YWLX52JG73</span>
                                                        <span class="badge badge-dot bg-danger">Withdrawal</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end">
                                                        <span class="tb-amount">+ 0.010201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">1290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end tb-col-sm">
                                                        <span class="tb-amount">1.30910201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">101290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-status">
                                                        <div class="dot dot-success d-md-none"></div>
                                                        <span
                                                            class="badge badge-sm badge-dim bg-outline-danger d-none d-md-inline-flex">Rejected</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-tools">
                                                        <ul class="nk-tb-actions gx-2">
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Approve"><em
                                                                        class="icon ni ni-done"></em></a>
                                                            </li>
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#tranxDetails" data-bs-toggle="modal"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                                                    title="Details"><em class="icon ni ni-eye"></em></a>
                                                            </li>
                                                            <li>
                                                                <div class="dropdown">
                                                                    <a href="#"
                                                                        class="dropdown-toggle bg-white btn btn-sm btn-outline-light btn-icon"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-h"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt">
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-done"></em><span>Approve</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-cross-round"></em><span>Reject</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-repeat"></em><span>Check</span></a>
                                                                            </li>
                                                                            <li><a href="#tranxDetails"
                                                                                    data-bs-toggle="modal"><em
                                                                                        class="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="nk-tb-item">
                                                    <div class="nk-tb-col">
                                                        <div class="nk-tnx-type">
                                                            <div class="nk-tnx-type-icon bg-warning-dim text-warning">
                                                                <em class="icon ni ni-arrow-up-right"></em>
                                                            </div>
                                                            <div class="nk-tnx-type-text">
                                                                <span class="tb-lead">Deposited Funds</span>
                                                                <span class="tb-date">18/10/2019 12:04 PM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-xxl">
                                                        <span class="tb-lead-sub">Using PayPal Account</span>
                                                        <span class="tb-sub">mypay*****com</span>
                                                    </div>
                                                    <div class="nk-tb-col tb-col-lg">
                                                        <span class="tb-lead-sub">YWLX52JG73</span>
                                                        <span class="badge badge-dot bg-warning">Deposit</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end">
                                                        <span class="tb-amount">+ 0.010201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">1290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col text-end tb-col-sm">
                                                        <span class="tb-amount">1.30910201 <span>BTC</span></span>
                                                        <span class="tb-amount-sm">101290.49 USD</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-status">
                                                        <div class="dot dot-warning d-md-none"></div>
                                                        <span
                                                            class="badge badge-sm badge-dim bg-outline-warning d-none d-md-inline-flex">Pending</span>
                                                    </div>
                                                    <div class="nk-tb-col nk-tb-col-tools">
                                                        <ul class="nk-tb-actions gx-2">
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Approve"><em
                                                                        class="icon ni ni-done"></em></a>
                                                            </li>
                                                            <li class="nk-tb-action-hidden">
                                                                <a href="#tranxDetails" data-bs-toggle="modal"
                                                                    class="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                                                    title="Details"><em class="icon ni ni-eye"></em></a>
                                                            </li>
                                                            <li>
                                                                <div class="dropdown">
                                                                    <a href="#"
                                                                        class="dropdown-toggle bg-white btn btn-sm btn-outline-light btn-icon"
                                                                        data-bs-toggle="dropdown"><em
                                                                            class="icon ni ni-more-h"></em></a>
                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                        <ul class="link-list-opt">
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-done"></em><span>Approve</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-cross-round"></em><span>Reject</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        class="icon ni ni-repeat"></em><span>Check</span></a>
                                                                            </li>
                                                                            <li><a href="#tranxDetails"
                                                                                    data-bs-toggle="modal"><em
                                                                                        class="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-inner">
                                            <ul class="pagination justify-content-center justify-content-md-start">
                                                <li class="page-item"><a class="page-link" href="#">Prev</a></li>
                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><span class="page-link"><em
                                                            class="icon ni ni-more-h"></em></span></li>
                                                <li class="page-item"><a class="page-link" href="#">6</a></li>
                                                <li class="page-item"><a class="page-link" href="#">7</a></li>
                                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>





                </div>
              </div>
            </div>



  



            <UserFooter />

          </div>
        </div>

      </div>
    </div>
  );
};

export default UserWallet;

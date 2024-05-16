import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './User.css'
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";


const UserSupport = () => {


  return (
    <div className="nk-body npc-crypto bg-white has-sidebar">
      <div className="nk-app-root">
          {/*Main Start*/}
          <div className="nk-main ">
              {/*Sidebar Start*/}
              <UserSidebar active={'support'} />
              {/*Sidebar End*/}
              <div className="nk-wrap ">
                  {/*Main Header Start*/}
                  <UserHeader />
                  {/*Main Header End*/}
                  {/*Content Start*/}
                  <div className="nk-content nk-content-fluid">
<div className="container-xl wide-lg">
  <div className="nk-content-body">
    <div className="nk-chat nk-chat-boxed">
      <div className="nk-chat-aside">
        <div className="nk-chat-aside-head">
          <div className="nk-chat-aside-user">
            <div className="dropdown">
              <a
                href="#"
                className="dropdown-toggle dropdown-indicator"
                data-bs-toggle="dropdown"
              >
                <div className="user-avatar">
                  <img src="/frontend/user/images/avatar/b-sm.jpg" alt="" />
                </div>
                <div className="title">Chats</div>
              </a>
              <div className="dropdown-menu">
                <ul className="link-list-opt no-bdr">
                  <li>
                    <a href="#">
                      <span>Contacts</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Channels</span>
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">
                      <span>Help</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* .nk-chat-aside-user */}
          <ul className="nk-chat-aside-tools g-2">
            <li>
              <div className="dropdown">
                <a
                  href="#"
                  className="btn btn-round btn-icon btn-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <em className="icon ni ni-setting-alt-fill" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="#">
                        <span>Settings</span>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">
                        <span>Message Requests</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Archives Chats</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Unread Chats</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Group Chats</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="btn btn-round btn-icon btn-light">
                <em className="icon ni ni-edit-alt-fill" />
              </a>
            </li>
          </ul>
          {/* .nk-chat-aside-tools */}
        </div>
        {/* .nk-chat-aside-head */}
        <div className="nk-chat-aside-body" data-simplebar="">
          <div className="nk-chat-aside-search">
            <div className="form-group">
              <div className="form-control-wrap">
                <div className="form-icon form-icon-left">
                  <em className="icon ni ni-search" />
                </div>
                <input
                  type="text"
                  className="form-control form-round"
                  id="default-03"
                  placeholder="Search by name"
                />
              </div>
            </div>
          </div>
          {/* .nk-chat-aside-search */}
          <div className="nk-chat-aside-panel nk-chat-fav">
            <h6 className="title overline-title-alt">Favorites</h6>
            <ul className="fav-list">
              <li>
                <a
                  href="#"
                  className="btn btn-lg btn-icon btn-outline-light btn-white btn-round"
                >
                  <em className="icon ni ni-plus" />
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="user-avatar">
                    <img src="/frontend/user/images/avatar/b-sm.jpg" alt="" />
                    <span className="status dot dot-lg dot-success" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="user-avatar">
                    <span>AB</span>
                    <span className="status dot dot-lg dot-success" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="user-avatar bg-pink">
                    <span>KH</span>
                    <span className="status dot dot-lg dot-success" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="user-avatar bg-purple">
                    <span>VB</span>
                    <span className="status dot dot-lg dot-success" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="user-avatar">
                    <img src="/frontend/user/images/avatar/a-sm.jpg" alt="" />
                    <span className="status dot dot-lg dot-success" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="user-avatar">
                    <img src="/frontend/user/images/avatar/c-sm.jpg" alt="" />
                    <span className="status dot dot-lg dot-success" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="user-avatar">
                    <img src="/frontend/user/images/avatar/d-sm.jpg" alt="" />
                    <span className="status dot dot-lg dot-success" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="user-avatar bg-info">
                    <span>SK</span>
                    <span className="status dot dot-lg dot-success" />
                  </div>
                </a>
              </li>
            </ul>
            {/* .fav-list */}
          </div>
          {/* .nk-chat-fav */}
          <div className="nk-chat-list">
            <h6 className="title overline-title-alt">Messages</h6>
            <ul className="chat-list">
              <li className="chat-item">
                <a className="chat-link chat-open" href="#">
                  <div className="chat-media user-avatar bg-purple">
                    <span>IH</span>
                    <span className="status dot dot-lg dot-gray" />
                  </div>
                  <div className="chat-info">
                    <div className="chat-from">
                      <div className="name">Iliash Hossain</div>
                      <span className="time">Now</span>
                    </div>
                    <div className="chat-context">
                      <div className="text">
                        <p>
                          You: Please confrim if you got my last messages.
                        </p>
                      </div>
                      <div className="status delivered">
                        <em className="icon ni ni-check-circle-fill" />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="chat-actions">
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <em className="icon ni ni-more-h" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <ul className="link-list-opt no-bdr">
                        <li>
                          <a href="#">Mute</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">Hide</a>
                        </li>
                        <li>
                          <a href="#">Delete</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">Mark as Unread</a>
                        </li>
                        <li>
                          <a href="#">Ignore Messages</a>
                        </li>
                        <li>
                          <a href="#">Block Messages</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* .chat-item */}
              <li className="chat-item is-unread">
                <a className="chat-link chat-open" href="#">
                  <div className="chat-media user-avatar">
                    <span>AB</span>
                    <span className="status dot dot-lg dot-gray" />
                  </div>
                  <div className="chat-info">
                    <div className="chat-from">
                      <div className="name">Michael Adzato</div>
                      <span className="time">4:49 AM</span>
                    </div>
                    <div className="chat-context">
                      <div className="text">
                        <p>
                          Hi, I am Ishtiyak, can you help me with this problem
                          ?
                        </p>
                      </div>
                      <div className="status unread">
                        <em className="icon ni ni-bullet-fill" />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="chat-actions">
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <em className="icon ni ni-more-h" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <ul className="link-list-opt no-bdr">
                        <li>
                          <a href="#">Mute</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">Hide</a>
                        </li>
                        <li>
                          <a href="#">Delete</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">Mark as Unread</a>
                        </li>
                        <li>
                          <a href="#">Ignore Messages</a>
                        </li>
                        <li>
                          <a href="#">Block Messages</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* .chat-item */}
              <li className="chat-item">
                <a className="chat-link chat-open" href="#">
                  <div className="chat-media user-avatar">
                    <img src="/frontend/user/images/avatar/b-sm.jpg" alt="" />
                  </div>
                  <div className="chat-info">
                    <div className="chat-from">
                      <div className="name">George Philips</div>
                      <span className="time">6 Apr</span>
                    </div>
                    <div className="chat-context">
                      <div className="text">
                        <p>Have you seens the claim from Rose?</p>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="chat-actions">
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <em className="icon ni ni-more-h" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <ul className="link-list-opt no-bdr">
                        <li>
                          <a href="#">Mute</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">Hide</a>
                        </li>
                        <li>
                          <a href="#">Delete</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">Mark as Unread</a>
                        </li>
                        <li>
                          <a href="#">Ignore Messages</a>
                        </li>
                        <li>
                          <a href="#">Block Messages</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* .chat-item */}
              <li className="chat-item">
                <a className="chat-link chat-open" href="#">
                  <div className="chat-media user-avatar">
                    <img src="/frontend/user/images/avatar/a-sm.jpg" alt="" />
                    <span className="status dot dot-lg dot-success" />
                  </div>
                  <div className="chat-info">
                    <div className="chat-from">
                      <div className="name">Larry Hughes</div>
                      <span className="time">3 Apr</span>
                    </div>
                    <div className="chat-context">
                      <div className="text">
                        <p>Hi Frank! How is you doing?</p>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="chat-actions">
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <em className="icon ni ni-more-h" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <ul className="link-list-opt no-bdr">
                        <li>
                          <a href="#">Mute</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">Hide</a>
                        </li>
                        <li>
                          <a href="#">Delete</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">Mark as Unread</a>
                        </li>
                        <li>
                          <a href="#">Ignore Messages</a>
                        </li>
                        <li>
                          <a href="#">Block Messages</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* .chat-item */}
              <li className="chat-item">
                <a className="chat-link chat-open" href="#">
                  <div className="chat-media user-avatar">
                    <span>TW</span>
                  </div>
                  <div className="chat-info">
                    <div className="chat-from">
                      <div className="name">Tammy Wilson</div>
                      <span className="time">27 Mar</span>
                    </div>
                    <div className="chat-context">
                      <div className="text">
                        <p>
                          You: I just bought a new computer but i am having
                          some problem
                        </p>
                      </div>
                      <div className="status sent">
                        <em className="icon ni ni-check-circle" />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="chat-actions">
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <em className="icon ni ni-more-h" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <ul className="link-list-opt no-bdr">
                        <li>
                          <a href="#">Mute</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">Hide</a>
                        </li>
                        <li>
                          <a href="#">Delete</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">Mark as Unread</a>
                        </li>
                        <li>
                          <a href="#">Ignore Messages</a>
                        </li>
                        <li>
                          <a href="#">Block Messages</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* .chat-item */}
              <li className="chat-item">
                <a className="chat-link chat-open" href="#">
                  <div className="chat-media user-avatar user-avatar-multiple">
                    <div className="user-avatar">
                      <img
                        src="/frontend/user/images/avatar/c-sm.jpg"
                        alt=""
                      />
                    </div>
                    <div className="user-avatar">
                      <span>AB</span>
                    </div>
                  </div>
                  <div className="chat-info">
                    <div className="chat-from">
                      <div className="name">BarterFunds Group</div>
                      <span className="time">27 Mar</span>
                    </div>
                    <div className="chat-context">
                      <div className="text">
                        <p>
                          You: I just bought a new computer but i am having
                          some problem
                        </p>
                      </div>
                      <div className="status sent">
                        <em className="icon ni ni-check-circle" />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="chat-actions">
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <em className="icon ni ni-more-h" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <ul className="link-list-opt no-bdr">
                        <li>
                          <a href="#">Mute</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">Hide</a>
                        </li>
                        <li>
                          <a href="#">Delete</a>
                        </li>
                        <li className="divider" />
                        <li>
                          <a href="#">Mark as Unread</a>
                        </li>
                        <li>
                          <a href="#">Ignore Messages</a>
                        </li>
                        <li>
                          <a href="#">Block Messages</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* .chat-item */}
            </ul>
            {/* .chat-list */}
          </div>
          {/* .nk-chat-list */}
        </div>
      </div>
      {/* .nk-chat-aside */}
      <div className="nk-chat-body profile-shown">
        <div className="nk-chat-head">
          <ul className="nk-chat-head-info">
            <li className="nk-chat-body-close">
              <a
                href="#"
                className="btn btn-icon btn-trigger nk-chat-hide ms-n1"
              >
                <em className="icon ni ni-arrow-left" />
              </a>
            </li>
            <li className="nk-chat-head-user">
              <div className="user-card">
                <div className="user-avatar bg-purple">
                  <span>IH</span>
                </div>
                <div className="user-info">
                  <div className="lead-text">Iliash Hossain</div>
                  <div className="sub-text">
                    <span className="d-none d-sm-inline me-1">Active </span>{" "}
                    35m ago
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul className="nk-chat-head-tools">
            <li>
              <a href="#" className="btn btn-icon btn-trigger text-primary">
                <em className="icon ni ni-call-fill" />
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-icon btn-trigger text-primary">
                <em className="icon ni ni-video-fill" />
              </a>
            </li>
            <li className="d-none d-sm-block">
              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle btn btn-icon btn-trigger text-primary"
                  data-bs-toggle="dropdown"
                >
                  <em className="icon ni ni-setting-fill" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a className="dropdown-item" href="#">
                        <em className="icon ni ni-archive" />
                        <span>Make as Archive</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <em className="icon ni ni-cross-c" />
                        <span>Remove Conversion</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <em className="icon ni ni-setting" />
                        <span>More Options</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="me-n1 me-md-n2">
              <a
                href="#"
                className="btn btn-icon btn-trigger text-primary chat-profile-toggle"
              >
                <em className="icon ni ni-alert-circle-fill" />
              </a>
            </li>
          </ul>
          <div className="nk-chat-head-search">
            <div className="form-group">
              <div className="form-control-wrap">
                <div className="form-icon form-icon-left">
                  <em className="icon ni ni-search" />
                </div>
                <input
                  type="text"
                  className="form-control form-round"
                  id="chat-search"
                  placeholder="Search in Conversation"
                />
              </div>
            </div>
          </div>
          {/* .nk-chat-head-search */}
        </div>
        {/* .nk-chat-head */}
        <div className="nk-chat-panel" data-simplebar="">
          <div className="chat is-you">
            <div className="chat-avatar">
              <div className="user-avatar bg-purple">
                <span>IH</span>
              </div>
            </div>
            <div className="chat-content">
              <div className="chat-bubbles">
                <div className="chat-bubble">
                  <div className="chat-msg"> Hello! </div>
                  <ul className="chat-msg-more">
                    <li className="d-none d-sm-block">
                      <a href="#" className="btn btn-icon btn-sm btn-trigger">
                        <em className="icon ni ni-reply-fill" />
                      </a>
                    </li>
                    <li>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em className="icon ni ni-more-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                          <ul className="link-list-opt no-bdr">
                            <li className="d-sm-none">
                              <a href="#">
                                <em className="icon ni ni-reply-fill" />
                                Reply
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-pen-alt-fill" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-trash-fill" />
                                Remove
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="chat-bubble">
                  <div className="chat-msg">
                    {" "}
                    I found an issues when try to purchase the product.{" "}
                  </div>
                  <ul className="chat-msg-more">
                    <li className="d-none d-sm-block">
                      <a href="#" className="btn btn-icon btn-sm btn-trigger">
                        <em className="icon ni ni-reply-fill" />
                      </a>
                    </li>
                    <li>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em className="icon ni ni-more-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                          <ul className="link-list-opt no-bdr">
                            <li className="d-sm-none">
                              <a href="#">
                                <em className="icon ni ni-reply-fill" />
                                Reply
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-pen-alt-fill" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-trash-fill" />
                                Remove
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="chat-meta">
                <li>Iliash Hossain</li>
                <li>29 Apr, 2020 4:28 PM</li>
              </ul>
            </div>
          </div>
          {/* .chat */}
          <div className="chat is-me">
            <div className="chat-content">
              <div className="chat-bubbles">
                <div className="chat-bubble">
                  <div className="chat-msg">
                    {" "}
                    Thanks for inform. We just solved the issues. Please check
                    now.{" "}
                  </div>
                  <ul className="chat-msg-more">
                    <li className="d-none d-sm-block">
                      <a href="#" className="btn btn-icon btn-sm btn-trigger">
                        <em className="icon ni ni-reply-fill" />
                      </a>
                    </li>
                    <li>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em className="icon ni ni-more-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm">
                          <ul className="link-list-opt no-bdr">
                            <li className="d-sm-none">
                              <a href="#">
                                <em className="icon ni ni-reply-fill" />
                                Reply
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-pen-alt-fill" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-trash-fill" />
                                Remove
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="chat-meta">
                <li>Michael Adzato</li>
                <li>29 Apr, 2020 4:12 PM</li>
              </ul>
            </div>
          </div>
          {/* .chat */}
          <div className="chat is-you">
            <div className="chat-avatar">
              <div className="user-avatar bg-purple">
                <span>IH</span>
              </div>
            </div>
            <div className="chat-content">
              <div className="chat-bubbles">
                <div className="chat-bubble">
                  <div className="chat-msg"> This is really cool. </div>
                  <ul className="chat-msg-more">
                    <li className="d-none d-sm-block">
                      <a href="#" className="btn btn-icon btn-sm btn-trigger">
                        <em className="icon ni ni-reply-fill" />
                      </a>
                    </li>
                    <li>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em className="icon ni ni-more-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                          <ul className="link-list-opt no-bdr">
                            <li className="d-sm-none">
                              <a href="#">
                                <em className="icon ni ni-reply-fill" />
                                Reply
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-pen-alt-fill" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-trash-fill" />
                                Remove
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="chat-bubble">
                  <div className="chat-msg">
                    {" "}
                    It’s perfect. Thanks for letting me know.
                  </div>
                  <ul className="chat-msg-more">
                    <li className="d-none d-sm-block">
                      <a href="#" className="btn btn-icon btn-sm btn-trigger">
                        <em className="icon ni ni-reply-fill" />
                      </a>
                    </li>
                    <li>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em className="icon ni ni-more-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                          <ul className="link-list-opt no-bdr">
                            <li className="d-sm-none">
                              <a href="#">
                                <em className="icon ni ni-reply-fill" />
                                Reply
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-pen-alt-fill" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-trash-fill" />
                                Remove
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="chat-meta">
                <li>Iliash Hossain</li>
                <li>29 Apr, 2020 4:28 PM</li>
              </ul>
            </div>
          </div>
          {/* .chat */}
          <div className="chat-sap">
            <div className="chat-sap-meta">
              <span>12 May, 2020</span>
            </div>
          </div>
          {/* .chat-sap */}
          <div className="chat is-you">
            <div className="chat-avatar">
              <div className="user-avatar bg-purple">
                <span>IH</span>
              </div>
            </div>
            <div className="chat-content">
              <div className="chat-bubbles">
                <div className="chat-bubble">
                  <div className="chat-msg">
                    {" "}
                    Hey, I am facing problem as i can not login into
                    application. Can you help me to reset my password?{" "}
                  </div>
                  <ul className="chat-msg-more">
                    <li className="d-none d-sm-block">
                      <a href="#" className="btn btn-icon btn-sm btn-trigger">
                        <em className="icon ni ni-reply-fill" />
                      </a>
                    </li>
                    <li>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em className="icon ni ni-more-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                          <ul className="link-list-opt no-bdr">
                            <li className="d-sm-none">
                              <a href="#">
                                <em className="icon ni ni-reply-fill" />
                                Reply
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-pen-alt-fill" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-trash-fill" />
                                Remove
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="chat-meta">
                <li>3:49 PM</li>
              </ul>
            </div>
          </div>
          {/* .chat */}
          <div className="chat is-me">
            <div className="chat-content">
              <div className="chat-bubbles">
                <div className="chat-bubble">
                  <div className="chat-msg">
                    {" "}
                    Definately. We are happy to help you.
                  </div>
                  <ul className="chat-msg-more">
                    <li className="d-none d-sm-block">
                      <a href="#" className="btn btn-icon btn-sm btn-trigger">
                        <em className="icon ni ni-reply-fill" />
                      </a>
                    </li>
                    <li>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em className="icon ni ni-more-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm">
                          <ul className="link-list-opt no-bdr">
                            <li className="d-sm-none">
                              <a href="#">
                                <em className="icon ni ni-reply-fill" />
                                Reply
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-pen-alt-fill" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-trash-fill" />
                                Remove
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="chat-meta">
                <li>3:55 PM</li>
              </ul>
            </div>
          </div>
          {/* .chat */}
          <div className="chat is-you">
            <div className="chat-avatar">
              <div className="user-avatar bg-purple">
                <span>IH</span>
              </div>
            </div>
            <div className="chat-content">
              <div className="chat-bubbles">
                <div className="chat-bubble">
                  <div className="chat-msg">
                    {" "}
                    Thank you! Let me know when it done.
                  </div>
                  <ul className="chat-msg-more">
                    <li className="d-none d-sm-block">
                      <a href="#" className="btn btn-icon btn-sm btn-trigger">
                        <em className="icon ni ni-reply-fill" />
                      </a>
                    </li>
                    <li>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em className="icon ni ni-more-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                          <ul className="link-list-opt no-bdr">
                            <li className="d-sm-none">
                              <a href="#">
                                <em className="icon ni ni-reply-fill" />
                                Reply
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-pen-alt-fill" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-trash-fill" />
                                Remove
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="chat-meta">
                <li>3:49 PM</li>
              </ul>
            </div>
          </div>
          {/* .chat */}
          <div className="chat is-me">
            <div className="chat-content">
              <div className="chat-bubbles">
                <div className="chat-bubble">
                  <div className="chat-msg">
                    {" "}
                    We just reset your account. Please check your email for
                    verification.{" "}
                  </div>
                  <ul className="chat-msg-more">
                    <li className="d-none d-sm-block">
                      <a href="#" className="btn btn-icon btn-sm btn-trigger">
                        <em className="icon ni ni-reply-fill" />
                      </a>
                    </li>
                    <li>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em className="icon ni ni-more-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm">
                          <ul className="link-list-opt no-bdr">
                            <li className="d-sm-none">
                              <a href="#">
                                <em className="icon ni ni-reply-fill" />
                                Reply
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-pen-alt-fill" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-trash-fill" />
                                Remove
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="chat-bubble">
                  <div className="chat-msg">
                    {" "}
                    Please confirm if your got email{" "}
                  </div>
                  <ul className="chat-msg-more">
                    <li className="d-none d-sm-block">
                      <a href="#" className="btn btn-icon btn-sm btn-trigger">
                        <em className="icon ni ni-reply-fill" />
                      </a>
                    </li>
                    <li>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em className="icon ni ni-more-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm">
                          <ul className="link-list-opt no-bdr">
                            <li className="d-sm-none">
                              <a href="#">
                                <em className="icon ni ni-reply-fill" />
                                Reply
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-pen-alt-fill" />
                                Edit
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-trash-fill" />
                                Remove
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="chat-meta">
                <li>
                  <span>Now</span>{" "}
                  <em className="icon ni ni-check-circle-fill" />
                </li>
              </ul>
            </div>
          </div>
          {/* .chat */}
        </div>
        {/* .nk-chat-panel */}
        <div className="nk-chat-editor">
          <div className="nk-chat-editor-upload  ms-n1">
            <a
              href="#"
              className="btn btn-sm btn-icon btn-trigger text-primary toggle-opt"
              data-target="chat-upload"
            >
              <em className="icon la la-plus-circle" />
            </a>
            <div className="chat-upload-option" data-content="chat-upload">
              <ul className="">
                <li>
                  <a href="#">
                    <em className="icon ni ni-img-fill" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="icon ni ni-camera-fill" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="icon ni ni-mic" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="icon ni ni-grid-sq" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nk-chat-editor-form">
            <div className="form-control-wrap">
              <textarea
                className="form-control form-control-simple no-resize"
                rows={1}
                id="default-textarea"
                placeholder="Type your message..."
                defaultValue={""}
              />
            </div>
          </div>
          <ul className="nk-chat-editor-tools g-2">
            <li>
              <a
                href="#"
                className="btn btn-sm btn-icon btn-trigger text-primary"
              >
                <em className="icon ni ni-happyf-fill" />
              </a>
            </li>
            <li>
              <button className="btn btn-round btn-primary btn-icon">
                <em className="icon ni ni-send-alt" />
              </button>
            </li>
          </ul>
        </div>
        {/* .nk-chat-editor */}
        <div className="nk-chat-profile visible" data-simplebar="">
          <div className="user-card user-card-s2 my-4">
            <div className="user-avatar md bg-purple">
              <span>IH</span>
            </div>
            <div className="user-info">
              <h5>Iliash Hossain</h5>
              <span className="sub-text">Active 35m ago</span>
            </div>
            <div className="user-card-menu dropdown">
              <a
                href="#"
                className="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <em className="icon ni ni-more-h" />
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <ul className="link-list-opt no-bdr">
                  <li>
                    <a href="#">
                      <em className="icon ni ni-eye" />
                      <span>View Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="icon ni ni-na" />
                      <span>Block Messages</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chat-profile">
            <div className="chat-profile-group">
              <a
                href="#"
                className="chat-profile-head"
                data-bs-toggle="collapse"
                data-bs-target="#chat-options"
              >
                <h6 className="title overline-title">Options</h6>
                <span className="indicator-icon">
                  <em className="icon ni ni-chevron-down" />
                </span>
              </a>
              <div
                className="chat-profile-body collapse show"
                id="chat-options"
              >
                <div className="chat-profile-body-inner">
                  <ul className="chat-profile-options">
                    <li>
                      <a className="chat-option-link" href="#">
                        <em className="icon icon-circle bg-light ni ni-edit-alt" />
                        <span className="lead-text">Nickname</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="chat-option-link chat-search-toggle"
                        href="#"
                      >
                        <em className="icon icon-circle bg-light ni ni-search" />
                        <span className="lead-text">
                          Search In Conversation
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="chat-option-link" href="#">
                        <em className="icon icon-circle bg-light ni ni-circle-fill" />
                        <span className="lead-text">Change Theme</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* .chat-profile-group */}
            <div className="chat-profile-group">
              <a
                href="#"
                className="chat-profile-head"
                data-bs-toggle="collapse"
                data-bs-target="#chat-settings"
              >
                <h6 className="title overline-title">Settings</h6>
                <span className="indicator-icon">
                  <em className="icon ni ni-chevron-down" />
                </span>
              </a>
              <div
                className="chat-profile-body collapse show"
                id="chat-settings"
              >
                <div className="chat-profile-body-inner">
                  <ul className="chat-profile-settings">
                    <li>
                      <div className="custom-control custom-control-sm custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch2"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch2"
                        >
                          Notifications
                        </label>
                      </div>
                    </li>
                    <li>
                      <a className="chat-option-link" href="#">
                        <em className="icon icon-circle bg-light ni ni-bell-off-fill" />
                        <div>
                          <span className="lead-text">Ignore Messages</span>
                          <span className="sub-text">
                            You won’t be notified when message you.
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="chat-option-link" href="#">
                        <em className="icon icon-circle bg-light ni ni-alert-fill" />
                        <div>
                          <span className="lead-text">Something Wrong</span>
                          <span className="sub-text">
                            Give feedback and report conversion.
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* .chat-profile-group */}
            <div className="chat-profile-group">
              <a
                href="#"
                className="chat-profile-head"
                data-bs-toggle="collapse"
                data-bs-target="#chat-photos"
              >
                <h6 className="title overline-title">Shared Photos</h6>
                <span className="indicator-icon">
                  <em className="icon ni ni-chevron-down" />
                </span>
              </a>
              <div
                className="chat-profile-body collapse show"
                id="chat-photos"
              >
                <div className="chat-profile-body-inner">
                  <ul className="chat-profile-media">
                    <li>
                      <a href="#">
                        <img
                          src="/frontend/user/images/slides/slide-a.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/frontend/user/images/slides/slide-b.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/frontend/user/images/slides/slide-c.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* .chat-profile-group */}
          </div>{" "}
          {/* .chat-profile */}
        </div>
        {/* .nk-chat-profile */}
      </div>
      {/* .nk-chat-body */}
    </div>
    {/* .nk-chat */}
  </div>
</div>
</div>

                  {/*Content End*/}
                  {/*Footer Start*/}
                  <UserFooter />
                  {/*Footer End*/}

              </div>
          </div>
          {/*Main End*/}

      </div>
    </div> 



  );

}


export default UserSupport;

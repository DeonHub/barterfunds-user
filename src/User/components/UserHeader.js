import React from "react";
import { user } from "./data";
import './userjs';
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";


const UserHeader = () => {


  return (
    <div className="nk-header nk-header-fixed is-light">
    <div className="container-fluid">
      <div className="nk-header-wrap">
        <div className="nk-menu-trigger d-xl-none ms-n1">
          <span
            
            className="nk-nav-toggle nk-quick-nav-icon"
            data-target="sidebarMenu"
          >
            <em className="icon la la-bars" />
          </span>
        </div>
        <div className="nk-header-brand d-xl-none">
          <a href="/assets/index.html" className="logo-link">
            <img
              className="logo-light logo-img"
              src="/assets/images/logo.png"
              srcSet="/assets/images/logo2x.png 2x"
              alt="logo"
            />
            <img
              className="logo-dark logo-img"
              src="/assets/images/logo.png"
              alt="logo"
            />
          </a>
        </div>
        {/* .nk-header-brand */}
        <div className="nk-header-news d-none d-xl-block">
          <div className="nk-news-list">
            <span className="nk-news-item" >
              <div className="nk-news-icon">
                <em className="icon la la-newspaper"></em> 
              </div>
              <div className="nk-news-text">
                <p>
                  Get realtime update on our exchange rates
                  <span> Subscribe to our newsletter now!</span>
                </p>
                <em className="icon la la-external-link"></em>
              </div>
            </span>
          </div>
        </div>
        {/* .nk-header-news */}
        <div className="nk-header-tools">
          <ul className="nk-quick-nav">
            <li className="dropdown user-dropdown">
              <span className="dropdown-toggle" data-bs-toggle="dropdown">
                <div className="user-toggle">
                  <div className="user-avatar sm">

                  {!user.kycApproved ? (
                          <Avatar size={30} icon={<UserOutlined />} />
                        ) : (
                          <Avatar
                            size={30}
                            src={
                              <img
                                src={
                                  "https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.webp?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0="
                                }
                                alt="avatar"
                              />
                            }
                          />
                        )}
                  </div>
                  <div className="user-info d-none d-md-block">
                    <div className="user-status">Administrator</div>
                    <div className="user-name dropdown-indicator">
                      {user.firstname} {user.surname}
                    </div>
                  </div>
                </div>
              </span>
              <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1">
                <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                  <div className="user-card">
                    <div className="user-avatar">
                      {!user.kycApproved ? (
                          <Avatar size={30} icon={<UserOutlined />} />
                        ) : (
                          <Avatar
                            size={38}
                            src={
                              <img
                                src={
                                  "https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.webp?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0="
                                }
                                alt="avatar"
                              />
                            }
                          />
                        )}
                    </div>
                    <div className="user-info">
                      <span className="lead-text">{user.firstname} {user.surname}</span>
                      <span className="sub-text">{user.email}</span>
                    </div>
                  </div>
                </div>
                <div className="dropdown-inner">
                  <ul className="link-list">
                    <li>
                      <a href={`${process.env.REACT_APP_PUBLIC_URL}/user/profile`}>
                        <em className="icon la la-user-alt" />
                        <span>View Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="user/profile-setting.html">
                        <em className="icon las la-lock" />
                        <span>Password Reset</span>
                      </a>
                    </li>
                    <li>
                      <a href="user/profile-activity.html">
                        <em className="icon las la-chart-line" />
                        <span>Login Activity</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-inner">
                  <ul className="link-list">
                    <li>
                      <span>
                        <em className="icon las la-sign-out-alt" />
                        <span>Sign out</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* .dropdown */}
            <li className="dropdown notification-dropdown me-n1">
              <span
                className="dropdown-toggle nk-quick-nav-icon"
                data-bs-toggle="dropdown"
              >
                <div className="icon-status icon-status-info">
                  <em className="icon la la-bell" />
                </div>
              </span>
              <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-menu-s1">
                <div className="dropdown-head">
                  <span className="sub-title nk-dropdown-title">
                    Notifications
                  </span>
                  <span>Mark All as Read</span>
                </div>
                <div className="dropdown-body">
                  <div className="nk-notification">
                    <div className="nk-notification-item dropdown-inner">
                      <div className="nk-notification-icon">
                        <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                      </div>
                      <div className="nk-notification-content">
                        <div className="nk-notification-text">
                          You have requested to
                          <span>Widthdrawl</span>
                        </div>
                        <div className="nk-notification-time">2 hrs ago</div>
                      </div>
                    </div>
                    <div className="nk-notification-item dropdown-inner">
                      <div className="nk-notification-icon">
                        <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                      </div>
                      <div className="nk-notification-content">
                        <div className="nk-notification-text">
                          Your <span>Deposit Order</span> is placed
                        </div>
                        <div className="nk-notification-time">2 hrs ago</div>
                      </div>
                    </div>
                    <div className="nk-notification-item dropdown-inner">
                      <div className="nk-notification-icon">
                        <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                      </div>
                      <div className="nk-notification-content">
                        <div className="nk-notification-text">
                          You have requested to
                          <span>Widthdrawl</span>
                        </div>
                        <div className="nk-notification-time">2 hrs ago</div>
                      </div>
                    </div>
                    <div className="nk-notification-item dropdown-inner">
                      <div className="nk-notification-icon">
                        <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                      </div>
                      <div className="nk-notification-content">
                        <div className="nk-notification-text">
                          Your <span>Deposit Order</span> is placed
                        </div>
                        <div className="nk-notification-time">2 hrs ago</div>
                      </div>
                    </div>
                    <div className="nk-notification-item dropdown-inner">
                      <div className="nk-notification-icon">
                        <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                      </div>
                      <div className="nk-notification-content">
                        <div className="nk-notification-text">
                          You have requested to
                          <span>Widthdrawl</span>
                        </div>
                        <div className="nk-notification-time">2 hrs ago</div>
                      </div>
                    </div>
                    <div className="nk-notification-item dropdown-inner">
                      <div className="nk-notification-icon">
                        <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                      </div>
                      <div className="nk-notification-content">
                        <div className="nk-notification-text">
                          Your <span>Deposit Order</span> is placed
                        </div>
                        <div className="nk-notification-time">2 hrs ago</div>
                      </div>
                    </div>
                  </div>
                  {/* .nk-notification */}
                </div>
                {/* .nk-dropdown-body */}
                <div className="dropdown-foot center">
                  <a href="/">View All</a>
                </div>
              </div>
            </li>
            {/* .dropdown */}
          </ul>
          {/* .nk-quick-nav */}
        </div>
        {/* .nk-header-tools */}
      </div>
      {/* .nk-header-wrap */}
    </div>
    {/* .container-fliud */}
  </div>
  
    
  );
}


export default UserHeader;

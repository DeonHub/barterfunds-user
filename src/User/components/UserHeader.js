import React, { useState, useEffect } from "react";
// import './userjs';
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import axios from "axios";
import Bell from "./Bell";

const UserHeader = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [notifications, setNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState(0);


  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${process.env.REACT_APP_API_URL}/notifications/x/user`, {
        headers: headers,
      })
      .then((response) => {
        if (response.data.success) {
          const sortedNotifications = response.data.notifications.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setNotifications(sortedNotifications);
          setUnreadNotifications(sortedNotifications.filter((notification) => !notification.read).length);
        } else {
          setNotifications([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);


  const handleLogout = () => {
    // Clear all items from sessionStorage
    window.sessionStorage.clear();
    window.localStorage.clear();

    navigate('/login');
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


  const handleToggle = () => {
    const sidebar = document.querySelector('.nk-sidebar') || document.querySelector('.nk-sidebar-mobile');
    if (sidebar) {
      if (sidebar.classList.contains('nk-sidebar')) {
        sidebar.classList.remove('nk-sidebar');
        sidebar.classList.add('nk-sidebar-mobile');
      } else {
        sidebar.classList.remove('nk-sidebar-mobile');
        sidebar.classList.add('nk-sidebar');
      }
    }
  };
  


  return (

    <div className="nk-header nk-header-fixed is-light">
    <div className="container-fluid">
      <div className="nk-header-wrap">
        <div className="nk-menu-trigger me-n2" style={{ cursor: "pointer" }}>
          <span
            
            className="nk-nav-toggle nk-quick-nav-icon"
            data-target="sidebarMenu"
            onClick={handleToggle}
          >
            <em className="icon la la-bars" />
          </span>
        </div>
        <div className="nk-header-brand d-xl-none">
          <a href={`/user/dashboard`} className="logo-link">
            <img
              className="logo-light logo-img"
              src="/assets/images/logo.png"
              srcSet="/assets/images/logo.png"
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

                  {!user.profilePicture ? (
                          <Avatar size={30} icon={<UserOutlined />} />
                        ) : (
                          <Avatar
                            size={30}
                            src={
                              <img
                                src={user.profilePicture}
                                alt="avatar"
                              />
                            }
                          />
                        )}
                  </div>
                  <div className="user-info d-none d-md-block">
                    <div className="user-status text-bold">{user.firstname} {user.surname}</div>
                    <div className="user-name dropdown-indicator">
                      {user.username}
                    </div>
                  </div>
                </div>
              </span>
              <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1">
                <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                  <div className="user-card">
                    <div className="user-avatar sm">
                    {!user.profilePicture ? (
                          <Avatar size={30} icon={<UserOutlined />} />
                        ) : (
                          <Avatar
                            size={30}
                            src={
                              <img
                                src={user.profilePicture}
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
                      <a href={`/user/profile`}>
                        <em className="icon la la-user-alt" />
                        <span>View Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href={`/user/password-reset`}>
                        <em className="icon las la-lock" />
                        <span>Password Reset</span>
                      </a>
                    </li>
                    <li>
                      <a href={`/`}>
                        <em className="icon las la-chart-line" />
                        <span>Login Activity</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-inner">
                  <ul className="link-list">
                    <li>
                      <span style={{ cursor: "pointer" }} onClick={handleLogout}>
                        <em className="icon las la-sign-out-alt" />
                        <span>Sign out</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="dropdown notification-dropdown me-n1">
            <Bell notificationCount={unreadNotifications} />
              <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-menu-s1">
                <div className="dropdown-head">
                  <span className="sub-title nk-dropdown-title">
                    Notifications
                  </span>
                </div>
                <div className="dropdown-body">
                  <div className="nk-notification">
                  {notifications.map((notification) => {
                      const isUnread = !notification.read;
                      return (

                        
                        <a
                          href="/user/notifications"
                          className={`nk-notification-item dropdown-inner ${isUnread ? 'unread' : 'read'}`}
                          key={notification._id} 
                        >
                          <div className="nk-notification-icon">
                            <img
                              className={`icon icon-circle bg-${isUnread ? 'primary' : 'success'}-dim`}
                              src={'/assets/images/logo-icon.png'}
                              alt="noti"
                            />
                          </div>
                          <div className="nk-notification-content">
                            <div
                              className="nk-notification-text"
                              style={{ fontWeight: isUnread ? 'bold' : 'normal' }}
                            >
                              {notification.subject}
                              
                            </div>
                            <div className="nk-notification-time" style={{ fontWeight: isUnread ? 'bold' : 'normal' }}>
                              {formatDate(notification.createdAt)}, {formatTime(notification.createdAt)}
                            </div>
                          </div>
                        </a>
                        
                      );
                    })}

                    
                    
                  </div>
                  
                </div>
                
                <div className="dropdown-foot center">
                  <a href="/user/notifications">View All</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>


  );
}


export default UserHeader;

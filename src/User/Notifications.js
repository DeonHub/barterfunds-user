import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";
import Loader from "../components/Loader";
import axios from "axios";
import NotificationDetails from "./NotificationDetails";
import DeleteModal from "./components/DeleteModal";

const Notifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [index, setIndex] = useState('');
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  // const [itemsPerPage, setItemsPerPage] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  const [unreadNotificationx, setUnreadNotificationx] = useState(0);


  useEffect(() => {
    document.title = "User Notifications | BarterFunds";
    setIsLoading(true);
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
          // console.log(response.data)
          const sortedNotifications = response.data.notifications.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setNotifications(sortedNotifications);
          setUnreadNotificationx(sortedNotifications.filter((notification) => !notification.read).length);
          setIndex(response.data.index)
          setIsLoading(false);
        } else {
          setNotifications([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
      setIsLoading(false);
  }, [navigate]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = notifications.filter(
    (notification) =>
      notification.subject.toLowerCase().includes(searchTerm.toLowerCase())
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



  return (
    <div className="nk-body npc-crypto bg-white has-sidebar">
      <div className="nk-app-root">
        <div className="nk-main ">
          <UserSidebar active={"dashboard"} />
          <div className="nk-wrap ">
            <UserHeader unreadNotificationx={unreadNotificationx} />

            {isLoading ? (
              <Loader />
            ) : (
              index && (
              <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                  <div className="nk-content-body">
                      <>
                        
                       
                        <div class="nk-block">
                          <div class="card card-bnotificationed card-stretch">
                            <div class="card-inner-group">
                              <div class="card-inner">
                                <div class="card-title-group">
                                  <div class="card-title">
                                    <h5 class="title">All Notifications</h5>
                                    {/* <p>You have a total of {unreadNotificationx} unread notifications</p> */}
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
                                        class="form-control bnotification-transparent form-focus-none"
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
                                      <span>Subject</span>
                                    </div>
                                    <div class="nk-tb-col tb-col-lg">
                                      <span>Date Created</span>
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
                                    currentPageData.map((notification) => {
                                      const isUnread = !notification.read;
                                      return (
                                        <div class="nk-tb-item" key={notification._id}>
                                          <div class="nk-tb-col">
                                            <div class="nk-tnx-type">
                                              <div
                                                class={`nk-tnx-type-icon `}
                                              >
                                                <img
                                                className={`icon icon-circle bg-${isUnread ? 'primary' : 'success'}-dim w-100 h-100`}
                                                src={'/assets/images/logo-icon.png'}
                                                alt="noti"
                                                
                                              />
                                              </div>

                                              <div class="nk-tnx-type-text" >
                                                <span class="tb-lead" style={{ fontWeight: isUnread ? 'bold' : 'normal' }}>
                                                  {notification.subject}
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="nk-tb-col tb-col-lg">
                                            <span class="tb-lead-sub" style={{ fontWeight: isUnread ? 'bold' : 'normal' }}>
                                            {formatDate(notification.createdAt)}<br/>
                                            {formatTime(notification.createdAt)}
                                            </span>
                                           
                                          </div>
                                          
                                         

                                          <div className="nk-tb-col nk-tb-col-status">
                                            <div className="dot dot-primary d-md-none" />
                                           
                                              <span className="badge badge-sm badge-dim bg-outline-info d-none d-md-inline-flex">
                                              {notification.read ? 'Read' : 'Unread' }
                                              </span>
                                          
                                           
                                            
                                          </div>

                                          <div className="nk-tb-col nk-tb-col-tools">
                                            <ul className="nk-tb-actions gx-2">
                                              <li className="">
                                                <NotificationDetails
                                                  notification={notification}
                                                  id={notification._id}
                                                  formatDate={formatDate}
                                                  formatTime={formatTime}
                                                 
                                                  setIsLoading={setIsLoading}
                                                  setNotifications={setNotifications}
                                                  setUnreadNotificationx={setUnreadNotificationx}
                                                
                                                />
                                              </li>
                                              <li className="">
                                                <DeleteModal title={'Delete Notification'} content={'Are you sure you want to delete this notification?'} notification={notification} />
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
                    
                  </div>
                </div>
              </div>
              )            

            )}

            <UserFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

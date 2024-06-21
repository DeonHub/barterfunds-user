import React, { useEffect, useState } from "react";
import "./User.css";
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";
import { useUser } from "./components/UserContext";
import { countries } from "./components/data";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Loader from "../components/Loader";
import axios from "axios";
import openNotification from "../components/OpenNotification";


import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [formState, setFormState] = useState({
    profilePicture: "",
    firstname: "",
    surname: "",
    email: "",
    contact: "",
    nationality: "",
    residentialAddress: ""
  });

  useEffect(() => {
    document.title = "User Profile | BarterFunds";
    const token = window.sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }


    const fetchData = async () => {
      if (user) {
        setFormState({
          profilePicture: user.profilePicture,
          firstname: user.firstname,
          surname: user.surname,
          email: user.email,
          contact: user.contact,
          nationality: user.nationality,
          residentialAddress: user.residentialAddress
        });
      }
      setIsLoading(false);
    };

    fetchData();
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    const newValue = type === "file" ? files[0] : value;

    setFormState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));

  };


  const triggerFileInput = () => {
    document.getElementById('avatar-file-input').click();
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    setIsLoading(true);

    const token = window.sessionStorage.getItem("token");

    const body = new FormData();
    for (const key in formState) {
      body.append(key, formState[key]);
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .patch(`${process.env.REACT_APP_API_URL}/users/1234567890`, body, { headers: headers })
      .then((response) => {
        if (response.data.success) {
          // setMessage('Login Successfully')
          openNotification(
            "topRight",
            "success",
            "User Details Updated",
            "Your user details have been updated successfully. Redirecting to your profile page..."
          );
          // console.log("response.data :>> ", response.data);
          // setPassword("");
          // setConfirmPassword("");

          setTimeout(() => {
            window.location.href = `/user/profile`;
          }, 2000);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        openNotification(
          "topRight",
          "error",
          "Error",
          error.response.data.message
        );

        console.log("error :>> ", error.response.data.message);
      });
  };

  return (
    <div className="nk-body npc-crypto bg-white has-sidebar">
      <div className="nk-app-root">
        <div className="nk-main ">
          <UserSidebar active={"dashboard"} />

          <div className="nk-wrap ">
            <UserHeader user={user} />

            {isLoading ? (<Loader />) : (
              <>
              <div className="nk-content nk-content-fluid">
              <div className="container-xl wide-lg">
                <div className="nk-content-body">
                  <div className="nk-block">
                    <div className="card card-bordered">
                      <div className="card-aside-wrap">
                        <div className="card-inner card-inner-lg">
                          <div className="nk-block-head nk-block-head-lg">
                            <div className="user-card d-flex flex-column">
                              <div className="">
                                {!user.profilePicture ? (
                                  <Avatar size={250} icon={<UserOutlined />} />
                                ) : (
                                  <>
                                  <Avatar
                                    size={250}
                                    src={
                                      <img
                                        src={formState.profilePicture}
                                        alt="avatar"
                                      />
                                    }
                                  />
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="nk-block">
                            <div className="nk-data data-list">
                              <div className="data-head">
                                <h6 className="overline-title">Basics</h6>
                              </div>
                              <div
                                className="data-item"
                                >
                                <div className="data-col">
                                  <span className="data-label">Full Name</span>
                                  <span className="data-value">
                                    {user.firstname} {user.surname}
                                  </span>
                                </div>
                                <div className="data-col data-col-end">
                                  <span className="data-more">
                                    <i className="las la-chevron-circle-right"></i>
                                  </span>
                                </div>
                              </div>
                              {/* data-item */}
                              <div
                                className="data-item"
                                
                              >
                                <div className="data-col">
                                  <span className="data-label">Username</span>
                                  <span className="data-value">{user.username}</span>
                                </div>
                                <div className="data-col data-col-end">
                                  <span className="data-more">
                                  <i className="las la-chevron-circle-right"></i>
                                  </span>
                                </div>
                              </div>
                              {/* data-item */}
                              <div className="data-item">
                                <div className="data-col">
                                  <span className="data-label">Email</span>
                                  <span className="data-value">
                                    {user.email}
                                  </span>
                                </div>
                                <div className="data-col data-col-end">
                                  <span className="data-more disable">
                                  <i className="las la-chevron-circle-right"></i>
                                  </span>
                                </div>
                              </div>
                              {/* data-item */}
                              <div
                                className="data-item"
                                
                              >
                                <div className="data-col">
                                  <span className="data-label">
                                    Contact
                                  </span>
                                  <span className="data-value">
                                    {user.contact}
                                  </span>
                                </div>
                                <div className="data-col data-col-end">
                                  <span className="data-more">
                                  <i className="las la-chevron-circle-right"></i>
                                  </span>
                                </div>
                              </div>
                              {/* data-item */}
                              <div
                                className="data-item"
                              >
                                <div className="data-col">
                                  <span className="data-label">
                                    Nationality
                                  </span>
                                  <span className="data-value">
                                    { user.nationality ? user.nationality : "Not added yet" }
                                  </span>
                                </div>
                                <div className="data-col data-col-end">
                                  <span className="data-more">
                                  <i className="las la-chevron-circle-right"></i>
                                  </span>
                                </div>
                              </div>

                              <div
                                className="data-item"
                               
                              >
                                <div className="data-col">
                                  <span className="data-label">Residential Address</span>
                                  <span className="data-value">
                                    { user.residentialAddress ? user.residentialAddress : "Not added yet"}
                                    
                                  </span>
                                </div>
                                <div className="data-col data-col-end">
                                  <span className="data-more">
                                  <i className="las la-chevron-circle-right"></i>
                                  </span>
                                </div>
                              </div>
                              <div
                                className="data-item"
                                
                              >
                                <div className="data-col">
                                  <span className="data-label">Status</span>
                                  <span className="data-value">
                                    {user.status === 'active' ? 'Active' : 'Inactive'}
                                  </span>
                                </div>
                                <div className="data-col data-col-end">
                                  <span className="data-more">
                                  <i className="las la-chevron-circle-right"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          
                          <div
                            className="nk-block text-center"
                            data-bs-toggle="modal"
                            data-bs-target="#profile-edit"
                          >
                            
                            <div className="form-navigation">
                              <button
                                type="button"
                                className="btn btn-lg btn-block btn-primary"
                                
                              >
                                <i className="las la-user-edit"></i>
                                Update Profile
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

            <div className="modal fade" role="dialog" id="profile-edit">
              <div
                className="modal-dialog modal-dialog-centered modal-lg"
                role="document"
              >
                <div className="modal-content">
                  <span className="close" data-bs-dismiss="modal">
                    
                    <i className="icon las la-times"></i>
                  </span>
                  <div className="modal-body modal-body-lg">
                    <h5 className="title">Update Profile</h5>
                    <ul className="nk-nav nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#personal"
                        >
                          Personal
                        </a>
                      </li>
                      
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane active" id="personal">
                        <div className="row gy-4">
                        <div className="col-md-12 ml-5 userx">
                        {!user.profilePicture ? (
                                  <Avatar size={250} style={{ cursor: "pointer" }} title={"Upload profile image"} icon={<UserOutlined />} onClick={triggerFileInput} />
                                ) : (
                                  <>
                                  <Avatar
                                    size={250}
                                    title={"Upload profile image"}
                                    src={
                                      <img
                                        src={formState.profilePicture?.name ? URL.createObjectURL(formState.profilePicture) : formState.profilePicture}
                                        alt="avatar"
                                      />
                                    }
                                    style={{ cursor: "pointer" }}
                                    onClick={triggerFileInput}
                                  />
                                  </>
                                )}
                        </div>

                            <input
                          type="file"
                          id="avatar-file-input"
                          name="profilePicture"
                          style={{ display: 'none' }}
                          onChange={handleInputChange}
                    />
<hr/>
                      <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label" for="full-name">
                                Firstname
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                name="firstname"
                                value={formState.firstname}
                                onChange={handleInputChange}

                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label" for="display-name">
                                Surname
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                name="surname"
                                value={formState.surname}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          
                          <div className="col-md-6 mt-4">
                            <div className="form-group">
                              <label className="form-label" for="phone-no">
                                Email address
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                name="email"
                                value={formState.email}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mt-4">
                            <div className="form-group">
                              <label className="form-label" for="birth-day">
                                Contact
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-lg date-picker"
                                name="contact"
                                value={formState.contact}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          <div className="col-md-6 mt-4">
                            <div className="form-group">
                              <label className="form-label" for="">
                                Nationality
                              </label>
                              
                              <select
                                  className="form-control form-control-lg nationality-selector"
                                  id="nationality-select"
                                  name="nationality"
                                  onChange={handleInputChange}
                                >
                                  <option value="">Select a country</option>
                                  {countries.map((country, index) => (
                                    <option key={index} value={country} selected={formState.nationality === country}>
                                      {country}
                                    </option>
                                  ))}
                                </select>
                            </div>
                          </div>
                          <div className="col-md-6 mt-4">
                            <div className="form-group">
                              <label className="form-label" for="">
                                Residential Address
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-lg date-picker"
                                name="residentialAddress"
                                placeholder="Enter your residential address"
                                value={formState.residentialAddress}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          </div>
                        
                          <div className="col-md-6 mt-5">
                              <button
                                type="button"
                                className="btn btn-sm btn-block btn-primary"
                                onClick={handleSubmit}
                              >
                                <i className="las la-user-edit"></i>
                                Update Profile
                              </button>
                            </div>

                            <div className="col-md-6 mt-5">
                            <span className="close btn btn-sm btn-block btn-danger text-white" data-bs-dismiss="modal"   style={{ fontSize: "12px", paddingTop: "8px", paddingBottom: "8px", backgroundColor: "red"}}>
                            
                              {/* <button
                                type="button btn"
                              > */}
                                <i className="las la-times"></i>
                                Cancel
                              {/* </button> */}
                              </span>
                            </div>
                         
                          </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </>
            )}
            


            <UserFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

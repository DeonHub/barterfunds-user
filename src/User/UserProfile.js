import React, { useEffect } from "react";
import "./User.css";
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";
import { user } from "./components/data";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const UserProfile = () => {
  useEffect(() => {
    document.title = "User Profile | BarterFunds";
  }, []);

  return (
    <div className="nk-body npc-crypto bg-white has-sidebar">
      <div className="nk-app-root">
        <div className="nk-main ">
          <UserSidebar active={"dashboard"} />

          <div className="nk-wrap ">
            <UserHeader user={user} />

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
                                {!user.kycApproved ? (
                                  <Avatar size={250} icon={<UserOutlined />} />
                                ) : (
                                  <Avatar
                                    size={250}
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
                                    Michael Adzato
                                  </span>
                                </div>
                                <div className="data-col data-col-end">
                                  <span className="data-more">
                                    <i class="las la-chevron-circle-right"></i>
                                  </span>
                                </div>
                              </div>
                              {/* data-item */}
                              <div
                                className="data-item"
                                
                              >
                                <div className="data-col">
                                  <span className="data-label">Username</span>
                                  <span className="data-value">Ishtiyak</span>
                                </div>
                                <div className="data-col data-col-end">
                                  <span className="data-more">
                                  <i class="las la-chevron-circle-right"></i>
                                  </span>
                                </div>
                              </div>
                              {/* data-item */}
                              <div className="data-item">
                                <div className="data-col">
                                  <span className="data-label">Email</span>
                                  <span className="data-value">
                                    info@barter-funds.com
                                  </span>
                                </div>
                                <div className="data-col data-col-end">
                                  <span className="data-more disable">
                                  <i class="las la-chevron-circle-right"></i>
                                  </span>
                                </div>
                              </div>
                              {/* data-item */}
                              <div
                                className="data-item"
                                
                              >
                                <div className="data-col">
                                  <span className="data-label">
                                    Phone Number
                                  </span>
                                  <span className="data-value text-soft">
                                    Not add yet
                                  </span>
                                </div>
                                <div className="data-col data-col-end">
                                  <span className="data-more">
                                  <i class="las la-chevron-circle-right"></i>
                                  </span>
                                </div>
                              </div>
                              {/* data-item */}
                              <div
                                className="data-item"
                              >
                                <div className="data-col">
                                  <span className="data-label">
                                    Date of Birth
                                  </span>
                                  <span className="data-value">
                                    29 Feb, 1986
                                  </span>
                                </div>
                                <div className="data-col data-col-end">
                                  <span className="data-more">
                                  <i class="las la-chevron-circle-right"></i>
                                  </span>
                                </div>
                              </div>

                              <div
                                className="data-item"
                               
                              >
                                <div className="data-col">
                                  <span className="data-label">Address</span>
                                  <span className="data-value">
                                    2337 Kildeer Drive,
                                    <br />
                                    Kentucky, Canada
                                  </span>
                                </div>
                                <div className="data-col data-col-end">
                                  <span className="data-more">
                                  <i class="las la-chevron-circle-right"></i>
                                  </span>
                                </div>
                              </div>
                              <div
                                className="data-item"
                                
                              >
                                <div className="data-col">
                                  <span className="data-label">Address</span>
                                  <span className="data-value">
                                    2337 Kildeer Drive,
                                    <br />
                                    Kentucky, Canada
                                  </span>
                                </div>
                                <div className="data-col data-col-end">
                                  <span className="data-more">
                                  <i class="las la-chevron-circle-right"></i>
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

            <div class="modal fade" role="dialog" id="profile-edit">
              <div
                class="modal-dialog modal-dialog-centered modal-lg"
                role="document"
              >
                <div class="modal-content">
                  <span class="close" data-bs-dismiss="modal">
                    <em class="icon ni ni-cross-sm"></em>
                  </span>
                  <div class="modal-body modal-body-lg">
                    <h5 class="title">Update Profile</h5>
                    <ul class="nk-nav nav nav-tabs">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          data-bs-toggle="tab"
                          href="#personal"
                        >
                          Personal
                        </a>
                      </li>
                      
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane active" id="personal">
                        <div class="row gy-4 ">
                        <div className="col-md-12">
                                {!user.kycApproved ? (
                                  <Avatar size={200} icon={<UserOutlined />} />
                                ) : (
                                  <Avatar
                                    size={200}
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
<hr/>
                      <div className="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="form-label" for="full-name">
                                Full Name
                              </label>
                              <input
                                type="text"
                                class="form-control form-control-lg"
                                id="full-name"
                                value="Michael Adzato"
                                placeholder="Enter Full name"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="form-label" for="display-name">
                                Display Name
                              </label>
                              <input
                                type="text"
                                class="form-control form-control-lg"
                                id="display-name"
                                value="Ishtiyak"
                                placeholder="Enter display name"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="form-label" for="phone-no">
                                Phone Number
                              </label>
                              <input
                                type="text"
                                class="form-control form-control-lg"
                                id="phone-no"
                                value="+880"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="form-label" for="birth-day">
                                Date of Birth
                              </label>
                              <input
                                type="text"
                                class="form-control form-control-lg date-picker"
                                id="birth-day"
                                placeholder="Enter your BirthDay"
                              />
                            </div>
                          </div>

                          </div>
                        
                         
                          <div class="col-12">
                            <ul class="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                              <li>
                                <span class="btn btn-lg btn-primary">
                                  Update Profile
                                </span>
                              </li>
                              <li>
                                <span 
                                  data-bs-dismiss="modal"
                                  class="btn btn-lg btn-danger"
                                >
                                  Cancel
                                </span>
                              </li>
                            </ul>
                          </div>                        </div>
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

export default UserProfile;

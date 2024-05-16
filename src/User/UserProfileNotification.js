import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './User.css'
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";


class Notification extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

  }

  render() {

    return (
      <div className="nk-body npc-crypto bg-white has-sidebar">
        <div className="nk-app-root">
            {/*Main Start*/}
            <div className="nk-main ">
                {/*Sidebar Start*/}
                <UserSidebar />
                {/*Sidebar End*/}
                <div className="nk-wrap ">
                    {/*Main Header Start*/}
                    <UserHeader />
                    {/*Main Header End*/}
                    {/*Content Start*/}
                    <div className="nk-content nk-content-fluid">
  <div className="container-xl wide-lg">
    <div className="nk-content-body">
      <div className="nk-block-head">
        <div className="nk-block-head-content">
          <div className="nk-block-head-sub">
            <span>Account Setting</span>
          </div>
          <h2 className="nk-block-title fw-normal">My Profile</h2>
          <div className="nk-block-des">
            <p>
              You have full control to manage your own account setting.{" "}
              <span className="text-primary">
                <em className="icon ni ni-info" />
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* .nk-block-head */}
      <ul className="nk-nav nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href="/frontend/user/user/profile.html">
            Personal
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="/frontend/user/user/profile-security.html"
          >
            Security
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="/frontend/user/user/profile-notification.html"
          >
            Notifications
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="/frontend/user/user/profile-connected.html"
          >
            Connect Social
          </a>
        </li>
      </ul>
      {/* .nk-menu */}
      <div className="nk-block">
        <div className="nk-block-head nk-block-head-sm">
          <div className="nk-block-head-content">
            <h5 className="nk-block-title">Security Alerts</h5>
            <div className="nk-block-des">
              <p>You will get only those email notification what you want.</p>
            </div>
          </div>
        </div>
        {/* .nk-block-head */}
        <div className="nk-block-content">
          <div className="gy-3">
            <div className="g-item">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  defaultChecked=""
                  id="unusual-activity"
                />
                <label
                  className="custom-control-label"
                  htmlFor="unusual-activity"
                >
                  Email me whenever encounter unusual activity
                </label>
              </div>
            </div>
            <div className="g-item">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="new-browser"
                />
                <label className="custom-control-label" htmlFor="new-browser">
                  Email me if new browser is used to sign in
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* .nk-block-contnet */}
        <div className="nk-block-head nk-block-head-sm">
          <div className="nk-block-head-content">
            <h6 className="nk-block-title">News</h6>
            <div className="nk-block-des">
              <p>You will get only those email notification what you want.</p>
            </div>
          </div>
        </div>
        {/* .nk-block-head */}
        <div className="nk-block-content">
          <div className="gy-3">
            <div className="g-item">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  defaultChecked=""
                  id="latest-sale"
                />
                <label className="custom-control-label" htmlFor="latest-sale">
                  Notify me by email about sales and latest news
                </label>
              </div>
            </div>
            <div className="g-item">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="feature-update"
                />
                <label
                  className="custom-control-label"
                  htmlFor="feature-update"
                >
                  Email me about new features and updates
                </label>
              </div>
            </div>
            <div className="g-item">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  defaultChecked=""
                  id="account-tips"
                />
                <label className="custom-control-label" htmlFor="account-tips">
                  Email me about tips on using account
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* .nk-block-content */}
      </div>
      {/* .nk-block */}
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
}

export default Notification;

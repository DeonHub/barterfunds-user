import React from "react";
import "./userjs";

const UserSidebar = ({ active }) => {

  return (
    <div className="nk-sidebar nk-sidebar-fixed " data-content="sidebarMenu">

      <div className="nk-sidebar-element nk-sidebar-head">
        <div className="nk-sidebar-brand">
          <a
            href={`/user/dashboard`}
            className="logo-link nk-sidebar-logo"
          >
            <img
              className="logo-img"
              src="/assets/images/barterfunds-logo.png"
              alt="dashboard logo"
            />
          </a>
        </div>
        <div className="nk-menu-trigger me-n2">
          <span
            className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
            data-target="sidebarMenu"
          >
            <em className="icon ni ni-arrow-left" />
          </span>
        </div>
      </div>
      {/* .nk-sidebar-element */}
      <div className="nk-sidebar-element">
        <div className="nk-sidebar-body" data-simplebar="">
          <div className="nk-sidebar-content">
            <div className="nk-sidebar-menu">
              <ul className="nk-menu">
                {/* .nk-menu-item */}
                <li className="nk-menu-heading">
                  <h6 className="overline-title text-primary-alt">OVERVIEW</h6>
                </li>

                <li
                  className={`nk-menu-item ${
                    active === "dashboard" ? "active" : ""
                  }`}
                >
                  <a
                    href={`/user/dashboard`}
                    className="nk-menu-link"
                  >
                    <span class="nk-menu-icon">
                      <em class="icon la la-server"></em>
                    </span>
                    <span className="nk-menu-text">Dashboard</span>
                  </a>
                </li>
                <li className="nk-menu-heading">
                  <h6 className="overline-title text-primary-alt">
                    TRANSACTIONS
                  </h6>
                </li>

                
                <li
                  className={`nk-menu-item ${
                    active === "transactions" ? "active" : ""
                  }`}
                >
                  <a
                    href={`/user/transactions-panel`}
                    className="nk-menu-link"
                  >
                    <span className="nk-menu-icon">
                      <span class="nk-menu-icon">
                        <em class="icon la la-exchange"></em>
                      </span>
                    </span>
                    <span className="nk-menu-text">Buy Sell Panel</span>
                    <span className="nk-menu-badge">HOT</span>
                  </a>
                </li>
                <li
                  className={`nk-menu-item ${
                    active === "orders" ? "active" : ""
                  }`}
                >
                  <a
                    href={`/user/transactions`}
                    className="nk-menu-link"
                  >
                    <span className="nk-menu-icon">
                      <span class="nk-menu-icon">
                        <em class="icon la la-cart-plus"></em>
                      </span>
                    </span>
                    <span className="nk-menu-text">Manage Orders</span>
                  </a>
                </li>
                <li
                  className={`nk-menu-item ${
                    active === "wallet" ? "active" : ""
                  }`}
                >
                  <a
                    href={`/user/wallet`}
                    className="nk-menu-link"
                  >
                    <span className="nk-menu-icon">
                      <span class="nk-menu-icon">
                        <em class="icon la la-wallet"></em>
                      </span>
                    </span>
                    <span className="nk-menu-text">Barter Wallet</span>
                    <span className="nk-menu-badge">COMING SOON</span>
                  </a>
                </li>
                {/* .nk-menu-item */}
                <li className="nk-menu-heading">
                  <h6 className="overline-title text-primary-alt">USER</h6>
                </li>

                <li
                  className={`nk-menu-item ${
                    active === "kycs" ? "active" : ""
                  }`}
                >
                  <a
                    href={`/user/kycs`}
                    className="nk-menu-link"
                  >
                    <span className="nk-menu-icon">
                      <span class="nk-menu-icon">
                        <em class="icon la la-id-card"></em>
                      </span>
                    </span>
                    <span className="nk-menu-text">KYC</span>
                  </a>
                </li>

                <li
                  className={`nk-menu-item ${
                    active === "support" ? "active" : ""
                  }`}
                >
                  <a
                    href={`/user/support`}
                    className="nk-menu-link"
                  >
                    <span className="nk-menu-icon">
                      <em className="icon la la-comments" />
                    </span>
                    <span className="nk-menu-text">Support Center</span>
                  </a>
                </li>

                <li
                  className={`nk-menu-item ${
                    active === "faqs" ? "active" : ""
                  }`}
                >
                  <a
                    href={`/user/faqs`}
                    className="nk-menu-link"
                  >
                    <span className="nk-menu-icon">
                      <em className="icon la la-question" />
                    </span>
                    <span className="nk-menu-text">FAQs</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;

import React from "react";
import './userjs';
class UserSidebar extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

  }

  render() {

    return (
      <div className="nk-sidebar nk-sidebar-fixed " data-content="sidebarMenu">
  {" "}
  {/* sidebar @s */}
  <div className="nk-sidebar-element nk-sidebar-head">
    <div className="nk-sidebar-brand">
    <a href={`${process.env.REACT_APP_PUBLIC_URL}/user/dashboard`}  className="logo-link nk-sidebar-logo">
        
        <img
          className="logo-img"
          src="/assets/images/barterfunds-logo.png"
          alt="dashboard logo"
        />
      </a>
    </div>
    <div className="nk-menu-trigger me-n2">
      <a
        href="#"
        className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
        data-target="sidebarMenu"
      >
        <em className="icon ni ni-arrow-left" />
      </a>
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
          
            <li className={`nk-menu-item ${this.props.active === 'dashboard' ? 'active' : ''}`}>
            <a href={`${process.env.REACT_APP_PUBLIC_URL}/user/dashboard`} className="nk-menu-link">
              <span class="nk-menu-icon"><em class="icon la la-server"></em></span>
                <span className="nk-menu-text">Dashboard</span>
              </a>
            </li>
            <li className="nk-menu-heading">
              <h6 className="overline-title text-primary-alt">TRANSACTIONS</h6>
            </li>
            

            {/* <li className="nk-menu-item">
              <a
                href="/frontend/user/transactions.html"
                className="nk-menu-link"
              >
                <span className="nk-menu-icon">
                <span class="nk-menu-icon"><em class="icon la la-money"></em></span>
                </span>
                <span className="nk-menu-text">Payment Methods</span>
              </a>
            </li> */}
            <li className={`nk-menu-item ${this.props.active === 'transactions' ? 'active' : ''}`}>
            <a href={`${process.env.REACT_APP_PUBLIC_URL}/user/transactions-panel`} className="nk-menu-link">
                <span className="nk-menu-icon">
                <span class="nk-menu-icon"><em class="icon la la-exchange"></em></span>
                </span>
                <span className="nk-menu-text">Buy Sell Panel</span>
                <span className="nk-menu-badge">HOT</span>
              </a>
            </li>
            <li className={`nk-menu-item ${this.props.active === 'orders' ? 'active' : ''}`}>
              <a
                href={`${process.env.REACT_APP_PUBLIC_URL}/user/transactions`} 
                className="nk-menu-link"
              >
                <span className="nk-menu-icon">
                <span class="nk-menu-icon"><em class="icon la la-cart-plus"></em></span>
                </span>
                <span className="nk-menu-text">Manage Orders</span>
              </a>
            </li>
            <li className={`nk-menu-item ${this.props.active === 'wallet' ? 'active' : ''}`}>
              <a href={`${process.env.REACT_APP_PUBLIC_URL}/user/wallet`}  className="nk-menu-link">
                <span className="nk-menu-icon">
                <span class="nk-menu-icon"><em class="icon la la-wallet"></em></span>
                </span>
                <span className="nk-menu-text">Barter Wallet</span>
                <span className="nk-menu-badge">COMING SOON</span>
              </a>
            </li>
            {/* .nk-menu-item */}
            <li className="nk-menu-heading">
              <h6 className="overline-title text-primary-alt">USER</h6>
            </li>

            <li className={`nk-menu-item ${this.props.active === 'kycs' ? 'active' : ''}`}>
              <a href={`${process.env.REACT_APP_PUBLIC_URL}/user/kycs`} className="nk-menu-link">
                <span className="nk-menu-icon">
                <span class="nk-menu-icon"><em class="icon la la-id-card"></em></span>
                </span>
                <span className="nk-menu-text">KYC</span>
              </a>
             
            </li>

            <li className={`nk-menu-item ${this.props.active === 'support' ? 'active' : ''}`}>
              <a href={`${process.env.REACT_APP_PUBLIC_URL}/user/support`} className="nk-menu-link">
                <span className="nk-menu-icon">
                  <em className="icon la la-comments" />
                </span>
                <span className="nk-menu-text">Support Center</span>
              </a>
             
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


    );
  }
}

export default UserSidebar;

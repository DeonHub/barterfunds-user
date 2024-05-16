import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './User.css'
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";


class OrderHistory extends React.Component {
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
        <div className="nk-block-between-md g-4">
          <div className="nk-block-head-content">
            <h2 className="nk-block-title fw-normal">Your Orders</h2>
            <div className="nk-block-des">
              <p>See full list of your orders of your account</p>
            </div>
          </div>
          <div className="nk-block-head-content">
            <ul className="nk-block-tools gx-3">
              <li className="order-md-last">
                <a href="#" className="btn btn-primary">
                  <span>Buy Coin</span>{" "}
                  <em className="icon ni ni-arrow-long-right" />
                </a>
              </li>
              <li>
                <a href="#" className="btn btn-white btn-light">
                  <em className="icon ni ni-download-cloud" />
                  <span>
                    <span className="d-none d-sm-inline-block">Get</span>
                    Statement
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* .nk-block-head */}
      <ul className="nk-nav nav nav-tabs">
        <li className="nav-item">
          <a
            className="nav-link"
            href="/frontend/admin//frontend/user/order-history.html"
          >
            History
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sells
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Scheduled <span className="badge bg-primary">3</span>
          </a>
        </li>
      </ul>
      {/* .nav-tabs */}
      <div className="nk-block nk-block-sm">
        <div className="nk-block-head nk-block-head-sm">
          <div className="nk-block-between">
            <div className="nk-block-head-content">
              <h6 className="nk-block-title">All Orders</h6>
            </div>
            <ul className="nk-block-tools gx-3">
              <li>
                <div className="form-group">
                  <div className="custom-control custom-control-xs custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkbox"
                    />
                    <label className="custom-control-label" htmlFor="checkbox">
                      <span className="d-none d-sm-inline-block">Show</span>
                      Cancelled
                    </label>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="search-toggle toggle-search btn btn-icon btn-trigger"
                  data-target="search"
                >
                  <em className="icon ni ni-search" />
                </a>
              </li>
              <li>
                <div className="dropdown">
                  <a
                    className="dropdown-toggle btn btn-icon btn-trigger mx-n2"
                    data-bs-toggle="dropdown"
                    data-offset="-8,0"
                  >
                    <em className="icon ni ni-setting" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                    <ul className="link-check">
                      <li>
                        <span>Show</span>
                      </li>
                      <li className="active">
                        <a href="#">10</a>
                      </li>
                      <li>
                        <a href="#">20</a>
                      </li>
                      <li>
                        <a href="#">50</a>
                      </li>
                    </ul>
                    <ul className="link-check">
                      <li>
                        <span>Order</span>
                      </li>
                      <li className="active">
                        <a href="#">DESC</a>
                      </li>
                      <li>
                        <a href="#">ASC</a>
                      </li>
                    </ul>
                    <ul className="link-check">
                      <li>
                        <span>Density</span>
                      </li>
                      <li className="active">
                        <a href="#">Regular</a>
                      </li>
                      <li>
                        <a href="#">Compact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            {/* .nk-block-tools */}
          </div>
          <div className="search-wrap search-wrap-extend" data-search="search">
            <div className="search-content">
              <a
                href="#"
                className="search-back btn btn-icon toggle-search"
                data-target="search"
              >
                <em className="icon ni ni-arrow-left" />
              </a>
              <input
                type="text"
                className="form-control form-control-sm border-transparent form-focus-none"
                placeholder="Quick search by user"
              />
              <button className="search-submit btn btn-icon">
                <em className="icon ni ni-search" />
              </button>
            </div>
          </div>
          {/* .search-wrap */}
        </div>
        {/* .nk-block-head */}
        <h6 className="lead-text text-soft">November, 2019</h6>
        <div className="tranx-list tranx-list-stretch card card-bordered">
          <div className="tranx-item">
            <div className="tranx-col">
              <div className="tranx-info">
                <div className="tranx-badge">
                  <span className="tranx-icon">
                    <img src="/frontend/user/images/coins/btc.svg" alt="" />
                  </span>
                </div>
                <div className="tranx-data">
                  <div className="tranx-label">Buy Bitcoin</div>
                  <div className="tranx-date">Nov 12, 2019 11:34 PM</div>
                </div>
              </div>
            </div>
            <div className="tranx-col">
              <div className="tranx-amount">
                <div className="number">
                  0.5384 <span className="currency currency-btc">BTC</span>
                </div>
                <div className="number-sm">
                  3,980.93 <span className="currency currency-usd">USD</span>
                </div>
              </div>
            </div>
          </div>
          {/* .nk-tranx-item */}
          <div className="tranx-item">
            <div className="tranx-col">
              <div className="tranx-info">
                <div className="tranx-badge">
                  <span className="tranx-icon">
                    <img src="/frontend/user/images/coins/eth.svg" alt="" />
                  </span>
                </div>
                <div className="tranx-data">
                  <div className="tranx-label">Buy Bitcoin</div>
                  <div className="tranx-date">Nov 12, 2019 11:34 PM</div>
                </div>
              </div>
            </div>
            <div className="tranx-col">
              <div className="tranx-amount">
                <div className="number">
                  0.5384 <span className="currency currency-btc">BTC</span>
                </div>
                <div className="number-sm">
                  3,980.93 <span className="currency currency-usd">USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .card */}
        <h6 className="lead-text text-soft">October, 2019</h6>
        <div className="tranx-list tranx-list-stretch card card-bordered">
          <div className="tranx-item">
            <div className="tranx-col">
              <div className="tranx-info">
                <div className="tranx-badge">
                  <span className="tranx-icon icon ni ni-sign-btc" />
                </div>
                <div className="tranx-data">
                  <div className="tranx-label">Buy Bitcoin</div>
                  <div className="tranx-date">Nov 12, 2019 11:34 PM</div>
                </div>
              </div>
            </div>
            <div className="tranx-col">
              <div className="tranx-amount">
                <div className="number">
                  0.5384 <span className="currency currency-btc">BTC</span>
                </div>
                <div className="number-sm">
                  3,980.93 <span className="currency currency-usd">USD</span>
                </div>
              </div>
            </div>
          </div>
          {/* .nk-tranx-item */}
          <div className="tranx-item">
            <div className="tranx-col">
              <div className="tranx-info">
                <div className="tranx-badge">
                  <span className="tranx-icon icon ni ni-sign-eth" />
                </div>
                <div className="tranx-data">
                  <div className="tranx-label">Buy Bitcoin</div>
                  <div className="tranx-date">Nov 12, 2019 11:34 PM</div>
                </div>
              </div>
            </div>
            <div className="tranx-col">
              <div className="tranx-amount">
                <div className="number">
                  0.5384 <span className="currency currency-btc">BTC</span>
                </div>
                <div className="number-sm">
                  3,980.93 <span className="currency currency-usd">USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .card */}
        <div className="text-center pt-4">
          <a href="#" className="link link-soft">
            <em className="icon ni ni-redo" />
            <span>Load More</span>
          </a>
        </div>
      </div>
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

export default OrderHistory;

import React from 'react';
import './Header.css';


class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false,
    };
  }

  handleMobileMenuToggle = () => {
    this.setState((prevState) => ({
      isMobileMenuOpen: !prevState.isMobileMenuOpen,
    }));
  };

  render() {
    // const { isMobileMenuOpen } = this.state;

    return (
      <header id="header" className="fixed-top">
        <div className="main-header">
          <div className="container px-3 px-xl-0">
            <div className="d-flex">
              <div className="d-flex align-items-center me-auto">
                <div className="d-flex align-items-center flex-fill">
                  <div className="site-branding header-logo flex-fill">
                    <a href="/" className="custom-logo-link dark" rel="home">
                      <img src="/assets/images/barterfunds-logo.png" width={200} height={40} alt="BarterFunds" />
                    </a>
                  </div>
                </div>
              </div>
              {/*Desktop menu*/}
              <div className="d-flex align-items-center">
          <nav
            id="site-navigation"
            className="main-navigation d-none d-lg-block  mx-auto"
          >
            <div className="d-flex align-items-center">
              <nav
                id="site-navigation"
                className="main-navigation d-none d-lg-block bg-transparent mx-auto"
              >
                <ul
                  id="primary-menu"
                  className="p-0 m-0 d-flex align-items-center gap-3"
                >
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                    data-menu-category="Freelancer"
                  >
                    <a
                      href="/"
                      data-link-name="Personal"
                    >
                      <span>Personal</span>
                      <i className="icon la la-angle-right" />
                    </a>
                    <ul className="sub-menu" data-level={1}>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page banner-menu-item">
                        <a
                          href="/"
                          data-link-name="Personal"
                        >
                          <span>
                            <span>
                              {" "}
                              Personal Transactions{" "}
                              <i className="icon la la-angle-right" />
                            </span>
                            <small className="description">
                            Manage your personal finances securely and efficiently.
                            </small>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wrapper-menu-item">
                        <ul className="sub-menu" data-level={2}>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                            data-menu-sub-category="Get paid"
                          >
                            <span>Digital Assets</span>
                            <ul className="sub-menu" data-level={3}>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Buy Assets"
                                >
                                  <span>
                                    <span> Buy Assets </span>
                                    <small className="description">
                                    Purchase digital assets securely.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Sell Assets"
                                >
                                  <span>
                                    <span> Sell Assets </span>
                                    <small className="description">
                                    Sell your digital assets easily.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Send Assets"
                                >
                                  <span>
                                    <span> Send Assets </span>
                                    <small className="description">
                                    Transfer assets to others.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Receive Assets"
                                >
                                  <span>
                                    <span> Receive Assets </span>
                                    <small className="description">
                                    Accept digital assets from others.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                            data-menu-sub-category="Receive Assets"
                          ></li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                            data-menu-sub-category="Payments"
                          >
                            <span>Payments</span>
                            <ul className="sub-menu" data-level={3}>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="International Transfer"
                                >
                                  <span>
                                    <span> International Transfer </span>
                                    <small className="description">
                                    Make payments across borders.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Online Payment"
                                >
                                  <span>
                                    <span> Online Payment </span>
                                    <small className="description">
                                    Pay for services online.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Bill/Invoice Payment"
                                >
                                  <span>
                                    <span> Bill/Invoice Payment </span>
                                    <small className="description">
                                    Settle your bills and invoices.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Escrow Services"
                                >
                                  <span>
                                    <span> Escrow Services </span>
                                    <small className="description">
                                    Secure transactions with escrow.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                    data-menu-category="Business"
                  >
                    <a
                      href="/"
                      data-link-name="Business"
                    >
                      <span>Business</span>
                      <i className="icon la la-angle-right" />
                    </a>
                    <ul className="sub-menu" data-level={1}>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page banner-menu-item">
                        <a
                          href="/"
                          data-link-name="Business"
                        >
                          <span>
                            <span>
                              {" "}
                              Business Transactions{" "}
                              <i className="icon la la-angle-right" />
                            </span>
                            <small className="description">
                              Helping businesses get paid globally and grow
                              their business.
                            </small>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wrapper-menu-item">
                        <ul className="sub-menu" data-level={2}>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                            data-menu-sub-category="Get paid"
                          >
                            <span>Get paid</span>
                            <ul className="sub-menu" data-level={3}>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Get paid by clients"
                                >
                                  <span>
                                    <span> Get paid by clients/customers </span>
                                    <small className="description">
                                    Acquire digital assets for your business.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Get paid by marketplaces"
                                >
                                  <span>
                                    <span> Get paid by marketplaces </span>
                                    <small className="description">
                                    Get paid for your goods and services on marketplaces
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Multicurrency account"
                                >
                                  <span>
                                    <span> Multicurrency account </span>
                                    <small className="description">
                                    Manage multiple currencies in one account.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Receive Assets"
                                >
                                  <span>
                                    <span> Receive Assets </span>
                                    <small className="description">
                                    Collect digital assets from clients.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                            data-menu-sub-category="Make payments"
                          ></li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                            data-menu-sub-category="Manage business"
                          >
                            <span>Make Payments</span>
                            <ul className="sub-menu" data-level={3}>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Pay your suppliers"
                                >
                                  <span>
                                    <span> Pay your suppliers </span>
                                    <small className="description">
                                    Facilitate global business payments.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Pay for Goods & Services"
                                >
                                  <span>
                                    <span> Pay for Goods & Services </span>
                                    <small className="description">
                                    Handle online transactions smoothly.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Bill/Invoice Payments"
                                >
                                  <span>
                                    <span> Bill/Invoice Payments </span>
                                    <small className="description">
                                    Manage your business invoices.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Escrow Services"
                                >
                                  <span>
                                    <span> Escrow Services </span>
                                    <small className="description">
                                    Secure business deals with escrow.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                    data-menu-category="Freelancer"
                  >
                    <a
                      href="/"
                      data-link-name="Freelancer"
                    >
                      <span>Freelancers</span>
                      <i className="icon la la-angle-right" />
                    </a>
                    <ul className="sub-menu" data-level={1}>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page banner-menu-item">
                        <a
                          href="/"
                          data-link-name="Freelancers"
                        >
                          <span>
                            <span>
                              {" "}
                              Freelance Payments{" "}
                              <i className="icon la la-angle-right" />
                            </span>
                            <small className="description">
                              Helping freelancers get paid globally and grow
                              their business.
                            </small>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wrapper-menu-item">
                        <ul className="sub-menu" data-level={2}>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                            data-menu-sub-category="Get paid"
                          >
                            <span>Get paid</span>
                            <ul className="sub-menu" data-level={3}>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Get paid by clients"
                                >
                                  <span>
                                    <span> Get paid by clients </span>
                                    <small className="description">
                                    Receive payments from clients and customers.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Get paid by marketplaces"
                                >
                                  <span>
                                    <span> Get paid by marketplaces </span>
                                    <small className="description">
                                    Get paid for your work on various marketplaces.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Multicurrency Account"
                                >
                                  <span>
                                    <span> Multicurrency Account </span>
                                    <small className="description">
                                    Manage earnings in multiple currencies.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Receive Assets"
                                >
                                  <span>
                                    <span> Receive Assets </span>
                                    <small className="description">
                                    Accept payments in digital assets.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                            data-menu-sub-category="Receive payments"
                          ></li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                            data-menu-sub-category="Manage business"
                          >
                            <span>Receive Payments</span>
                            <ul className="sub-menu" data-level={3}>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="International Payments"
                                >
                                  <span>
                                    <span> International Payments </span>
                                    <small className="description">
                                    Receive international payments easily.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Receive Assets"
                                >
                                  <span>
                                    <span> Receive Assets </span>
                                    <small className="description">
                                    Collect digital assets for your freelance work
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Bill/Invoice Payments"
                                >
                                  <span>
                                    <span> Bill/Invoice Payments </span>
                                    <small className="description">
                                    Get paid by sending bills or invoices.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Escrow Services"
                                >
                                  <span>
                                    <span> Escrow Services </span>
                                    <small className="description">
                                    Securely receive payments with escrow.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                    data-menu-category="Tools"
                  >
                    <a
                      href="/"
                      data-link-name="Tools"
                    >
                      <span>Tools</span>
                      <i className="icon la la-angle-right" />
                    </a>
                    <ul className="sub-menu" data-level={1}>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page banner-menu-item">
                        <a
                          href="/"
                          data-link-name="Tools"
                        >
                          <span>
                            <span>
                              {" "}
                              Financial Solutions{" "}
                              <i className="icon la la-angle-right" />
                            </span>
                            <small className="description">
                            Tailored financial solution tools designed to empower your financial journey.
                            </small>
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wrapper-menu-item">
                        <ul className="sub-menu" data-level={2}>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                            data-menu-sub-category="Paypal Tools"
                          >
                            <span>Paypal Tools</span>
                            <ul className="sub-menu" data-level={3}>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Paypal Fees Checker"
                                >
                                  <span>
                                    <span> Paypal Fees Checker </span>
                                    <small className="description">
                                    Calculate Paypal fees for transactions.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Paypal Rate Checker"
                                >
                                  <span>
                                    <span> Paypal Rate Checker </span>
                                    <small className="description">
                                    Check the current Paypal exchange rates.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Paypal Currency Converter"
                                >
                                  <span>
                                    <span> Paypal Currency Converter </span>
                                    <small className="description">
                                    Convert currencies using Paypal rates.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Paypal Exchange"
                                >
                                  <span>
                                    <span> Paypal Account Creation </span>
                                    <small className="description">
                                    Create a verified Paypal account.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                            data-menu-sub-category="Make payments"
                          ></li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                            data-menu-sub-category="Make Payments"
                          >
                            <span>General Tools</span>
                            <ul className="sub-menu" data-level={3}>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Invoice Generator"
                                >
                                  <span>
                                    <span> Invoice Generator </span>
                                    <small className="description">
                                    Create professional invoices easily.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Fees Checker"
                                >
                                  <span>
                                    <span> Fees Checker </span>
                                    <small className="description">
                                    Check fees for various transactions.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Currency Converter"
                                >
                                  <span>
                                    <span> Currency Converter </span>
                                    <small className="description">
                                    Convert between different currencies.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <a
                                  href="/"
                                  data-link-name="Exchange Rate Checker"
                                >
                                  <span>
                                    <span> Exchange Rate Checker </span>
                                    <small className="description">
                                    Check current exchange rates.
                                    </small>
                                  </span>
                                  <i className="icon la la-angle-right" />
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </nav>
        </div>
        <div className="text-end d-flex align-items-center">
          <div className="flex-fill d-flex align-items-center ms-auto">
          <div className="d-none d-lg-inline-block">
										<span href="/" class="btn-help" data-link-name="Help">Help</span>
									</div>
          </div>
        </div>
        <div className="text-end d-flex align-items-center">
          <a
              href="/login"
              className="d-none btn-login  d-lg-flex align-items-center "
            >
              Login
            </a>
        </div>
        <div className="text-end d-flex align-items-center">
          <a
            href="/signup"
            className="d-none btn-register d-lg-flex align-items-center"
          >
            Register
          </a>
        </div>
              {/* Render MobileMenu component with isVisible prop */}
       
            </div>
          </div>
        </div>
        
      </header>
    );
  }
}

export default MainMenu;

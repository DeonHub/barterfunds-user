import React from "react";
import './Header.css'

class MainHeader extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

  }

  render() {

    return (
        
        <>
        <div className="top-header d-none d-md-block">
          <div className="container px-3 px-xl-0">
            <div className="top-menu">
              <div className="menu-top-header-container">
                <ul
                  id="menu-top-header"
                  className="d-flex align-items-center justify-content-end p-0 m-0 gap-3"
                >
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page"
                    data-menu-category="Resources"
                  >
                    <a
                      href="https://www.payoneer.com/resources/"
                      data-link-name="Resources"
                    >
                      <span> Resources </span>
                    </a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page"
                    data-menu-category="Developers"
                  >
                    <a
                      href="https://www.payoneer.com/developers/"
                      data-link-name="Developers"
                    >
                      <span> Developers API </span>
                    </a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                    data-menu-category="About us"
                  >
                    <a
                      href="https://www.payoneer.com/about/"
                      data-link-name="About us"
                    >
                      <span> About us </span>
                    </a>
                    <ul className="sub-menu" data-level={1}>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page">
                        <a
                          href="https://www.payoneer.com/about/"
                          data-link-name="About Payoneer"
                        >
                          <span>
                            {" "}
                            About Payoneer{" "}
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page">
                        <a
                          href="https://www.payoneer.com/about/pricing/"
                          data-link-name="Pricing"
                        >
                          <span>
                            {" "}
                            Pricing <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page">
                        <a href="/careers/" target="_blank" rel="noopener" data-link-name="Careers">
                          <span>
                            {" "}
                            Careers <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page">
                        <a
                          href="https://www.payoneer.com/success-stories/"
                          data-link-name="Success stories"
                        >
                          <span>
                            {" "}
                            Success stories{" "}
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      
                    </ul>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children wpml-ls-slot-14 wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item"
                    data-menu-category="Language"
                  >
                    <a href="https://www.payoneer.com/" data-link-name="English">
                      <span>
                        <span className="wpml-ls-native" lang="en">
                          English
                        </span>
                      </span>
                    </a>
                    <ul className="sub-menu" data-level={1}>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-es wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/es/"
                          data-link-name="Spanish"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="es">
                              Español
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-zh-hans wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/zh-hans/"
                          data-link-name="Chinese (Simplified)"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="zh-hans">
                              简体中文
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-ja wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/ja/"
                          data-link-name="Japanese"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="ja">
                              日本語
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-ko wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/ko/"
                          data-link-name="Korean"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="ko">
                              한국어
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-ru wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/ru/"
                          data-link-name="Russian"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="ru">
                              Русский
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-th wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a href="https://www.payoneer.com/th/" data-link-name="Thai">
                          <span>
                            <span className="wpml-ls-native" lang="th">
                              ไทย
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-uk wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/uk/"
                          data-link-name="Ukrainian"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="uk">
                              Українська
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-vi wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/vi/"
                          data-link-name="Vietnamese"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="vi">
                              Tiếng Việt
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-ar wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/ar/"
                          data-link-name="Arabic"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="ar">
                              العربية
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-en-in wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/en-in/"
                          data-link-name="Hindi (en)"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="en-in">
                              Hindi (en)
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-bn wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/bn/"
                          data-link-name="Bengali"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="bn">
                              বাংলাদেশ
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-zh-hant wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/zh-hant/"
                          data-link-name="Chinese (Traditional)"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="zh-hant">
                              繁體中文
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-de wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/de/"
                          data-link-name="German"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="de">
                              Deutsch
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-id wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/id/"
                          data-link-name="Indonesian"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="id">
                              Indonesia
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-pl wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/pl/"
                          data-link-name="Polish"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="pl">
                              Polski
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-sr wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/sr/"
                          data-link-name="Serbian"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="sr">
                              Srpski
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page wpml-ls-slot-14 wpml-ls-item wpml-ls-item-pt wpml-ls-menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item">
                        <a
                          href="https://www.payoneer.com/pt/"
                          data-link-name="Portuguese (Brazil)"
                        >
                          <span>
                            <span className="wpml-ls-native" lang="pt">
                              Portuguese
                            </span>
                            <i className="level1-0160-arrow-right small" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header has-payoneer-white-background-color">
          <div className="container px-3 px-xl-0">
            <div className="d-flex">
              <div className="d-flex align-items-center me-auto">
                <div className="d-flex align-items-center flex-fill">
                  <div className="site-branding header-logo flex-fill">
                    <a
                      href="https://www.payoneer.com"
                      className="custom-logo-link dark"
                      rel="home"
                    >
                      <img
                        src="/wp-content/uploads/payoneer-dark-logo.svg"
                        width={162}
                        height={33}
                        alt="Payoneer"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <nav
                  id="site-navigation"
                  className="main-navigation d-none d-lg-block bg-transparent mx-auto"
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
                            href="https://www.payoneer.com/freelancer/"
                            data-link-name="Freelancer"
                          >
                            <span>Freelancers</span>
                            <i className="level1-0160-arrow-right small" />
                          </a>
                          <ul className="sub-menu" data-level={1}>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page banner-menu-item">
                              <a
                                href="https://www.payoneer.com/payoneer-account/"
                                data-link-name="Payoneer account"
                              >
                                <span>
                                  <span>
                                    {" "}
                                    Payoneer account{" "}
                                    <i className="level1-0160-arrow-right small" />
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
                                        href="https://www.payoneer.com/get-paid-by-clients/"
                                        data-link-name="Get paid by clients"
                                      >
                                        <span>
                                          <span> Get paid by clients </span>
                                          <small className="description">
                                            Request and receive payments
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/get-paid-by-marketplaces/"
                                        data-link-name="Get paid by marketplaces"
                                      >
                                        <span>
                                          <span> Get paid by marketplaces </span>
                                          <small className="description">
                                            Connect to global platforms
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/withdraw-funds/"
                                        data-link-name="Withdraw funds"
                                      >
                                        <span>
                                          <span> Withdraw funds </span>
                                          <small className="description">
                                            To your local bank account
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                                  data-menu-sub-category="Make payments"
                                >
                                  <span>Make payments</span>
                                  <ul className="sub-menu" data-level={3}>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/pay-suppliers/"
                                        data-link-name="Pay your suppliers"
                                      >
                                        <span>
                                          <span> Pay your suppliers </span>
                                          <small className="description">
                                            Easy business payments
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/commercial-card/"
                                        data-link-name="Pay business expenses"
                                      >
                                        <span>
                                          <span> Pay business expenses </span>
                                          <small className="description">
                                            Payoneer card
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                                  data-menu-sub-category="Manage business"
                                >
                                  <span>Manage business</span>
                                  <ul className="sub-menu" data-level={3}>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/working-capital-advance/"
                                        data-link-name="Capital Advance"
                                      >
                                        <span>
                                          <span> Capital Advance </span>
                                          <small className="description">
                                            Fund your business growth
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/manage-currencies/"
                                        data-link-name="Manage currencies"
                                      >
                                        <span>
                                          <span> Manage currencies </span>
                                          <small className="description">
                                            Transfer between balances
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/partners-directory/"
                                        data-link-name="Partners Directory"
                                      >
                                        <span>
                                          <span> Partners Directory </span>
                                          <small className="description">
                                            Exclusive offers from partners
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children btn-explore">
                                  <a
                                    href="https://www.payoneer.com/freelancer/"
                                    data-link-name="Freelance"
                                  >
                                    <span>
                                      <span> Explore all freelance services </span>
                                      <small className="description">
                                        Grow your freelance business
                                      </small>
                                    </span>
                                    <i className="level1-0160-arrow-right small" />
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page wrapper-menu-item  use-case-column">
                              <ul className="sub-menu" data-level={2}>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children use-cases-menu-item title-menu-item"
                                  data-menu-sub-category="Use cases"
                                >
                                  <span>Use cases</span>
                                  <ul className="sub-menu" data-level={3}>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/get-paid-by-marketplaces/"
                                        data-link-name="Get paid by marketplaces"
                                      >
                                        <span>
                                          <span> Get paid by marketplaces </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/get-paid-by-upwork/"
                                        data-link-name="Get paid by Upwork"
                                      >
                                        <span>
                                          <span> Get paid by Upwork </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/get-paid-by-fiverr/"
                                        data-link-name="Get paid by Fiverr"
                                      >
                                        <span>
                                          <span> Get paid by Fiverr </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/freelancer-payment-processing/"
                                        data-link-name="Freelancer payment processing"
                                      >
                                        <span>
                                          <span> Freelancer payment processing </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/multi-currency-account/"
                                        data-link-name="Multi-currency account"
                                      >
                                        <span>
                                          <span> Multi-currency account </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/send-invoice-payment-link/"
                                        data-link-name="Send invoice payments"
                                      >
                                        <span>
                                          <span> Send invoice payments </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/international-payment-processing/"
                                        data-link-name="International payment"
                                      >
                                        <span>
                                          <span>
                                            {" "}
                                            International payment processing{" "}
                                          </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children use-cases-menu-item title-menu-item"
                                  data-menu-sub-category="Industries"
                                >
                                  <span>Industries</span>
                                  <ul className="sub-menu" data-level={3}>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketing-agencies/"
                                        data-link-name="Marketing agencies"
                                      >
                                        <span>
                                          <span> Marketing agencies </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/digital-marketers/"
                                        data-link-name="Digital marketers"
                                      >
                                        <span>
                                          <span> Digital marketers </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/it-outsourcing-agencies/"
                                        data-link-name="IT outsourcing agencies"
                                      >
                                        <span>
                                          <span> IT outsourcing agencies </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/web-mobile-app-developers/"
                                        data-link-name="Web & mobile app developers – business"
                                      >
                                        <span>
                                          <span>
                                            {" "}
                                            Web &amp; mobile app developers{" "}
                                          </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/creators-professional-services/"
                                        data-link-name="Creators and professional services"
                                      >
                                        <span>
                                          <span>
                                            {" "}
                                            Creators and professional services{" "}
                                          </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
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
                            href="https://www.payoneer.com/business/"
                            data-link-name="Business"
                          >
                            <span>Business</span>
                            <i className="level1-0160-arrow-right small" />
                          </a>
                          <ul className="sub-menu" data-level={1}>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page banner-menu-item">
                              <a
                                href="https://www.payoneer.com/payoneer-account/"
                                data-link-name="Payoneer account"
                              >
                                <span>
                                  <span>
                                    {" "}
                                    Payoneer account{" "}
                                    <i className="level1-0160-arrow-right small" />
                                  </span>
                                  <small className="description">
                                    Helping businesses manage cross-border payments
                                    and grow globally
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
                                        href="https://www.payoneer.com/get-paid-by-clients/"
                                        data-link-name="Get paid by clients"
                                      >
                                        <span>
                                          <span> Get paid by clients </span>
                                          <small className="description">
                                            Request and receive payments
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/get-paid-by-marketplaces/"
                                        data-link-name="Get paid by marketplaces"
                                      >
                                        <span>
                                          <span> Get paid by marketplaces </span>
                                          <small className="description">
                                            Connect to marketplaces
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/checkout/"
                                        data-link-name="Payoneer Checkout"
                                      >
                                        <span>
                                          <span> Get paid on your website </span>
                                          <small className="description">
                                            Payoneer Checkout
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/withdraw-funds/"
                                        data-link-name="Withdraw funds"
                                      >
                                        <span>
                                          <span> Withdraw funds </span>
                                          <small className="description">
                                            To your bank account
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                                  data-menu-sub-category="Manage business"
                                >
                                  <span>Manage business</span>
                                  <ul className="sub-menu" data-level={3}>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/working-capital-advance/"
                                        data-link-name="Capital Advance"
                                      >
                                        <span>
                                          <span> Capital Advance </span>
                                          <small className="description">
                                            Fund your business growth
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/manage-currencies/"
                                        data-link-name="Manage currencies"
                                      >
                                        <span>
                                          <span> Manage currencies </span>
                                          <small className="description">
                                            Transfer between balances
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/partners-directory/"
                                        data-link-name="Partners Directory"
                                      >
                                        <span>
                                          <span> Partners Directory </span>
                                          <small className="description">
                                            Exclusive offers from partners
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/add-funds/"
                                        data-link-name="Add funds"
                                      >
                                        <span>
                                          <span> Add funds to your account </span>
                                          <small className="description">
                                            Transfer funds from your bank
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item"
                                  data-menu-sub-category="Make payments"
                                >
                                  <span>Make payments</span>
                                  <ul className="sub-menu" data-level={3}>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/pay-suppliers/"
                                        data-link-name="Pay your suppliers"
                                      >
                                        <span>
                                          <span> Pay your suppliers </span>
                                          <small className="description">
                                            Easy business payments
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/payer/"
                                        data-link-name="Pay your contractors"
                                      >
                                        <span>
                                          <span> Pay your contractors </span>
                                          <small className="description">
                                            Send international payments
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/commercial-card/"
                                        data-link-name="Pay business expenses"
                                      >
                                        <span>
                                          <span> Pay business expenses </span>
                                          <small className="description">
                                            Payoneer card
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/pay-vat/"
                                        data-link-name="Pay VAT"
                                      >
                                        <span>
                                          <span> Pay VAT </span>
                                          <small className="description">
                                            Directly from your account
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children btn-explore">
                                  <a
                                    href="https://www.payoneer.com/business/"
                                    data-link-name="Business"
                                  >
                                    <span>
                                      <span> Explore all business services </span>
                                      <small className="description">
                                        Grow your business
                                      </small>
                                    </span>
                                    <i className="level1-0160-arrow-right small" />
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page wrapper-menu-item  use-case-column">
                              <ul className="sub-menu" data-level={2}>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children use-cases-menu-item title-menu-item"
                                  data-menu-sub-category="Use cases"
                                >
                                  <span>Use cases</span>
                                  <ul className="sub-menu" data-level={3}>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/get-paid-by-marketplaces/"
                                        data-link-name="Get paid by marketplaces"
                                      >
                                        <span>
                                          <span> Get paid by marketplaces </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/get-paid-by-amazon/"
                                        data-link-name="Get paid by Amazon"
                                      >
                                        <span>
                                          <span> Get paid by Amazon </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/get-paid-by-ebay/"
                                        data-link-name="Get paid by eBay"
                                      >
                                        <span>
                                          <span> Get paid by eBay </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/multi-currency-account/"
                                        data-link-name="Multi-currency account"
                                      >
                                        <span>
                                          <span> Multi-currency account </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/international-payment-processing/"
                                        data-link-name="International payment processing"
                                      >
                                        <span>
                                          <span>
                                            {" "}
                                            International payment processing{" "}
                                          </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/send-bulk-payments/"
                                        data-link-name="Send bulk payments"
                                      >
                                        <span>
                                          <span> Send bulk payments </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/ads-payments/"
                                        data-link-name="Pay for online advertising"
                                      >
                                        <span>
                                          <span> Pay for online advertising </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/invoice-payments/"
                                        data-link-name="Send Invoice Payments"
                                      >
                                        <span>
                                          <span> Send Invoice Payments </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children use-cases-menu-item title-menu-item"
                                  data-menu-sub-category="Industries"
                                >
                                  <span>Industries</span>
                                  <ul className="sub-menu" data-level={3}>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/ecommerce-sellers-payment-solution/"
                                        data-link-name="eCommerce sellers"
                                      >
                                        <span>
                                          <span> eCommerce sellers </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/it-outsourcing-agencies/"
                                        data-link-name="IT outsourcing agencies"
                                      >
                                        <span>
                                          <span> IT outsourcing agencies </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketing-agencies/"
                                        data-link-name="Marketing agencies"
                                      >
                                        <span>
                                          <span> Marketing agencies </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/wholesalers-exporters-payment-solution/"
                                        data-link-name="Wholesalers and exporters"
                                      >
                                        <span>
                                          <span> Wholesalers and exporters </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/startups/"
                                        data-link-name="Startups"
                                      >
                                        <span>
                                          <span> Startups </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/web-mobile-app-developers/"
                                        data-link-name="Web & mobile app developers"
                                      >
                                        <span>
                                          <span>
                                            {" "}
                                            Web &amp; mobile app developers{" "}
                                          </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/dropshippers/"
                                        data-link-name="Dropshippers"
                                      >
                                        <span>
                                          <span> Dropshippers </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
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
                          data-menu-category="Marketplace"
                        >
                          <a
                            href="https://www.payoneer.com/marketplace/"
                            data-link-name="Marketplace"
                          >
                            <span>Marketplace</span>
                            <i className="level1-0160-arrow-right small" />
                          </a>
                          <ul className="sub-menu" data-level={1}>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page banner-menu-item">
                              <a
                                href="https://www.payoneer.com/marketplace/"
                                data-link-name="Mass payout platform"
                              >
                                <span>
                                  <span>
                                    {" "}
                                    Mass payout platform{" "}
                                    <i className="level1-0160-arrow-right small" />
                                  </span>
                                  <small className="description">
                                    Trusted by millions of marketplaces, sellers, and
                                    service providers worldwide
                                  </small>
                                </span>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page wrapper-menu-item">
                              <ul className="sub-menu" data-level={2}>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children title-menu-item">
                                  <ul className="sub-menu" data-level={3}>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketplace/mass-payouts-platform/"
                                        data-link-name="Payouts"
                                      >
                                        <span>
                                          <span> Payouts </span>
                                          <small className="description">
                                            Pay in 190+ countries
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/manage-currencies/"
                                        data-link-name="Manage Currencies"
                                      >
                                        <span>
                                          <span> Manage currencies </span>
                                          <small className="description">
                                            Multicurrency payouts
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketplace/payment-collection/"
                                        data-link-name="Payment collection"
                                      >
                                        <span>
                                          <span> Payment collection </span>
                                          <small className="description">
                                            Automated payment collection
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketplace/risk-fraud/"
                                        data-link-name="Risk and Fraud"
                                      >
                                        <span>
                                          <span> Risk and Fraud </span>
                                          <small className="description">
                                            Secure every transaction
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketplace/tax-form-collection/"
                                        data-link-name="Tax Page"
                                      >
                                        <span>
                                          <span> Tax Form Collection </span>
                                          <small className="description">
                                            Automated tax payments
                                          </small>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children btn-explore">
                                  <a
                                    href="https://www.payoneer.com/marketplace/"
                                    data-link-name="Marketplaces"
                                  >
                                    <span>
                                      <span> Explore all marketplace services </span>
                                      <small className="description">
                                        Grow your marketplace
                                      </small>
                                    </span>
                                    <i className="level1-0160-arrow-right small" />
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page wrapper-menu-item  use-case-column">
                              <ul className="sub-menu" data-level={2}>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children use-cases-menu-item title-menu-item"
                                  data-menu-sub-category="Use cases"
                                >
                                  <span>Use cases</span>
                                  <ul className="sub-menu" data-level={3}>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketplace/collect-1042-tax-forms/"
                                        data-link-name="Collect 1042 tax forms page"
                                      >
                                        <span>
                                          <span> Collect 1042 tax forms </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketplace/collect-1099-tax-forms/"
                                        data-link-name="Collect 1099 tax forms"
                                      >
                                        <span>
                                          <span> Collect 1099 forms </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketplace/collect-w9-tax-forms/"
                                        data-link-name="Collect W9 tax forms"
                                      >
                                        <span>
                                          <span> Collect W9 tax forms </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketplace/get-paid-by-marketplaces/"
                                        data-link-name="Get paid by marketplaces"
                                      >
                                        <span>
                                          <span> Get paid by marketplaces </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children use-cases-menu-item title-menu-item"
                                  data-menu-sub-category="Industries"
                                >
                                  <span>Industries</span>
                                  <ul className="sub-menu" data-level={3}>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketplace/digital-royalties-payout-solution/"
                                        data-link-name="Digital Royalties"
                                      >
                                        <span>
                                          <span> Digital Royalties </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketplace/digital-gaming-payout-solution/"
                                        data-link-name="Digital Gaming"
                                      >
                                        <span>
                                          <span> Marketplaces digital gaming </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketplace/travel-payout-solution/"
                                        data-link-name="Travel"
                                      >
                                        <span>
                                          <span> Travel </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketplace/ecommerce/"
                                        data-link-name="eCommerce"
                                      >
                                        <span>
                                          <span> eCommerce </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                      <a
                                        href="https://www.payoneer.com/marketplace/creators-professional-services/"
                                        data-link-name="Creators and professional services"
                                      >
                                        <span>
                                          <span>
                                            {" "}
                                            Creators and professional services{" "}
                                          </span>
                                        </span>
                                        <i className="level1-0160-arrow-right small" />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page note-link">
                              {" "}
                              * Please click here If you are an{" "}
                              <a
                                href="https://www.payoneer.com/business/"
                                data-link-name="Online Seller"
                              >
                                {" "}
                                online seller{" "}
                              </a>
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
                    <a
                      href="/login"
                      className="btn btn-link rounded-pill"
                    >
                      Sign In
                    </a>
                  </div>
                  <a
                    href="/signup"
                    className="d-none btn btn-primary rounded-pill d-lg-flex align-items-center btn-arrow"
                  >
                    Register
                  </a>
                </div>
                <div className="btn-burger d-lg-none m-0">
                  <a href="#menu">
                    <div className="hamburger hamburger--slider js-hamburger">
                      <div className="hamburger-box">
                        <div className="hamburger-inner" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      
    );
  }
}

export default MainHeader;

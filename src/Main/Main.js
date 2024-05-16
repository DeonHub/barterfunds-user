import React from "react";
import './Main.css'
import CurrencyLogosCarousel from './CurrencyLogosCarousel'; // Import the component
import MainHeader from './MainHeader'; // Import the component
// import 'boxicons';


class Main extends React.Component {
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

  {/* ======= Header ======= */}
  
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo">
        <img
          src="/assets/images/barterfunds-logo.png"
          alt="logo"
          className="img-fluid"
        />
      </a>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#services">
              Services
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="https://www.trustpilot.com/review/barter-funds.com"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="https://wa.me/message/ON5PHWAZTGKWI1"
            >
              Exchange Rates
            </a>
          </li>
          <li>
            <a
              className="nav-link btn"
              href="https://blog.barter-funds.com/"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="nav-link btn"
              href="https://wa.me/message/ON5PHWAZTGKWI1"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="btn getstarted"
              href="https://wa.me/message/ON5PHWAZTGKWI1"
            >
              Signin
            </a>
          </li>
          <li>
            <a
              className="btn getstarted  btn-arrow"
              href="https://wa.me/message/ON5PHWAZTGKWI1"
            >
              Register
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex align-items-center">
    <div
      className="container position-relative"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-9 text-center">
          <h1>BUY, SELL, SEND, RECEIVE</h1>
          <CurrencyLogosCarousel /> 
          <div className="get-started">
        <a
          href="https://wa.me/message/ON5PHWAZTGKWI1"
          className="btn-get-started"
        >
          Get Started
        </a>
      </div>
        </div>
      </div>
      
      <div className="features-list clearfix row row-cols-lg-5">
        <div className="feature">
          <div className="media">
            <div className="feature-icon">
              {/* Replace the contents with the SVG code of the icon */}
              <svg
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a4 4 0 0 1 4 4v2h2.5A1.5 1.5 0 0 1 18 9.5V11c-.319 0-.637.11-.896.329l-.107.1c-.812.845-1.656 1.238-2.597 1.238-.783 0-1.4.643-1.4 1.416v2.501c0 2.374.924 4.22 2.68 5.418L3.5 22A1.5 1.5 0 0 1 2 20.5v-11A1.5 1.5 0 0 1 3.5 8H6V6a4 4 0 0 1 4-4Zm8.284 10.122c.992 1.036 2.091 1.545 3.316 1.545.193 0 .355.143.392.332l.008.084v2.501c0 2.682-1.313 4.506-3.873 5.395a.385.385 0 0 1-.253 0c-2.476-.86-3.785-2.592-3.87-5.13L14 16.585v-2.5c0-.23.18-.417.4-.417 1.223 0 2.323-.51 3.318-1.545a.389.389 0 0 1 .566 0ZM10 13.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM10 4a2 2 0 0 0-2 2v2h4V6a2 2 0 0 0-2-2Z"
                  fill="#810020"
                  className="fill-212121"
                />
              </svg>
            </div>
            <div className="media-body media-middle feature-text">
              <strong>100%</strong> Secured System
            </div>
          </div>
        </div>
        <div className="feature">
          <div className="media">
            <div className="feature-icon">
              {/* Replace the contents with the SVG code of the icon */}
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h48v48H0z" fill="none" />
                <path
                  d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 34h-4v-4h4v4zm4.13-15.49-1.79 1.84C26.9 25.79 26 27 26 30h-4v-1c0-2.21.9-4.21 2.34-5.66l2.49-2.52C27.55 20.1 28 19.1 28 18c0-2.21-1.79-4-4-4s-4 1.79-4 4h-4c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.76-.71 3.35-1.87 4.51z"
                  fill="#810020"
                  className="fill-000000"
                />
              </svg>
            </div>
            <div className="media-body media-middle feature-text">
              <strong>24/7</strong> Customer Support
            </div>
          </div>
        </div>
        <div className="feature">
          <div className="media">
            <div className="feature-icon">
              {/* Replace the contents with the SVG code of the icon */}
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m15 12 5-4-5-4v2.999H2v2h13zm7 3H9v-3l-5 4 5 4v-3h13z"
                  fill="#810020"
                  className="fill-000000"
                />
              </svg>
            </div>
            <div className="media-body media-middle feature-text">
              <strong>365 Days</strong> Instant Payment
            </div>
          </div>
        </div>
        <div className="feature">
          <div className="media">
            <div className="feature-icon">
              {/* Replace the contents with the SVG code of the icon */}
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M19.375 15.103A8.001 8.001 0 0 0 8.03 5.053l-.992-1.737A9.996 9.996 0 0 1 17 3.34c4.49 2.592 6.21 8.142 4.117 12.77l1.342.774-4.165 2.214-.165-4.714 1.246.719zM4.625 8.897a8.001 8.001 0 0 0 11.345 10.05l.992 1.737A9.996 9.996 0 0 1 7 20.66C2.51 18.068.79 12.518 2.883 7.89L1.54 7.117l4.165-2.214.165 4.714-1.246-.719zM8.5 14H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V7h2v1h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v1h-2v-1H8.5v-2z"
                  fill="#810020"
                  className="fill-000000"
                />
              </svg>
            </div>
            <div className="media-body media-middle feature-text">
              <strong>Realtime</strong> Competitive Rates
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Hero */}
  <main id="main">
    {/* ======= Services Section ======= */}
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            Barter Funds offers a comprehensive suite of financial services
            tailored to meet your diverse needs. Whether you're looking to buy
            or sell PayPal, Bitcoin, Bitcoin Cash, USDT, USD Coin, Litecoin,
            Chinese Yuan, or Perfect Money, we've got you covered. Conveniently
            exchange these digital currencies for Ghana Cedis through seamless
            transactions via mobile money or bank transfer. With Barter Funds,
            sending and receiving payments has never been easier. Trust us to
            facilitate secure and efficient transfers, empowering you to manage
            your finances with confidence. Experience hassle-free financial
            transactions today.
          </p>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="service-container">
              <div className="card">
                <div className="front">
                  <p className="front-heading">BUY</p>
                  <p>See More Details</p>
                </div>
                <div className="back">
                  <p>
                    Easily acquire PayPal, Bitcoin, Bitcoin Cash, USDT, USD
                    Coin, Litecoin, Ethereum, Chinese Yuan, and Perfect Money
                    using Ghana Cedis through mobile money or bank transfers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="service-container">
              <div className="card">
                <div className="front">
                  <p className="front-heading">SELL</p>
                  <p>See More Details</p>
                </div>
                <div className="back">
                  <p>
                    Sell your PayPal, Bitcoin, Bitcoin Cash, USDT, USD Coin,
                    Litecoin, Ethereum, Chinese Yuan, and Perfect Money for
                    Ghana Cedis via mobile money or bank transfer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="service-container">
              <div className="card">
                <div className="front">
                  <p className="front-heading">SEND</p>
                  <p>See More Details</p>
                </div>
                <div className="back">
                  <p>
                    Swiftly transfer PayPal, Bitcoin, Bitcoin Cash, USDT, USD
                    Coin, Litecoin, Ethereum, Chinese Yuan, and Perfect Money to
                    your suppliers, individuals and make online payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="service-container">
              <div className="card">
                <div className="front">
                  <p className="front-heading">RECEIVE</p>
                  <p>See More Details</p>
                </div>
                <div className="back">
                  <p>
                    {" "}
                    Receive payments in PayPal, Bitcoin, Bitcoin Cash, USDT, USD
                    Coin, Litecoin, Chinese Yuan, and Perfect Money, converted
                    into Ghana Cedis, directly to your mobile money or bank
                    account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section */}
    {/* ======= Clients Section ======= */}
    <section id="clients" className="clients section-bg">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in"
          >
            <img
              src="/assets/images/payment/mtn.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in"
          >
            <img
              src="/assets/images/payment/vodafone.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in"
          >
            <img
              src="/assets/images/payment/airteltigo.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in"
          >
            <img
              src="/assets/images/payment/uba.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in"
          >
            <img
              src="/assets/images/payment/alipay.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in"
          >
            <img
              src="/assets/images/payment/wechatpay.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    {/* End Clients Section */}
    {/* ======= Frequently Asked Questions Section ======= */}
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Here are some common questions our customers ask:</p>
        </div>
        <div className="faq-list">
          <ul>
            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-1"
                className="collapsed"
              >
                What is the currency exchange rate?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-1"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  The currency exchange rate is the value of one currency in
                  relation to another. It determines how much of one currency
                  you can get in exchange for another. Exchange rates fluctuate
                  constantly due to factors such as supply and demand,
                  geopolitical events, and economic indicators.{" "}
                </p>
                <p>
                  We understand that finding the best exchange rate is important
                  to you. That's why we offer competitive rates that are updated
                  in real-time to ensure that you always get the best deal
                  possible.
                </p>
                <p />
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={100}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-2"
                className="collapsed"
              >
                How do I exchange currency?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-2"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  To exchange currency, you have to login to your account to
                  access the user dashboard where you can exchange. Simply
                  select the currencies you want to exchange and the amount, and
                  then follow the instructions to complete your transaction.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={200}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-3"
                className="collapsed"
              >
                What is the processing time for currency exchange?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-3"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  The processing time for currency exchange varies depending on
                  the method you choose. Immediately you complete your exchange
                  order, the transaction can typically be completed within a few
                  minutes. Some transactions may take longer due to security and
                  verification procedures.
                </p>
                <p>
                  {" "}
                  We know that time is money, and that's why we offer instant
                  payment options. Once your exchange is complete, your payment
                  will be processed and sent to your account instantly. No more
                  waiting around for days to receive your payment!
                </p>
                <p />
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={300}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-4"
                className="collapsed"
              >
                What documents do I need for verification?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-4"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Generally, you will need a valid government-issued ID such as
                  a passport, driver's license, or national ID card to exchange
                  currency. In some cases, you may also be required to provide
                  additional documentation, such as proof of address or proof of
                  income.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-5"
                className="collapsed"
              >
                How can I contact your customer support team?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-5"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  You can contact our customer support team by emailing
                  support@barter-funds.com or by calling our office number at
                  0598870911.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* End Frequently Asked Questions Section */}
    {/* ======= Contact Section ======= */}
    {/* End Contact Section */}
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6 footer-links">
            <h4>Partnerships</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://barter-funds.com/developers">Developers</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://barter-funds.com/investors">Investors</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://barter-funds.com/partners">Partners</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://barter-funds.com/affiliates">Affiliates</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 footer-links">
            <h4>Legal Terms</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://barter-funds.com/payment-policy">
                  Payment Policy
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://barter-funds.com/refund-policy">
                  Refund Policy
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://barter-funds.com/terms-and-conditions">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://barter-funds.com/privacy-policy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 footer-links">
            <h4>Help Center</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">FAQ</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Support</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Fees</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Features</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://wa.me/message/ON5PHWAZTGKWI1">Buy Funds</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://wa.me/message/ON5PHWAZTGKWI1">Sell Funds</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://wa.me/message/ON5PHWAZTGKWI1">Send Payment</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://wa.me/message/ON5PHWAZTGKWI1">
                  Receive Payment
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 footer-links">
            <h4>Resources</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://blog.barter-funds.com/">News/Blog</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Newsletter</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">How it works</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Security</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://wa.me/message/ON5PHWAZTGKWI1">Products</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://wa.me/message/ON5PHWAZTGKWI1">Services</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://wa.me/message/ON5PHWAZTGKWI1">About us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="https://wa.me/message/ON5PHWAZTGKWI1">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container py-4">
      <div className="text-center">
        <div className="credits">
          © 2019 - 2024 Barter Funds. All Rights Reserved. Powered by{" "}
          <a href="#">Currency Technologies</a>
        </div>
      </div>
      <div className="text-center pt-3">
        <a href="https://twitter.com/barterfunds" className="twitter">
          <i className="bx bxl-twitter" />
        </a>
        <a href="https://facebook.com/barterfunds" className="facebook">
          <i className="bx bxl-facebook" />
        </a>
        <a href="https://instagram.com/barterfunds" className="instagram">
          <i className="bx bxl-instagram" />
        </a>
        <a href="https://youtube.com/barterfunds" className="youtube">
          <i className="bx bxl-youtube" />
        </a>
        <a href="https://linkedin.com/company/barterfunds" className="linkedin">
          <i className="bx bxl-linkedin" />
        </a>
      </div>
    </div>
  </footer>
  {/* End Footer */}
  {/*--
  <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
->
  <!-- Vendor JS Files */}
  {/* Template Main JS File */}
</>

    );
  }
}

export default Main;

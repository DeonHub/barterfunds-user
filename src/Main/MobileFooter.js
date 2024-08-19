import React from "react";

class MobileFooter extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
      currentYear: currentYear,
    };
  }

  render() {
    const footerLinkStyle = {
      flex: '1 1 50%',
      boxSizing: 'border-box',
    };

    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Partnerships</h4>
                <ul>
                  <li>
                    <a href="https://barter-funds.com/developers">Developers</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/investors">Investors</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/partners">Partners</a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/affiliates">Affiliates</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Legal Terms</h4>
                <ul>
                  <li>
                    <a href="https://barter-funds.com/payment-policy">
                      Payment Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/refund-policy">
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/terms-and-conditions">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="https://barter-funds.com/privacy-policy">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Help Center</h4>
                <ul>
                  <li>
                    <a href="/">FAQ</a>
                  </li>
                  <li>
                    <a href="/">Support</a>
                  </li>
                  <li>
                    <a href="/">Fees</a>
                  </li>
                  <li>
                    <a href="/">Features</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Solutions</h4>
                <ul>
                  <li>
                    <a href="https://wa.me/message/ON5PHWAZTGKWI1">Personal</a>
                  </li>
                  <li>
                    <a href="https://wa.me/message/ON5PHWAZTGKWI1">Business</a>
                  </li>
                  <li>
                    <a href="https://wa.me/message/ON5PHWAZTGKWI1">Freelance</a>
                  </li>
                  <li>
                    <a href="https://wa.me/message/ON5PHWAZTGKWI1">
                      Tools
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a href="https://blog.barter-funds.com/">News/Blog</a>
                  </li>
                  <li>
                    <a href="/">Newsletter</a>
                  </li>
                  <li>
                    <a href="/">How it works</a>
                  </li>
                  <li>
                    <a href="/">Security</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="https://wa.me/message/ON5PHWAZTGKWI1">Products</a>
                  </li>
                  <li>
                    <a href="https://wa.me/message/ON5PHWAZTGKWI1">Services</a>
                  </li>
                  <li>
                    <a href="https://wa.me/message/ON5PHWAZTGKWI1">About us</a>
                  </li>
                  <li>
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
              © 2019 - {this.state.currentYear} Barter Funds. All Rights Reserved. Powered by
              <a href="/">Currency Technologies</a>
            </div>
          </div>
          <div className="text-center social-links" style={footerLinkStyle}>
            <a href="https://twitter.com/barterfunds" className="twitter">
              <i className="fab fa-twitter-square" />
            </a>
            <a href="https://facebook.com/barterfunds" className="facebook">
              <i className="fab fa-facebook-square" />
            </a>
            <a href="https://instagram.com/barterfunds" className="instagram">
              <i className="fab fa-instagram-square" />
            </a>
            <a href="https://youtube.com/barterfunds" className="youtube">
              <i className="fab fa-youtube-square" />
            </a>
            <a href="https://linkedin.com/company/barterfunds" className="linkedin">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://linkedin.com/company/barterfunds" className="tiktok">
              <i className="fa-brands fa-square-whatsapp" />
            </a>
            <a href="https://linkedin.com/company/barterfunds" className="tiktok">
              <i className="fa-brands fa-tiktok" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default MobileFooter;

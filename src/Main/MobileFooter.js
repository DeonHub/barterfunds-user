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
                    <a href="/developers">Developers</a>
                  </li>
                  <li>
                    <a href="/investors">Investors</a>
                  </li>
                  <li>
                    <a href="/partners">Partners</a>
                  </li>
                  <li>
                    <a href="/affiliates">Affiliates</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Legal Terms</h4>
                <ul>
                  <li>
                    <a href="/payment-policy">
                      Payment Policy
                    </a>
                  </li>
                  <li>
                    <a href="/refund-policy">
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Help Center</h4>
                <ul>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/support-center">Support</a>
                  </li>
                  <li>
                    <a href="/fees">Fees</a>
                  </li>
                  <li>
                    <a href="/features">Features</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Solutions</h4>
                <ul>
                  <li>
                    <a href="/personal">Personal</a>
                  </li>
                  <li>
                    <a href="/business">Business</a>
                  </li>
                  <li>
                    <a href="/freelance">Freelance</a>
                  </li>
                  <li>
                    <a href="/organization">
                      Organization
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
                    <a href="/newsletter">Newsletter</a>
                  </li>
                  <li>
                    <a href="/how-it-works">How it works</a>
                  </li>
                  <li>
                    <a href="/security">Security</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links" style={footerLinkStyle}>
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="/products">Products</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <div className="text-center">
            <div className="credits">
              © 2019 - {this.state.currentYear} Barter Funds. All Rights Reserved. Powered by{" "}
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
            <a href="https://wa.me/message/ON5PHWAZTGKWI1" className="whatsapp">
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

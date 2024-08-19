import React from 'react';
import '../../Page.css'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Block from '../../components/Block'
import Content from '../../components/Content'
import Head from '../../components/Head'
import Breadcrumb from '../../components/Breadcrumb'
import PageContainer from '../../components/PageContainer'
import BlockHead from '../../components/BlockHead'
import BlockHeadContent from '../../components/BlockHeadContent'
import BlockTitle from '../../components/BlockTitle'

const FAQ = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Help', href: '/help', active: false },
    { label: 'FAQ', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="FAQ | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Frequently Asked Questions
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <div className="nk-block">
          <div className="card">
            <div id="faqs" className="accordion">
              <div className="accordion-item">
                <span
                  className="accordion-head"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-q1"
                >
                  <h6 className="title">What is Barter Funds?</h6>
                  <span className="accordion-icon" />
                </span>
                <div
                  className="accordion-body collapse show"
                  id="faq-q1"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-inner">
                    <p>
                      <strong>Barter Funds</strong> is an innovative eCurrency
                      exchange platform that facilitates seamless conversion
                      between various digital currencies, providing users with a
                      convenient way to trade and manage their digital assets.
                    </p>
                  </div>
                </div>
              </div>
              {/* .accordion-item */}
              <div className="accordion-item">
                <span
                  className="accordion-head collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-q2"
                >
                  <h6 className="title">How does Barter Funds work?</h6>
                  <span className="accordion-icon" />
                </span>
                <div
                  className="accordion-body collapse"
                  id="faq-q2"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-inner">
                    <p>
                      Barter Funds simplifies the process of exchanging
                      eCurrencies by offering a user-friendly interface where
                      users can securely buy, sell, and trade digital
                      currencies. Users can create accounts, deposit funds,
                      choose their desired currencies, and execute transactions
                      quickly and efficiently.
                    </p>
                  </div>
                </div>
              </div>
              {/* .accordion-item */}
              <div className="accordion-item">
                <span
                  className="accordion-head collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-q3"
                >
                  <h6 className="title">
                    What digital currencies does Barter Funds support?
                  </h6>
                  <span className="accordion-icon" />
                </span>
                <div
                  className="accordion-body collapse"
                  id="faq-q3"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-inner">
                    <p>
                      Barter Funds supports a wide range of popular digital
                      currencies, including but not limited to Bitcoin (BTC),
                      Ethereum (ETH), Litecoin (LTC), Paypal (PP), Chinese Yuan
                      (RMB) and more.
                    </p>
                    <h6>What else is included?</h6>
                    <ul className="list list-sm list-checked">
                      <li>Bitcoin</li>
                      <li>Bitcoin Cash</li>
                      <li>Tether USDT</li>
                      <li>USD Coin</li>
                      <li>Ethereum</li>
                      <li>Litecoin</li>
                      <li>Paypal</li>
                      <li>Chinese Yuan</li>
                      <li>Perfect Money</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* .accordion-item */}
              <div className="accordion-item">
                <span
                  className="accordion-head collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-q4"
                >
                  <h6 className="title">
                    Are there any fees associated with using Barter Funds?
                  </h6>
                  <span className="accordion-icon" />
                </span>
                <div
                  className="accordion-body collapse"
                  id="faq-q4"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-inner">
                    <p>
                      While Barter Funds strives to maintain competitive fees,
                      users should expect standard transaction fees for buying,
                      selling, or exchanging digital currencies. These fees may
                      vary depending on factors such as transaction volume,
                      currency pairs, and payment methods.
                    </p>
                  </div>
                </div>
              </div>
              {/* .accordion-item */}
              <div className="accordion-item">
                <span
                  className="accordion-head collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-q5"
                >
                  <h6 className="title">
                    {" "}
                    How does Barter Funds ensure the security of transactions?
                  </h6>
                  <span className="accordion-icon" />
                </span>
                <div
                  className="accordion-body collapse"
                  id="faq-q5"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-inner">
                    <p>
                      Barter Funds prioritizes the security of user funds and
                      personal information through robust encryption protocols
                      and stringent security measures. Additionally, the
                      platform may implement multi-factor authentication, cold
                      storage solutions, and regular security audits to mitigate
                      risks and safeguard against unauthorized access.
                    </p>
                  </div>
                </div>
              </div>
              {/* .accordion-item */}
              <div className="accordion-item">
                <span
                  className="accordion-head collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-q6"
                >
                  <h6 className="title">
                    {" "}
                    How do I get started with Barter Funds?
                  </h6>
                  <span className="accordion-icon" />
                </span>
                <div
                  className="accordion-body collapse"
                  id="faq-q6"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-inner">
                    <p>
                      Getting started with Barter Funds is straightforward.
                      Users can sign up for an account, complete the
                      verification process, deposit funds into their account,
                      and begin trading digital currencies on the platform. The
                      user interface is intuitive, making it easy for both
                      novice and experienced traders to navigate.
                    </p>
                  </div>
                </div>
              </div>
              {/* .accordion-item --
                                  </div><!-- .accordion */}
            </div>
            {/* .card */}
          </div>
          {/* .nk-block */}
          <div className="nk-block">
            <div className="card card-bordered">
              <div className="card-inner">
                <div className="align-center flex-wrap flex-md-nowrap g-4">
                  <div className="nk-block-image w-120px flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 120 118"
                    >
                      <path
                        d="M8.916,94.745C-.318,79.153-2.164,58.569,2.382,40.578,7.155,21.69,19.045,9.451,35.162,4.32,46.609.676,58.716.331,70.456,1.845,84.683,3.68,99.57,8.694,108.892,21.408c10.03,13.679,12.071,34.71,10.747,52.054-1.173,15.359-7.441,27.489-19.231,34.494-10.689,6.351-22.92,8.733-34.715,10.331-16.181,2.192-34.195-.336-47.6-12.281A47.243,47.243,0,0,1,8.916,94.745Z"
                        transform="translate(0 -1)"
                        fill="#f6faff"
                      />
                      <rect
                        x={18}
                        y={32}
                        width={84}
                        height={50}
                        rx={4}
                        ry={4}
                        fill="#fff"
                      />
                      <rect
                        x={26}
                        y={44}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <rect
                        x={50}
                        y={44}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <rect
                        x={74}
                        y={44}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <rect
                        x={38}
                        y={60}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <rect
                        x={62}
                        y={60}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <path
                        d="M98,32H22a5.006,5.006,0,0,0-5,5V79a5.006,5.006,0,0,0,5,5H52v8H45a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H73a2,2,0,0,0,2-2V94a2,2,0,0,0-2-2H66V84H98a5.006,5.006,0,0,0,5-5V37A5.006,5.006,0,0,0,98,32ZM73,94v4H45V94Zm-9-2H54V84H64Zm37-13a3,3,0,0,1-3,3H22a3,3,0,0,1-3-3V37a3,3,0,0,1,3-3H98a3,3,0,0,1,3,3Z"
                        transform="translate(0 -1)"
                        fill="#798bff"
                      />
                      <path
                        d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z"
                        transform="translate(0 -1)"
                        fill="#6576ff"
                      />
                      <path
                        d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z"
                        transform="translate(0 -1)"
                        fill="none"
                        stroke="#6576ff"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                      />
                      <line
                        x1={40}
                        y1={22}
                        x2={57}
                        y2={22}
                        fill="none"
                        stroke="#fffffe"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <line
                        x1={40}
                        y1={27}
                        x2={57}
                        y2={27}
                        fill="none"
                        stroke="#fffffe"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <line
                        x1={40}
                        y1={32}
                        x2={50}
                        y2={32}
                        fill="none"
                        stroke="#fffffe"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <line
                        x1="30.5"
                        y1="87.5"
                        x2="30.5"
                        y2="91.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="28.5"
                        y1="89.5"
                        x2="32.5"
                        y2="89.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="79.5"
                        y1="22.5"
                        x2="79.5"
                        y2="26.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="77.5"
                        y1="24.5"
                        x2="81.5"
                        y2="24.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="90.5"
                        cy="97.5"
                        r={3}
                        fill="none"
                        stroke="#9cabff"
                        strokeMiterlimit={10}
                      />
                      <circle
                        cx={24}
                        cy={23}
                        r="2.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeMiterlimit={10}
                      />
                    </svg>
                  </div>
                  <div className="nk-block-content">
                    <div className="nk-block-content-head px-lg-4">
                      <h5>We’re here to help you!</h5>
                      <p className="text-soft">
                        Ask a question or file a support ticket, manage request,
                        report an issues. Our team support team will get back to
                        you by email.
                      </p>
                    </div>
                  </div>
                  <div className="nk-block-content flex-shrink-0">
                    <a href="/support-center" className="btn btn-lg btn-outline-primary">
                      Get Support Now
                    </a>
                  </div>
                </div>
              </div>
              {/* .card-inner */}
            </div>
            {/* .card */}
          </div>
          {/* .nk-block */}
        </div>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default FAQ;

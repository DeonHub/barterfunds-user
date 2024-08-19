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

const Security = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Resources', href: '/resources', active: false },
    { label: 'Security', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="Security | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
              Security
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <p>
        At Barter Funds, your security is our top priority. We are committed to providing a secure platform for managing your digital assets and ensuring that your personal and financial information is protected at all times. Here's how we keep your account and transactions safe:
      </p>

      <h1 className='sub-title'>Advanced Encryption</h1>
      <p>
        We use industry-leading encryption protocols to protect your data. All sensitive information, including personal details and transaction data, is encrypted both in transit and at rest, ensuring that your information remains confidential and secure.
      </p>

      <h1 className='sub-title'>Two-Factor Authentication (2FA)</h1>
      <p>
        Enhance your account security with two-factor authentication. By enabling 2FA, you add an extra layer of protection to your account, requiring both your password and a verification code sent to your mobile device to log in.
      </p>

      <h1 className='sub-title'>Secure Transactions</h1>
      <p>
        All transactions on Barter Funds are monitored for suspicious activity. Our advanced algorithms detect and prevent fraudulent activities, ensuring that your digital assets are transferred securely and safely.
      </p>

      <h1 className='sub-title'>Account Alerts</h1>
      <p>
        Stay informed about the security of your account with real-time alerts. We notify you immediately of any unusual activity or login attempts, so you can take action quickly if needed.
      </p>

      <h1 className='sub-title'>Identity Verification</h1>
      <p>
        To prevent unauthorized access and comply with regulatory requirements, we require identity verification for all users. This process helps us ensure that only legitimate users have access to our platform, reducing the risk of fraud.
      </p>

      <h1 className='sub-title'>Dedicated Security Team</h1>
      <p>
        Our dedicated security team works around the clock to monitor the platform and respond to potential threats. We regularly update our security protocols and conduct thorough audits to maintain the highest level of security.
      </p>

      <h1 className='sub-title'>Data Privacy</h1>
      <p>
        We are committed to protecting your privacy. We adhere to strict data privacy laws and regulations, ensuring that your personal information is never shared with third parties without your consent.
      </p>

      <h1 className='sub-title'>Continuous Improvement</h1>
      <p>
        Security is an ongoing process, and we continuously invest in new technologies and practices to stay ahead of emerging threats. We regularly update our systems and protocols to ensure that your account remains secure.
      </p>

      <p>
        Your trust is important to us, and we are committed to providing a secure environment for all your digital currency needs. If you have any questions or concerns about security, please contact our support team at any time.
      </p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Security;

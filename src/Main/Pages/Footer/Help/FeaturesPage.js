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


const FeaturesPage = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Help', href: '/help', active: false },
    { label: 'Features', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="Features | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
              Platform Features
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <p>
        Barter Funds is built on a foundation of innovation, security, and user-centric design. Explore the key features that make our platform the go-to solution for digital currency management and transactions.
      </p>

      <h1 className='sub-title'>Secure Transactions</h1>
      <p>
        Security is paramount at Barter Funds. Our platform employs advanced encryption, multi-factor authentication, and real-time fraud detection to ensure that your transactions are safe from start to finish. Rest assured that your digital assets are protected with industry-leading security measures.
      </p>

      <h1 className='sub-title'>User-Friendly Interface</h1>
      <p>
        We believe that managing digital currencies should be simple and intuitive. Our user interface is designed to provide a seamless experience, whether you're a beginner or a seasoned trader. Navigate through our platform with ease, making transactions, managing your wallet, and accessing services without hassle.
      </p>

      <h1 className='sub-title'>Real-Time Market Data</h1>
      <p>
        Stay ahead of the market with real-time data and insights. Our platform provides up-to-the-minute information on digital currency prices, trends, and market movements, enabling you to make informed decisions. Whether you're trading or simply monitoring your portfolio, you’ll always be in the know.
      </p>

      <h1 className='sub-title'>Cross-Platform Accessibility</h1>
      <p>
        Access Barter Funds from any device, anywhere. Our platform is fully responsive and optimized for desktops, tablets, and smartphones, ensuring that you can manage your digital assets on the go. With our mobile app, you have full control at your fingertips.
      </p>

      <h1 className='sub-title'>Instant Notifications</h1>
      <p>
        Never miss an important update with our instant notifications feature. Receive alerts for transactions, market changes, and account activities in real-time. Stay connected and informed, no matter where you are.
      </p>

      <h1 className='sub-title'>Customizable Dashboard</h1>
      <p>
        Tailor your Barter Funds experience with a customizable dashboard. Organize and prioritize the information that matters most to you, from your portfolio overview to recent transactions and market trends. Create a workspace that suits your needs and preferences.
      </p>

      <h1 className='sub-title'>Comprehensive Support</h1>
      <p>
        Our dedicated support team is always here to help. Whether you need assistance with a transaction, technical support, or just have a question, our 24/7 customer support ensures that help is just a click or call away.
      </p>

      <h1 className='sub-title'>API Integration</h1>
      <p>
        For developers and businesses, our robust API allows you to integrate Barter Funds' features into your own applications. Leverage our secure and scalable API to create custom solutions that meet your specific needs.
      </p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default FeaturesPage;

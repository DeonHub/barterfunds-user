import React from 'react';
import '../Page.css'
import Header from '../../Header'
import Footer from '../../Footer'
import Block from '../../Pages/components/Block'
import Content from '../../Pages/components/Content'
import Head from '../../Pages/components/Head'
import Breadcrumb from '../../Pages/components/Breadcrumb'
import PageContainer from '../../Pages/components/PageContainer'
import BlockHead from '../../Pages/components/BlockHead'
import BlockHeadContent from '../../Pages/components/BlockHeadContent'
import BlockTitle from '../../Pages/components/BlockTitle'

const Marketplace = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Marketplace', href: '#', active: true }
  ];
  const styles = {
    page: {
      fontFamily: 'Poppins, sans-serif',
      lineHeight: '1.6',
      color: '#404040',
   
    },
    div: {
      marginBottom: '20px',
    },
    header: {
      fontFamily: 'Poppins, sans-serif',
      color: '#404040',
    },
    headerText: {
      fontFamily: 'Poppins, sans-serif',
      color: '#404040',
      fontSize: '24px', 
    },
    
    list: {
      listStyleType: 'disc',
      paddingLeft: '20px',
    },
    listItem: {
      marginBottom: '10px',
    },
    
  };


  return (
    <React.Fragment>
      <Header />
      <Head title="Marketplace Payments | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Marketplace Payments
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="container">
          <div style={styles.page}>
      {/* Header div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Bridging the Financial Gap for African Freelancers and Entrepreneurs</h2>
        <p>
          Africa is home to countless talented freelancers and entrepreneurs eager to connect with global markets. However, withdrawing money from international freelance and e-commerce marketplaces remains a significant challenge. Barter Funds offers a solution tailored to address these issues.
        </p>
      </div>

      {/* The Problem div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>The Problem: Difficulty in Withdrawing Earnings</h2>
        <p>
          Many African freelancers and online entrepreneurs struggle with withdrawing their earnings from global marketplaces. High fees, long waiting periods, and the need for intermediaries make accessing these funds challenging, often limiting their ability to grow their businesses.
        </p>
      </div>

      {/* The Solution div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>The Solution: Barter Funds Marketplace Integration</h2>
        <p>
          Barter Funds offers seamless integration with popular freelance and e-commerce marketplaces, providing a reliable and cost-effective way to withdraw and manage earnings directly to African bank accounts.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Direct Withdrawals to African Banks:</strong> Withdraw your earnings directly to your local bank account without intermediaries.</li>
          <li style={styles.listItem}><strong>Lower Fees:</strong> Enjoy competitive and transparent fees, ensuring you keep more of your hard-earned money.</li>
          <li style={styles.listItem}><strong>Multi-Currency Support:</strong> Convert your earnings from various currencies into your local currency with ease.</li>
          <li style={styles.listItem}><strong>Fast Processing Times:</strong> Experience quick processing times, so your money is available when you need it.</li>
          <li style={styles.listItem}><strong>Secure Transactions:</strong> Your funds are protected with advanced security protocols, ensuring safe transactions.</li>
          <li style={styles.listItem}><strong>User-Friendly Interface:</strong> Manage your withdrawals and transactions easily with our intuitive platform.</li>
        </ul>
      </div>

      {/* Empowering African Freelancers and Entrepreneurs div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Empowering African Freelancers and Entrepreneurs</h2>
        <p>
          Barter Funds is committed to empowering African freelancers and entrepreneurs by providing the financial tools they need to thrive in the global market. Our solutions remove the barriers to accessing your earnings, allowing you to focus on growing your business.
        </p>
      </div>

      {/* Call to Action div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Join Barter Funds Today</h2>
        <p>
          Stop struggling with high fees and long waiting times. Experience the Barter Funds difference and take control of your financial future. Join our community of African freelancers and entrepreneurs today and start withdrawing your earnings with ease and confidence.
        </p>
      </div>
    </div>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Marketplace;

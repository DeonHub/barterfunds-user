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

const MultiCurrency = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Multicurrency', href: '#', active: true }
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
      <Head title="Multi Currency | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Multi Currency
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="container">
          <div style={styles.page}>
      {/* Header div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Empowering Your Global Transactions with International Bank Accounts</h2>
        <p>
          In today’s interconnected world, the ability to transact in multiple currencies is essential for businesses, freelancers, and individuals looking to operate on a global scale. Barter Funds simplifies this process with our innovative MultiCurrency solution.
        </p>
      </div>

      {/* The Challenge div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>The Challenge: Managing International Payments</h2>
        <p>
          Receiving payments in foreign currencies can be complicated and costly, especially in Africa. High fees, unfavorable exchange rates, and long processing times make managing international transactions difficult, limiting business growth and financial flexibility.
        </p>
      </div>

      {/* The Solution div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>The Solution: Barter Funds MultiCurrency Accounts</h2>
        <p>
          Barter Funds offers a game-changing solution with our MultiCurrency accounts, providing international bank accounts in major global currencies such as USD, GBP, EUR, and Yuan. This enables seamless management of international payments, making it easier to access and control your funds.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>International Bank Accounts:</strong> Receive payments directly in major global currencies.</li>
          <li style={styles.listItem}><strong>Lower Transaction Fees:</strong> Enjoy reduced fees for receiving and converting international payments.</li>
          <li style={styles.listItem}><strong>Favorable Exchange Rates:</strong> Benefit from competitive exchange rates when converting currencies.</li>
          <li style={styles.listItem}><strong>Fast and Secure Transfers:</strong> Quick and secure transfers to ensure your funds are available when needed.</li>
          <li style={styles.listItem}><strong>Seamless Integration:</strong> Easily integrate with global marketplaces and payment platforms.</li>
          <li style={styles.listItem}><strong>Comprehensive Account Management:</strong> Manage all international currencies from a single platform.</li>
        </ul>
      </div>

      {/* Why MultiCurrency is Essential div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Why MultiCurrency is Essential for Your Global Operations</h2>
        <p>
          With Barter Funds MultiCurrency accounts, you can seamlessly manage your international payments, reducing costs, increasing efficiency, and expanding your business opportunities.
        </p>
        <p>
          <strong>Benefits of Barter Funds MultiCurrency Accounts:</strong>
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Expand Your Business Reach:</strong> Accept payments from clients around the world without worrying about currency conversion or high fees.</li>
          <li style={styles.listItem}><strong>Enhance Financial Flexibility:</strong> Keep funds in the currency you prefer and convert them only when needed.</li>
          <li style={styles.listItem}><strong>Build Trust with International Clients:</strong> Offer clients the convenience of paying in their local currency.</li>
          <li style={styles.listItem}><strong>Simplify Global Operations:</strong> Manage all international transactions from one place.</li>
        </ul>
      </div>

      {/* Call to Action div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Take Control of Your International Finances with Barter Funds</h2>
        <p>
          Don’t let the complexities of international payments hold you back. With Barter Funds MultiCurrency accounts, you have the tools you need to operate confidently in the global market. Sign up today and simplify your global transactions with our MultiCurrency solution.
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

export default MultiCurrency;

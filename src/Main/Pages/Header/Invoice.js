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

const Invoice = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Invoice', href: '#', active: true }
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
      <Head title="Invoice Payments | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Invoice Payments
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="container">
          <div style={styles.page}>
      {/* Header div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Revolutionizing Payments and Invoicing Across Africa</h2>
        <p>
          In the fast-evolving digital landscape of Africa, businesses, freelancers, and individuals often face significant challenges when it comes to managing payments and invoices. Barter Invoice is here to simplify, secure, and expedite the invoicing process across the continent.
        </p>
      </div>

      {/* The Challenge div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>The Challenge: Inefficient and Insecure Invoicing</h2>
        <p>
          For many businesses and freelancers in Africa, the process of sending and receiving payments can be cumbersome and risky. Paper-based invoicing and manual calculations lead to delays, errors, and disputes. Barter Invoice offers a solution to these challenges.
        </p>
      </div>

      {/* The Solution div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>The Solution: Barter Invoice</h2>
        <p>
          Barter Invoice is a comprehensive platform that empowers users to manage their financial transactions with ease and confidence. Whether you're a small business owner, a freelancer, or a corporate entity, Barter Invoice allows you to send and receive invoices seamlessly.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Easy Invoice Creation:</strong> Generate professional invoices in just a few clicks. Customize them with your branding, terms, and payment details.</li>
          <li style={styles.listItem}><strong>Secure Payments:</strong> Integrates secure payment gateways supporting multiple currencies, ensuring safe transactions.</li>
          <li style={styles.listItem}><strong>Real-Time Tracking:</strong> Get instant notifications when invoices are viewed, paid, or overdue.</li>
          <li style={styles.listItem}><strong>Automated Reminders:</strong> Reduce late payments with automated reminders sent before due dates.</li>
          <li style={styles.listItem}><strong>Multi-Currency Support:</strong> Manage cross-border transactions with ease.</li>
          <li style={styles.listItem}><strong>Comprehensive Reporting:</strong> Gain insights into your business performance with detailed invoicing and payment reports.</li>
          <li style={styles.listItem}><strong>Client Management:</strong> Store client information securely and access previous invoices and payment history.</li>
          <li style={styles.listItem}><strong>Mobile Accessibility:</strong> Manage your invoices on the go with a mobile-friendly interface.</li>
        </ul>
      </div>

      {/* Why Barter Invoice is Essential for Africa div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Why Barter Invoice is Essential for Africa</h2>
        <p>
          Barter Invoice addresses critical needs in Africa's growing digital economy by providing a reliable and efficient invoicing solution. Here’s why Barter Invoice is a game-changer for Africa:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Empowering Small Businesses:</strong> Improve cash flow and reduce administrative burdens with easy access to professional invoicing tools.</li>
          <li style={styles.listItem}><strong>Facilitating Cross-Border Trade:</strong> Simplify international transactions with multi-currency support.</li>
          <li style={styles.listItem}><strong>Building Trust and Transparency:</strong> Enhance trust between businesses and clients with transparent invoicing and secure payment options.</li>
          <li style={styles.listItem}><strong>Supporting Financial Inclusion:</strong> Enable financial inclusion by offering a user-friendly platform accessible to all.</li>
        </ul>
      </div>

      {/* Call to Action div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Join the Barter Invoice Revolution</h2>
        <p>
          Barter Invoice is more than just an innovation; it’s a solution tailored to the unique challenges faced by businesses and individuals across Africa. Embrace the future of invoicing today with Barter Invoice, and streamline your financial operations for growth.
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

export default Invoice;

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

const Escrow = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Barter Escrow', href: '#', active: true }
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
      <Head title="Barter Escrow | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Barter Escrow
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
        <PageContainer bodyClass="container">
        <div style={styles.page}>
      {/* Introduction div */}
      <div style={styles.div}>
        <h2 style={styles.header}>We Are here To Safeguard Your Transactions</h2>
        <p>
          Barter Escrow is a revolutionary platform designed to bring security and trust to every transaction. In a continent where digital fraud and scams have been on the rise, especially in online trades, exchanges, and business dealings, Barter Escrow stands as a beacon of safety. This platform is not just another service; it's a solution to one of the most pressing challenges faced by individuals and businesses across Africa—how to conduct transactions with confidence.
        </p>
      </div>

      {/* The Problem div */}
      <div style={styles.div}>
        <h2 style={styles.header}>The Problem: Trust Deficit in Online Transactions</h2>
        <p>
          Africa's digital economy is growing at an unprecedented rate. From e-commerce to freelance gigs, the opportunities are endless. However, with this growth comes the unfortunate rise of fraudulent activities. Many users have fallen victim to scams, losing hard-earned money due to a lack of trust and secure transaction methods. The problem is particularly acute in peer-to-peer transactions, where trust between parties is often minimal, and the risk of fraud is high.
        </p>
      </div>

      {/* The Solution div */}
      <div style={styles.div}>
        <h2 style={styles.header}>The Solution: How Barter Escrow Works</h2>
        <p>
          Barter Escrow was developed to address this exact problem. The platform acts as a neutral third party that holds the funds or assets involved in a transaction until all the terms of the agreement are met by both parties.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Agreement Setup:</strong> Both parties agree on the terms of the transaction, including the amount, deliverables, and time frame.</li>
          <li style={styles.listItem}><strong>Funds Deposit:</strong> The buyer deposits the agreed-upon amount into the Barter Escrow account, where it is securely held.</li>
          <li style={styles.listItem}><strong>Transaction Fulfillment:</strong> The seller delivers the goods or services as per the agreement.</li>
          <li style={styles.listItem}><strong>Release of Funds:</strong> Once the buyer confirms that the goods or services meet the agreed terms, Barter Escrow releases the funds to the seller.</li>
        </ul>
        <p>
          This simple yet effective process ensures that neither party is at risk of losing money or goods due to fraud.
        </p>
      </div>

      {/* Key Features div */}
      <div style={styles.div}>
        <h2 style={styles.header}>Key Features of Barter Escrow</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Secure Payments:</strong> All transactions are encrypted and stored in a secure environment, ensuring that your funds are safe.</li>
          <li style={styles.listItem}><strong>Dispute Resolution:</strong> In case of any disagreement between the parties, Barter Escrow provides a dispute resolution mechanism to mediate and resolve issues.</li>
          <li style={styles.listItem}><strong>Multi-Currency Support:</strong> Barter Escrow supports multiple currencies, making it easier for users across Africa to conduct transactions without worrying about currency conversions.</li>
          <li style={styles.listItem}><strong>Transparency:</strong> Every step of the transaction process is transparent, with real-time updates provided to both parties.</li>
          <li style={styles.listItem}><strong>User-Friendly Interface:</strong> The platform is designed with simplicity in mind, allowing even those with minimal digital literacy to navigate and use the service effectively.</li>
        </ul>
      </div>

      {/* Why Barter Escrow is Essential for Africa */}
      <div style={styles.div}>
        <h2 style={styles.header}>Why Barter Escrow is a Game Changer for Africa</h2>
        <p>
          Barter Escrow is not just about secure transactions; it's about fostering trust in a digital economy that has the potential to transform lives across Africa. By providing a reliable and trustworthy platform, Barter Escrow empowers individuals and businesses to engage in transactions that would have otherwise been deemed too risky. This innovation opens up new avenues for trade, expands market opportunities, and ultimately contributes to the economic growth of the continent.
        </p>
      </div>

      {/* Call to Action div */}
      <div style={styles.div}>
        <h2 style={styles.header}>Join the Barter Escrow Revolution</h2>
        <p>
          Whether you are a freelancer looking to secure payments from clients, a business owner trading goods, or an individual making an online purchase, Barter Escrow is the platform you can trust. Join us today and be part of the solution to Africa’s growing digital economy challenges. Secure your transactions, protect your assets, and trade with confidence—Barter Escrow is here to make sure you never get scammed again.
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

export default Escrow;

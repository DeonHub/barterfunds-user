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

const Transfer = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'International Transfer', href: '#', active: true }
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
      <Head title="International Transfer | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              International Transfer
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="container">
          <div style={styles.page}>
      {/* Header div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Simplifying Cross-Border Payments from Africa</h2>
        <p>
          Cross-border payments have long been a challenge for individuals and businesses in Africa. The complexities of navigating international banking systems, high transaction fees, and slow processing times often make it difficult for people to send money to loved ones, pay for services, or conduct business abroad. At Barter Funds, we understand these challenges, and we’ve developed a solution that transforms how cross-border payments are made from Africa.
        </p>
      </div>

      {/* The Problem with Cross-Border Payments div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>The Problem with Cross-Border Payments</h2>
        <p>
          Sending money across borders from Africa has historically been fraught with difficulties:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>High Fees:</strong> Traditional banks and remittance services often charge exorbitant fees for international transfers, eating into the money you send.</li>
          <li style={styles.listItem}><strong>Slow Processing Times:</strong> Transactions can take several days to process, leading to delays in receiving funds.</li>
          <li style={styles.listItem}><strong>Complex Procedures:</strong> Navigating the different banking systems and currency conversions can be confusing and time-consuming.</li>
          <li style={styles.listItem}><strong>Limited Access:</strong> Many people in Africa do not have access to international banking services, making cross-border payments even more challenging.</li>
        </ul>
      </div>

      {/* Our Solution div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Our Solution: Swift and Simple International Transfers</h2>
        <p>
          Barter Funds offers a revolutionary approach to cross-border payments. With our platform, users can send money internationally without the usual hassles. Here’s how it works:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Local Currency Payments:</strong> You simply pay us in your local currency, and we handle the rest. No need to worry about currency conversions or international banking procedures.</li>
          <li style={styles.listItem}><strong>Fast Transactions:</strong> Our platform ensures that your cross-border payments are processed swiftly, often within minutes, so your funds reach their destination without delay.</li>
          <li style={styles.listItem}><strong>Low Fees:</strong> We offer competitive rates and low fees, ensuring that more of your money goes where it’s needed.</li>
          <li style={styles.listItem}><strong>Global Reach:</strong> Whether you’re sending money to Europe, the Americas, Asia, or anywhere else in the world, Barter Funds has you covered.</li>
        </ul>
      </div>

      {/* Why Choose Barter Funds div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Why Choose Barter Funds for International Transfers?</h2>
        <p>
          Barter Funds is dedicated to making international payments from Africa as simple and affordable as possible. Here’s why we’re the best choice:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Ease of Use:</strong> Our platform is user-friendly and requires no technical knowledge. Simply log in, enter the recipient’s details, and make your payment in local currency.</li>
          <li style={styles.listItem}><strong>Secure Transactions:</strong> We use advanced security measures to protect your funds and ensure that your transactions are safe from fraud.</li>
          <li style={styles.listItem}><strong>Swift Processing:</strong> We understand the importance of timely payments. That’s why we prioritize speed without compromising security.</li>
          <li style={styles.listItem}><strong>Transparent Fees:</strong> No hidden charges. You’ll always know exactly what you’re paying in fees before completing your transaction.</li>
        </ul>
      </div>

      {/* Call to Action div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Get Started with International Transfers Today</h2>
        <p>
          Say goodbye to the hassles of cross-border payments. With Barter Funds, sending money internationally from Africa has never been easier or more affordable. Join thousands of satisfied customers who trust us to handle their international transfers with speed and reliability. Sign up today and experience the difference.
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

export default Transfer;

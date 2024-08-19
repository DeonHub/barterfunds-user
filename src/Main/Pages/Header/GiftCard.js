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

const GiftCard = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Gift Cards', href: '#', active: true }
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
      <Head title="Gift Cards  | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Gift Cards
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="container">
          <div style={styles.page}>
      {/* Header div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Bridging the Gap in Africa's Digital Economy</h2>
        <p>
          In the modern world, gift cards have become a popular means of gifting, shopping, and making transactions. However, in Africa, accessing and trading gift cards can be a significant challenge. Barter Funds is here to change that narrative by offering a reliable platform where users can buy and sell gift cards with ease and confidence.
        </p>
      </div>

      {/* The Challenge with Gift Cards in Africa div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>The Challenge with Gift Cards in Africa</h2>
        <p>
          Gift cards are a convenient way to make purchases or give presents, but many Africans face difficulties when it comes to acquiring and redeeming them. The challenges include:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Limited Access:</strong> Many international retailers don't offer gift cards directly to African markets, making it hard for individuals to access them.</li>
          <li style={styles.listItem}><strong>Fraud Risks:</strong> The online gift card market is plagued by scams and fraud, making users hesitant to buy or sell gift cards.</li>
          <li style={styles.listItem}><strong>Inconsistent Value:</strong> The value of gift cards can fluctuate, and finding a trustworthy platform to trade them is often challenging.</li>
          <li style={styles.listItem}><strong>Lack of Local Support:</strong> Few platforms provide the necessary support to help users in Africa navigate the complexities of buying and selling gift cards.</li>
        </ul>
      </div>

      {/* The Solution div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>The Solution: Barter Funds Gift Cards Platform</h2>
        <p>
          Barter Funds is revolutionizing the way Africans interact with gift cards by providing a secure, user-friendly platform where users can buy, sell, and trade gift cards with confidence.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Wide Selection of Gift Cards:</strong> Access a broad range of gift cards from popular international brands, all available for purchase in your local currency.</li>
          <li style={styles.listItem}><strong>Secure Transactions:</strong> Our platform employs advanced security measures to ensure that every transaction is safe, protecting users from scams and fraud.</li>
          <li style={styles.listItem}><strong>Competitive Rates:</strong> Get the best value for your gift cards, whether you’re buying or selling, with transparent pricing and no hidden fees.</li>
          <li style={styles.listItem}><strong>Instant Transactions:</strong> Experience fast and efficient transactions with instant delivery of digital gift cards and quick payouts for sellers.</li>
          <li style={styles.listItem}><strong>Dedicated Support:</strong> Our customer support team is always available to assist with any issues or questions, ensuring a smooth and hassle-free experience.</li>
        </ul>
      </div>

      {/* Why Barter Funds is the Best Choice div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Why Barter Funds is the Best Choice for Gift Cards in Africa</h2>
        <p>
          By choosing Barter Funds, you're opting for a platform that understands the unique challenges faced by Africans in the digital economy. Our Gift Cards platform is designed to offer convenience, security, and value, making it easier than ever to engage with the global market.
        </p>
        <p>
          <strong>Benefits of Using Barter Funds Gift Cards Platform:</strong>
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Access to Global Brands:</strong> Buy gift cards from major global brands without the usual barriers, all in your local currency.</li>
          <li style={styles.listItem}><strong>Safe and Secure Platform:</strong> Trade with confidence knowing that your transactions are protected by cutting-edge security protocols.</li>
          <li style={styles.listItem}><strong>No Hidden Fees:</strong> Enjoy transparent pricing with no surprise fees, ensuring you get the best value for your money.</li>
          <li style={styles.listItem}><strong>Quick and Reliable:</strong> Whether buying or selling, enjoy the speed and reliability of instant transactions on our platform.</li>
          <li style={styles.listItem}><strong>Support You Can Trust:</strong> Our dedicated support team is here to help you navigate any challenges and make the most of your gift card transactions.</li>
        </ul>
      </div>

      {/* Call to Action div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Get Started with Barter Funds Gift Cards Today</h2>
        <p>
          Don't let the challenges of buying and selling gift cards hold you back. With Barter Funds, you can easily access, trade, and manage your gift cards, unlocking new opportunities in Africa's digital economy. Sign up today and experience the difference.
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

export default GiftCard;

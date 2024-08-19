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

const DigitalAssets = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Digital Assets', href: '#', active: true }
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
      <Head title="Digital Assets | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Digital Assets
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="container">
          <div style={styles.page}>
      {/* Header div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Empowering Your Financial Freedom</h2>
        <p>
          In a rapidly evolving digital world, access to diverse digital assets is essential for financial flexibility and freedom. Barter Funds is your gateway to a vast array of digital assets, enabling you to buy, sell, send, and receive assets seamlessly against your local currency. Whether you're dealing with PayPal, Bitcoin, USDT, or any other digital asset, we've got you covered.
        </p>
      </div>

      {/* Comprehensive Digital Asset Solutions div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Comprehensive Digital Asset Solutions</h2>
        <p>
          Barter Funds offers a holistic solution for managing your digital assets, ensuring that you have the power to transact with ease and security. Our platform supports over 20 digital assets, providing you with the flexibility you need in today's global economy.
        </p>
        <ul style={styles.list}>
  <li id='buy' className='Buy' style={styles.listItem}>
    <strong>Buy Assets:</strong> Gain access to a wide variety of digital assets at competitive rates. Whether you need Bitcoin, Ethereum, PayPal, or any other digital currency, Barter Funds allows you to purchase them directly with your local currency.
  </li>
  <li id='sell' className='Sell' style={styles.listItem}>
    <strong>Sell Assets:</strong> Convert your digital assets into local currency easily. Barter Funds ensures fast and secure transactions with competitive exchange rates.
  </li>
  <li id='send' className='Send' style={styles.listItem}>
    <strong>Send Assets:</strong> Send digital assets to anyone, anywhere in the world. Barter Funds provides a secure and efficient way to send your assets across borders.
  </li>
  <li id='receive' className='Receive' style={styles.listItem}>
    <strong>Receive Assets:</strong> Accept payments in various digital currencies and easily convert them into your local currency with Barter Funds.
  </li>
</ul>

      </div>

      {/* Supported Digital Assets div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Supported Digital Assets</h2>
        <p>
          Barter Funds supports a wide range of digital assets, giving you the flexibility to choose the currency that best suits your needs. Our platform includes:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>PayPal</li>
          <li style={styles.listItem}>Alipay</li>
          <li style={styles.listItem}>WeChat</li>
          <li style={styles.listItem}>Payoneer</li>
          <li style={styles.listItem}>Bitcoin (BTC)</li>
          <li style={styles.listItem}>Tether (USDT)</li>
          <li style={styles.listItem}>USD Coin (USDC)</li>
          <li style={styles.listItem}>Ethereum (ETH)</li>
          <li style={styles.listItem}>Bitcoin Cash (BCH)</li>
          <li style={styles.listItem}>Binance Coin (BNB)</li>
          <li style={styles.listItem}>Zelle</li>
          <li style={styles.listItem}>CashApp</li>
          <li style={styles.listItem}>And many more...</li>
        </ul>
      </div>

      {/* Why Choose Barter Funds div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Why Choose Barter Funds?</h2>
        <p>
          Barter Funds is more than just a platform for trading digital assets; it's a gateway to financial freedom. Here's why we're the best choice for managing your digital assets:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>User-Friendly Interface:</strong> Our platform is designed to be intuitive and easy to use, even for those new to digital assets.</li>
          <li style={styles.listItem}><strong>Secure Transactions:</strong> With advanced encryption and security protocols, your transactions are safe from fraud and theft.</li>
          <li style={styles.listItem}><strong>Competitive Rates:</strong> Enjoy some of the best rates in the market, whether you're buying, selling, sending, or receiving digital assets.</li>
          <li style={styles.listItem}><strong>Instant Transactions:</strong> Experience the convenience of instant transfers, ensuring that your transactions are completed without delay.</li>
          <li style={styles.listItem}><strong>Local Currency Support:</strong> All transactions are conducted in your local currency, making it easier for you to manage your finances.</li>
        </ul>
      </div>

      {/* Call to Action div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Get Started with Barter Funds Today</h2>
        <p>
          Unlock the full potential of your digital assets with Barter Funds. Whether you're buying, selling, sending, or receiving assets, our platform provides you with the tools and support you need to navigate the digital economy with confidence. Sign up today and take control of your financial future.
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

export default DigitalAssets;

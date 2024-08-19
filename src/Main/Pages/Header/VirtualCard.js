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




const VirtualCard = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Virtual Card', href: '#', active: true }
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
      <Head title="Virtual Card | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Virtual Prepaid Cards
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="container">
          <div style={styles.page}>
      {/* Header div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Empowering Your Online Transactions</h2>
        <p>
          In today's digital world, having access to secure and flexible payment methods is essential for managing your online transactions. Barter Funds introduces <strong>Virtual Prepaid Cards</strong>, designed to give you the freedom and security you need to make online purchases, subscribe to services, and manage your expenses without the limitations of traditional payment methods.
        </p>
      </div>

      {/* The Need for Virtual Prepaid Cards div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>The Need for Virtual Prepaid Cards</h2>
        <p>
          Online transactions are a part of everyday life, whether you're shopping online, subscribing to digital services, or paying bills. However, not everyone has access to traditional credit or debit cards, and even those who do may prefer a more secure and controlled way to manage their spending.
        </p>
        <p>
          Traditional payment methods often come with risks such as fraud, overspending, and the potential for unauthorized transactions. These challenges highlight the need for a more secure and flexible solution.
        </p>
      </div>

      {/* The Solution div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>The Solution: Barter Funds Virtual Prepaid Cards</h2>
        <p>
          With our Virtual Prepaid Cards, you gain access to a powerful tool for managing your online transactions. These cards work just like traditional prepaid cards, but with added convenience and security. They can be used for online shopping, paying for subscriptions, and managing any other online expenses.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Instant Issuance:</strong> Get your virtual prepaid card instantly through Barter Funds, ready to use for your online transactions.</li>
          <li style={styles.listItem}><strong>Global Acceptance:</strong> Use your virtual prepaid card anywhere major credit and debit cards are accepted online.</li>
          <li style={styles.listItem}><strong>Secure and Private:</strong> Enjoy enhanced security features that protect your card information from unauthorized access, minimizing the risk of fraud.</li>
          <li style={styles.listItem}><strong>Control Your Spending:</strong> Set limits on your virtual card to control your spending and avoid overspending.</li>
          <li style={styles.listItem}><strong>No Need for a Bank Account:</strong> You don’t need a traditional bank account to use our virtual prepaid cards, making them accessible to a broader audience.</li>
          <li style={styles.listItem}><strong>Easy Reloading:</strong> Top up your virtual card with funds anytime, ensuring that you always have the balance needed for your transactions.</li>
        </ul>
      </div>

      {/* Why Virtual Prepaid Cards are the Ideal Solution div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Why Virtual Prepaid Cards are the Ideal Solution</h2>
        <p>
          Our Virtual Prepaid Cards are designed to offer you a secure, flexible, and convenient way to manage your online payments. Whether you’re an avid online shopper, a business owner managing subscriptions, or someone looking for a secure payment method, these cards are the perfect solution.
        </p>
        <p>
          <strong>Benefits of Using Virtual Prepaid Cards:</strong>
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Enhanced Security:</strong> Protect your financial information with a virtual card that minimizes exposure to fraud.</li>
          <li style={styles.listItem}><strong>Flexibility and Convenience:</strong> Use your card globally for a wide range of online transactions, with the convenience of instant issuance and easy reloading.</li>
          <li style={styles.listItem}><strong>Accessibility:</strong> Virtual prepaid cards are available to everyone, regardless of whether you have a traditional bank account.</li>
          <li style={styles.listItem}><strong>Budget Control:</strong> Manage your spending effectively with the ability to set spending limits on your virtual card.</li>
          <li style={styles.listItem}><strong>Privacy Protection:</strong> Keep your personal financial details private when making online purchases, reducing the risk of identity theft.</li>
        </ul>
      </div>

      {/* Call to Action div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Get Started with Bartre Funds Today</h2>
        <p>
          Take control of your online transactions with Barter Funds Virtual Prepaid Cards. Whether you need a card for online shopping, subscriptions, or managing your digital expenses, our virtual cards provide a secure, flexible, and accessible solution. Sign up today and experience the freedom and security that come with using a Barter Funds Virtual Prepaid Card.
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

export default VirtualCard;

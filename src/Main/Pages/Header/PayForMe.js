import React from 'react';
import '../Page.css'
import Header from '../../Header'
import Footer from '../../Footer'
import Block from '../components/Block'
import Content from '../components/Content'
import Head from '../components/Head'
import Breadcrumb from '../components/Breadcrumb'
import PageContainer from '../components/PageContainer'
import BlockHead from '../components/BlockHead'
import BlockHeadContent from '../components/BlockHeadContent'
import BlockTitle from '../components/BlockTitle'

const PayForMe = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Pay for me', href: '#', active: true }
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
      <Head title="Pay4Me | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Pay For Me
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="container">
          <div style={styles.page}>
      {/* Header div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Simplifying Your Payments with Barter Funds</h2>
        <p>
          Managing online payments can be complicated, especially when specific payment methods are required or when you lack access to necessary tools. Barter Funds introduces <strong>PayForMe</strong>, a service designed to handle payments on your behalf, ensuring that you meet all your payment obligations easily and securely.
        </p>
      </div>

      {/* The Challenge div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>The Challenge: Complex and Inaccessible Payment Processes</h2>
        <p>
          Whether you're purchasing a product online, subscribing to a service, or paying a bill, making the payment yourself can sometimes be challenging. PayForMe eliminates the risk of missing a payment or failing to complete a transaction by taking care of the payment process for you.
        </p>
      </div>

      {/* The Solution div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>The Solution: PayForMe by Barter Funds</h2>
        <p>
          With PayForMe, Barter Funds handles payments on your behalf. Simply provide the necessary details, and we’ll take care of the rest. This service is perfect for website checkouts, subscriptions, and other online payments that require specific payment methods.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Flexible Payment Options:</strong> We support a wide range of payment methods, including credit card, PayPal, Apple Pay, Zelle, CashApp, Bitcoin, USDT, and bank transfer.</li>
          <li style={styles.listItem}><strong>Convenient Payment Handling:</strong> Provide us with the bill, invoice, account login details, or QR code, and we’ll complete the payment process for you.</li>
          <li style={styles.listItem}><strong>Global Accessibility:</strong> Whether the payment is local or international, PayForMe ensures that your transaction is processed efficiently and securely.</li>
          <li style={styles.listItem}><strong>Secure Transactions:</strong> Your data is protected with industry-leading security protocols.</li>
          <li style={styles.listItem}><strong>Time-Saving:</strong> Let Barter Funds handle your payments, freeing up your time for more important tasks.</li>
        </ul>
      </div>

      {/* Why PayForMe is the Ideal Solution div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Why PayForMe is the Ideal Solution</h2>
        <p>
          PayForMe is designed for anyone who needs a reliable and secure way to make payments without dealing with the complexities themselves. Whether you’re a business owner or an individual, PayForMe ensures your payments are made on time and without stress.
        </p>
        <p>
          <strong>Benefits of Using PayForMe:</strong>
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Ease of Use:</strong> Simplify your life by outsourcing your payment tasks to Barter Funds.</li>
          <li style={styles.listItem}><strong>Access to Multiple Payment Methods:</strong> No need to worry about whether you have the right payment method—we’ve got you covered.</li>
          <li style={styles.listItem}><strong>Enhanced Security:</strong> Your sensitive payment information is handled with the highest level of security.</li>
          <li style={styles.listItem}><strong>International Reach:</strong> Make payments globally without the usual barriers, thanks to our extensive network of payment options.</li>
          <li style={styles.listItem}><strong>Reliable and Efficient:</strong> Trust Barter Funds to manage your payments reliably and accurately.</li>
        </ul>
      </div>

      {/* Call to Action div */}
      <div style={styles.div}>
        <h2 style={styles.headerText}>Get Started with Barter Funds Today</h2>
        <p>
          Stop worrying about how to make that next payment. With PayForMe, you can relax knowing that Barter Funds has your payments covered. Simply provide the required details, and we’ll handle the rest. Whether it’s a website checkout, subscription, or any other online payment, PayForMe is the ultimate solution for hassle-free transactions.
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

export default PayForMe;

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

const Services = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Company', href: '/company', active: false },
    { label: 'Services', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="Services | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
              Our Services
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <p>
        At Barter Funds, we offer a comprehensive range of services designed to meet the diverse needs of our users. Whether you're an individual looking to manage your digital assets or a business seeking efficient payment solutions, our platform provides the tools and services you need to succeed.
      </p>

      <h1 className='sub-title'>Digital Currency Exchange</h1>
      <p>
        We specialize in the exchange of digital currencies against the Ghanaian Cedi. Our platform allows you to buy, sell, send, and receive a wide variety of digital currencies with ease. Enjoy competitive rates, fast transactions, and a user-friendly experience tailored to your needs.
      </p>

      <h1 className='sub-title'>Peer-to-Peer Transactions</h1>
      <p>
        Our peer-to-peer (P2P) service enables users to transact directly with each other, offering a secure and transparent way to exchange digital currencies. Whether you’re sending funds to family or receiving payments from clients, our P2P service ensures that your transactions are smooth and hassle-free.
      </p>

      <h1 className='sub-title'>Merchant Payment Solutions</h1>
      <p>
        For businesses, Barter Funds provides a robust payment gateway that allows you to accept digital currencies as payment for goods and services. Our payment solutions are designed to integrate seamlessly with your existing systems, enabling you to offer your customers a variety of payment options.
      </p>

      <h1 className='sub-title'>Instant Wallet Transfers</h1>
      <p>
        Need to move your digital assets quickly? Our instant wallet transfer service allows you to send and receive digital currencies between wallets instantly. With advanced security measures in place, you can trust that your transfers are safe and secure.
      </p>

      <h1 className='sub-title'>Security & Fraud Prevention</h1>
      <p>
        Security is at the core of everything we do. Our platform utilizes state-of-the-art security protocols to protect your funds and personal information. We also offer fraud prevention services to help safeguard your transactions and ensure that your digital assets are secure at all times.
      </p>

      <h1 className='sub-title'>24/7 Customer Support</h1>
      <p>
        We understand that the world of digital currencies never sleeps, and neither do we. Our dedicated support team is available 24/7 to assist you with any questions or issues you may encounter. Whether you need help with a transaction or have a technical query, we're here to help.
      </p>

      <h1 className='sub-title'>Educational Resources</h1>
      <p>
        At Barter Funds, we believe in empowering our users with knowledge. Our platform offers a range of educational resources, including articles, guides, and tutorials, to help you navigate the world of digital currencies with confidence.
      </p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Services;

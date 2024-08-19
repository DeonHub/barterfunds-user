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

const Fees = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Help', href: '/help', active: false },
    { label: 'Fees', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="Fees | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
              Fees & Charges
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <p>
        At Barter Funds, we believe in transparency and providing our users with clear information about the fees associated with our services. Below is a breakdown of the fees you can expect when using our platform.
      </p>

      <h1 className='sub-title'>Digital Currency Exchange Fees</h1>
      <p>
        Our exchange fees are competitive and vary depending on the type of transaction:
      </p>
      <p>
      <ul className='bullet-list'>
        <li><strong>Buying Digital Currency:</strong> Network fee</li>
        <li><strong>Selling Digital Currency:</strong> Free</li>
        <li><strong>Sending Digital Currency:</strong> 1% of the transaction amount</li>
        <li><strong>Receiving Digital Currency:</strong> 20% of the transaction amount</li>
      </ul>
      </p>


      <h1 className='sub-title'>Peer-to-Peer (P2P) Transaction Fees</h1>
      <p>
        Peer-to-peer transactions on our platform are subject to the following fees:
      </p>
      <p>
      <ul className='bullet-list'>
        <li><strong>Sending to Another User:</strong> Free</li>
        <li><strong>Receiving from Another User:</strong> Free</li>
      </ul>
      </p>

      <h1 className='sub-title'>Merchant Payment Fees</h1>
      <p>
        For businesses using Barter Pay, the following fees apply:
      </p>
      <p>
      <ul className='bullet-list'>
        <li><strong>Payment Processing Fee:</strong> 2.5% per transaction</li>
        <li><strong>Settlement Fee:</strong> 1% of the settled amount</li>
      </ul>
      </p>


      <h1 className='sub-title'>Wallet Transfer Fees</h1>
      <p>
        Moving your digital currencies between wallets on Barter Funds is subject to the following fees:
      </p>
      <p>
      <ul className='bullet-list'>
        <li><strong>Internal Wallet Transfers:</strong> Free</li>
        <li><strong>Deposit:</strong> Free</li>
        <li><strong>Withdrawal:</strong> 2% of the withdrawal amount</li>
      </ul>
      </p>

      
      <h1 className='sub-title'>Additional Information</h1>
      <p>
        All fees are subject to change. We recommend checking this page regularly for the most up-to-date information. If you have any questions about our fees, please don't hesitate to contact our support team.
      </p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Fees;

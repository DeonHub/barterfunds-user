import React from 'react';
import { Helmet } from 'react-helmet';
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

const RefundPolicy = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Legal', href: '/legal', active: false },
    { label: 'Refund Policy', href: '#', active: true }
  ];

  return (
    <React.Fragment>
            <Helmet>
                <title>Refund Policy | Barter Funds</title>
                <meta name="description" content="Review the Affiliate Policy of Barter Funds. Understand the terms, conditions, and guidelines for participating in our affiliate program." />
                <meta name="keywords" content="Barter Funds, Affiliate Program, Affiliate Policy, Digital Assets, Referral Program, Earn Money" />
                <meta name="author" content="Barter Funds" />
                <meta property="og:title" content="Affiliate Policy | Barter Funds" />
                <meta property="og:description" content="Detailed information about Barter Funds' Affiliate Policy, including how to join and the benefits of being an affiliate." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://barter-funds.com/affiliate-policy" />
                <meta property="og:image" content="https://barter-funds.com/assets/affiliate-policy-thumbnail.jpg" />
                <meta property="og:site_name" content="Barter Funds" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Affiliate Policy | Barter Funds" />
                <meta name="twitter:description" content="Learn more about the terms and conditions of Barter Funds' affiliate program." />
                <meta name="twitter:image" content="https://barter-funds.com/assets/affiliate-policy-thumbnail.jpg" />
                <meta name="twitter:site" content="@BarterFunds" />
            </Helmet>
      <Header />
      <Head title="Refund Policy | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Refund Policy
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
          <p>
            Barterfunds strives to provide accurate and efficient ecurrency exchange
            services. However, due to the nature of digital transactions, refunds are
            generally not applicable.
          </p>
          <h1 className='sub-title'>Exceptions</h1>
          <p>
            In rare instances, Barterfunds may consider issuing a refund under the
            following circumstances:
          </p>
          <ul className='bullet-point'>
            <li>
              <strong>Technical Errors:</strong> If a technical error on Barterfunds' platform results
              in an incorrect exchange rate or transaction, we will investigate the
              issue and issue a refund or correct the transaction as necessary.
            </li>
            <li>
            <strong>Fraudulent Activity:</strong> If it is determined that a transaction was
              fraudulent, Barterfunds will initiate a refund process and cooperate
              with relevant authorities.
            </li>
            <li>
            <strong>Unfulfilled Orders:</strong> In cases where an order is not fulfilled due to
              insufficient funds or other reasons beyond the customer's control,
              Barterfunds will refund the amount paid.
            </li>
          </ul>
          <h1 className='sub-title'>Refund Process</h1>
          <p>
            To initiate a refund request, customers must contact Barterfunds' customer
            support within 24 hours of the transaction date.
          </p>
          <p>
          <ul className='bullet-list'>
            <li>
              All refund requests will be subject to verification and investigation.
            </li>
            <li>Refunds will be processed using the original payment method.</li>
            <li>
              Processing time for refunds may vary depending on the payment method.
            </li>
          </ul>
          </p>
          <h1 className='sub-title'>Limitations</h1>
          <p>Barterfunds reserves the right to deny refund requests if:</p>
          <p>
            <ul className='bullet-list'>
            <li>The request is made outside the specified timeframe.</li>
            <li>Insufficient evidence is provided to support the refund claim.</li>
            <li>The transaction is deemed to be at the customer's risk.</li>
          </ul>
          </p>
          <h1 className='sub-title'>Chargebacks</h1>
          <p>
            Customers are advised to contact Barterfunds customer support to resolve
            any issues before initiating a chargeback with their payment provider.
            Chargebacks may result in account closure and legal action.
          </p>
          <h1 className='sub-title'>Contact Information</h1>
          <p>
            For refund inquiries or any other concerns, please contact Barterfunds
            customer support at support@barter-funds.com.
          </p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default RefundPolicy;

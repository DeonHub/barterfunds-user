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

const PaymentPolicy = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Legal', href: '/legal', active: false },
    { label: 'Payment Policy', href: '#', active: true }
  ];

  return (
    <React.Fragment>
            <Helmet>
                <title>Payment Policy | Barter Funds</title>
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
      <Head title="Payment Policy | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Payment Policy
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <h1 className='sub-title'>Introduction</h1>
        <p>
          Welcome to Barterfunds. This Payment Policy outlines the terms and
          conditions governing all payment transactions on our platform. By using
          our services, you agree to comply with this policy. Please read it
          carefully.
        </p>
        <h1 className='sub-title'>1. Payment Methods</h1>
        <p>Barterfunds supports the following payment methods:</p>
        <p>
        <ul className='bullet-point'>
          <li>
            <strong>Bank Transfers</strong>: Direct transfers from your bank
            account to our designated bank accounts.
          </li>
          <li>
            <strong>Mobile Money</strong>: Transactions via MTN Mobile Money,
            AirtelTigo Money, and Telecel Cash.
          </li>
          <li>
            <strong>Digital Wallets</strong>: Supported e-wallets including
            PayPal, Payoneer, Perfect money, Skrill, Alipay, and others as listed on our platform.
          </li>
        </ul>
        </p>
        <h1 className='sub-title'>2. Currency</h1>
        <p>
          All transactions on Barterfunds are conducted in Ghanaian Cedis
          (GHS). If you are using a different currency, your payment will be
          converted at the prevailing exchange rate.
        </p>
        <h1 className='sub-title'>3. Transaction Fees</h1>
        <p>
        <ul className='bullet-point'>
          <li>
            <strong>Buying Digital Currency</strong>: A network fee is charged.
          </li>
          <li>
            <strong>Selling Digital Currency</strong>: Free.
          </li>
          <li>
            <strong>Sending Digital Currency</strong>: 1% of the transaction amount.
          </li>
          <li>
            <strong>Receiving Digital Currency</strong>: A fee of 20% of
            the transaction amount.
          </li>
          <li>
            <strong>Deposits and Withdrawals</strong>: Deposits via bank transfers
            and mobile money are free, while withdrawals may attract a fee of 2% of the amount.
          </li>
        </ul>
        </p>
        <h1 className='sub-title'>4. Payment Processing Time</h1>
        <p>
        <ul className='bullet-point'>
          <li>
            <strong>Bank Transfers</strong>: Typically processed within 1-3
            business days.
          </li>
          <li>
            <strong>Mobile Money</strong>: Processed within a few minutes to 1
            hour.
          </li>
          <li>
            <strong>Digital Wallets</strong>: Processing times may vary depending
            on the wallet provider but generally within 24 hours.
          </li>
        </ul>
        </p>
        <h1 className='sub-title'>5. Payment Confirmation</h1>
        <p>
          You will receive a confirmation email or SMS once your payment is
          successfully processed. Please ensure that you provide accurate contact
          information to receive these notifications.
        </p>
        <h1 className='sub-title'>6. Refund Policy</h1>
        <p>
        <ul className='bullet-point'>
          <li>
            <strong>Eligible Refunds</strong>: Refunds are only issued in cases of
            overpayment, incorrect transaction amounts, or cancellation of orders
            within the allowed time frame.
          </li>
          <li>
            <strong>Refund Process</strong>: To request a refund, contact our
            support team with your transaction details. Refunds will be processed
            within 7-14 business days.
          </li>
          <li>
            <strong>Non-Refundable</strong>: Transaction fees are non-refundable.
            Refunds are issued minus the applicable fees.
          </li>
        </ul>
        </p>
        <h1 className='sub-title'>7. Dispute Resolution</h1>
        <p>
        <ul className='bullet-point'>
          <li>
            In case of any disputes regarding payments, contact our support team
            immediately. We will investigate and resolve the issue within 14
            business days.
          </li>
          <li>
            If the dispute is not resolved to your satisfaction, you may escalate
            it to relevant regulatory authorities.
          </li>
        </ul>
        </p>
        <h1 className='sub-title'>8. Security and Privacy</h1>
        <ul className='bullet-point'>
          <li>
            Barterfunds employs advanced encryption and security protocols to
            protect your financial information.
          </li>
          <li>
            We do not store your payment details. All transactions are processed
            through secure payment gateways.
          </li>
        </ul>
        <h1 className='sub-title'>9. Compliance</h1>
        <p>
        <ul className='bullet-point'>
          <li>
            Barterfunds complies with all applicable local and international
            laws regarding money transfer and digital currency exchange.
          </li>
          <li>
            Users are required to complete a Know Your Customer (KYC) verification
            process to ensure compliance with anti-money laundering (AML)
            regulations.
          </li>
        </ul>
        </p>
        <h1 className='sub-title'>10. Changes to the Payment Policy</h1>
        <p>
          Barterfunds reserves the right to modify this Payment Policy at any
          time. Changes will be effective immediately upon posting on our website.
          Users are encouraged to review the policy regularly.
        </p>
        <h1 className='sub-title'>Contact Us</h1>
        <p>
          For any questions or concerns regarding this Payment Policy, please
          contact us at:
        </p>
        <p>
        <ul className='bullet-point'>
          <li>
            <strong>Email</strong>: support@Barter-funds.com
          </li>
          <li>
            <strong>Phone</strong>: +233-598870911
          </li>
          <li>
            <strong>Address</strong>:Lame Dwaahe St. Adenta
          </li>
        </ul>
        </p>
        <p>
          By using Barterfunds, you acknowledge that you have read,
          understood, and agreed to this Payment Policy.
        </p>
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default PaymentPolicy;

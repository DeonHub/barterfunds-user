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

const AffiliatePolicy = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Legal', href: '/legal', active: false },
    { label: 'Affiliate Policy', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="Affiliate Policy | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
              Affiliate Policy
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
      <p>
        Welcome to Barter Funds, where we value and reward our community's
        efforts in spreading the word about our platform. Our affiliate policy
        outlines how our referral system works, ensuring transparency and
        fairness for all participants.
      </p>
      <h1 className='sub-title'>1. Introduction</h1>
      <p>
        Barter Funds offers an affiliate program to encourage users to refer new
        customers to our platform. By participating in our referral program, you
        agree to abide by the terms and conditions outlined in this policy.
      </p>
      <h1 className='sub-title'>2. Eligibility</h1>
      <p>To be eligible for the Barter Funds referral program, you must:</p>
      <p>
      <ul className='bullet-list'>
        <li>Be a registered user of Barter Funds.</li>
        <li>Have a valid and active account.</li>
      </ul>
      </p>
      <h1 className='sub-title'>3. Referral Process</h1>
      <p>
      <ul className='bullet-list'>
        <li>
          <strong>Referral Link:</strong> Each user is provided with a unique
          referral link available in their account dashboard.
        </li>
        <li>
          <strong>Sharing the Link:</strong> Users can share their referral link
          with friends, family, and acquaintances through social media, email,
          or any other communication method.
        </li>
        <li>
          <strong>New User Registration:</strong> When a new user registers on
          Barter Funds using the referral link, they are linked to the referrer’s
          account.
        </li>
      </ul>
      </p>
      <h1 className='sub-title'>4. Earning Referral Commission</h1>
      <p>
      <ul className='bullet-list'>
        <li>
          <strong>Commission Amount:</strong> For each new user who registers
          using your referral link and completes a transaction of at least 1000
          cedis, you will earn a 20 cedis referral commission.
        </li>
        <li>
          <strong>Transaction Requirement:</strong> The referred user must
          complete a transaction of at least 1000 cedis for the first time for
          the commission to be credited to the referrer’s account.
        </li>
      </ul>
      </p>
      <h1 className='sub-title'>5. Commission Crediting</h1>
      <p>
      <ul className='bullet-list'>
        <li>
          <strong>Timing:</strong> Referral commissions are credited to the
          referrer’s account within 24 hours of the referred user’s qualifying
          transaction.
        </li>
        <li>
          <strong>Notification:</strong> Referrers will receive a notification
          once the commission has been credited.
        </li>
      </ul>
      </p>
      <h1 className='sub-title'>6. Withdrawal of Referral Commission</h1>
      <p>
      <ul className='bullet-list'>
        <li>
          <strong>Minimum Withdrawal Amount:</strong> The minimum amount for
          withdrawal of referral commissions is 20 cedis.
        </li>
        <li>
          <strong>Withdrawal Process:</strong> Users can request a withdrawal of
          their referral commissions through their Barter Funds account.
          Withdrawals will be processed within 1-3 business days.
        </li>
        <li>
          <strong>Payment Method:</strong> Referral commissions can be withdrawn
          to the user’s registered mobile money, bank account or through any other withdrawal
          method supported by Barter Funds.
        </li>
      </ul>
      </p>
      <h1 className='sub-title'>7. General Terms and Conditions</h1>
      <p>
      <ul className='bullet-list'>
        <li>
          <strong>Fair Usage:</strong> Barter Funds reserves the right to
          investigate any referral activity for potential abuse or fraud. Any
          fraudulent activity or breach of these terms will result in the
          forfeiture of referral commissions and possible suspension of the
          user’s account.
        </li>
        <li>
          <strong>Modification of Policy:</strong> Barter Funds reserves the
          right to modify or terminate the referral program at any time without
          prior notice. Any changes to the policy will be updated on our
          website.
        </li>
        <li>
          <strong>Compliance with Laws:</strong> Participants in the referral
          program must comply with all applicable laws and regulations.
        </li>
      </ul>
      </p>
      <h1 className='sub-title'>8. Contact Information</h1>
      <p>
        For any questions or concerns regarding the affiliate policy, please
        contact our support team at{" "}
        <a href="mailto:support@Barter Funds.com">support@barter-funds.com</a>.
      </p>
      <p>
        By participating in the Barter Funds referral program, you acknowledge
        that you have read, understood, and agreed to be bound by these terms
        and conditions. Thank you for helping us grow our community!
      </p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default AffiliatePolicy;

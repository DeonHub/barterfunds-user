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

const AMLPolicy = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Legal', href: '/legal', active: false },
    { label: 'AML Policy', href: '#', active: true }
  ];

  return (
    <React.Fragment>
            <Helmet>
                <title>AML Policy | Barter Funds</title>
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
      <Head title="AML/KYC Policy | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
              AML/KYC Policy
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <h1 className='sub-title'>1. Introduction</h1>
      <p>The Anti-Money Laundering and Know Your Customer Policy (hereinafter referred to as the “AML/KYC Policy”) is designed to prevent and mitigate the risks of BarterFunds being involved in any illegal activities.</p>

      <h1 className='sub-title'>2. Purpose of Internal Regulation</h1>
      <p>BarterFunds adheres to stringent practices and measures to combat the legalization (laundering) of proceeds from crime and the financing of terrorism (AML). These measures demonstrate that BarterFunds is committed to preventing any attempts to use its services for illegal purposes.</p>

      <h1 className='sub-title'>3. Caution</h1>
      <p>BarterFunds warns users against attempting to use its services for money laundering, terrorist financing, fraud of any kind, or the purchase of prohibited goods and services. BarterFunds, its administration, employees, and domain owners are not responsible for the misuse of the service by third parties, the actions of intruders, or any potential damage associated with the use of BarterFunds.</p>

      <h1 className='sub-title'>4. Requirements</h1>
      <p>To prevent illegal transactions, BarterFunds sets certain requirements for all transactions initiated by users:</p>
      <p>4.1. The sender and recipient of the payment must be the same person. Transfers in favor of third parties are prohibited.</p>
      <p>4.2. All contact information entered by the user, as well as other personal data transmitted to BarterFunds, must be up-to-date and accurate.</p>
      <p>4.3. It is strictly forbidden to create transactions using anonymous proxy servers, VPNs, Tor, or any other anonymous Internet connections.</p>

      <h1 className='sub-title'>5. Verification Procedures</h1>
      <p>Customer due diligence (hereinafter referred to as Verification) is a key international standard for preventing illegal activities. BarterFunds implements verification procedures in strict compliance with AML/KYC standards.</p>
      <p>5.1. BarterFunds may require users to provide reliable, independent source documents, data, or information to verify their identity and confirm the origin of funds. Required documentation may include:</p>
      <ul className='bullet-list'>
        <li>A photo with a passport, clearly showing the photo and full name.</li>
        <li>A scan or photo of the passport (first, second pages, and registration page).</li>
        <li>Confirmation of the source of funds (photos, screenshots, statements).</li>
        <li>A video of the user holding their passport, stating their application ID and confirming the source of funds.</li>
        <li>A video showing the platform from which the funds were sent, including the hash, sender and recipient addresses, amount, and date of the transaction (minimum 10 seconds).</li>
      </ul>
      <p>5.2. In case of blockages due to high risk or official investigation, funds will be held until verification or investigation is completed. BarterFunds reserves the right to collect user identification information for AML/KYC compliance.</p>
      <p>5.3. BarterFunds will verify the authenticity of documents and information provided by users, employing all legal methods for double verification, and investigating users whose identities appear suspicious or dangerous.</p>
      <p>5.4. BarterFunds reserves the right to perform ongoing identity checks, especially when a user's information changes or their activity seems unusual. Updated documents may be requested even if the user has been verified in the past.</p>
      <p>5.5. User identification information will be collected, stored, shared, and protected in accordance with BarterFunds' Privacy Policy and related regulations.</p>
      <p>5.6. After confirming a user's identity, BarterFunds may refuse service if it is determined that the service is being used for illegal activities.</p>
      <p>5.7. Users intending to use payment cards must pass card verification as per the instructions on the BarterFunds website.</p>
      <p>5.8. BarterFunds has regulatory requirements to verify the source of funds or cryptocurrency to ensure their legality.</p>

      <h1 className='sub-title'>6. Responsible Official</h1>
      <p>The person responsible for AML compliance at BarterFunds is duly authorized to ensure the effective implementation and enforcement of the AML/KYC policy.</p>
      <p>6.1. Responsibilities include:</p>
      <p>
      <ul className='bullet-list'>
        <li>Collecting user identification information.</li>
        <li>Creating and updating internal policies and procedures.</li>
        <li>Monitoring transactions and investigating deviations from normal activities.</li>
        <li>Managing a records system for storing and retrieving documents.</li>
        <li>Regularly updating the risk assessment.</li>
        <li>Providing law enforcement agencies with required information.</li>
      </ul>
      </p>
      <p>6.2. The AML Compliance Officer has the authority to interact with law enforcement agencies involved in preventing money laundering, terrorist financing, and other illegal activities.</p>

      <h1 className='sub-title'>7. System Functions</h1>
      <p>BarterFunds performs various compliance tasks, including data collection, filtering, record keeping, investigation management, and reporting. System functions include:</p>
      <p>
      <ul className='bullet-list'>
        <li>Checking users daily against recognized blacklists (e.g., OFAC).</li>
        <li>Aggregating transfers across multiple data points.</li>
        <li>Placing users on watchlists and denial of service lists.</li>
        <li>Opening cases for investigation where appropriate.</li>
        <li>Sending internal messages and filing mandatory reports.</li>
      </ul>
      </p>

      <h1 className='sub-title'>8. Behavior Analysis</h1>
      <p>BarterFunds verifies users not only by their identity but also by analyzing their behavior in transactions. Data analysis is used as a tool for risk assessment and suspicion detection.</p>

      <h1 className='sub-title'>9. Risk Assessments</h1>
      <p>BarterFunds applies risk assessment practices to combat money laundering and terrorist financing, ensuring that preventive measures are proportionate to the identified risks.</p>

      <h1 className='sub-title'>10. Customer Checks</h1>
      <p>If BarterFunds suspects that a user is attempting to use its services for money laundering or other illegal activities, it reserves the right to:</p>
      <p>
      <ul className='bullet-list'>
        <li>Suspend the user's transaction.</li>
        <li>Request identification documents from the user.</li>
        <li>Request additional information and documents if the transactions are suspicious.</li>
        <li>Forward reports of suspicious transactions to the appropriate law enforcement authorities through the AML Compliance Officer.</li>
      </ul>
      </p>

      <h1 className='sub-title'>11. Privacy</h1>
      <p>BarterFunds guarantees client confidentiality in accordance with its Privacy Policy.</p>
      <p>11.1. BarterFunds and its employees are committed to maintaining confidentiality regarding any facts revealed in connection with suspicious transactions. This obligation extends to users and third parties to whom transaction information is disclosed.</p>
      <p>11.2. The confidentiality obligation remains in effect even after employees leave BarterFunds or any contractual relationship ends. Disclosure to government or law enforcement agencies, as required by law, does not violate confidentiality obligations.</p>
      <p>11.3. The confidentiality obligation does not apply to information disclosed between financial institutions that form a consolidated group with BarterFunds, provided the information is used solely to prevent money laundering and terrorist financing.</p>

      <h1 className='sub-title'>12. Conclusion</h1>
      <p>BarterFunds is not legally responsible for its use in laundering proceeds from crime, financing terrorism, or purchasing prohibited goods and services. However, it undertakes to take all possible actions to prevent such use of its services.</p>
      <p>By using BarterFunds, users agree to all terms of this policy and undertake to comply with them.</p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default AMLPolicy;

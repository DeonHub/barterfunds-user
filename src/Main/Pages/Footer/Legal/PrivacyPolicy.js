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

const PrivacyPolicy = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Legal', href: '/legal', active: false },
    { label: 'Privacy Policy', href: '#', active: true }
  ];

  return (
    <React.Fragment>
            <Helmet>
                <title>Privacy Policy | Barter Funds</title>
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
      <Head title="Privacy Policy | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Privacy Policy
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
              <p>
              Barterfunds and its affiliates are committed to respecting your privacy and
              protecting your personal information, whether you are a customer,
              potential customer, or other user of our web services
              (collectively, “you”). This Privacy Policy (“Policy”) describes
              how Barterfunds collects, uses, and shares personal information, and your
              choices regarding this information.
              </p>
              <p>
              This Policy applies to https://barter-funds.com and all websites and mobile apps owned and operated by Barterfunds. Please read this Policy carefully and contact us with any
              questions at privacy@barter-funds.com. By using or accessing the Services in any manner, you acknowledge that you accept the practices and
              policies outlined in this Privacy Policy, and you hereby consent that we will collect, use and share your personal information as set forth below.
              </p>

              <h1 className="sub-title">
              Applicability Of This Policy
            </h1>
              <p>
              This Policy applies to our services, which include the services we
              provide on https://barter-funds.com or any other websites, pages, features, or content we own or
              operate (collectively, the “Sites”) or when you use our mobile
              app, any Barterfunds API or third-party applications relying on such an
              API, and related services (collectively, the “Services”).
              </p>
              <p>
              <strong>
                If you do not agree with the terms of this Policy, do not access
                or use the Services, Sites, or any other aspect of our business.
              </strong>
              </p>
              <h1 className="sub-title">When and How We Collect Information </h1>
              <p>
              We may collect personal information from you when:
              <p className='detail'>Data you give</p>
              <ul className="bullet-list">
                        <li>You create an account with us</li>
                        <li>
                          You make a purchase or otherwise use our Services
                        </li>
                        <li>
                          You contact us for customer service or other purposes,
                          including via live chat
                        </li>
                        <li>
                          You submit an entry in a contest or sweepstakes
                          sponsored by us, respond to one of our surveys, or
                          participate in another feature of our website
                        </li>
                        <li>
                          You provide us with user content, ideas, information,
                          user reviews, comments, feedback, or other submissions
                        </li>
                      </ul>
              </p>
              <p>
                <p className='detail'>Data we collect</p>
              <ul className="bullet-list">
              <li>You visit and interact with our app or website</li>
                        <li>You create an account with us</li>
                        <li>
                          You view our newsletters or other email communications
                        </li>
                        <li>You interact with Barterfunds social media</li>
                        <li>You click through a marketing promotion</li>
                      </ul>
              </p>
              <h1 className="sub-title">
              What Information We Collect
            </h1>
            <p>
            We collect the following categories of personal information:
            <p className='detail'>Data you give</p>
            <ul className='bullet-list'>
                        <li>
                          <strong>Contact And Demographic Information</strong>:
                          such as your date of birth, gender, email address,
                          full name, home address, nationality, phone number,
                          photographs, and ID number.
                        </li>
                        <li>
                          <strong>Identification Information</strong>: such as
                          your driver’s license, passport, Ghana card, Tax ID
                          number, or other government-issued ID.
                        </li>
                        <li>
                          <strong>Enhanced Due Diligence Information</strong>:
                          including proof of address documents (e.g., bank,
                          brokerage, and/or credit card statements, utility
                          bills, mortgage statements, and/or property tax
                          statements); employment or professional information
                          (e.g., employer, job title/position, office location);
                          and source of wealth.
                        </li>
                        <li>
                          <strong>Institutional Information</strong>: such as
                          Tax Identification Number (TIN), Business Operating Permit, Social Security and National insurance Trust (SSNITT), proof of legal
                          formation (e.g., articles of incorporation/by-laws),
                          and/or personal identification information for
                          beneficial owners.
                        </li>
                        <li>
                          <strong>Financial Information</strong>: such as your
                          bank account number, payment card information,
                          transaction history, trading data, tax identification,
                          and/or source of wealth.
                        </li>
                        <li>
                          <strong>Correspondence</strong>: such as your
                          feedback, quiz, questionnaire, and other survey
                          responses, and information you provide to our support
                          teams, including via our live chatbot.
                        </li>
                        <li>
                          <strong>Stored Content</strong>: such as photos from
                          your mobile phone gallery or contacts stored in your
                          mobile device or email accounts. We only collect this
                          information when you grant us permission in your
                          device settings. You may withdraw this permission at
                          any time.
                        </li>
                        <li>
                          <strong>
                            Audio, electronic, or visual information
                          </strong>
                          : such as photographs and video recordings.
                        </li>
                        <li>
                          <strong>Biometric Data</strong>: such as facial
                          recognition and facial geometry data derived from
                          photographs or videos you submit to us during the
                          onboarding process. We only use Biometric Data to
                          verify your identity for security purposes.
                        </li>
                      </ul>
            </p>
            <p className='detail'>Data we collect</p>
            <p>
            <ul className='bullet-point'>
                        <li>
                          <strong>Transaction Information</strong>: including
                          information about the transactions you make using our
                          Services, such as the names of the recipient,
                          transaction amount, and timestamp.
                        </li>
                        <li>
                          <strong>Website metadata and analytics</strong>:
                          including Internet Protocol (IP) addresses and
                          location data, device information, date/time of
                          visits, new or returning visits, products viewed, page
                          response times, URL clickstreams, how long you stay on
                          our pages, what you do on those pages.
                        </li>
                        <li>
                          <strong>
                            Cookies and other tracking technologies
                          </strong>
                          : We, and third parties we authorize, may use cookies,
                          web beacons, and similar technologies to record your
                          preferences, track the use of our Sites and mobile
                          apps, and collect information about the use of the
                          Services, as well as about our interactions with you.
                          This information may include IP addresses, browser
                          type, Internet Service Provider (ISP), referring/exit
                          pages and operating system, date/time stamp, and
                          clickstream data, and information about your
                          interactions with the communications we send to you.
                          We may combine this automatically collected log
                          information with other information we collect about
                          you. Learn more about our cookie use below.
                        </li>
                        <li>
                          <strong>Blockchain Data</strong>: We may analyze
                          public blockchain data, including wallet addresses,
                          transaction IDs, timestamps of transactions or events,
                          transaction amounts, and digital signatures.
                        </li>
                        <li>
                          <strong>
                            Additional Information from third-party sources
                          </strong>
                          : such as information about you from other sources as
                          required or permitted by applicable law, including
                          third parties such as credit bureaus, identity
                          verification services, and public databases. We may
                          combine the information collected from these sources
                          with the information we get from this Site in order to
                          verify your identity, comply with our legal
                          obligations, and ensure our Services are not used
                          fraudulently or for other illicit activities.
                        </li>
                      </ul>
            </p>
            <h1 className="sub-title">
              How We Use Information
            </h1>
            <p>
            We use your information in accordance with your instructions,
              including any applicable terms in the
              {' '}
              <strong>Terms of Use</strong>, and as required by applicable law. We may
              also use the information we collect for:
            </p>
            <p>
            <ul className='bullet-point'>
                <li>
                  <strong>Providing Our Services And Features.</strong>
                  We may use the information we collect to provide, personalize,
                  maintain, and improve our products and Services, including as
                  described in the
                  {' '}
                  <a href="/terms-of-use" style={{ cursor: "pointer" }}>Terms of Use</a>. This
                  includes using information to:
                  <ol>
                    <li>
                      operate, maintain, customize, measure, and improve our
                      Services, and manage our business;
                    </li>
                    <li>create and update users’ accounts;</li>
                    <li>process transactions;</li>
                    <li>
                      send information including confirmations, notices,
                      invoices, technical notices, updates, security alerts, and
                      support and administrative messages; and
                      {' '}
                    </li>
                    <li>to create de-identified or aggregated data.</li>
                  </ol>
                </li>
                <li>
                  <strong>Safety And Security. </strong>
                  We may use your information to help maintain the safety,
                  security, and integrity of our Services, including to:
                  <ol>
                    <li>
                      protect, investigate, respond to, and deter against
                      fraudulent, unauthorized, or illegal activity;
                    </li>
                    <li>monitor and verify identity or service access;</li>
                    <li>protect against spam, malware, or security risks;</li>
                    <li>
                      perform internal operations necessary to provide our
                      Services, including to troubleshoot software bugs and
                      operational issues;
                    </li>
                    <li>
                      enforce our agreements with third parties, and address
                      violations of our
                      {' '}
                      <a href='/terms-of-use'>Terms of Use</a>
                      {' '}
                      or agreements for other Services; and
                    </li>
                    <li>comply with applicable laws and regulations.</li>
                  </ol>
                </li>
                <li>
                  <strong>Customer Support. </strong>
                  We may use information we collect to provide customer support,
                  including to:
                  <ol>
                    <li>
                      direct questions to the appropriate customer support
                      person;
                    </li>
                    <li>
                      communicate with you, including via social media channels;
                    </li>
                    <li>investigate and address user concerns; and</li>
                    <li>
                      monitor and improve our customer support responses and
                      processes.
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Research And Development. </strong>
                  We may use the information we collect for testing, research,
                  analysis, and product development to improve your experience,
                  enhance the safety and security of our Services, improve our
                  ability to prevent the use of our Services for illegal or
                  improper purposes, develop new features and products, and
                  facilitate payment solutions in connection with our Services.
                </li>
                <li>
                  <strong>Legal And Regulatory Compliance. </strong>
                  Many of our Services are subject to laws and regulations
                  requiring us to collect, use, and store your personal
                  information in certain ways. For example, we must identify and
                  verify customers using our Services in order to comply with
                  anti-money laundering and anti-terrorism laws. This includes
                  collection and storage of your photo identification. We also
                  use third parties to verify your identity by comparing the
                  personal information you provide against third-party databases
                  and public records. When you attempt to link a bank account to
                  your account, we may require you to provide additional
                  information which we may use in collaboration with service
                  providers acting on our behalf to verify your identity or
                  address, and/or to manage risk as required under applicable
                  law. If you do not provide information required by law, we
                  will have to close your account. We may use the information we
                  collect to investigate or address claims or disputes relating
                  to use of our Services, or as otherwise allowed by applicable
                  law, or as requested by regulators, government entities, and
                  official inquiries.
                </li>
                <li>
                  <strong>Direct Marketing. </strong>
                  We may use the information we collect to market our Services
                  to you. This may include sending you communications via emails
                  or mobile app notifications about our Services, features,
                  promotions, surveys, news, updates, and events; managing your
                  participation in these promotions and events; and to deliver
                  targeted marketing. Our marketing will be conducted according
                  to your advertising and marketing preferences and as permitted
                  by applicable law.
                </li>
              </ul>
            </p>
            <h1 className="sub-title">
              How and Why We Share Information
            </h1>
            <p>
              <p>We may share your information in the following circumstances:</p>
            <ul className='bullet-point'>
                <li>
                  <strong>With Your Consent. </strong>
                  You may let us share personal information with others for any
                  other purposes disclosed to you with your consent.
                </li>
                <li>
                  <strong>With our Affiliates. </strong>
                  Where appropriate, we may share your information with Currency Technologies Ltd, Barterfunds UK, Barterfunds
                  US, and Barterfunds Holdings Ltd in the course of
                  conducting business and offering our Services to you.
                </li>
                <li>
                  <strong>To Comply With Our Legal Obligations. </strong>
                  We may share your information with courts, law enforcement
                  authorities, regulators, attorneys or other parties: (A) to
                  comply with laws and legal obligations; (B) for the
                  establishment, exercise, or defense of a legal or equitable
                  claim; (C) to respond to law enforcement and regulatory
                  requests, including (1) when we are compelled to do so by a
                  subpoena, court order, search or seizure warrant, or similar
                  legal procedure, or (2) for international law enforcement
                  requests, pursuant to a mutual legal assistance treaty (MLAT)
                  or letter rogatory; (D) to comply with one or more forms of
                  “travel rules” that require our transmitting of your
                  information to another financial institution; (E) when we
                  believe in good faith that the disclosure of personal
                  information is necessary to protect the rights, property or
                  safety of our customers, us, or others, including to prevent
                  imminent physical harm or material financial loss; (F) to
                  investigate violations of our Terms of Use or other applicable
                  policies; or (F) to report suspected illegal activity or to
                  assist law enforcement in the investigation of suspected
                  illegal or wrongful activity.
                  {' '}
                </li>
                <li>
                  <strong>
                    With Third-Party Identity Verification Services.{" "}
                  </strong>
                  We may share your information with third-party identity
                  verification service providers for the purposes of identity
                  verification, fraud prevention, and denial of service to
                  persons presenting an unacceptable level of money-laundering
                  or terrorism-financing risks. These service providers confirm
                  your identity by comparing the information you provide us to
                  public records and other third-party databases. These
                  providers may create derivative data based on your personal
                  information that they can use in connection with provision of
                  identity verification and fraud prevention services. We do not
                  control these providers’ privacy policies.
                  <ol>
                    <li>
                      For example, we use Plaid, Inc. (“Plaid”) for identity
                      verification services to identify and authenticate you
                      when you create or reactivate an account with us.
                      Specifically, Plaid will verify that the selfie you
                      provide matches the photo on your government-issued ID.
                      The information collected during this process may
                      constitute Biometric Data, including facial recognition
                      data and mathematical representations of your facial
                      geometry. We do not sell or share your Biometric Data. To
                      learn more about Plaid’s privacy practices, please visit
                      the
                      {' '}
                      <p>Plaid End User Privacy Policy</p>. By submitting your
                      information, you agree to Plaid’s Privacy Policy.
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>With Service Providers. </strong>
                  We may share your information on a confidential basis with
                  service providers who help facilitate business operations such
                  as payment processing, marketing, security, or information
                  technology services. Our contracts require these service
                  providers to only use your information according to our
                  instructions.
                </li>
                <li>
                  <strong>For Advertising Purposes. </strong>
                  For clarity, barter-funds.com does not ‘sell’ or
                  ‘share’ personal information with these advertising services
                  for monetary benefit, and they are contractually restricted
                  from using personal information collected by barter-funds.com for
                  their own independent marketing purposes.
                </li>
                <li>
                  <strong>With Financial Institutions. </strong>
                  We may share your information with financial institutions to
                  process payments you have authorized.
                  <ol>
                    <li>
                      For example, we use Plaid to connect your barter-funds.com
                      account with your bank account, verify your bank account,
                      and confirm your bank account balance prior to approving a
                      transaction. Information shared with Plaid is treated by
                      Plaid in accordance with the
                      {' '}
                      <p style={{ cursor: "pointer" }}>
                        Plaid End User Privacy Policy
                      </p>
                      . By linking your bank account through Plaid, you consent
                      to Plaid’s Privacy Policy.
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>With Our Professional Advisors. </strong>
                  We may share your information with our professional advisors
                  such as accountants, auditors, lawyers, insurers, bankers, and
                  blockchain forensic services in order to complete third-party
                  audits or to comply with our legal obligations.
                </li>
                
                <li>
                  <strong>During A Change To Our Business. </strong>
                  If we engage in a merger, acquisition, bankruptcy,
                  dissolution, reorganization, sale of some or all of our assets
                  or stock, financing, public offering of securities,
                  acquisition of all or a portion of our business, a similar
                  transaction or proceeding, or steps in contemplation of such
                  activities, some or all of your information may be shared or
                  transferred.
                </li>
                <li>
                  <strong>Aggregated Or De-identified Data. </strong>
                  We may create de-identified or anonymous data from personal
                  information by removing data components (such as your name or
                  email address) that makes the data personally identifiable to
                  you, or through obfuscation. We may share aggregated and/or
                  anonymized data with others for their own uses.
                </li>
              </ul>
            </p>
            <h1 className="sub-title">
              International Transfers
            </h1>
            <p>
            Our retail Services are directed and offered only to individuals
              within supported regions in Ghana. Please note that if
              you are visiting the Site from outside of Ghana, your
              information may be transferred to, stored, and/or processed in the
              Ghana. The data protection and other laws of Ghana and other countries might not be as comprehensive as those
              in your country. By using any portion of the Site, you acknowledge
              and consent to the transfer of your information to our facilities
              in the United States.
            </p>
            <h1 className="sub-title">
              Security
            </h1>
            <p>
            We maintain administrative, technical, and physical safeguards
              designed to protect the personal information we maintain against
              unauthorized access or disclosure. No system can be completely
              secure. Therefore, although we take steps to secure your
              information, we cannot guarantee that your information, searches,
              or other communication will always remain secure. When registering
              for our Services, choose a complex password and turn on advanced
              security features, such as two-factor authentication. Never share
              your account credentials with third-parties and submit a Customer
              Support ticket here if you become aware of unauthorized access to or use of your
              account.
           
            </p>
            <p>
            <strong>
                You are responsible for all activity on the account that is
                associated with your login credentials.
              </strong>
            </p>
            <h1 className="sub-title">
              Retention
            </h1>
            <p>
            We retain your personal information for as long as is necessary
              for the purposes set out in this Privacy Policy. To determine how
              long we will retain your personal information, we consider the
              amount, nature, and sensitivity of the personal information, the
              potential risk of harm from unauthorized use or disclosure of your
              personal information, the purposes for which we process your
              personal information, and whether we can achieve those purposes
              through other means, and the applicable legal, regulatory, tax,
              accounting, or other requirements.
            </p>
            <p>
            We will retain and use your personal information to the extent
              necessary to comply with our legal obligations (i.e., if we are
              required to retain your data or the information you provided to us
              to comply with applicable laws, including anti-money-laundering,
              anti-terrorism, or other financial laws and regulations). In
              addition, we will retain and use your personal information to
              resolve disputes and enforce our legal agreements and policies.
            </p>
            <p>
            We will retain your marketing contact information until you
              unsubscribe from our marketing communications. We will also retain
              the Services’ usage data for internal analysis purposes. Usage
              data is generally retained for a shorter period of time, except
              when this data is used to strengthen the security or to improve
              the functionality of our Services, or we are legally obligated to
              retain this data for longer periods.
            </p>
            <p>
            We will retain Biometric Data as part of customer identification
              information for the period required by financial laws and
              regulations. Unless required by a valid warrant or subpoena to
              maintain any specific Biometric Data for longer, we will securely
              delete Biometric Data according to this schedule, rendering it no
              longer available for inspection or access. Our third-party
              verification service providers will retain your Biometric Data
              until one of the following events occurs: the identity
              verification purposes for the collection have been satisfied; or
              six (6) months from the time of collection.
            </p>
            <h1 className="sub-title">
              Your Privacy Rights
            </h1>
            <p>
            It is Barterfunds’s policy to offer certain privacy rights to all
              individuals, regardless of whether a statutory right exists. The
              rights that Barterfunds offers to all individuals include the following:
            </p>
            <p>
            <ul className='bullet-point'>
                <li>
                  <strong>Right to Know. </strong>
                  You have the right to request what Personal Data we collect,
                  use, disclose, or share about you, as applicable.
                </li>
                <li>
                  <strong>Right to Access/Portability. </strong>
                  You can request access to and/or a copy of the personal
                  information that we maintain about you.
                </li>
                <li>
                  <strong>Right to Delete. </strong>
                  You can ask us to delete the personal information that we have
                  collected or maintain about you, subject to exceptions. Please
                  note that we are required to retain certain personal
                  information to comply with our legal obligations, including
                  compliance with recordkeeping requirements contained in
                  anti-money laundering, anti-terrorism, or other financial laws
                  and regulations.
                </li>
                <li>
                  <strong>Right to Correct. </strong>
                  You can ask us to correct inaccurate personal information we
                  maintain about you.
                  <ol>
                    <li>
                      To request updates or corrections to your personal
                      information, please contact Customer Support at
                      {' '}
                      <a href="/support-center">Support Center</a>.
                      You can also update certain account profile information by
                      logging into your account.
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Right to Opt Out. </strong>
                  You can opt out of certain uses of your personal information:
                  <ol>
                    <li>
                      <strong>
                        Marketing and Promotional Communications.{" "}
                      </strong>
                      If you would like to stop receiving marketing or
                      promotional messages, notifications, or updates, you may
                      do so by following the unsubscribe instructions that
                      appear in these email communications, or you may contact
                      us at
                      {' '}
                      <a href="mailto:privacy@barter-funds.com">privacy@barter-funds.com</a>
                      to opt out of direct marketing. Please be advised that you
                      may not be able to opt out of receiving certain service or
                      transactional messages from us, including legal notices.
                    </li>
                    <li>
                      <strong>Targeted Advertising. </strong>
                      You may opt out of targeted advertising (see{" "}
                      <a href="#tracking">Online Tracking Opt-Out Guide</a>
                      below).
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>California and Virginia Privacy Rights. </strong>
                  California and Virginia residents have certain legal rights
                  with respect to our collection, use, and sharing of personal
                  information. Please review our
                  {' '}
                  <a href="#notice-california">
                    Notice to California Consumers
                  </a>
                  and
                  {' '}
                  <a href="#notice-virginia">Notice to Virginia Consumers</a>
                  for more information about those rights.
                </li>
              </ul>
            </p>
            <p>
            You can exercise these rights by contacting us at
                {' '}
                <a href="mailto:privacy@barter-funds.com">privacy@barter-funds.com</a>. To
                protect your privacy and security, we may request specific
                information from you to help us verify your identity before
                complying with your request. We are not obligated to provide or
                to delete any information pursuant to your request if we are
                unable to adequately verify your identity.
            </p>
            <p>
            We reserve the right to refuse to act on a request, or to charge
                a reasonable administrative fee when a request is either
                manifestly unfounded or excessive because of its repetitive
                character.
            </p>
            <h1 className="sub-title">
              Children’s Privacy
            </h1>
            <p>
            We do not allow use of our Services and Sites by anyone younger
              than 18 years old. If you learn that anyone younger than 18 has
              unlawfully provided us with personal data, please contact us at{" "}
              <a href="mailto:privacy@barter-funds.com">privacy@barter-funds.com</a>
              {" "}and we will take steps to delete such information, close any such
              accounts, and prevent the user from continuing to use our
              Services.
            </p>
            <h1 className="sub-title">
              Links to Third-Party Sites
            </h1>
            <p>
            Our Services may contain links to other websites or services. We
              do not exercise control over the information you provide or is
              collected by these third-party websites. We encourage you to read
              the privacy policies or statements of the other websites you
              visit.
            </p>
            <h1 className="sub-title">
              Changes To This Policy
            </h1>
            <p>
            We may update this Privacy Policy from time-to-time as we update
              or expand our Services and to comply with applicable laws. If we
              make any changes, we will change the Last Updated date above. We
              encourage you to review this Policy to stay informed. If we make
              material changes, we will provide additional notice, such as via
              the email specified in your account or through the Services or
              Sites.
            </p>
            <h1 className="sub-title">
              Contact Us
            </h1>
            <p>
            Please contact us if you have any questions about this Policy or
              if you are seeking to exercise any of your privacy rights. You may
              contact us at
              {' '}
              <a href="mailto:privacy@barter-funds.com">privacy@barter-funds.com</a>
            </p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default PrivacyPolicy;

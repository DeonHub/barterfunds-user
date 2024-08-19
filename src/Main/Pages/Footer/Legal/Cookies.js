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

const Cookies = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Legal', href: '/legal', active: false },
    { label: 'Cookies', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="Affiliate | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
              Affiliates
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <p>
            This Cookie Policy explains how Barter Funds (“<strong>our</strong>,” “<strong>we</strong>,” or “<strong>us</strong>” ) uses cookies
            and similar technologies when you visit our website at
            {' '}
            <a
              data-bn-type="link"
              target="_blank"
              href="/"
              rel="noreferrer"
             
            >
              Barterfunds
            </a>
            {' '}
            or any other websites, pages, features, or content we own or operate
            (collectively, the “Sites”) or when you use the Barterfunds mobile
            app (collectively, the “Services”). This policy explains what
            cookies are, how and why we use them, and how you can exercise your
            options to limit our use of cookies.
            {' '}
          </p>
          <h1 className='sub-title'>Cookies and Other Technologies </h1>
          <p>
            A cookie is a small data file that is stored on your computer or
            other device when you visit certain websites. Cookies help to track
            user-specific information and activities to ensure a consistent and
            efficient experience for visitors, and perform essential functions
            such as allowing users to register for an account and remain logged
            in. Cookies may be set by the site that you are visiting (known as
            “first party cookies”), or by third parties, such as those who serve
            content or provide advertising or analytics services on the website
            (“third party cookies”). For general information about cookies
            (including how to disable/enable them), visit
            {' '}
            <a
              data-bn-type="link"
              target="_blank"
              href="https://allaboutcookies.org/"
              rel="noreferrer"
            >
              {' '}
              All Cookies
              {' '}
            </a>
            .
          </p>
          <p>
            We may also employ other technologies including tracking pixels and
            code snippets that interact with external services to record online
            behaviors.
            {' '}
          </p>
          <h1 className='sub-title'>How We Use Cookies </h1>
          <p>
            We use cookies for a number of different purposes. Some cookies are
            necessary for technical reasons; some help us identify user behavior
            so that we may provide a more convenient and personalized experience
            for both visitors and registered users; and some allow the display
            of advertising from selected third party networks. Some of these
            cookies may be set when a page is loaded, or when a visitor takes a
            particular action.
          </p>
          <h1 className='sub-title'>Categories of Cookies </h1>
          <p>We use the following types of cookies: </p>
          <ol className='bullet-point'>
            <li>
              <strong>Strictly Necessary Cookies</strong>. These cookies are
              essential for our website and services to perform basic functions
              and are necessary for us to operate certain features.
            </li>
            <li>
              <strong>Preference and Functionality Cookies</strong>. These
              cookies enable our website to remember information about your
              preferences such as your selected language.
              {' '}
            </li>
            <li>
              <strong>Analytics Cookies</strong>. These cookies help us
              understand how visitors interact with our website by collecting
              and reporting information about your visit, including the pages
              viewed and time spent on the website.
            </li>
            <li>
              <strong>Advertising and Marketing Cookies</strong>. These cookies
              are used to remember a visitor to our website in order to display
              ads that are relevant and engaging to you on other websites, as
              well as limit the number of times you see an advertisement. These
              cookies also help us measure our advertising or email marketing
              campaigns’ effectiveness. You can learn more about how to opt out
              of these cookie uses below.
            </li>
          </ol>
          <h1 className='sub-title'>How to Opt Out of Our Cookie Use</h1>
          <p>You can opt out of cookie use in the following ways:</p>
          <ol className='bullet-point'>
            <li>
              <strong>Through your browser</strong>. You can adjust your browser
              settings so that your browser blocks all or some cookies. You can
              also delete cookies that have already been placed. Please note
              that our website or Services may not recognize automated browser
              signals regarding tracking mechanisms, such as “do not track”
              instructions.
              {' '}
            </li>
            <li>
              <strong>With each of our vendors inpidually</strong>. The
              following are vendors with advertising and marketing cookies that
              our website uses and a link to each vendor’s opt out page:
            </li>
            <p style={{ margin: "20px 0" }}>
              <p>
                <p>Analytics Cookies</p>
              </p>
              <p>
                <p width="0.5">
                  Google Analytics
                </p>
                <p width="0.5">
                  <a
                    data-bn-type="link"
                    target="_blank"
                    href="https://tools.google.com/dlpage/gaoptout"
                    rel="noreferrer"
                  >
                    Google Analytics Opt Out
                  </a>
                </p>
              </p>
              <p>
                <p width="0.5">
                  Microsoft Analytics
                </p>
                <p width="0.5">
                  <a
                    data-bn-type="link"
                    target="_blank"
                    href="https://privacy.microsoft.com/en-US/privacystatement"
                    rel="noreferrer"
                  >
                    Microsoft Privacy Statement
                  </a>
                </p>
              </p>
              <p>
                <p>Advertising Cookies</p>
              </p>
              <p>
                <p width="0.5">
                  Google
                </p>
                <p width="0.5">
                  <a
                    data-bn-type="link"
                    target="_blank"
                    href="https://support.google.com/ads/answer/2662922?hl=en-GB"
                    rel="noreferrer"
                                      >
                    Google Advertising Opt Out
                  </a>
                </p>
              </p>
              <p>
                <p width="0.5">
                  Microsoft/Bing
                </p>
                <p width="0.5">
                  <a
                    data-bn-type="link"
                    target="_blank"
                    href="https://about.ads.microsoft.com/en-us/resources/policies/personalized-ads"
                    rel="noreferrer"
                  >
                    Microsoft Personalized Ads Opt Out
                  </a>
                </p>
              </p>
              <p>
                <p width="0.5">
                  Facebook
                </p>
                <p width="0.5">
                  <a
                    data-bn-type="link"
                    target="_blank"
                    href="https://www.facebook.com/help/568137493302217/"
                    rel="noreferrer"
                  >
                    Facebook Advertising Preferences
                  </a>
                </p>
              </p>
              <p>
                <p width="0.5">
                  Pinterest
                </p>
                <p width="0.5">
                  <a
                    data-bn-type="link"
                    target="_blank"
                    href="https://help.pinterest.com/en/article/personalization-and-data"
                    rel="noreferrer"
                  >
                    Pinterest Personalization and Data center
                  </a>
                </p>
              </p>
              <p>
                <p width="0.5">
                  Snap
                </p>
                <p width="0.5">
                  <a
                    data-bn-type="link"
                    target="_blank"
                    href="https://support.snapchat.com/en-US/a/advertising-preferences"
                    rel="noreferrer"
                  >
                    Snapchat Ad Preferences
                  </a>
                </p>
              </p>
              <p>
                <p width="0.5">
                  TikTok
                </p>
                <p width="0.5">
                  <a
                    data-bn-type="link"
                    target="_blank"
                    href="https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/personalization-and-data"
                    rel="noreferrer"
                  >
                    TikTok Personalized Ad Preferences
                  </a>
                </p>
              </p>
              <p>
                <p>Analytics Cookies</p>
              </p>
              <p>
                <p width="0.5">
                  Other Cookies
                </p>
              </p>
              <p>
                <p width="0.5">
                  Quora
                </p>
                <p width="0.5">
                  <a
                    data-bn-type="link"
                    target="_blank"
                    href="https://www.quora.com/optout"
                    rel="noreferrer"
                  >
                    Quora Opt Out
                  </a>
                </p>
              </p>
              <p>
                <p width="0.5">
                  Reddit
                </p>
                <p width="0.5">
                  <a
                    data-bn-type="link"
                    target="_blank"
                    href="https://www.reddit.com/settings/privacy"
                    rel="noreferrer"
                  >
                    Reddit Privacy Settings
                  </a>
                </p>
              </p>
            </p>
            <p>
              While we do not believe we “sell” your personal information (as
              defined by the California Consumer Privacy Act (CCPA)) to Quora or
              Reddit for marketing purposes, given the broad language of the
              CCPA, the Quora and Reddit cookies placed on our website may be
              interpreted as a “sale” of your personal information. You may
              choose to opt out of these cookies by exercising an industry-wide
              opt-out mechanism (detailed below) or by changing your preferences
              with Quora and Reddit.
            </p>
            <li>
              <strong>Through industry-wide opt-out mechanisms</strong>.
              Consumers can submit an industry-wide opt-out request for
              interest-based advertising through the Digital Advertising
              Alliance’s (DAA) opt-out website which can be found at
              {' '}
              <a
                data-bn-type="link"
                target="_blank"
                href="https://optout.aboutads.info/?c=2&lang=EN"
                rel="noreferrer"
              >
                optout.aboutads.info.
                {' '}
              </a>
            </li>
          </ol>
          <h1 className='sub-title'>App Tracking</h1>
          <p>
            The Barterfunds app uses software codes provided by our business
            partners (software development kits or SDKs) that let our software
            interact with the services those partners provide. Sometimes these
            interactions will involve that business partner collecting some
            information from the device on which the software is run.
            {' '}
          </p>
          <h1 className='sub-title'>To view our app privacy disclosure:</h1>
          <p>On iOS:</p>
          <ul>
            <li>
              Open the <strong>App Store</strong>. Go to the Barterfunds app
              page. Scroll to the
              {' '}
              <strong>App Privacy</strong>
              section. Click <strong>See Details</strong>.{' '}
            </li>
          </ul>
          <p>On Android:</p>
          <p>
          <ul>
            <li>
              Open <strong>Google Play</strong>. Browse or use the search bar to
              find the Barterfunds app. Click on the app. Under{" "}
              <strong>Data safety</strong>, you’ll find a summary of the app’s
              data safety practices. For more detail, tap{" "}
              <strong>See details</strong>.
            </li>
          </ul>
          </p>
          <h1 className='sub-title'>To opt out of tracking:</h1>
          <p>On iOS:</p>
          <ul>
            <li>
              When you download and open a new app, you 'll get a notification
              that asks if you want to let the app track your activity across
              other companies’ apps and websites. You 'll also see information
              about what the app would track. You can tap
              {' '}
              <strong>Ask App not to Track</strong>
              to block that activity or Allow.
            </li>
            <li>
              For apps that you 've already downloaded and may have tracking
              permissions set up for, you can opt out of tracking if you go to
              Settings, tap an app, and then tap to turn off{" "}
              <strong>Allow Tracking</strong>. Alternatively, you may go to
              {' '}
              <strong>
                Settings
                {' '}
                &gt;
                {' '}
                Privacy
                {' '}
                &gt;
                {' '}
                Tracking
              </strong>
              . There you will see a list of apps that have requested permission
              to track your activity. You can tap to turn tracking on or off for
              each app.
              {' '}
            </li>
          </ul>
          <p>On Android:</p>
          <p>
          <ul>
            <li>
              Go to the <strong>Settings</strong>
              app and navigate to
              {' '}
              <strong>
                Privacy
                {' '}
                &gt;
                {' '}
                Ads
              </strong>
              . Tap <strong>Delete advertising ID</strong>, then tap it again on
              the next page to confirm. This will prevent any app on your phone
              from accessing it in the future.
            </li>
          </ul>
          </p>
          <h1 className='sub-title'>Changes To This Policy</h1>
          <p>
            We may revise this Cookie Policy from time to time. If we make any
            changes, we will change the Last Updated date above. We encourage
            you to review and revisit this Policy to stay informed.
          </p>
          <h1 className='sub-title'>Contact Us</h1>
          <p>
            For more information about our use of cookies, please contact us at
            {' '}
            <a href="mailto:privacy@barter-funds">privacy@barter-funds</a>
          </p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Cookies;

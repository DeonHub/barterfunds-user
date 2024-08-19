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

const Affiliates = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Partnership', href: '/legal', active: false },
    { label: 'Affiliates', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="Affiliate | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Affiliates
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <h2 className='sub-title'>Introduction</h2>
      <p>
        Welcome to the BarterFunds Affiliates page! Our affiliate program is
        designed to reward you for spreading the word about BarterFunds and
        helping us grow our community. By becoming a BarterFunds affiliate, you
        can earn commissions while sharing the benefits of our digital currency
        exchange platform with your network.
      </p>
      <h2 className='sub-title'>Why Join the BarterFunds Affiliate Program?</h2>
      <p>
        Our affiliate program offers numerous benefits that make it a valuable
        opportunity for you:
      </p>
      <ul className='bullet-point'>
        <li>
          <strong>Attractive Commissions:</strong> Earn competitive commissions
          for every new user you refer who completes qualifying transactions.
        </li>
        <li>
          <strong>Easy to Join:</strong> Our affiliate program is simple to
          join, with a straightforward sign-up process and intuitive dashboard
          to track your progress.
        </li>
        <li>
          <strong>Marketing Support:</strong> Gain access to a range of
          marketing materials and resources to help you effectively promote
          BarterFunds.
        </li>
        <li>
          <strong>Trusted Brand:</strong> Partner with a reputable and trusted
          platform known for its innovation, security, and customer-centric
          approach.
        </li>
      </ul>
      <h2 className='sub-title'>How It Works</h2>
      <p>
        Joining the BarterFunds affiliate program is easy and rewarding. Here’s
        how it works:
      </p>
      <ul className='bullet-point'>
        <li>
          <strong>Sign Up:</strong> Register for the affiliate program through
          our website. Once approved, you’ll receive a unique referral link.
        </li>
        <li>
          <strong>Promote:</strong> Share your referral link with your network
          through social media, email, blogs, and other channels.
        </li>
        <li>
          <strong>Earn Commissions:</strong> Earn commissions when users sign up
          using your referral link and complete qualifying transactions on
          BarterFunds.
        </li>
      </ul>
      <h2 className='sub-title'>Commission Structure</h2>
      <p>Our affiliate program offers a competitive commission structure:</p>
      <ul className='bullet-point'>
        <li>
          <strong>Referral Commission:</strong> Earn 20 cedis for every new user
          who signs up using your referral link and completes a transaction of
          at least 1000 cedis for the first time.
        </li>
        <li>
          <strong>Minimum Withdrawal:</strong> The minimum withdrawal amount for
          your earned commissions is 20 cedis, ensuring you can access your
          earnings quickly and easily.
        </li>
      </ul>
      <h2 className='sub-title'>Marketing Resources</h2>
      <p>
        As a BarterFunds affiliate, you’ll have access to a variety of marketing
        resources to help you succeed:
      </p>
      <ul className='bullet-point'>
        <li>
          <strong>Banners and Ads:</strong> Use our professionally designed
          banners and ads to promote BarterFunds on your website or blog.
        </li>
        <li>
          <strong>Social Media Content:</strong> Share ready-made social media
          posts and images to engage your audience.
        </li>
        <li>
          <strong>Email Templates:</strong> Utilize our email templates to send
          effective and persuasive messages to your contacts.
        </li>
        <li>
          <strong>Affiliate Dashboard:</strong> Track your referrals, earnings,
          and performance through our user-friendly affiliate dashboard.
        </li>
      </ul>
      <h2 className='sub-title'>Success Tips for Affiliates</h2>
      <p>Maximize your success as a BarterFunds affiliate with these tips:</p>
      <ul className='bullet-point'>
        <li>
          <strong>Be Authentic:</strong> Share your genuine experiences with
          BarterFunds to build trust and credibility with your audience.
        </li>
        <li>
          <strong>Leverage Multiple Channels:</strong> Promote BarterFunds
          across various platforms, including social media, email, blogs, and
          forums.
        </li>
        <li>
          <strong>Engage Your Audience:</strong> Create engaging content that
          highlights the benefits of BarterFunds and addresses the needs of your
          audience.
        </li>
        <li>
          <strong>Stay Updated:</strong> Keep up-to-date with the latest trends
          and updates from BarterFunds to provide accurate and relevant
          information to your referrals.
        </li>
      </ul>
      <h2 className='sub-title'>Join Now</h2>
      <p>
        Ready to start earning with BarterFunds? Join our affiliate program
        today and become a part of our growing community. If you have any
        questions or need assistance, please contact our affiliate support team
        at{" "}
        <a href="mailto:affiliates@barter-funds.com">
          affiliates@barter-funds.com
        </a>
        .
      </p>
      <h2 className='sub-title'>Conclusion</h2>
      <p>
        Thank you for considering the BarterFunds affiliate program. We look
        forward to partnering with you and achieving great success together.
        Let’s grow and thrive together with BarterFunds!
      </p>
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Affiliates;

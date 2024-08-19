import React, { useState } from 'react';
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

const Newsletter = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Resources', href: '/resources', active: false },
    { label: 'Newsletter', href: '#', active: true }
  ];

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Add logic to send email to the server or mailing list
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Head title="Newsletter | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
            Subscribe to Our Newsletter
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
      <p>
        Stay updated with the latest news, updates, and exclusive offers from Barter Funds. Subscribe to our newsletter and never miss out on important information.
      </p>

      {submitted ? (
        <div style={{ marginTop: '20px', color: '#800020' }}>
          <h3>Thank you for subscribing!</h3>
          <p>You have successfully subscribed to our newsletter.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            style={{
              padding: '10px',
              width: '300px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
            required
          />
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#800020',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              marginLeft: '10px',
              cursor: 'pointer',
              fontSize: '16px',
              marginTop: '5px',
            }}
          >
            Subscribe
          </button>
        </form>
      )}

      <div style={{ marginTop: '40px', textAlign: 'left' }}>
        <h1 className='sub-title'>Why Subscribe?</h1>
        <ul className='bullet-list' style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>Get the latest news on digital currencies and financial markets.</li>
          <li>Be the first to know about our new features and updates.</li>
          <li>Receive exclusive offers and promotions available only to subscribers.</li>
          <li>Learn from expert insights and tips on managing your digital assets.</li>
        </ul>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'left' }}>
        <h1 className='sub-title'>Your Privacy Matters</h1>
        <p>
          We respect your privacy and are committed to protecting your personal information. Your email address will only be used to send you our newsletter and will not be shared with third parties.
        </p>
      </div>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Newsletter;

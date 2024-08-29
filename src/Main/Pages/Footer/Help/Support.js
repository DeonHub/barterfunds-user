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
import { Helmet } from 'react-helmet';


const Support = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Help', href: '/help', active: false },
    { label: 'Support Center', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Support Center | Barter Funds</title>
        <meta name="description" content="Get 24/7 assistance at Barter Funds' Support Center. Access live chat, support email, knowledge base, FAQs, and community forums for quick and efficient help." />
        <meta name="keywords" content="Barter Funds support, customer support, live chat, email support, knowledge base, FAQs, community forums, 24/7 assistance" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Barter Funds" />
        <meta property="og:title" content="Support Center | Barter Funds" />
        <meta property="og:description" content="Need help with Barter Funds? Visit our Support Center for live chat, email support, a comprehensive knowledge base, FAQs, and active community forums." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.barter-funds.com/support-center" />
        <meta property="og:image" content="https://www.barter-funds.com/images/support-center-thumbnail.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Support Center | Barter Funds" />
        <meta name="twitter:description" content="Get quick and efficient help at Barter Funds' Support Center. Access live chat, email support, knowledge base, FAQs, and community forums." />
        <meta name="twitter:image" content="https://www.barter-funds.com/images/support-center-thumbnail.jpg" />
      </Helmet>
      <Header />
      <Head title="Support Center | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Support Center
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
      <p>
        We're here to help! Whether you have a question, need assistance, or want to learn more about our services, our support center is designed to provide you with the answers and help you need quickly and efficiently.
      </p>


      <div style={{ marginBottom: '40px' }}>
                <h2 className='sub-title'>Live Chat</h2>
                <p>
                  Need help right now? Our live chat support is available 24/7 to assist you with any questions or issues you may have. Simply click the WhatsApp or telegram chat button to start a conversation with one of our support team.
                </p>
                <a href="https://wa.me/message/ON5PHWAZTGKWI1" target="_blank" rel="noopener noreferrer">
                  <button style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Whatsapp Chat
                  </button>
                </a>
                {' '}
                <a href="https://t.me/barterfunds" target="_blank" rel="noopener noreferrer">
                  <button style={{ padding: '10px 20px', backgroundColor: '#0088cc', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Telegram Chat
                  </button>
                </a>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 className='sub-title'>Support Email</h2>
                <p>
                  Can't find the answer you're looking for? Submit an email, and our team will get back to you as soon as possible. Describe your issue, and we'll work to resolve it promptly.
                </p>
                <a href="mailto:support@barter-funds.com" target="_blank" rel="noopener noreferrer">
                  <button style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Send Email
                  </button>
                </a>
              </div>


      <div style={{ marginBottom: '40px' }}>
        <h2 className='sub-title'>Knowledge Base</h2>
        <p>
          Explore our extensive knowledge base filled with articles, tutorials, and guides to help you navigate the Barter Funds platform. From setting up your account to troubleshooting common issues, our knowledge base has you covered.
        </p>
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Visit Knowledge Base
        </button>
      </div>

      

      <div style={{ marginBottom: '40px' }}>
        <h2 className='sub-title'>Frequently Asked Questions (FAQs)</h2>
        <p>
          Find quick answers to common questions in our FAQ section. Whether you're wondering about fees, transactions, or account management, our FAQs are designed to provide you with instant solutions.
        </p>
        <button style={{ padding: '10px 20px', backgroundColor: '#ffc107', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Browse FAQs
        </button>
      </div>

     

      <div>
        <h2 className='sub-title'>Community Forums</h2>
        <p>
          Join our community forums to connect with other Barter Funds users. Share tips, ask questions, and learn from others' experiences. Our forums are a great place to find and share knowledge within our community.
        </p>
        <a href="https://t.me/barterhive" target="_blank" rel="noopener noreferrer">
                  <button style={{ padding: '10px 20px', backgroundColor: '#17a2b8', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Visit Community Forums
                  </button>
                </a>
      </div>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Support;

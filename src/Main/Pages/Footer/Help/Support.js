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


const Support = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Help', href: '/help', active: false },
    { label: 'Support Center', href: '#', active: true }
  ];

  return (
    <React.Fragment>
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
        <h2 className='sub-title'>Knowledge Base</h2>
        <p>
          Explore our extensive knowledge base filled with articles, tutorials, and guides to help you navigate the Barter Funds platform. From setting up your account to troubleshooting common issues, our knowledge base has you covered.
        </p>
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Visit Knowledge Base
        </button>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 className='sub-title'>Live Chat</h2>
        <p>
          Need help right now? Our live chat support is available 24/7 to assist you with any questions or issues you may have. Simply click the chat icon at the bottom of your screen to start a conversation with one of our support agents.
        </p>
        <button style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Start Live Chat
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

      <div style={{ marginBottom: '40px' }}>
        <h2 className='sub-title'>Submit a Support Ticket</h2>
        <p>
          Can't find the answer you're looking for? Submit a support ticket, and our team will get back to you as soon as possible. Describe your issue, and we'll work to resolve it promptly.
        </p>
        <button style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Submit Ticket
        </button>
      </div>

      <div>
        <h2 className='sub-title'>Community Forums</h2>
        <p>
          Join our community forums to connect with other Barter Funds users. Share tips, ask questions, and learn from others' experiences. Our forums are a great place to find and share knowledge within our community.
        </p>
        <button style={{ padding: '10px 20px', backgroundColor: '#17a2b8', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Visit Community Forums
        </button>
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

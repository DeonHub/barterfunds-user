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

const Contact = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Company', href: '/company', active: false },
    { label: 'Contact', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="Contact | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
              Contact Us
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <p>
        We’re here to help you with any questions or concerns you may have. Whether you're looking for support, 
        have a business inquiry, or just want to say hello, feel free to reach out to us using any of the methods below.
      </p>

      <h1 className='sub-title'>Customer Support</h1>
      <p>
        Our support team is available 24/7 to assist you with any issues or inquiries. You can reach us via:
      </p>
      <p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:support@barterfunds.com">support@barter-funds.com</a></li>
        <li><strong>Phone:</strong> +233 59 887 0911 / +233 55 858 7873</li>
        <li><strong>Live Chat:</strong> Available on our platform during business hours.</li>
      </ul>
      </p>

      <h1 className='sub-title'>Business Inquiries</h1>
      <p>
        Interested in partnering with us or have a business proposal? We’d love to hear from you. Please contact our 
        business development team at:
      </p>
      <p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:business@barterfunds.com">business@barter-funds.com</a></li>
      </ul>
      </p>

      <h1 className='sub-title'>Visit Us</h1>
      <p>
        If you’re in the area, feel free to visit our office. We’re located at:
      </p>
      <address>
        Barter Funds HQ<br />
        Lame Dwaahe Street, Adenta<br />
        Accra, Ghana
      </address>
      <p><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>

      <h1 className='sub-title'>Follow Us</h1>
      <p>
        Stay updated with the latest news, updates, and promotions by following us on social media:
      </p>
      <ul>
        <li><strong>Twitter:</strong> <a href="https://twitter.com/barterfunds" target="_blank" rel="noopener noreferrer">@barterfunds</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/company/barterfunds" target="_blank" rel="noopener noreferrer">Barter Funds</a></li>
        <li><strong>Facebook:</strong> <a href="https://facebook.com/barterfunds" target="_blank" rel="noopener noreferrer">Barter Funds</a></li>
        <li><strong>Facebook:</strong> <a href="https://instagram.com/barterfunds" target="_blank" rel="noopener noreferrer">Barter Funds</a></li>
        <li><strong>Facebook:</strong> <a href="https://tiktok.com/barterfunds" target="_blank" rel="noopener noreferrer">Barter Funds</a></li>
      </ul>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;

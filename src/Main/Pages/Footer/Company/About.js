
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

const About = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Company', href: '/company', active: false },
    { label: 'About', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="About | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
              About Us
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <p>
        Welcome to Barter Funds, your trusted partner in the dynamic world of digital currency exchange. 
        We are a forward-thinking fintech company that bridges the gap between traditional financial systems 
        and the fast-evolving world of digital assets. Whether you're looking to buy, sell, send, or receive 
        digital currencies, Barter Funds provides a seamless and secure platform tailored to your needs.
      </p>

      <h1 className='sub-title'>Our Mission</h1>
      <p>
        At Barter Funds, our mission is to empower individuals and businesses by providing easy access to digital 
        currencies. We aim to foster financial inclusion and innovation by offering a reliable, transparent, and 
        efficient platform for digital currency transactions. We believe that everyone should have the freedom to 
        transact globally with minimal barriers, and our platform is designed to make this a reality.
      </p>

      <h1 className='sub-title'>What We Do</h1>
      <ul className='bullet-point'>
        <li><strong>Instant Transactions:</strong> Whether you’re buying or selling, our platform ensures that your transactions are completed quickly and securely.</li>
        <li><strong>Competitive Rates:</strong> We offer some of the best rates in the market, ensuring that you get the most value for your money.</li>
        <li><strong>User-Friendly Experience:</strong> Our platform is designed with you in mind—simple, intuitive, and accessible to everyone, regardless of their level of experience with digital currencies.</li>
        <li><strong>Robust Security:</strong> We prioritize the security of your funds and personal information. Our advanced security protocols are designed to protect you at every step of the transaction process.</li>
        <li><strong>24/7 Support:</strong> Our dedicated support team is available around the clock to assist you with any questions or issues you may encounter.</li>
      </ul>

      <h1 className='sub-title'>Why Choose Barter Funds?</h1>
      <ul className='bullet-point'>
        <li><strong>Trust and Transparency:</strong> We operate with the highest level of integrity, ensuring that you can trust us with your transactions. Our transparent fee structure means no hidden costs—what you see is what you get.</li>
        <li><strong>Local Expertise, Global Reach:</strong> While we specialize in the Ghanaian market, our platform is designed to cater to users worldwide, giving you the ability to transact across borders with ease.</li>
        <li><strong>Innovation at the Core:</strong> We are constantly innovating, integrating the latest technologies to enhance your experience. Our platform is built to adapt to the changing landscape of digital currencies, ensuring that you always have access to the best tools and services.</li>
        <li><strong>Community-Driven Growth:</strong> We believe in the power of community. Through our referral program and partnerships with payment processors, fintech companies, and regulatory bodies, we are building a vibrant ecosystem that benefits all our users.</li>
      </ul>

      <h1 className='sub-title'>Our Vision</h1>
      <p>
        We envision a world where digital currencies are seamlessly integrated into everyday life, enabling people 
        to transact freely and securely across borders. As we continue to grow and evolve, our commitment to providing 
        a world-class digital currency exchange platform remains unwavering. We are dedicated to leading the charge in 
        digital finance, driving financial inclusion, and creating value for our users and partners.
      </p>

      <h1 className='sub-title'>Join Us on Our Journey</h1>
      <p>
        Barter Funds is more than just a platform—it's a movement. We invite you to join us on this journey toward a 
        more inclusive and innovative financial future. Whether you're a seasoned trader or just starting, Barter Funds 
        is here to help you navigate the world of digital currencies with confidence.
      </p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default About;

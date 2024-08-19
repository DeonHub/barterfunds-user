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

const Personal = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Solutions', href: '/solutions', active: false },
    { label: 'Personal', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="Personal | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
              Personal Solutions
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <p>
        Manage your finances with ease using Barter Funds' personal solutions. Whether you're saving for the future, managing your daily expenses, or exploring digital currencies, our platform is designed to provide you with the tools and resources you need to take control of your financial life.
      </p>

      <h1 className='sub-title'>Digital Wallet</h1>
      <p>
        Our digital wallet allows you to store, send, and receive digital currencies securely. With an intuitive interface, you can easily manage your funds, track your spending, and make payments with just a few clicks.
      </p>

      <h1 className='sub-title'>Personal Savings</h1>
      <p>
        Save for your future with our flexible savings options. Whether you're planning for a big purchase or just setting aside money for a rainy day, our savings tools help you reach your financial goals faster.
      </p>

      <h1 className='sub-title'>Peer-to-Peer Transfers</h1>
      <p>
        Easily send money to friends and family, no matter where they are. Our peer-to-peer transfer feature allows you to move funds quickly and securely, making it easier to support loved ones or settle debts.
      </p>

      <h1 className='sub-title'>Budgeting Tools</h1>
      <p>
        Take control of your finances with our budgeting tools. Set spending limits, track your expenses, and monitor your progress with real-time insights that help you stay on track.
      </p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Personal;

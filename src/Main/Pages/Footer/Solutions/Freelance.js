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

const Freelance = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Solutions', href: '/solutions', active: false },
    { label: 'Freelance', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="Freelance | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
              Freelance
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <p>
        Freelancers face unique financial challenges, and Barter Funds is here to help. Whether you're managing multiple clients, invoicing for your work, or looking for secure ways to receive payments, our platform offers the tools you need to stay organized and get paid faster.
      </p>

      <h1 className='sub-title'>Client Management</h1>
      <p>
        Keep track of your clients and projects with our client management tools. Organize your work, track your hours, and ensure that you’re on top of deadlines and deliverables.
      </p>

      <h1 className='sub-title'>Invoicing & Payments</h1>
      <p>
        Create and send invoices directly from our platform, and receive payments quickly and securely. With Barter Funds, you can focus on your work, knowing that your finances are in good hands.
      </p>

      <h1 className='sub-title'>Expense Tracking</h1>
      <p>
        Keep your business expenses in check with our expense tracking tools. Categorize your spending, monitor your cash flow, and ensure that you’re maximizing your tax deductions.
      </p>

      <h1 className='sub-title'>Freelance Contracts</h1>
      <p>
        Protect your work with customizable freelance contracts. Our platform allows you to create, send, and manage contracts with ease, ensuring that your rights and interests are always safeguarded.
      </p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Freelance;

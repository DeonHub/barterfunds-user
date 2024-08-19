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

const Business = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Solutions', href: '/solutions', active: false },
    { label: 'Business', href: '#', active: true }
  ];

  return (
    <React.Fragment>
      <Header />
      <Head title="Business | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h1" className="fw-normal">
              Business Solutions
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <p>
        Barter Funds offers a range of solutions tailored to meet the needs of businesses of all sizes. Whether you're looking to streamline your payment processes, manage your finances more effectively, or expand your digital currency offerings, our platform provides the tools and support you need to succeed.
      </p>

      <h1 className='sub-title'>Merchant Payment Gateway</h1>
      <p>
        Accept digital currency payments with ease using our merchant payment gateway. Our solution integrates seamlessly with your existing systems, allowing you to offer your customers more payment options and expand your market reach.
      </p>

      <h1 className='sub-title'>Business Accounts</h1>
      <p>
        Manage your business finances with our dedicated business accounts. Track income and expenses, manage payroll, and monitor your financial health with tools designed specifically for businesses.
      </p>

      <h1 className='sub-title'>Invoicing & Billing</h1>
      <p>
        Simplify your invoicing and billing processes with our easy-to-use tools. Create professional invoices, track payments, and manage your accounts receivable with ease.
      </p>

      <h1 className='sub-title'>Financial Reporting</h1>
      <p>
        Gain deeper insights into your business's financial performance with our comprehensive reporting tools. Generate reports on demand, analyze trends, and make informed decisions to drive growth.
      </p>
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Business;

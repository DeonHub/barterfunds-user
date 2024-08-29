import React from 'react';
import { Helmet } from 'react-helmet';
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

const Terms = ({ ...props }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Legal', href: '/legal', active: false },
    { label: 'Terms', href: '#', active: true }
  ];

  return (
    <React.Fragment>
            <Helmet>
                <title>Terms | Barter Funds</title>
                <meta name="description" content="Review the Affiliate Policy of Barter Funds. Understand the terms, conditions, and guidelines for participating in our affiliate program." />
                <meta name="keywords" content="Barter Funds, Affiliate Program, Affiliate Policy, Digital Assets, Referral Program, Earn Money" />
                <meta name="author" content="Barter Funds" />
                <meta property="og:title" content="Affiliate Policy | Barter Funds" />
                <meta property="og:description" content="Detailed information about Barter Funds' Affiliate Policy, including how to join and the benefits of being an affiliate." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://barter-funds.com/affiliate-policy" />
                <meta property="og:image" content="https://barter-funds.com/assets/affiliate-policy-thumbnail.jpg" />
                <meta property="og:site_name" content="Barter Funds" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Affiliate Policy | Barter Funds" />
                <meta name="twitter:description" content="Learn more about the terms and conditions of Barter Funds' affiliate program." />
                <meta name="twitter:image" content="https://barter-funds.com/assets/affiliate-policy-thumbnail.jpg" />
                <meta name="twitter:site" content="@BarterFunds" />
            </Helmet>
      <Header />
      <Head title="Terms & Conditions | Barter Funds" />
      <Content>
        <BlockHead size="lg" wide="xs" className="mx-auto">
          <BlockHeadContent className="text-center">
            <BlockTitle tag="h2" className="fw-normal">
              Terms and Conditions
            </BlockTitle>
            <Breadcrumb items={breadcrumbItems} />
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <PageContainer bodyClass="page-container">
            <article className="entry">
            <p>
          <span>
            These Terms constitute a legally binding agreement between you (“
          </span>
          <span>
            <strong>you</strong>
          </span>
          <span>
            ” or “
          </span>
          <span>
            <strong>your</strong>
          </span>
          <span>
            ”) and Barterfunds (“
          </span>
          <span>
            <strong>Barterfunds</strong>
          </span>
          <span>
            ”, “
          </span>
          <span>
            <strong>we</strong>
          </span>
          <span>
            ”, “
          </span>
          <span>
            <strong>our</strong>
          </span>
          <span>
            ” or “
          </span>
          <span>
            <strong>us</strong>
          </span>
          <span>
            ”). The Terms govern your use of the Barterfunds Services made available
            to you on or through the Platform or otherwise. Barterfunds Services may
            be provided by Barterfunds or, if specified in these Terms, any Product
            Terms or any additional terms, by any Barterfunds Affiliate.
          </span>
        </p>
        <p>
          <span>
            By registering for a Barterfunds Account, accessing the Platform and/or
            using the Barterfunds Services, you agree that you have read, understood
            and accepted these Terms, together with any additional documents or
            terms referred to in these Terms. You acknowledge and agree that you
            will be bound by and will comply with these Terms, as updated and
            amended from time to time.
          </span>
        </p>
        <p>
          <span>
            If you do not understand and accept these Terms in their entirety,
            you should not register for a Barterfunds Account or access or use the
            Platform or any Barterfunds Service.
          </span>
        </p>
        <p>
          <span>
            <strong>RISK WARNING</strong>
          </span>
        </p>
        <p>
          <span>
            <strong>
              As with any asset, the value of Digital Assets can fluctuate
              significantly and there is a material risk of economic loss when
              buying, selling, holding or investing in Digital Assets. You
              should therefore consider whether trading or holding Digital
              Assets is suitable for you in light of your financial
              circumstances.
            </strong>
          </span>
        </p>
        <p>
          <span>
            <strong>
              Further information on the risks associated with using the Barterfunds
              Services is set out in our
            </strong>
          </span>
          <a
            data-bn-type="link"
            href="/risk-warning"
            target="_blank"
            
          >
            <strong />
          </a>
          <a
            data-bn-type="link"
            href="/risk-warning"
            target="_blank"
            
          >
            <strong>&nbsp;Risk Warning</strong>
          </a>
          <span>
            <strong>
              , which may be updated from time to time. You should read the Risk
              Warning carefully, however it does not explain all of the risks
              that may arise, or how such risks relate to your personal
              circumstances.
            </strong>
          </span>
        </p>
        <p>
          <span>
            <strong>
              It is important that you fully understand the risks involved
              before making a decision to use the Barterfunds Services.
            </strong>
          </span>
        </p>
        <p>
          <span>
            We are not your broker, intermediary, agent or advisor and we have
            no fiduciary relationship or obligation to you in connection with
            any Transactions or other activities you undertake when using the
            Barterfunds Services. We do not provide investment or consulting advice
            of any kind and no communication or information that we provide to
            you is intended as, or should be construed as, advice of any
            kind.&nbsp;
          </span>
        </p>
        <p>
          <span>
            It is your responsibility to determine whether any investment,
            investment strategy or related transaction is appropriate for you
            according to your personal investment objectives, financial
            circumstances and risk tolerance and you are responsible for any
            associated loss or liability.{" "}
          </span>
          <span>
            We do not recommend that any Digital Asset should be bought, earned,
            sold or held by you. Before making the decision to buy, sell or hold
            any Digital Asset, you should conduct your own due diligence and
            consult your financial advisor.
          </span>
          <span>
            We are not responsible for the decisions you make to buy, earn, sell
            or hold Digital Assets based on the information provided by us,
            including any losses you incur arising from those decisions.
          </span>
        </p>
        <p>
          <span>
            <strong>INFORMATION ABOUT OUR AGREEMENT WITH YOU</strong>
          </span>
        </p>
        <p>
          <span>
            <strong>1.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Introduction</strong>
          </span>
        </p>
        <p>
          <span>
            1.1.{' '}
          </span>
          <span />
          <span>
            <strong> About us</strong>
          </span>
          <span>
            . The Barterfunds group is an ecosystem centred around an online
            exchange for Digital Assets trading. The Barterfunds group provides
            users with a trading platform to buy and sell Digital Assets, an
            integrated custody solution allowing users to store their Digital
            Assets and other Digital Asset-related services.
          </span>
        </p>
        <p>
          <span>
            1.2.{' '}
          </span>
          <span />
          <span>
            <strong> These Terms</strong>
          </span>
          <span>
            . By registering to open a Barterfunds Account you are entering into a
            legally binding agreement with us. These Terms will govern your use
            of the Barterfunds Services and tell you who we are, how we will provide
            the Barterfunds Services to you, how these Terms may be changed or
            terminated, what to do if there is a problem, along with other
            important information.
          </span>
        </p>
        <p>
          <span>
            You must read these Terms, together with the documents referenced in
            the Terms, carefully and let us know if you do not understand
            anything.
          </span>
        </p>
        <p>
          <span>
            Where any Local Terms apply to your use of the Barterfunds Services,
            such Local Terms shall govern your use of the Barterfunds Services.
          </span>
        </p>
        <p>
          <span>
            1.3.{' '}
          </span>
          <span />
          <span>
            <strong>Additional documents</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;These Terms refer to a number of additional documents which also
            apply to your use of the Barterfunds Services. This includes:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            Our{" "}
          </span>
          <a
            data-bn-type="link"
            href="/privacy-policy"
            target="_blank"
            
          >
            Privacy Notice&nbsp;
          </a>
          <span>
            , which sets out the terms on which we process any personal data we
            collect about you, or that you provide to us. By using the Barterfunds
            Services, you understand and agree to such processing and you
            promise that all data provided by you is accurate and up to
            date.&nbsp;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            Our{" "}
          </span>
          <a
            data-bn-type="link"
            href="/risk-warning"
            target="_blank"
            
          >
            Risk Warning
          </a>
          <span>
            , which sets out important information on the risks that can arise
            when buying, selling, holding or investing in Digital Assets.&nbsp;
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            The{" "}
          </span>
          <a
            data-bn-type="link"
            href="/fees"
            target="_blank"
            
          >
            Fee Structure&nbsp;
          </a>
          <span>
            page on our Website.&nbsp;
          </span>
        </p>
        <p>
          <span>
            d.{" "}
          </span>
          <span />
          <span>
            Product Terms, which set out additional terms and conditions that
            will apply to your use of specific Barterfunds Services.
          </span>
        </p>
        <p>
          <span>
            You acknowledge that you will be bound by, and agree that you will
            comply with, any relevant additional terms and conditions that apply
            to your use of the Barterfunds Services.
          </span>
        </p>
        <p>
          <span>
            <strong>2.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Eligibility</strong>
          </span>
        </p>
        <p>
          <span>
            2.1.{' '}
          </span>
          <span />
          <span>
            <strong>Eligibility criteria</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;To be eligible to register for a Barterfunds Account and use the Barterfunds
            Services, you must:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            be an individual, corporation, legal person, entity or other
            organisation with the full power, authority and capacity to (1)
            access and use the Barterfunds Services; and (2) enter into and comply
            with your obligations under these Terms;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            if you are an individual, be at least 18 years old;
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            if you act as an employee or agent of a legal entity, and enter into
            these Terms on their behalf, you must be duly authorised to act on
            behalf of and bind such legal entity for the purposes of entering
            into these Terms;
          </span>
        </p>
        <p>
          <span>
            d.{" "}
          </span>
          <span />
          <span>
            not have been previously suspended or removed from using Barterfunds
            Services;
          </span>
        </p>
        <p>
          <span>
            e.{" "}
          </span>
          <span />
          <span>
            not be a Restricted Person;&nbsp;
          </span>
        </p>
        <p>
          <span>
            f.{" "}
          </span>
          <span />
          <span>
            not currently have an existing Barterfunds Account; and
          </span>
        </p>
        <p>
          <span>
            g.{" "}
          </span>
          <span />
          <span>
            not be located, incorporated, otherwise established in, or resident
            of, or have business operations in:
          </span>
        </p>
        <p>
          <span>
            i.{" "}
          </span>
          <span />
          <span>
            a jurisdiction where it would be illegal under Applicable Law for
            you to access or use the Barterfunds Services, or cause us or any third
            party to contravene any Applicable Law; or
          </span>
        </p>
        <p>
          <span>
            ii.{" "}
          </span>
          <span />
          <span>
            a country listed in our{" "}
          </span>
          <a
            data-bn-type="link"
            href="/legal/list-of-prohibited-countries"
            target="_blank"
            
          >
            List of Prohibited Countries
          </a>
          <span>
            .
          </span>
        </p>
        <p>
          <span>
            2.2.{' '}
          </span>
          <span />
          <span>
            <strong>Amending our eligibility criteria</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;We may amend our eligibility criteria at any time in our sole
            discretion. Where possible, we will give you notice in advance of
            the change. However, we may occasionally need to make changes
            without telling you in advance. This may include where:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            we are making the change as a result of legal and/or regulatory
            changes;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            the changes being made are in your interest; and/or
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            there is any other valid reason which means there is no time to give
            you notice.&nbsp;
          </span>
        </p>
        <p>
          <span>
            Where we are unable to give you advance notice, we will let you know
            of the change as soon as possible after it is made.
          </span>
        </p>
        <p>
          <span>
            <strong>3.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>How we contact each other</strong>
          </span>
        </p>
        <p>
          <span>
            3.1.{' '}
          </span>
          <span />
          <span>
            <strong>How you can contact us</strong>
          </span>
          <span>
            . For more information on Barterfunds, you may refer to the information
            found on our Website. If you have questions, feedback or complaints
            you can contact us via our Customer Support team at{" "}
          </span>
          <a
            data-bn-type="link"
            href="/support"
            target="_blank"
            
          >
            Support
          </a>
          <span>
            . These Terms may specify contact details for particular notices.
            This address is not monitored for those notices.
          </span>
        </p>
        <p>
          <span>
            3.2.{' '}
          </span>
          <span />
          <span>
            <strong>How we will contact you</strong>
          </span>
          <span>
            . We will contact you using the details you provide to us. This may
            include contacting you by email, SMS or telephone. It is important
            that you ensure that your contact details are correct and up to
            date. If your contact details change, you must let us know
            immediately. If you do not, we will not be responsible if you do not
            receive information, notices or other important information from
            us.&nbsp;
          </span>
        </p>
        <p>
          <span>
            <strong>4.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Barterfunds Services</strong>
          </span>
        </p>
        <p>
          <span>
            4.1.{' '}
          </span>
          <span />
          <span>
            <strong>Specific product terms</strong>
          </span>
          <span>
            . Once you have opened a Barterfunds Account, you will be able to use
            the Barterfunds Services in accordance with these Terms and the Product
            Terms that govern your use of each specific Barterfunds Service.
          </span>
        </p>
        <p>
          <span>
            4.2.{' '}
          </span>
          <span />
          <span>
            <strong>Intra-group services</strong>
          </span>
          <span>
            . You acknowledge and agree that some of the Barterfunds Services may be
            provided by Barterfunds Affiliates.&nbsp;
          </span>
        </p>
        <p>
          <span>
            <strong>5.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Chat Service</strong>
          </span>
        </p>
        <p>
          <span>
            5.1.{' '}
          </span>
          <span />
          <span>
            <strong>Availability of Chat Service</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;We may make our interactive online chat service available to you (“
          </span>
          <span>
            <strong>Chat Service</strong>
          </span>
          <span>
            ”) at any time in connection with your use of any of the Barterfunds
            Services. By using the Chat Service, you may interact with a bot,
            chatbot, or other non-human. We will disclose the use of a chatbot,
            or other non-human, to the extent required by Applicable Law. When
            engaging with us through use of the Chat Service, you authorise us
            to monitor and save your chats.
          </span>
        </p>
        <p>
          <span>
            5.2.{' '}
          </span>
          <span />
          <span>
            <strong>Important information</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;The Chat Service is provided as a convenience, often to facilitate
            your understanding of the Barterfunds Services. Our Chat Service will
            make reasonable efforts to provide you with accurate and current
            information based on your question or need. Nothing we communicate
            in the Chat Service will be considered a legal agreement,
            representation or warranty as to the Barterfunds Services, processes,
            decisions, or response times. Any personal data shared with us when
            using the Chat Service will be subject to the applicable
            privacy-related policies and notices described in our{" "}
          </span>
          <a
            data-bn-type="link"
            href="/privacy-policy"
            target="_blank"
            
          >
            Privacy Notice&nbsp;
          </a>
          <span>
            .
          </span>
        </p>
        <p>
          <span>
            5.3.{' '}
          </span>
          <span />
          <span>
            <strong>User Chats</strong>
          </span>
          <span>
            . In addition, we may make available to you chats that allow you to
            interact directly with other users of the Platform (“
          </span>
          <span>
            <strong>User Chat</strong>
          </span>
          <span>
            ”).
          </span>
        </p>
        <p>
          <span>
            5.4.{' '}
          </span>
          <span />
          <span>
            <strong>Prohibited actions</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;You must not use the Chat Service or any User Chat to send any
            abusive, defamatory, dishonest, or obscene message or any messages
            intended to manipulate a market or to spread false or misleading
            information or messages that are otherwise in contravention of
            Applicable Laws, and doing so may result in termination of the Chat
            Service session and may lead to restrictions on the availability of
            Barterfunds Services to you.
          </span>
        </p>
        <p>
          <span>
            <strong>6.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Fees and calculations</strong>
          </span>
        </p>
        <p>
          <span>
            6.1.{' '}
          </span>
          <span />
          <span>
            <strong>Payment of fees</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;You agree to pay all applicable fees in connection with your use of
            the Barterfunds Services as set out on the{" "}
          </span>
          <a
            data-bn-type="link"
            href="/fees"
            target="_blank"
            
          >
            Fees&nbsp;
          </a>
          <span>
            page on our Website, or otherwise communicated to you in any
            relevant Product Terms.
          </span>
        </p>
        <p>
          <span>
            You authorise us to deduct all applicable fees, commissions,
            interest, charges and other sums that you owe from your Barterfunds
            Account under these Terms or any Product Terms in accordance with
            the method of calculation set out on our{" "}
          </span>
          <a
            data-bn-type="link"
            href="/fees"
            target="_blank"
            
          >
            Fee Structure&nbsp;
          </a>
          <span>
            page. If you owe us an amount in one Digital Asset and do not have
            sufficient assets in that Digital Asset, we may deduct the sums owed
            in another Digital Asset to effect payment (in which case we will
            convert the Digital Asset you hold into the Digital Asset in which
            the sums owed to us are denominated (or the Fiat Currency
            equivalent), at the rate currently offered on the Platform or at
            such other commercially reasonable rate as we may determine). In the
            event that there are insufficient Digital Assets in your Barterfunds
            Account, you acknowledge that any amount due and payable from you
            under this clause is a debt immediately due and owing by you to us
            in such amount and form (whether in the form of a Digital Asset or
            otherwise) as we may determine, acting in a commercially reasonable
            manner.
          </span>
        </p>
        <p>
          <span>
            6.2.{' '}
          </span>
          <span />
          <span>
            <strong>Amending our fees</strong>
          </span>
          <span>
            . We may adjust our fees from time to time in accordance with clause
            ‎18.3 of these Terms.
          </span>
        </p>
        <p>
          <span>
            6.3.{' '}
          </span>
          <span />
          <span>
            <strong>Calculations: Any</strong>
          </span>
          <span>
          &nbsp;calculations made by Barterfunds in connection with the Barterfunds Services
            are final and binding on you in the absence of Manifest Error.
            Calculations will be made in accordance with the stated methodology
            for the relevant Barterfunds Service in our&nbsp; good faith
            discretion.&nbsp;
          </span>
        </p>
        <p>
          <span>
            <strong>INFORMATION ABOUT YOUR Barterfunds ACCOUNT</strong>
          </span>
        </p>
        <p>
          <span>
            <strong>7.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Creating a Barterfunds Account</strong>
          </span>
        </p>
        <p>
          <span>
            7.1.{' '}
          </span>
          <span />
          <span>
            <strong>Account opening</strong>
          </span>
          <span>
            . You must create and maintain a Barterfunds Account in order to access
            the Barterfunds Services and the Platform. This may be a Barterfunds Account
            for an individual user, or a Corporate Barterfunds Account where the
            user is a corporation, entity or other organisation.
          </span>
        </p>
        <p>
          <span>
            All Barterfunds Accounts are provided at our absolute discretion. We
            reserve the right to refuse any application for a Barterfunds Account
            without reason or to limit the number of Barterfunds Accounts that you
            may hold.&nbsp;
          </span>
        </p>
        <p>
          <span>
            7.2.{' '}
          </span>
          <span />
          <span>
            <strong>Sole benefit</strong>
          </span>
          <span>
            . By opening a Barterfunds Account you agree that:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            where you are an individual user, you will use your Barterfunds Account
            only for yourself, and not on behalf of any third party, unless you
            have obtained our prior written consent to do so; and
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            where you are a corporate user, your Permitted Users will use the
            Corporate Barterfunds Account only for your benefit, and not on behalf
            of any third party, unless our prior written consent has been
            obtained. Additionally, you will not offer direct market access to
            the Platform to any other party, including through the use of a
            sub-account, unless and until such other party has completed
            identity verification deemed appropriate by Barterfunds and has
            separately onboarded onto the Platform. Any other party so verified
            shall be considered a “Permitted User” as that term is described
            herein. For avoidance of doubt, any entity or individual using a
            Barterfunds Sub-Account must be separately verified to be considered a
            “Permitted User” and to be permitted to use the Barterfunds Services.
          </span>
        </p>
        <p>
          <span>
            You are fully responsible for all activity that occurs under your
            Barterfunds Account.
          </span>
        </p>
        <p>
          <span>
            7.3.{' '}
          </span>
          <span />
          <span>
            <strong>Identity verification</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
            You will need to comply with our identity verification procedures
            before you are permitted to open a Barterfunds Account and access and
            use the Barterfunds Services, whether independently or through a
            third-party service, by providing us with certain information about
            yourself and, where relevant, all of your Permitted Users. All
            information that you provide must be complete, accurate and
            truthful. You must update this information whenever it
            changes.&nbsp;
          </span>
        </p>
        <p>
          <span>
            You authorise us to make inquiries, whether directly or through
            third parties, that we consider necessary to verify your identity,
            and that of any Permitted Users, or protect you and/or us against
            fraud, money laundering, terrorist financing or other financial
            crime, and to take any action we deem necessary based on the results
            of such inquiries.
          </span>
        </p>
        <p>
          <span>
            When we carry out inquiries, you acknowledge and understand that
            your personal data, and that of any Permitted Users, may be
            disclosed to identity verification, compliance data recordation,
            credit reference, fraud prevention, or financial crime agencies and
            that these agencies may respond to our inquiries in full.
          </span>
          <br />
          <br />
          <span>
            You can review our Privacy Notice to have more information about how
            we process your{' '} 
          </span>
          <a
            data-bn-type="link"
            href="/privacy-policy"
            target="_blank"
            
          >
            personal data
          </a>
          <span>
            .&nbsp;
          </span>
        </p>
        <p>
          <span>
            7.4.{' '}
          </span>
          <span />
          <span>
            <strong>Enhanced due diligence</strong>
          </span>
          <span>
            . We may also require you to comply with our enhanced due diligence
            procedures by submitting additional information about yourself, your
            business or your Permitted Users, providing additional records or
            documentation, or having face to face meetings with representatives
            of Barterfunds.
          </span>
        </p>
        <p>
          <span>
            7.5.{' '}
          </span>
          <span />
          <span>
            <strong>Records</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;We keep your personal data to enable your continued use of Barterfunds
            Services, for as long as it is required in order to fulfil the
            relevant purposes described in this Privacy Notice, and as may be
            required by law such as for tax and accounting purposes, compliance
            with anti-money laundering laws, or as otherwise communicated to
            you. Please review our{" "}
          </span>
          <a
            data-bn-type="link"
            href="/privacy-policy"
            target="_blank"
            
          >
            Privacy Notice{''}
          </a>
          <span>
          &nbsp;for more information on how we collect and use your personal data
            relating to the use and performance of our Sites and the Barterfunds
            Services.
          </span>
        </p>
        <p>
          <span>
            7.6.{' '}
          </span>
          <span />
          <span>
            <strong>Sub-Accounts</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;At our discretion, you may create and access a Barterfunds Sub-Account.
            Each natural person associated with a Barterfunds Sub-Account is subject
            to the identity verification requirements set out in this clause ‎7.
            Only one natural person or corporate entity may be associated with a
            particular Barterfunds Sub-Account.&nbsp;
          </span>
        </p>
        <p>
          <span>
            <strong>8.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Information requests</strong>
          </span>
        </p>
        <p>
          <span>
            8.1.{' '}
          </span>
          <span />
          <span>
            <strong>When we may request information</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;We may require information from you at any time for the purposes of
            complying with any Applicable Law, identity verification
            requirements, or in connection with the detection of money
            laundering, terrorist financing, fraud, or any other financial
            crime, or for any other valid reason. You agree to provide us with
            any such information we request and permit us to keep a record of
            the information for the lifetime of your Barterfunds Account as long as
            it is required to fulfil their intended purposes, or such other
            period as prescribed by Applicable Law.&nbsp;
          </span>
        </p>
        <p>
          <span>
            8.2.{' '}
          </span>
          <span />
          <span>
            <strong>What happens when you provide information</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;Your access to your Barterfunds Account and the Transaction limits that
            apply to your use of the Barterfunds Services may be altered as a result
            of information collected about you on an ongoing basis. If there is
            a reasonable suspicion that any information provided by you is
            wrong, untruthful, outdated, or incomplete, we may send you a notice
            to request corrections, remove relevant information, or do such
            other things that we consider necessary to ensure that the
            information provided by you is true and correct.
          </span>
        </p>
        <p>
          <span>
            8.3.{' '}
          </span>
          <span />
          <span>
            <strong>If you fail to provide any requested information</strong>
          </span>
          <span>
            . You must comply with any information request we send to you. If
            you decline to provide the requested information, or otherwise do
            not comply in a timely manner, we reserve the right to suspend or
            terminate your access to your Barterfunds Account, or to all or part of
            the Barterfunds Services immediately, without notice.
          </span>
        </p>
        <p>
          <span>
            <strong>9.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Accessing your Barterfunds Account</strong>
          </span>
        </p>
        <p>
          <span>
            9.1.{' '}
          </span>
          <span />
          <span>
            <strong>Access</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;To access your Barterfunds Account you or, where relevant, your
            Permitted Users, must have the necessary equipment (such as a
            computer or smartphone) and access to the internet. Your Barterfunds
            Account can be accessed directly using the Platform or by such other
            mode of access (including APIs) as we may prescribe. You are only
            permitted to access your Barterfunds Account by using the Access IDs we
            provide to you or your Permitted Users for such purposes. We may
            require multi-factor authentication to keep your Barterfunds Account
            safe and secure.
          </span>
        </p>
        <p>
          <span>
            The use of the Platform and other access methods may be subject to
            such additional terms as we communicate to you.&nbsp;
          </span>
        </p>
        <p>
          <span>
            9.2.{' '}
          </span>
          <span />
          <span>
            <strong>Restricting access to third parties</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;You must ensure that any Barterfunds Account(s) registered under your
            name will not be used by any person other than yourself or, with
            respect to Corporate Barterfunds Accounts, your Permitted Users, other
            than in accordance with these Terms.
          </span>
        </p>
        <p>
          <span>
            <strong>10.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Account information and Transaction records</strong>
          </span>
        </p>
        <p>
          <span>
            10.1.{' '}
          </span>
          <span />
          <span>
            <strong>Your Account History</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;You will be able to access your Account History on the Platform. You
            must review your Account History carefully and let us know if you
            see any entries or Transactions that you do not recognise or you
            think are incorrect within fourteen (14) calendar days of the date
            that your Account History is provided or made available to
            you.&nbsp;
          </span>
        </p>
        <p>
          <span>
            10.2.{' '}
          </span>
          <span />
          <span>
            <strong>Errors</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;We may rectify any error in your Account History at any time, and
            reserve the right to void, cancel or reverse any Transaction
            involving or deriving from a Manifest Error or to amend the details
            of such Transaction to reflect what we reasonably consider to be the
            correct or fair details of such a Transaction.&nbsp;
          </span>
        </p>
        <p>
          <span>
            You acknowledge and agree that where you execute any Transaction
            with Improper Intent and/or in the case of Manifest Error, Barterfunds
            is authorised by you (without any payment or penalty or liability
            due by Barterfunds and provided that such action is in compliance with
            Applicable Law) to either:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            cancel/void such Transaction and treat such Transaction as if they
            had never been entered into; or
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            amend the price(s) of such Transaction (upon notice from Barterfunds to
            you of the amended price(s)) to reflect the prevailing market
            price(s) as at the relevant time, as determined by Barterfunds by
            reference to an available source for fair market pricing;&nbsp;
          </span>
        </p>
        <p>
          <span>
            If Barterfunds cancels a Transaction pursuant to the rights referred
            herein, Barterfunds will reverse any transfers of Digital Assets that
            have been made to and/or from your Barterfunds Account in connection
            with such Transaction as if that Transaction had never taken place.
          </span>
        </p>
        <p>
          <span>
            If Barterfunds amends a Transaction pursuant to the rights referred
            herein, Barterfunds will confirm the details of the amended terms of the
            Transaction to you through an agreed communication channel and will
            affect such transfers of Digital Assets to and/or from your Barterfunds
            Account as are required to reflect the terms of the amended
            Transaction.
          </span>
        </p>
        <p>
          <span>
            You acknowledge and agree that you shall be solely responsible for
            your own transactions with any third parties that may have been
            entered into in connection with or reliance on any Transaction(s)
            that may be subject to any cancellation/amendment pursuant to
            Barterfunds’s rights herein.
          </span>
        </p>
        <p>
          <span>
            10.3.{' '}
          </span>
          <span />
          <span>
            <strong>Information sharing</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;We may be required under these Terms or Applicable Law to share
            information about your Barterfunds Account and Account History with
            third parties and Barterfunds Affiliates. You acknowledge and agree that
            we are entitled to disclose such information. For more information
            about how we process your personal data you can review our{" "}
          </span>
          <a
            data-bn-type="link"
            href="/privacy-policy"
            target="_blank"
            
          >
            Privacy Notice{''}
          </a>
          <span>
            .&nbsp;
          </span>
        </p>
        <p>
          <span>
            <strong>USING YOUR ACCOUNT</strong>
          </span>
        </p>
        <p>
          <span>
            <strong>11.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Instructions</strong>
          </span>
        </p>
        <p>
          <span>
            11.1.{' '}
          </span>
          <span />
          <span>
            <strong>Giving Instructions</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;You must ensure that any Instruction submitted is complete and
            accurate. We are not required to verify the accuracy, authenticity
            or validity of any Instruction and will not monitor or reject
            Instructions on the basis that they are, or appear to be,
            duplicates. However, if we are in doubt as to the accuracy,
            authenticity or validity of an Instruction, we may refuse to act
            upon or defer acting upon any Instruction, or seek further
            information with respect to the Instruction.
          </span>
        </p>
        <p>
          <span>
            Instructions are irrevocable and therefore once an Instruction has
            been submitted you, or your Permitted Users, have no right to
            rescind or withdraw it without our written consent. Your Instruction
            is not deemed to be received by us until it has been received by our
            server. Our record of all Instructions will be conclusive and
            binding on you for all purposes.
          </span>
        </p>
        <p>
          <span>
            11.2.{' '}
          </span>
          <span />
          <span>
            <strong>Acting on your Instructions</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;By submitting an Instruction you or your Permitted Users are
            authorising us to initiate the Transaction on your Barterfunds Account.
            We are therefore authorised to credit or debit (or provide
            settlement information to third parties for the purposes of the
            third party crediting or debiting) your Digital Assets from your
            Barterfunds Account in accordance with your Instruction. If you have
            insufficient Digital Assets or Fiat Currency in your Barterfunds Account
            to effect the Transaction (i.e. less than the required amount to
            settle the Transaction and to pay all the fees associated with the
            Transaction), then we have the right to refuse to effect any
            Transaction. Barterfunds may also refuse to act on instructions to the
            extent permitted by these Terms. It is your responsibility to hold
            sufficient Digital Assets or Fiat Currency credited in your Barterfunds
            Account.
          </span>
        </p>
        <p>
          <span>
            11.3.{' '}
          </span>
          <span />
          <span>
            <strong>Protection of Instructions</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;You are aware that Instructions and information transmitted on the
            Platform or by email are generally transmitted via the internet and
            may be routed via public, transnational installations which are not
            specifically protected. We cannot guarantee that the Instructions
            and information transmitted will be completely protected against
            unauthorised access, and you accept the associated risks.
          </span>
        </p>
        <p>
          <span>
            11.4.{' '}
          </span>
          <span />
          <span>
            <strong>Withdrawals</strong>
          </span>
          <span>
            . Subject to these Terms and any applicable Product Terms, and
            provided that you have sufficient balance on your Barterfunds Account
            and the relevant Digital Assets are not on hold in your Barterfunds
            Account in connection with any Barterfunds Service, you may give
            Instructions to Barterfunds to transfer Digital Assets to an external
            wallet address by submitting a withdrawal request on the Platform.
            Upon receipt of the withdrawal request, Barterfunds will: (i) deduct
            your Barterfunds Account balance; and (ii) initiate an on-chain transfer
            to an external wallet designated by you. Barterfunds may not process a
            withdrawal request if, in our reasonable opinion, we consider that
            Applicable Law prevents the execution of the relevant withdrawal.
            Barterfunds may also suspend withdrawals at such time deemed appropriate
            by Barterfunds to resolve any incidents on the Platform. Once such
            incidents have been resolved, Barterfunds will resume withdrawals.
          </span>
        </p>
        <p>
          <span>
            <strong>12.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Transactions</strong>
          </span>
        </p>
        <p>
          <span>
            12.1.{' '}
          </span>
          <span />
          <span>
            <strong>Entering into Transactions</strong>
          </span>
          <span>
            . You may enter into Transactions directly with us, or directly with
            other users, which may or may not be facilitated by us.&nbsp;
          </span>
        </p>
        <p>
          <span>
            We do not represent or warrant that any Transaction will be
            completed successfully or within a specific time period.&nbsp;
          </span>
        </p>
        <p>
          <span>
            12.2.{' '}
          </span>
          <span />
          <span>
            <strong>Unauthorised Transactions</strong>
          </span>
          <span>
            . You are responsible for the control and use of your Barterfunds
            Account. As such, we will assume that you, or a Permitted User, have
            authorised any Instruction sent from your Barterfunds Account unless we
            are notified otherwise. It is important that you monitor your
            Account History to ensure any unauthorised or suspicious activity on
            your Barterfunds Account is identified and notified to us as soon as
            possible. We are not responsible for any claim or losses resulting
            from a Transaction executed as a result of an unauthorised
            Instruction unless you have notified us in accordance with this
            clause and it is confirmed by our internal investigation that you,
            or a Permitted User, have not authorised the Instruction in any way,
            even by mistake, negligence, error or as a consequence of a fraud
            and it is proven that the unauthorized Instruction is solely due to
            a technical issue attributable to Barterfunds.
          </span>
        </p>
        <p>
          <span>
            12.3.{' '}
          </span>
          <span />
          <span>
            <strong>Retention of Transaction information</strong>
          </span>
          <span>
            . To facilitate compliance with global industry standards for data
            retention, you agree to permit us (but agree to not require us) to
            keep a record of all Transaction information for the lifetime of
            your Barterfunds Account as long as it is required to fulfil their
            intended purposes, or such other period as prescribed by Applicable
            Law. Please review our{" "}
          </span>
          <a
            data-bn-type="link"
            href="/privacy-policy"
            target="_blank"
            
          >
            Privacy Notice{" "}
          </a>
          <span>
            for more information on how we collect and use data relating to the
            use and performance of our Sites and the Barterfunds Services.
          </span>
        </p>
        <p>
          <span>
            <strong>13.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Material interests and conflicts</strong>
          </span>
        </p>
        <p>
          <span>
            13.1.{' '}
          </span>
          <span />
          <span>
            <strong>Barterfunds group</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
            You understand that Barterfunds is a member of a group of companies
            which is involved in activities connected with Digital Assets.
          </span>
        </p>
        <p>
          <span>
            13.2.{' '}
          </span>
          <span />
          <span>
            <strong>Nature of our duties</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
            You understand and agree that neither your relationship with us nor
            any Barterfunds Service we provide to you, nor any other matter, will
            give rise to any duties on our part or on the part of any Barterfunds
            Affiliate, whether legal, equitable, fiduciary in nature, save as
            are expressly set out in these terms. In particular, we and any
            Barterfunds Affiliate may from time to time act in more than one
            capacity, and in those capacities we may receive fees or commissions
            from more than one user (including you). You agree that we may act
            in such capacities and provide any other Barterfunds Services or carry
            out any business with or for you, any Barterfunds Affiliate or any other
            user.
          </span>
        </p>
        <p>
          <span>
            13.3.{' '}
          </span>
          <span />
          <span>
            <strong>Material interests</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;You understand and agree that neither we nor any Barterfunds Affiliate
            will be required to: (1) have regard to any information known to us,
            or to any Barterfunds Affiliate, which is a material interest; (2)
            disclose any such information to you; or (3) use any such
            information for your benefit. You further acknowledge that from time
            to time we may receive general market information in the course of
            providing Barterfunds Services to you, which we may use in the ordinary
            course of our business.
          </span>
        </p>
        <p>
          <span>
            13.4.{' '}
          </span>
          <span />
          <span>
            <strong>Conflicts of interest</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;We have established and maintain effective organisational and
            administrative arrangements with a view to taking all appropriate
            steps to identify and manage conflicts of interest between us and
            our users and relevant third parties, so as to prevent conflicts of
            interest from adversely affecting the interests of our users. In
            cases where such organisational and administrative arrangements are
            not sufficient to ensure that the risks of damage to your interests
            will be prevented, we will inform you of the nature and/or sources
            of the relevant conflicts of interest and the steps taken to
            mitigate those risks in order to allow you to make an informed
            decision as to whether to continue to transact with us. We reserve
            the right at all times to decline to act for you where we are not
            able to manage a conflict of interest in any other way.&nbsp;
          </span>
        </p>
        <p>
          <span>
            <strong>14.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Transaction limits&nbsp;</strong>
          </span>
        </p>
        <p>
          <span>
            14.1.{' '}
          </span>
          <span />
          <span>
            <strong>Your Transaction limits</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;Your Barterfunds Account may be subject to a limit on:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            the amount or volume of Transactions you may undertake in connection
            with your Barterfunds Account; and/or
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            the amount or value of Fiat Currency or Digital Assets you may
            transfer into or out of your Barterfunds Account,&nbsp;
          </span>
        </p>
        <p>
          <span>
            in each case in a given period (e.g. daily). Any applicable limits
            are shown in your Barterfunds Account.&nbsp;
          </span>
        </p>
        <p>
          <span>
            14.2.{' '}
          </span>
          <span />
          <span>
            <strong>Changes to your Transaction limits</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;We reserve the right to change any Transaction limit that applies to
            your Barterfunds Account at any time at our absolute discretion. It may
            also be possible for you to request a change in your limits. Any
            change will be made in our absolute discretion and will be subject
            to any further conditions that we deem necessary.&nbsp;
          </span>
        </p>
        <p>
          <span>
            <strong>15.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Supported Digital Assets</strong>
          </span>
        </p>
        <p>
          <span>
            15.1.{' '}
          </span>
          <span />
          <span>
            <strong>Supported Digital Assets</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;The Barterfunds Services are only available in connection with Supported
            Digital Assets, which may change from time to time. A list of the
            Supported Digital Assets is published on our Website. We may remove
            or suspend one or more Digital Assets from the list of Supported
            Digital Assets and we will use reasonable commercial efforts to
            notify you in advance, meaning that you will no longer be able to
            access such Digital Assets as part of the Barterfunds Services and will
            only be permitted to withdraw the Digital Assets from your Barterfunds
            Account. If Digital Assets that are no longer Supported Digital
            Assets remain in your Barterfunds Account beyond a specified period
            notified to you, Barterfunds may in its reasonable discretion convert
            such Digital Assets into a different type of Digital Asset that is a
            stablecoin. Barterfunds shall notify you in advance of any conversion
            and you may withdraw such Digital Assets within a reasonable period
            as specified by Barterfunds to you, prior to their conversion into
            stablecoins.&nbsp;
          </span>
        </p>
        <p>
          <span>
            We assume no liability in connection with any attempt to use your
            Barterfunds Account for Digital Assets that we do not support nor for
            the conversion to a different type of Digital Asset, as described in
            this clause. In addition we assume no liability or obligation
            whatsoever with regard to unsupported Digital Assets sent to a
            Barterfunds Account or with regard to Supported Digital Assets sent to
            an incompatible Digital Asset wallet address. If you send
            unsupported Digital Assets to a Barterfunds Account or Supported Digital
            Assets to an incompatible Digital Asset wallet address, then you
            will lose those Digital Assets. For some lost Digital Assets,
            Barterfunds may in its sole discretion offer you the option to attempt a
            recovery. We may charge fees to process the recovery attempt on your
            behalf. We will calculate all fees at our discretion, and notify you
            of the applicable fees at or before the time you authorize the
            recovery attempt. Barterfunds does not guarantee in any way the amount
            of assets (if any) that may be recovered in a recovery attempt. The
            actual amount recovered may differ from the estimated recovery
            amount. Barterfunds does not evaluate or provide any assurance as to the
            authenticity, safety, or security of unsupported Digital Assets. You
            acknowledge and agree that Barterfunds is not liable for any loss
            incurred during the recovery attempt or subsequent use of the
            recovered Digital Asset.
          </span>
        </p>
        <p>
          <span>
            15.2.{' '}
          </span>
          <span />
          <span>
            <strong>Forks</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;We may temporarily suspend any Barterfunds Services in relation to a
            particular Digital Asset while we determine whether or not to
            support a Fork. We are under no obligation to support a Fork of a
            Digital Asset that you hold in your Barterfunds Account, regardless of
            whether any resulting version of such Forked Digital Asset is a
            Dominant Digital Asset or not. If we elect to support a Fork of a
            Digital Asset, we will make a public announcement through our
            Website or by such other means as we may deem appropriate.
          </span>
        </p>
        <p>
          <span>
            You acknowledge that we have no control over, nor do we have the
            ability to influence, the creation or implementation of a Fork. We
            can provide no assurances about the security, functionality or
            supply of any Digital Asset, including both the new Dominant Digital
            Asset or other Digital Assets subject to the relevant Fork. You may
            not be able to trade the Forked Digital Assets on the Platform and
            you may lose any value associated with the relevant Digital Assets.
          </span>
        </p>
        <p>
          <span>
            15.3.{' '}
          </span>
          <span />
          <span>
            Forks and Airdrops.&nbsp; Barterfunds makes no promises, guarantees or
            warranties on the outcome of or support for potential or proposed
            Forks, Forked Digital Assets or Airdrops. Barterfunds may determine in
            its sole discretion whether to claim, list or distribute any
            Airdrop, Forked Digital Asset or any other Digital Asset, as well as
            the terms and conditions (including eligibility criteria) that will
            apply to any claim, listing or distribution of any Airdrop or Forked
            Digital Asset. If you wish to participate in a Fork or Airdrop,
            please withdraw the affected Digital Asset to your own private
            wallet well ahead of the potential or proposed Fork or Airdrop.
          </span>
        </p>
        <p>
          <span>
            15.4.{' '}
          </span>
          <span />
          <span>
            <strong>Backed Digital Assets</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;We may from time to time support Digital Assets that purport to be
            backed by or otherwise tied or pegged in value to another asset,
            including without limitation Digital Assets, Fiat Currency or
            commodities such as silver or gold (“
          </span>
          <span>
            <strong>Backed Digital Assets</strong>
          </span>
          <span>
            ”). You acknowledge and agree that (a) you have read, understood and
            accepted all of the terms and conditions and risks associated with
            each particular Backed Digital Asset before entering into any
            Transaction relating to that Backed Digital Asset and (b) Barterfunds
            does not and will not in any circumstances have any no obligation
            whatsoever to purchase, repurchase or effect or facilitate the
            redemption of your Backed Digital Assets. We reserve the right to
            change, suspend, or discontinue any service in relation to any
            Backed Digital Asset at any time in our sole discretion. We make no
            representation as to whether any particular Backed Digital Asset
            will hold its value as against any asset, nor as to the amount or
            quality of reserves or collateral held by each issuer or any third
            party in relation to any Backed Digital Asset.
          </span>
        </p>
        <p>
          <span>
            <strong>16.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Account security</strong>
          </span>
        </p>
        <p>
          <span>
            16.1.{' '}
          </span>
          <span />
          <span>
            <strong>Your responsibility</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;You are responsible for taking appropriate action to protect your
            hardware and data from viruses and malicious software, and any
            inappropriate material. Except as provided by Applicable Law, you
            are responsible for backing up and maintaining duplicate copies of
            any information you store or transfer through the Barterfunds Services.
            We are not responsible for any claim or losses resulting from your
            failure to comply with this clause.
          </span>
        </p>
        <p>
          <span>
            16.2.{' '}
          </span>
          <span />
          <span>
            <strong>Security measures</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;At all times, you and any Permitted Users shall maintain adequate
            security and control of all of your Access IDs. You are responsible
            for taking the necessary security measures (or ensuring that your
            Permitted Users take such measures) to protect your Barterfunds Account
            and to keep your Access ID secure, including by:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            strictly abiding by all of our mechanisms or procedures;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            creating a strong password and maintaining security and control of
            your Access IDs;
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            keeping the Email Account and telephone number provided to us up to
            date in order to receive any notices or alerts that we may send you;
          </span>
        </p>
        <p>
          <span>
            d.{" "}
          </span>
          <span />
          <span>
            never allowing remote access or sharing your computer and/or
            computer screen with someone else when you are logged on to your
            Barterfunds Account;
          </span>
        </p>
        <p>
          <span>
            e.{" "}
          </span>
          <span />
          <span>
            remembering that under no circumstances will we ask you to share
            your passwords or 2-factor authentication codes; and
          </span>
        </p>
        <p>
          <span>
            f.{" "}
          </span>
          <span />
          <span>
            logging out from the Sites or the Platform at the end of each visit.
          </span>
        </p>
        <p>
          <span>
            You must keep the Email Account and Access IDs secure against any
            attacks and unauthorised access. You must notify us immediately if
            you have knowledge or have reason for suspecting that the security
            of your Email Account, or that of a Permitted User, has been
            compromised or if there has been any unauthorised use of your or any
            Permitted User’s Email Account.&nbsp;
          </span>
        </p>
        <p>
          <span>
            16.3.{' '}
          </span>
          <span />
          <span>
            <strong>Monitoring your Account History</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;It is important that you monitor your Account History to ensure any
            unauthorised or suspicious activity on your Barterfunds Account is
            identified and notified to us as soon as possible. You acknowledge
            that any Security Breach may result in unauthorised access to your
            Barterfunds Account by third parties and the loss or theft of any
            Digital Assets and/or funds held in your Barterfunds Account and any
            associated accounts, including your linked bank account(s) and
            credit card(s).
          </span>
        </p>
        <p>
          <span>
            16.4.{' '}
          </span>
          <span />
          <span>
            <strong>If you suspect a Security Breach</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;If you suspect a Security Breach, you must ensure that:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            we are notified immediately using the details set out in clause ‎3.1
            and continue to be provided with accurate and up to date information
            throughout the duration of the Security Breach;&nbsp;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            your Barterfunds Account is immediately locked via the disable account
            function on the Platform or via any other method as may be
            prescribed by us from time to time; and
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            you take any other steps that we may reasonably require to reduce,
            manage or report any Security Breach.&nbsp;
          </span>
        </p>
        <p>
          <span>
            We reserve the right to request, and you agree to promptly provide,
            any and all information and documents we deem relevant or necessary
            in connection with an actual or suspected Security Breach.&nbsp; You
            further acknowledge and agree that we may provide such information
            to any third party that we deem necessary in order to investiage or
            resolve any Security Breach.&nbsp;
          </span>
        </p>
        <p>
          <span>
            <strong>OTHER IMPORTANT INFORMATION</strong>
          </span>
        </p>
        <p>
          <span>
            <strong>17.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Privacy</strong>
          </span>
        </p>
        <p>
          <span>
            17.1.{' '}
          </span>
          <span />
          <span>
            <strong>The Privacy Notice</strong>
          </span>
          <span>
            . Our collection and use of personal data in connection with these
            Terms, the Barterfunds Services, the Platform and any Site is as
            provided in our{" "}
          </span>
          <a
            data-bn-type="link"
            href="/privacy-policy"
            target="_blank"
            
          >
            Privacy Notice&nbsp;
          </a>
          <span>
            (as updated from time to time). You acknowledge that we may process
            personal data in relation to you, that you have provided to us, or
            we have collected from you in connection with these Terms and in
            accordance with Privacy Notice. Your personal data will be processed
            in accordance with the Privacy Notice, which shall form part of
            these Terms.&nbsp;
          </span>
        </p>
        <p>
          <span>
            You represent and warrant that:&nbsp;
          </span>
        </p>
        <p>
          <br />
          <span>
            a. you acknowledge that you have read and understood our{" "}
          </span>
          <a
            data-bn-type="link"
            href="/privacy-policy"
            target="_blank"
            
          >
            Privacy Notice{''}
          </a>
          <span>
            .&nbsp;
          </span>
        </p>
        <p>
          <span>
            b. our business changes regularly and our{" "}
          </span>
          <a
            data-bn-type="link"
            href="/privacy-policy"
            target="_blank"
            
          >
            Privacy Notice&nbsp;
          </a>
          <span>
            will change also. Therefore, if from time to time we provide you
            with a replacement version of the{" "}
          </span>
          <a
            data-bn-type="link"
            href="/privacy-policy"
            target="_blank"
            
          >
            Privacy Notice{''}
          </a>
          <span>
            , you will promptly read the{" "}
          </span>
          <a
            data-bn-type="link"
            href="/privacy-policy"
            target="_blank"
            
          >
            Privacy Notice{''}
          </a>
          <span>
            .&nbsp; &nbsp;
          </span>
        </p>
        <p>
          <span>
            <strong>18.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Changes to the Terms, etc.{' '}</strong>
          </span>
        </p>
        <p>
          <span>
            18.1.{' '}
          </span>
          <span />
          <span>
            <strong>How and when we can make changes</strong>
          </span>
          <span>
            . We can make changes to these Terms and any terms and conditions
            incorporated by reference (including any Product Terms) at any time
            and your continued use of the Barterfunds Services constitutes your
            consent to such changes. Changes to these Terms will be published on
            our website and may also be notified to users separately by email,
            through the app or by such other means as Barterfunds determines in its
            discretion. &nbsp;
          </span>
        </p>
        <p>
          <span>
            Generally, Barterfunds will try to notify users prior to changes to
            these Terms taking effect.&nbsp; However, we may occasionally need
            to make changes that are effective immediately, in which case users
            will be notified as soon as possible after the changes take effect.
            The circumstances in which changes to these Terms may take effect
            immediately may include, for example and without limitation, where:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            the change is to address legal and/or regulatory requirements;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            the changes are to make these Terms clearer; and/or
          </span>
        </p>
        <p>
          <span>
            18.2.{' '}
          </span>
          <span />
          <span>
            <strong>When changes come into effect</strong>
          </span>
          <span>
            . Save where changes come into effect immediately, any update to the
            Terms will come into effect after the changes have been notified to
            users. If you do not wish to accept the changes, you are free to
            close your Barterfunds Account in accordance with clause ‎19.1 of these
            Terms. Your continued access to or use of any Barterfunds Services will
            be deemed acceptance of the updated Terms.
          </span>
        </p>
        <p>
          <span>
            18.3.{' '}
          </span>
          <span />
          <span>
            <strong>Changes to fees</strong>
          </span>
          <span>
            . We may also make changes to the fees set out in the{" "}
          </span>
          <a
            data-bn-type="link"
            href="/fees"
            target="_blank"
            
          >
            Fee Structure&nbsp;
          </a>
          <span>
            page on our Website, which includes introducing new fees and/or
            charges. If you do not wish to accept the changes, you are free to
            close your Barterfunds Account in accordance with clause ‎19.1 of these
            Terms. Your continued access to or use of the Barterfunds Services will
            be deemed acceptance of the updated Terms.
          </span>
        </p>
        <p>
          <span>
            <strong>19.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Closing your Barterfunds Account&nbsp;</strong>
          </span>
        </p>
        <p>
          <span>
            19.1.{' '}
          </span>
          <span />
          <span>
            <strong>Your right to close your Barterfunds Account</strong>
          </span>
          <span>
            . You may terminate your Barterfunds Account at any time by following
            the account termination procedures as prescribed by us from time to
            time. You will not be charged for terminating your Barterfunds Account,
            although you will be required to pay any outstanding amounts owed to
            us. You authorise us to cancel or suspend any pending transactions
            at the time of cancellation, and to deduct any outstanding amounts
            that you owe us from your Barterfunds Account.
          </span>
        </p>
        <p>
          <span>
            In certain cases, you may not be able to close your Barterfunds Account,
            including where:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            you are trying to evade an investigation by relevant authorities;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            you have a pending Transaction or an open Claim;
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            your Barterfunds Account has any outstanding amounts owed to us; or
          </span>
        </p>
        <p>
          <span>
            d.{" "}
          </span>
          <span />
          <span>
            your Barterfunds Account is subject to a freeze, hold, limitation or
            reserve.
          </span>
        </p>
        <p>
          <span>
            19.2.{' '}
          </span>
          <span />
          <span>
            <strong>What happens when your Barterfunds Account is closed</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;If your Barterfunds Account is closed, you will be required to withdraw
            all Digital Assets held in your Barterfunds Account. In the event that
            you fail to withdraw your Digital Assets, or if you have not
            accessed your Barterfunds Account for a continuous period of 90 days,
            will send you notice of our intention to treat your account as
            dormant.&nbsp;
          </span>
        </p>
        <p>
          <span>
            19.3.{' '}
          </span>
          <span />
          <span>
            <strong>What happens when your account becomes dormant.{' '}</strong>
          </span>
          <span>
          &nbsp;If you do not respond to the notice in clause 19.2 within 30 days,
            we may:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            mark your Barterfunds Account as a dormant account;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            convert the Digital Assets to a different type of Digital Asset. In
            doing so, we will not be liable for any loss of profit, tax
            obligations or any other loss, damage or expense incurred by you
            resulting from such conversion;
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            transfer such dormant account and/or any Digital Assets held in that
            account to any third party (including, without limitation, another
            Barterfunds Affiliate, any third-party custodian or an isolated wallet)
            if we consider it is reasonably necessary to do so. If this happens,
            you have the right to retrieve your Digital Assets, subject to
            satisfying our (or the relevant third party’s) reasonable
            verification requirements and any other applicable terms and
            conditions;&nbsp;
          </span>
        </p>
        <p>
          <span>
            d.{" "}
          </span>
          <span />
          <span>
            adjust your dormant account such that you will receive a contractual
            claim on the quantity and type of Digital Assets, which were held on
            your Barterfunds Account before being converted into a dormant account;
          </span>
        </p>
        <p>
          <span>
            e.{" "}
          </span>
          <span />
          <span>
            charge a dormant account fee which may be to cover the cost of
            maintaining the Digital Assets with any Barterfunds Affiliate or any
            third party, with such fee to be withdrawn directly from the dormant
            account on a monthly basis; and
          </span>
        </p>
        <p>
          <span>
            f.{" "}
          </span>
          <span />
          <span>
            close a dormant account at any time.
          </span>
        </p>
        <p>
          <span>
            You acknowledge that we will be under no obligation to pay any
            reward, incentive or interest which we might otherwise have agreed
            to pay, under the applicable Product Terms, to your dormant account
            in relation to the Digital Assets credited to it.
          </span>
        </p>
        <p>
          <span>
            <strong>20.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Termination, suspension, holds and restrictions</strong>
          </span>
        </p>
        <p>
          <span>
            20.1.{' '}
          </span>
          <span />
          <span>
            <strong>Our right</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
            We may at any time modify or discontinue, temporarily or
            permanently, any portion or feature of the Barterfunds Services. In
            particular, we may: (1) refuse to complete or block, cancel, or,
            where permitted by Applicable Law, reverse any Transaction you have
            authorised; (2) terminate, suspend, or restrict your access to any
            or all of the Barterfunds Services; (3) terminate, suspend, close, hold
            or restrict your access to any or all of your Barterfunds Account(s);
            (4) refuse to transmit information or Instructions to third parties
            (including but not limited to third-party wallet operators); and/or
            (5) take whatever action we consider necessary, in each case with
            immediate effect and for any reason including, but not limited to
            where:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            you are not, or are no longer, eligible to use one or more Barterfunds
            Services;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            we reasonably suspect that:
          </span>
        </p>
        <p>
          <span>
            i.{" "}
          </span>
          <span />
          <span>
            the person logged into your Barterfunds Account is not you, or we
            suspect that the Barterfunds Account has been or will be used for any
            illegal, fraudulent, or unauthorised purposes;
          </span>
        </p>
        <p>
          <span>
            ii.{" "}
          </span>
          <span />
          <span>
            the person logged into your Corporate Barterfunds Account is not a
            Permitted User, or we suspect that the Corporate Barterfunds Account has
            been or will be used for any illegal, fraudulent, or unauthorised
            purposes;
          </span>
        </p>
        <p>
          <span>
            iii.{' '}
          </span>
          <span />
          <span>
            more than one natural person has access to and/or transacts using
            the same Barterfunds Account, or we suspect that Barterfunds Account has
            been or will be used for any illegal, fraudulent, or unauthorised
            purposes;
          </span>
        </p>
        <p>
          <span>
            iv.{' '}
          </span>
          <span />
          <span>
            information provided by you is wrong, untruthful, outdated, or
            incomplete;
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            we have reasonable concerns in relation to your creditworthiness or
            financial status, including:
          </span>
        </p>
        <p>
          <span>
            i.{" "}
          </span>
          <span />
          <span>
            in the event that you are an individual, you become bankrupt, of
            unsound mind, commit an act of bankruptcy, or have action to place
            you in bankruptcy commenced against you;
          </span>
        </p>
        <p>
          <span>
            ii.{" "}
          </span>
          <span />
          <span>
            in the event that you are acting on behalf of a partnership, any of
            the partners die or become bankrupt or of unsound mind, commit an
            act of bankruptcy, or have action to place any of the partners in
            bankruptcy commenced, or if action is commenced to dissolve and/or
            alter the partners or the constitutions of the partnership;
          </span>
        </p>
        <p>
          <span>
            iii.{' '}
          </span>
          <span />
          <span>
            in the event that you are acting on behalf of a corporation, the
            corporation is unable to pay its debts as and when they are due, or
            action is commenced to place the corporation in insolvency, judicial
            management, receivership, administrative management, or any similar
            or analogous proceedings;
          </span>
        </p>
        <p>
          <span>
            iv.{' '}
          </span>
          <span />
          <span>
            you convene a meeting of your creditors or propose or make any
            compromise or arrangement with or any assignment for the benefit of
            your creditors;
          </span>
        </p>
        <p>
          <span>
            d.{" "}
          </span>
          <span />
          <span>
            pending submission of such information and documents in accordance
            with clause ‎8;
          </span>
        </p>
        <p>
          <span>
            e.{" "}
          </span>
          <span />
          <span>
            pending submission of enhanced due diligence in accordance with
            clause ‎7.4;
          </span>
        </p>
        <p>
          <span>
            f.{" "}
          </span>
          <span />
          <span>
            we reasonably consider that we are required to do so by Applicable
            Law, or any court or authority to which we are subject in any
            jurisdiction;
          </span>
        </p>
        <p>
          <span>
            g.{" "}
          </span>
          <span />
          <span>
            we have determined or suspect:
          </span>
        </p>
        <p>
          <span>
            i.{" "}
          </span>
          <span />
          <span>
            that you have breached these Terms or any Product Terms;
          </span>
        </p>
        <p>
          <span>
            ii.{" "}
          </span>
          <span />
          <span>
            that you have breached any express or implied warranties in these
            Terms, or any representations you have made;
          </span>
        </p>
        <p>
          <span>
            iii.{' '}
          </span>
          <span />
          <span>
            that any Transaction is unauthorised, erroneous, fraudulent, or
            unlawful or we have determined or suspect that your Barterfunds Account
            or the Barterfunds Services are being used in a fraudulent,
            unauthorised, or unlawful manner;
          </span>
        </p>
        <p>
          <span>
            iv.{' '}
          </span>
          <span />
          <span>
            there is any occurrence of money laundering, terrorist financing,
            fraud or any other crime in connection with your Barterfunds Account or
            your use of the Barterfunds Services;
          </span>
        </p>
        <p>
          <span>
            h.{" "}
          </span>
          <span />
          <span>
            the use of your Barterfunds Account is subject to any pending, ongoing
            or threatened litigation, investigation, or judicial, governmental
            or regulatory proceedings and/or we perceive a heightened risk of
            legal or regulatory non-compliance associated with your Barterfunds
            Account activity;
          </span>
        </p>
        <p>
          <span>
            i.{" "}
          </span>
          <span />
          <span>
            you owe amounts to Barterfunds that are not satisfied, whether due to a
            chargeback or on any other basis;
          </span>
        </p>
        <p>
          <span>
            j.{" "}
          </span>
          <span />
          <span>
            any email communication to your Email Account is returned as
            undeliverable;
          </span>
        </p>
        <p>
          <span>
            k.{" "}
          </span>
          <span />
          <span>
            an issue has arisen with the verification of your identity;
          </span>
        </p>
        <p>
          <span>
            l.{" "}
          </span>
          <span />
          <span>
            you have taken any action that may circumvent our controls such as
            opening multiple Barterfunds Accounts without our written consent or
            abusing promotions which we may offer from time to time; or
          </span>
        </p>
        <p>
          <span>
            m.{" "}
          </span>
          <span />
          <span>
            there is any other valid reason which means we need to do so.
          </span>
        </p>
        <p>
          <span>
            We will take reasonable steps to provide you with appropriate
            notice. However, there might be times when we are required not to do
            so by Applicable Law.
          </span>
        </p>
        <p>
          <span>
            20.2.{' '}
          </span>
          <span />
          <span>
            <strong>Your acknowledgement</strong>
          </span>
          <span>
            . You acknowledge and agree that:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            the examples set out in clause ‎20.1 above of when we might take
            action to terminate, suspend, close or restrict your access to your
            Barterfunds Account and/or the Barterfunds Services is a non-exhaustive
            list; and
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            our decision to take certain actions, including, without
            limitations, to terminate, suspend, or restrict your access to your
            Barterfunds Account or the Barterfunds Services, may be based on
            confidential criteria that are essential to our risk management and
            security protocols. You agree that we are under no obligation to
            disclose the details of our risk management and security procedures
            to you.
          </span>
        </p>
        <p>
          <span>
            <strong>20.3.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>What happens when we exercise our right</strong>
          </span>
          <span>
            . Where we terminate, suspend, hold or restrict your access to one
            or more Barterfunds Services:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            if you have Instructions, trades, positions or Transactions that are
            open, they may be closed by you, or by us, depending on the
            circumstances of the termination, suspension, hold, restriction or
            other action we take;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            any chargeback resulting from the use of your Barterfunds Account or
            Barterfunds Services may result in an immediate suspension and/or
            restriction of your Barterfunds Account and Barterfunds Services;
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            to reactivate suspended and/or restricted Barterfunds Account or Barterfunds
            Services, you may be required to reimburse us for the full value of
            the chargeback, including any amounts that are owing to us including
            any applicable fees; and
          </span>
        </p>
        <p>
          <span>
            d.{" "}
          </span>
          <span />
          <span>
            you are liable for any credited amounts in case of a chargeback, and
            you authorise and grant us the right to deduct costs and fees
            directly from any assets in your Barterfunds Account without notice.
          </span>
        </p>
        <p>
          <span>
            <strong>20.4.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Unlawful possession</strong>
          </span>
          <span>
            . If we are informed and reasonably believe that any Digital Assets
            or Fiat Currencies held in your Barterfunds Account are stolen or
            otherwise are not lawfully possessed by you (whether by error or
            otherwise), we may, but have no obligation to, place a hold on the
            affected funds and your Barterfunds Account. Where we place a hold on
            some or all of any Digital Assets or Fiat Currencies held in your
            Barterfunds Account, or on your entire Barterfunds Account, we may continue
            such hold until such time as evidence, acceptable to us, proves that
            you are entitled to possession of the Digital Assets and/or Fiat
            Currency held in your Barterfunds Account. We will not get involved in
            any dispute, or the resolution of the dispute, relating to any
            Digital Assets and/or Fiat Currency held in your Barterfunds
            Account.&nbsp;
          </span>
        </p>
        <p>
          <span>
            <strong>20.5.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Access to Barterfunds Services in other jurisdictions</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;Residents of some countries may only be able to access some, but not
            all, Barterfunds Services. We may change the Barterfunds Services that are
            available to you from time to time. If you travel to a location
            included on our{" "}
          </span>
          <a
            data-bn-type="link"
            href="/legal/list-of-prohibited-countries"
            target="_blank"
            
          >
            List of Prohibited Countries
          </a>
          <span>
            , Barterfunds Services may not be available and your access to the
            Barterfunds Services may be blocked. You acknowledge that this may
            impact your ability to trade on the Platform and/or monitor any
            existing orders or open positions or otherwise use the Barterfunds
            Services. You must not attempt in any way to circumvent any such
            restriction, including by use of any virtual private network to
            modify your internet protocol address.
          </span>
        </p>
        <p>
          <span>
            <strong>INTELLECTUAL PROPERTY</strong>
          </span>
        </p>
        <p>
          <span>
            <strong>21.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Background IP</strong>
          </span>
        </p>
        <p>
          <span>
            The Barterfunds IP shall remain vested in Barterfunds.&nbsp;
          </span>
        </p>
        <p>
          <span>
            <strong>22.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Licence of Barterfunds IP</strong>
          </span>
        </p>
        <p>
          <span>
            We grant to you a non-exclusive licence for the duration of these
            Terms, or until we suspend or terminate your access to the Barterfunds
            Services, whichever is sooner, to use the Barterfunds IP, excluding the
            Trade Marks, solely as necessary to allow you to receive the Barterfunds
            Services for non-commercial personal or internal business use, in
            accordance with these Terms.
          </span>
        </p>
        <p>
          <span>
            <strong>23.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Licence of User IP</strong>
          </span>
        </p>
        <p>
          <span>
            23.1.{" "}
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Your grant of licence.{' '}</strong>
          </span>
          <span>
            You grant to us a perpetual, irrevocable, royalty-free, worldwide
            and non-exclusive licence to use the User IP to the extent it:&nbsp;
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            forms part of, or is necessary for the use of, any Created IP; and
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            is necessary to allow us to provide you with the Barterfunds Services,
            from time to time.&nbsp;
          </span>
        </p>
        <p>
          <span>
            23.2.{" "}
          </span>
          <span />
          <span>
            <strong>Our right to sub-licence.{' '}</strong>
          </span>
          <span>
            The licence granted by you under this clause ‎includes our right to
            sub-licence to a third party to the extent required to enable us and
            any Barterfunds Affiliates to provide you with the Barterfunds Services, or
            any part of them.
          </span>
        </p>
        <p>
          <span>
            <strong>24.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Created IP</strong>
          </span>
        </p>
        <p>
          <span>
            24
          </span>
          <span>
            <strong>.{' '}</strong>
          </span>
          <span>
            1{' '}
          </span>
          <span />
          <span>
            <strong>Created IP.{' '}</strong>
          </span>
          <span>
            The Created IP shall automatically vest in us from time to time on
            the date on which{" "}
          </span>
          <span />
          <span>
            it is created.
          </span>
        </p>
        <p>
          <span>
            24
          </span>
          <span>
            <strong>.{' '}</strong>
          </span>
          <span>
            2{' '}
          </span>
          <span />
          <span>
            <strong>Assignment.{' '}</strong>
          </span>
          <span>
            You hereby assign to us (and agree to procure that any agents,
            representatives{" "}
          </span>
          <span />
          <span>
            or contractors assign), with full title guarantee, title to all
            present and future rights and interest in{" "}
          </span>
          <span />
          <span>
            the Created IP.&nbsp;
          </span>
        </p>
        <p>
          <span>
            If requested to do so, you shall (and agree to procure that any
            agents, representatives or contractors shall), without charge to us,
            sign and/or execute all documents and do all such acts as we may
            require to perfect the assignments under this clause.
          </span>
        </p>
        <p>
          <span>
            <strong>25.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>General</strong>
          </span>
        </p>
        <p>
          <span>
            25.1{' '}
          </span>
          <span />
          <span>
            <strong>We are not responsible</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
            You agree and acknowledge that: (1) we are not responsible for any{" "}
          </span>
          <span />
          <span>
            User Material (whether provided by you or by third parties) which
            may be made available on the{" "}
          </span>
          <span />
          <span>
            Platform or the Sites; and (2) use of any such User Material is at
            your own risk and that we do{" "}
          </span>
          <span />
          <span>
            not provide any warranties in relation to the same.&nbsp;
          </span>
        </p>
        <p>
          <span>
            25.2{' '}
          </span>
          <span />
          <span>
            <strong>Our rights</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;We shall have the right at our sole and absolute discretion to
            remove, modify or{" "}
          </span>
          <span />
          <span>
            reject any content that you submit to, post or display on the
            Platform or the Sites (including any{" "}
          </span>
          <span />
          <span>
            User Material) for any reason. We reserve the right to take any
            actions as we deem appropriate{" "}
          </span>
          <span />
          <span>
            at our sole discretion, including giving a written warning to you,
            removing any User Material,{" "}
          </span>
          <span />
          <span>
            recovering damages or other monetary compensation from you,
            suspending or terminating your{" "}
          </span>
          <span />
          <span>
            Barterfunds Account (if any), or suspending your access to the Platform
            and/or the Sites. We shall{" "}
          </span>
          <span />
          <span>
            also have the right to restrict or ban you from any and all future
            use of any Barterfunds Services.
          </span>
        </p>
        <p>
          <span>
            25.3{' '}
          </span>
          <span />
          <span>
            <strong>Recording. </strong>
          </span>
          <span>
            You agree that we may record any communications, electronic, by
            telephone, over video call, or otherwise, that we have with you in
            relation to these Terms, and that any recordings that we keep will
            constitute evidence of the communications between you and us. You
            agree that telephone conversations and video calls may be recorded
            so that we can respond to inquiries, ensure compliance with
            applicable laws, improve our services and provide customer support.
          </span>
        </p>
        <p>
          <span>
            <strong>YOUR OBLIGATIONS AND LIABILITY</strong>
          </span>
        </p>
        <p>
          <span>
            <strong>26.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Prohibited use</strong>
          </span>
        </p>
        <p>
          <span>
            By opening a Barterfunds Account or carrying out any Transaction, and
            without prejudice to any other restriction or limitation set out in
            these terms, you agree that you and any Permitted User will not:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            breach these Terms or any agreement entered into pursuant to, or in
            connection with, these Terms, including, but not limited to, any
            Product Terms;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            use Barterfunds Services in a manner that violates our{" "}
          </span>
          <a
            data-bn-type="link"
            href="/about-legal/prohibited-use-policy"
            target="_blank"
            
            data-app-url="/about-legal/prohibited-use-policy"
          >
            Prohibited Use Policy
          </a>
          <span>
            ;
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            use Barterfunds Services for resale or commercial purposes, including
            transactions on behalf of other persons or entities, unless
            expressly agreed by us in writing;
          </span>
        </p>
        <p>
          <span>
            d.{" "}
          </span>
          <span />
          <span>
            use the Barterfunds Services for anything which, in Barterfunds’s sole
            opinion, is conduct designed to control or artificially affect the
            price of any Digital Asset (market manipulation) including, without
            limitation,&nbsp; pump and dump schemes, wash trading, self-trading,
            front running, quote stuffing, and spoofing or layering) regardless
            of whether prohibited by Applicable Law;
          </span>
        </p>
        <p>
          <span>
            e.{" "}
          </span>
          <span />
          <span>
            engage in fraudulent activities, or cause us to suspect that you or
            any Permitted User have engaged in fraudulent activities and/or
            Transactions;
          </span>
        </p>
        <p>
          <span>
            f.{" "}
          </span>
          <span />
          <span>
            use Barterfunds Services to conduct or participate in lotteries;
            gambling activities; bidding fee auctions; sports forecasting or
            odds making; fantasy sports leagues with cash prizes; internet
            gaming; contests; sweepstakes; or games of chance;
          </span>
        </p>
        <p>
          <span>
            g.{" "}
          </span>
          <span />
          <span>
            (1) receive, or attempt to receive, funds from both us and another
            user for the same Transaction during the course of a Claim; (2)
            conduct your business or use the Barterfunds Services in a manner that
            results in, or may result in, complaints, disputes, claims,
            reversals, chargebacks, fees, fines, penalties, or other liability
            to us, other users, third parties, or yourself; and (3) allow your
            Barterfunds Account to have a negative value or quantity of Digital
            Assets;
          </span>
        </p>
        <p>
          <span>
            h.{" "}
          </span>
          <span />
          <span>
            provide false, inaccurate or misleading information in connection
            with your use of the Barterfunds Services, in communications with us, or
            otherwise connected with these Terms;
          </span>
        </p>
        <p>
          <span>
            i.{" "}
          </span>
          <span />
          <span>
            (1) use any deep linking, web crawlers, bots, spiders or other
            automatic devices, programs, scripts, algorithms or methods, or any
            similar or equivalent manual processes to access, obtain, copy or
            monitor any part of the Platform, or replicate or bypass the
            navigational structure or presentation of Barterfunds Services in any
            way, in order to obtain or attempt to obtain any materials,
            documents or information in any manner not purposely provided
            through Barterfunds Services; (2) attempt to access any part or function
            of the Platform without authorisation, or connect to Barterfunds
            Services or any of our servers or any other systems or networks of
            any Barterfunds Services provided through the Platform by hacking,
            password mining or any other unlawful or prohibited means; (3)
            probe, scan or test the vulnerabilities of Barterfunds Services or any
            network connected to the Platform, or violate any security or
            authentication measures on Barterfunds Services or any network connected
            to Barterfunds Services; (4) reverse look-up, track or seek to track any
            information of any other users or visitors of Barterfunds Services; (5)
            take any actions that impose an unreasonable or disproportionately
            large load on the infrastructure of systems or networks of Barterfunds
            Services or Barterfunds, or the infrastructure of any systems or
            networks connected to Barterfunds Services; (6) use any devices,
            software or routine programs to interfere with the normal operation
            of Barterfunds Services or any transactions on Barterfunds Services, or any
            other person’s use of Barterfunds Services; or (7) forge headers,
            impersonate, or otherwise manipulate identification, to disguise
            your identity or the origin of any messages or transmissions you
            send to us;
          </span>
        </p>
        <p>
          <span>
            j.{" "}
          </span>
          <span />
          <span>
            modify or adapt the whole or any part of the Platform or combine or
            incorporate the Platform into another programme or application;
          </span>
        </p>
        <p>
          <span>
            k.{" "}
          </span>
          <span />
          <span>
            disassemble, decompile, reverse-engineer or otherwise attempt to
            derive the source code, object code underlying concepts, ideas and
            algorithms of the Platform or any components thereof;
          </span>
        </p>
        <p>
          <span>
            l.{" "}
          </span>
          <span />
          <span>
            modify, replicate, duplicate, copy, download, store, further
            transmit, disseminate, transfer, disassemble, broadcast, publish,
            remove or alter any copyright statement or label, or licence,
            sub-licence, sell, mirror, design, rent, lease, private label, grant
            security interests in such Barterfunds IP or any part of the
            intellectual properties, or create derivative works or otherwise
            take advantage of any part of the Barterfunds IP;
          </span>
        </p>
        <p>
          <span>
            m.{" "}
          </span>
          <span />
          <span>
            facilitate any viruses, Trojan horses, worms or other computer
            programming routines that may damage, detrimentally interfere with,
            surreptitiously intercept, or expropriate any system, data or
            information in connection with the Barterfunds Services;
          </span>
        </p>
        <p>
          <span>
            n.{" "}
          </span>
          <span />
          <span>
            (1) use an anonymizing proxy; (2) use any temporary, disposable,
            self-destructive, or similar email address when opening a Barterfunds
            Account and/or using the Barterfunds Services; (3) use any device,
            software, or routine to bypass our robot exclusion headers, or
            interfere or attempt to interfere with our Sites or the Barterfunds
            Services; and (4) take any action that may cause us to lose any of
            the services from our internet service providers, or other
            suppliers;&nbsp;
          </span>
        </p>
        <p>
          <span>
            o.{" "}
          </span>
          <span />
          <span>
            create, or purport to create, any security over your Fiat Currency
            or Digital Assets held in any of your Barterfunds Account without our
            prior written consent;
          </span>
        </p>
        <p>
          <span>
            p.{" "}
          </span>
          <span />
          <span>
            violate, or attempt to violate, (1) any Applicable Law; or (2) ours
            or any third party’s copyright, patent, trademark, trade secret, or
            other intellectual property rights, or rights of publicity or
            privacy; and/or
          </span>
        </p>
        <p>
          <span>
            q.{" "}
          </span>
          <span />
          <span>
            access, use, or attempted to access or use, Barterfunds Services
            directly or indirectly with (1) jurisdictions Barterfunds has deemed
            high risk, including but not limited to, Cuba, Iran, North Korea,
            Syria, Crimea region or (2) persons Barterfunds has deemed high risk,
            including but not limited to, individuals or entities named as a
            restricted person or party on any list maintained by the United
            States of America., United Kingdom, European Union or United
            Nations, including the sanctions lists maintained by the U.S. Office
            of Foreign Assets Control or the Denied Persons List or Entity List
            maintained by the U.S. Department of Commerce.
          </span>
        </p>
        <p>
          <span>
            <strong>27.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Representations and warranties</strong>
          </span>
        </p>
        <p>
          <span>
            You hereby represent and warrant to us, at all times, the following:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            all documents and information you provide to us are true, accurate,
            complete, and up to date in all respects, and may be relied upon by
            us in determining whether or not you are eligible to access the
            Platform or to use the Barterfunds Services;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            all decisions made in connection with these Terms were solely and
            exclusively based on your own judgement and after your own
            independent appraisal of your financial resources, ability and
            willingness to take relevant risks and financial objectives;
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            you have full power, authority, and capacity to (1) access and use
            the Platform and/or the Barterfunds Services; and (2) enter into and
            deliver, and perform your obligations under these Terms and any
            agreement entered into pursuant to, or in connection with, these
            Terms, including, but not limited to, any Product Terms;
          </span>
        </p>
        <p>
          <span>
            d.{" "}
          </span>
          <span />
          <span>
            if you are a corporation, partner in a partnership, or trustee of a
            trust:
          </span>
        </p>
        <p>
          <span>
            i.{" "}
          </span>
          <span />
          <span>
            the corporation, partnership or trust has and will be operated in a
            way that is compliant with Applicable Law, and any partnership or
            trust deeds (or other like documents);
          </span>
        </p>
        <p>
          <span>
            ii.{" "}
          </span>
          <span />
          <span>
            you will notify us immediately if there is any change, by way of
            resignation, removal, appointment or death, of any of the directors,
            partners, trustees, settlor(s) or ultimate beneficial owners or any
            person authorised to operate your Barterfunds Account; and
          </span>
        </p>
        <p>
          <span>
            iii.{' '}
          </span>
          <span />
          <span>
            you will inform us immediately if the corporation, partnership, or
            trust is dissolved either on a voluntary or involuntary basis;&nbsp;
          </span>
        </p>
        <p>
          <span>
            e.{" "}
          </span>
          <span />
          <span>
            all consents, permissions, authorisations, approvals and agreements
            of third parties and all authorisations, approvals, permissions,
            consents, registrations, declarations, filings with any Regulatory
            Authority, governmental department, commission, agency or other
            organisation having jurisdiction over you which are necessary or
            desirable for you to obtain in order to (1) access and use the
            Platform and/or the Barterfunds Services; and (2) enter into and
            deliver, and perform the Transactions contemplated under these Terms
            and any agreement entered into pursuant to, or in connection with,
            these Terms, have been unconditionally obtained in writing,
            disclosed to us in writing, and have not been withdrawn or amended;
          </span>
        </p>
        <p>
          <span>
            f.{" "}
          </span>
          <span />
          <span>
            these Terms and any agreement entered into pursuant to, or in
            connection with, these Terms constitute valid and legally binding
            obligations, enforceable against you in accordance with their
            respective terms;
          </span>
        </p>
        <p>
          <span>
            g.{" "}
          </span>
          <span />
          <span>
            that you are not a Restricted Person;
          </span>
        </p>
        <p>
          <span>
            h.{" "}
          </span>
          <span />
          <span>
            if you are a legal entity, you are duly incorporated, duly
            organised, and validly existing under the laws of your jurisdiction
            and have full power to conduct your business. If you are an
            individual, you are not less than 18 years old; and
          </span>
        </p>
        <p>
          <span>
            i.{" "}
          </span>
          <span />
          <span>
            your access and use of the Platform and/or the Barterfunds Services,
            your execution and delivery of, and the performance of your
            obligations under these Terms and any agreement entered into
            pursuant to, or in connection with, these Terms, will not:
          </span>
        </p>
        <p>
          <span>
            i.{" "}
          </span>
          <span />
          <span>
            if you are a legal entity, partner in a partnership or trustee of a
            trust result in a breach of or conflict with any provision of your
            constitution, articles of association, partnership agreement, trust
            deed or equivalent constitutive documents;
          </span>
        </p>
        <p>
          <span>
            ii.{" "}
          </span>
          <span />
          <span>
            result in a breach of, or constitute a default under, any
            instrument, agreement, document or undertaking to which you are a
            party or by which you or any of your property is bound or subject;
            and
          </span>
        </p>
        <p>
          <span>
            iii.{' '}
          </span>
          <span />
          <span>
            result in you, or cause us or any third party to, breach any
            Applicable Law, decree or judgement of any court, or any award of
            any arbitrator or those of any governmental or Regulatory Authority
            in any jurisdiction.
          </span>
        </p>
        <p>
          <span>
            <strong>28.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Technology disclaimers</strong>
          </span>
        </p>
        <p>
          <span>
            28.1.{' '}
          </span>
          <span />
          <span>
            <strong>No representation or warranty</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;Barterfunds Services and any information provided on the Sites and the
            Platform, including Chat Services, are provided on an “as is” and
            “as available” basis without any representation or warranty, whether
            express or implied, to the maximum extent permitted by Applicable
            Law. Specifically, we disclaim any implied warranties of title,
            merchantability, fitness for a particular purpose and/or
            non-infringement. We do not make any representations or warranties
            that access to the Sites, the Platform, any of your Barterfunds
            Account(s), Barterfunds Services, or any of the materials contained
            therein, will be continuous, uninterrupted, timely or error-free.
            This could result in the inability to trade on the Platform for a
            period of time and may also lead to time delays.&nbsp;
          </span>
        </p>
        <p>
          <span>
            28.2.{' '}
          </span>
          <span />
          <span>
            <strong>Suspension of access</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;We may, from time to time, suspend access to your Barterfunds Account
            and/or the Barterfunds Services, for both scheduled and emergency
            maintenance. We will make reasonable efforts to ensure that
            Transactions on the Platform are processed in a timely manner, but
            we make no representations or warranties regarding the amount of
            time needed to complete processing, which is dependent upon many
            factors outside of our control.
          </span>
        </p>
        <p>
          <span>
            28.3.{' '}
          </span>
          <span />
          <span>
            <strong>Content</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;Although we make reasonable efforts to update the information on the
            Sites and the Platform, we make no representations, warranties or
            guarantees, whether express or implied, that the content on the
            Sites and the Platform, including information in relation to the
            Barterfunds Services, is accurate, complete or up to date.
          </span>
        </p>
        <p>
          <span>
            28.4.{' '}
          </span>
          <span />
          <span>
            <strong>Third-party websites</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;Links to third-party websites (including, without limitation,
            content, materials, and/or information in the third-party websites)
            may be provided as a convenience but they are not controlled by us.
            You acknowledge and agree that we are not responsible for any aspect
            of the content, materials, information or services contained in any
            third-party websites accessible or linked from the Platform or the
            Sites.
          </span>
        </p>
        <p>
          <span>
            28.5.{' '}
          </span>
          <span />
          <span>
            <strong>Network Access and Compatibility</strong>
          </span>
          <span>
            : You are responsible for obtaining the data network access
            necessary to use the Barterfunds Services. You are responsible for
            acquiring and updating compatible hardware or devices necessary to
            access and use the Barterfunds Services and Sites and any updates
            thereto. Barterfunds does not guarantee that the Barterfunds Services, or
            any portion thereof, will function on any particular hardware or
            devices.&nbsp; The Barterfunds Services may be subject to malfunctions
            and delays inherent in the use of the internet and electronic
            communications.
          </span>
        </p>
        <p>
          <span>
            <strong>29.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Indemnity</strong>
          </span>
        </p>
        <p>
          <span>
            29.1.{' '}
          </span>
          <span />
          <span>
            <strong>Third-party claims</strong>
          </span>
          <span>
            . You hereby undertake and agree to indemnify us and hold us
            harmless upon demand from and against any claims, suits, actions,
            demands, disputes, allegations, or investigations brought by any
            third-party, governmental authority, or industry body, and all
            claims, liabilities, damages (actual and consequential), losses
            (including any direct, indirect or consequential losses, loss of
            profit, loss of reputation), costs, and expenses, including without
            limitation all interest, penalties and legal and other reasonable
            attorneys’ fees and other professional costs and expenses (“
          </span>
          <span>
            <strong>Losses</strong>
          </span>
          <span>
            ”), arising out of or in any way connected with:&nbsp;
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            your access to or use of your Barterfunds Account and/or the Barterfunds
            Services;&nbsp;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            your breach or alleged breach of these Terms or your contravention
            of any other clause or sub-clause of these Terms, including any
            Product Terms and any other terms and conditions incorporated by
            reference;&nbsp;
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            your contravention of any Applicable Law; and&nbsp;
          </span>
        </p>
        <p>
          <span>
            d.{" "}
          </span>
          <span />
          <span>
            your violation of the rights of any third party.&nbsp;
          </span>
        </p>
        <p>
          <span>
            29.2.{' '}
          </span>
          <span />
          <span>
            <strong>Release</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;You hereby irrevocably and unconditionally agree to release us from
            any and all claims and demands (and waive any rights you may have
            against us now or in future in relation to any Losses you may suffer
            or incur), arising directly or indirectly out of or in connection
            with any dispute that you have with any other user or other third
            party in connection with the Barterfunds Services (including any Digital
            Asset Transactions) or the subject matter of these Terms.
          </span>
        </p>
        <p>
          <span>
            <strong>30.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Liability</strong>
          </span>
        </p>
        <p>
          <span>
            <strong>30.1</strong>
          </span>
          <span />
          <span>
            <strong>&nbsp;Our Liability.{' '}</strong>
          </span>
          <span>
            Neither Barterfunds nor any Barterfunds Affiliate will have any
            responsibility or liability for any loss suffered by you or any
            third party, except to the extent that such loss arises solely and
            directly as a result of the gross negligence, willful misconduct,
            actual fraud or material and continuing breach of obligation under
            these Terms by Barterfunds. Without prejudice to the foregoing and
            notwithstanding any other clause in these Terms, in no event will
            the liability of Barterfunds and all Barterfunds Affiliates in aggregate
            exceed the amount of fees paid by you to Barterfunds in the 12 month
            period immediately before the event giving rise to the loss. Such
            sum shall be paid by us to you in full and final settlement and
            satisfaction of ours and any Barterfunds Affiliate’s entire liability
            for any and all losses and claims, howsoever arising, from the
            relevant events. You acknowledge and agree that neither Barterfunds nor
            any Barterfunds Affiliate is aware of any special circumstances
            pertaining to you, and that damages are an adequate remedy and that
            you shall not be entitled to any other claims or remedies at law or
            in equity, including but not limited to, any claim in rem,
            injunction, and/or specific performance.
          </span>
        </p>
        <p>
          <span>
            <strong>30.2</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>&nbsp;Limitations on liability</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;Notwithstanding any other clause in these Terms, you hereby
            acknowledge and agree that in no event will we or any Barterfunds
            Affiliate be responsible or liable to you or any other person or
            entity for:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            any direct or indirect losses (including loss of profits, business
            or opportunities), damages, or costs, whether arising out of or in
            connection with the Barterfunds Services or otherwise, including but not
            limited to:
          </span>
        </p>
        <p>
          <span>
            i.{" "}
          </span>
          <span />
          <span>
            any risk identified in the{" "}
          </span>
          <a
            data-bn-type="link"
            href="/risk-warning"
            target="_blank"
            
          >
            Risk Warning
          </a>
          <span>
            , as updated from time to time;
          </span>
        </p>
        <p>
          <span>
            ii.{" "}
          </span>
          <span />
          <span>
            the operation of the protocols underlying any Digital Asset, their
            functionality, security, or availability;
          </span>
        </p>
        <p>
          <span>
            iii.{' '}
          </span>
          <span />
          <span>
            whether Backed Digital Assets hold their value as against any asset,
            or if the issuer of the Backed Digital Asset holds sufficient
            reserves in relation to any Backed Digital Asset;
          </span>
        </p>
        <p>
          <span>
            iv.{' '}
          </span>
          <span />
          <span>
            any action or inaction in accordance with these Terms;
          </span>
        </p>
        <p>
          <span>
            v.{' '}
          </span>
          <span />
          <span>
            any inaccuracy, defect or omission of Digital Assets price data, any
            error or delay in the transmission of such data, and interruption in
            any such data;
          </span>
        </p>
        <p>
          <span>
            vi.{' '}
          </span>
          <span />
          <span>
            regular or unscheduled maintenance we carry out including any
            service interruption and change resulting from such
            maintenance;&nbsp;
          </span>
        </p>
        <p>
          <span>
            vii.{' '}
          </span>
          <span />
          <span>
            the theft of a device enabled to access and use Barterfunds Services;
          </span>
        </p>
        <p>
          <span>
            viii.{' '}
          </span>
          <span />
          <span>
            other users’ actions, omissions or breaches of these Terms, and any
            damage caused by actions of any other third parties;
          </span>
        </p>
        <p>
          <span>
            ix.{" "}
          </span>
          <span />
          <span>
            (1) for any damage or interruptions caused by any computer viruses,
            spyware, or other malware that may affect your computer or other
            equipment, or any phishing, spoofing, or other attack; (2) in the
            event that your hardware fails, is damaged or destroyed or any
            records or data stored on your hardware are corrupted or lost for
            any reason; or (3) for your use of the internet to connect to the
            Barterfunds Services or any technical problems, system failures,
            malfunctions, communication line failures, high internet traffic or
            demand, related issues, security breaches or any similar technical
            problems or defects experienced;
          </span>
        </p>
        <p>
          <span>
            x.{" "}
          </span>
          <span />
          <span>
            our decision to reject your application to open a Barterfunds
            Account(s);
          </span>
        </p>
        <p>
          <span>
            xi.{" "}
          </span>
          <span />
          <span>
            any termination, suspension, hold or restriction of access to any
            Barterfunds Account or Barterfunds Services, including your inability to
            withdraw Digital Assets, issue Instructions or enter into
            Transactions during the period of any suspension, hold or
            restriction, in accordance with these Terms or any Product Terms;
          </span>
        </p>
        <p>
          <span>
            xii.{" "}
          </span>
          <span />
          <span>
            any Transaction limits applied to your Barterfunds Account;
          </span>
        </p>
        <p>
          <span>
            xiii.{' '}
          </span>
          <span />
          <span>
            any election by us to support or not support Digital Assets;
          </span>
        </p>
        <p>
          <span>
            xiv.{' '}
          </span>
          <span />
          <span>
            us being unable to contact you using the contact information you
            provided;
          </span>
        </p>
        <p>
          <span>
            xv.{' '}
          </span>
          <span />
          <span>
            us closing a dormant account;
          </span>
        </p>
        <p>
          <span>
            xvi.{' '}
          </span>
          <span />
          <span>
            the failure of a Transaction or the length of time needed to
            complete any Transaction;
          </span>
        </p>
        <p>
          <span>
            xvii.{' '}
          </span>
          <span />
          <span>
            our refusal or delay in acting upon any Instruction;
          </span>
        </p>
        <p>
          <span>
            xviii.{' '}
          </span>
          <span />
          <span>
            any breach of security of your Email Account or a Security
            Breach;&nbsp;
          </span>
        </p>
        <p>
          <span>
            xix.{" "}
          </span>
          <span />
          <span>
            losses suffered by you as a result of third party action, including
            third party fraud or scams that involve Barterfunds only as the
            recipient of your Fiat Currency or Digital Assets, and/or the
            conversion of Fiat Currency to Digital Assets;
          </span>
        </p>
        <p>
          <span>
            xx.{" "}
          </span>
          <span />
          <span>
            losses suffered by you as a result of the transfer of Digital Assets
            away from our platform at your request;
          </span>
        </p>
        <p>
          <span>
            xxi.{" "}
          </span>
          <span />
          <span>
            any losses arising or in connection with new offerings of Digital
            Assets, initial coin offerings (ICOs), or the decision to list or
            not list Digital Assets on the Platform;
          </span>
        </p>
        <p>
          <span>
            xxii.{" "}
          </span>
          <span />
          <span>
            a Network Event, a Fork or an Airdrop;&nbsp;
          </span>
        </p>
        <p>
          <span>
            xxiii.{' '}
          </span>
          <span />
          <span>
            the correctness, quality, accuracy, security, completeness,
            reliability, performance, timeliness, pricing or continued
            availability of the Barterfunds Services or for delays or omissions of
            the Barterfunds Services, or for the failure of any connection or
            communication service to provide or maintain your access to the
            Barterfunds Services, or for any interruption in or disruption of your
            access or any erroneous communications between us, regardless of
            cause; and&nbsp;
          </span>
        </p>
        <p>
          <span>
            xxiv.{' '}
          </span>
          <span />
          <span>
            any Transactions, Instructions, or operations effected by you or
            purported to be effected by you through your Email Account or
            Barterfunds Account;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            any loss of business, profits, anticipated savings or opportunities,
            or any special, punitive, aggravated, incidental, indirect or
            consequential losses or damages, whether arising out of or in
            connection with our Sites, the Platform, your Barterfunds Account, the
            Barterfunds Services, these Terms, the Product Terms, the{" "}
          </span>
          <a
            data-bn-type="link"
            href="/privacy-policy"
            target="_blank"
            
          >
            Privacy Notice{''}
          </a>
          <span>
            and/or any agreement entered into pursuant to, or in connection
            with, these Terms or otherwise;&nbsp;
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            any losses or damages you may incur due to Manifest Error and/or in
            the event of extreme market volatility and/or as a result of any
            cancellation/amendment of any Transactions, howsoever arising,
            whether direct or indirect, special or consequential, including, but
            not limited to, loss of profit and loss of opportunity even if
            Barterfunds was aware&nbsp; of the possibility of such loss or damage
            arising or if such loss or damage was reasonably foreseeable; and/or
          </span>
        </p>
        <p>
          <span>
            d.{" "}
          </span>
          <span />
          <span>
            any losses forming part of a Claim that has not been commenced by
            way of formal legal action WITHIN ONE CALENDAR YEAR of the
            commencement of matters giving rise to the Claim. YOU AGREE AND
            ACKNOWLEDGE THAT THIS CLAUSE VARIES ANY LIMITATION PERIOD OTHERWISE
            APPLICABLE BY LAW, AND THAT IF APPLICABLE LAW PROHIBITS THIS, THIS
            CLAUSE WILL BE READ AS A LIMITATION PERIOD OF THE MINIMUM
            ENFORCEABLE LENGTH. WITHOUT PREJUDICE TO THE GENERALITY OF THE
            FOREGOING, YOUR ATTENTION IS ALSO DRAWN TO CLAUSE 32 AGREEING THAT
            CLAIMS SHALL BE RESOLVED EXCLUSIVELY BY WAY OF BINDING ARBITRATION.
          </span>
        </p>
        <p>
          <span>
            <strong>30.3</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>&nbsp;Damage or interruption</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;We are not liable for any damage or interruptions caused by any
            computer viruses, spyware, scareware, Trojan horses, worms, or other
            malware that may affect your computer or other equipment, or any
            phishing, spoofing, or other attack. We advise the regular use of a
            reputable and readily available virus screening and prevention
            software. You should also be aware that SMS and email services are
            vulnerable to spoofing and phishing attacks and should use care in
            reviewing messages purporting to originate from us. You and, where
            relevant, your Permitted Users are responsible for all login
            credentials, including usernames and passwords and must keep
            security details safe at all times.
          </span>
        </p>
        <p>
          <span>
            <strong>30.4</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>&nbsp;Fiat Currency. </strong>
          </span>
          <span>
          &nbsp;For the avoidance of doubt, any balance on your Barterfunds Account
            displayed and denominated in a Fiat Currency shall not be taken to
            mean that Barterfunds directly holds Fiat Currency, nor does it mean
            that Barterfunds receives, holds, or releases any Fiat Currency or
            engages in deposit taking, remittance or similar activity in respect
            of Fiat Currency.
          </span>
        </p>
        <p>
          <span>
            <strong>
              RESOLVING DISPUTES: FORUM, ARBITRATION, CLASS ACTION WAIVER
            </strong>
          </span>
        </p>
        <p>
          <span>
            <strong>
              For the avoidance of doubt, nothing in this section will deprive
              you of any mandatory legal right from which you benefit under
              Applicable Law.
            </strong>
          </span>
        </p>
        <p>
          <span>
            <strong>31.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Notice of Claim and Dispute Resolution Period</strong>
          </span>
        </p>
        <p>
          <span>
            31.1.{' '}
          </span>
          <span />
          <span>
            Please contact Barterfunds first if you have any concerns with the
            Services. Barterfunds wants to address your concerns without resorting
            to formal legal proceedings, if possible. A ticket number will be
            assigned to you if your concerns cannot be addressed to your
            satisfaction at first instance. The issuance of the ticket number
            commences the internal dispute resolution procedure. Barterfunds will
            attempt to resolve the dispute internally as soon as possible. The
            parties agree to negotiate in good faith to resolve the dispute
            (which discussions shall remain confidential and be subject to
            applicable rules protecting settlement discussions from use as
            evidence in any legal proceeding).
          </span>
        </p>
        <p>
          <span>
            31.2.{' '}
          </span>
          <span />
          <span>
            In the event the dispute cannot be resolved satisfactorily, and you
            wish to assert a Claim against Barterfunds, then you agree to set forth
            the basis of such Claim in writing in a “Notice of Claim,” as a form
            of prior notice to Barterfunds. The Notice of Claim must (1) describe
            the nature and basis of the claim or dispute, (2) set forth the
            specific relief sought, (3) provide the original ticket number, and
            (4) include your custody account email. The Notice of Claim should
            be submitted to the following web address:{" "}
          </span>
          <a
            data-bn-type="link"
            href="/support"
            target="_blank"
            
          >
            Support
          </a>
          <span>
            .&nbsp; After you have provided the Notice of Claim to Barterfunds, the
            dispute referenced in the Notice of Claim may be submitted by either
            Barterfunds or you to arbitration in accordance with the below clause
            (Agreement to Arbitrate).&nbsp;
          </span>
        </p>
        <p>
          <span>
            31.3.{' '}
          </span>
          <span />
          <span>
            For the avoidance of doubt, the submission of a dispute to Barterfunds
            for resolution internally and the delivery of a Notice of Claim to
            Barterfunds are prerequisites to commencement of an arbitration
            proceeding (or any other legal proceeding).
          </span>
        </p>
        <p>
          <span>
            31.4.{' '}
          </span>
          <span />
          <span>
            During the arbitration, the amount of any settlement offer made by
            you or Barterfunds shall not be disclosed to the arbitrator.
          </span>
        </p>
        <p>
          <span>
            <strong>32.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Agreement to Arbitrate</strong>
          </span>
        </p>
        <p>
          <span>
            32.1.{' '}
          </span>
          <span />
          <span>
            Aside from where Applicable Law requires or provides you with a
            choice otherwise, you and Barterfunds agree that, subject to the
            immediately preceding clause above (Notice of Claim and Dispute
            Resolution Period), any Claim shall be determined by mandatory final
            and binding individual (not class) arbitration administered by the
            Ghana Arbitration Centre (“
          </span>
          <span>
            <strong>GAC</strong>
          </span>
          <span>
            ”) in accordance with the GAC Rules for the time being in force,
            which rules are deemed incorporated by reference in this clause.
          </span>
        </p>
        <p>
          <span>
            32.2.{' '}
          </span>
          <span />
          <span>
            The seat of arbitration shall be Ghana.&nbsp;
          </span>
        </p>
        <p>
          <span>
            32.3.{' '}
          </span>
          <span />
          <span>
            The Tribunal shall consist of one (1) arbitrator to be appointed in
            accordance with the GAC Rules for the time being in force.&nbsp;
          </span>
        </p>
        <p>
          <span>
            32.4.{' '}
          </span>
          <span />
          <span>
            The language of the arbitration shall be in English.
          </span>
        </p>
        <p>
          <span>
            32.5.{' '}
          </span>
          <span />
          <span>
            You and Barterfunds further agree that the arbitrator shall have the
            exclusive power to rule on his or her own jurisdiction, including
            without limitation any objections with respect to the existence,
            scope or validity of the Agreement to Arbitrate, or to the
            arbitrability of any Claim.
          </span>
        </p>
        <p>
          <span>
            32.6.{' '}
          </span>
          <span />
          <span>
            The arbitration provisions set forth in this clause will survive
            termination of these Terms.
          </span>
        </p>
        <p>
          <span>
            32.7.{' '}
          </span>
          <span />
          <span>
            Limitation period for filing: Any arbitration against Barterfunds must
            be commenced by filing and serving a Notice of Arbitration in
            accordance with the GAC Rules within one (1) year after the date
            that the user asserting the Claim first found out or reasonably
            should have found out the alleged act, omission or default giving
            rise to the Claim (“
          </span>
          <span>
            <strong>Limitation Period</strong>
          </span>
          <span>
            ”).&nbsp; For the avoidance of doubt, the Limitation Period shall
            include the Dispute Resolution Period set out at clause 31.1.&nbsp;
            There shall be no right to any remedy or relief for any Claim by the
            user if the Notice of Arbitration in respect of that Claim is not
            filed and served on Barterfunds within that Limitation Period.&nbsp; If
            the Limitation Period is contrary to applicable law, the user shall
            be required to bring any Claim against Barterfunds within the shortest
            time period permitted by the applicable law. A Notice of Arbitration
            may be served on Barterfunds in accordance with the Applicable Laws and
            rules of service.
          </span>
        </p>
        <p>
          <span>
            32.8.{' '}
          </span>
          <span />
          <span>
            Notice: if Barterfunds commences arbitration against you, Barterfunds will
            give you notice at the email address or mailing address you have
            provided. You agree that any notice sent to this email or mailing
            address shall be deemed effective for all purposes, including
            without limitation to determinations of the adequacy of service. It
            is your obligation to ensure that the email address and/or mailing
            address on file with Barterfunds is up-to-date and accurate.
          </span>
        </p>
        <p>
          <span>
            <strong>33.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Confidentiality</strong>
          </span>
        </p>
        <p>
          <span>
            <strong>33.1.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            The parties agree that the arbitration shall be kept confidential.
            The existence of the arbitration, the existence or content of the
            Claim, all documents and information provided or exchanged in
            connection with the arbitration, and any submissions, orders or
            awards made in the arbitration shall be kept confidential and no
            party shall disclose any of the foregoing to any third party except
            the tribunal, the GAC, the parties, their counsels, experts,
            witnesses, accountants and auditors, insurers and reinsurers, and
            any other persons necessary to the conduct of the arbitration.
            Notwithstanding the foregoing, a party may disclose such
            confidential information:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            if the written consent of the other party is obtained;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            to the extent required by applicable law or by the regulations of
            any regulatory or supervisory authority of competent jurisdiction to
            which the party is or may become subject to or pursuant to any order
            of court or other competent authority or tribunal of competent
            jurisdiction;
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            in connection with the commencement, pursuit or defence by a party
            of any bona fide legal proceedings to enforce or challenge any award
            rendered in the arbitration; and
          </span>
        </p>
        <p>
          <span>
            d.{" "}
          </span>
          <span />
          <span>
            to the extent that the relevant confidential information is in the
            public domain otherwise than by breach of this agreement.
          </span>
        </p>
        <p>
          <span>
            This term of confidentiality in this clause shall survive
            termination of these Terms and conclusion or stay of any arbitration
            brought pursuant to these Terms.
          </span>
        </p>
        <p>
          <span>
            <strong>34.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Governing law</strong>
          </span>
        </p>
        <p>
          <span>
            Aside from where Applicable Law requires or provides you with a
            choice otherwise, these Terms (including this arbitration agreement)
            shall be governed by, and construed in accordance with, the laws of
            The Republic of Ghana.
          </span>
        </p>
        <p>
          <span>
            <strong>35.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Class action waiver</strong>
          </span>
        </p>
        <p>
          <span>
            You and Barterfunds agree that any Claims shall be brought against
            Barterfunds in an arbitration on an individual basis only and not as a
            plaintiff or class member in a purported class or representative
            action. You further agree to waive any right for such Claims to be
            brought, heard, or arbitrated as a class, collective,
            representative, or private attorney general action, to the extent
            permissible by applicable law. Combining or consolidating individual
            arbitrations into a single arbitration is not permitted without the
            consent of Barterfunds.
          </span>
        </p>
        <p>
          <span>
            <strong>GENERAL&nbsp;</strong>
          </span>
        </p>
        <p>
          <span>
            <strong>36.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>General terms</strong>
          </span>
        </p>
        <p>
          <span>
            36.1.{' '}
          </span>
          <span />
          <span>
            <strong>Applicable Law</strong>
          </span>
          <span>
            . You and any Permitted User must comply with all Applicable Law,
            licensing requirements and third party rights (including data
            privacy laws and anti-money laundering and countering the financing
            of terrorism laws) in your use of the Barterfunds Services, your Barterfunds
            Account and the Platform.
          </span>
        </p>
        <p>
          <span>
            36.2.{' '}
          </span>
          <span />
          <span>
            <strong>Notices</strong>
          </span>
          <span>
            . We may give notice by email to your Email Account. It is your
            responsibility to ensure that the Email Account is up to date and
            accurate. Notices may be given, and are deemed to be received, if
            sent to your Email Account, whether or not a notice of delivery
            failure is received.
          </span>
        </p>
        <p>
          <span>
            You may give us notices only as we direct, which may change from
            time to time.&nbsp;
          </span>
        </p>
        <p>
          <span>
            Any notices, consent or other communication given under these Terms
            must be in writing, in English, and signed or otherwise authorised
            by the party giving it.
          </span>
        </p>
        <p>
          <span>
            36.3.{' '}
          </span>
          <span />
          <span>
            <strong>Announcements</strong>
          </span>
          <span>
            .{' '}
          </span>
          <span>
            <strong />
          </span>
          <span>
          All official announcements, news, promotions, competitions and
            Airdrops will be listed on the Website. These announcements are
            important, and may relate to issues that may impact the value of
            your Digital Assets, or their security. You are responsible for
            monitoring the Website and reading and considering these
            announcements.
          </span>
        </p>
        <p>
          <span>
            36.4.{' '}
          </span>
          <span />
          <span>
            <strong>Entire agreement</strong>
          </span>
          <span>
            . The Terms, together with any applicable Product Terms, constitute
            the whole agreement between you and us with respect to the Barterfunds
            Services. Each party acknowledges that it has not relied on, and
            shall have no right or remedy in respect of, any statement,
            representation, assurance or warranty (whether made negligently or
            innocently) other than as expressly set out in the Terms or any
            Product Terms.
          </span>
        </p>
        <p>
          <span>
            36.5.{' '}
          </span>
          <span />
          <span>
            <strong>Assignment</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;You may not assign or transfer any of your rights or obligations
            under the Terms without our prior written consent, which may, in
            some cases, require additional information to be provided or
            enhanced due diligence to be performed. However, we may assign or
            transfer any of our rights or obligations under the Terms at any
            time to anyone else, including, without limitation, in connection
            with any merger, acquisition, or other corporate reorganisation
            involving Barterfunds.
          </span>
        </p>
        <p>
          <span>
            36.6.{' '}
          </span>
          <span />
          <span>
            <strong>Invalidity</strong>
          </span>
          <span>
            . If, at any time, any clause or sub-clause of the Terms is or
            becomes illegal, invalid, or unenforceable in any respect, neither
            the legality, validity or enforceability of the remaining clauses or
            sub-clauses will in any way be affected or impaired.
          </span>
        </p>
        <p>
          <span>
            36.7.{' '}
          </span>
          <span />
          <span>
            <strong>Records</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;You agree that we may record any telephone, email and chat
            conversations with you, as well as any other forms of
            communications, including communication used to give Instructions or
            effect Transactions, between you and us, and that the recordings may
            be used as evidence in any proceedings relating to any agreement
            with you. These records will be our sole property.
          </span>
        </p>
        <p>
          <span>
            36.8.{' '}
          </span>
          <span />
          <span>
            <strong>Language</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;These Terms may be translated into a language other than the English
            language. Any such translation is provided solely for your
            convenience. In the event of inconsistency or ambiguity, the English
            text will prevail.
          </span>
        </p>
        <p>
          <span>
            36.9.{' '}
          </span>
          <span />
          <span>
            <strong>Third party rights</strong>
          </span>
          <span>
            . Other than in relation to Barterfunds Affiliates, nothing expressed or
            referred to in these Terms will be construed to give any person
            other than the parties to these Terms any legal or equitable right,
            remedy, or claim under or with respect to these Terms or any clause
            or sub-clause of these Terms. The Terms and all of its clauses and
            sub-clauses are for the sole and exclusive benefit of the parties to
            these Terms and their successors and permitted assigns.
          </span>
        </p>
        <p>
          <span>
            36.10.
          </span>
          <span />
          <span>
            <strong>&nbsp;Survival</strong>
          </span>
          <span>
            . All clauses and sub-clauses of these Terms, which by their nature
            extend beyond the expiration or termination of these Terms, will
            continue to be binding and operate after the termination or
            expiration of these Terms.
          </span>
        </p>
        <p>
          <span>
            36.11.{' '}
          </span>
          <span />
          <span>
            <strong>Relationship of the parties</strong>
          </span>
          <span>
            . Barterfunds is not an agent of you in the performance of these Terms.
            These Terms shall not be interpreted as facts or evidence of an
            association, joint venture, partnership, or franchise between the
            parties.
          </span>
        </p>
        <p>
          <span>
            36.12.{' '}
          </span>
          <span />
          <span>
            <strong>Digital Assets. </strong>
          </span>
          <span>
            We record in your Barterfunds Account the quantity and type of any
            Digital Assets that are held to your credit. Digital Assets held by
            Barterfunds to your credit will not be segregated on-chain in different
            wallets from Digital Assets held to the credit of other users or
            Digital Assets maintained by Barterfunds for operating and business
            purposes. Barterfunds uses an internal ledger to record customer
            entitlements to the quantity and type of Digital Assets. Each user
            will have an account which is a ledger-based (off-chain) account (or
            sub-account) within the Barterfunds system with a unique identifier
            (UID) and associated login credentials, against which the relevant
            user credit balances are recorded. Barterfunds is not a trustee of, and
            does not owe any trustee duties in relation to, any Digital Assets
            held to your credit. When you Instruct Barterfunds to transfer or
            otherwise deal with Digital Assets, Barterfunds will not use any
            specifically identifiable Digital Assets to act on your
            Instructions.&nbsp; Subject to these Terms, Barterfunds will use Digital
            Assets in the same quantity and of the same type as those credited
            to your Barterfunds Account when acting on your Instructions. Similarly,
            you will not have the right to recover any specific Digital Assets,
            rather you will have the right to receive the same quantity and same
            type of Digital Assets as those credited to your Barterfunds Account.
          </span>
        </p>
        <p>
          <span>
            36.13.{' '}
          </span>
          <span />
          <span>
            <strong>Force Majeure</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;We will not be liable for any delay or failure to perform as
            required by these Terms to the extent the delay or failure is caused
            by a Force Majeure Event.
          </span>
        </p>
        <p>
          <span>
            36.14.{' '}
          </span>
          <span />
          <span>
            <strong>No waiver</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;No delay or omission by us in exercising any right or remedy under
            the Terms will operate as a waiver of the future exercise of that
            right or remedy or of any other rights or remedies under the Terms.
            The rights and remedies provided in the Terms are cumulative and not
            exclusive of any rights or remedies provided by Applicable Law.
          </span>
        </p>
        <p>
          <span>
            36.15.{' '}
          </span>
          <span />
          <span>
            <strong>Set-off</strong>
          </span>
          <span>
            .
          </span>
          <span>
            <strong />
          </span>
          <span>
          &nbsp;In addition to any legal or other remedy available under the Terms
            or by law, we may set-off any amounts you owe to us under the Terms
            or otherwise. You must pay all sums that you owe to us free and
            clear without any set-off, counterclaim, deduction or withholding of
            any kind, save as may be required by Applicable Law.
          </span>
        </p>
        <p>
          <span>
            36.16.{' '}
          </span>
          <span />
          <span>
            <strong>Privacy of others</strong>
          </span>
          <span>
            . If you receive information about another user through the Platform
            or from utilising the Barterfunds Services, you must keep the
            information confidential and only use it in connection with the
            Barterfunds Services and always in accordance with Applicable Law. You
            must not disclose or distribute any user information to a third
            party or use the information in any manner except as reasonably
            necessary to effect a Transaction.
          </span>
        </p>
        <p>
          <span>
            36.17.{' '}
          </span>
          <span />
          <span>
            <strong>Publication of breaches.{' '}</strong>
          </span>
          <span>
            Where you have breached these Terms, Barterfunds may publish, or
            otherwise provide its users with details of the breach, including
            any information that you have provided Barterfunds. Barterfunds may only do
            so where it determines that doing so is necessary for the protection
            of other users, and consistent with Applicable Law.
          </span>
        </p>
        <p>
          <span>
            36.18.{' '}
          </span>
          <span />
          <span>
            <strong>Death of Barterfunds Account holder</strong>
          </span>
          <span>
            . In the event of your death or incapacity, the representative(s) or
            legal beneficiary/beneficiaries of your estate may give us written
            notice. If we have reason to believe you have died, we may suspend
            your Barterfunds Account. Your Barterfunds Account will be suspended
            until:&nbsp;
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            a representative of your estate or authorised beneficiary completes
            a successful inheritance application to receive the assets in your
            Barterfunds Account in accordance with our requirements which may be
            amended from time to time without notice; ; or
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            you provide satisfactory proof that you are not deceased.&nbsp;
          </span>
        </p>
        <p>
          <span>
            Our ability to provide your representative(s) with the assets in
            your Barterfunds Account is subject to the restrictions imposed by
            Applicable Law and these Terms. We do not commit to any particular
            timeline for the transfer of assets held to the credit of your
            Barterfunds Account.
          </span>
        </p>
        <p>
          <span>
            36.19.{' '}
          </span>
          <span />
          <span>
            <strong>Tax</strong>
          </span>
          <span>
            . It is your responsibility to determine what, if any, taxes apply
            to the payments you make or receive, and it is your responsibility
            to collect, report, and remit the correct tax to the appropriate tax
            authority. You agree that we are not responsible for determining
            whether any taxes apply to your use of the Barterfunds Services, or for
            collecting, reporting or remitting any taxes arising from any
            Transaction or use of the Barterfunds Services.&nbsp;
          </span>
        </p>
        <p>
          <span>
            You acknowledge that we may make certain reports to tax authorities
            regarding Transactions made on the Platform, and that we may, in our
            sole discretion or as required by Applicable Law, provide you with
            additional documentation or records needed by you to calculate any
            tax obligations. We may also withhold and deduct at source any taxes
            due under Applicable Law in our sole discretion.
          </span>
        </p>
        <p>
          <span>
            <strong>37.{' '}</strong>
          </span>
          <span>
            <strong />
          </span>
          <span>
            <strong>Definitions and interpretation</strong>
          </span>
        </p>
        <p>
          <span>
            In these Terms:
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            clause headings and numbering are for convenience only and do not
            affect the meaning, priority or interpretation of any clause or
            sub-clause of these Terms;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            the words “include” or “including” shall mean including without
            limitation and include without limitation respectively;
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            any undertaking to do or not do a thing shall be deemed to include
            an undertaking not to permit or suffer the doing of that act or
            thing;
          </span>
        </p>
        <p>
          <span>
            d.{" "}
          </span>
          <span />
          <span>
            words importing the singular include the plural and vice versa and
            words importing a gender include any gender;&nbsp;
          </span>
        </p>
        <p>
          <span>
            e.{" "}
          </span>
          <span />
          <span>
            any reference to a document is to that document as amended, varied
            or novated from time to time otherwise than in breach of these Terms
            or that document; and
          </span>
        </p>
        <p>
          <span>
            f.{" "}
          </span>
          <span />
          <span>
            in the event of inconsistency between these Terms (including any
            documents referred to in these Terms) the inconsistency shall be
            solved by giving such provisions and documents the following order
            of precedence:
          </span>
        </p>
        <p>
          <span>
            i.{" "}
          </span>
          <span />
          <span>
            the Product Terms;
          </span>
        </p>
        <p>
          <span>
            ii.{" "}
          </span>
          <span />
          <span>
            the{" "}
          </span>
          <a
            data-bn-type="link"
            href="/privacy-policy"
            target="_blank"
            
          >
            Privacy Notice&nbsp;
          </a>
          <span>
            ; and
          </span>
        </p>
        <p>
          <span>
            iii.{' '}
          </span>
          <span />
          <span>
            these Terms.
          </span>
        </p>
        <p>
          <span>
            g.{" "}
          </span>
          <span />
          <span>
            except where the context requires others, the following terms shall
            have the following meanings:
          </span>
        </p>
        <p>
          <span>
            <strong>Access IDs </strong>
          </span>
          <span>
            means your Barterfunds Account details, username, passwords, personal
            identification numbers, API keys, API secret keys, or any other
            codes or forms of authentication that you use to access your Barterfunds
            Account or the Barterfunds Services or to send Instructions.
          </span>
        </p>
        <p>
          <span>
            <strong>Account History&nbsp;</strong>
          </span>
          <span>
            means the written record (including electronic records) of your
            Transactions and your Barterfunds Account.
          </span>
        </p>
        <p>
          <span>
            Airdrop means the attempted distribution or distribution by a
            Digital Asset network of any Digital Asset to Digital Asset
            addresses of a supported network.
          </span>
        </p>
        <p>
          <span>
            <strong>API </strong>
          </span>
          <span>
          means application program interface.
          </span>
        </p>
        <p>
          <span>
            <strong>Applicable Law </strong>
          </span>
          <span>
            means all relevant or applicable statutes, laws (including rules of
            common law), principles of equity, rules, regulations, regulatory
            principles and requirements, notices, orders, writs, injunctions,
            judgements, bye-laws, rulings, directives, proclamations, circulars,
            mandatory codes of conduct, guidelines, practice notes and
            interpretations (whether of a governmental body, regulatory or other
            authority, or self-regulatory organisation of which Barterfunds is a
            member), that are applicable to the provision, receipt or use of the
            Barterfunds Services, or any other products or deliverables provided,
            used or received in connection with the Barterfunds Services, these
            Terms, or any Product Terms.
          </span>
        </p>
        <p>
          <span>
            <strong>Backed Digital Assets </strong>
          </span>
          <span>
            has the meaning given to it in clause ‎15.3.{' '}
          </span>
        </p>
        <p>
          <span>
            <strong>Barterfunds</strong>
          </span>
          <span>
            ,{" "}
          </span>
          <span>
            <strong>we</strong>
          </span>
          <span>
            ,{" "}
          </span>
          <span>
            <strong>our&nbsp;</strong>
          </span>
          <span>
            or{" "}
          </span>
          <span>
            <strong>us</strong>
          </span>
          <span>
          &nbsp;means Baretr Funds (a company incorporated under the laws
            of the Republic of Ghana with registration number BN546330722 and
            address at 13 Ayabeng Avenue, Adenta).
          </span>
        </p>
        <p>
          <span>
            <strong>Barterfunds Account</strong>
          </span>
          <span>
          &nbsp;means any accounts (including Corporate Barterfunds Accounts) or
            sub-accounts (including any Barterfunds Sub-Account), which are opened
            by Barterfunds for you to record your use of Barterfunds Services.&nbsp;
          </span>
        </p>
        <p>
          <span>
            <strong>Barterfunds Affiliates </strong>
          </span>
          <span>
          &nbsp;means with respect to Barter Funds: any other person which,
            directly or indirectly, Controls, is Controlled by, or is under
            common Control with, Barter Funds.
          </span>
        </p>
        <p>
          <span>
            <strong>Barterfunds API</strong>
          </span>
          <span>
          &nbsp;means an API made available by a Barterfunds Affiliate to you as a
            service, or third-party applications relying on such an API.
          </span>
        </p>
        <p>
          <span>
            <strong>Barterfunds IP</strong>
          </span>
          <span>
          &nbsp;means the Created IP and all other Intellectual Property Rights
            owned by or licensed, on a sub-licenseable basis, to us as at the
            date of the Terms and any other Intellectual Property Rights owned
            or acquired by or licensed, on a sub-licenseable basis, to us after
            the date of these Terms, and which are provided by us to you in the
            course of providing you with the Barterfunds Services.
          </span>
        </p>
        <p>
          <span>
            <strong>Barterfunds Services</strong>
          </span>
          <span>
          &nbsp;means the services offered by us to you through the Platform.
          </span>
        </p>
        <p>
          <span>
            <strong>Barterfunds Sub-Account</strong>
          </span>
          <span>
          &nbsp;means a sub-account that is set up under a primary Barterfunds Account.
          </span>
        </p>
        <p>
          <span>
            <strong>Chat Service </strong>
          </span>
          <span>
            has the meaning given to it in clause ‎5.{' '}
          </span>
        </p>
        <p>
          <span>
            <strong>Claim</strong>
          </span>
          <span>
          &nbsp;means any dispute, claim, difference or controversy between you and
            Barterfunds (and/or any Barterfunds Affiliates) arising out of, in
            connection with, or relating in any way to:&nbsp;
          </span>
        </p>
        <p>
          <span>
            (a)
          </span>
          <span />
          <span>
            these Terms or any Product Terms, including their existence,
            validity, subject matter, interpretation, performance, breach,
            negotiation, termination, enforceability or the consequences of
            their nullity;
          </span>
        </p>
        <p>
          <span>
            (b)
          </span>
          <span />
          <span>
            your relationship with Barterfunds (and/or any Barterfunds Affiliates) as a
            user (whether based in contract, tort, statute, fraud,
            misrepresentation, or any other legal theory, and whether the claims
            arise during or after the termination of these Terms); or
          </span>
        </p>
        <p>
          <span>
            (c)
          </span>
          <span />
          <span>
            any non-contractual obligations arising out of or relating to these
            Terms, or any Product Terms, or your relationship with Barterfunds
            (and/or any Barterfunds Affiliates).
          </span>
        </p>
        <p>
          <span>
            <strong>Control</strong>
          </span>
          <span>
          &nbsp;means the power of a person to secure that the affairs of another
            are conducted in accordance with the wishes of the first person
            whether by means of:
          </span>
        </p>
        <p>
          <span>
            (a)
          </span>
          <span />
          <span>
            in the case of a company, being the beneficial owner of more than
            fifty percent (50%) of the issued share capital of or of the voting
            rights in that company, or having the right to appoint and remove a
            majority of the directors or otherwise control the votes at board
            meetings of that company by virtue of any powers conferred by the
            organisational documents, shareholders’ agreement, a majority of the
            board of directors or any other document regulating the affairs of
            that company or by any other means; or
          </span>
        </p>
        <p>
          <span>
            (b)
          </span>
          <span />
          <span>
            in the case of a partnership, being the beneficial owner of more
            than fifty percent (50%) of the capital of that partnership, or
            having the right to control the composition of or the votes to the
            majority of the management of that partnership by virtue of any
            powers conferred by the partnership agreement or any other document
            regulating the affairs of that partnership or by any other means.
          </span>
        </p>
        <p>
          <span>
            <strong>Corporate Barterfunds Account</strong>
          </span>
          <span>
          &nbsp;means a Barterfunds Account maintained for a corporation, entity, or
            other organisation for the provision of Barterfunds Services.
          </span>
        </p>
        <p>
          <span>
            <strong>Created IP</strong>
          </span>
          <span>
          &nbsp;means any Intellectual Property Rights created by you pursuant to
            these Terms, including the User Materials, but excluding any other
            User IP.
          </span>
        </p>
        <p>
          <span>
            <strong>Digital Assets</strong>
          </span>
          <span>
          &nbsp;means a digital representation of value or rights which may be
            transferred and stored electronically, using distributed ledger
            technology or similar technology, including, but not limited to,
            cryptocurrencies, stablecoins, non-fungible tokens and tokenised
            derivatives of any other digital asset.
          </span>
        </p>
        <p>
          <span>
            <strong>Dominant Digital Asset </strong>
          </span>
          <span>
            means a Forked Digital Asset that has dominance over one or more
            other versions of a Digital Asset that was subject to the relevant
            Fork, as determined by us in our sole discretion.
          </span>
        </p>
        <p>
          <span>
            <strong>Email</strong>
          </span>
          <span />
          <span>
            <strong>&nbsp;Account</strong>
          </span>
          <span>
          &nbsp;means the email account(s) associated with your Barterfunds Account(s),
            as agreed with Barterfunds from time to time, in accordance with any
            processes identified by Barterfunds when using the Platform.
          </span>
        </p>
        <p>
          <span>
            <strong>Fiat Currency </strong>
          </span>
          <span>
            means any government or central bank issued national, or
            supra-national, currency, or other monetary obligation denominated
            in such currency and which is not a Digital Asset.
          </span>
        </p>
        <p>
          <span>
            <strong>Force Majeure Events </strong>
          </span>
          <span>
            means:&nbsp;
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            any fire, strike, riot, civil unrest, terrorist act, war or
            industrial action;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            any natural disaster such as floods, tornadoes, earthquakes and
            hurricanes;
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            any epidemic, pandemic or public health emergency of national or
            international concern;
          </span>
        </p>
        <p>
          <span>
            d.{" "}
          </span>
          <span />
          <span>
            any act or regulation made by a government, supra national body or
            authority that we believe stops us from providing Barterfunds Services
            on the Platform;
          </span>
        </p>
        <p>
          <span>
            e.{" "}
          </span>
          <span />
          <span>
            the suspension or closure of any Barterfunds Affiliate;
          </span>
        </p>
        <p>
          <span>
            f.{" "}
          </span>
          <span />
          <span>
            the nationalisation of any Barterfunds Affiliate;
          </span>
        </p>
        <p>
          <span>
            g.{" "}
          </span>
          <span />
          <span>
            the imposition of limits or unusual terms by a government on any
            Digital Assets traded on our Platform;
          </span>
        </p>
        <p>
          <span>
            h.{" "}
          </span>
          <span />
          <span>
            technical failures in transmission, communication or computer
            facilities including power failures and electronic or equipment
            failures;
          </span>
        </p>
        <p>
          <span>
            i.{" "}
          </span>
          <span />
          <span>
            the failure of any supplier, intermediate broker, agent, principal
            custodian, sub-custodian, dealer, exchange, staking platform,
            liquidity pool, bridge provider, issuer of a Backed Digital Asset,
            market maker, clearing house or regulatory organisation to perform
            its obligations to us;&nbsp;
          </span>
        </p>
        <p>
          <span>
            j.{" "}
          </span>
          <span />
          <span>
            any labour or trade disputes, strikes, industrial actions or
            lockouts (other than in each case by Barterfunds or the Barterfunds
            Affiliates); and/or
          </span>
        </p>
        <p>
          <span>
            k.{" "}
          </span>
          <span />
          <span>
            an event which significantly disrupts the market for Digital Assets,
            which could include excessive movements in the price, supply or
            demand of a Digital Asset, whether regulated or unregulated.
          </span>
        </p>
        <p>
          <span>
            <strong>Fork </strong>
          </span>
          <span>
            means
          </span>
          <span>
            <strong />
          </span>
          <span>
            any planned, unplanned, sudden, scheduled, expected, unexpected,
            publicised, not well-known, consensual, and/or controversial changes
            to the underlying operating rules of certain Digital Assets that may
            occur from time to time, in such a way as to result in the creation
            of one or more related versions of an existing Digital Asset.
          </span>
        </p>
        <p>
          <span>
            <strong>Forked Digital Asset </strong>
          </span>
          <span>
            means a Digital Asset that results from a Fork.
          </span>
        </p>
        <p>
          <span>
            <strong>Improper Intent</strong>
          </span>
          <span>
            means Barterfunds reasonably determines that there may be actual or
            suspected market manipulation and market abuse on your part,
            including (without limitation), capitalising on opportunities where
            the executable price of a Transaction does not reflect prevailing
            market rates, or taking unfair advantage of the way in which Barterfunds
            offers prices.
          </span>
        </p>
        <p>
          <span>
            <strong>Instruction</strong>
          </span>
          <span>
          &nbsp;means any instruction, request, or order given to Barterfunds by you or
            a Permitted User in relation to the operation of your Barterfunds
            Account or to execute any Transaction, through such medium and in
            such form and manner as Barterfunds may require and “Instruct” shall be
            construed accordingly.
          </span>
        </p>
        <p>
          <span>
            <strong>Intellectual Property Rights</strong>
          </span>
          <span>
          &nbsp;means: (a) copyright, patents, database rights and rights in trade
            marks, designs, know-how and confidential information (whether
            registered or unregistered); (b)&nbsp;applications for registration,
            and rights to apply for registration, of any of the foregoing
            rights; and (c) all other intellectual property rights and
            equivalent or similar forms of protection existing anywhere in the
            world.
          </span>
        </p>
        <p>
          <span>
            <strong>List of Prohibited Countries </strong>
          </span>
          <span>
            means the list of countries accessible at{" "}
          </span>
          <a
            data-bn-type="link"
            href="/legal/list-of-prohibited-countries"
            target="_blank"
            
          >
            Prohibited Countries
          </a>
          <span>
            .
          </span>
        </p>
        <p>
          <span>
            <strong>Local Terms</strong>
          </span>
          <span>
          &nbsp;means the terms governing your use of the Barterfunds Services provided
            in any particular jurisdiction.
          </span>
        </p>
        <p>
          <span>
            <strong>Losses</strong>
          </span>
          <span>
            has the meaning given to it in clause{" "}
          </span>
          <span>
            <strong>‎</strong>
          </span>
          <span>
            29.1.{' '}
          </span>
        </p>
        <p>
          <span>
            <strong>Manifest Error </strong>
          </span>
          <span>
            means any error, omission or misquote (whether an error of Barterfunds
            or any third party) which is manifest or palpable, including a
            misquote by any representative of Barterfunds taking into account the
            current market and currently advertised quotes, or any error of any
            information, source, official, official result or pronunciation.
          </span>
        </p>
        <p>
          <span>
            <strong>Mobile App </strong>
          </span>
          <span>
            means any mobile application developed or provided by us or any of
            the Barterfunds Affiliates that enables you to use or otherwise access
            Barterfunds Services.
          </span>
        </p>
        <p>
          <span>
            Network Event means in relation to a Digital Asset, any event (other
            than an Airdrop or Fork) in respect of the blockchain or the smart
            contract that underlies a Digital Asset, which is beyond Barterfunds’s
            control, and results in either (a) a loss of control or ownership by
            Barterfunds or a third party of any amount of such Digital Asset; or (b)
            transaction records on the blockchain being altered, reversed or
            otherwise invalidated, whether by way of a fraudulent act or
            consensus, which shall include without limitation any double
            spending attack, 51-percent attack, or blockchain reorganization, in
            each case as determined by Barterfunds in good faith and in its sole
            discretion.
          </span>
        </p>
        <p>
          <span>
            <strong>Permitted User</strong>
          </span>
          <span>
          &nbsp;means any person identified by you and communicated to us, in
            accordance with these Terms, that is authorised to act on a user’s
            behalf with respect to any Corporate Barterfunds Account, or with our
            prior written consent, on behalf of a third party with respect to a
            Barterfunds Sub-Account associated with a Corporate Barterfunds Account.
          </span>
        </p>
        <p>
          <span>
            <strong>Platform</strong>
          </span>
          <span>
          &nbsp;means the digital platform that we or any of the Barterfunds Affiliates
            may make accessible to you via Sites, the Mobile App, a Barterfunds API
            or by such other means as Barterfunds Affiliates may prescribe from time
            to time for the use of Barterfunds Services.
          </span>
          <br />
          <br />
          <span>
            <strong>Privacy Notice </strong>
          </span>
          <span>
            means the privacy notice located at{" "}
          </span>
          <a
            data-bn-type="link"
            href="/privacy-policy"
            target="_blank"
            
          >
            Privacy Policy
          </a>
          <span>
            .&nbsp;
          </span>
        </p>
        <p>
          <span>
            <strong>Product Terms</strong>
          </span>
          <span>
          &nbsp;means the product-specific terms and conditions that apply to the
            use of a Barterfunds Service, in addition to these Terms.
          </span>
        </p>
        <p>
          <span>
            <strong>Regulatory Authority</strong>
          </span>
          <span>
          &nbsp;means any foreign, domestic, state, federal, cantonal, municipal or
            local governmental, executive, legislative, judicial,
            administrative, supervisory or regulatory authority, agency,
            quasi-governmental authority, court, commission, government
            organisation, self-regulatory organisation having regulatory
            authority, tribunal, arbitration tribunal or panel or supra-national
            organisation, or any division or instrumentality thereof, including
            any tax authority.
          </span>
        </p>
        <p>
          <span>
            <strong>Restricted Person </strong>
          </span>
          <span>
            means a person or legal entity who (a) is included in any trade
            embargoes or economic sanctions, terrorist or corrupt foreign
            officials list (such as the United Nations Security Council
            Sanctions List,&nbsp; issued by a government agency including the
            list of specially designated nationals maintained by the office of
            foreign assets control of the U.S. Department of the Treasury
            (OFAC), or the denied persons or entity list of the U.S. Department
            of Commerce), or by the United Kingdom, European Union, Canada) tor
            (b) resides, or is established, or has operations in, in any country
            listed in the{" "}
          </span>
          <a
            data-bn-type="link"
            href="/legal/list-of-prohibited-countries"
            target="_blank"
            
          >
            List of Prohibited Countries
          </a>
          <span>
            .
          </span>
        </p>
        <p>
          <span>
            <strong>Risk Warning</strong>
          </span>
          <span>
          &nbsp;means the general risk warning published on the Website.
          </span>
        </p>
        <p>
          <span>
            <strong>Security Breach</strong>
          </span>
          <span>
          &nbsp;means&nbsp;
          </span>
        </p>
        <p>
          <span>
            a.{" "}
          </span>
          <span />
          <span>
            your Barterfunds Account(s) or any of your Access IDs have been
            compromised;
          </span>
        </p>
        <p>
          <span>
            b.{" "}
          </span>
          <span />
          <span>
            the loss, theft, or unauthorised use of any of your Access IDs or
            any unauthorised access to and use of your Barterfunds Account or the
            Barterfunds Services on your behalf; or
          </span>
        </p>
        <p>
          <span>
            c.{" "}
          </span>
          <span />
          <span>
            any other security incident (including a cyber-security attack)
            affecting you and/or Barterfunds.
          </span>
        </p>
        <p>
          <span>
            <strong>Sites</strong>
          </span>
          <span>
          &nbsp;means our Website and any other websites, pages, features, or
            content we own or operate.
          </span>
        </p>
        <p>
          <span>
            <strong>Supported Digital Assets</strong>
          </span>
          <span>
          &nbsp;means those Digital Assets that are available in connection with
            your use of the Barterfunds Services.
          </span>
        </p>
        <p>
          <span>
            <strong>Terms</strong>
          </span>
          <span>
          &nbsp;means these terms of use, together with any other documents
            expressly incorporated by reference, including the Product Terms, in
            each case as amended or supplemented from time to time.
          </span>
        </p>
        <p>
          <span>
            <strong>Trade Marks</strong>
          </span>
          <span>
          &nbsp;means the Intellectual Property Rights in the trade marks, service
            marks and logos used and displayed on or through the Platform, the
            Sites and/or the Barterfunds Services.
          </span>
        </p>
        <p>
          <span>
            <strong>Transaction</strong>
          </span>
          <span>
          &nbsp;means selling, purchasing, or entering into any other type of
            transactions, or agreeing to sell, purchase or enter into any other
            type of transactions involving Digital Asset(s), their derivatives,
            other asset(s) or product(s) as Barterfunds may from time to time permit
            to be carried out on the Platform, and transferring Digital Assets
            or Fiat Currency into or out of your Barterfunds Account.
          </span>
        </p>
        <p>
          <span>
            <strong>User IP </strong>
          </span>
          <span>
          &nbsp;means the Intellectual Property Rights owned by or licensed to you
            as at the date of these Terms and any other Intellectual Property
            Rights owned or acquired by or licensed to you after the date of
            these Terms, excluding Barterfunds IP.&nbsp;
          </span>
        </p>
        <p>
          <span>
            <strong>User Materials</strong>
          </span>
          <span>
          &nbsp;means the Intellectual Property Rights in any reviews, posts,
            information, data, and comments you or other users provide to us on
            the Sites (through our “Contact Us” pages or otherwise), the
            Platform, through use of Barterfunds Services, or otherwise.
          </span>
        </p>
        <p>
          <span>
            <strong>Website</strong>
          </span>
          <span>
          &nbsp;means the website located at{" "}
          </span>
          <a
            data-bn-type="link"
            href="http://www.barter-funds.com"
            target="_blank"
            rel="noreferrer"
          >
            BarterFunds
          </a>
          <span>
            .&nbsp;
          </span>
        </p>

        
            
            </article>
          </PageContainer>
        </Block>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Terms;

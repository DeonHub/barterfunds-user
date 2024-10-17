import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useLocation, useNavigate } from 'react-router-dom';

import Main from './Main/Main';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import ForgotPassword from './Auth/ForgotPassword';
// import Success from './Auth/Success';

import ResetPassword from './Auth/ResetPassword';
import TwoFactor from './Auth/TwoFactor';
import AccountActivation from './Auth/AccountActivation';
import UserDashboard from './User/UserDashboard';

import NotFound from './NotFound';

import UserProfile from './User/UserProfile';
import TransactionsPanel from './User/TransactionsPanel';

import UserKycs from './User/UserKycs';
import KycForm from './User/KycForm';
import OrderSuccess from './User/OrderSuccess';
import TransactionSuccess from './User/TransactionSuccess';
import Transactions from './User/Transactions';
import UserWallet from './User/Wallet';
import UserSupport from './User/UserSupport';
import Faqs from './User/Faqs';

import { UserProvider } from './User/components/UserContext';
import PasswordReset from './User/PasswordReset';
import Notifications from './User/Notifications';
import Currencies from './User/Currencies';


import DigitalAssets from './Main/Pages/Header/DigitalAssets';
import Escrow from './Main/Pages/Header/Escrow';
import Invoice from './Main/Pages/Header/Invoice';
import Marketplace from './Main/Pages/Header/Marketplace';
import MultiCurrency from './Main/Pages/Header/MultiCurrency';
import PayForMe from './Main/Pages/Header/PayForMe';
import IntTransfer from './Main/Pages/Header/IntTransfer';
import VirtualCard from './Main/Pages/Header/VirtualCard';
import GiftCard from './Main/Pages/Header/GiftCard';


import Affiliate from './Main/Pages/Footer/Partnership/Affiliates';
import Developers from './Main/Pages/Footer/Partnership/Developers';
import Investors from './Main/Pages/Footer/Partnership/Investors';
import Partners from './Main/Pages/Footer/Partnership/Partners';
import AMLPolicy from './Main/Pages/Footer/Legal/AMLPolicy';
import AffiliatePolicy from './Main/Pages/Footer/Legal/AffiliatePolicy';
import CookiesPolicy from './Main/Pages/Footer/Legal/Cookies';
import PaymentPolicy from './Main/Pages/Footer/Legal/PaymentPolicy';
import PrivacyPolicy from './Main/Pages/Footer/Legal/PrivacyPolicy';
import RefundPolicy from './Main/Pages/Footer/Legal/RefundPolicy';
import Terms from './Main/Pages/Footer/Legal/Terms';
import FAQ from './Main/Pages/Footer/Help/FAQ';
import FeaturesPage from './Main/Pages/Footer/Help/FeaturesPage';
import Fees from './Main/Pages/Footer/Help/Fees';
import Support from './Main/Pages/Footer/Help/Support';
import About from './Main/Pages/Footer/Company/About';
import Contact from './Main/Pages/Footer/Company/Contact';
import Services from './Main/Pages/Footer/Company/Services';
import Products from './Main/Pages/Footer/Company/Products';
import Personal from './Main/Pages/Footer/Solutions/Personal';
import Business from './Main/Pages/Footer/Solutions/Business';
import Organization from './Main/Pages/Footer/Solutions/Organization';
import Freelance from './Main/Pages/Footer/Solutions/Freelance';
import HowItWorks from './Main/Pages/Footer/Resources/HowItWorks';
import Newsletter from './Main/Pages/Footer/Resources/Newsletter';
import Security from './Main/Pages/Footer/Resources/Security';
import ComingSoon from './Main/Pages/ComingSoon';
import PaypalFees from './Main/Pages/Tools/PaypalFees';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
      ReactGA.pageview(location.pathname);
  }, [location]);

  // const location = useLocation();

  // useEffect(() => {
  //     ReactGA.pageview(location.pathname);
  // }, [location]);


  const navigateTo = (path) => {
      navigate(path);
  };



  return (
  
    <Router>
      <UserProvider>
      <Routes>

        {/* Main routes go here */}
        <Route path={`/`} element={<Main />} />
        
        {/* Auth routes go here */}
        <Route path={`/login`} element={<Login navigate={navigateTo} />}/>
        <Route path={`/signup`} element={<Signup navigate={navigateTo} />} />
        <Route path={`/forgot-password`} element={<ForgotPassword navigate={navigateTo} />} />
        <Route path={`/login/mfa`} element={<TwoFactor navigate={navigateTo} />} />
        <Route path={`/account-activation/:activationToken`} element={<AccountActivation />} />
        <Route path={`/reset-password/:resetToken`} element={<ResetPassword />} />


        {/* User routes go here */}
        <Route path={`/user/dashboard`} element={<UserDashboard />} />
        <Route path={`/user/profile`} element={<UserProfile />} />
        <Route path={`/user/transactions-panel`} element={<TransactionsPanel />} />
        <Route path={`/user/transactions`} element={<Transactions />} />
        <Route path={`/user/transactions/success`} element={<TransactionSuccess />} />
        <Route path={`/user/orders/success`} element={<OrderSuccess />} />
        <Route path={`/user/kycs`} element={<UserKycs />} />
        <Route path={`/user/wallet`} element={<UserWallet />} />
        <Route path={`/user/support`} element={<UserSupport />} />
        <Route path={`/user/faqs`} element={<Faqs />} />
        <Route path={`/user/password-reset`} element={<PasswordReset />} />
        <Route path={`/user/notifications`} element={<Notifications />} />
        <Route path={`/user/kycs/application`} element={<KycForm />} />
        <Route path={`/user/currencies`} element={<Currencies />} />
        

        {/* Header Pages routes go here*/}
        <Route path={`/about`} element={<About />} />
        <Route path={`/contact`} element={<Contact />} />
        <Route path={`/services`} element={<Services />} />
        <Route path={`/personal`} element={<Personal />} />
        <Route path={`/business`} element={<Business />} />
        <Route path={`/organization`} element={<Organization />} />
        <Route path={`/freelance`} element={<Freelance />} />
        <Route path={`/products`} element={<Products />} />
        <Route path={`/how-it-works`} element={<HowItWorks />} />
        <Route path={`/newsletter`} element={<Newsletter/>} />
        <Route path={`/security`} element={<Security />} />
        <Route path={`/digital-assets`} element={<DigitalAssets />} />
        <Route path={`/escrow`} element={<Escrow />} />
        <Route path={`/invoice`} element={<Invoice />} />
        <Route path={`/marketplace`} element={<Marketplace />} />
        <Route path={`/multicurrency`} element={<MultiCurrency />} />
        <Route path={`/pay-for-me`} element={<PayForMe />} />
        <Route path={`/transfer`} element={<IntTransfer />} />
        <Route path={`/virtual-card`} element={<VirtualCard />} />
        <Route path={`/gift-card`} element={<GiftCard />} />

        {/* Footer Pages routes go here*/}
        <Route path={`/affiliates`} element={<Affiliate />} />
        <Route path={`/developers`} element={<Developers />} />
        <Route path={`/investors`} element={<Investors />} />
        <Route path={`/affiliate-policy`} element={<AffiliatePolicy />} />
        <Route path={`/aml-policy`} element={<AMLPolicy />} />
        <Route path={`/cookies-policy`} element={<CookiesPolicy />} />
        <Route path={`/payment-policy`} element={<PaymentPolicy />} />
        <Route path={`/privacy-policy`} element={<PrivacyPolicy />} />
        <Route path={`/refund-policy`} element={<RefundPolicy />} />
        <Route path={`/terms-of-use`} element={<Terms />} />
        <Route path={`/partners`} element={<Partners />} />
        <Route path={`/faq`} element={<FAQ />} />
        <Route path={`/features`} element={<FeaturesPage />} />
        <Route path={`/fees`} element={<Fees />} />
        <Route path={`/support-center`} element={<Support />} />
        
        <Route path={`/coming-soon`} element={<ComingSoon/>} />
        <Route path={`/paypal-fees-checker`} element={<PaypalFees />} />
        
        <Route path={`/*`} element={<NotFound />} />

      </Routes>
      </UserProvider>
    </Router>

  );
};

export default App;

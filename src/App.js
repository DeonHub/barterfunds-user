import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

const App = () => {

  const navigateTo = (path) => {
    window.location.href = path;
  };



  return (
    <Router>
      <Routes>

        {/* Main routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Main />} />
 
        {/* Auth routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login navigate={navigateTo} />}/>
        <Route path={`${process.env.PUBLIC_URL}/signup`} element={<Signup navigate={navigateTo} />} />
        <Route path={`${process.env.PUBLIC_URL}/forgot-password`} element={<ForgotPassword navigate={navigateTo} />} />
        <Route path={`${process.env.PUBLIC_URL}/login/mfa`} element={<TwoFactor navigate={navigateTo} />} />
        <Route path={`${process.env.PUBLIC_URL}/account-activation/:activationToken`} element={<AccountActivation />} />
        <Route path={`${process.env.PUBLIC_URL}/reset-password/:resetToken`} element={<ResetPassword />} />


        {/* User routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/user/dashboard`} element={<UserDashboard />} />
        <Route path={`${process.env.PUBLIC_URL}/user/profile`} element={<UserProfile />} />
        <Route path={`${process.env.PUBLIC_URL}/user/transactions-panel`} element={<TransactionsPanel />} />
        <Route path={`${process.env.PUBLIC_URL}/user/transactions`} element={<Transactions />} />
        <Route path={`${process.env.PUBLIC_URL}/user/transactions/success`} element={<TransactionSuccess />} />
        <Route path={`${process.env.PUBLIC_URL}/user/orders/success`} element={<OrderSuccess />} />
        <Route path={`${process.env.PUBLIC_URL}/user/kycs`} element={<UserKycs />} />
        <Route path={`${process.env.PUBLIC_URL}/user/wallet`} element={<UserWallet />} />
        <Route path={`${process.env.PUBLIC_URL}/user/support`} element={<UserSupport />} />
        <Route path={`${process.env.PUBLIC_URL}/user/kycs/application`} element={<KycForm />} />
        
        
        

        <Route path={`${process.env.PUBLIC_URL}/*`} element={<NotFound />} />

      </Routes>
    </Router>
  );
};

export default App;

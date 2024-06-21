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
import Faqs from './User/Faqs';
// import { useDispatch } from 'react-redux';
// import { fetchCurrentUser } from './redux/userSlice';
import { UserProvider } from './User/components/UserContext';
import PasswordReset from './User/PasswordReset';
import Notifications from './User/Notifications';

const App = () => {

  const navigateTo = (path) => {
    window.location.href = path;
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
        
        
        

        <Route path={`/*`} element={<NotFound />} />

      </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;

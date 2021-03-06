import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
/* Pages */
// import Table from './pages/table';
import HomePage from './pages/home';
import Facility from './pages/facility_report';
import Security from './pages/security_reports';
import NotFound from './pages/errors/not-found';
import Communication from './pages/communication';
import Notice from './pages/notice';
import signin from './pages/auth/signin';
import signup from './pages/auth/signup';
import forgotPassword from './pages/auth/forgot-password';
import passwordReset from './pages/auth/password-reset';
import VerifyEmail from './pages/auth/verify_email';
import DefaultLayout from './layouts/default.layout';
// import requireAuth from './authentication';
// import ProtectedLayout from './layouts/protected.layout';
// import HomeLayout from './layouts/home.layout';
import LoadingLayout from './layouts/loading.layout';
import DashboardLayout from './layouts/dashboard.layout';
import SingleCardComponent from './pages/home/single-card/single';
import MessagePage from './pages/communication/message/message';

const Routes = () => (
  <Router>
    <Suspense fallback={<LoadingLayout />}>
      <Switch>
        <DashboardLayout component={HomePage} exact path="/" />
        <DashboardLayout component={Facility} exact path="/facility" />
        <DashboardLayout component={Security} exact path="/security" />
        <DashboardLayout component={Communication} exact path="/communication" />
        <DashboardLayout component={Notice} exact path="/notice" />
        <Route
          component={forgotPassword}
          path="/forgot/password"
        />

        <DefaultLayout
          component={passwordReset}
          path="/user/password/reset"
        />

        <Route component={VerifyEmail} path="/user/verify/email" />
        <Route component={signin} exact path="/signin" />
        <Route component={signup} exact path="/signup" />
        <DashboardLayout component={SingleCardComponent} exact path="/card" />
        <DashboardLayout component={MessagePage} exact path="/communication/message" />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Routes);

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
import NoticePage from './pages/notice';
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

const Routes = () => (
  <Router>
    <Suspense fallback={<LoadingLayout />}>
      <Switch>
        <DashboardLayout component={HomePage} exact path="/" />
        <DashboardLayout component={Facility} exact path="/facility" />
        <DashboardLayout component={Security} exact path="/security" />
        <DashboardLayout component={Communication} exact path="/communication" />
        <DashboardLayout component={NoticePage} exact path="/notice" />
        <DefaultLayout
          component={forgotPassword}
          exact
          path="/forgot/password"
        />
        <DefaultLayout component={signin} exact path="/session/new" />

        <DefaultLayout
          component={passwordReset}
          path="/user/password/reset"
        />

        <DefaultLayout component={VerifyEmail} path="/user/verify/email" />
        <Route component={signin} exact path="/signin" />
        <Route component={signup} exact path="/signup" />
        <DefaultLayout component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Routes);

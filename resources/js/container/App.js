/**
 * App.js Layout Start Here
 */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

// rct theme provider
import RctThemeProvider from './RctThemeProvider';

// CRM layout
import CRMLayout from './CRMLayout';
// app signin
import AppSignIn from './Signin';
import AppSignUp from './Signup';

import {
   action_validate_token
} from '../actions'

const App = ({ history, location, match, user, action_validate_token }) => {

   useEffect(() => {
      if (location.pathname.startsWith('/dashboard')) {
         if (user === null) {
            // return (<Redirect to={'/signin'} />);
            history.replace('/signin')
         } else {
            // token validate
            action_validate_token({ user }, history)
         }
      }

      if (location.pathname === '/signin' || location.pathname === '/signup') {
         if (user !== null) {
            // return (<Redirect to='/dashboard' />)
            history.replace('/dashboard')
         }
      }
   }, [location.pathname])

   return (
      <RctThemeProvider>
         <NotificationContainer />
         <Switch>
            <Redirect exact path="/" to="/dashboard" />
            <Route path="/dashboard" component={CRMLayout} />
            <Route path="/signin" component={AppSignIn} />
            <Route path="/signup" component={AppSignUp} />
            <Redirect path="*" to='/dashboard' />
         </Switch>
      </RctThemeProvider>
   );
}

// map state to props
const mapStateToProps = ({ authUser }) => {
   const { user } = authUser;
   return { user };
};

export default connect(mapStateToProps, {
   action_validate_token
})(App);

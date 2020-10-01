import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navigation from './components/shared/Navigation';
import Landing from './components/landing/Landing';
import RegistrationForm from './components/auth/RegistrationForm';
import config from './app.config';
import LoginPage from './components/auth/LoginPage';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <main>
          <Route path="/" exact component={Landing} />
          <Route
            path="/login"
            render={() => <LoginPage baseUrl={config.url} />}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/register" component={RegistrationForm} />
          {/* <SecureRoute path="/profile" component={ProfilePage} /> */}
        </main>
      </div>
    );
  }
}
import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import "./Navigation.css"

export default withAuth(
  class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    render() {
      if (this.state.authenticated === null) return null;
      const authNav = this.state.authenticated ? (
        <ul className="auth-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/animals">Animals</Link>
            </li>
          <li>
            <a
              href="javascript:void(0)"
              onClick={() => this.props.auth.logout()}
            >
              Logout
            </a>
          </li>
        </ul>
      ) : (
          <ul className="auth-nav" id="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
            <li>
              <Link class="name"to="#">Fauna Favor</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onClick={() => this.props.auth.login()}
              >
                Login
            </a>
            </li>
          </ul>
        );
      return (
        <div id="navbar">
          <nav>
            <ul>
              <li>
                {authNav}
              </li>
            </ul>
          </nav>
          <hr class="line"/>
        </div>
      );
    }
  }
);
import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Header from '../containers/header.js';
import Dashboard from './dashboard.jsx';
import Profile from './profile.jsx';
import Billing from './billing.jsx';
import Support from './support.jsx';
import Password from './password.jsx';
import Sidebar from '../containers/sidebar.js';


class Settings extends React.Component {
  render() {
    return (
      <div className={ this.props.toggle ? 'show-menu' : 'hide-menu' }>
        <Header title='Profile'/>
        <div id='content'>
          <Sidebar />
            { this.props.getView() == 'dashboard' ? <Dashboard points={this.props.points} right={this.props.profile.right} wrong={this.props.profile.wrong} ratio={this.props.ratio} /> : null } 
            { this.props.getView() == 'profile' ? <Profile profile={this.props.profile} updateProfile={this.props.updateProfile} /> : null } 
            { this.props.getView() == 'billing' ? <Billing getToken={this.props.getToken} /> : null } 
            { this.props.getView() == 'password' ? <Password updatePassword={this.props.updatePassword}/> : null } 
            { this.props.getView() == 'support' ? <Support /> : null } 
        </div>
      </div>
    )
  }
}

export default Settings;
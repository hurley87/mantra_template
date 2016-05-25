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
      <div id='content' className={ this.props.toggle ? 'show-menu settings-wrapper' : 'hide-menu settings-wrapper' }>
        <Header title='Profile'/>
        { this.props.getView() == 'dashboard' ? <Dashboard points={this.props.points} profile={this.props.profile} ratio={this.props.ratio} /> : null } 
        { this.props.getView() == 'profile' ? <Profile profile={this.props.profile} updateProfile={this.props.updateProfile} /> : null } 
        { this.props.getView() == 'billing' ? <Billing getToken={this.props.getToken} /> : null } 
        { this.props.getView() == 'password' ? <Password updatePassword={this.props.updatePassword}/> : null } 
        { this.props.getView() == 'support' ? <Support /> : null } 
      </div>
    )
  }
}

export default Settings;
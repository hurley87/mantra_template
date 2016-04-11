import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Header from '../containers/header.js';
import Profile from './profile.jsx';
import Billing from './billing.jsx';
import Support from './support.jsx';
import Notifications from './notifications.jsx';
import Sidebar from '../containers/sidebar.js';


class Settings extends React.Component {
  render() {
    return (
      <div className={ this.props.toggle ? 'show-menu' : 'hide-menu' }>
        <Header title='Settings'/>
        <div id='content'>
          <Sidebar />
            { this.props.getView() == 'profile' ? <Profile /> : null } 
            { this.props.getView() == 'billing' ? <Billing /> : null } 
            { this.props.getView() == 'notifications' ? <Notifications /> : null } 
            { this.props.getView() == 'support' ? <Support /> : null } 
        </div>
      </div>
    )
  }
}

export default Settings;
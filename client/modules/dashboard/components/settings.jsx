import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Header from '../containers/header.js';
import Profile from './profile.jsx';
import Billing from './billing.jsx';
import Support from './support.jsx';
import Notifications from './notifications.jsx';


class Settings extends React.Component {
  render() {
    return (
      <div>
        <Header title='Settings'/>
        <div id='content'>
          <div id="sidebar">
            <div className="sidebar-toggler visible-xs">
              <i className="ion-navicon"></i>
            </div>
            <h3>My account</h3>
            <ul className="menu">
              <li onClick={ this.props.showView.bind(this, 'profile') }>
                <a className={ this.props.getView() == 'profile' ? 'active' : null}>
                  <i className="ion-ios7-person-outline"></i>
                  Profile
                </a>
              </li>
              <li onClick={ this.props.showView.bind(this, 'billing') }>
                <a className={ this.props.getView() == 'billing' ? 'active' : null}>
                  <i className="ion-card"></i>
                  Billing
                </a>
              </li>
              <li onClick={ this.props.showView.bind(this, 'notifications') }>
                <a className={ this.props.getView() == 'notifications' ? 'active' : null}>
                  <i className="ion-ios7-email-outline"></i>
                  Notifications
                </a>
              </li>
              <li onClick={ this.props.showView.bind(this, 'support') }>
                <a className={ this.props.getView() == 'support' ? 'active' : null}>
                  <i className="ion-ios7-help-outline"></i>
                  Support
                </a>
              </li>
            </ul>
          </div>
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
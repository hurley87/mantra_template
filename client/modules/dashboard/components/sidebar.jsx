import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <div className="sidebar-toggler visible-xs">
          <i className="ion-navicon"></i>
        </div>
        <h3>My account</h3>
        <ul className="menu">
          <li onClick={ this.props.showView.bind(this, 'dashboard') }>
            <a className={ this.props.getView() == 'dashboard' ? 'active' : null}>
              <i className="ion-stats-bars"></i>
              Dashboard
            </a>
          </li>
          <li onClick={ this.props.showView.bind(this, 'profile') }>
            <a className={ this.props.getView() == 'profile' ? 'active' : null}>
              <i className="ion-ios7-person-outline"></i>
              Settings
            </a>
          </li>
          <li onClick={ this.props.showView.bind(this, 'password') }>
            <a className={ this.props.getView() == 'password' ? 'active' : null}>
              <i className="ion-ios7-email-outline"></i>
              Password
            </a>
          </li>
          <li onClick={ this.props.showView.bind(this, 'billing') }>
            <a className={ this.props.getView() == 'billing' ? 'active' : null}>
              <i className="ion-card"></i>
              Billing
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

    )
  }
}

export default Sidebar;
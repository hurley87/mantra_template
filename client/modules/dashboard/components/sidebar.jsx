import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <div className='row menu'>
          <div className='col-xs-4 text-center' onClick={ this.props.showView.bind(this, 'dashboard') }>
            <a className={ this.props.getView() == 'dashboard' ? 'active' : null}>
              Dashboard
            </a>
          </div>
          <div className='col-xs-4 text-center' onClick={ this.props.showView.bind(this, 'profile') }>
            <a className={ this.props.getView() == 'profile' ? 'active' : null}>
              Settings
            </a>
          </div>
          <div className='col-xs-4 text-center' onClick={ this.props.showView.bind(this, 'password') }>
            <a className={ this.props.getView() == 'password' ? 'active' : null}>
              Password
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar;
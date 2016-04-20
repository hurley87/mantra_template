import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';


class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="menubar">
          <div className="sidebar-toggler visible-xs">
            <i className="ion-navicon" onClick={this.props.showMenu}></i>
          </div>
          <div className="page-title">
            {this.props.title}
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
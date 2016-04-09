import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';


class Header extends React.Component {
  render() {
    return (
      <div id="header" className={ this.props.toggle ? 'show-menu' : 'hide-menu' }>
        <div className="menubar">
          <div className="sidebar-toggler visible-xs">
            <i className="ion-navicon" onClick={this.props.showMenu}></i>
          </div>
          <div className="page-title">
            Dashboard
          </div>
          <div className="period-select hidden-xs">
            <form className="input-daterange">
              <div className="input-group input-group-sm">
                  <span className="input-group-addon">
                    <i className="fa fa-calendar-o"></i>
                  </span>
                  <input name="start" type="text" className="form-control datepicker" placeholder="02/27/2014" />
              </div>
              
              <p className="pull-left">to</p>

              <div className="input-group input-group-sm">
                  <span className="input-group-addon">
                    <i className="fa fa-calendar-o"></i>
                  </span>
                  <input name="end" type="text" className="form-control datepicker" placeholder="02/27/2014" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
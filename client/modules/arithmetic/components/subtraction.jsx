import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Header from '../../dashboard/containers/header.js'
import Sub1 from './sub1.jsx'
import Sub2 from './sub2.jsx'
import Sub3 from './sub3.jsx'


class Subtraction extends React.Component {
  render() {
    return (
      <div className={ this.props.toggle ? 'show-menu' : 'hide-menu' }>
        <Header title='Subtraction'/>
        <div id='content'>
          <div id="sidebar">
            <div className="sidebar-toggler visible-xs">
              <i className="ion-ionic"></i>
            </div>
            <h3>My account</h3>
            <ul className="menu">
              <li onClick={this.props.setView.bind(this, "Sub1")}>
                <a className={this.props.getView() == 'Sub1' ? 'active' : null}>
                  <i className="ion-checkmark-circled"></i>
                  Lesson 1
                </a>
              </li>
              <li onClick={this.props.setView.bind(this, "Sub2")}>
                <a className={this.props.getView() == 'Sub2' ? 'active' : null}>
                  <i className="ion-ionic"></i>
                  Lesson 2
                </a>
              </li>
              <li onClick={this.props.setView.bind(this, "Sub3")}>
                <a className={this.props.getView() == 'Sub3' ? 'active' : null}>
                  <i className="ion-ionic"></i>
                  Lesson 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        { this.props.getView() == 'Sub1' ? <Sub1 /> : null }
        { this.props.getView() == 'Sub2' ? <Sub2 /> : null }
        { this.props.getView() == 'Sub3' ? <Sub3 /> : null }
      </div>
    )
  }
}

export default Subtraction;

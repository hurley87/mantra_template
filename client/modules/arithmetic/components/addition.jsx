import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Header from '../../dashboard/containers/header.js'
import Add1 from './add1.jsx'
import Add2 from './add2.jsx'
import Add3 from './add3.jsx'

class Addition extends React.Component {
  render() {
    return (
      <div className={ this.props.toggle ? 'show-menu' : 'hide-menu' }>
        <Header title='Addition'/>
        <div id='content'>
          <div id="sidebar">
            <div className="sidebar-toggler visible-xs">
              <i className="ion-ionic"></i>
            </div>
            <h3>My account</h3>
            <ul className="menu">
              <li onClick={ this.props.setView.bind(this, 'add1')}>
                <a className={this.props.getView() == 'add1' ? 'active' : null}>
                  <i className="ion-checkmark-circled"></i>
                  Lesson 1
                </a>
              </li>
              <li onClick={ this.props.setView.bind(this, 'add2')}>
                <a className={this.props.getView() == 'add2' ? 'active' : null}>
                  <i className="ion-ionic"></i>
                  Lesson 2
                </a>
              </li>
              <li onClick={ this.props.setView.bind(this, 'add3')}>
                <a className={this.props.getView() == 'add3' ? 'active' : null}>
                  <i className="ion-ionic"></i>
                  Lesson 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        { this.props.getView() == 'add1' ? <Add1 /> : null }
        { this.props.getView() == 'add2' ? <Add2 /> : null }
        { this.props.getView() == 'add3' ? <Add3 /> : null }
      </div>
    )
  }
}

export default Addition;

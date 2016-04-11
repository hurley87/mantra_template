import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Header from '../../dashboard/containers/header.js'
import Multi1 from './multi1.jsx'
import Multi2 from './multi2.jsx'
import Multi3 from './multi3.jsx'


class Multiplication extends React.Component {
  render() {
    return (
      <div className={ this.props.toggle ? 'show-menu' : 'hide-menu' }>
        <Header title='Multiplication'/>
        <div id='content'>
          <div id="sidebar">
            <div className="sidebar-toggler visible-xs">
              <i className="ion-ionic"></i>
            </div>
            <h3>My account</h3>
            <ul className="menu">
              <li onClick={this.props.setView.bind(this, "Multi1")}>
                <a className={this.props.getView() == "Multi1" ? "active" : null} >
                  <i className="ion-checkmark-circled"></i>
                  Lesson 1
                </a>
              </li>
              <li onClick={this.props.setView.bind(this, "Multi2")}>
                <a className={this.props.getView() == "Multi2" ? "active" : null} >
                  <i className="ion-ionic"></i>
                  Lesson 2
                </a>
              </li>
              <li onClick={this.props.setView.bind(this, "Multi3")}>
                <a className={this.props.getView() == "Multi3" ? "active" : null} >
                  <i className="ion-ionic"></i>
                  Lesson 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        {this.props.getView() == "Multi1" ? <Multi1 /> : null} 
        {this.props.getView() == "Multi2" ? <Multi2 /> : null}
        {this.props.getView() == "Multi3" ? <Multi3 /> : null}
      </div>
    )
  }
}

export default Multiplication;

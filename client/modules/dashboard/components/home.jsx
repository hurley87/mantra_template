import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Header from '../containers/header.js';
import Sidebar from '../containers/sidebar.js';


class Home extends React.Component {
  render() {
    return (
      <div className={ this.props.toggle ? 'show-menu' : 'hide-menu' }>
        <Header title='Home'/>
        <div id='content'>
          <div>Veyr coold shit</div>
        </div>
      </div>
    )
  }
}

export default Home;
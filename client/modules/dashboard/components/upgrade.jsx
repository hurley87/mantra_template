import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Header from '../containers/header.js'
import Sidebar from '../containers/sidebar.js';


class Upgrade extends React.Component {
  render() {
    return (
      <div className={ this.props.toggle ? 'show-menu' : 'hide-menu' }>
        <Header title='Upgrade'/>
        Upgrade
      </div>
    )
  }
}

export default Upgrade;
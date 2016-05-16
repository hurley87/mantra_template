import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Header from './header.jsx';

class Help extends React.Component {
  render() {
    return (
      <div>
        <Header title='Help' />
        <div className={ this.props.toggle ? 'show-menu' : 'hide-menu' }>
          
        </div>
      </div>
    )
  }
}

export default Help;
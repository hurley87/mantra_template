import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Level extends React.Component {
  render() {
    return (
      <div className='step'>
        <div className='info'>
          {this.props.title}
        </div> 
        <a href={this.props.link} className='button'> Start </a> 
      </div>
    )
  }
}

export default Level;
import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Level extends React.Component {
  render() {
    return (
      <div className="project">
        <div className="info">
          <div className="name">{this.props.title}</div>
          <div className="last-update">
            This is an awesome description of the learning module.
          </div>
        </div>
        <div className="members">
          <a href={this.props.link} className='button text-center'> Start {this.props.title} </a> 
        </div>
      </div>
    )
  }
}

export default Level;
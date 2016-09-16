import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';

class StudentName extends React.Component { 
  render() {
    return (
      <div>
        {this.props.username}
      </div>
    )
  }
}

export default StudentName;
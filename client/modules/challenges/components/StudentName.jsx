import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';

class StudentName extends React.Component { 
  render() {
    return (
      <div>
       <a href={`/students/${this.props.studentId}`}><p>back</p></a> 
      </div>
    )
  }
}

export default StudentName;
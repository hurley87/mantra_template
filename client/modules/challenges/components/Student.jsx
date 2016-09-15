import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';

class Student extends React.Component { 
  render() {
    const student = this.props.student;
    return (
      <div>
        {student.username}
      </div>
    )
  }
}

export default Student;
import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row, ListGroupItem } from 'react-bootstrap';

class Student extends React.Component { 
  render() {
    const student = this.props.student;
    return (
      <div>
        <a href={`/students/${student._id}`}>{student.username}</a>
      </div>
    )
  }
}

export default Student;
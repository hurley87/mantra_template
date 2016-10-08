import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row, ListGroupItem } from 'react-bootstrap';

class Student extends React.Component { 
  changeStudent(student) {
  	this.props.setStudent(student._id)
  }
  render() {
    const student = this.props.student;
    return (
      <ListGroupItem onClick={this.changeStudent.bind(this, student)}>
        {student.username}
      </ListGroupItem>
    )
  }
}

export default Student;
import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';

class Student extends React.Component { 
  changeStudent(student) {
  	this.props.setStudent(student._id)
  }
  render() {
    const student = this.props.student;
    return (
      <div onClick={this.changeStudent.bind(this, student)}>
        {student.username}
      </div>
    )
  }
}

export default Student;
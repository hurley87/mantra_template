import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';
import Student from '../containers/Student';

class Students extends React.Component { 
  show(student) {
    return (
      <div key={student._id}>{student.username}</div>
    )
  }
  render() {
    const students = this.props.students;
    console.log(students)
    return (
      <div>
        <Row>
          <Col xs={12} sm={12}>
            {
              students.map(student => {
                return this.show(student)
              })
            }
          </Col>
          <p><a href="/students/new">Create new student</a></p>
        </Row>
      </div>
    )
  }
}

export default Students;
import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';
import Student from '../containers/Student';

class Students extends React.Component { 
  show(studentId) {
    return (
      <Student studentId={studentId} />
    )
  }
  render() {
    const studentIds = this.props.studentIds;
    return (
      <div>
        <Row>
          <Col xs={12} sm={12}>
            {
              studentIds.map(studentId => {
                return this.show(studentId)
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
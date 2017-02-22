import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import Student from '../containers/Student';

class Students extends React.Component { 
  show(studentId) {
    return (
      <Student key={studentId} studentId={studentId} />
    )
  }
  render() {
    const studentIds = this.props.studentIds;
    return (
      <div>
        <Row className='header'>
          <Col md={4} mdOffset={4}>
            <h2>Choose a student</h2>
            <br />
          </Col>
        </Row>
        <Row>
          <Col md={4} mdOffset={4}>
            <div>
              {
                studentIds.map(studentId => {
                  return this.show(studentId)
                })
              }
            </div>
            <br/>
            <div>
              <a href='/students/new'>Add a student</a> 
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Students;
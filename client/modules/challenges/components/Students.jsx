import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
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
            <ListGroup>
              {
                studentIds.map(studentId => {
                  return this.show(studentId)
                })
              }
              <ListGroupItem><a href="/students/new">Add a student</a></ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Students;
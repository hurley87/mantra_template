import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row, ListGroupItem } from 'react-bootstrap';

class StudentsShow extends React.Component { 
  render() {
    const student = this.props.student;
    return (
      <div>
        <Grid>
          <Row className='header'>
            <Col md={4} mdOffset={4}>
              <h2>{student.username}</h2>
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={4} mdOffset={4}>
              <div>
                <a className='button text-center' href={`/students/${student._id}/addition`}>Addition</a> 
              </div>
              <div>
                <a className='button text-center' href={`/students/${student._id}/subtraction`}>Substraction</a> 
              </div>
              <div>
                <a className='button text-center' href={`/students/${student._id}/multiplication`}>Multiplication</a> 
              </div>
              <div>
                <a className='button text-center' href={`/students/${student._id}/division`}>Division</a> 
              </div>
              <br/>
              <div>
                <a href={`/new/${student._id}`}>Create a challenge for {student.username}</a> 
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default StudentsShow;
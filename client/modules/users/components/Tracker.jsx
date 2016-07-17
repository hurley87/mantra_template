import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput } from 'react-bootstrap-validation';


class Tracker extends React.Component {
  render () {
    const student = this.props.student;
    console.log(this.props.answers)
    return (
      <div id='signup'>
        <Grid>
          <Row className='header'>
            <Col md={12}>
              <h4>Hey {student.username}</h4>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Tracker;
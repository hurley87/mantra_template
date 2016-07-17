import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput } from 'react-bootstrap-validation';


class Tracker extends React.Component {
  noAnswers() {
    return (
      <Row>
        <p>These are intructions to go to play.pttrns.ca on their smartphone to access the arithmetic diagnostic test. After completing the test you will see the results here.</p>
        <p>Make sure you login using your username, "{this.props.student.username}" and the password you used to signup.</p>
        <p><a href='https://play.pttrns.ca/'>Play pttrns</a></p>
      </Row>
    )
  }
  headers() {
    return (
      <Row>
        <Col xs={2}>
          Level
        </Col>
        <Col xs={2}>
          Operator
        </Col>
        <Col xs={2}>
          Right
        </Col>
        <Col xs={2}>
          Wrong
        </Col>
        <Col xs={2}>
          Total Time
        </Col>
        <Col xs={2}>
          Time Taken
        </Col>
      </Row>
    )
  }
  render () {
    const student = this.props.student;
    return (
      <div id='signup'>
        <Grid>
          <Row className='header'>
            <Col xs={12}>
              <h4>Hey {student.username}</h4>
            </Col>
          </Row>
          { this.props.answers.length == 0 ? this.noAnswers() : null}
          { this.props.answers.length > 0 ? this.headers() : null }
          {
            this.props.answers.map((answer, index) => {
              return (
                <a  key={index} href={ "tracker/" + answer._id }>
                <Row>
                  <Col xs={2}>
                    {answer.level}
                  </Col>
                  <Col xs={2}>
                    {answer.operator}
                  </Col>
                  <Col xs={2}>
                    {answer.right}
                  </Col>
                  <Col xs={2}>
                    { answer.wrong }
                  </Col>
                  <Col xs={2}>
                    { answer.totalTime }
                  </Col>
                  <Col xs={2}>
                    { answer.timeTaken + 1 }
                  </Col>
                </Row></a>
              );
            })
          }
        </Grid>
      </div>
    )
  }
}

export default Tracker;
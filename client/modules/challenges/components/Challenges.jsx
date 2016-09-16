import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';
import CurrentChallenges from '../containers/CurrentChallenges';
import PastChallenges from '../containers/PastChallenges';
import Students from '../containers/Students';
import StudentName from '../containers/StudentName';

class Challenges extends React.Component { 
  render() {
    return (
      <div>
        <StudentName studentId={this.props.username} />
        <Row>
          <Col xs={12} sm={2}>
            <p> <a href={'/new/' + this.props.username }>New Challenge</a></p>
            <Students />
          </Col>
          <Col xs={12} sm={5}>
            <h1>Current Challenges</h1>
            <CurrentChallenges studentId={this.props.username} />
          </Col>
          <Col xs={12} sm={5}>
            <h1>Past Challenges</h1>
            <PastChallenges />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Challenges;
import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';
import CurrentChallenges from '../containers/CurrentChallenges';
import PastChallenges from '../containers/PastChallenges';

class Challenges extends React.Component { 
  render() {
    return (
      <div>
        <Row>
          <p> <a href='/new'>New Challenge</a></p>
          <Col xs={12} sm={6}>
            <h1>Current Challenges</h1>
            <CurrentChallenges />
          </Col>
          <Col xs={12} sm={6}>
            <h1>Past Challenges</h1>
            <PastChallenges />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Challenges;
import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';
import CurrentChallenges from '../containers/CurrentChallenges';

class Challenges extends React.Component { 
  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <CurrentChallenges />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Challenges;
import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';

class ChallengeShow extends React.Component { 
  render() {
    const challenge = this.props.challenge.challenge;
    const student = this.props.student;
    return (
      <div>
        <Row>
          <Col xs={12} sm={12}>
            <p> Max: {challenge.max}</p>
            <p>Min: {challenge.min}</p>
            <p>Operator: {challenge.operator}</p>
            <p>Reward: {challenge.reward}</p>
            <p>Right: {challenge.right}</p>
            <p>Wrong: {challenge.wrong}</p>
            <p><a href="https://play.pttrns.ca/">Play Pttrns Here</a></p>
            <p>This page will be a quick guide to play this challenge.</p>
            <p>student username: {student.username}</p>

            <p><a href="/challenges">back</a> </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ChallengeShow;
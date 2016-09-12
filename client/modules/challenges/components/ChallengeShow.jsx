import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';

class ChallengeShow extends React.Component { 
  complete() {
    return (
      <div>
        <h1>Finished this challenge.</h1>
        <p>Pull final data and show results.</p>
        <p><a href="/challenges">back</a> </p>
      </div>
    )
  }
  notComplete(challenge, student, challengeId) {
    return (
      <div>
        <p> Max: {challenge.max}</p>
        <p>Min: {challenge.min}</p>
        <p>Operator: {challenge.operator}</p>
        <p>Reward: {challenge.reward}</p>
        <p>Right: {challenge.right}</p>
        <p>Wrong: {challenge.wrong}</p>
        <p><a target="_blank" href="https://play.pttrns.ca/">Play Pttrns Here</a></p>
        <p>This page will be a quick guide to play this challenge.</p>
        <p><a href={'/edit/' + challengeId}>Edit challenge</a></p>
        <p>student username: {student.username}</p>
        <p><a href="/challenges">back</a> </p>
      </div>
    )
  }
  render() {
    const challenge = this.props.challenge.challenge;
    const student = this.props.student;
    const complete = this.props.challenge.complete;
    const challengeId = this.props.challenge._id;
    return (
      <div>
        <Row>
          <Col xs={12} sm={12}>
            { complete ? this.complete() : this.notComplete(challenge, student, challengeId) }
          </Col>
        </Row>
      </div>
    )
  }
}

export default ChallengeShow;
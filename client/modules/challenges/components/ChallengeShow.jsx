import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';

class ChallengeShow extends React.Component { 
  complete(answer) {
    const submissions = answer ? answer.submissions : null
    console.log(submissions)
    return (
      <div>
        <h1>Finished this challenge.</h1>
        <p>Pull final data and show results.</p>
        <p>answer</p>
        <p>finalTime : {answer ? answer.finalTime : null}</p>
        <p>gaveOver : {answer ? answer.gaveOver : null}</p>
        <p>guess : {answer ? answer.guess : null}</p>
        <p>max : {answer ? answer.max : null}</p>
        <p>min : {answer ? answer.min : null}</p>
        <p>num1 : {answer ? answer.num1 : null}</p>
        <p>num2 : {answer ? answer.num2 : null}</p>
        <p>operator : {answer ? answer.operator : null}</p>
        <p>penalty : {answer ? answer.penalty : null}</p>
        <p>right : {answer ? answer.right : null}</p>
        <p>seconds : {answer ? answer.seconds : null}</p>
        <p>startGame : {answer ? answer.startGame : null}</p>
        <p>timeTaken : {answer ? answer.timeTaken : null}</p>
        <p>wrong : {answer ? answer.wrong : null}</p>
        <p>winningThreshold : {answer ? answer.winningThreshold : null}</p>

        <h2>submissions</h2>
        {
          submissions ? submissions.map(submission =>{
            return this.submission(submission)
          }) : null
        }
        <p><a href="/challenges">back</a> </p>
      </div>
    )
  }
  submission(submission) {
    return (
      <div>
        <p>{submission.guess}</p>
        <p>{submission.answer}</p>
        <p>{submission.num1}</p>
        <p>{submission.num2}</p>
        <p>{submission.operator}</p>
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
    const answer = this.props.answer;
    return (
      <div>
        <Row>
          <Col xs={12} sm={12}>
            { complete ? this.complete(answer) : this.notComplete(challenge, student, challengeId) }
          </Col>
        </Row>
      </div>
    )
  }
}

export default ChallengeShow;
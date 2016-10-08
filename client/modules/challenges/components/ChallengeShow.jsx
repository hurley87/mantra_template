import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';

class ChallengeShow extends React.Component { 
  complete(answer, student, challenge) {
    const submissions = answer ? answer.submissions : null
    return (
      <Panel collapsible defaultExpanded header={challenge.reward}>
        {student.username} answered {answer ? answer.right : null} questions in {answer ? answer.finalTime : null} seconds.
        Number were between {answer ? answer.max : null} and {answer ? answer.min : null}.
        <p>There were {answer ? answer.wrong : null} wrong attempts.</p>
        <hr/>
        {
          submissions ? submissions.map(submission =>{
            return this.submission(submission)
          }) : null
        }
        <p><a href="/challenges">back</a> </p>
      </Panel>
    )
  }
  submission(submission) {
    return (
      <div>
        <p>{submission.num1} {submission.operator} {submission.num2} = {submission.answer} ( guessed {submission.guess} )</p>
      </div>
    )
  }
  notComplete(challenge, student, challengeId) {
    return (
        <Panel collapsible defaultExpanded header={challenge.reward}>
          <p><a href="/challenges">back</a></p>
          <p>Status: not complete</p>
          <p>Operator: {challenge.operator}</p>
          <p>Answer {challenge.right} questions in {challenge.time} seconds.</p>
          <a target="_blank" href={"https://play.pttrns.ca?username=" + student.username}><button className='btn btn-large btn-primary'>Accept Challenge</button></a>
          <hr/>
          <p><a href={'/edit/' + challengeId}>Edit challenge</a></p>
        </Panel>
    )
  }
  render() {
    const challenge = this.props.challenge.challenge;
    const student = this.props.student;
    const complete = this.props.challenge.complete;
    const challengeId = this.props.challenge._id;
    const answer = this.props.answer;
    return (
      <div className='container'>
        <Row>
          <Col xs={12} sm={8}>
            { complete ? this.complete(answer, student, challenge) : this.notComplete(challenge, student, challengeId) }
          </Col>
        </Row>
      </div>
    )
  }
}

export default ChallengeShow;
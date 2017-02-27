import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row, Tab, TabContainer, Nav, NavItem } from 'react-bootstrap';

const ChallengeShow = React.createClass({ 
  getInitialState(){
    return {
      answer: 0
    }
  },
  submission(submission) {
    const style = {
      color: 'red'
    }
    return (
      <div>
        <p style={ submission.answer == submission.guess ? null : style }>{submission.num1} {submission.operator} {submission.num2} = {submission.answer} { submission.answer == submission.guess ? null : '(guessed ' + submission.guess + ')' }</p>
      </div>
    )
  },
  pastAttempts(answer, answers, student, complete) {
    const submissions = answer ? answer.submissions : null
    return (
      <div>
        { answers.length > 1 ?
          answers.map((answer, index) => {
            return <button className='button' onClick={this.changeAnswer.bind(this, index)} key={index}>Attempt #{index + 1}</button>
          }) : null
        }
      </div>
    )
  },
  changeAnswer(index){
    this.setState({
      answer: index
    })
  },
  viewSubmission(submission, answerIndex) {
    const submissions = submission.submissions;
    return (
      <div>
        <h4>Attempt #{answerIndex} <small>{submission.right} right, {submission.wrong} wrong</small></h4>
        <hr />
        {
          submissions ? submissions.map(submission =>{
            return this.submission(submission)
          }) : null
        }
      </div>
    )
  },
  attempted(challenge, student){
    const stats = challenge.challenge;
    const userEmail = Meteor.users.findOne(Meteor.userId()).emails[0].address;
    const to = userEmail;
    const from = 'dave@planswell.ca';
    const subject = `Answer ${stats.right} problems in ${stats.time} seconds`;
    const text = `<div>This is a test</div><div><a target="_blank" href="http://play.pttrns.ca?username=${student.username}&gameId=${challenge._id}">Accept Challenge</a></div>`;
    return (
      <div>
        <br />
        <p>To pass this challenge {student.username} must answer {stats.right} problems in {stats.time} seconds. You should email the challenge to your phone.</p>
        <br />
        {this.props.answer.length == 0 ? <button onClick={this.props.sendChallenge.bind(this, challenge, to, from, subject, text)} className='button text-center'>Email challenge</button> : null }
      </div>
    )
  },
  pending(challenge, student){
    const stats = challenge.challenge;
    return (
      <div>
        <br />
        <p>To pass this challenge {student.username} must answer {stats.right} problems in {stats.time} seconds. For best results the student should attempt this challenge on your phone.</p>
        <br />
        { this.props.answer.length == 0 ? <a className='button text-center' target="_blank" href={`http://play.pttrns.ca?username=${student.username}&gameId=${challenge._id}`}>Go to challenge</a> : null}
      </div>
    )
  },
  notComplete(challenge, student){
    return challenge.pending ? this.pending(challenge, student) : this.attempted(challenge, student)
  },
  complete(challenge, student){
    const stats = challenge.challenge;
    return(
      <div>
        Challenge complete, {student.username} was able to answer {stats.right} problems in {stats.time} seconds!
        <br />
        <br />
      </div>
    )
  },
  render() {
    const challenge = this.props.challenge.challenge;
    const student = this.props.student;
    const complete = this.props.challenge.complete;
    const challengeId = this.props.challenge._id;
    const answers = this.props.answer;
    const answer = answers[answers.length - 1]
    const submission = answers[this.state.answer]
    const answerIndex = this.state.answer + 1;
    let path = '';
    switch(challenge.operator){
      case '+':
        path = 'addition';
        break;
      case '-':
        path = 'subtraction';
        break;
      case 'x':
        path = 'multiplication';
        break;
      case '/':
        path = 'division';
        break;
      default:
        path = ''
    }
    return (
      <div>
        <Grid>
          <Row className='header'>
            <Col md={4} mdOffset={4}>
              <h2>{challenge.reward}</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} mdOffset={4}>
              { complete ? this.complete(this.props.challenge, student) : this.notComplete(this.props.challenge, student)}
              { this.pastAttempts(answer, answers, student, complete) }
              { submission ? this.viewSubmission(submission, answerIndex) : null }
              <br />
              <a href={`/students/${student._id}/${path}`}>Go back</a>
              <br />
              <br />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
})

export default ChallengeShow;
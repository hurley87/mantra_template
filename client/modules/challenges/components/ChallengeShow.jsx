import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row, Tab, TabContainer, Nav, NavItem } from 'react-bootstrap';

const ChallengeShow = React.createClass({ 
  getInitialState(){
    return {
      answer: 0
    }
  },
  complete(answer, student, challenge) {
    const submissions = answer ? answer.submissions : null
    return (
      <Panel collapsible defaultExpanded header={challenge.reward}>
        <p><a href="/challenges">back</a> </p>
        {student.username} answered {answer ? answer.right : null} questions in {answer ? answer.finalTime : null} seconds.
        Number were between {answer ? answer.max : null} and {answer ? answer.min : null}.
        <p>There were {answer ? answer.wrong : null} wrong attempts.</p>
        {
          submissions ? submissions.map(submission =>{
            return this.submission(submission)
          }) : null
        }
      </Panel>
    )
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
        {
          answers.map((answer, index) => {
            return <div onClick={this.changeAnswer.bind(this, index)} key={index}>Attempt #{index + 1}</div>
          })
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
  intro(challenge, student){
    const stats = challenge.challenge;
    const userId = Meteor.userId();
    const userEmail = Meteor.users.findOne(userId).emails[0].address;
    const to = userEmail;
    const from = 'dave@planswell.ca';
    const subject = `Answer ${stats.right} problems in ${stats.time} seconds`;
    const text = `<div>This is a test</div><div><a target="_blank" href="http://play.pttrns.ca?username=${student.username}&gameId=${challenge._id}">Accept Challenge</a></div>`;
    return (
      <div>
        <p>To pass this challenge {student.username} must answer {stats.right} problems in {stats.time} seconds.</p>
        <p>Change this copy to reflect the new UX of sending challenges to your phone.</p>
        <p>{challenge.pending ? 'yes': 'no'}</p>
        <button onClick={this.props.sendChallenge.bind(this, challenge, to, from, subject, text)} className='btn btn-large btn-primary'>Send challenge</button>
      </div>
    )
  },
  congrats(challenge, student){
    const stats = challenge.challenge;
    return(
      <div>
        Challenge complete, {student.username} was able to answer {stats.right} problems in {stats.time} seconds!
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
        path = 'multipication';
        break;
      case '/':
        path = 'division';
        break;
      default:
        path = ''
    }
    return (
      <div className='container'>
        <Row>
          <Col xs={12} sm={6}>
            <a href={`/students/${student._id}/${path}`}>back</a>
            <h2>{challenge.reward}</h2>
            { complete ? this.congrats(this.props.challenge, student) : this.intro(this.props.challenge, student)}
            { this.pastAttempts(answer, answers, student, complete) }
          </Col>
          <Col xs={12} sm={6}>
            { submission ? this.viewSubmission(submission, answerIndex) : null }
          </Col>
        </Row>
      </div>
    )
  }
})

export default ChallengeShow;
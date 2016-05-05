import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Progess from '../../questions/components/progress.jsx';
import { _ } from 'lodash';

class IndexLayout extends React.Component {
  render() {
    return (
      <div className={ this.props.toggle ? 'show-menu content-wrapper' : 'hide-menu content-wrapper' }>
        <div className="sidebar-toggler visible-xs" onClick={this.props.showMenu}>
          <i className="ion-navicon"></i>
        </div>
        <div className="header">
          {this.props.title} <span className='pull-right'>{this.props.points} <i className="fa fa-heart"></i></span>
        </div>
        <Progess percentage={this.props.points / 1.5}/>
        <div className="steps">
          { this.completeLevels() ? this.levelLayout(this.completeLevels()) : null}
          { this.currentLevel() ? this.levelLayout(this.currentLevel()) : null}
          { this.lockedLevels() ? this.levelLayout(this.lockedLevels()) : null}
        </div>
      </div>
    )
  }
  completeLevels() {
    const questions = this.props.questions;
    const points = this.props.points;
    return _.filter(questions, function(question) { return points > question.upperLimit; });
  }
  lockedLevels() {
    const questions = this.props.questions;
    const points = this.props.points;
    return _.filter(questions, function(question) { return question.lowerLimit >= points});
  }
  currentLevel() {
    const questions = this.props.questions;
    const points = this.props.points;
    return _.filter(questions, function(question) { return question.lowerLimit < points && question.upperLimit > points });
  }
  levelLayout(questions) {
    return (
      questions.map((question) => (
        <div key={question._id} className={ this.levelFinished(question.upperLimit) ? "step done" : "step"} >
          <div className="info">
            <span className="number">
            { this.levelFinished(question.upperLimit) ? <i className="ion-checkmark-circled"></i> : null }
            { this.levelLocked(question.lowerLimit) ? <i className="fa fa-lock"></i>  : null }
            { !this.levelFinished(question.upperLimit) && !this.levelLocked(question.lowerLimit) ? this.hearts(question.difficulty)  : null }
            </span> 
            {question.title}
          </div>
          { this.levelLocked(question.lowerLimit) ? null  : this.startLevelBtn(this.props.type, question)}
        </div>
      ))
    );
  }
  hearts(difficulty) {
    return (
      <span> {difficulty} <i className="fa fa-heart"></i></span>
    );
  }
  levelLocked(lowerLimit) {
    return this.props.points < lowerLimit;
  }
  levelFinished(upperLimit) {
    return this.props.points > upperLimit;
  }
  startLevelBtn(type, question) {
    if (this.levelFinished(question.upperLimit)) {
      return null;
    } else {
      return (
        <a href={`/${type}/${question._id}`} className="button">
          Start
        </a>
      );
    }
  }
}

export default IndexLayout;
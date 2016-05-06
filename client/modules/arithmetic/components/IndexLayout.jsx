import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Progess from '../../questions/components/progress.jsx';
import LevelLayout from './LevelLayout.jsx'
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
        {
          /* 
            Progress bar: I hard code 1.5 right now. You need around 150 points to complete each module. 
            The percentage should be dynamic. TODO: Programmically find how many points a user needs to complete a module.
          */
        }
        <Progess percentage={this.props.points / 1.5}/>
        {
          /* 
            List out levels in this order: 
            1. Levels the user has completed
            2. The current level the user is on
            3. The levels that are currently locked because the user does not have enough points
          */
        }
        <div className="steps">
          { this.list(this.props.completeLevels(this.props.questions, this.props.points))}
          { this.list(this.props.currentLevel(this.props.questions, this.props.points)) }
          { this.list(this.props.lockedLevels(this.props.questions, this.props.points)) }
        </div>
      </div>
    )
  }
  list(questions) {
    return (
      questions.map((question) => (
        <LevelLayout 
          key={question._id}
          question={question}
          levelFinished={this.props.levelFinished(question.upperLimit, this.props.points)} 
          levelLocked={this.props.levelLocked(question.lowerLimit, this.props.points)} 
          type={this.props.type}
          />
      ))
    );
  }
}

export default IndexLayout;
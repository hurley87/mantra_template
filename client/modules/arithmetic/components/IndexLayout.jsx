import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class IndexLayout extends React.Component {
  render() {
    return (
      <div className={ this.props.toggle ? 'show-menu content-wrapper' : 'hide-menu content-wrapper' }>
        <div className="sidebar-toggler visible-xs" onClick={this.props.showMenu}>
          <i className="ion-navicon"></i>
        </div>
        <div className="header">
          {this.props.title} <span className='pull-right'>{this.props.profile.points} <i className="fa fa-heart"></i></span>
        </div>
        <div className="steps">
          { this.props.complete ? this.levelLayout(this.props.complete) : null }
          { this.props.incomplete ? this.levelLayout(this.props.incomplete) : null }
        </div>
      </div>
    )
  }
  levelLayout(questions) {
    return (
      questions.map((question) => (
        <div key={question._id} className={ this.levelFinished(question.upperLimit) ? "step done" : "step"} >
          <div className="info">
            <span className="number">
            { this.levelFinished(question.upperLimit) ? <i className="ion-checkmark-circled"></i> : question.difficulty }
            </span> 
            {question.title}
          </div>
          { this.levelLocked(question.lowerLimit) ? <i className="fa fa-lock"></i>  : this.startLevelBtn(this.props.type, question)}
        </div>
      ))
    );
  }
  levelLocked(lowerLimit) {
    return this.props.profile.points < lowerLimit;
  }
  levelFinished(upperLimit) {
    return this.props.profile.points > upperLimit;
  }
  startLevelBtn(type, question) {
    return (
      <a href={`/${type}/${question._id}`} className="button">
        { this.levelFinished(question.upperLimit) ? <span>Replay</span> : <span>Start</span> }
      </a>
    );
  }
}

export default IndexLayout;
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
          {this.props.title}
        </div>
        <div className="steps">
          {
            this.props.questions.map((question, index) => (
              <div key={question._id} className={ this.levelFinished(question.upperLimit) ? "step done" : "step"} >
                <div className="info">
                  <span className="number">
                  { this.levelFinished(question.upperLimit) ? <i className="ion-checkmark-circled"></i> : index + 1 }
                  </span> 
                  {question.title}
                </div>
                {this.startLevelBtn(this.props.type, question)}
              </div>
            ))
          }
        </div>
      </div>
    )
  }
  levelFinished(upperLimit) {
    return this.props.profile.points > upperLimit;
  }
  startLevelBtn(type, question) {
    // TODO: Lock levels depending on how many points a user has 
    return (
      <a href={`/${type}/${question._id}`} className="button">
        { this.levelFinished(question.upperLimit) ? <span>Replay</span> : <span>Start</span> }
      </a>
    );
  }
}

export default IndexLayout;
import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';


class LevelLayout extends React.Component {
  render() {
    return (
      <div className={ this.props.levelFinished ? "step done" : "step"} >
        <div className="info">
          <span className="number">
          { this.props.levelFinished ? <i className="ion-checkmark-circled"></i> : null }
          { this.props.levelLocked ? <i className="fa fa-lock"></i>  : null }
          { !this.props.levelFinished && !this.props.levelLocked ? <span> {this.props.question.difficulty} <i className="fa fa-heart"></i></span>  : null }
          </span> 
          {this.props.question.title}
        </div>
        { this.props.levelLocked ? null  : <a href={`/${this.props.type}/${this.props.question._id}`} className="button"> Start </a> }
      </div>
    );
  }
}

export default LevelLayout;
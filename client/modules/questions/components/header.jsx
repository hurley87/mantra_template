import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';


class QuestionHeader extends React.Component {
  render() {
    return (
      <div className="header" style={{ textAlign: 'left' }}>
        <a href={this.props.back} className='text-left'><i className="fa fa-caret-left"></i> {this.props.header}</a>
        <span className='pull-right'>{this.props.profile.points} <i className="fa fa-heart"></i></span>
      </div>
    )
  }
}

export default QuestionHeader;
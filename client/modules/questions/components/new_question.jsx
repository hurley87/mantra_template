import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';
import Progress from './progress.jsx';
import QuestionHeader from './header.jsx';
import Keypad from './keypad.jsx';

class NewQuestion extends React.Component { 
  render() {
    return (
      <div>
        <div id='steps'>
          <QuestionHeader points={this.props.points} profile={this.props.profile} back={this.props.link} header={this.props.header}/>
          <Progress percentage={this.props.percentage} />
        </div>
        <Row>
          <Col xs={12} sm={6} smOffset={3}>
            <h3 className='text-center numbers'>
              {this.props.question().num1} {this.props.operator} {this.props.question().num2} 
            </h3>
            <Keypad 
              clearInput={this.props.clearInput}
              clickNumber={this.props.clickNumber}
              questionId={this.props.questionId}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default NewQuestion;
import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';
import CurrentChallenges from '../containers/CurrentChallenges';
import PastChallenges from '../containers/PastChallenges';
import Students from '../containers/Students';
import StudentName from '../containers/StudentName';

class Challenges extends React.Component { 
  title(operator){
    switch(operator){
      case '+':
        return 'Addition';
        break;
      case '-':
        return 'Subtraction';
        break;
      case 'x':
        return 'Multiplication';
        break;
      case '/':
        return 'Division';
        break;
      default: 
        return 'Addition';
    }
  }
  render() {
    return (
      <div>
        <Grid>
          <Row className='header'>
            <Col md={4} mdOffset={4}>
              <StudentName studentId={this.props.username} />
              <h2>{this.title(this.props.operator)}</h2>
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={4} mdOffset={4}>
              <CurrentChallenges studentId={this.props.studentId} operator={this.props.operator} />
              <PastChallenges operator={this.props.operator} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Challenges;
import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';
import CurrentChallenges from '../containers/CurrentChallenges';
import PastChallenges from '../containers/PastChallenges';
import Students from '../containers/Students';
import StudentName from '../containers/StudentName';

class Challenges extends React.Component { 
  render() {
    return (
      <div className='container'> 
        <Row>
          <Col xs={12} sm={3}>
            <Students />
          </Col>
          <Col xs={12} sm={9}>
            <div className='row'>
              <div className='col-xs-6'>
                <StudentName studentId={this.props.username} />
              </div>
              <div className='col-xs-6 text-right'>
                <a href={'/new/' + this.props.username }><button className='btn btn-large btn-primary'> Create Challenge</button></a>
              </div>
            </div>
            <CurrentChallenges studentId={this.props.username} />
            <hr />
            <h2>Completed Challenges</h2>
            <PastChallenges />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Challenges;
import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';
import ChallengeCard from './ChallengeCard'

class PastChallenges extends React.Component { 
  render() {
    const challenges = this.props.challenges;
    return (
      <div>
        <Row>
          <Col xs={12} sm={12}>
            {
              challenges.map( challenge => {
                return <ChallengeCard key={challenge._id} challenge={challenge} />
              })
            }
          </Col>
        </Row>
      </div>
    )
  }
}

export default PastChallenges;
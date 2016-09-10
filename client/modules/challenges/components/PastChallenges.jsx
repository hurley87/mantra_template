import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';

class PastChallenges extends React.Component { 
  render() {
    const challenges = this.props.challenges;
    return (
      <div>
        <Row>
          <Col xs={12} sm={12}>
            {
              challenges.map( challenge => {
                return (
                  <div key={challenge._id}>
                    <a href={"/challenges/" + challenge._id}>{challenge.challenge.reward}</a>
                  </div>
                )
              })
            }
          </Col>
        </Row>
      </div>
    )
  }
}

export default PastChallenges;
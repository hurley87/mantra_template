import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';

class CurrentChallenges extends React.Component { 
  render() {
    const challenges = this.props.challenges;
    console.log(challenges);
    return (
      <div>
        <Row>
          <Col xs={12} sm={2}>
            <p>Challenges</p>
            <p>Rewards</p>
            <p>About</p>
            <p>Logout</p>
          </Col>
          <Col xs={12} sm={8}>
            <h1>Challenges</h1>
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
          <Col xs={12} sm={2}>
            <p> <a href='/new'>New Challenge</a></p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CurrentChallenges;
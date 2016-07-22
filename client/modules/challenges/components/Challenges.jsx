import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';

class Challenges extends React.Component { 
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} sm={6} smOffset={3}>
            <h1>Hey whats up?</h1>
            <p> <a href='/new'>New Challenge</a></p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Challenges;
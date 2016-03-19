import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

const Features = ( { content = () => null }) => (
  <Grid id="features" className='container'>
    <Row className='header'>
      <h3>Need an easy way to customize your site?</h3>
      <p>
        React is perfect for novice developers and experts alike.
      </p>
    </Row>
    <Row className='sections'>
      <Col md={4}>
        <div className="section">
          <div className="pic">
            <img src="images/services2.png" className="img-responsive" alt="services1" />
          </div>
          <div className="info">
            <strong>Awesome mobile app</strong>
            <p>
              You can work with international customers right out of the box while staying in your country.
            </p>
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className="section">
          <div className="pic">
            <img src="images/services4.png" className="img-responsive" alt="services2" />
          </div>
          <div className="info">
            <strong>Awesome mobile app</strong>
            <p>
              You can work with international customers right out of the box while staying in your country.
            </p>
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className="section">
          <div className="pic">
            <img src="images/services3.png" className="img-responsive" alt="services3" />
          </div>
          <div className="info">
            <strong>Awesome mobile app</strong>
            <p>
              You can work with international customers right out of the box while staying in your country.
            </p>
          </div>
        </div>
      </Col>
    </Row>
  </Grid>
);

export default Features;
import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

const Cta = ( { content = () => null }) => (
  <Grid id="cta" className="container">
    <Row>
      <Col md={12}>
        <div className="form-wrapper">
          <h4>Ready to start? Create your free account now</h4>
          <form className="form-inline" role="form">
              <div className="form-group">
                <Input type="text" className="form-control" placeholder="Your name"/>
            </div>
            <div className="form-group">
                <Input type="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
              <Input type="password" className="form-control" placeholder="Password"/>
            </div>
            <button type="submit" className="button button-small">Sign Up</button>
          </form>
        </div>
      </Col>
    </Row>
  </Grid>
);

export default Cta;
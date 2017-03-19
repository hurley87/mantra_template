import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';

const About = () => (
        <Grid>
          <Row className='header'>
            <Col md={12}>
              <h2 className='text-center'>How It Works</h2>
              <br />
            </Col>
          </Row>
          <Row>
            <br />
            <Col md={4}>
            	<h3 className='text-center'>Choose a Challenge</h3>
            	<p className='text-center'>Challenges are a series of math exercises designed to improve your child's math skills.</p>
            </Col>
            <Col md={4}>
            	<h3 className='text-center'>Send a Challenge</h3>
            	<p className='text-center'>We text the challenge link directly to your phone via SMS. You can also send the challenge to your email.</p>
            </Col>
            <Col md={4}>
            	<h3 className='text-center'>Accept the Challenge</h3>
            	<p className='text-center'>Click on the link in the text we send you and have your child accept the challenge.</p>
            </Col>
          </Row>
          <Row>
            <br />
            <br />
            <Col md={4} mdOffset={4}>
            	{ Meteor.userId() ? <a href="/challenges" className='button text-center'>Send a Challenge</a> : <a href="/" className='button text-center'>Send a Challenge</a>} 
            </Col>
          </Row>
        </Grid>
);

export default About;
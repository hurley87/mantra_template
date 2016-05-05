import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

const Benefits = ( { content = () => null }) => (
  <Grid id="benefits" className="container">
    <Row>
      <Col md={4} className='feature'>
        <img src="images/circle-icons/full-color/barchart.png" alt="creditcard" />
        <strong>Data Analytics</strong>
        <p>
        Track your child's performance with real-time analytics and reporting. See the questions your child struggles with and 
        spend time addressing problem areas.
        </p>
      </Col>
      <Col md={4} className='feature'>
        <img src="images/circle-icons/full-color/bookshelf.png" alt="dev" />
        <strong>Curriculum Aligned</strong>
        <p>
        Pttrns has been designed with Ontario's math curriculum in mind. We ensure your child is positioned for success
        both inside and outside of the classroom.
        </p>
      </Col>
      <Col md={4} className='feature'>
        <img src="images/circle-icons/full-color/ribbon.png" alt="globe" />
        <strong>Rewards-Based</strong>
        <p>Our path to fluency is paved with rewards. Achieving fluency is not an easy task and motivation is very important so we reward
           each completed module.
        </p>
      </Col>
    </Row>
    <Row>
      <Col md={4} className='feature'>
        <img src="images/circle-icons/full-color/creditcard.png" alt="creditcard" />
        <strong>Fully-encrypted payment</strong>
        <p>Pttrns uses a fully-encrypted payment method, ensuring your payment information remains safe.</p>
      </Col>
      <Col md={4} className='feature'>
        <img src="images/circle-icons/full-color/mail.png" alt="mail" />
        <strong>Online Support</strong>
        <p>We'll be adding some new stuff to make it even more awesome, if you have any idea please let us know.</p>
      </Col>
      <Col md={4} className='feature'>
        <img src="images/circle-icons/full-color/locked.png" alt="locked" />
        <strong>Secure Login, Protected Accounts</strong>
        <p>This thing will work on any device, it has a very easy to understand documentation and is made with SASS.</p>
      </Col>
    </Row>
  </Grid>
);

export default Benefits;
import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

const Benefits = ( { content = () => null }) => (
  <Grid id="benefits" className="container">
    <Row>
      <Col md={4} className='feature'>
        <img src="images/circle-icons/full-color/barchart.png" alt="creditcard" />
        <strong>Data Analytics</strong>
        <p>ParenTeach uses a fully-encrypted payment method, ensuring your payment information remains safe.</p>
      </Col>
      <Col md={4} className='feature'>
        <img src="images/circle-icons/one-color/dev.png" alt="dev" />
        <strong>Act globally, work as usual</strong>
        <p>With some customization you can make this product apply to your branding guidelines and amaze your customers at the same time.</p>
      </Col>
      <Col md={4} className='feature'>
        <img src="images/circle-icons/one-color/globe.png" alt="globe" />
        <strong>Develop once, run everywhere</strong>
        <p>We don't impose any design restrictions, you are free to customize it as you see fit and it's easy to use.</p>
      </Col>
    </Row>
    <Row>
      <Col md={4} className='feature'>
        <img src="images/circle-icons/full-color/creditcard.png" alt="creditcard" />
        <strong>Fully-encrypted payment</strong>
        <p>ParenTeach uses a fully-encrypted payment method, ensuring your payment information remains safe.</p>
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
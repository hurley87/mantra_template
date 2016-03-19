import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

const Tabs = ( { content = () => null }) => (
  <Grid id='tabs' className="container">
    <Row className="header">
      <Col md={12}>
        <h3>Accomplish more with React</h3>
        <p>Choose your favorite formats for your own sites</p>
      </Col>
    </Row>
    <Row>
      <Col md={12} className='tabs-wrapper'>
        <ul className="nav nav-tabs">
            <li className="active"><a href="#home" data-toggle="tab">Upstart your development</a></li>
            <li><a href="#profile" data-toggle="tab">Get ready in half the time</a></li>
            <li><a href="#messages" data-toggle="tab">Collaborate with everyone</a></li>
            <li><a href="#settings" data-toggle="tab">Get more done faster</a></li>
        </ul>
        <div className="tab-content">
            <div className="tab-pane fade in active" id="home">
              <div className="col-md-6 info">
                <h4>You don't need to have any advanced technical</h4>
                <p>
                  Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
                </p>
                <p>
                  You have complete control over the look & feel of your website, we offer the best quality so you take your site up and running in no time.
                </p>
              </div>
              <div className="col-md-6 image">
                <img src="images/tabs/pic1.png" className="img-responsive" alt="pic1" />
              </div>
            </div>
            <div className="tab-pane fade" id="profile">
              <div className="col-md-6 image">
                <img src="images/portfolioitem1.png" className="img-responsive" alt="pic2" />
              </div>
              <div className="col-md-6 info">
                <h4>You don't need to have any advanced technical</h4>
                <p>
                  Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
                </p>
              </div>                
            </div>
            <div className="tab-pane fade" id="messages">
              <div className="col-md-6 info">
                <h4>You don't need to have any advanced technical</h4>
                <p>
                  Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
                </p>
                <p>
                  You have complete control over the look & feel of your website, we offer the best quality so you take your site up and running in no time.
                </p>
              </div>
              <div className="col-md-6 image">
                <img src="images/tabs/pic2.png" className="img-responsive" alt="pic3" />
              </div>
            </div>
            <div className="tab-pane fade" id="settings">
              <div className="col-md-6 image">
                <img src="images/tabs/pic1.png" className="img-responsive" alt="pic4" />
              </div>
              <div className="col-md-6 info">
                <h4>You don't need to have any advanced technical</h4>
                <p>
                  Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
                </p>
              </div>
            </div>
        </div>
      </Col>
    </Row>
  </Grid>
);

export default Tabs;
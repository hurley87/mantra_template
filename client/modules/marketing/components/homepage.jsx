import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

import Pricing from './_pricing.jsx'
import Benefits from './_benefits.jsx'
import Mobile from './_mobile.jsx'
import Footer from './footer.jsx';

class Homepage extends React.Component {
  render() {
    return (
      <div id='home3'>
        <div className={ this.props.toggle ? 'st-container nav-effect' : 'st-container' }>
          <nav className="nav-menu">
            <h3>Pttrns</h3>
            <a href="/support" className="item">
              Pttrns Philosophy
            </a>
            <a href="/support" className="item">
              How it Works
            </a>
            <a href="/research" className="item">
              Research
            </a>
            <a href="/contact" className="item">
              About
            </a>
            <a href="/blog" className="item">
              Contact
            </a>
            <a href="/login" className="item">
              Login
            </a>
            <div className="social">
              <a href="#">
                <i className="fa"><img src="images/twitter24.png" /></i>
              </a>
              <a href="#">
                <i className="fa"><img src="images/facebook24.png" /></i>
              </a>
              <a href="#">
                <i className="fa"><img src="images/instagram24.png" /></i>
              </a>
              <a href="#">
                <i className="fa"><img src="images/youtube24.png" /></i>
              </a>
            </div>
          </nav>

          <div className="st-pusher">
            <div className="st-content">

              <header className="navbar navbar-inverse hero" role="banner">
                  <div className="container">
                    <div className="navbar-header">
                        <a href="index.html" className="navbar-brand">Pttrns</a>
                    </div>
                    <div onClick={ this.props.showMenu.bind(this) } className="sidebar-toggle">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>
                  </div>
              </header>

              <div id="hero">
                <div id="cover-image" className="animated fadeIn">
                  <div className="container">
                    <h1 className="hero-text animated fadeIn">Math Fluency for the Future</h1>
                    <div className="cta animated fadeIn">
                      <a href="/register" className="button">Free Sign Up</a>
                    </div>
                    <div className="screenshot animated fadeInUp">
                      <img src="images/ss2.png" className="img-responsive" alt="screenshot" />
                    </div>
                  </div>
                </div>
              </div>

              <div id="features">
                <div className="container">
                  <div className="row header">
                    <div className="col-md-12">
                      <h2>Master single-digit arithemtic</h2>
                      <p>Counting, Addition, Subtraction, Multiplication and Division</p>
                    </div>
                  </div>
                  <div className="row feature">
                    <div className="col-md-6 info">
                      <h4>Prepare your child for success in the Digital Age</h4>
                      <p>
                        Whether its a trade or a profession, number sense and fluency are crucial in today's world.
                        Fluency in single-digit arithmetic will set your child up for success.
                      </p>
                    </div>
                    <div className="col-md-6 image">
                      <img src="images/digital_age.jpg" className="img-responsive" alt="feature1" />
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="row feature backwards">
                    <div className="col-md-6 info">
                      <h4>Math tutoring from the comfort of your home</h4>
                      <p>
                        Pttrns provides a private, individualized program for your child. Using our enlightend timed tests,
                        your child will work for just five minutes a day.  Results are tracked and reported in real-time,
                        providing you with the tools you need to make sure they're on track.
                      </p>
                    </div>
                    <div className="col-md-6 image">
                      <img src="images/homeschool.jpg" className="img-responsive" alt="feature2" />
                    </div>
                  </div>
                </div>    
              </div>
              <Pricing />
              <Benefits />
              <Mobile />
              
              <div id="clients">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h3>We'd love to help!</h3>
                      <p>
                        Primary school math is our passion. We're here to help, so feel free to reach out.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;
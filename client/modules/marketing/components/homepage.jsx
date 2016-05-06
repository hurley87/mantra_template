import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Tabs from './_tabs.jsx'
import Pricing from './_pricing.jsx'
import Benefits from './_benefits.jsx'
import Mobile from './_mobile.jsx'
import Features from './_features.jsx'
import Cta from './_cta.jsx'
import Footer from './footer.jsx';

class Homepage extends React.Component {
  render() {
    return (
      <div id='home3'>
        <div className={ this.props.toggle ? 'st-container nav-effect' : 'st-container' }>
          <nav className="nav-menu">
            <h3>Pttrns</h3>
            <a href="/register" className="item">
              Sign up
            </a>
            <a href="/login" className="item">
              Login
            </a>
            <a href="/forgot" className="item">
              Forgot Password?
            </a>
            <a href="/support" className="item">
              Support
            </a>
            <a href="/contact" className="item">
              Contact Us
            </a>
            <a href="/about" className="item">
              About us
            </a>
            <a href="/blog" className="item">
              Blog
            </a>
            <div className="social">
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook"></i>
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
                      <h4>Tutoring from the comfort of your home</h4>
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
                      <h3>Our Customers</h3>
                      <p>
                        These are some of our customers who have helped us by using our product.
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
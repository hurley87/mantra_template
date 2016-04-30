import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Tabs from './_tabs.jsx'
import Pricing from './_pricing.jsx'
import Benefits from './_benefits.jsx'
import Mobile from './_mobile.jsx'
import Features from './_features.jsx'
import Cta from './_cta.jsx'
import Footer from './footer.jsx'

class Homepage extends React.Component {
  render() {
    return (
      <div id='home3'>
        <div className={ this.props.toggle ? 'st-container nav-effect' : 'st-container' }>
          <nav className="nav-menu">
            <h3>Menu</h3>
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
                        <a href="index.html" className="navbar-brand">React</a>
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
                    <h1 className="hero-text animated fadeIn">Learn single digit arithmetic.</h1>
                    <div className="cta animated fadeIn">
                      <a href="/register" className="button">Sign up free</a>
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
                      <h2>Need an easy way to customize your site?</h2>
                      <p>React is perfect for novice developers and experts alike.</p>
                    </div>
                  </div>
                  <div className="row feature">
                    <div className="col-md-6 info">
                      <h4>You don't need to have great technical experience to use your product.</h4>
                      <p>
                        Whether you want to fill this paragraph with some text like I'm doing right now, this place
                        is perfect to describe some features or anything you want - React has a complete solution for you.
                      </p>
                    </div>
                    <div className="col-md-6 image">
                      <img src="images/feature1.png" className="img-responsive" alt="feature1" />
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="row feature backwards">
                    <div className="col-md-6 info">
                      <h4>A fully featured well design template that works.</h4>
                      <p>
                        You have complete control over the look & feel of your website, we offer the best quality so you take your site up and running in no time.
                      </p>
                      <p>
                        Write some text here to explain the features of your site or application, it
                        has lots of uses.
                      </p>
                    </div>
                    <div className="col-md-6 image">
                      <img src="images/feature2.png" className="img-responsive" alt="feature2" />
                    </div>
                  </div>
                </div>    
              </div>
              <Pricing />
              <Benefits />
              <Mobile />
              <div id="testimonials">
                <div className="container">
                  <div className="row header">
                    <div className="col-md-12">
                      <h3>Trusted by a lot businesses around the world:</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="testimonial pull-right">
                        <div className="quote">
                          I am just quoting some stuff but I am seriously happy about this product. Has a lot of powerful
                          features and is so easy to set up, I could stay customizing it day and night, it's just so much fun!
                          <div className="arrow-down">
                                    <div className="arrow"></div>
                                    <div className="arrow-border"></div>
                                </div>
                        </div>
                        <div className="author">
                          <img src="images/testimonials/testimonial3.jpg" className="pic" alt="testimonial3" />
                          <div className="name">John McClane</div>
                          <div className="company">Microsoft</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="testimonial">
                        <div className="quote">
                          This thing is one of those tools that everybody should be using. I really like it and with this ease to use, you can kickstart your projects and apps and just focus on your business!
                          <div className="arrow-down">
                                    <div className="arrow"></div>
                                    <div className="arrow-border"></div>
                                </div>
                        </div>
                        <div className="author">
                          <img src="images/testimonials/testimonial2.jpg" className="pic" alt="testimonial2" />
                          <div className="name">Karen Jones</div>
                          <div className="company">Pixar Co.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
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
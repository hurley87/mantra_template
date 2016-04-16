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
            <a href="index.html" className="item">
              Home 1 (Static)
            </a>
            <a href="index2.html" className="item">
              Home 2 (Slider)
            </a>
            <a href="features.html" className="item">
              Features
            </a>
            <a href="services.html" className="item">
              Services
            </a>
            <a href="pricing.html" className="item">
              Pricing Charts
            </a>
            <a href="charts.html" className="item">
              Comparison tables
            </a>
            <a href="aboutus.html" className="item">
              About us
            </a>
            <a href="contactus.html" className="item">
              Contact us
            </a>
            <a href="gallery.html" className="item">
              Gallery
            </a>
            <a href="portfolio.html" className="item">
              Portfolio
            </a>
            <a href="blog.html" className="item">
              Blog
            </a>
            <div className="social">
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-play"></i>
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
                    <h1 className="hero-text animated fadeIn">The best interfaces for your web and mobile apps.</h1>
                    <div className="cta animated fadeIn">
                      <a href="/register" className="button">Sign up free</a>
                    </div>
                    <div className="screenshot animated fadeInUp">
                      <img src="images/ss2.png" className="img-responsive" alt="screenshot" />
                    </div>
                  </div>
                </div>
              </div>

              <Tabs />
              <Pricing />
              <Benefits />
              <Mobile />
              <Features />
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

              <div id="cta">
                <p>
                  Start your free 14 day trial! 
                </p>
                <a href="/register">
                  Sign up for free
                </a>
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
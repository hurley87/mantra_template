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
              <Cta />

            </div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;
import React from 'react';
import {Row, Col} from 'react-bootstrap';


const Header = ( { content = () => null }) => (
  <div id='header-1'>
      <header className="navbar navbar-inverse normal" role="banner">
      <div className="container">
        <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="index.html" className="navbar-brand">Pttrns</a>
        </div>
        <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Features<b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
              <li><a href="index.html">Home 1 (Static)</a></li>
              <li><a href="index2.html">Home 2 (Sidebar menu)</a></li>
              <li><a href="index3.html">Home 3 (Slider)</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Services<b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
              <li><a href="features.html">Features</a></li>
              <li><a href="services.html">Services</a></li>
                </ul>
              </li>
              <li className="active dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Pricing <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
              <li><a href="pricing.html">Pricing charts</a></li>
              <li><a href="charts.html">Comparison tables</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    More pages <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
              <li><a href="aboutus.html">About us</a></li>
              <li><a href="contactus.html">Contact us</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="portfolio-item.html">Portfolio Item</a></li>
              <li><a href="invoice.html">Invoice page</a></li>
              <li><a href="timeline.html">Timeline Page</a></li>
              <li><a href="docs.html">API Documentation</a></li>
              <li><a href="support.html">Support</a></li>
              <li><a href="coming-soon.html">Coming Soon</a></li>
              <li><a href="status.html">Status</a></li>
              <li><a href="signup.html">Sign Up & Sign In</a></li>
              <li><a href="signup-rotate.html">Sign Up Miscellaneous</a></li>
              <li><a href="404.html">404 Page</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Blog <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
              <li><a href="blog.html">Blog </a></li>
              <li><a href="blogpost.html">Blog post</a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right visible-md visible-lg">
              <li>
                  <a href="signup.html" className="button">Sign up free</a>
              </li>
            </ul>
        </nav>
      </div>
  </header>
  </div>
);

export default Header;
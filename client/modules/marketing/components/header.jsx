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
            <a href="/" className="navbar-brand">Pttrns</a>
        </div>
        <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul className="nav navbar-nav">
              <li className={ location.pathname == '/about' ? 'active' : null}>
                <a href="/about">
                 About
                </a>
              </li>
              <li className={ location.pathname == '/lessons' ? 'active' : null}>
                <a href="/lessons">
                  Lessons
                </a>
              </li>
              <li className={ location.pathname == '/contact' ? 'active' : null}>
                <a href="/contact">
                  Contact
                </a>
              </li>
              <li className={ location.pathname == '/support' ? 'active' : null}>
                <a href="/support">
                  Support
                </a>
              </li>
              <li>
                <a href="#">
                  Blog
                </a>
              </li>
              <li>
                <a href="/login">
                  Login
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right visible-md visible-lg">
              <li>
                  <a href="/register" className="button">Sign up free</a>
              </li>
            </ul>
        </nav>
      </div>
  </header>
  </div>
);

export default Header;
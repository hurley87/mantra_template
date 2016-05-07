import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class MainNav extends React.Component {
  render() {
    return (
      <div>
        <div id="features">
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
                    <li className={ location.pathname == '/philosophy' ? 'active' : null}>
                      <a href="/philosophy">
                          Philosophy
                      </a>
                    </li>
                    <li className={ location.pathname == '/how_it_works' ? 'active' : null}>
                      <a href="/how_it_works">
                          How it Works
                      </a>
                    </li>
                    <li className={ location.pathname == '/research' ? 'active' : null}>
                      <a href="/research">
                        Research
                      </a>
                    </li>
                    <li className={ location.pathname == '/about' ? 'active' : null}>
                      <a href="/about">
                         About
                      </a>
                    </li>
                    <li className={ location.pathname == '/contact' ? 'active' : null}>
                      <a href="/contact">
                         Contact
                      </a>
                    </li>
                  </ul>
                  <ul class="nav navbar-nav navbar-right visible-md visible-lg">
                    <li>
                        <a href="/register" class="button">Sign up free</a>
                    </li>
                  </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>
    )
  }
}

export default MainNav;
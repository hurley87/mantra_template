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
                    <li className="dropdown">
                      <a href="/philosophy" className="dropdown-toggle" data-toggle="dropdown">
                          Philosophy
                      </a>
                    </li>
                    <li>
                      <a href="/how_it_works" className="dropdown-toggle" data-toggle="dropdown">
                          How it Works
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="/research" className="dropdown-toggle" data-toggle="dropdown">
                        Research
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="/about" className="dropdown-toggle" data-toggle="dropdown">
                         About
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="/contact" className="dropdown-toggle" data-toggle="dropdown">
                         Contact
                      </a>
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
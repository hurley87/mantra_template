import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

import Pricing from './_pricing.jsx'
import Benefits from './_benefits.jsx'
import Mobile from './_mobile.jsx'
import Footer from './footer.jsx';
import MainNav from './MainNav.jsx';

class Homepage extends React.Component {
  render() {
    return (
      <div id='home3'>
        <div className={ this.props.toggle ? 'st-container nav-effect' : 'st-container' }>
          <div className="st-pusher">
            <div className="st-content">

              <div id="hero">
                <div id="cover-image" className="animated fadeIn">
                  <div className="container">
                    <h1 className="hero-text animated fadeIn">Math Fluency for the Future</h1>
                    <p className='hero-text'>A proven approach that makes teaching math fun and easy.</p>
                    <div className="cta animated fadeIn">
                      <a href="/register" className="button">Free Sign Up</a>
                    </div>
                  </div>
                  <div className='blue-background'></div>
                </div>
              </div>

              <div id="features">
                <div className="container">
                  <div className="row header">
                    <div className="col-md-12">
                      <h2>Help your child master single-digit arithemtic</h2>
                      <p>Pttrns is a series of enlightend tests that train a student to quickly become fluent in arithemtic.
                       </p>
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
                  <div className="divider"></div>
                  <Benefits />
                </div>    
              </div>
              
              <div id="clients">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h3>Start learning with Pttrns today!</h3>
                      <div className="cta animated fadeIn">
                        <a href="/register" className="button">Free Sign Up</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;
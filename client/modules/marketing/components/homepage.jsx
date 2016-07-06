import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

import Pricing from './_pricing.jsx'
import Benefits from './_benefits.jsx'
import Mobile from './_mobile.jsx'
import Footer from './footer.jsx';

class Homepage extends React.Component {
  render() {
    console.log(this.props.answers)
    return (
      <div id='home3'>
        <div className={ this.props.toggle ? 'st-container nav-effect' : 'st-container' }>
          <div className="st-pusher">
            <div className="st-content">
              <div id="hero">
                <div id="cover-image" className="animated fadeIn">
                  <div className="container">
                    <h1 className="hero-text animated fadeIn">Math Fluency for the Future</h1>
                    <p className='hero-text'>A program to help students interiorize single-digit arithmetic.</p>
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
                      <h2>Help your child master single-digit arithmetic</h2>
                      <p>Pttrns is a series of enlightend tests that train a student to quickly become fluent in arithemtic.
                       </p>
                    </div>
                  </div>
                  <div className="row feature">
                    <div className="col-md-8 info">
                      <h4>Prepare your child for success in the Digital Age</h4>
                      <p>
                        Whether its a trade or a profession, number sense and fluency are crucial in today's world.
                        Through enlightend tests we teach your child the fundamentals of mathematics. 
                      </p>
                      <p><a href='how_it_works'>It only takes 5 minutes a day</a></p>
                    </div>
                    <div className="col-md-4 image">
                      <img src="images/circle-icons/full-color/smartphone.png" className="img-responsive pull-right" alt="feature1" />
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="row feature backwards">
                    <div className="col-md-8 info">
                      <h4>Math tutoring from the comfort of your home</h4>
                      <p>
                        Pttrns provides a private, individualized program for your child. Results are tracked and reported in real-time,
                        providing you with the tools you need to make sure they're on track.
                      </p>
                      <p><a href='how_it_works'>See just how easy it is</a></p>
                    </div>
                    <div className="col-md-4 image">
                      <img src="images/circle-icons/full-color/barchart.png" className="img-responsive pull-left" alt="feature2" />
                    </div>
                  </div>
                </div>  
                <Mobile />
                <Benefits />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;
import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

const Pricing = ( { content = () => null }) => (
  <div id="pricing">
    <div className="container">
      <div className="row header">
        <div className="col-md-12">
          <h3>Start today and lead your child to math success!</h3>
          <p>Plans are fully refundable if you aren't satisfied with your child's progress</p>
        </div>
      </div>
      <div className="row charts">
        <div className="col-md-4">
          <div className="chart first">
            <div className="quantity">
              <span className="dollar"></span>
              <span className="price">FREE</span>
              <span className="period"></span>
            </div>
            <div className="plan-name">Starter</div>
            <div className="specs">
              <div className="spec">
                <span className="variable">5</span>
                team members
              </div>
              <div className="spec">
                <span className="variable">Digital</span>
                recurring billing
              </div>
              <div className="spec">
                <span className="variable">Virtual</span>
                online terminal
              </div>
              <div className="spec">
                <span className="variable">10</span>
                total products
              </div>
              <div className="spec">
                <span className="variable">1.0%</span>
                Transaction fee
              </div>
            </div>
            <a className="btn-signup button-clear" href="signup.html">
              <span>Start free trial</span>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="chart featured">
            <div className="popular">Most popular</div>
            <div className="quantity">
              <span className="dollar">$</span>
              <span className="price">50</span>
              <span className="period">/month</span>
            </div>
            <div className="plan-name">Profesional</div>
            <div className="specs">
              <div className="spec">
                <span className="variable">15</span>
                team members
              </div>
              <div className="spec">
                <span className="variable">Digital</span>
                recurring billing
              </div>
              <div className="spec">
                <span className="variable">Virtual</span>
                online terminal
              </div>
              <div className="spec">
                <span className="variable">15</span>
                total products
              </div>
              <div className="spec">
                <span className="variable">0.5%</span>
                Transaction fee
              </div>
            </div>
            <a className="btn-signup button-clear" href="signup.html">
              <span>Start free trial</span>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="chart last">
            <div className="quantity">
              <span className="dollar">$</span>
              <span className="price">75</span>
              <span className="period">/month</span>
            </div>
            <div className="plan-name">Premium</div>
            <div className="specs">
              <div className="spec">
                <span className="variable">Unlimited</span>
                team members
              </div>
              <div className="spec">
                <span className="variable">Digital</span>
                recurring billing
              </div>
              <div className="spec">
                <span className="variable">Virtual</span>
                online terminal
              </div>
              <div className="spec">
                <span className="variable">25</span>
                total products
              </div>
              <div className="spec">
                <span className="variable">No</span>
                Transaction fee
              </div>
            </div>
            <a className="btn-signup button-clear" href="signup.html">
              <span>Start free trial</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
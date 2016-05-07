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
                <span className="variable"></span>
                <br></br>
              </div>
              <div className="spec">
                <span className="variable"></span>
                Counting
              </div>
              <div className="spec">
                <span className="variable"></span>
                Addition
              </div>
              <div className="spec">
                <span className="variable"></span>
                Subtraction
              </div>
              <div className="spec">
                <span className="variable"></span>
              </div>
              <div className="spec">
                <span className="variable"></span>
                <br></br>
              </div>
            </div>
            <a className="btn-signup button-clear" href="/register">
              <span>Start today</span>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="chart featured">
            <div className="popular">Most popular</div>
            <div className="quantity">
              <span className="dollar">$</span>
              <span className="price">75</span>
            </div>
            <div className="plan-name">Premium</div>
            <div className="specs">
              <div className="spec">
                <span className="variable"></span>
                Pttrns textbook
              </div>
              <div className="spec">
                <span className="variable"></span>
                Counting
              </div>
              <div className="spec">
                <span className="variable"></span>
                Addition
              </div>
              <div className="spec">
                <span className="variable"></span>
                Subtraction
              </div>
              <div className="spec">
                <span className="variable"></span>
                Division
              </div>
              <div className="spec">
                <span className="variable"></span>
                Multiplication
              </div>
              <div className="spec">
                <span className="variable"></span>
                Online support
              </div>
            </div>
            <a className="btn-signup button-clear" href="/register">
              <span>Start today</span>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="chart last">
            <div className="quantity">
              <span className="dollar">$</span>
              <span className="price">50</span>
            </div>
            <div className="plan-name">Professional</div>
            <div className="specs">
              <div className="spec">
                <span className="variable"></span>
                Counting
              </div>
              <div className="spec">
                <span className="variable"></span>
                Addition
              </div>
              <div className="spec">
                <span className="variable"></span>
                Subtraction
              </div>
              <div className="spec">
                <span className="variable"></span>
                Division
              </div>
              <div className="spec">
                <span className="variable"></span>
                Multiplication
              </div>
            </div>
            <a className="btn-signup button-clear" href="/register">
              <span>Start today</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
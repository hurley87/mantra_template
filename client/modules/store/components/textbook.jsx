import React from 'react';
import Header from '../../dashboard/containers/header.js';


class Textbook extends React.Component {
  render() {
    return ( 
    <div>
      <Header title='Upgrade' />
      <div id="pricing-alt">
        <div id="first-option">
          <div className="row header">
            <div className="col-md-12">
              <h3>Different plans for everyone</h3>
              <p>Choose the pricing that fits your business needs</p>
            </div>
          </div>
          <div className="row charts">
            <div className="col-sm-4">
              <div className="chart first">
                <div className="plan-name">Parent</div>
                <div className="quantity">
                  <span className="dollar">$</span>
                  <span className="price">4</span>
                  <span className="period">/month</span>
                </div>
                <div className="specs">
                  <div className="spec">
                    <span className="variable">2</span> students
                  </div>
                  <div className="spec">
                    <span className="variable">Free</span> training session
                  </div>
                  <div className="spec">
                    <span className="variable">Virtual</span> online assistance
                  </div>
                  <div className="spec">
                    <span className="variable">Unlimited</span> access
                  </div>
                  <div className="spec">
                    <span className="variable">1.0%</span> Transaction fee
                  </div>
                </div>
                <span  onClick={this.props.getCard.bind(this, 400, 'Parent Plan', 'Full acccess to Pttrns for $4 monthly.')} className="button">
                  Purchase
                </span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="chart featured">
                <img src="images/ribbon.png" className="popular" alt="ribbon" />
                <div className="plan-name">Tutor</div>
                <div className="quantity">
                  <span className="dollar">$</span>
                  <span className="price">9</span>
                  <span className="period">/month</span>
                </div>            
                <div className="specs">
                  <div className="spec">
                    <span className="variable">10</span> students
                  </div>
                  <div className="spec">
                    <span className="variable">Free</span> training session
                  </div>
                  <div className="spec">
                    <span className="variable">Virtual</span> online assistance
                  </div>
                  <div className="spec">
                    <span className="variable">Unlimited</span> access
                  </div>
                  <div className="spec">
                    <span className="variable">1.0%</span> Transaction fee
                  </div>
                </div>
                <span  onClick={this.props.getCard.bind(this, 900, 'Tutor Plan', 'Full acccess to Pttrns for $9 monthly.')} className="button">
                  Purchase
                </span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="chart last">
                <div className="plan-name">Teacher</div>
                <div className="quantity">
                  <span className="dollar">$</span>
                  <span className="price">29</span>
                  <span className="period">/month</span>
                </div>
                <div className="specs">
                  <div className="spec">
                    <span className="variable">35</span> students
                  </div>
                  <div className="spec">
                    <span className="variable">Free</span> training session
                  </div>
                  <div className="spec">
                    <span className="variable">Virtual</span> online assistance
                  </div>
                  <div className="spec">
                    <span className="variable">Unlimited</span> access
                  </div>
                  <div className="spec">
                    <span className="variable">1.0%</span> Transaction fee
                  </div>
                </div>
                <span  onClick={this.props.getCard.bind(this, 2900, 'Teacher Plan', 'Full acccess to Pttrns for $29 monthly.')} className="button">
                  Purchase              
                </span>
              </div>
            </div>        
          </div>
          <div className="row message">
            <p>
              All of our plans come with a 30 day trial with a full money back guarantee.
            </p>
          </div>
          <div className="row faq">
            <div className="col-md-12">
              <div className="row header">
                <div className="col-md-12">
                  <h3>Frequently Asked Questions</h3>
                </div>
              </div>
              <div className="row questions">
                <div className="col-md-6">
                  <div className="question">
                    <strong>Do I need a card to signup?</strong>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the randomised words which don’t look even slightly believable. If you are anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <div className="question">
                    <strong>Can I cancel at anytime?</strong>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the randomised words which don’t look even slightly believable. If you are anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="question">
                    <strong>Can I cancel at anytime?</strong>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the randomised words which don’t look even slightly believable. If you are anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <div className="question">
                    <strong>Do I need a card to signup?</strong>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the randomised words which don’t look even slightly believable. If you are anything embarrassing hidden in the middle of text.
                    </p>
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


export default Textbook;
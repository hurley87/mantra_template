import React from 'react';



class Pricing extends React.Component {
  render() {
    return ( 
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
							<div className="plan-name">Freelance</div>
							<div className="quantity">
								<span className="dollar">$</span>
								<span className="price">29</span>
								<span className="period">/month</span>
							</div>
							<div className="specs">
								<div className="spec">
									<span className="variable">5</span> team members
								</div>
								<div className="spec">
									<span className="variable">Digital</span> recurring billing
								</div>
								<div className="spec">
									<span className="variable">Virtual</span> online terminal
								</div>
								<div className="spec">
									<span className="variable">10</span> total products
								</div>
								<div className="spec">
									<span className="variable">1.0%</span> Transaction fee
								</div>
							</div>
							<a className="button" href="#">
								<span>Purchase</span>
							</a>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="chart featured">
							<img src="images/ribbon.png" className="popular" alt="ribbon" />
							<div className="plan-name">Profesional</div>
							<div className="quantity">
								<span className="dollar">$</span>
								<span className="price">79</span>
								<span className="period">/month</span>
							</div>						
							<div className="specs">
								<div className="spec">
									<span className="variable">15</span> team members
								</div>
								<div className="spec">
									<span className="variable">Digital</span> recurring billing
								</div>
								<div className="spec">
									<span className="variable">Virtual</span> online terminal
								</div>
								<div className="spec">
									<span className="variable">15</span> total products
								</div>
								<div className="spec">
									<span className="variable">0.5%</span> Transaction fee
								</div>
							</div>
							<a className="button" href="#">
								<span>Purchase</span>
							</a>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="chart last">
							<div className="plan-name">Premium</div>
							<div className="quantity">
								<span className="dollar">$</span>
								<span className="price">119</span>
								<span className="period">/month</span>
							</div>
							<div className="specs">
								<div className="spec">
									<span className="variable">35</span> team members
								</div>
								<div className="spec">
									<span className="variable">Digital</span> recurring billing
								</div>
								<div className="spec">
									<span className="variable">Virtual</span> online terminal
								</div>
								<div className="spec">
									<span className="variable">25</span> total products
								</div>
								<div className="spec">
									<span className="variable">No</span> Transaction fee
								</div>
							</div>
							<a className="button" href="#">
								<span>Purchase</span>
							</a>
						</div>
					</div>				
				</div>
				<div className="row message">
					<p>
						All of our plans come with a 30 day trial with no credit card required.
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

    )
  }
}


export default Pricing;
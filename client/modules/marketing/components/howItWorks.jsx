import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class HowItWorks extends React.Component {
  render() {
    return (

		<div id="blog">
			<div id="posts">
				<div className="container">
					<div className="row">
						<div className="col-md-12">

							<div className="post">
								<div className='row'>
									<div className='col-md-2'>
										<img src="images/circle-icons/full-color/compose.png" className="img-responsive" alt="slide" />
									</div>
									<div className='col-md-10'>
										<div className="title">
											<a href="/register">1. Create your account</a>
										</div>
										<p className="intro">
											You'll have secure access to everything you need to master single-digit arithmetic, including our learning strategies, textbook, and data analytics.
										</p>
										<a href="/register" download="What To Do About Canada's Declining Math Scores" className="continue-reading">Register for your free account</a>
									</div>
								</div>
							</div>

							<div className="post">
								<div className='row'>
									<div className='col-md-2'>
										<img src="images/circle-icons/full-color/calendar.png" className="img-responsive" alt="slide" />
									</div>
									<div className='col-md-10'>
										<div className="title">
											<a href="/register">2. Practise 5 minutes a day</a>
										</div>
										<p className="intro">
											We've dedicated our time to research so you don't have to. Each strategy is designed for simplicity, clarity and results. In a matter of minutes, Pttrns students move from understanding to internalization.
											<br />
											Dedicate your time to what really matters. Mastering fluency for the future!
										</p>
										<a href="/register" download="What To Do About Canada's Declining Math Scores" className="continue-reading">Rely on our carefully researched, step-by-step guide</a>
									</div>
								</div>
							</div>

							<div className="post">
								<div className='row'>
									<div className='col-md-2'>
										<img src="images/circle-icons/full-color/flame.png" className="img-responsive" alt="slide" />
									</div>
									<div className='col-md-10'>
										<div className="title">
											<a href="/register">3. Complete our Enlightened Tests</a>
										</div>
										<p className="intro">
																				Once your child has internalized the strategy, the next step is five minutes of concentrated work/day. That's it. While your child works, our proprietary analytics software will work behind the scenes to analyze your child's performance.
									<br />
									Motivation is critical to your child's success and general well-being. Prolonged effort can be suboptimal in primary mathematics. The Pttrns method limits the burden on your child and makes learning enjoyable.
										</p>
										<a href="/register" download="What To Do About Canada's Declining Math Scores" className="continue-reading">Spend only 5 minutes a day</a>
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

export default HowItWorks;
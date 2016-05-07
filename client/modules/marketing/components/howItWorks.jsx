import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class HowItWorks extends React.Component {
  render() {
    return (

		<div className="features">



	<div id="tabs">
		<div className="container">
			<div className="row header">
				<h3>The Pttrns Method</h3>
				<p>Four Steps to Fluency</p>
			</div>
			<div className="row">
				<div className="col-md-12 tabs-wrapper">
					<ul className="nav nav-tabs">
					  	<li className="active"><a href="#home" data-toggle="tab">1. Sign up on pttrns.ca</a></li>
					  	<li><a href="#profile" data-toggle="tab">2. Follow the Pttrns strategies</a></li>
					  	<li><a href="#messages" data-toggle="tab">3. Complete the eTTs</a></li>
					  	<li><a href="#settings" data-toggle="tab">4. Maintain fluency!</a></li>
					</ul>

					<div className="tab-content">
					  	<div className="tab-pane fade in active" id="home">
					  		<div className="col-md-6 info">
					  			<h4>Create your profile in one easy step</h4>
					  			<p>
					  				Create a Pttrns profile here. You'll have secure access to everything you need
					  				to master single-digit arithmetic, including our learning strategies, textbook, and data analytics.

					  			</p>
					  			<p>
					  				Once your profile is created, your child will be able to log-in and continue the path to fluency at any time, 
					  				from any place. 
					  			</p>
					  		</div>
					  		<div className="col-md-6 image">
					  			<img src="images/tabs/pic1.png" className="img-responsive" alt="picture1" />
					  		</div>
					  	</div>
					  	<div className="tab-pane fade" id="profile">
					  		<div className="col-md-6 image">
					  			<img src="images/portfolioitem1.png" className="img-responsive" alt="picture2" />
					  		</div>
					  		<div className="col-md-6 info">
					  			<h4>Rely on our carefully researched, step-by-step guide</h4>
					  			<p>
					  				We've dedicated our time to research so you don't have to. Each strategy is designed for simplicity, clarity and results.
					  				In a matter of minutes, Pttrns students move from understanding to internalization. 
					  			</p>
					  			<p>
					  				Dedicate your time to what really matters.  Mastering fluency for the future!
					  			</p>
					  		</div>					  		
					  	</div>
					  	<div className="tab-pane fade" id="messages">
					  		<div className="col-md-6 info">
					  			<h4>Spend 5 minutes a day completing the Pttrns enlightened timed tests</h4>
					  			<p>
					  				Once your child has internalized the strategy, the next step is five minutes of concentrated work/day. That's it.
					  				While your child works, our proprietary analytics software will work behind the scenes to analyze your child's performance.

					  			</p>
					  			<p>
					  				Motivation is critical to your child's success and general well-being. Prolonged effort can be suboptimal in primary mathematics.  The 
					  				Pttrns method limits the burden on your child and makes learning enjoyable.
					  			</p>
					  		</div>
					  		<div className="col-md-6 image">
					  			<img src="images/tabs/pic2.png" className="img-responsive" alt="picture3" />
					  		</div>
					  	</div>
					  	<div className="tab-pane fade" id="settings">
					  		<div className="col-md-6 image">
					  			<img src="images/tabs/pic1.png" className="img-responsive" alt="picture4" />
					  		</div>
					  		<div className="col-md-6 info">
					  			<h4>Congrats on achieving fluency!</h4>
					  			<p>
					  				First off, you should pat yourself on the back for a wonderful achievement.  To stay fluent, Pttrns
					  				recommends 2 sessions per month to stay fluent.
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

export default HowItWorks;
import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Contact extends React.Component {
  render() {
    return (

		<div>
			<div id="contact-us">
				<div id="info">
					<div className="container">
						<div className="row">
							<div className="col-md-8 message">
								<h3>Get in touch!</h3>
								<p>
									The Pttrns team would love to hear from you. <br/> Send us a message and we'll be in touch within 1 business day.
								</p>
								<form role="form" id="contact-form" method="post">
									<div className="form-group">
							    		<label for="name">Your name</label>
							    		<input type="text" name="name" className="form-control" id="name" />
							  		</div>
							  		<div className="form-group">
							    		<label for="email">Email address</label>
							    		<input type="email" name="email" className="form-control" id="email" />
							  		</div>
							  		<div className="form-group">
							    		<label for="phone">Phone</label>
							    		<input type="text" name="phone" className="form-control" id="phone" />
							  		</div>
							  		<div className="form-group">
							    		<label for="message">Your message</label>
							    		<textarea name="message" className="form-control" id="message" rows="6"></textarea>
							  		</div>
							  		<div className="submit">
							  			<input type="submit" className="button button-small" value="Email us" />
							  		</div>
								</form>
							</div>
							<div className="col-md-4 contact">
								<div className="address">
									<h3>Our Address</h3>
									<p>
										1152 Seale Rd. <br />
										Kingston ON <br />
										K7P0A2
									</p>
								</div>
								<div className="phone">
									<h3>By Phone</h3>
									<p>
										647.648.6151
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

export default Contact;
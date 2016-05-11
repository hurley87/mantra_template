import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Contact extends React.Component {
  render() {
    return (
		<div id="blog">
			<div id="posts">
				<div className="container">
					<div className="row">
						<div className="col-md-8">

							<div className="post">
								<div className="title">
									Get in touch!
								</div>
								<p className="intro">
									The Pttrns team would love to hear from you. Send us a message and we'll be in touch within 1 business day.
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

						</div>
						<div className="col-md-4 sidebar">
							<div className="best-hits">
								<strong>Email: </strong> hurley_w@rmc.ca
								<br /><br />
								<strong>Phone: </strong> 647-284-5023
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
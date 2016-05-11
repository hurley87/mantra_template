import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class ContactForm extends React.Component {
  render() {
    return (
		<div>
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
		    		<label for="message">Message</label>
		    		<textarea name="message" className="form-control" id="message" rows="6"></textarea>
		  		</div>
		  		<div className="submit">
		  			<input type="submit" className="button button-small" value="Email us" />
		  		</div>
			</form>
		</div>
    )
  }
}

export default ContactForm;
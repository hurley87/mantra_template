import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import ContactForm from '../containers/Contact.js';

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
								<ContactForm />
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
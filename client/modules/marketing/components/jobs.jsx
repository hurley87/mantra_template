import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import ContactForm from './contactForm.jsx';

class Jobs extends React.Component {
  render() {
    return (
		<div id="blog">
			<div id="posts">
				<div className="container">
					<div className="row">
						<div className="col-md-8">

							<div className="post">
								<div className="title">
									We're looking for a Videographer!
								</div>
								<p className="intro">
									You'll work closely with the founding partners to develop Pttrns brand recognition throughout various digital channels.  You'll be 
							given full creative control to develop educational videos outlining Pttrns learning strategies.  Your content will be showcasesd 
							across our social media platforms and paired with our educational material. 
								</p>
								<p className='intro'>
									You'll be responsible for the full production cycle, including co-ordinating pre-production with the Pttrns team and students.  You'll 
									perform post-video production tasks, including reviewing footage, making editorial decisions, audio adjustments, color correction, and final edits. 
									Once finished, our development team will work closely with you to publish your work to the world!
								</p>
								<br />
								<div className="title">
									Apply here:
								</div>
								<ContactForm />
							</div>

						</div>
						<div className="col-md-4 sidebar">
							<div className="best-hits">
								<p>Certificate or degree in Videography, Broadcast Television, or Digital Media</p>
								<p>2+ years experience with Adobe Suite (Photoshop, Illustrator, After-Effects) </p>
								<p>Awesome working knowledge of A/V equipment and production materials</p>
								<p>A portfolio, of course, so we can see your awesome work!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
  }
}

export default Jobs;
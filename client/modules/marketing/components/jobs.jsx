import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Jobs extends React.Component {
  render() {
    return (

	<div id="portfolio">
		<div id="showcase">
			<div className="container">
				<div className="row header">
					<div className="col-md-12">
						<h3>We're looking for a Videographer!</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="project">

							<h3>What You'll Do</h3>
							<p className="description">
							You'll work closely with the founding partners to develop Pttrns brand recognition throughout various digital channels.  You'll be 
							given full creative control to develop educational videos outlining Pttrns learning strategies.  Your content will be showcasesd 
							across our social media platforms and paired with our educational material. 
							</p>
							<p className="description">
							You'll be responsible for the full production cycle, including co-ordinating pre-production with the Pttrns team and students.  You'll 
							perform post-video production tasks, including reviewing footage, making editorial decisions, audio adjustments, color correction, and final edits. 
							Once finished, our development team will work closely with you to publish your work to the world!
							</p>
							<br />

							<h3>Who You Are</h3>
							<p className="description">
								A love for digital media runs through your veins!  You're highly creative and you get excited by the prospect of reaching thousands of children to help them learn. At some point 
								in your career you've been involved with web development and maybe even have some HTML, CSS and JS chops.  You're personable, driven, and hard-working. An all-around team player!
							</p>
							<br />

							<h3>Requirements</h3>
							<p className="description">
								<ul>
									<li>Certificate or degree in Videography, Broadcast Television, or Digital Media</li>
									<li>2+ years experience with Adobe Suite (Photoshop, Illustrator, After-Effects) </li>
									<li>Awesome working knowledge of A/V equipment and production materials</li>
									<li>A portfolio, of course, so we can see your awesome work!</li>
								</ul>
							</p>
							<div className="divider"></div>
							<div className="visit">
								<p>Please send your resume to tim@pttrns.ca. We look forward to hearing from you!</p>
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

export default Jobs;
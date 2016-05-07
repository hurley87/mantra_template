import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class About extends React.Component {
  render() {
    return (

		<div id="about-us">
			<div id="slider">
				<div className="container">
					<div className="row header">
						<div className="col-md-12">
							<h3>About React Themes</h3>
							<p>
								You have to roll up your sleeves and be a stonecutter before you can become a sculptor – command of craft always precedes art.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="flexslider">
							  	<ul className="slides">
								    <li>
								      	<img src="images/office2.png" alt="office2" />
								    </li>
								    <li>
								      	<img src="images/office1.png" alt="office1" />
								    </li>
								    <li>
								      	<img src="images/office3.png" alt="office3" />
								    </li>
							  	</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="info">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1>We care about our work</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">					
							<p>
								Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
							</p>
							<p>
								You have complete control over the look & feel of your website, we offer the best quality so you take your site up and running in no time.
							</p>
						</div>
						<div className="col-md-6">
							<p>
								React is a simple, developer-friendly way to get your site. Full of features, cool documentation ease of use, lots of pages. We want to help bringing cool stuff to people so they can get their projects faster.
							</p>
							<a href="#" className="join-team button button-small">Join our team</a>
						</div>
					</div>
					<div className="row stats">
						<div className="col-sm-3">
							<strong>13</strong>
							employees
						</div>
						<div className="col-sm-3">
							<strong>10k</strong>
							customers
						</div>
						<div className="col-sm-3">
							<strong>9</strong>
							template pages
						</div>
						<div className="col-sm-3">
							<strong>13k</strong>
							products sold
						</div>
					</div>
					<div className="row team">
						<div className="col-md-12 team-row">
							<img src="images/testimonials/testimonial7.jpg" data-toggle="tooltip" title="Eric Smith - CEO" alt="testimonial" />
							<img src="images/testimonials/testimonial2.jpg" data-toggle="tooltip" title="Rachel Dawes - PM" alt="testimonial" />
							<img src="images/testimonials/testimonial3.jpg" data-toggle="tooltip" title="Henry Hill - Developer" alt="testimonial" />
							<img src="images/testimonials/testimonial4.jpg" data-toggle="tooltip" title="Ana Rich - Designer" alt="testimonial" />
							<img src="images/testimonials/testimonial7.jpg" data-toggle="tooltip" title="Jessica Welch - Designer" alt="testimonial" />
							<img src="images/testimonials/testimonial8.jpg" data-toggle="tooltip" title="Charly - iOS Developer" alt="testimonial" />
						</div>
						<div className="col-md-12 team-row">
							<img src="images/testimonials/testimonial5.jpg" data-toggle="tooltip" title="Karen Stewart - PM" alt="testimonial" />
							<img src="images/testimonials/testimonial4.jpg" data-toggle="tooltip" title="Charly - iOS Developer" alt="testimonial" />
							<img src="images/testimonials/testimonial7.jpg" data-toggle="tooltip" title="Jessica Welch - Designer" alt="testimonial" />
							<img src="images/testimonials/testimonial8.jpg" data-toggle="tooltip" title="John Raynolds - UI/UX" alt="testimonial" />
							<img src="images/testimonials/testimonial3.jpg" data-toggle="tooltip" title="Henry Hill - Developer" alt="testimonial" />
							<img src="images/testimonials/testimonial2.jpg" data-toggle="tooltip" title="Rachel Dawes - PM" alt="testimonial" />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
  }
}

export default About;
import React from 'react';
import {Row, Col} from 'react-bootstrap';



const Footer = ( { content = () => null }) => (
	<div id="footer-white">
		<div className="container">
			<div className="row">
				<div className="col-sm-3 menu">
					<h3>Overview</h3>
					<ul>
	      				<li>
	          				<a href="features.html">Features</a>
	        			</li>
	        			<li>
	        				<a href="services.html">Services</a>
	        			</li>
	        			<li>
	          				<a href="pricing.html">Pricing</a>
	        			</li>
	        			<li>
	          				<a href="support.html">Support</a>
	        			</li>
	        			<li>
	          				<a href="blog.html">Blog</a>
	        			</li>
	        			<li>
	          				<a href="blog.html">Coming soon</a>
	        			</li>
	      			</ul>
				</div>
				<div className="col-sm-3 menu">
					<h3>Menu</h3>
					<ul>
	      				<li>
	          				<a href="features.html">About us</a>
	        			</li>
	        			<li>
	        				<a href="services.html">Contact us</a>
	        			</li>
	        			<li>
	          				<a href="aboutus.html">Jobs</a>
	          				<a href="aboutus.html" className="hiring">
	          					We're hiring!
	          				</a>
	        			</li>
	        			<li>
	          				<a href="support.html">Portfolio</a>
	        			</li>
	        			<li>
	          				<a href="blog.html">Status</a>
	        			</li>
	      			</ul>
				</div>
				<div className="col-sm-2 menu">
					<h3>Social</h3>
					<ul>
	      				<li>
	          				<a href="features.html">Youtube</a>
	        			</li>
	        			<li>
	        				<a href="services.html">Facebook</a>
	        			</li>
	        			<li>
	          				<a href="pricing.html">Twitter</a>
	        			</li>
	      			</ul>
				</div>
				<div className="col-sm-4 newsletter">
					<div className="signup clearfix">
						<p>
							Sign up for the newsletter and we'll inform you of updates, offers and more.
						</p>
						<form>
							<input type="text" name="email" className="form-control" placeholder="Your email address" />
							<input type="submit" value="Sign up" />
						</form>
					</div>
				</div>
			</div>
			<div className="row credits">
				<div className="col-md-12">
					Copyright © 2014. React
				</div>
			</div>
		</div>
	</div>
);



export default Footer;
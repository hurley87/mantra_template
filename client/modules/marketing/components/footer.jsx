import React from 'react';
import {Row, Col} from 'react-bootstrap';



const Footer = ( { content = () => null }) => (
	<div id="footer-white">
		<div className="container">
			<div className="row">
				<div className="col-sm-3 menu">
					<h3>MATH 101</h3>
					<ul>
	      				<li>
	          				<a href="/how_it_works">How it works</a>
	        			</li>
	        			<li>
	        				<a href="/research">Research</a>
	        			</li>
	        			<li>
	          				<a href="/philosophy">Why Pttrns</a>
	        			</li>
	      			</ul>
				</div>
				<div className="col-sm-3 menu">
					<h3>ABOUT US</h3>
					<ul>
	      				<li>
	          				<a href="features.html">Our Mission</a>
	        			</li>
	        			<li>
	        				<a href="services.html">Dr. Hurley</a>
	        			</li>
	        			<li>
	          				<a href="aboutus.html">Jobs</a>
	          				<a href="aboutus.html" className="hiring">
	          					We're hiring!
	          				</a>
	        			</li>
	        			<li>
	          				<a href="/contact">Contact</a>
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
	        			<li>
	          				<a href="pricing.html">Instagram</a> 
	        			</li>
	      			</ul>
				</div>
				<div className="col-sm-4 newsletter">
					<div className="signup clearfix">
						<p>
							Stay up-to-date with the Pttrns newsletter.
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
					Copyright © 2016 Pttrns
				</div>
			</div>
		</div>
	</div>
);



export default Footer;
import React from 'react';
import {Row, Col} from 'react-bootstrap';



const Footer = ( { content = () => null }) => (
   <div id="footer">
		<div className="container">
			<div className="row">
				<div className="col-sm-3 copyright">
					Pi © 2016
				</div>
				<div className="col-sm-6 menu">
					<ul>
	      				<li>
	          				<a href="features.html">About</a>
	        			</li>
	        			<li>
	        				<a href="services.html">Contact</a>
	        			</li>
	        			<li className="active">
	          				<a href="pricing.html">Pricing</a>
	        			</li>
	        			<li>
	          				<a href="support.html">Support</a>
	        			</li>
	        			<li>
	          				<a href="blog.html">Blog</a>
	        			</li>
	      			</ul>
				</div>
				<div className="col-sm-3 social">
					<img src="images/facebook.png" />
					<img src="images/instagram.png" />
					<img src="images/twitter.png" />
				</div>
			</div>
		</div>
	</div>
);



export default Footer;
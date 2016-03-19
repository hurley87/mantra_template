import React from 'react';



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
	          				<a href="features.html">Features</a>
	        			</li>
	        			<li>
	        				<a href="services.html">Services</a>
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
				</div>
			</div>
		</div>
	</div>
);



export default Footer;
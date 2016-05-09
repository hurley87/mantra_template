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
	        				<a href="/research">Research</a>
	        			</li>
	        			<li>
	          				<a href="/philosophy">Pttrns Philosophy</a>
	        			</li>
	      			</ul>
				</div>
				<div className="col-sm-3 menu">
					<h3>ABOUT US</h3>
					<ul>
	      				<li>
	          				<a href="/about">About</a>
	        			</li>
	        			<li>
	          				<a href="/jobs">Jobs</a>
	          				<a href="/jobs" className="hiring">
	          					We're hiring!
	          				</a>
	        			</li>
	        			<li>
	          				<a href="/contact">Contact</a>
	        			</li>
	      			</ul>
				</div>
				<div className="col-sm-3 menu">
					<h3>LEGAL</h3>
					<ul>
	      				<li>
	          				<a href="/terms">Terms of Use</a>
	        			</li>
	        			<li>
	        				<a href="/privacy">Privacy Disclosure</a>
	        			</li>
	      			</ul>
				</div>
				<div className="col-sm-3 menu">
					<h3>Social</h3>
					<ul>
	        			<li>
	        				<a href="https://www.facebook.com/Pttrns-964465116994745/">Facebook</a>
	        			</li>
	        			<li>
	          				<a href="https://twitter.com/pttrns_edu">Twitter</a>
	        			</li>
	        			<li>
	          				<a href="https://www.instagram.com/pttrns_edu/">Instagram</a> 
	        			</li>
	      			</ul>
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
import React from 'react';
import {Row, Col} from 'react-bootstrap';


const Features = ( { content = () => null }) => (
  <div id='features'>
   	<div id="tabs">
		<div className="container">
			<div className="row header">
				<h3>Formats to showcase features</h3>
				<p>Choose your favorite formats for your own sites</p>
			</div>
			<div className="row">
				<div className="col-md-12 tabs-wrapper">
					<ul className="nav nav-tabs">
					  	<li className="active"><a href="#home" data-toggle="tab">Upstart your development</a></li>
					  	<li><a href="#profile" data-toggle="tab">Get ready in half the time</a></li>
					  	<li><a href="#messages" data-toggle="tab">Collaborate with everyone</a></li>
					  	<li><a href="#settings" data-toggle="tab">Get more done faster</a></li>
					</ul>

					<div className="tab-content">
					  	<div className="tab-pane fade in active" id="home">
					  		<div className="col-md-6 info">
					  			<h4>You don't need to have any advanced technical</h4>
					  			<p>
					  				Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
					  			</p>
					  			<p>
					  				You have complete control over the look & feel of your website, we offer the best quality so you take your site up and running in no time.
					  			</p>
					  		</div>
					  		<div className="col-md-6 image">
					  			<img src="images/tabs/pic1.png" className="img-responsive" alt="picture1" />
					  		</div>
					  	</div>
					  	<div className="tab-pane fade" id="profile">
					  		<div className="col-md-6 image">
					  			<img src="images/portfolioitem1.png" className="img-responsive" alt="picture2" />
					  		</div>
					  		<div className="col-md-6 info">
					  			<h4>You don't need to have any advanced technical</h4>
					  			<p>
					  				Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
					  			</p>
					  		</div>					  		
					  	</div>
					  	<div className="tab-pane fade" id="messages">
					  		<div className="col-md-6 info">
					  			<h4>You don't need to have any advanced technical</h4>
					  			<p>
					  				Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
					  			</p>
					  			<p>
					  				You have complete control over the look & feel of your website, we offer the best quality so you take your site up and running in no time.
					  			</p>
					  		</div>
					  		<div className="col-md-6 image">
					  			<img src="images/tabs/pic2.png" className="img-responsive"  alt="picture3" />
					  		</div>
					  	</div>
					  	<div className="tab-pane fade" id="settings">
					  		<div className="col-md-6 image">
					  			<img src="images/tabs/pic1.png" className="img-responsive" alt="picture4" />
					  		</div>
					  		<div className="col-md-6 info">
					  			<h4>You don't need to have any advanced technical</h4>
					  			<p>
					  				Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
					  			</p>
					  		</div>
					  	</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="first-option">
		<div className="container">
			<div className="row header">
				<div className="col-md-12">
					<h2>Need an easy way to customize your site?</h2>
					<p>React is perfect for novice developers and experts alike.</p>
				</div>
			</div>
			<div className="row feature">
				<div className="col-md-6 info">
					<h4>You don't need to have great technical experience to use your product.</h4>
					<p>
						Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
					</p>
				</div>
				<div className="col-md-6 image">
					<img src="images/feature1.png" className="img-responsive" alt="feature1" />
				</div>
			</div>
			<div className="row feature backwards">
				<div className="col-md-6 info">
					<h4>A fully featured well design template that works.</h4>
					<p>
						You have complete control over the look & feel of your website, we offer the best quality so you take your site up and running in no time.
					</p>
				</div>
				<div className="col-md-6 image">
					<img src="images/feature2.png" className="img-responsive" alt="feature2" />
				</div>
			</div>
			<div className="row feature last">
				<div className="col-md-6 info">
					<h4>You don't need to have great technical experience to use your product.</h4>
					<p>
						Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
					</p>
				</div>
				<div className="col-md-6 image">
					<img src="images/feature3.png" className="img-responsive" alt="feature3" />
				</div>
			</div>
		</div>
	</div>

	<div id="second-option">
		<div className="container">
			<div className="row">
				<div className="col-md-4 feature">
					<img src="images/circle-icons/one-color/creditcard.png" alt="credit-card" />
					<strong>Act locally, work globally</strong>
					<p>You can work with international customers right out of the box while you can keep staying in your country.</p>
				</div>
				<div className="col-md-4 feature">
					<img src="images/circle-icons/one-color/dev.png" alt="dev" />
					<strong>Act globally, work as usual</strong>
					<p>With some customization you can make this product apply to your branding guidelines and amaze your customers at the same time.</p>
				</div>
				<div className="col-md-4 feature">
					<img src="images/circle-icons/one-color/globe.png" alt="globe" />
					<strong>Develop once, run everywhere</strong>
					<p>We don't impose any design restrictions, you are free to customize it as you see fit and it's easy to use.</p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4 feature">
					<img src="images/circle-icons/one-color/support.png" alt="support" />
					<strong>Act globally, work as usual</strong>
					<p>We're always happy to offer support if you happen to have any doubts about anything, if you need
						some new stuff contact us.</p>
				</div>
				<div className="col-md-4 feature">
					<img src="images/circle-icons/one-color/mail.png" alt="mail" />
					<strong>Develop once, run everywhere</strong>
					<p>We'll be adding some new stuff to make it even more awesome, if you have any idea please let us know.</p>
				</div>
				<div className="col-md-4 feature">
					<img src="images/circle-icons/one-color/locked.png" alt="locked" />
					<strong>Act locally, work globally</strong>
					<p>This thing will work on any device, it has a very easy to understand documentation and is made with SASS.</p>
				</div>
			</div>
		</div>
	</div>

	<div id="slider">
		<div className="container">
			<div className="row header">
				<h3>Includes all pages that a complete theme should have</h3>
			</div>
			<div className="row">
				<div className="col-md-12 slide-wrapper">
					<div className="slideshow">
						<div className="btn-nav prev"></div>
						<div className="btn-nav next"></div>
						<div className="slide active">
							<img src="images/slider/slide3.png" alt="slide" />
						</div>
						<div className="slide">
							<img src="images/slider/slide4.png" alt="slide" />
						</div>
						<div className="slide">
							<img src="images/slider/slide1.png" alt="slide" />
						</div>
						<div className="slide">
							<img src="images/slider/slide5.png" alt="slide" />
						</div>
						<div className="slide">
							<img src="images/slider/slide2.png" alt="slide" />
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>

	<div id="showcase">
		<div className="container">
			<div className="row header">
				<h3>Showcasing some blog posts</h3>
			</div>
			<div className="row">
				<div className="col-md-12 pics">
					<a className="pic" href="blogpost.html">
						<img src="images/blog1.png" alt="blog1" />
						<div className="bg">
							<p>How to survive in the big city</p>
						</div>
					</a>
					<a className="pic" href="blogpost.html">
						<img src="images/blog2.png" alt="blog2" />
						<div className="bg">
							<p>How to develop scalable Rails apps</p>
						</div>
					</a>
					<a className="pic" href="blogpost.html">
						<img src="images/blog3.png" alt="blog3" />
						<div className="bg">
							<p>Enjoy your life at the beach</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
  </div>
);

export default Features;
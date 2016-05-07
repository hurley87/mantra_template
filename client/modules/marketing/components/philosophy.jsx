import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Philosophy extends React.Component {
  render() {
    return (

	<div id="services">

		<div id="hero">
			<div className="container">
				<div className="row">
					<div className="col-md-6 image">
						<img src="images/services1.png" className="img-responsive animated fadeInUp" alt="services1" />
					</div>
					<div className="col-md-6 info">
						<h3>Here is everything we offer</h3>
						<p>
							You will find a variety of ways to present your services such as grids and lists.
							<br />
							We plan to update this product with more pages and features as we keep on going.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div id="tabs">
			<div className="container">
				<div className="row">
					<div className="col-md-12 hexagons">
						<div className="hexagon active">
							<span className="icon brankic-monitor"></span>
						</div>
						<div className="hexagon">
							<span className="icon brankic-phone"></span>
						</div>
						<div className="hexagon">
							<span className="icon brankic-lamp3"></span>
						</div>
						<div className="hexagon">
							<span className="icon brankic-pictures3"></span>
						</div>
						<div className="hexagon">
							<span className="icon brankic-upload2"></span>
						</div>
						<div className="hexagon">
							<span className="icon brankic-tools"></span>
						</div>
					</div>				
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="sections">
							<div className="section active">
								<h4>Web Development</h4>
								<p>
									Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to describe some features or anything you want - React has a complete solution for you.
								</p>
								<p>
									Chances are, unless I’m a designer, I don’t know what I want. All I know is I want something functional that looks good, is comparable with my competitors, and features constant colour schemes for branding.
								</p>
							</div>
							<div className="section">
								<h4>Frontend development</h4>
								<p>
									I love making the stuff, that’s sort of the core of it. I love creating the stuff. It’s so satisfying to get from the beginning to the end, from a shaky nothing idea to something that’s well formed and the audience really likes. It’s like a drug: You keep trying to do it again and again and again. I’ve learned from experience that if you work harder at it, and apply more energy and time to it, and more consistency, you get a better result. It comes from the work.
									<br />
									This thing will work on any device, it has a very easy to understand documentation and is made with SASS.
								</p>
							</div>
							<div className="section">
								<h4>Responsive web design</h4>
								<p>
									We're always happy to offer support if you happen to have any doubts about anything, if you need some new stuff contact us.
								</p>
								<p>
									You have to roll up your sleeves and be a stonecutter before you can become a sculptor – command of craft always precedes art: apprentice, journeyman, master. <br />
									It doesn’t matter one damn bit whether fashion is art or not. You don’t question whether an incredible chef is an artist or not – his cakes are delicious and that’s all that matters.
								</p>
							</div>
							<div className="section">
								<h4>HTML & CSS Development</h4>
								<p>
									Well you’re in your little room and you’re working on something good but if it’s really good you’re gonna need a bigger room and when you’re in the bigger room you might not know what to do you might have to think of how you got started sitting in your little room.
								</p>
								<p>
									We're always happy to offer support if you happen to have any doubts about anything, if you need some new stuff contact us.
								</p>
							</div>
							<div className="section">
								<h4>Photoshop Mockups</h4>
								<p>
									I want everything we do to be beautiful. I don’t give a damn whether the client understands that that’s worth anything, or that the client thinks it’s worth anything, or whether it is worth anything. It’s worth it to me. It’s the way I want to live my life. I want to make beautiful things, even if nobody cares.
								</p>
								<p>
									We'll be adding some new stuff to make it even more awesome, if you have any idea please let us know.
								</p>
							</div>
							<div className="section">
								<h4>Retina display</h4>
								<p>
									Functionality is so over-valued in design, and we’ve kept design very small in that way. Functionality is the sheer minimum. If your house burns down, what do you take? The cat in the window that you got from your mother, or the chair you have?
								</p>
								<p>
									Simply are looking to sell digital goods or are interested in drop shipping — React has a complete solution in this.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="grid-first">
			<div className="container">
				<div className="row header">
					<h3>Never sold online before? It's fast and easy.</h3>
					<p>
						React is perfect for novice developers and experts alike.
					</p>
				</div>
				<div className="row sections">
					<div className="col-md-4">
						<div className="section">
							<div className="pic">
								<img src="images/services2.png" className="img-responsive" alt="services2" />
							</div>
							<div className="info">
								<strong>Awesome mobile app</strong>
								<p>
									You can work with international customers right out of the box while staying in your country.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="section">
							<div className="pic">
								<img src="images/services4.png" className="img-responsive" alt="services4" />
							</div>
							<div className="info">
								<strong>Awesome mobile app</strong>
								<p>
									You can work with international customers right out of the box while staying in your country.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="section">
							<div className="pic">
								<img src="images/services3.png" className="img-responsive" alt="services3" />
							</div>
							<div className="info">
								<strong>Awesome mobile app</strong>
								<p>
									You can work with international customers right out of the box while staying in your country.
								</p>
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

export default Philosophy;
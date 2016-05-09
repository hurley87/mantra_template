import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Philosophy extends React.Component {
  render() {
    return (

	<div id="portfolio">
		<div id="showcase">
			<div className="container">
				<div className="row header">
					<div className="col-md-12">
						<h3>Pttrns Philosophy</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="project">
							<div className="screen">
								<img src="images/circle-icons/full-color/calculator.png" className="img-responsive" alt="portfolio2" />
							</div>
							<p className="description">
							Today's life is hectic.  Parents face demanding work schedules, children bounce from activity to activity, and the dollar doesn't seem to 
							travel as far as it once did.  Add to this a child struggling in school and it can feel like too much to handle.  After careful research and testing,
							we formed the Pttrns philosophy and designed a step-by-step process to help the modern family.  We'll get to <a href="/how_it_works">how it works</a>, but first we'd like to share our ground-breaking 
							philosophy.
							</p>
							<p className="description">
								Learning math is not easy. Our number system was borrowed from India & the Middle East and, literally, took millenia
								to develop.  Add to the mix the fact that evolution hasn't given us the best long-term memory and you start to realize
								the lofty demands we make on today's math students.
							</p>
							<p className="description">
								Cognitive science and neuroscience are in their infancies and no one is entirely clear how we learn.  That said, we certainly see parallels 
								between the neuronal structures in our minds and deep learning algorithms. The Pttrns strategy is analogous to a deep learning algorithm training
								on a dataset.
							</p>
							<p className="description">
								A Pttrns student will begin by learning strategies to derive new facts from facts he or she already knows.  In other words, students internalize Pttrns strategies 
								and use them to discover non-fluent facts from fluent facts.  At this stage the student will progress to Pttrns Enlightened Testing. 
							</p>
							<div className="divider"></div>
							<div className="visit">
								<a className="button" href="portfolio-item.html">
									Free Sign Up
								</a>
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
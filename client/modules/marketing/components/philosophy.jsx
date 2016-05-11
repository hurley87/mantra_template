import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Philosophy extends React.Component {
  render() {
    return (

		<div id="blogpost">

			<div id="blogpost-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-md-10 post">
							<div className="title">
								Our Philosophy
							</div>
							<div className="author">
								<img src="images/circle-icons/full-color/calculator.png" className="avatar" alt="author" />
								May 15, 2016
							</div>
							<div className="content">
								<p>
									Today's life is hectic.  Parents face demanding work schedules, children bounce from activity to activity, and the dollar doesn't seem to 
								travel as far as it once did.  Add to this a child struggling in school and it can feel like too much to handle.  After careful research and testing,
								we formed the Pttrns philosophy and designed a step-by-step process to help the modern family.  We'll get to <a href="/how_it_works">how it works</a>, but first we'd like to share our ground-breaking 
								philosophy.
								</p>
								<blockquote>
									<p>
										“Genius is patience.”
									</p>
									<p className="quote-author">
										Sir Isaac Newton
									</p>
								</blockquote>
								<p>
									Cognitive science and neuroscience are in their infancies and no one is entirely clear how we learn.  That said, we certainly see parallels 
									between the neuronal structures in our minds and deep learning algorithms. The Pttrns strategy is analogous to a deep learning algorithm training
									on a dataset.
								</p>
								<p>
									A Pttrns student will begin by learning strategies to derive new facts from facts he or she already knows.  In other words, students internalize Pttrns strategies 
									and use them to discover non-fluent facts from fluent facts.  At this stage the student will progress to Pttrns Enlightened Testing. 
								</p>
								<p>
									We have a proven method to get children to fluency with a minimum of effort on your part. You will have to learn our method, but once that’s done, it’s a straightforward matter to teach your child. Ten minutes is a day is all it takes. If you work day-in, day-out for ten minutes a day, we guarantee that your child will become fluent, and probably more quickly than you think.
								</p>
								<p>
									<img src="images/circle-icons/full-color/genius.png" className="img-responsive" alt="slide" />
								</p>		
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
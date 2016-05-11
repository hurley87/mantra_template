import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class About extends React.Component {
  render() {
    return (

		<div id="blogpost">

			<div id="blogpost-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-md-10 post">
							<div className="title">
								The Pttrns Story
							</div>
							<div className="author">
								<img src="images/dr_hurley.jpg" className="avatar" alt="author" />
								By Dr. William Hurley, May 15, 2016
							</div>
							<div className="content">
								<p>
									I teach mathematics at RMC primarily to engineering and science students. Generally, they are not proficient at arithmetic and my colleagues would not disagree. That is not to say they are not bright. They are. And those at the top are exceptional. It’s just that some have an arithmetic deficiency and their corresponding number sense is poor. Some of my students can tell me what 4 × 8 is but they require a calculator to get 40% of 800. 
								</p>
								<p>
									The news from our primary school system is not encouraging. The evidence on the performance of Canadian primary school students on recent international tests suggests that things are not getting better:
									“67% of Grade 3 students met the standard in 2014 compared to 71% in 2010, indicating a four-percentage-point decrease.” Not surprisingly, this performance has been given considerable coverage in the popular media. These reports constituted my introduction to “the math wars,” the on-going debate about how best to teach children mathematics.
								</p>
								<p>
									My focus has been on how children learn the basic arithmetic facts. There is general agreement that children should be “fluent,” that is, when con- fronted with, say, 8 × 7, a child should know that it’s 56 within a short period of time.4 The disagreement lies in how best to get children to fluency.
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
									We have a proven method to get children to fluency with a minimum of effort on your part. You will have to learn our method, but once that’s done, it’s a straightforward matter to teach your child. Ten minutes is a day is all it takes. If you work day-in, day-out for ten minutes a day, we guarantee that your child will become fluent, and probably more quickly than you think.
								</p>
								<p>
									Our program follows the Ontario mathematics curriculum for Grades 1 to 4 closely. However we’ve only selected the particular learning objectives that apply to fluency simply because that’s our sole objective. In some cases, we’ve added learning objectives in order to facilitate fluency.
								</p>

								<p>
									<img src="images/circle-icons/full-color/globe.png" className="img-responsive" alt="slide" />
								</p>
								<p>
									I am a fan of the discovery pedagogy now dominating mathematics ed-ucation in our primary schools. Anything that gets children excited about mathematics is good. But I also think that skill development is important. Students need to be able to do arithmetic and algebraic manipulation.
								</p>
								<p>
									In my experience with the primary school children I’ve taught, motivation is important. Children at this age do not appreciate the importance of becoming fluent. Hence a monitor should consider a series of incentives to encourage effort. Parents are in a good position to come up with effective incentives, teachers less so. But incentives are a must to get the proper effort and focus. One of the reasons for our insistence on short frequent work sessions is that children have difficulty focusing for periods any longer. What we require is the right set of incentives to encourage focus and effort for five minutes a day.
								</p>
								<p>
									I believe that knowing the basics is crucially important to higher level skill development. You can learn fractions and higher level arithmetic without single-digit fluency but it’s more difficult. You can learn algebraic manipulation without single-digit fluency, but it’s more difficult. A well built house needs a good foundation and so does the study of just about any discipline and particulary mathematics. 
								</p>
								<p>
									<img src="images/circle-icons/full-color/pencil.png" className="img-responsive" alt="slide" />
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

export default About;
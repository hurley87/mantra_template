import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Research extends React.Component {
  render() {
    return (
		<div id="blog">
			<div id="posts">
				<div className="container">
					<div className="row">
						<div className="col-md-9">

							<div className="post">
								<div className="title">
									<a href="blogpost.html">Primary School Mathematics: The Case for Enlightened Timed Testing to Achieve Fluency in Single-Digit Arithmetic</a>
								</div>
								<div className="author">
									<img src="images/dr_hurley.jpg" className="avatar" alt="author" />
									Dr. William Hurley, May 2016
								</div>
								<p className="intro">
									Dr. Hurley provides a rationale for a new method of testing, designed to help primary school math students.
								</p>
								<a href="research/The_Case_For_Enlightened_Timed_Testing.pdf" download="The Case for Enlightened Timed Tests" className="continue-reading">Download Research Paper</a>
							</div>

							<div className="post">
								<div className="title">
									<a href="blogpost.html">What to Do About Canada's Declining Math Scores</a>
								</div>
								<div className="author">
									Dr. Anna Stokke, 2015
								</div>
								<p className="intro">
									Dr. Stokke argues that students need a "strong foundation in mathematics to succeed in school and to contribute to 
									society as numerate citizens".  Remarkably, she notes that from 2003 to 2012 every Canadian province saw a decline in 
									math scores, with the exception of Quebec, which saw scores remain constant.
								</p>
								<a href="research/What_To_Do_About_Canada's_Declining_Math_Scores.pdf" download="What To Do About Canada's Declining Math Scores" className="continue-reading">Download Commentary</a>
							</div>

							<div className="post">
								<div className="title">
									<a href="blogpost.html">Basic Skills Versus Conceptual Understanding</a>
								</div>
								<div className="author">
									Dr. Hung-Hsi Wu, 1999
								</div>
								<p className="intro">
									Dr. Wu's paper suggests that a child fluent in arithmetic is in a much better position to do higher levels of mathematics.
									"It has been said that had Einstein been born at the time of the Stone Age, his genius might have enabled
									him to invent basic arithmetic but probably not much else. However, because he was born at the end of the
									19th century—with all the techniques of advanced physics at his disposal—he created the theory of relativity."
"
								</p>
								<a href="research/Basic_Skills_Versus_Conceptual_Understanding.pdf" download="Basic Skills Versus Conceptual Understanding" className="continue-reading">Download Research Paper</a>
							</div>

						</div>
						<div className="col-md-3 sidebar">
							<div className="best-hits">
								<strong>Check out some related websites:</strong>
								<a href="http://www.edu.gov.on.ca/eng/curriculum/elementary/math.html">Ontario Math Curriculum</a>
								<a href="http://www.eqao.com/en/assessments/primary-division">EQAO Testing</a>
								<a href="https://cms.math.ca/Research/researchgroups">Canadian Math Society</a>
								<a href="https://www.rmcc-cmrc.ca/en/mathematics-and-computer-science/wj-hurley-bsc-mba-phd-professor">Dr. Hurley CV</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
  }
}

export default Research;
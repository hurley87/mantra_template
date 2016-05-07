import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Research extends React.Component {
  render() {
    return (

		<div id="gallery">
			<div id="showcase">
				<div className="container">
					<div className="row header">
						<div className="col-md-12">
							<h3>Research</h3>
							<p>
								Research papers listed below.
							</p>
						</div>
					</div>
					<div class="col-md-12 filtering">
					<ul id="filters">
                    </ul>
				</div>
					<div className="row gallery_container">
						<div className="col-md-4 devices interfaces web">
							<a className="pic" href="images/gallery1.png" data-fluidbox>
								<div className="layer">
									<p><span className="brankic-eye"></span> Dr. Hurley</p>
								</div>
								<img src="images/turing.jpg" className="img-responsive" alt="gallery1" />
							</a>
						</div>
						<div className="col-md-4 devices web">
							<a className="pic" href="images/gallery2.png" data-fluidbox>
								<div className="layer">
									<p><span className="brankic-eye"></span> Dr. Milgram</p>
								</div>
								<img src="images/turing.jpg" className="img-responsive" alt="gallery2" />
							</a>
						</div>
						<div className="col-md-4 web interfaces">
							<a className="pic" href="images/gallery3.png" data-fluidbox>
								<div className="layer">
									<p><span className="brankic-eye"></span> Dr. Mighton</p>
								</div>
								<img src="images/turing.jpg" className="img-responsive" alt="gallery3" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
  }
}

export default Research;
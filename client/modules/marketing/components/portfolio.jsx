import React from 'react';
import {Row, Col} from 'react-bootstrap';


const Portfolio = ( { content = () => null }) => (
  <div id='portfolio'>

  <div id="showcase">
    <div className="container">
      <div className="row header">
        <div className="col-md-12">
          <h3>Our Portfolio</h3>
          <p>The best selection of our clients and projects we've worked on.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="project">
            <h3>iOS Video Application</h3>
            <div className="screen">
              <img src="images/portfolio1.png" className="img-responsive" alt="portfolio1" />
            </div>
            <p className="description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
            <div className="divider"></div>
            <div className="visit">
              <a className="button" href="portfolio-item.html">
                Visit Project Website
              </a>
            </div>
          </div>
          <div className="project">
            <h3>Designed with the whole company in mind</h3>
            <div className="screen">
              <img src="images/portfolio2.png" className="img-responsive" alt="portfolio2" />
            </div>
            <p className="description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
            <div className="divider"></div>
            <div className="visit">
              <a className="button" href="portfolio-item.html">
                Visit Project Website
              </a>
            </div>
          </div>
          <div className="project">
            <h3>Complete device setup development</h3>
            <div className="screen">
              <img src="images/portfolio3.png" className="img-responsive" alt="portfolio3" />
            </div>
            <p className="description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
            <div className="divider"></div>
            <div className="visit">
              <a className="button" href="portfolio-item.html">
                Visit Project Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default Portfolio;
import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

const Mobile = ( { content = () => null }) => (
  <div id="mobile">
    <div className="container">
      <div className="row">
        <div className="col-xs-6 hidden-xs">
          <img src="images/ss3.png" className="device img-responsive" alt="mobile" />
        </div>
        <div className="col-sm-6 col-xs-12">
          <div className="info">
            <h3>Coming soon to the Appstore</h3>
            <p>
              You'll be able to work from anywhere and have real-time anayltics in the palm of your hand!
            </p>
            <a className="app-store" href="/register">
              <img src="images/apple.svg" alt="download on app-store" />
            </a>
            <a className="app-store" href="/register">
              <img src="images/google.svg" alt="download on app-store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Mobile;
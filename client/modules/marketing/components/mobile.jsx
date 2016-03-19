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
            <h3>Available in the Appstore</h3>
            <p>
              With some customization you can make this product apply to your branding guidelines and amaze your customers at the same time.
            </p>
            <a className="app-store" href="#">
              <img src="images/app-store.png" alt="download on app-store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Mobile;
import React from 'react';
import {Row, Col} from 'react-bootstrap';


const NotFound = ( { content = () => null }) => (
  <div className='not-found-page'>
    <div id='not-found'>
      <div className="info">
        <h1>404</h1>
        <p>The page you're looking for doesn't exist.</p>

        <p className="go-back">
          Continue to our <a href="/">Home page</a>.
        </p>
      </div>
      <div id="container">
      </div>
    </div>
  </div>
);

export default NotFound;
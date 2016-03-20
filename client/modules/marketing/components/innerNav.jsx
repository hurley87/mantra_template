import React from 'react';

const innerNav = ( { content = () => null }) => (

<div>	
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-item">
          <div className="align-right">
            <div>How it Works</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    </div>
</div>
);

export default innerNav;


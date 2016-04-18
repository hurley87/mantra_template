import React from 'react';

const AddIndex = () => (
  <div className="content-wrapper">
    <div className="sidebar-toggler visible-xs">
      <i className="ion-navicon"></i>
    </div>
    
    <div className="header">
      Addition
    </div>

    <div className="steps">
      <div className="step done">
        <div className="info">
          <span className="number">
            <i className="ion-checkmark-circled"></i>
          </span> 
          Connect your Stripe account or create a new one to start receiving payments 
        </div>

        <a href="#" className="disabled button">
          <span>Connect Stripe</span>
        </a>
      </div>
      <div className="step done">
        <div className="info">
          <span className="number">
            <i className="ion-checkmark-circled"></i>
          </span> 
          Setup your email notification preferences for new payments
        </div>

        <a href="#" className="disabled button">
          <span>Setup notifications</span>
        </a>
      </div>
      <div className="step">
        <div className="info">
          <span className="number">3</span> 
          Invite your teammates to collaborate with you
        </div>

        <a href="#" className="button">
          <span>Invite teammates</span>
        </a>
      </div>
      <div className="step">
        <div className="info">
          <span className="number">4</span> 
          Add some products to sell to your customers
        </div>

        <a href="#" className="button">
          <span>Create products</span>
        </a>
      </div>
      <div className="step">
        <div className="info">
          <span className="number">5</span> 
          Activate your account live into production mode 
        </div>

        <a href="#" className="button">
          <span>Go live!</span>
        </a>
      </div>
    </div>
  </div>
);

export default AddIndex;

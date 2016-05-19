import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Header from '../containers/header.js';
import ContactForm from '../../marketing/containers/Contact.js';

class Help extends React.Component {
  render() {
    return (
      <div className={ this.props.toggle ? 'show-menu' : 'hide-menu' }>
        <Header title='Help' />
        <div id="pricing-alt">
	        <div id="first-option">
	          <div className="row header">
	            <div className="col-md-12">
	              <h3>&nbsp;</h3>
	            </div>
	          </div>
	          <div className='row'>
	          	<div className='col-md-2'>
	          	&nbsp;
	          	</div>
	          	<div className='col-md-6'>
	          		<ContactForm />
	          	</div>
	          	<div className='col-md-2'>
	          		<p><strong>Email:</strong> hurley_w@rmc.ca</p>
	          		<p><strong>Phone:</strong> 647-284-5023</p>
	          	</div>
	          </div>
	        </div>
        </div>
      </div>
    )
  }
}

export default Help;
import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput, RadioGroup, Radio } from 'react-bootstrap-validation';

class Billing extends React.Component {
  render() {
    return (
      <div id='panel' className='billing'>

    <div id="billing-form">
		<div id="wrapper">
        	<h3>Billing</h3>
        		<div id="content">

					<div className="content-wrapper">
						<div className="billing">
							
							<div className="secure clearfix">
								<span className="lock pull-left">
									<i className="fa fa-lock"></i>
									Secure Billing Form
								</span>
						
								<div className="accepted-cards pull-right">
									<img src="images/credit_card_types.gif" />
								</div>
							</div>

							
							<form id="billing" className="form-horizontal" method="post" action="#" role="form">
							  	<div className="form-group">
								    <label className="col-sm-3 control-label">Name on Card</label>
								    <div className="col-sm-9">
								      <Input type="text" className="form-control" placeholder="Your full name" name="customer[first_name]" ref="name" />
								    </div>
							  	</div>
							  	<div className="address">
							  		<div className="form-group">
									    <label className="col-sm-3 control-label">Address</label>
									    <div className="col-sm-9">
									      	<Input type="text" className="form-control" placeholder="Address" name="customer[address]" ref="street" />
									    </div>
									</div>
									<div className="form-group">
									    <div className="col-sm-5 col-sm-offset-3">
									      	<Input type="text" className="form-control mobile-margin-bottom" placeholder="City" name="customer[city]" ref="city" />
									    </div>
									    <div className="col-sm-4">
									      	<Input type="text" className="form-control" placeholder="Zip/Postal" name="customer[state]" ref="postal" />
									    </div>
								  	</div>
								  	<div className="form-group">
									    <div className="col-sm-5 col-sm-offset-3">
									      	<Input type="text" className="form-control mobile-margin-bottom" placeholder="Country" name="customer[city]" ref="country" />
									    </div>
									    <div className="col-sm-4">
									      	<Input type="text" className="form-control" placeholder="State" name="customer[state]" ref="province" />
									    </div>
								  	</div>
							  	</div>
							  	<div className="form-group">
								    <label className="col-sm-3 control-label">Card Number</label>
								    <div className="col-sm-9">
								      <Input type="text" className="form-control" placeholder="••••  ••••  ••••  ••••" name="customer[first_name]" ref="card" />
								    </div>
							  	</div>
							  	<div className="form-group">
							  		<label className="col-sm-3 control-label">Expiration</label>
								    <div className="col-sm-5">
								      	<Input type="text" className="form-control mobile-margin-bottom" placeholder="YYYY" name="customer[city]" ref="year" />
								    </div>
								    <div className="col-sm-4">
								      	<Input type="text" className="form-control" placeholder="MM" name="customer[state]" ref="month"  />
								    </div>
							  	</div>
							  	<div className="form-group">
							  		<label className="col-sm-3 control-label">CVC</label>
								    <div className="col-sm-3">
								      	<Input type="text" className="form-control mobile-margin-bottom" placeholder="CVC" name="customer[city]" ref="cvc" />
								    </div>
							  	</div>


							  	<div className="action clearfix">
									<a href="#" className="btn btn-success" onClick={this.getStripeToken.bind(this)}>
										Make payment
									</a>
								</div>
							</form>
									
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

	getStripeToken(event){
		event.preventDefault();
		Stripe.setPublishableKey(Meteor.settings.public.stripe.testPublishableKey);
		const {getToken} = this.props;
		const {updatePassword} = this.props;
  		const {name, street, city, postal, country, province, card, month, year, cvc} = this.refs;
  		getToken(card.getValue(), cvc.getValue(), month.getValue(), year.getValue());
	}

}

export default Billing;
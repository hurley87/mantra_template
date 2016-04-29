import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

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
						    		
						    		<label className="col-sm-3 control-label">
						    			Name on Card
						    		</label>
						    		
						    		<div className="col-sm-9">
						      			<input type="text" className="form-control" placeholder="Your full name" name="customer[first_name]" />
						    		</div>
					  			</div>
					  	
					  			<div className="address">
					  				<div className="form-group">
							    		<label className="col-sm-3 control-label">
							    		Address
							    		</label>
							    	<div className="col-sm-9">
							      		<input type="text" className="form-control" placeholder="Address" name="customer[address]" />
							    	</div>
								</div>
							
								<div className="form-group">
							    	<div className="col-sm-5 col-sm-offset-3">
							      		<input type="text" className="form-control mobile-margin-bottom" placeholder="City" name="customer[city]" />
							    	</div>
							    
							    	<div className="col-sm-4">
							      		<input type="text" className="form-control" placeholder="Zip/Postal" name="customer[state]" />
							    	</div>
						  		</div>
						  	
						  		<div className="form-group">
							    	<div className="col-sm-5 col-sm-offset-3">
							      		<input type="text" className="form-control mobile-margin-bottom" placeholder="Country" name="customer[city]" />
							    	</div>
							    	
							    	<div className="col-sm-4">
							      		<input type="text" className="form-control" placeholder="State" name="customer[state]" />
							    	</div>
						  		</div>
					  		</div>
					  	
					  		<div className="form-group">
						    	<label className="col-sm-3 control-label">
						    		Card Number
						    	</label>
						    
						    	<div className="col-sm-9">
						      		<input type="text" className="form-control" placeholder="••••  ••••  ••••  ••••" name="customer[first_name]" />
						    	</div>
					  		</div>
					  	
					  		<div className="form-group">
					  			<label className="col-sm-3 control-label">
					  				Expiration & CVC
					  			</label>
						    	
						    	<div className="col-sm-5">
						      		<input type="text" className="form-control mobile-margin-bottom" placeholder="MM/YYY" name="customer[city]" />
						    	</div>
						    
						    	<div className="col-sm-4">
						      		<input type="text" className="form-control" placeholder="CVC" name="customer[state]" />
						    	</div>
					  		</div>
					  	
							<div className="action clearfix">
								<a href="#" className="btn btn-success">
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
}


export default Billing;
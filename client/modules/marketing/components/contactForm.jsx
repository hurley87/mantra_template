import React from 'react';
import { Row, Col, Input, Grid, ButtonInput } from 'react-bootstrap';
import { Form, ValidatedInput, RadioGroup, Radio } from 'react-bootstrap-validation';

class ContactForm extends React.Component {
  render() {
    return (
		<div>			 
			 <Form
            // Supply callbacks to both valid and invalid 
            // submit attempts 
            onValidSubmit={this._handleValidSubmit.bind(this)}
            onInvalidSubmit={this._handleInvalidSubmit.bind(this)}>

            <ValidatedInput
                type='text'
                label='Your Name'
                name='name'
                ref="name"
                placeholder='Name'
                validate='required,isLength:3:30'
                errorHelp={{
                    required: 'Please enter a username',
                    isLength: 'Name must be at least 3 characters'
                }}
            />

            <ValidatedInput
                type='text'
                label='Email'
                name='email'
                placeholder='Email'
                validate='required,isEmail'
                errorHelp={{
                    required: 'Please enter your email',
                    isEmail: 'Email is invalid'
                }}
            />

            <ValidatedInput
                type='number'
                label='Phone'
                name='phone'
                placeholder='Phone'
                errorHelp={{
                    required: 'Please enter your phone number',
                    isPhone: 'Phone number is invalid'
                }}
            />

            <ValidatedInput
                type='textarea'
                label='Message'
                name='message'
                placeholder='Message'
                rows = '6'
                errorHelp={{
                    required: 'Please enter a message',
                    isMessage: 'Message is invalid'
                }}
            />

            <ButtonInput
              type='submit'
              bsSize='large'
              bsStyle='primary'
              value='Update'
              className='button text-center'
            />
        </Form>
	</div>
    )
  }

   _handleValidSubmit(values) {
   	 const {name, email, phone, message} = this.refs;
     const {sendMsg} = this.props;
   	 sendMsg(values.name, values.email, values.phone, values.message);

  }
  _handleInvalidSubmit(errors, values) {
    
  }
}

export default ContactForm;
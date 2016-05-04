import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput, RadioGroup, Radio } from 'react-bootstrap-validation';

class Notifications extends React.Component {
  render() {
    return (
      <div id='panel' className='password'>
        <p className="intro">
          Change your password.
        </p>
        <Form
            // Supply callbacks to both valid and invalid 
            // submit attempts 
            onValidSubmit={this._handleValidSubmit.bind(this)}
            onInvalidSubmit={this._handleInvalidSubmit.bind(this)}>

            <ValidatedInput
                type='password'
                name='old_password'
                label='Old Password'
                validate='required,isLength:6:30'
                errorHelp={{
                    required: 'Please specify a password',
                    isLength: 'Password must be at least 6 characters'
                }}
            />

            <ValidatedInput
                type='password'
                name='new_password'
                label='New Password'
            />

            <ButtonInput
              type='submit'
              bsSize='large'
              bsStyle='primary'
              value='Update Password'
              className='button text-center'
            />
        </Form>
      </div>
    )
  }
  _handleValidSubmit(values) {
    const {updatePassword} = this.props;
    const {old_password, new_password} = this.refs;
    updatePassword(values.old_password, values.new_password);
  }
  _handleInvalidSubmit(errors, values) {
    console.log(errors)
  }
}

export default Notifications;
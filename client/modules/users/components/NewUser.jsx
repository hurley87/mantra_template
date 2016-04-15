import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput, RadioGroup, Radio } from 'react-bootstrap-validation';


class NewUser extends React.Component {
  render () {
    return (
      <div id='signup'>
        <Grid>
          <Row className='header'>
            <Col md={12}>
              <h3 className="logo">
                <a href="/">Pi Academy</a>
              </h3>
              <h4>Set up your new account today.</h4>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="wrapper clearfix">
                <div className="formy">
                  <div className="row">
                    <div className="col-md-12">
                      <Form
                          // Supply callbacks to both valid and invalid 
                          // submit attempts 
                          onValidSubmit={this._handleValidSubmit.bind(this)}
                          onInvalidSubmit={this._handleInvalidSubmit.bind(this)}>
           
                          <ValidatedInput
                              type='text'
                              label='Email'
                              name='email'
                              validate='required,isEmail'
                              errorHelp={{
                                  required: 'Please enter your email',
                                  isEmail: 'Email is invalid'
                              }}
                          />
           
                          <ValidatedInput
                              type='password'
                              name='password'
                              label='Password'
                              validate='required,isLength:6:60'
                              errorHelp={{
                                  required: 'Please specify a password',
                                  isLength: 'Password must be at least 6 characters'
                              }}
                          />
           
                          <ValidatedInput
                              type='password'
                              name='password-confirm'
                              label='Confirm Password'
                              validate={(val, context) => val === context.password}
                              errorHelp='Passwords do not match'
                          />
           
                          <RadioGroup name='radio'
                                      label='Which one is better?'
                                      labelClassName='col-xs-12'
                                      wrapperClassName='row'>
                              <Radio value='student' label='student' checked='checked'/>
                              <Radio value='teacher' label='teacher' />
                              <Radio value='parent' label='parent' />
                          </RadioGroup>
           
                          <ValidatedInput
                              type='checkbox'
                              name='agree'
                              label='I agree to the terms and conditions'
                              validate='isChecked'
                              className='terms'
                          />
           
                          <ButtonInput
                              type='submit'
                              bsSize='large'
                              bsStyle='primary'
                              value='Register'
                              className='button'
                          />
                      </Form>
                    </div>
                  </div>            
                </div>
              </div>
              <div className="already-account">
                Already have an account? <a href="/login">Sign in here</a>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
  createUser(e) {
    e.preventDefault();
    const {create} = this.props;
    const {name, email, password, profession} = this.refs;
    create(name.getValue(), email.getValue(), password.getValue(), profession.getValue(), '');
  }
  _handleValidSubmit(values) {
      // Values is an object containing all values 
      // from the inputs 
      console.log(values)
  }

  _handleInvalidSubmit(errors, values) {
      // Errors is an array containing input names 
      // that failed to validate 
      console.log(errors, values)
  }
}

export default NewUser;
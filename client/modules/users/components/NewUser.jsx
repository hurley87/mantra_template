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
              <h4>Create Your Account</h4>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="wrapper clearfix">
                <div className="formy">
                  <div className="row">
                    <div className="col-md-12">
                      { this.props.error ? <p className='alert alert-danger'>{this.props.error}</p> : null }
                      <Form
                          // Supply callbacks to both valid and invalid 
                          // submit attempts 
                          onValidSubmit={this._handleValidSubmit.bind(this)}
                          onInvalidSubmit={this._handleInvalidSubmit.bind(this)}>

                          <RadioGroup name='type'
                                      validate='required'
                                      label='Student, teacher, or parent?'
                                      errorHelp={{
                                          required: 'Please specify if you are a parent, teacher or student.'
                                      }}
                                      labelClassName=''
                                      wrapperClassName='userType'>
                              <Radio value='student' label='student'/>
                              <Radio value='teacher' label='teacher' />
                              <Radio value='parent' label='parent' />
                          </RadioGroup>

                          <ValidatedInput
                              type='text'
                              label='Full Name'
                              name='name'
                              validate='required,isLength:4:30'
                              errorHelp={{
                                  required: 'Please enter a username',
                                  isLength: 'Username must be at least 4 characters'
                              }}
                          />
           
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
                              validate='required,isLength:6:30'
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
           
                          <div className="checkbox">
                            <label>
                                <Input type="checkbox" defaultChecked='checked' /> You have read & agree to the <a href="#">Terms of service</a>.
                            </label>
                          </div>
           
                          <ButtonInput
                            type='submit'
                            bsSize='large'
                            bsStyle='primary'
                            value='Register'
                            className='button text-center'
                          />
                      </Form>
                    </div>
                  </div>            
                </div>
              </div>
              <div className="already-account">
                Already have an account? <a href="/login">Login here</a>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
  
  _handleValidSubmit(values) {
    this.props.create(values.name, values.email, values.password, values.type, '' )
  }
  _handleInvalidSubmit(errors, values) {
    console.log(errors)
  }
}

export default NewUser;
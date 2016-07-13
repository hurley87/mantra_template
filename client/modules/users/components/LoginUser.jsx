import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput } from 'react-bootstrap-validation';


class LoginUser extends React.Component {
  render () {
    return (
      <div id='signup'>
        <Grid>
          <Row className='header'>
            <Col md={12}>
              <h4>Login</h4>
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
           
                          <ButtonInput
                            type='submit'
                            bsSize='large'
                            bsStyle='primary'
                            value='Login'
                            className='button text-center'
                          />
                      </Form>
                      <div className="checkbox">
                        <a href="/forgot">Forgot your password?</a>
                      </div>
                    </div>
                  </div>            
                </div>
              </div>
              <div className="already-account">
                Need an account? <a href="/register">Signup here</a>.
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
  
  _handleValidSubmit(values) {
    this.props.login(values.email, values.password)
  }

  _handleInvalidSubmit(errors, values) {
    console.log(errors)
  }
}

export default LoginUser;
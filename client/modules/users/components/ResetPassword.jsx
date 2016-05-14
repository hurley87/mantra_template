import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput } from 'react-bootstrap-validation';


class ResetPassword extends React.Component {
  render () {
    return (
      <div id='signup'>
        <Grid>
          <Row className='header'>
            <Col md={12}>
              <h4>Reset Your Password</h4>
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
                              name='password'
                              label='New Password'
                              validate='required,isLength:6:30'
                              errorHelp={{
                                  required: 'Please specify a password',
                                  isLength: 'Password must be at least 6 characters'
                              }}
                          />
           
                          <ValidatedInput
                              type='password'
                              name='password-confirm'
                              label='Confirm New Password'
                              validate={(val, context) => val === context.password}
                              errorHelp='Passwords do not match'
                          />
           
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
                Already have an account? <a href="/login">Sign in here</a>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

  _handleValidSubmit(values) {
    const reset_token = Session.get('resetPasswordToken');
    Accounts.resetPassword(reset_token, values.password, function(err){
      if(err) {
        console.log(err)
      } else {
        FlowRouter.go('/login');
      }
    });
  }

  _handleInvalidSubmit(errors, values) {
    console.log(errors)
  }

}

 
Accounts.onResetPasswordLink(function(token, done) {
  FlowRouter.go('/reset');
  Session.set('resetPasswordToken', token);
})


export default ResetPassword;
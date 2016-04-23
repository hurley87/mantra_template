import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';


class ResetPassword extends React.Component {
  render () {
    return (
      <div id='signup'>
        <Grid>
          <Row className='header'>
            <Col md={12}>
              <h3 className="logo">
                <a href="/">Pttrns</a>
              </h3>
              <h4>Reset Password</h4>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="wrapper clearfix">
                <div className="formy">
                  <div className="row">
                    <div className="col-md-12">
                      {this.props.error ? <p style={{color: 'red'}}>{this.props.error}</p> : null}
                      <form role="form">
             
                          <div className="form-group">
                            <label htmlFor="email">New Password</label>
                            <Input ref="new_password" type="email" className="form-control" id="email" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="password">Repeat Password</label>
                            <Input ref="repeat_password" type="password" className="form-control" id="password" />
                          </div>
                          <br/>
                          <div className="submit">
                            <ButtonInput className='button' onClick={this.resetPass.bind(this)} type="submit" value="Reset Password"/>
                          </div>
                      </form>
                    </div>
                  </div>            
                </div>
              </div>
              <div className="already-account">
                Copyright Pttrns
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

  resetPass(event){
  event.preventDefault();
  const reset_token = Session.get('resetPasswordToken')
  const {repeat_password} = this.refs;
  Accounts.resetPassword(reset_token, repeat_password.getValue(), function(){
    FlowRouter.go('/login');
  });    
  }

}
 
  Accounts.onResetPasswordLink(function(token, done) {
    FlowRouter.go('/reset');
    Session.set('resetPasswordToken', token);
  })






export default ResetPassword;
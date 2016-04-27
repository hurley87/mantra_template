import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';


class LoginUser extends React.Component {
  render () {
    return (
      <div id='signup'>
        <Grid>
          <div className='header'>
            <Col md={12}>
              <h3 className="logo">
                <a href="/">Pttrns</a>
              </h3>
              <h4>Continue learning</h4>
            </Col>
          </div>
          <Row>
            <Col md={12}>
              <div className="wrapper clearfix">
                <div className="formy">
                  <div className="row">
                    <div className="col-md-12">
                      {this.props.error ? <p style={{color: 'red'}}>{this.props.error}</p> : null}
                      <form role="form">
             
                          <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <Input ref="email" type="email" className="form-control" id="email" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input ref="password" type="password" className="form-control" id="password" />
                          </div>
                          <br/>
                          <div className="submit">
                            <ButtonInput className='button' onClick={this.loginUser.bind(this)} type="submit" value="Login"/>
                          </div>
                          <div className="submit">
                            <ButtonInput className='button' onClick={this.forgotPassword.bind(this)} type="submit" value="Forgot Password"/>
                          </div>
                      
                      </form>
                    </div>
                  </div>            
                </div>
              </div>
              <div className="already-account">
                Don't have an account? <a href="/register">Sign up</a>
              </div>
              <div className="already-account">
                Forgot your password? <a href="/forgot">Reset password</a>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
  loginUser(e) {
    e.preventDefault();
    const {login} = this.props;
    const {email, password} = this.refs;
    login(email.getValue(), password.getValue());
    email.getInputDOMNode().value = '';
    password.getInputDOMNode().value = '';
  }

  forgotPassword(event){
    event.preventDefault();
    const {forgot} = this.props;
    const {email} = this.refs;
    forgot(email.getValue());
  }
}

export default LoginUser;
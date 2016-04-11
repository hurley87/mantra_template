import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';


class LoginUser extends React.Component {
  render () {
    return (
      <div id='signup'>
        <Grid>
          <Row className='header'>
            <Col md={12}>
              <h3 className="logo">
                <a href="/">Pi Academy</a>
              </h3>
              <h4>Continue learning</h4>
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
                      
                      </form>
                    </div>
                  </div>            
                </div>
              </div>
              <div className="already-account">
                Copyright Pi Academy
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
}

export default LoginUser;
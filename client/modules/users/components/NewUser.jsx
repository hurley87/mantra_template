import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';


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
                          <div className="checkbox">
                            <label>
                                <Input type="checkbox" /> You have read & agree to the 
                                <a href="#">Terms of service</a>.
                            </label>
                          </div>
                          <br/>
                          <div className="submit">
                            <ButtonInput className='button' onClick={this.createUser.bind(this)} type="submit" value="Create my account"/>
                          </div>

                      </form>
                    </div>
                  </div>            
                </div>
              </div>
              <div className="already-account">
                Already have an account?
                <a href="signin.html" data-toggle="popover" data-placement="top" data-content="Go to sign in!" data-trigger="manual">Sign in here</a>
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
    const {createProfile} = this.props;
    const {email, password} = this.refs;
    create(email.getValue(), password.getValue());
    createProfile("default", "default", "default", "default");
  }
}

export default NewUser;
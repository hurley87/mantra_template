import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput, RadioGroup, Radio } from 'react-bootstrap-validation';


class Forgot extends React.Component {
  render () {
    return (
      <div id='signup'>
        <Grid>
          <Row className='header'>
            <Col md={12}>
              <h4>Forgot your password?</h4>
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
                      
                          <ButtonInput
                            type='submit'
                            bsSize='large'
                            bsStyle='primary'
                            value='Send Email'
                            className='button text-center'
                          />
                      </Form>
                    </div>
                  </div>            
                </div>
              </div>
              <div className="already-account">
                Have an account? <a href="/login">Login here</a>.
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
  
  _handleValidSubmit(values) {
    this.props.forgot(values.email)
  }
  _handleInvalidSubmit(errors, values) {
    console.log(errors)
  }
}

export default Forgot;
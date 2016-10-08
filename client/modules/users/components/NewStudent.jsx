import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput, RadioGroup, Radio } from 'react-bootstrap-validation';


class NewStudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student: false
    }
  }
  render () {
    return (
      <div>
        <Grid>
          <Row className='header'>
            <Col md={12}>
              <h4>Create a Student</h4>
              <p>All you need is their username and password.</p>
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
                      
                          onValidSubmit={this._handleValidSubmit.bind(this)}
                          onInvalidSubmit={this._handleInvalidSubmit.bind(this)}>

                          <ValidatedInput
                              type='text'
                              label="Choose a nickname for the student"
                              name='username'
                              validate='required,isLength:4:30'
                              errorHelp={{
                                  required: 'Please enter a username',
                                  isLength: 'Username must be at least 4 characters'
                              }}
                          />

                          <ValidatedInput
                              type='text'
                              label="Reward"
                              name='reward'
                              validate='required,isLength:4:30'
                              errorHelp={{
                                  required: 'Please enter a reward',
                                  isLength: 'Reward must be at least 4 characters'
                              }}
                          />

                          <ValidatedInput
                              type='text'
                              label='Email'
                              name='email'
                              validate='isEmail'
                              errorHelp={{
                                  isEmail: 'Please enter your email'
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
                              validate={(val, context) => 
                                val === context.password
                              }
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
                Already have an account? <a href="/login">Login here</a>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
  _handleValidSubmit(values) {
    this.props.createStudent(values.username, values.email, values.password, values.reward)
  }
  _handleInvalidSubmit(errors, values) {
    console.log(errors)
  }
}

export default NewStudent;
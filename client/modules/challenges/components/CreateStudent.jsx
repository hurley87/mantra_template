import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput, RadioGroup, Radio } from 'react-bootstrap-validation';

class CreateStudent extends React.Component {
  render () {
  	const parentId = Meteor.userId();
    return (
      <div>
        <Grid>
          <Row className='header'>
            <Col md={4} mdOffset={4}>
              <h2>Create a Student</h2>
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={4} mdOffset={4}>
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
                              label='Username'
                              name='username'
                              validate='required,isLength:4:30'
                              errorHelp={{
                                  required: 'Please enter a username',
                                  isLength: 'Username must be at least 4 characters'
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
                              type='hidden'
                              name='parentId'
                              value={parentId}
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
                            value='Create'
                            className='button text-center'
                          />
                      </Form>
                      <div>
                        <a href='/challenges'>Back</a> 
                      </div>
                    </div>
                  </div>            
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
  _handleValidSubmit(values) {
    this.props.createStudent(values);
  }
  _handleInvalidSubmit(errors, values) {
    console.log(errors)
  }
}

export default CreateStudent;
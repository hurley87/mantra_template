import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput } from 'react-bootstrap-validation';


class UpdateEmail extends React.Component {
  render () {
    return (
      <div>
        <Grid>
          <Row className='header'>
            <Col md={4} mdOffset={4}>
              <h2>Update your Email</h2>
              <p>Use this email to send yourself challenges.</p>
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={4} mdOffset={4}>
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
                    value='Update'
                    className='button text-center'
                  />
              </Form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
  
  _handleValidSubmit(values) {
    this.props.updateEmail(values.email)
  }

  _handleInvalidSubmit(errors, values) {
    console.log(errors)
  }
}

export default UpdateEmail;
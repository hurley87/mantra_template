import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput, RadioGroup, Radio } from 'react-bootstrap-validation';

class NewChallenge extends React.Component { 
  render () {
    const students = this.props.students;
    return (
      <div>
        <Grid>
          <Row className='header'>
            <Col  md={4} mdOffset={4}>
              <a href={`/students/${this.props.studentId}`}>Back</a>
              <br />
              <h2>Create a Challenge</h2>
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
                              type='number'
                              label='How long (in seconds) will the challenge last?'
                              name='time'
                              validate={(val, context) => 
                                val > 10
                              }
                              errorHelp='Time must be greater then 10 seconds.'
                          />    

                           <ValidatedInput
                              type='number'
                              label='How many correct answers are required to win the challenge?'
                              name='right'
                              validate='required'
                              errorHelp={{
                                  required: 'Please choose a number'
                              }}
                          />                                                

                          <ValidatedInput
                              type='number'
                              label='Smallest number shown?'
                              name='min'
                              validate='required'
                              errorHelp={{
                                  required: 'Please choose a number'
                              }}
                          />

                          <ValidatedInput
                              type='number'
                              label='Largest number shown?'
                              name='max'
                              validate={(val, context) => 
                                val > parseInt(context.min)
                              }
                              errorHelp='Please choose a number greater then your smallest number'
                          />

              						<RadioGroup name='operator'
              						            value='+'
              						            label='Choose an operator'>
              						    <Radio value='+' label='Addition' />
              						    <Radio value='-' label='Subtraction' />
              						    <Radio value='x' label='Multiplication' />
              						    <Radio value='\' label='Division' />
              						</RadioGroup>

                          <ValidatedInput
                              type='textarea'
                              label='Reward'
                              name='reward'
                              validate='required,isLength:4:30'
                              errorHelp={{
                                  required: 'Please enter a reward',
                                  isLength: 'Reward must be at least 4 characters and max 30 characters.'
                              }}
                          />
           
                          <ButtonInput
                            type='submit'
                            bsSize='large'
                            bsStyle='primary'
                            value='Create'
                            className='button text-center'
                          />
                      </Form>
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
    this.props.create(values, this.props.studentId);
  }
  _handleInvalidSubmit(errors, values) {
    console.log(errors)
  }
}

export default NewChallenge;
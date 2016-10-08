import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput, RadioGroup, Radio } from 'react-bootstrap-validation';

const EditChallenge = React.createClass({
  getInitialState() {
  	const challenge = this.props.challenge.challenge;
  	const challengeId = this.props.challenge._id;
  	return {
  		time: challenge.time,
  		right: challenge.right,
  		wrong: challenge.wrong,
  		min: challenge.min,
  		max: challenge.max,
  		reward: challenge.reward
  	}
  },

  updateTime(val) {
    this.setState({
      time: val.target.value
    });
  },

  updateRight(val) {
    this.setState({
      right: val.target.value
    });
  },

  updateWrong(val) {
    this.setState({
      wrong: val.target.value
    });
  },

  updateMin(val) {
    this.setState({
      min: val.target.value
    });
  },

  updateMax(val) {
    this.setState({
      max: val.target.value
    });
  },

  updateReward(val) {
    this.setState({
      reward: val.target.value
    });
  },

  render () {
  	const challenge = this.props.challenge.challenge;
  	const challengeId = this.props.challenge._id;
  	console.log(challengeId)
    return (
      <div>
        <Grid>
          <Row className='header'>
            <Col md={12}>
              <h4>Edit this Challenge</h4>
              <p><a href="/challenges">back</a></p>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <div className="wrapper clearfix">
                <div className="formy">
                  <div className="row">
                    <div className="col-md-12">
                      { this.props.error ? <p className='alert alert-danger'>{this.props.error}</p> : null }
                      <Form

                          onValidSubmit={this._handleValidSubmit}
                          onInvalidSubmit={this._handleInvalidSubmit}>

                           <ValidatedInput
                              type='number'
                              label='How long (in seconds) will the challenge last?'
                              name='time'
                              value={this.state.time}
                              onChange={(val) => this.updateTime(val)}
                              validate={(val, context) => 
                                val > 10
                              }
                              errorHelp='Time must be greater then 10 seconds.'
                          />    

                           <ValidatedInput
                              type='number'
                              label='How many correct answers are required to win the challenge?'
                              name='right'
                              value={this.state.right}
                              onChange={(val) => this.updateRight(val)}
                              validate='required'
                              errorHelp={{
                                  required: 'Please choose a number'
                              }}
                          />                                               

                          <ValidatedInput
                              type='number'
                              label='Smallest number shown?'
                              name='min'
                              value={this.state.min}
                              validate='required'
                              errorHelp={{
                                  required: 'Please choose a number'
                              }}
                              onChange={(val) => this.updateMin(val)}
                          />

                          <ValidatedInput
                              type='hidden'
                              name='challengeId'
                              value={challengeId}
                          />

                          <ValidatedInput
                              type='number'
                              label='Largest number shown?'
                              name='max'
                              value={this.state.max}
                              onChange={(val) => this.updateMax(val)}
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
                              value={this.state.reward}
                              onChange={(val) => this.updateReward(val)}
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
                            value='Update'
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
  },
  _handleValidSubmit(values) {
    this.props.edit(values);
  },
  _handleInvalidSubmit(errors, values) {
    console.log(errors)
  }
})

export default EditChallenge;
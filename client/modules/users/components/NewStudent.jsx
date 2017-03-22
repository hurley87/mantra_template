import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput, RadioGroup, Radio } from 'react-bootstrap-validation';


class NewStudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student: false,
      step: 'account',
      instructions: "Get Started"
    }
  }
  chooseUsername() {
    const username = this.state.username;

    if(username.length < 3) {
      this.setState({ instructions: 'Please choose a username that has more then 3 characters.'})
    } else {
      this.props.clearErrors();
      this.setState({
        instructions: "Create your account. We will send results to your email.",
        step: 'account'
      })
    }
  }
  chooseReward() {
    const reward = this.state.reward;

    if(reward.length <= 1) {
      this.setState({ instructions: 'Please choose a reward that has more then 4 characters.'})
    } else {
      this.setState({
        instructions: "Create an account with your child's username and your email.",
        step: 'account'
      })
    }
  }
  updateUsername(val) {
    this.setState({
      username: val.target.value
    });
  }
  updateReward(val) {
    this.setState({
      reward: val.target.value
    });
  }
  username() {
    return (
        <div>
          <ValidatedInput
              type='text'
              label="Child's Username"
              name='username'
              validate='required,isLength:3:30'
              value={this.state.username}
              onChange={(val) => this.updateUsername(val)}
              errorHelp={{
                  required: 'Please choose a username',
                  isLength: 'Username must be at least 4 characters'
              }}
          />
          <span onClick={this.chooseUsername.bind(this)} className='button text-center'>Next</span>
        </div>
    )
  }
  reward() {
    return (
      <div>
        <ValidatedInput
            type='text'
            label="Reward"
            name='reward'
            value={this.state.reward}
            onChange={(val) => this.updateReward(val)}
            validate='required,isLength:2:30'
            errorHelp={{
                required: 'Please enter a reward',
                isLength: 'Reward must be at least 4 characters'
            }}
        />
        <span onClick={this.chooseReward.bind(this)} className='button'>Next</span>
      </div>
    )
  }
  account() {
    return (
        <div>
          <ValidatedInput
              type='text'
              label="Child's Username"
              name='username'
              validate='required,isLength:3:30'
              value={this.state.username}
              onChange={(val) => this.updateUsername(val)}
              errorHelp={{
                  required: 'Please choose a username',
                  isLength: 'Username must be at least 4 characters'
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

        <ButtonInput
          type='submit'
          bsSize='large'
          bsStyle='primary'
          value='Get Started'
          className='button text-center'
        />
        </div>
    )
  }
  render () {
    return (
      <div>
        <Grid>
          <Row className='header'>
            <Col md={4} mdOffset={4}>
              <h2>{this.state.instructions} <br /> <small>This is another instruction.</small></h2>
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

                          { this.state.step == 'username' ? this.username() : null }

                          { this.state.step == 'reward' ? this.reward() : null }

                          { this.state.step == 'account' ? this.account() : null }

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
    this.props.createStudent(this.state.username, values.email, values.password, 'reward')
  }
  _handleInvalidSubmit(errors, values) {
    console.log(errors)
  }
}

export default NewStudent;
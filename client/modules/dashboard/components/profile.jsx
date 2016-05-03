import React from 'react';
import { Row, Col, Input, Grid, ButtonInput } from 'react-bootstrap';
import { Form, ValidatedInput, RadioGroup, Radio } from 'react-bootstrap-validation';

class Profile extends React.Component {
  render() {
    return (
      <div id='panel' className='profile'>
        <p className="intro">
          Change your account information.
        </p>
        <Form
            // Supply callbacks to both valid and invalid 
            // submit attempts 
            onValidSubmit={this._handleValidSubmit.bind(this)}
            onInvalidSubmit={this._handleInvalidSubmit.bind(this)}>

            <RadioGroup name='profession'
                        validate='required'
                        label='Student, teacher, or parent?'
                        value={this.props.profile.profession}
                        errorHelp={{
                            required: 'Please specify if you are a parent, teacher or student.'
                        }}
                        labelClassName=''
                        wrapperClassName='userType'>
                <Radio value='student' label='student'/>
                <Radio value='teacher' label='teacher' />
                <Radio value='parent' label='parent' />
            </RadioGroup>

            <ValidatedInput
                type='text'
                label='Full Name'
                name='name'
                value={this.props.profile.name}
                validate='required,isLength:4:30'
                errorHelp={{
                    required: 'Please enter a username',
                    isLength: 'Username must be at least 4 characters'
                }}
            />

            <ValidatedInput
                type='text'
                label='Email'
                name='email'
                value={this.props.profile.email}
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
      </div>
    )
  }
  _handleValidSubmit(values) {
    const {updateProfile} = this.props;
    const {name, email, profession, age} = this.refs;
    const id = this.props.profile._id;
    updateProfile(id, values.name, values.email, values.profession, '25');
  }
  _handleInvalidSubmit(errors, values) {
    console.log(errors)
  }
}

export default Profile;
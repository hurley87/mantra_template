import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Profile extends React.Component {
  render() {
    return (
      <div id='panel' className='profile'>
        <h3>
          Profile settings
        </h3>

        <p className="intro">
          Change your account information, avatar, login credentials, etc.
        </p>

        <form>
          <div className="form-group">
            <label>Name</label>
            <Input type="text" ref="name" className="form-control" placeholder="Enter name" defaultValue={this.props.profile.name} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <Input type="text" ref="email" className="form-control" placeholder="Enter email" defaultValue={this.props.profile.email} />
          </div>
          <div className="form-group">
            <label>Profession</label>
            <Input type="text" ref="profession" className="form-control" placeholder="Enter profession" defaultValue={this.props.profile.profession} />
          </div>
          <div className="form-group">
            <label>Age</label>
            <Input type="text" ref="age" className="form-control" placeholder="Enter age" defaultValue={this.props.profile.age}  />
          </div>
          <div className="form-group action">
            <input type="submit" className="btn btn-success" value="Save profile" onClick={this.changeProfile.bind(this)} />
          </div>
        </form>

        <form>
          <div className="form-group">
            <label>New password</label>
            <input type="password" ref="password_1" className="form-control" />
          </div>
          <div className="form-group">
            <label>Confirm new password</label>
            <input type="password" ref="password_2" className="form-control" />
          </div>
          <div className="form-group action">
            <input type="submit" className="btn btn-success" value="Save password" />
          </div>
        </form>
      </div>
    )
  }
  changeProfile(event){
    event.preventDefault();
    const {updateProfile} = this.props;
    const {name, email, profession, age} = this.refs;
    const id = this.props.profile._id;
    updateProfile(id, name.getValue(), email.getValue(), profession.getValue(), age.getValue());
  }
}

export default Profile;
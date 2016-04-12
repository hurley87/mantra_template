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
            <Input type="text" ref="name" className="form-control" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label>Age</label>
            <Input type="text" ref="age" className="form-control" placeholder="Enter age"  />
          </div>
          <div className="form-group action">
            <input type="submit" className="btn btn-success" value="Save profile" onClick={this.changeProfile.bind(this)} />
          </div>
        </form>

        <form>
          <div className="form-group">
            <label>New password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label>Confirm new password</label>
            <input type="password" className="form-control" />
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
    const {name, age} = this.refs;
    const id = this.props.user_id;
    updateProfile(id, name.getValue(), age.getValue());
  }
}

export default Profile;
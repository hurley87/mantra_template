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
            <input type="email" className="form-control" placeholder="Enter email" value="John Smith Jr" />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" value="john@gmail.com" />
          </div>
          <div className="form-group">
            <label>New password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label>Confirm new password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group action">
            <input type="submit" className="btn btn-success" value="Save changes" />
          </div>
        </form>
      </div>
    )
  }
}

export default Profile;
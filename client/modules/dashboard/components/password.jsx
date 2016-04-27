import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Notifications extends React.Component {
  render() {
    return (
      <div id='panel' className='password'>
        <h3>
          Account Password
        </h3>

        <p className="intro">
          Change your password.
        </p>
        <form>
          <div className="form-group">
            <label>Old password</label>
            <Input type="password" ref="old_password" className="form-control" />
          </div>
          <div className="form-group">
            <label>New password</label>
            <Input type="password" ref="new_password" className="form-control" />
          </div>
          <div className="form-group action">
            <Input type="submit" className="btn btn-success" value="Change password" onClick={this.changePassword.bind(this)} />
          </div>
        </form>

      </div>
    )
  }

  changePassword(event){
  event.preventDefault();
  const {updatePassword} = this.props;
  const {old_password, new_password} = this.refs;
  updatePassword(old_password.getValue(), new_password.getValue());
  }

}

export default Notifications;
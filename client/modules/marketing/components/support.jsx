import React from 'react';
import {Row, Col} from 'react-bootstrap';


const Support = ( { content = () => null }) => (
  <div id="support">
  <div id="header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>
            <span className="entypo-lifebuoy"></span>
            How can we help?
          </h2>
          <p>
            Please describe the problem you're having
          </p>
          <form>
            <div className="input-group">
                  <input type="text" className="form-control" placeholder="Can't find the source code of this page" />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">Search</button>
                  </span>
              </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div id="browse">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h4>Browse by topic</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 topic">
          <a href="#">
            <span className="icon ion-clipboard"></span>
            <strong>Tasks and Projects</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
        <div className="col-sm-4 topic">
          <a href="#">
            <span className="icon ion-gear-a"></span>
            <strong>Account settings</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
        <div className="col-sm-4 topic">
          <a href="#">
            <span className="icon ion-card"></span>
            <strong>Billing information</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 topic">
          <a href="#">
            <span className="icon ion-person-stalker"></span>
            <strong>Users and coworkers</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
        <div className="col-sm-4 topic">
          <a href="#">
            <span className="icon ion-upload"></span>
            <strong>Advanced options</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
        <div className="col-sm-4 topic">
          <a href="#">
            <span className="icon ion-compose"></span>
            <strong>Customize this template</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 topic">
          <a href="#">
            <span className="icon ion-iphone"></span>
            <strong>Mobile</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
        <div className="col-sm-4 topic">
          <a href="#">
            <span className="icon ion-search"></span>
            <strong>Search & Discussions</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
        <div className="col-sm-4 topic">
          <a href="#">
            <span className="icon ion-stats-bars"></span>
            <strong>Reports & Clients</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
      </div>
    </div>
  </div>

</div>
);

export default Support;
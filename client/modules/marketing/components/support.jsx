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
            Please use our online chat or give us a call at this number.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div id="browse">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h4>Frequently Asked Questions</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 topic">
          <a href="#">
            <strong>Tasks and Projects</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
        <div className="col-sm-4 topic">
          <a href="#">
            <strong>Account settings</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
        <div className="col-sm-4 topic">
          <a href="#">
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
            <strong>Users and coworkers</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
        <div className="col-sm-4 topic">
          <a href="#">
            <strong>Advanced options</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
        <div className="col-sm-4 topic">
          <a href="#">
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
            <strong>Mobile</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
        <div className="col-sm-4 topic">
          <a href="#">
            <strong>Search & Discussions</strong>
          </a>
          <p>
            Learn how to change tasks and assign projects to all your teammates.
          </p>
        </div>
        <div className="col-sm-4 topic">
          <a href="#">
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
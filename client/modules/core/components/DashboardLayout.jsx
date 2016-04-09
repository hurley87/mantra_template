import React from 'react';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';

const Layout = ({content}) => (
  <div id='wrapper'>
    <div id="sidebar-dark" className="main-sidebar">
      <div className="current-user">
        <a href="index.html" className="name">
          <span>
            John Smith

          </span>
        </a>
      </div>
      <div className="menu-section">
        <h3>General</h3>
        <ul>
          <li>
            <a href="index.html" className='active'>
              <i className="ion-android-earth"></i> 
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="users.html" data-toggle="sidebar">
              <i className="ion-person-stalker"></i> <span>Settings</span>
  
            </a>
          </li>
          <li>
            <a href="users.html" data-toggle="sidebar">
              <i className="ion-stats-bars"></i> <span>Upgrade</span>
            </a>
          </li>
          <li>
            <a href="users.html" data-toggle="sidebar">
              <i className="ion-pricetags"></i> <span>About</span>
  
            </a>
          </li>
        </ul>
      </div>
      <div className="menu-section">
        <h3>Addition</h3>
        <ul>
          <li>
            <a href="account.html" data-toggle="sidebar">
              <i className="ion-earth"></i> <span>Lesson 1</span>
  
            </a>
          </li>
          <li>
            <a href="account.html" data-toggle="sidebar">
              <i className="ion-card"></i> <span>Lesson 2</span>
  
            </a>
          </li>
          <li>
            <a href="account.html" data-toggle="sidebar">
              <i className="ion-flash"></i> <span>Lesson 3</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="menu-section">
        <h3>Subtraction</h3>
        <ul>
          <li>
            <a href="account.html" data-toggle="sidebar">
              <i className="ion-earth"></i> <span>Lesson 1</span>
  
            </a>
          </li>
          <li>
            <a href="account.html" data-toggle="sidebar">
              <i className="ion-card"></i> <span>Lesson 2</span>
  
            </a>
          </li>
          <li>
            <a href="account.html" data-toggle="sidebar">
              <i className="ion-flash"></i> <span>Lesson 3</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom-menu hidden-sm">
        <ul>
          <li><a href="#"><i className="ion-help"></i></a></li>
          <li>
            <a href="#">
              <i className="ion-archive"></i>
              <span className="flag"></span>
            </a>
            <ul className="menu">
              <li><a href="#">5 unread messages</a></li>
              <li><a href="#">12 tasks completed</a></li>
            </ul>
          </li>
          <li><a href="signup.html"><i className="ion-log-out"></i></a></li>
        </ul>
      </div>
    </div>
    {
      content()
    }
  </div>

);

export default Layout;
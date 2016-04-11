import React from 'react';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';

const Layout = ({content}) => (
  <div id='account'>
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
              <a href="/home" className={ location.pathname == '/home' ? 'active' : null }>
                <i className="ion-home"></i> 
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/settings" className={ location.pathname == '/settings' ? 'active' : null }>
                <i className="ion-person"></i> <span>Settings</span>
    
              </a>
            </li>
            <li>
              <a href="/upgrade" className={ location.pathname == '/upgrade' ? 'active' : null }>
                <i className="ion-person-add"></i> <span>Upgrade</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="menu-section">
          <h3>Exercises</h3>
          <ul>
            <li>
              <a href="/addition" data-toggle="sidebar" className={ location.pathname == '/addition' ? 'active' : null }>
                <i className="ion-plus-round"></i> <span>Addition</span>
              </a>
            </li>
            <li>
              <a href="/subtraction" data-toggle="sidebar" className={ location.pathname == '/subtraction' ? 'active' : null }>
                <i className="ion-minus-round"></i> <span>Subtraction</span>
              </a>
            </li>
            <li>
              <a href="/multiplication" data-toggle="sidebar" className={ location.pathname == '/multiplication' ? 'active' : null }>
                <i className="ion-close-round"></i> <span>Multiplication</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="menu-section">
          <h3>Learn More</h3>
          <ul>
            <li>
              <a href="account.html" data-toggle="sidebar">
                <i className="ion-printer"></i> <span>Textbook</span>
    
              </a>
            </li>
            <li>
              <a href="account.html" data-toggle="sidebar">
                <i className="ion-lightbulb"></i> <span>Blog</span>
    
              </a>
            </li>
            <li>
              <a href="account.html" data-toggle="sidebar">
                <i className="ion-calendar"></i> <span>Private Lesson</span>
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
  </div>

);

export default Layout;
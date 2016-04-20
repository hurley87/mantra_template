import React from 'react';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';

const Sidebar = ({LocalState}) => (
  <div>
    <div id="sidebar-dark" className="main-sidebar">
      <div className="current-user">
        <a href="/profile" className="name active">
          <span>
            <i className='ion-person'></i> Username
          </span>
        </a>
      </div>
      <div className="menu-section">
        <h3>Exercises</h3>
        <ul>
          <li onClick={LocalState.set('TOGGLE', false)}>
            <a href="/addition" className={ location.pathname == '/addition' ? 'active' : null }>
              <i className="ion-plus-round"></i> <span>Addition</span>
            </a>
          </li>
          <li onClick={LocalState.set('TOGGLE', false)}>
            <a href="/subtraction" className={ location.pathname == '/subtraction' ? 'active' : null }>
              <i className="ion-minus-round"></i> <span>Subtraction</span>
            </a>
          </li>
          <li onClick={LocalState.set('TOGGLE', false)}>
            <a href="/multiplication" className={ location.pathname == '/multiplication' ? 'active' : null }>
              <i className="ion-close-round"></i> <span>Multiplication</span>
            </a>
          </li>
          <li onClick={LocalState.set('TOGGLE', false)}>
            <a href="/division" className={ location.pathname == '/division' ? 'active' : null }>
              <i className="ion-more"></i> <span>Division</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="menu-section">
        <h3>Learn More</h3>
        <ul>
          <li>
            <a href="account.html">
              <i className="ion-archive"></i> <span>Textbook</span>

            </a>
          </li>
          <li>
            <a href="account.html">
              <i className="ion-lightbulb"></i> <span>Blog</span>

            </a>
          </li>
          <li>
            <a href="account.html">
              <i className="ion-calendar"></i> <span>Private Lesson</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

);

export default Sidebar;
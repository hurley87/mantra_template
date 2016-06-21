import React from 'react';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';

const Sidebar = ({LocalState, Meteor, profile}) => (
  <div>
    <div id="sidebar-dark" className="main-sidebar">
      <div className="current-user">
        <a href="/profile" className="name active">
          <span>
            {profile.name}
          </span>
        </a>
      </div>
      <div className="menu-section">
        <h3>Exercises</h3>
        <ul>
  {        
            // <li onClick={LocalState.set('TOGGLE', false)}>
            //   <a href="/counting" className={ location.pathname == '/counting' ? 'active' : null }>
            //     <i className="ion-pound"></i> <span>Counting</span>
            //   </a>
            // </li>
  }
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
              <span className='division'>{'\u00F7'}</span> <span>Division</span>
            </a>
          </li>
        </ul>
      </div>
{
      // <div className="menu-section">
      //   <h3>More</h3>
      //   <ul>
      //     <li onClick={LocalState.set('TOGGLE', false)}>
      //       <a href="/store" className={ location.pathname == '/store' ? 'active' : null }>
      //         <i className="ion-flash"></i> <span>Upgrade</span>

      //       </a>
      //     </li>
      //     <li onClick={LocalState.set('TOGGLE', false)}>
      //       <a href="/blog" className={ location.pathname == '/blog' ? 'active' : null }>
      //         <i className="ion-lightbulb"></i> <span>Blog</span>

      //       </a>
      //     </li>
      //     <li onClick={LocalState.set('TOGGLE', false)}>
      //       <a href="/help" className={ location.pathname == '/help' ? 'active' : null }>
      //         <i className="ion-help"></i> <span>Help</span>
      //       </a>
      //     </li>
      //     <li onClick={LocalState.set('TOGGLE', false)}>
      //       <a href="#" onClick={Meteor.logout.bind(this)}>
      //         <i className="ion-log-out"></i> <span>Logout</span>
      //       </a>
      //     </li>
      //   </ul>
      // </div>
  }

    </div>
  </div>

);

export default Sidebar;
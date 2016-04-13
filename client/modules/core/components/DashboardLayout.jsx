import React from 'react';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';
import LoginUser from '../../users/containers/Login.js';
import SidebarNav from '../containers/sidebar.js';

const DashboardLayout = ({content, LocalState, user_id}) => (
  <div id='account'>
    <div id='wrapper'>
      { user_id ? <SidebarNav /> : null }
      { user_id ? content() : <LoginUser /> }
    </div>
  </div>
);

export default DashboardLayout;
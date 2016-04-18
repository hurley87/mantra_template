import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Sidebar from '../containers/sidebar.js'

const Dashboard = ({content, LocalState, user_id}) => (
  <div>
    <Sidebar />
    { content() }
  </div>
);

export default Dashboard;
import React from 'react';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';
import LoginUser from '../../users/containers/Login.js';
import Dashboard from '../containers/Dashboard.js';

const QuestionLayout = ({content, LocalState, user_id}) => (
  <div id='account'>
    <div id='wrapper'>
      { user_id ? <Dashboard content={content} /> : <LoginUser /> }
    </div>
  </div>
);

export default QuestionLayout;
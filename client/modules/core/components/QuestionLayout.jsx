import React from 'react';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';
import LoginUser from '../../users/containers/Login.js';
import Question from '../containers/Question.js';
import Sidebar from '../containers/sidebar.js';

const QuestionLayout = ({content, LocalState, user_id}) => (
  <div id='steps'>
    <div id='wrapper'>
      <Sidebar />
      { user_id ? <Question content={content} /> : <LoginUser /> }
    </div>
  </div>
);

export default QuestionLayout;
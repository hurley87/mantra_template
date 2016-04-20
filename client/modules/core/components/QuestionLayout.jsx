import React from 'react';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';
import LoginUser from '../../users/containers/Login.js';
import Question from '../containers/Question.js';

const QuestionLayout = ({content, LocalState, user_id}) => (
  <div id='steps'>
    <div id='wrapper'>
      { user_id ? <Question content={content} /> : <LoginUser /> }
    </div>
  </div>
);

export default QuestionLayout;
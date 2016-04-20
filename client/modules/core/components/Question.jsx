import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Sidebar from '../containers/sidebar.js'

const Question = ({content, LocalState, user_id}) => (
  <div id='content'>
    <Sidebar />
    { content() }
  </div>
);

export default Question;
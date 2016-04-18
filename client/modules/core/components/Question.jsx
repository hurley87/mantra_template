import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Question = ({content, LocalState, user_id}) => (
  <div id='content'>
    { content() }
  </div>
);

export default Question;
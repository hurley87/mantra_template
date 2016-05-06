import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const DivIndex = ({questions, points}) => (
  <IndexLayout questions={questions} points={points} title='Division' type='division'/>
);

export default DivIndex;

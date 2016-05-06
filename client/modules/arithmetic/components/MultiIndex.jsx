import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const MultiIndex = ({questions, points}) => (
  <IndexLayout questions={questions} points={points} title='Multiplication' type='multiplication'/>
);

export default MultiIndex;

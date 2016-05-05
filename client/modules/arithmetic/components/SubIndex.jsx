import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const SubIndex = ({questions, points}) => (
  <IndexLayout questions={questions} points={points} title='Subtraction' type='subtraction'/>
);

export default SubIndex;

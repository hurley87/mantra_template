import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const SubIndex = ({subtractions}) => (
  <IndexLayout questions={subtractions} title='Subtraction Exercises'/>
);

export default SubIndex;

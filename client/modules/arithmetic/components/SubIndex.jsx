import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const SubIndex = ({subtractions}) => (
  <IndexLayout questions={subtractions} title='Subtraction Exercises' type='subtraction'/>
);

export default SubIndex;

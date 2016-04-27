import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const SubIndex = ({incomplete, complete}) => (
  <IndexLayout incomplete={incomplete} complete={complete} title='Subtraction Exercises' type='subtraction'/>
);

export default SubIndex;

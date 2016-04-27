import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const SubIndex = ({complete, current, locked}) => (
  <IndexLayout locked={locked} current={current} complete={complete} title='Subtraction Exercises' type='subtraction'/>
);

export default SubIndex;

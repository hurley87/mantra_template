import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const AddIndex = ({complete, incomplete}) => (
  <IndexLayout incomplete={incomplete} complete={complete} title='Addition Exercises' type='addition'/>
);

export default AddIndex;

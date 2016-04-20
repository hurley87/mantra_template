import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const AddIndex = ({additions}) => (
  <IndexLayout questions={additions} title='Addition Exercises' type='addition'/>
);

export default AddIndex;

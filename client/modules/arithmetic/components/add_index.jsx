import React from 'react';
import IndexLayout from './index_layout.jsx'

const AddIndex = ({additions}) => (
  <IndexLayout questions={additions} title='Addition Exercises'/>
);

export default AddIndex;

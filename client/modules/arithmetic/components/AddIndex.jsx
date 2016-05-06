import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const AddIndex = ({points, questions}) => (
  <IndexLayout questions={questions} points={points}  title='Addition' type='addition'/>
);

export default AddIndex;

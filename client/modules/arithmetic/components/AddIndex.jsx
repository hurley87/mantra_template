import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const AddIndex = ({complete, current, locked}) => (
  <IndexLayout locked={locked} current={current} complete={complete}  title='Addition Exercises' type='addition'/>
);

export default AddIndex;

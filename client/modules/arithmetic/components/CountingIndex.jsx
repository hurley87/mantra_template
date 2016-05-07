import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const CountingIndex = ({points, questions}) => (
  <IndexLayout questions={questions} points={points}  title='Counting' type='counting'/>
);

export default CountingIndex;

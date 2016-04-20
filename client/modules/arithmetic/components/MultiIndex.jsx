import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const MultiIndex = ({multiplications}) => (
  <IndexLayout questions={multiplications} title='Multiplication Exercises'/>
);

export default MultiIndex;

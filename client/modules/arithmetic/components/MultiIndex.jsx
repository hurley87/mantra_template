import React from 'react';
import IndexLayout from './IndexLayout.jsx'

const MultiIndex = ({multiplications}) => (
  <IndexLayout questions={multiplications} title='Multiplication Exercises'/>
);

export default MultiIndex;

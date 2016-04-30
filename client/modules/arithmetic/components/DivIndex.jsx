import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const DivIndex = ({divisions}) => (
  <IndexLayout questions={divisions} title='Division' type='division'/>
);

export default DivIndex;

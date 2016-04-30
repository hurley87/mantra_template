import React from 'react';
import IndexLayout from '../containers/IndexLayout.js';

const DivIndex = ({complete, current, locked}) => (
  <IndexLayout locked={locked} current={current} complete={complete} title='Division' type='division'/>
);

export default DivIndex;

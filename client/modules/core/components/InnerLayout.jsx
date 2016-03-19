import React from 'react';

const InnerLayout = ({content}) => (
  <div>
    <header>
      <h1>Inner</h1>
    </header>
    <div>
      {content()}
    </div>
  </div>
)

export default InnerLayout;
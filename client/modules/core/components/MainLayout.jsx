import React from 'react';

const Layout = ({content}) => (
  <div>
    <header>
      <h1>Impossible List</h1>
    </header>
    <div>
      {content()}
    </div>a
  </div>
)

export default Layout;
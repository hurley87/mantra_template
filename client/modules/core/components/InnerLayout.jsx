import React from 'react';
import Footer from '../../marketing/components/footer.jsx';
import InnerNav from '../../marketing/components/innerNav.jsx';

const InnerLayout = ({content}) => (
  <div>
    <header>
      <InnerNav />
    </header>
    
    <div>
      {content()}
    </div>
    
    <footer>
    	<Footer />
    </footer>
  </div>
);

export default InnerLayout;
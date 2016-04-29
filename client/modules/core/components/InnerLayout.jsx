import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Footer from '../../marketing/components/footer.jsx';
import Header from '../../marketing/components/header.jsx';

const InnerLayout = ({content}) => (
  <div>
    <header>
      <Header />
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
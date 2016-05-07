import React from 'react';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';
import Header from '../../marketing/components/header.jsx';
import Footer from '../../marketing/components/footer.jsx';

const Layout = ({content}) => (
  	<div>
		    <Header />
  			<div>
  			{
      		content()
    		}
  			</div>
  		<Footer />
  	</div>

);

export default Layout;
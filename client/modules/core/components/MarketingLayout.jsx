import React from 'react';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';
import MainNav from '../../marketing/components/MainNav.jsx';
import Footer from '../../marketing/components/footer.jsx';

const Layout = ({content}) => (
  	<div>
		<MainNav />
  			<div>
  			{
      			content()
    		}
  			</div>
  		<Footer />
  	</div>

);

export default Layout;
import React from 'react';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';

const Layout = ({content}) => (
  	<div>
		<div>
		{
  			content()
		}
		</div>
  	</div>

);

export default Layout;
import React from 'react';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';

const Layout = ({content}) => (

<div>
	{content()}
</div>

);

export default Layout;
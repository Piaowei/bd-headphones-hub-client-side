import * as React from 'react';
import { Button, Grid } from '@mui/material';

import Appointments from '../Appointments/Appointments';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
const DashboardHome = () => {
	const [date, setDate] = React.useState(new Date());
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={12} >
				<ManageAllOrders></ManageAllOrders>
			</Grid>
		</Grid>
	);
};

export default DashboardHome;
import * as React from 'react';
import { Button, Grid } from '@mui/material';


import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
import useAuth from '../../../hooks/useAuth';
import Myorders from '../../MyOrders/Myorders';

const DashboardHome = () => {
	const [date, setDate] = React.useState(new Date());
	const { admin, logout } = useAuth();
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={12} >
				{
					admin ? <ManageAllOrders></ManageAllOrders> : <Myorders></Myorders>

				}


			</Grid>
		</Grid>
	);
};

export default DashboardHome;
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@restart/ui/esm/Button';

const TotalOrders = ({ date }) => {
	const { user } = useAuth();
	const [TotalOrders, setTotalOrders] = useState([]);

	useEffect(() => {

		const url = `https://fierce-woodland-16592.herokuapp.com/orderItems/${user.email}`
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setTotalOrders(data)
			})
	}, [])

	return (
		<div>
			<h2>My total Order Amount: {TotalOrders.length}</h2>
			<TableContainer component={Paper}>
				<Table aria-label="TotalOrders table">
					<TableHead>
						<TableRow>
							<TableCell align="left" >Image</TableCell>
							<TableCell align="left">Name</TableCell>
							<TableCell align="left">Time</TableCell>
							<TableCell align="left">Service</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{TotalOrders.map((row) => (
							<TableRow
								key={row._id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell align="left"> <img align="left" style={{ width: '90px', height: "70px" }} src={row.productimg} /> </TableCell>
								<TableCell align="left">{row.name}</TableCell>

								<TableCell align="left">{row.time}</TableCell>
								<TableCell align="left">{row.serviceName}</TableCell>
								<TableCell align="left">{row.fat}</TableCell>

								<Button variant='contained' style={{ backgroundColor: '#5CE7ED' }}  >Delete Order</Button>

							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TotalOrders;
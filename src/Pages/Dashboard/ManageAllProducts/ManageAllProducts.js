import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { height } from '@mui/system';
import Button from '@restart/ui/esm/Button';

const ManageAllProducts = () => {
	const { user } = useAuth();
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		// const url = `http://localhost:5000/orderItems?email=${user.email}`
		const url = `http://localhost:5000/orderItems/`
		fetch(url)
			.then(res => res.json())
			.then(data => {
				console.log("order items", data)
				setAppointments(data)
			})
	}, [])

	return (
		<div>
			<h2>My total Order Amount: {appointments.length}</h2>
			<TableContainer component={Paper}>
				<Table aria-label="Appointments table">
					<TableHead>
						<TableRow>
							<TableCell align="left" >Image</TableCell>
							<TableCell align="left">Name</TableCell>
							<TableCell align="left">Time</TableCell>
							<TableCell align="left">Service</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{appointments.map((row) => (
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
export default ManageAllProducts;
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
import { Spinner } from 'react-bootstrap';

const ManageAllProducts = () => {
	const [products, setProducts] = useState([])
	const [isFound, setIsFound] = useState(true);
	const { user } = useAuth();
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		setIsFound(true);
		fetch('http://localhost:5000/products')
			.then(res => res.json())
			.then(data => {
				setProducts(data)
				console.log("from manage orders", data)
			})
			.finally(() => setIsFound(false));

	}, [])


	if (isFound) {
		return <Spinner animation="border" variant="danger" />
	}


	// FOR DELETE
	const handleDelete = id => {
		console.log("worked from dashboard ", id);
		const url = `http://localhost:5000/products/${id}`;
		fetch(url, {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(data => {

				if (data.deletedCount) {
					window.alert("Products is Deleted")
					const remaining = products.filter(service => service._id !== id);
					setProducts(remaining);
				}
			});

	}



	return (
		<div>
			<h2>My total Order Amount: {products.length}</h2>
			<TableContainer component={Paper}>
				<Table aria-label="Appointments table">
					<TableHead>
						<TableRow>
							<TableCell align="left" >Image</TableCell>
							<TableCell align="left">Name</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{products.map((row) => (
							<TableRow
								key={row._id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell align="left"> <img align="left" style={{ width: '90px', height: "70px" }} src={row.img} /> </TableCell>
								<TableCell align="left">{row.name}</TableCell>
								<TableCell align="left"><Button onClick={() => handleDelete(row._id)} variant='contained' style={{ backgroundColor: '#5CE7ED' }}  >Delete Product</Button></TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
export default ManageAllProducts;
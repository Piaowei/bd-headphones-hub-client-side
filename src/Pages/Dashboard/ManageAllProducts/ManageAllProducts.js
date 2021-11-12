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
import { MdDeleteForever } from 'react-icons/md';

import "./ManageAllProducts.css"

const ManageAllProducts = () => {
	const [products, setProducts] = useState([])
	const [isFound, setIsFound] = useState(true);
	const { user } = useAuth();
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		setIsFound(true);
		fetch('https://fierce-woodland-16592.herokuapp.com/products')
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
		const url = `https://fierce-woodland-16592.herokuapp.com/products/${id}`;
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
							<TableCell align="left" className="fw-bold" >Image</TableCell>
							<TableCell align="center" className="fw-bold" >Name</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{products.map((row) => (
							<TableRow
								key={row._id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell align="left"> <img align="left" style={{ width: '70px', height: "90px" }} src={row.img} /> </TableCell>
								<TableCell align="left">{row.name}...</TableCell>

								<TableCell align="left">

									<button className="btn btn-danger p-1 d-flex " onClick={() => handleDelete(row._id)} > <MdDeleteForever size="1.5em" />  Delete</button>

								</TableCell>

							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
export default ManageAllProducts;
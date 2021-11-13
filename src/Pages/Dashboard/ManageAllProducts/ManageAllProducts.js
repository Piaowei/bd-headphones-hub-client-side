import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Spinner } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md';

import "./ManageAllProducts.css"

const ManageAllProducts = () => {
	const [products, setProducts] = useState([])
	const [isFound, setIsFound] = useState(true);
	useEffect(() => {
		setIsFound(true);
		fetch('https://fierce-woodland-16592.herokuapp.com/products')
			.then(res => res.json())
			.then(data => {
				setProducts(data)
			})
			.finally(() => setIsFound(false));

	}, [])


	if (isFound) {
		return <Spinner animation="border" variant="danger" />
	}


	// FOR DELETE
	const handleDelete = id => {
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
		<div className="px-0 mx-0  "  >
			< h2 > Total Product Amount: {products.length}</h2 >
			<TableContainer component={Paper} className="" >
				<Table aria-label="Appointments table  ">
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
								<TableCell className="mx-0 px-0 " align="left"> <img className=" mx-2" align="left" style={{ width: '50px', height: "80px" }} src={row.img} /> </TableCell>


								<TableCell align="left">{row.name}...</TableCell>

								<TableCell className="px-0 pe-1" align="left">

									<button className="btn btn-danger p-0 d-flex " onClick={() => handleDelete(row._id)} > <MdDeleteForever size="1.2em" /> <small>Delete</small> </button>
									{/* <button>Delete</button> */}

								</TableCell>

							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div >
	);
};
export default ManageAllProducts;
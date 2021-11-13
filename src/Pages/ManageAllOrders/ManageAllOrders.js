import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ManageOrderDetails from '../ManageOrderDetails/ManageOrderDetails';


const ManageAllOrders = () => {
	const [isFound, setIsFound] = useState(true);
	const [services, setServices] = useState([])
	const [productStatus, setProductStatus] = useState(false);

	useEffect(() => {
		fetch('https://fierce-woodland-16592.herokuapp.com/orderItems')
			.then(res => res.json())
			.then(data => setServices(data))
			.finally(() => setIsFound(false));
	}, [productStatus])



	if (isFound) {
		return <Spinner animation="border" variant="danger" />
	}


	const handleDelete = id => {
		const url = `https://fierce-woodland-16592.herokuapp.com/orderItems/${id}`;
		fetch(url, {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(data => {

				if (data.deletedCount) {
					alert('Deleted Successfully');
					const remaining = services.filter(service => service._id !== id);
					setServices(remaining);
				}
			})
	}

	//UPDATE API
	const handleUpdateUser = e => {
		setProductStatus(true)
		const appove = { condition: "Shipped" };
		const url = `https://fierce-woodland-16592.herokuapp.com/orderItems/${e}`;
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(appove)
		})
			.then(res => res.json())
			.then(data => {
				if (data.modifiedCount > 0) {
					alert('Order successfully Shipped')
					setProductStatus("");
				}
			})
	}





	return (
		<div id="nav-bar" className="mb-5" >
			<h2 className="text-primary pt-3 pb-3">Manage All Orders </h2>
			<div className="service-container ">
				{
					services.map(service => <ManageOrderDetails
						key={service._id}
						service={service}
						handleDelete={handleDelete}
						handleUpdateUser={handleUpdateUser}
					></ManageOrderDetails>)
				}
			</div>
		</div>
	);
};

export default ManageAllOrders;
import React, { useEffect, useState } from 'react';
import MyorderDetails from '../MyorderDetails/MyorderDetails';
import useAuth from '../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import './Myorders.css'

const Myorders = () => {
	const { user } = useAuth();
	const [isFound, setIsFound] = useState(true);
	const [services, setServices] = useState([])
	useEffect(() => {
		fetch('https://fierce-woodland-16592.herokuapp.com/orderItems')
			.then(res => res.json())
			.then(data => {
				const single = data.filter(item => item.email.toLowerCase() == user?.email?.toLowerCase());
				setServices(single);

			})
			.finally(() => setIsFound(false));
	}, []);

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
					window.alert("The Ordered Item is Deleted")
					const remaining = services.filter(service => service._id !== id);
					setServices(remaining);
				}
			});

	}


	return (
		<div id="nav-bar" className="myOrder-bg">
			<h1 className="  pb-2 my-order ">My  Orders </h1>
			<div className="row row-cols-1 row-cols-md-3 g-4 container-fluid mx-0 p-1">
				{
					services.map(service => <MyorderDetails
						key={service._id}
						service={service}
						handleDelete={handleDelete}
					></MyorderDetails>)
				}
			</div>
		</div>
	);
};

export default Myorders;
import React, { useEffect, useState } from 'react';
// import Service from '../Service/Service';
import { Spinner } from 'react-bootstrap';
import Service from '../../Home/Service/Service';
import Footer from '../../Shared/Footer/Footer';



const MoreProducts = () => {
	const [services, setServices] = useState([])
	const [isFound, setIsFound] = useState(true);
	useEffect(() => {
		setIsFound(true);
		fetch('https://fierce-woodland-16592.herokuapp.com/products')
			.then(res => res.json())
			.then(data => setServices(data))
			.finally(() => setIsFound(false));

	}, [])

	if (isFound) {
		return <Spinner animation="border" variant="danger" />
	}


	return (
		<div>

			<div className="container-fluid">
				<h1 className="text-primary mt-5 pb-2 title ">All Headphone</h1>


				<div className=" service-container ">
					{
						(services.slice(0, 12)).map(service => <Service
							key={service._id}
							service={service}
							short={service.description.slice(0.15)}
							isFound={isFound}
						></Service>)
					}
				</div>
			</div>
		</div>
	);
};
export default MoreProducts;
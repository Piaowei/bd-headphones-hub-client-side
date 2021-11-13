import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ReviewItem from '../ReviewItem/ReviewItem';
const ReviewItems = () => {
	const [reviews, setReviews] = useState([])
	const [isFound, setIsFound] = useState(true);
	useEffect(() => {
		setIsFound(true);
		fetch('https://fierce-woodland-16592.herokuapp.com/review')
			.then(res => res.json())
			.then(data => setReviews(data))
			.finally(() => setIsFound(false));

	}, [])

	if (isFound) {
		return <Spinner animation="border" variant="danger" />
	}


	return (

		<div className="container-fluid">
			<h1 style={{ color: "#4f06fa" }} className="my-3 title-color">Customers Review  </h1>
			<div className="row row-cols-1 row-cols-md-4 g-4">
				{
					reviews.map(review => <ReviewItem
						key={review._id}
						review={review}
					></ReviewItem>)
				}
			</div>
		</div>
	);
};

export default ReviewItems;
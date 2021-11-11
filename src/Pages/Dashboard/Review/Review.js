import { useState } from 'react';
import * as React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import StarIcon from '@mui/icons-material/Star';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './Review.css'

const labels = {

	1: 'Useless',
	2: 'Poor',
	3: 'Ok',
	4: 'Good',
	5: 'Excellent',
};


const Review = () => {
	const [value, setValue] = React.useState(2);
	const [hover, setHover] = React.useState(-1);

	const [isFound, setIsFound] = useState(false);
	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	const { user } = useAuth();




	const onSubmit = data => {
		setIsFound(true);
		data.name = user.displayName;
		console.log("This is  data from review ", data);
		axios.post('http://localhost:5000/review', data)
			.then(res => {
				if (res.data.insertedId) {
					setIsFound(false);
					alert("added successfully");
					reset();
				}
			})

	};

	return (
		<div>

			<div className="add-sevice1">
				<form onSubmit={handleSubmit(onSubmit)}>
					<textarea className="textArea" {...register("description", { required: true })} placeholder="Description" />
					{errors.description?.type === 'required' && <span className="text-danger">Review is required</span>}
					<Box
						sx={{
							width: 200,
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Rating
							name="hover-feedback"
							value={value}
							precision={1}
							onChange={(event, newValue) => {
								setValue(newValue);
							}}
							onChangeActive={(event, newHover) => {
								setHover(newHover);
							}}
							emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
						/>
						{value !== null && (
							<Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
						)}
					</Box>
					<input className="submit-order-btn" type="submit" />
				</form>
			</div>



			<h2>"value",{value}</h2>


		</div >
	);
};

export default Review;
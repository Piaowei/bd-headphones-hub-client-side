import { useState } from 'react';
import * as React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import StarIcon from '@mui/icons-material/Star';
import useAuth from '../../../hooks/useAuth';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import fila from '../../../images/fila.jpg'
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
		data.rate = value;
		axios.post('https://fierce-woodland-16592.herokuapp.com/review', data)
			.then(res => {
				if (res.data.insertedId) {
					setIsFound(false);
					alert("Review added successfully");
					reset();
				}
			})

	};

	return (
		<div className="review row">
			<div className=" ">
				<img className="img-fluid" src={fila} alt="" />
			</div>

			<div className="add-sevice1   ">
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



		</div >
	);
};

export default Review;
import React from 'react';
import './Destination.css'
import img1 from '../../../images/destination/guangzhou.jpg'
import img2 from '../../../images/destination/hangzhou.jpg'
import img3 from '../../../images/destination/hualien.jpg'
import img4 from '../../../images/destination/nanthou.jpg'
import img5 from '../../../images/destination/macau.jpg'
import img6 from '../../../images/destination/qindao.jpg'
import img7 from '../../../images/destination/chong.jpg'
import img8 from '../../../images/destination/zhuhai.jpg'
import './Destination.css'
const Destination = () => {
	return (
		<div className="container-fluid">
			<h1 className="my-3 title-color">Popular Destinations</h1>
			<div className="row row-cols-1 row-cols-md-4 g-4">

				<div className="col ">
					<div className="card bg-white border-0 text-white">
						<img src={img1} className="card-img-top" alt="..." />
						<div className="card-img-overlay">
							<h3 className="card-title">GuangZhou</h3>
						</div>
					</div>
				</div>
				<div className="col ">
					<div className="card bg-white border-0 text-white">
						<img src={img2} className="card-img-top" alt="..." />
						<div className="card-img-overlay">
							<h3 className="card-title">Hangzhou</h3>
						</div>
					</div>
				</div>
				<div className="col ">
					<div className="card bg-white border-0 text-white">
						<img src={img3} className="card-img-top" alt="..." />
						<div className="card-img-overlay">
							<h3 className="card-title">Hualien</h3>
						</div>
					</div>
				</div>
				<div className="col ">
					<div className="card bg-white border-0 text-white">
						<img src={img4} className="card-img-top" alt="..." />
						<div className="card-img-overlay">
							<h3 className="card-title">Manthou</h3>
						</div>
					</div>
				</div>
				<div className="col ">
					<div className="card bg-white border-0 text-white">
						<img src={img5} className="card-img-top" alt="..." />
						<div className="card-img-overlay">
							<h3 className="card-title">Macau</h3>
						</div>
					</div>
				</div>
				<div className="col ">
					<div className="card bg-white border-0 text-white">
						<img src={img6} className="card-img-top" alt="..." />
						<div className="card-img-overlay">
							<h3 className="card-title">Qindao</h3>
						</div>
					</div>
				</div>
				<div className="col ">
					<div className="card bg-white border-0 text-white">
						<img src={img7} className="card-img-top" alt="..." />
						<div className="card-img-overlay">
							<h3 className="card-title">Chongching</h3>
						</div>
					</div>
				</div>
				<div className="col ">
					<div className="card bg-white border-0 text-white">
						<img src={img8} className="card-img-top" alt="..." />
						<div className="card-img-overlay">
							<h3 className="card-title">Zhuhai</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
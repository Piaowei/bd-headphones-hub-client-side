import React from 'react';
import { IoLogoWechat } from 'react-icons/io5';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaWeibo } from 'react-icons/fa';
import { HiCursorClick } from 'react-icons/hi';
import './Footer.css'
const Footer = () => {
	return (
		<div className="footer-bg footer-bg">
			<div className="container mt-5  ">
				<div className="row row-cols-1 row-cols-md-4 g-4">


					<div className="col  text-md-start footer-text-bd text-center">
						<h4 className="mb-md-4" >Get In Touch</h4>
						<p>28-Nanli Road,Hongshan District,Wuhan,China</p>
						<p>Call For More Information
							+8801842403974</p>
						<p>Office Email <br />
							msptonmoy@gmail.com</p>
					</div>

					<div className="col text-center footer-text-bd  text-md-start">
						<h4 className="mb-md-4">Information</h4>
						<p>About BD Headphones Hub</p>
						<p>Specials</p>
						<p>Delevery Information</p>
						<p>Terms & Conditions</p>
						<p>Privacy Statement</p>
					</div>


					<div className="col text-center footer-text-bd text-md-start">
						<h4 className="mb-md-4" >Collection</h4>
						<p><span className="ms-2 text-white" >Search</span> </p>
						<p> <span className="ps-2" >Orders and Returns</span> </p>
						<p><span className="ps-2" >Consultant</span> </p>
						<p> <span className="ps-2" >Help and Faq Store</span> </p>
						<p> <span className="ps-2" >Locations</span> </p>
					</div>
					<div className="col text-center footer-text-bd  text-md-start">
						<h4 className="mb-md-4">Follow Us</h4>
						<p> Bd Headphones Hub Plaza, <br />28-Nanli Road,Hongshan District,<br /> Wuhan,China</p>

						{/* Used React Icons */}

						<div className="input-group mb-3">
							<input type="text" className="form-control" placeholder="Inter Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
							<button className="btn btn-outline-secondary" type="button" id="button-addon2"><HiCursorClick /></button>
						</div>
						<div className="d-flex align-items-start justify-content-md-between justify-content-evenly ">
							<h4><IoLogoWechat size="1.5em" /></h4>
							<h4><BsFacebook size="1.5em" /></h4>
							<h4><BsTwitter size="1.5em" /></h4>
							<h4><FaWeibo size="1.5em" /></h4>
						</div>
					</div>
				</div>

			</div>
			<p className="text-white copyright" >CopyRight  &copy; BD Headphones Hub </p>
		</div>
	);
};

export default Footer;
import React from 'react';
import './Accordion.css'
const Accordion = () => {
	return (
		<div className="row container-fluid color me-0 pb-5">
			<div className="pt-5 pb-2" >	<h2>FAQ</h2></div>
			<div className=" pb-2 "  >	<h1 className="faq" >Frequently Asked Questions</h1></div>

			<div className="container-fluid row-cols-1 row-cols-md-1 w-75 " >
				<div className="accordion  " id="accordionPanelsStayOpenExample">
					<div className="accordion-item color-main">
						<h2 className="accordion-header" id="panelsStayOpen-headingOne">
							<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">

								<span className="fw-bold" >Can I use these to not hear someone else tv? And still hear my tv?</span>

							</button>
						</h2>
						<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show  " aria-labelledby="panelsStayOpen-headingOne">
							<div className="accordion-body color-main ">
								Our Headphones are designed for music streaming while connected to phones, tablets, and laptops. It's not recommended that our portable Bluetooth headphones would be used to connect with a TV as these speakers are not equipped with apt-X-HD low latency audio codec and may cause audio-video delays.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">

								<span className="fw-bold" >Can I use them in PS4?</span>

							</button>
						</h2>
						<div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse color-main1" aria-labelledby="panelsStayOpen-headingTwo">
							<div className="accordion-body color-main1">
								You could use our JBL Live 460NC in your PS4 using the 3.5mm audio cable that you can connect to your Dualshock controller.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">

								<span className="fw-bold" >Can this connect to an airplane’s entertainment system?</span>

							</button>
						</h2>
						<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree color-main2 ">
							<div className="accordion-body color-main2">
								Our JBL Live 460NC has a 3.5mm audio jack and Bluetooth that you can use on most flights. Bluetooth headphones are considered to be short-range Bluetooth devices. The aircraft interference from short-term Bluetooth devices is minimal, so most of the time, they're allowed.

							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">

								<span className="fw-bold" >Can I mute myself from the headphones?</span>


							</button>
						</h2>
						<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree ">
							<div className="accordion-body color-main3">
								Our Brand Heahphones Live 460NC has no mute button. For more information about the headphones, check it out here: https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw19b14b94/pdfs/JBL_Live%20460NC_QSG_Multilingual.pdf
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">

								<span className="fw-bold" >Does this hava a headphone jack also??</span>


							</button>
						</h2>
						<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree color-main4">
							<div className="accordion-body color-main4">
								If you mean is there a wired connection option, the answer is YES. You can use the supplied 3.5 audio jack to connect the headphones directly to a phone or a computer using the 3.5 audio jack.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
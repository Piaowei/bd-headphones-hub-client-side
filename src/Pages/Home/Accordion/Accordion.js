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

								<span className="fw-bold" >WHERE CAN I FIND MY ITINERARY ONCE MY TRIP IS BOOKED?</span>

							</button>
						</h2>
						<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show  " aria-labelledby="panelsStayOpen-headingOne">
							<div className="accordion-body color-main ">
								Your itinerary as booked by Professional Travel a Direct Travel Company is available on our View Trip website with your specific reservation code as the login. Since we are directly connected to vendors’
								inventory systems (airlines, cruise lines, hotels, cars, rail, etc.), you will also be able to retrieve your information on their unique client sites, many of which offer a wealth of information to help you prepare for the trip ahead.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">

								<span className="fw-bold" >DO I NEED TRAVEL INSURANCE?</span>

							</button>
						</h2>
						<div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse color-main1" aria-labelledby="panelsStayOpen-headingTwo">
							<div className="accordion-body color-main1">
								Travel insurance is available and recommended to protect your travel investment. Many trips, such as tours and cruises, involve non-refundable funds paid months in advance. Travel insurance protects you from losing this investment. Perhaps even more important is the ‘during travel’ coverage and assistance that comes with the top-flight insurance companies we carry.

								Trip interruption due to illness or unforeseen circumstances can be very expensive, and medical care abroad is often not covered by domestic insurance plans. Also, an increasing number of countries require proof of medical insurance for travelers entering their country.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">

								<span className="fw-bold" >HOW DO I CANCEL A TRIP?</span>

							</button>
						</h2>
						<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree color-main2 ">
							<div className="accordion-body color-main2">
								Call us right away. If it’s after normal business hours, please contact the next involved travel supplier (airline, hotel, tour operator, cruise line) to cancel any reservations you will not be able to use. If you purchased travel insurance, please contact the insurance company’s 24-hour line to start the cancellation process and ensure your maximum refund.


							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">

								<span className="fw-bold" >HOW DO I KNOW I CAN TRUST THIS TRAVEL VENDOR?</span>


							</button>
						</h2>
						<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree ">
							<div className="accordion-body color-main3">
								Professional Travel a Direct Travel Company is extremely cautious when it comes to choosing our business partners and vendors. This vetting of travel suppliers and support of the ‘good ones’ over the past 50+ years has given us preferred access to the world’s top trusted suppliers. In turn, they trust us to represent and care for the reputations they have earned over the years and to deliver the same high standard of care to our mutual clients.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">

								<span className="fw-bold" >CAN YOU WORK WITHIN A CERTAIN BUDGET?</span>


							</button>
						</h2>
						<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree color-main4">
							<div className="accordion-body color-main4">
								Yes, we work within any and all realistic budgets, and an honest sharing of ideas and goals helps us immensely when making recommendations and suggested edits to travel plans.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
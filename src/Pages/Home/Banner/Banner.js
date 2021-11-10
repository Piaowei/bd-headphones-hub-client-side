import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/slider/hp1-slider-img1.jpg'
import banner2 from '../../../images/slider/hp1-slider-img2.jpg'
import banner3 from '../../../images/slider/hp1-slider-img3.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel>

                <Carousel.Item>
                    <div className="card bg-dark text-white  border-0 rounded-0">
                        <img src={banner3} className="card-img border-0" alt="..." />
                        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center  border-0">
                            <h1 className="card-title text-center banner-text">To travel is to live</h1>

                            <div> <h6>WE TRAVEL NOT TO SCAPE LIFE,BUT FOR LIFE NOT TO ESCAPE US. OUR SERVICE INSURE YOU A SAFETY & SATISFIED JOURNEY</h6>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="card bg-dark text-white  border-0 rounded-0">
                        <img src={banner2} className="card-img border-0" alt="..." />
                        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center  border-0">
                            <h1 className="card-title text-center banner-text ">Travel to the World</h1>

                            <div> <h6>WE TRAVEL NOT TO SCAPE LIFE,BUT FOR LIFE NOT TO ESCAPE US. OUR SERVICE INSURE YOU A SAFETY & SATISFIED JOURNEY</h6></div>

                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="card bg-dark text-white  border-0 rounded-0">
                        <img src={banner1} className="card-img border-0" alt="..." />
                        <div className="card-img-overlay d-flex justify-content-center align-items-center flex-column  border-0">
                            <h1 className="card-title text-center fs-1  banner-text ">Explore yourself in China</h1>
                            <div>
                                <h6>WE TRAVEL NOT TO SCAPE LIFE,BUT FOR LIFE NOT TO ESCAPE US. OUR SERVICE INSURE YOU A SAFETY & SATISFIED JOURNEY</h6>
                            </div>

                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>
            <br />
            <h3 className="top-rated pt-2 ">Search your Next Destination</h3>
            <div className="container-fluid pb-3 w-75 ">
                <div className="input-group mb-3 carts-home ">
                    <input type="text" className="form-control" placeholder="Place Name" aria-label="Course Name" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-primary" type="Button" id="button-addon2">Search</button>
                </div>
            </div>
        </>
    );
};

export default Banner;
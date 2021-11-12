import React from 'react';

import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Accordion from '../Accordion/Accordion';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import ReviewItems from '../ReviewItems/ReviewItems';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Accordion></Accordion>
            <ReviewItems></ReviewItems>
            <Footer></Footer>
        </div>
    );
};

export default Home;
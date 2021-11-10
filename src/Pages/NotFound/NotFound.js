import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg'
const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <Link to="/"><button className="btn btn-danger mt-3 mb-5">Go Back Home</button>
            </Link>
        </div>
    );
};

export default NotFound;
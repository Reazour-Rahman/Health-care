import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../../../images/404.jpg'

const NoResult = () => {
    return (
        <div>
            <div>
                <img style={{width:"100%"}} src={NotFound} alt="" />
            </div>
            <div className="d-flex justify-content-center">
                    <Link className="btn btn-danger text-center" to="/home">Go To Home</Link>
            </div>
        </div>
    );
};

export default NoResult;
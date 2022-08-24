import React from 'react';
import { useParams } from 'react-router-dom';



const BuyPack = () => {
    const { pack, price } = useParams();

    return (
        <div className='container' style={{ marginTop: '150px', marginBottom: '120px' }}>
            <div className="Pack text-center">
                <h2>Welcome to <span className='text-danger fw-bold'>{pack} </span> Pack</h2>
                <h6>Price : {price}</h6>
                <button className="btn btn-primary">Pay Now</button>
            </div>
        </div>
    );
};

export default BuyPack;
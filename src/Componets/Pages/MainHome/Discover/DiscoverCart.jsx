import { Zoom } from "react-reveal";
import React from 'react';

const DiscoverCart = ({ dis }) => {
    const { title, photo, disc } = dis;
    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <Zoom>
                <div className="shadow-lg " style={ { minHeight: '390px',borderRadius:'20px' } }>
                    <img src={ photo } alt={ title } className='w-100 d-block' style={ { height: '250px' } } />
                    <div className="title p-2">
                        <h5 className="fs-5 text-dark" style={{fontWeight:'500'}}>{ title }</h5>
                        <p className="text-secondary">{ disc }</p>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default DiscoverCart;
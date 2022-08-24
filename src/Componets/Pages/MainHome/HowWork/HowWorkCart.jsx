import React from 'react';
import Zoom from 'react-reveal/Zoom';

const HowWorkCart = ({ dis }) => {
    const { title, num, disc } = dis;
    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <Zoom>
                <div className="shadow-sm d-flex align-items-center">
                    <div>
                        <h1 className="fw-bosld" style={{ fontSize: '90px' }}>{num}</h1>
                    </div>
                    <div className="title ms-3">
                        <h5 className="text-capitalize fw-bold">{title}</h5>
                        <p className="text-secondary">{disc}</p>
                    </div>
                </div>
            </Zoom>

        </div>
    );
};

export default HowWorkCart;
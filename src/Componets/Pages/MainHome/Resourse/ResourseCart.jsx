import React from 'react';
import { Zoom } from 'react-reveal';


const ResourseCart = ({ dis }) => {
    const { title, photo, disc } = dis;
    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <Zoom>
                <div className="position-relative">
                    <div className="photo position-relative">
                        <img src={ photo } alt={ title } className='w-100 d-block position-relative"' style={ { height: '300px' } } />
                    </div>
                    <div className="title p-2 position-absolute top-50 start-50 translate-middle">
                        <h3 className='text-light'>{ title }</h3>
                        <h5 className="text-light">{ disc }</h5>
                    </div>
                </div>
            </Zoom>

        </div >
    );
};

export default ResourseCart;
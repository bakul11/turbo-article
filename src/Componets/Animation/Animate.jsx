import React from 'react';


const Animate = () => {
    return (
        <div className='col-lg-4 col-md-6  col-12'>
            <div className="movie--isloading mt-5">
                <div className="loading-image"></div>
                <div className="loading-content">
                    <div className="loading-text-container">
                        <div className="loading-main-text"></div>
                        <div className="loading-sub-text"></div>
                        <div className="loading-btn"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Animate;
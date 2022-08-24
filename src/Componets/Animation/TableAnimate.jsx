import React from 'react';

const TableAnimate = () => {
    return (
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
    );
};

export default TableAnimate;
import React from 'react';
import Slide from 'react-reveal/Slide';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const HeroSlide = () => {
    const navigate = useNavigate();
    const handleReading = () => {
        navigate('/blog');
    }

    return (
        <div className='container' style={{ marginTop: '150px' }}>
            <div className="row gy-5">
                <div className="col-lg-6">
                    <Slide right>
                        <div className="content-banner mt-5">
                            <h2 className='fw-bold '>Read <span className='text-danger'>The Article</span> <br /> to gain Knowledge</h2>
                            <h4 className='mb-3 mt-3 fs-5 text-primary'>The world's most popular Article base platform</h4>
                            <h5 className=' fs-6'>Turbo Dynamics connects a global community of 90 million readers and writers through the power of story.</h5>
                            <div className="btn-sec mt-4">
                                <button className="btn btn-primary rounded-pill" onClick={handleReading}>Start Reading <FontAwesomeIcon icon={faArrowRightToBracket} className='ms-2'></FontAwesomeIcon></button>
                                <button className="btn btn-danger ms-2 rounded-pill">Write Now <FontAwesomeIcon icon={faArrowRightToBracket} className='ms-2'></FontAwesomeIcon></button>
                            </div>
                        </div>
                    </Slide>
                </div>
                <div className="col-lg-6">
                    <Slide left>
                        <img src="https://cdn.dribbble.com/users/2097172/screenshots/12723178/media/9542c068fe71997fa18b52f6731fad78.gif" alt="Reading Book Logo" className='img-fluid m-0' />
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default HeroSlide;
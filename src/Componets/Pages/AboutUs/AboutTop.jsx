import React from 'react';
import about1 from '../../.././images/about1.jpg'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Slide } from 'react-reveal';

const AboutTop = () => {
    return (
        <div className='dd'>
            <div className="row gy-5">
                <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                    <Slide right>
                        <div className="about-item" style={{ marginTop: '150px' }}>
                            <h2 className='fw-bold '>Contact <span className='text-danger'>with us</span> <br /> <span className='text-danger'>24 Hours</span> Services</h2>
                            <p>The world's most popular Article base platform Turbo Dynamics connects a global community of 90 million readers and writers through the power of story.Do you want build your any project just contact with us</p>
                            <Link to='/'>
                                <button className="btn btn-primary ms-2 rounded-pill">Explore Now <FontAwesomeIcon icon={faArrowRightToBracket} className='ms-2'></FontAwesomeIcon></button>
                            </Link>
                        </div>
                    </Slide>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <Slide left>
                        <img src={about1} alt="about logo" className='img-fluid' />
                    </Slide>
                </div>
            </div>
        </div >
    );
};

export default AboutTop;
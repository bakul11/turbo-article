import React from 'react';
import './AboutCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Zoom } from 'react-reveal';

const AboutCart = ({ singleTeam }) => {
    const { name, title, photo, linkedin, fb, github, leader, opp } = singleTeam;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5 text-center">
            <Zoom>
                <div className={`team-items shadow-lg leader-${leader}`} id="teamCard">
                    <div className="team-logo">
                        <img src={photo} alt="team leader" className='img-fluid mx-auto rounded-pill' style={{ height: '100px', width: '100px' }} />
                    </div>
                    <div className="team-title">
                        <h6 className='fw-bold fs-5'>{name}</h6>
                        <p className='m-0'>{opp}</p>
                        <h6 className='text-primary'>{title}</h6>
                        <div className="social-media pt-3">
                            <ul className='d-flex justify-content-center flex-wrap'>
                                <li><a href={fb} className='ms-0' target="blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href={github} className='ms-3' target="blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                                <li><a href={linkedin} className='ms-3' target="blank"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default AboutCart;
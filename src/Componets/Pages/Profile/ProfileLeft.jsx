import React from 'react';
import auth from './../../Firebase/FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './ProfileLeft.css'
import useProfile from '../../../Hooks/useProfile';

const ProfileLeft = () => {
    const [user] = useAuthState(auth);
    const [old] = useProfile();
    return (
        <div className="profile shadow-lg rounded">
            <div className="top-profile text-center">
                <img src={old?.photoURL} alt="user" className='img-fuild rounded-pill mb-3 mt-3' style={{ height: '100px', width: '100px' }} />
                <h5 className='text-capitalize fw-bold'>{old?.displayName}</h5>
                <h6 className='text-capitalize'>{old?.occupation}</h6>
                <div className="contact-btn">
                    <button className="bg-primary border-0 rounded text-light fw-bold ps-2 ps-2 newBtn">Follow</button>
                    <button className="border border-primary rounded text-dark fw-bold ps-2 ps-2 ms-2 newBtn">Message</button>
                </div>
            </div>
            <hr />
            <div className="profile-social-link">
                <ul className='m-0 p-0'>
                    <li>
                        <span ><FontAwesomeIcon icon={faGlobe} /> Website</span>
                        <a href={old?.website} target="blank" className='ms-4'>www.facebook.com</a>

                    </li>
                    <li>
                        <span ><FontAwesomeIcon icon={faGithub} /> GitHub</span>
                        <a href={old?.github} target="blank" className='ms-4'>www.github.com</a>

                    </li>
                    <li>
                        <span ><FontAwesomeIcon icon={faLinkedinIn} /> Linkedin</span>
                        <a href={old?.linkedin} target="blank" className='ms-4'>www.linkedin.com</a>

                    </li>
                    <li>
                        <span ><FontAwesomeIcon icon={faInstagram} /> Instagram</span>
                        <a href={old?.instagram} target="blank" className='ms-4'>www.instagram.com</a>

                    </li>
                    <li>
                        <span ><FontAwesomeIcon icon={faFacebookF} /> Facebook</span>
                        <a href={old?.facebook} target="blank" className='ms-4'>www.facebook.com</a>

                    </li>

                </ul>
            </div>
        </div>
    );
};

export default ProfileLeft;
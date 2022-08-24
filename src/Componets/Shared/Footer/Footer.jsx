import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'
import paymentLogo from '../../../images/paymennt.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const date = new Date();
    const getDate = date.getFullYear();

    return (
        <div className="bg-dark mt-5">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="logo">
                            <Link to='/' className='text-decoration-none text-light text-capitalize mb-3  fw-bold d-block  fs-4'>Turbo Dynamics</Link>
                            <p className='fot-para fs-6'>The world's most popular Article base platform Turbo Dynamics connects a global community of 90 million readers and writers through the power of story.</p>

                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                        <div className="logo2">
                            <h5 className='text-light'>Our Content</h5>
                            <ul className=" fotMrnu m-0 p-0">
                                <li className="mt-2"><Link to="/" >Read article</Link></li>
                                <li className="mt-2"><Link to="/" >Buy Resourse</Link></li>
                                <li className="mt-2"><Link to="/" >Writing content</Link></li>
                                <li className="mt-2"><Link to="/" >Read Blog</Link></li>
                                <li className="mt-2"><Link to="/" >Free article</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                        <div className="logo2">
                            <h5 className='text-light'>Floow Us</h5>
                            <ul className=" fotMrnu m-0 p-0">
                                <li className="mt-2"><Link to="/" ><FontAwesomeIcon icon={faInstagram} className='me-2' />Instagram</Link></li>
                                <li className="mt-2"><Link to="/" ><FontAwesomeIcon icon={faFacebookF} className='me-2' />Facebook</Link></li>
                                <li className="mt-2"><Link to="/" ><FontAwesomeIcon icon={faTwitter} className='me-2' />Twitter</Link></li>
                                <li className="mt-2"><Link to="/" ><FontAwesomeIcon icon={faLinkedin} className='me-2' />Linkedin</Link></li>
                                <li className="mt-2"><Link to="/" ><FontAwesomeIcon icon={faYoutube} className='me-2' />Youtube</Link></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="logo">
                            <h5 className='text-light'>Contact with us</h5>
                            <ul className=" fotMrnu m-0 p-0">
                                <li className="mt-2"><Link to="/" ><FontAwesomeIcon icon={faMapMarker} className='me-2' />Navana Tour, Mirpur-10, Rk Road,Dhaka</Link></li>
                                <li className="mt-2"><Link to="/" ><FontAwesomeIcon icon={faEnvelopeOpenText} className='me-2' />turboContact@gmail.com</Link></li>
                                <li className="mt-2"><Link to="/" ><FontAwesomeIcon icon={faPhoneAlt} className='me-2' />+055-62869826362</Link></li>
                            </ul>
                            <div className="payment">
                                <img src={paymentLogo} alt="payment logo" className='img-fluid rounded mt-2' />
                            </div>
                        </div>
                    </div>
                    {/* copyright */}
                    <div className="head mt-5">
                        <hr className='text-light' />
                        <p className='text-center fs-6 text-secondary'>Copyright © Turbo Dynamics {getDate} all rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
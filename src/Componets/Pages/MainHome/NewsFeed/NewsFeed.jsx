import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const NewsFeed = () => {
    return (
        <div className='news_feed bg-primary'>
            <div className='container-fluid ps-5 pe-5'>
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12">
                        <div className="news-feed-title d-flex align-items-center">
                            <div className="logo">
                                <FontAwesomeIcon icon={faPaperPlane} className='text-light' size='2x' />
                            </div>
                            <div className="title ms-2 text-light">
                                <h6>Signup for Newsletter</h6>
                                <p className='mt-2'>We’ll never share your email address with a third-party</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <form action="/">
                            <div className="input-box position-relative">
                                <input type="email" placeholder='Email address' required className='pt-3 pb-3 w-100 rounded border-0 ps-2 emailInput' />
                                <div className="sub-btn position-absolute top-50 start-100 translate-middle">
                                    <input type="submit" className='bg-danger border-0 text-light rounded-end p-3 border-0 submitInput' />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="social-media2 mt-3">
                            <ul className='d-flex align-items-center social-content'>
                                <li className='ms-3'><Link to="/" className='text-light'><FontAwesomeIcon icon={faFacebookF} className='me-2' />Facebook</Link></li>
                                <li className='ms-3'><Link to="/" className='text-light'><FontAwesomeIcon icon={faYoutube} className='me-2' />Youtube</Link></li>
                                <li className='ms-3'><Link to="/" className='text-light'><FontAwesomeIcon icon={faTwitter} className='me-2' />Twitter</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsFeed;
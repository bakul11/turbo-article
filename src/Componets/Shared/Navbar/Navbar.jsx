import { signOut } from 'firebase/auth';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import auth from './../../Firebase/FirebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogoutNow = () => {
        signOut(auth);
        navigate('/');
        toast.success('Logout Success');
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-expend-lg topNav fixed-top ">
                <div className="container">
                    <Link className="navbar-brand fw-bold text-light" to="/"><FontAwesomeIcon icon={faBook} className='me-2 text-warning' /> Turbo Dynamics</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ms-5">
                                <NavLink className="nav-link text-light " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item ms-5">
                                <NavLink className="nav-link text-light" to="/pricing">Pricing</NavLink>
                            </li>
                            <li className="nav-item ms-5">
                                <NavLink className="nav-link text-light" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item ms-5">
                                <NavLink className="nav-link text-light" to="/premium">Premium</NavLink>
                            </li>
                            {
                                user &&
                                <li className="nav-item ms-5">
                                    <NavLink className="nav-link text-light" to="/dashboard">Dashboard</NavLink>

                                </li>
                            }
                            <li className="nav-item ms-5">
                                {
                                    user ? <span className="nav-link text-light" style={{ cursor: 'pointer' }} onClick={handleLogoutNow}>Logout</span> : <NavLink className="nav-link text-light" to="/login">Login</NavLink>
                                }
                            </li>
                            <li className="nav-item ms-5">
                                {
                                    user ? <div className="nav-link text-dark rounded-pill border border-light bg-warning text-uppercase text-center fw-bold align-self-center" style={{ height: '40px', width: '40px' }}>{user?.displayName?.slice(0, 2)}</div> : ''
                                }
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <ToastContainer />
        </div>
    );
};

export default Navbar;
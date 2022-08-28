import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../Firebase/FirebaseConfig';
import { Link } from 'react-router-dom';
import useProfile from '../../../Hooks/useProfile';


const ProfileRight = () => {
    const [user] = useAuthState(auth);
    const [old] = useProfile();

    return (
        <div className='shadow-lg rounded p-3'>
            <h5 className='text-decoration-underline text-primary mb-3'>Your Details:</h5>
            <div className="profil-items">
                <h6>Full Name : <span className='text-secondary ms-5'>{old?.displayName}</span></h6>
                <hr />
            </div>
            <div className="profil-items">
                <h6>Occupation: <span className='text-secondary ms-5 text-capitalize'>{old?.occupation}</span></h6>
                <hr />
            </div>
            <div className="profil-items">
                <h6>Email : <span className='text-secondary ms-5'>{old?.email}</span></h6>
                <hr />
            </div>
            <div className="profil-items">
                <h6>Phone : <span className='text-secondary ms-5'>{old?.phone}</span></h6>
                <hr />
            </div>
            <div className="profil-items">
                <h6>Present Address : <span className='text-secondary ms-5'>{old?.presentAddress}</span></h6>
                <hr />
            </div>
            <div className="profil-items">
                <h6>Parments  Address : <span className='text-secondary ms-5'>{old?.parmentAddress}</span></h6>
                <hr />
            </div>
            <div className="profil-items">
                <h6>Skills : <span className='text-secondary ms-5'>{old?.skills}</span></h6>
                <hr />
            </div>

            <div className="update-btn">
                <Link to='/editProfile'>
                    <button className="bg-primary border-0 rounded text-light fw-bold p-2 ms-3 newBtn">Update Profile</button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileRight;
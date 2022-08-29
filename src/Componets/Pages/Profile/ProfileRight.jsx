import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../Firebase/FirebaseConfig';
import { Link } from 'react-router-dom';



const ProfileRight = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className='shadow-lg rounded p-3'>
            <h5 className='text-decoration-underline text-primary mb-3'>Your Details:</h5>
            <div className="profil-items">
                <h6>Full Name : <span className='text-secondary ms-5'>{user?.displayName}</span></h6>
                <hr />
            </div>
            <div className="profil-items">
                <h6>Occupation: <span className='text-secondary ms-5 text-capitalize'>Developer</span></h6>
                <hr />
            </div>
            <div className="profil-items">
                <h6>Email : <span className='text-secondary ms-5'>{user?.email}</span></h6>
                <hr />
            </div>
            <div className="profil-items">
                <h6>Phone : <span className='text-secondary ms-5'>01791860562</span></h6>
                <hr />
            </div>
            <div className="profil-items">
                <h6>Present Address : <span className='text-secondary ms-5'>Navana tower,mirpur-10,Dhaka</span></h6>
                <hr />
            </div>
            <div className="profil-items">
                <h6>Parments  Address : <span className='text-secondary ms-5'>Navana tower,mirpur-10,Dhaka</span></h6>
                <hr />
            </div>
            <div className="profil-items">
                <h6>Skills : <span className='text-secondary ms-5'>JavaScript, React, Node</span></h6>
                <hr />
            </div>

            <div className="update-btn">
                <Link to='/editProfile'>
                    <button className="bg-danger border-0 rounded text-light fw-bold p-2 newBtn">Update Profile</button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileRight;
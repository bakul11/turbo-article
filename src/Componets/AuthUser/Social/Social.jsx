import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/FirebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from './../../../Hooks/useToken';




const Social = () => {
    const [signInWithGoogle, guser] = useSignInWithGoogle(auth);

    //    ===========================Redirect User===========================
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [token] = useToken(guser)
    if (token) {
        toast.success('Login is Successfully Done');
        navigate(from, { replace: true });
    }

    //    ===========================Redirect User===========================

    return (
        <div>
            <div className="div d-flex align-items-center justify-content-center mt-3">
                <div className="div1 bg-dark rounded-pill" style={{ height: '2px', width: '100px' }}></div>
                <div className='ms-2 me-2'>OR</div>
                <div className="div1 bg-dark rounded-pill" style={{ height: '2px', width: '100px' }}></div>
            </div>
            <button className="btn btn-success w-100 mt-2 rounded-pill" onClick={() => signInWithGoogle()}><FontAwesomeIcon icon={faGooglePlusG} className='me-2' /> Continue With Google</button>
            <ToastContainer />
        </div>
    );
};

export default Social;
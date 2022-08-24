import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Slide } from 'react-reveal';
import logo1 from '../../../images/login.webp'
import auth from '../../Firebase/FirebaseConfig';
import swal from 'sweetalert';
import { useNavigate, Link, useLocation } from 'react-router-dom'
import Social from '../Social/Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useToken from './../../../Hooks/useToken';




const Login = () => {
    const [email, setEmail] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPass, setShowPass] = useState(false);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);




    //Passord reset 
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    console.log(sending, error2, error, loading);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [token] = useToken(user)

    if (token) {
        swal("Login Success!", "Login is Successfully Done!", "success");
        navigate(from, { replace: true });
    }

    // const [token] = useToken(user)



    const handleResetPassword = async () => {

        if (email === '') {
            swal("Please FillUp Input!", "Please fillUp Input fill then try!", "success");
            return;
        }
        await sendPasswordResetEmail(email);
        swal("Please Check Email!", "Please Check your Email!", "success");
    }

    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);

    }

    //    ===========================Redirect User===========================



    //    ===========================Redirect User===========================


    //Password Show Hide 
    const handlePasswordShowHide = () => {
        setShowPass(showPass ? false : true)
    }


    return (
        <div className='container justSpace'>
            <div className="row gy-3">
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <Slide right>
                        <img src={logo1} alt="logo" className='img-fluid'></img>
                    </Slide>
                </div>
                <div className="col-lg-5 offset-lg-2 col-md-6 col-sm-12">
                    <Slide left>
                        <div className="register shadow-lg p-5">
                            <h3 className='text-center mb-3'>Login Now</h3>

                            {/* Form Start */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row gy-2">
                                    <div className="col-lg-12">
                                        <input {...register("email", { required: true })} type='email' placeholder='Email address' className='form-control' onChange={(e) => setEmail(e.target.value)} />
                                        {errors.email && <span className='text-danger'>Email is required</span>}
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='position-relative'>
                                            <input {...register("password", { required: true })} type={showPass ? 'text' : 'password'} placeholder='Your Password' className='form-control' />
                                            <div className="font-sec position-absolute top-50 end-0 translate-middle-y">
                                                <FontAwesomeIcon icon={faEye} style={{ cursor: 'pointer' }} className='me-3' onClick={handlePasswordShowHide}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                        {errors.password && <span className='text-danger'>Password is required</span>}
                                    </div>
                                    <p className='text-primary text-end' style={{ cursor: 'pointer' }} onClick={handleResetPassword}>Forget Password?</p>
                                    <div className="col-lg-12">
                                        <input type="submit" className='btn btn-danger w-100 rounded-pill' value='Login' />
                                    </div>
                                </div>
                            </form>
                            {/* Google Sign  */}
                            <Social></Social>
                            {/* Form End */}
                            {/* All Error Show List  */}
                            <p className='text-danger'>{error?.message?.includes('wrong-password') ? <span>Your Password is wrong</span> : ''}</p>
                            <p className='text-danger'>{error?.message?.includes('user-not-found') ? <span>You have no account</span> : ''}</p>
                            <p className='text-danger'>{error?.message?.includes('network-request') ? <span>Please Check your Internet</span> : ''}</p>
                            <p className='text-secondary text-center'>Need an account? <Link to='/register'>SignUp</Link></p>
                        </div>

                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Login;
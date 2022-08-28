import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-reveal';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../Firebase/FirebaseConfig';
import editPic from '../../../../images/editprofle.jpg'
import swal from 'sweetalert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);
    const screet_key = 'e7b3c92c06537e14d85d152ffd62709c';
    const currentUser = user?.email;
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const image = data?.photoURL[0];
        const formData = new FormData()
        formData.append('image', image);

        // post Api Calling methods
        const url = `https://api.imgbb.com/1/upload?key=${screet_key}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const photo = result.data.url;

                    const editAllDatasend = {
                        displayName: data.displayName,
                        email: data.email,
                        occupation: data.occupation,
                        presentAddress: data.presentAddress,
                        parmentAddress: data.parmentAddress,
                        phone: data.phone,
                        skills: data.skills,
                        website: data.website,
                        github: data.github,
                        facebook: data.facebook,
                        linkdedin: data.linkedin,
                        instagram: data.instagram,
                        photoURL: photo

                    }
                    //send data in database 
                    fetch(`http://localhost:5000/editProfile/${currentUser}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(editAllDatasend)
                    })
                        .then(res => res.json())
                        .then(getResult => {
                            setLoading(false);
                            swal('Post Successfully', 'Your Post is successfully done', 'success');
                            reset();
                            navigate('/profile');
                        })
                        .catch(err => {
                            swal('Post Fail', 'Your Post is fail done', 'error');
                            setLoading(false);
                        })
                }
            })

    }


    return (
        <div className='container justSpace'>
            <div className="row">
                <div className="col-lg-6" >
                    <Zoom right>
                        <img src={editPic} alt="edit Logo" className='img-fluid' />
                    </Zoom>
                </div>
                <div className="col-lg-6 rounded" >
                    <Zoom left>
                        <div className="shadow-lg p-3">
                            <div className="top-title mb-3">
                                <h4 className='text-center'>Edit Your Profle Details</h4>
                                <div className="des d-flex justify-content-center align-items-center">
                                    <div className='bg-danger rounded-circle' style={{ height: '5px', width: '100px' }}></div>
                                    <div className='ms-2 me-2'><FontAwesomeIcon icon={faUsers} /></div>
                                    <div className='bg-danger rounded-circle' style={{ height: '5px', width: '100px' }}></div>
                                </div>
                            </div>
                            {/* Edit form Start Form Here  */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row gy-2">
                                    <div className="col-lg-11">
                                        <input {...register("displayName", { required: true })} className='form-control' type='text' placeholder={user?.displayName} />
                                        {errors.fullName && <span className='text-danger'>Full Name is required</span>}
                                    </div>
                                    <div className="col-lg-11">
                                        <input {...register("email", { required: true })} className='form-control' type='email' placeholder={user?.email} />
                                        {errors.email && <span className='text-danger'>Email is required</span>}
                                    </div>
                                    <div className="col-lg-11">
                                        <input {...register("occupation", { required: true })} className='form-control' type='text' placeholder='Occupation' />
                                        {errors.occupation && <span className='text-danger'>Occupation is required</span>}
                                    </div>
                                    <div className="col-lg-11">
                                        <textarea {...register("presentAddress", { required: true })} className='form-control' rows="2" type='text' placeholder='Present Address' />
                                        {errors.presentAddress && <span className='text-danger'>Present Address is required</span>}
                                    </div>
                                    <div className="col-lg-11">
                                        <textarea {...register("parmentAddress", { required: true })} className='form-control' rows="2" type='text' placeholder='Parments Address' />
                                        {errors.parmentAddress && <span className='text-danger'>Parments Address is required</span>}
                                    </div>
                                    <div className="col-lg-11">
                                        <input {...register("phone", { required: true })} className='form-control' type='number' placeholder='Your Phone/Mobile' />
                                        {errors.phone && <span className='text-danger'>Phone is required</span>}
                                    </div>
                                    <div className="col-lg-11">
                                        <textarea {...register("skills", { required: true })} className='form-control' rows="2" type='text' placeholder='Your Skills' />
                                        {errors.skills && <span className='text-danger'>Skills is required</span>}
                                    </div>
                                    {/* Social Start  */}
                                    <div className="col-lg-11">
                                        <input {...register("website", { required: true })} className='form-control' type='text' placeholder="Your Website Link" />
                                        {errors.website && <span className='text-danger'>website is required</span>}
                                    </div>
                                    <div className="col-lg-11">
                                        <input {...register("github", { required: true })} className='form-control' type='text' placeholder="Your github Link" />
                                        {errors.github && <span className='text-danger'>github is required</span>}
                                    </div>
                                    <div className="col-lg-11">
                                        <input {...register("facebook", { required: true })} className='form-control' type='text' placeholder="Your Facebook Link" />
                                        {errors.facebook && <span className='text-danger'>facebook is required</span>}
                                    </div>
                                    <div className="col-lg-11">
                                        <input {...register("instagram", { required: true })} className='form-control' type='text' placeholder="Your instagram Link" />
                                        {errors.instagram && <span className='text-danger'>instagram is required</span>}
                                    </div>
                                    <div className="col-lg-11">
                                        <input {...register("linkedin", { required: true })} className='form-control' type='text' placeholder="Your linkedin Link" />
                                        {errors.linkedin && <span className='text-danger'>linkedin is required</span>}
                                    </div>






                                    <div className="col-lg-11">
                                        <input {...register("photoURL", { required: true })} className='form-control' type='file' placeholder='Title' />
                                        {errors.photoURL && <span className='text-danger'>Photo is required</span>}
                                    </div>

                                    <div className="col-lg-11">
                                        <input type="submit" value='Save Change' className='bg-primary text-light border-0 p-2 rounded' />
                                    </div>
                                </div>

                            </form>


                        </div>
                    </Zoom>
                </div>
            </div>
            {/* loadding */}
            {
                loading ? <span>Loading wait uploading....</span> : ''
            }
        </div>
    );
};

export default EditProfile;
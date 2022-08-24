import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import { Slide } from 'react-reveal';
import auth from './../../Firebase/FirebaseConfig';




const PostArticle = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit,  reset, formState: { errors } } = useForm();
    const screet_key = 'e7b3c92c06537e14d85d152ffd62709c';
    const userDisplayName = user?.displayName;
    const email = user?.email;
    const postDateTime = new Date().toLocaleString();


    //post article
    const onSubmit = data => {
        const image = data?.photo[0];
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
                    const getPhoto = result.data.url;
                    const postDBArticle = {
                        title: data.title,
                        userEmail: email,
                        disc: data.disc,
                        photo: getPhoto,
                        userDisplayName: userDisplayName,
                        postDateTime: postDateTime,

                    }
                    //send post in mongodb
                    fetch('https://whispering-ridge-30056.herokuapp.com/article', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(postDBArticle)
                    })
                        .then(res => res.json())
                        .then(getResult => {
                            swal('Post Successfully', 'Your Post is successfully done', 'success');
                            reset();
                            // navigate('/blog');
                        })
                        .catch(err => {
                            swal('Post Fail', 'Your Post is fail done', 'error');
                        })


                }
            })

    }

    return (
        <div className='mt-5 mb-5'>
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-6">
                        <Slide right>
                            <img src="https://media.istockphoto.com/vectors/designer-at-work-in-design-studio-working-at-computer-with-digital-vector-id1252892203?k=20&m=1252892203&s=170667a&w=0&h=lS6_f63wb7rVXNDanjnlIXSj4ER1DABKDnoD35JKaW4=" alt="post logo" className='img-fluid' />
                        </Slide>
                    </div>
                    <div className="col-lg-6">
                        <Slide left>
                            <h6 className='fs-5 text-primary mb-3'>Please Post Your article</h6>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row gy-2">
                                    <div className="col-lg-11">
                                        <input {...register("title", { required: true })} className='form-control' type='text' placeholder='Title' />
                                        {errors.title && <span className='text-danger'>Title is required</span>}
                                    </div>
                                    <div className="col-lg-11">
                                        <textarea {...register("disc", { required: true })} className='form-control' rows="3" type='text' placeholder='Discription' />
                                        {errors.disc && <span className='text-danger'>Discription is required</span>}
                                    </div>
                                    <div className="col-lg-11">
                                        <input {...register("photo", { required: true })} className='form-control' type='file' placeholder='Title' />
                                        {errors.photo && <span className='text-danger'>Photo is required</span>}
                                    </div>

                                    <div className="col-lg-11">
                                        <input type="submit" value='Post Now' className='bg-danger text-light border-0 p-2 rounded' />
                                    </div>
                                </div>

                            </form>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostArticle;